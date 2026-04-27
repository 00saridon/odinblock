import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, polygon, base, arbitrum, sepolia } from 'wagmi/chains';

// Falls back to a placeholder so the build doesn't crash when the secret
// is unset. WalletConnect protocol won't actually work with the placeholder,
// but injected wallets (MetaMask, Coinbase, etc.) will.
const projectId =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ||
  '00000000000000000000000000000000';

export const wagmiConfig = getDefaultConfig({
  appName: 'ODINBLOCK',
  appDescription: 'Blockchain genome data platform',
  appUrl: 'https://odinblock.com',
  appIcon: 'https://odinblock.com/favicon.ico',
  projectId,
  chains: [mainnet, polygon, base, arbitrum, sepolia],
  ssr: false,
});
