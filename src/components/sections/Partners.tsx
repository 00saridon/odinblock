'use client';

import { useT } from '@/i18n/I18n';

const placeholders = [
  'CLINOMICS',
  'GENOM-X',
  'DNA LAB',
  'BIO-CHAIN',
  'HEALTH-TRUST',
  'PHARMA NET',
  'SEQ INSTITUTE',
  'MEDI VAULT',
];

export default function Partners() {
  const t = useT();
  return (
    <section className="section">
      <div className="container-page">
        <div className="max-w-3xl">
          <div className="eyebrow">{t('partners.eyebrow')}</div>
          <h2 className="heading-lg mt-4">{t('partners.title')}</h2>
          <p className="body-muted mt-5 text-base sm:text-lg">{t('partners.lead')}</p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {placeholders.map((name) => (
            <div
              key={name}
              className="aspect-[5/2] rounded-2xl border border-white/10 bg-white/[0.02] grid place-items-center text-slate-400 hover:text-white hover:bg-white/[0.04] transition-colors"
            >
              <span className="font-semibold tracking-[0.18em] text-xs sm:text-sm">
                {name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 text-xs text-slate-500">{t('partners.placeholder')}</div>
      </div>
    </section>
  );
}
