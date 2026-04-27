import { bsc } from 'wagmi/chains';

export const ODIN_TOKEN = {
  address: '0x8A1AE594b0F8EDAAb660C0169903203cA6eE5103' as const,
  name: 'ODIN Coin',
  symbol: 'ODIN',
  decimals: 18,
  totalSupply: 5_000_000_000,
  chain: bsc,
  explorerUrl:
    'https://bscscan.com/token/0x8A1AE594b0F8EDAAb660C0169903203cA6eE5103',
} as const;

export function shortenAddress(addr: string, head = 6, tail = 4) {
  if (!addr || addr.length < head + tail + 2) return addr;
  return `${addr.slice(0, head)}…${addr.slice(-tail)}`;
}

export function formatTokenAmount(value: bigint, decimals: number, maxFrac = 4) {
  const negative = value < 0n;
  const abs = negative ? -value : value;
  const base = 10n ** BigInt(decimals);
  const whole = abs / base;
  const frac = abs % base;
  const wholeStr = whole.toLocaleString('en-US');
  if (frac === 0n || maxFrac === 0) return (negative ? '-' : '') + wholeStr;
  const fracStr = frac.toString().padStart(decimals, '0').slice(0, maxFrac).replace(/0+$/, '');
  if (!fracStr) return (negative ? '-' : '') + wholeStr;
  return `${negative ? '-' : ''}${wholeStr}.${fracStr}`;
}
