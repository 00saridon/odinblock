'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Wallet, ChevronDown, AlertTriangle } from 'lucide-react';

export default function WalletButton({ full = false }: { full?: boolean }) {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openAccountModal, openChainModal, openConnectModal, mounted }) => {
        const ready = mounted;
        const connected = ready && account && chain;

        return (
          <div
            aria-hidden={!ready}
            className={ready ? '' : 'opacity-0 pointer-events-none select-none'}
            style={{ width: full ? '100%' : undefined }}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    type="button"
                    onClick={openConnectModal}
                    className={`btn-primary ${full ? 'w-full' : ''}`}
                  >
                    <Wallet size={16} /> Connect
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    type="button"
                    onClick={openChainModal}
                    className={`btn ${full ? 'w-full' : ''} bg-red-500/15 border border-red-400/30 text-red-200 hover:bg-red-500/20`}
                  >
                    <AlertTriangle size={16} /> Wrong network
                  </button>
                );
              }

              return (
                <div className={`flex items-center gap-2 ${full ? 'w-full' : ''}`}>
                  <button
                    type="button"
                    onClick={openChainModal}
                    className="hidden sm:inline-flex btn-outline !py-2 !px-3 text-xs"
                  >
                    {chain.hasIcon && chain.iconUrl && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={chain.iconUrl}
                        alt={chain.name}
                        width={14}
                        height={14}
                        style={{ background: chain.iconBackground }}
                        className="rounded-full"
                      />
                    )}
                    <span className="hidden md:inline">{chain.name}</span>
                    <ChevronDown size={12} />
                  </button>
                  <button
                    type="button"
                    onClick={openAccountModal}
                    className={`btn-outline !py-2 !px-3 text-xs ${full ? 'flex-1 justify-center' : ''}`}
                  >
                    <span className="font-mono">{account.displayName}</span>
                    {account.displayBalance ? (
                      <span className="hidden md:inline text-slate-400">
                        · {account.displayBalance}
                      </span>
                    ) : null}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
