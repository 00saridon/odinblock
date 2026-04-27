import type { Metadata, Viewport } from 'next';
import './globals.css';
import { I18nProvider } from '@/i18n/I18n';
import Web3Providers from '@/components/Web3Providers';

const SITE_URL = 'https://odinblock.com';
const TITLE = 'ODINBLOCK — 블록체인 게놈 데이터 플랫폼';
const DESCRIPTION =
  '오딘블록은 블록체인 기반 게놈·건강 데이터 인프라입니다. DID로 개인 정보를 보호하면서 데이터 제공자에게 보상을 분배하고, 연구·의료기관에 신뢰 가능한 데이터 액세스를 제공합니다.';
const OG_IMAGE = `${SITE_URL}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: '%s · ODINBLOCK' },
  description: DESCRIPTION,
  keywords: [
    '오딘블록',
    'ODINBLOCK',
    '블록체인',
    '게놈',
    '유전자',
    '건강 데이터',
    'DID',
    '의료 데이터',
    'Web3 헬스케어',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: SITE_URL,
    siteName: 'ODINBLOCK',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'ODINBLOCK' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  icons: { icon: '/favicon.ico' },
  verification: {
    other: {
      'naver-site-verification': '4c18a19ab5445dd79cc9a7efb3b2c1b56fe10c03',
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#0B1020',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Web3Providers>
          <I18nProvider>{children}</I18nProvider>
        </Web3Providers>
      </body>
    </html>
  );
}
