'use client';

import { useState } from 'react';
import { useAccount, useBalance, useSwitchChain } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {
  Copy,
  Check,
  ExternalLink,
  Wallet as WalletIcon,
  Plus,
  AlertTriangle,
} from 'lucide-react';
import { ODIN_TOKEN, shortenAddress, formatTokenAmount } from '@/lib/token';
import { useT } from '@/i18n/I18n';

export default function TokenInfo() {
  const t = useT();
  const { address, isConnected, chainId } = useAccount();
  const { switchChain, isPending: isSwitching } = useSwitchChain();
  const [copied, setCopied] = useState(false);
  const [adding, setAdding] = useState(false);

  const isOnBsc = chainId === ODIN_TOKEN.chain.id;

  const { data: balance, isLoading: balLoading } = useBalance({
    address,
    token: ODIN_TOKEN.address,
    chainId: ODIN_TOKEN.chain.id,
    query: { enabled: isConnected, refetchInterval: 30_000 },
  });

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(ODIN_TOKEN.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  const addToWallet = async () => {
    type EthProvider = {
      request: (args: { method: string; params: unknown }) => Promise<unknown>;
    };
    const eth = (window as unknown as { ethereum?: EthProvider }).ethereum;
    if (!eth) return;
    setAdding(true);
    try {
      await eth.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: ODIN_TOKEN.address,
            symbol: ODIN_TOKEN.symbol,
            decimals: ODIN_TOKEN.decimals,
          },
        },
      });
    } catch {}
    setAdding(false);
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-midnight-800/50 to-midnight-900/60 p-6 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        {/* Left: token identity */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan to-bio shadow-glow">
              <span className="text-midnight-950 font-black text-lg">Ø</span>
            </div>
            <div>
              <div className="text-white text-lg font-bold leading-tight">
                {ODIN_TOKEN.name}
              </div>
              <div className="text-xs text-slate-400 mt-0.5 flex items-center gap-2">
                <span className="font-mono">{ODIN_TOKEN.symbol}</span>
                <span className="text-slate-600">·</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-yellow-300/20 bg-yellow-300/5 px-2 py-0.5 text-[10px] uppercase tracking-widest text-yellow-200/90">
                  BNB Chain
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 flex items-center gap-2">
            <code className="font-mono text-xs sm:text-sm text-slate-200 truncate flex-1">
              {ODIN_TOKEN.address}
            </code>
            <button
              type="button"
              onClick={copy}
              aria-label="copy contract address"
              className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 hover:bg-white/5 text-slate-300"
            >
              {copied ? <Check size={14} className="text-bio-glow" /> : <Copy size={14} />}
            </button>
            <a
              href={ODIN_TOKEN.explorerUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="view on BscScan"
              className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 hover:bg-white/5 text-slate-300"
            >
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <Stat
              label="Total Supply"
              value={`${ODIN_TOKEN.totalSupply.toLocaleString('en-US')}`}
              suffix={ODIN_TOKEN.symbol}
            />
            <Stat label="Decimals" value={String(ODIN_TOKEN.decimals)} />
            <Stat label="Network" value="BNB Chain" />
          </div>
        </div>

        {/* Right: connected wallet panel */}
        <div className="rounded-2xl border border-white/10 bg-midnight-950/40 p-5 flex flex-col">
          <div className="flex items-center gap-2 text-xs text-slate-400 uppercase tracking-widest font-mono">
            <WalletIcon size={12} /> Your Wallet
          </div>

          {!isConnected && (
            <div className="mt-4 flex-1 flex flex-col gap-4 justify-center items-start">
              <p className="text-sm text-slate-300">
                {t('token.connect_lead') ||
                  '지갑을 연결하면 보유한 ODIN 잔액을 확인할 수 있습니다.'}
              </p>
              <ConnectButton.Custom>
                {({ openConnectModal, mounted }) =>
                  mounted ? (
                    <button onClick={openConnectModal} className="btn-primary">
                      <WalletIcon size={16} /> Connect Wallet
                    </button>
                  ) : null
                }
              </ConnectButton.Custom>
            </div>
          )}

          {isConnected && !isOnBsc && (
            <div className="mt-4 flex-1 flex flex-col gap-4 justify-center items-start">
              <p className="text-sm text-amber-200/90 inline-flex items-center gap-2">
                <AlertTriangle size={14} /> Switch network to view your ODIN balance.
              </p>
              <button
                onClick={() => switchChain({ chainId: ODIN_TOKEN.chain.id })}
                disabled={isSwitching}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSwitching ? 'Switching…' : 'Switch to BNB Chain'}
              </button>
            </div>
          )}

          {isConnected && isOnBsc && (
            <div className="mt-4 flex-1 flex flex-col gap-4">
              <div>
                <div className="text-xs text-slate-500">{shortenAddress(address!)}</div>
                <div className="mt-2 text-3xl font-bold leading-none">
                  {balLoading || !balance ? (
                    <span className="text-slate-500">—</span>
                  ) : (
                    <span className="bg-gradient-to-r from-cyan-glow to-bio bg-clip-text text-transparent">
                      {formatTokenAmount(balance.value, balance.decimals)}
                    </span>
                  )}
                </div>
                <div className="mt-1 text-xs text-slate-400 font-mono">
                  {balance?.symbol ?? ODIN_TOKEN.symbol}
                </div>
              </div>

              <button
                onClick={addToWallet}
                disabled={adding}
                className="btn-outline w-full justify-center disabled:opacity-50"
              >
                <Plus size={14} /> {adding ? 'Adding…' : 'Add ODIN to MetaMask'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  suffix,
}: {
  label: string;
  value: string;
  suffix?: string;
}) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.02] px-3 py-3">
      <div className="text-[10px] uppercase tracking-widest text-slate-500 font-mono">
        {label}
      </div>
      <div className="mt-1.5 text-white font-semibold text-sm sm:text-base">
        {value}
        {suffix ? <span className="text-slate-400 font-normal ml-1 text-xs">{suffix}</span> : null}
      </div>
    </div>
  );
}
