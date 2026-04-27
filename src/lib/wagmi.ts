import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, polygon, base, arbitrum, sepolia } from 'wagmi/chains';

const projectId =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? 'odinblock-placeholder';

export const wagmiConfig = getDefaultConfig({
  appName: 'ODINBLOCK',
  appDescription: 'Blockchain genome data platform',
  appUrl: 'https://odinblock.com',
  appIcon: 'https://odinblock.com/favicon.ico',
  projectId,
  chains: [mainnet, polygon, base, arbitrum, sepolia],
  ssr: false,
});
