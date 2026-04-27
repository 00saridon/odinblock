import { http } from 'wagmi';
import { bsc, mainnet, polygon, base, arbitrum, sepolia } from 'wagmi/chains';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  injectedWallet,
  metaMaskWallet,
  coinbaseWallet,
  rainbowWallet,
  trustWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';

const projectId =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ||
  '00000000000000000000000000000000';
const hasRealProjectId = projectId !== '00000000000000000000000000000000';

// Always-available wallets that don't require a WalletConnect project ID.
const baseWallets = [injectedWallet, metaMaskWallet, coinbaseWallet];
// WC-based wallets only when a real project ID is configured.
const wcWallets = hasRealProjectId
  ? [walletConnectWallet, rainbowWallet, trustWallet]
  : [];

export const wagmiConfig = getDefaultConfig({
  appName: 'ODINBLOCK',
  appDescription: 'Blockchain genome data platform',
  appUrl: 'https://odinblock.com',
  appIcon: 'https://odinblock.com/favicon.ico',
  projectId,
  chains: [bsc, mainnet, polygon, base, arbitrum, sepolia],
  ssr: false,
  wallets: [
    {
      groupName: 'Recommended',
      wallets: [...baseWallets, ...wcWallets],
    },
  ],
  transports: {
    [bsc.id]: http('https://bsc-dataseed.binance.org'),
    [mainnet.id]: http('https://cloudflare-eth.com'),
    [polygon.id]: http('https://polygon-rpc.com'),
    [base.id]: http('https://mainnet.base.org'),
    [arbitrum.id]: http('https://arb1.arbitrum.io/rpc'),
    [sepolia.id]: http('https://ethereum-sepolia-rpc.publicnode.com'),
  },
});
