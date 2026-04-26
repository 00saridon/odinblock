'use client';

import { useT } from '@/i18n/I18n';
import { Fingerprint, Network, Coins, ShieldCheck } from 'lucide-react';

const pillars = [
  { icon: Fingerprint, key: 'p1' },
  { icon: Network, key: 'p2' },
  { icon: Coins, key: 'p3' },
  { icon: ShieldCheck, key: 'p4' },
] as const;

export default function Solution() {
  const t = useT();
  return (
    <section id="solution" className="section relative">
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
      <div className="container-page relative">
        <div className="max-w-3xl">
          <div className="eyebrow">{t('solution.eyebrow')}</div>
          <h2 className="heading-lg mt-4">
            {t('solution.title1')}
            <br />
            <span className="bg-gradient-to-r from-cyan-glow to-bio bg-clip-text text-transparent">
              {t('solution.title2')}
            </span>
          </h2>
          <p className="body-muted mt-5 text-base sm:text-lg">{t('solution.lead')}</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, key }, i) => (
            <div key={key} className="card relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-cyan/15 to-bio/10 blur-2xl" />
              <div className="relative">
                <div className="text-xs text-slate-500 font-mono">0{i + 1}</div>
                <div className="mt-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cyan/20 to-bio/10 border border-white/10">
                  <Icon size={20} className="text-cyan-glow" />
                </div>
                <h3 className="heading-md mt-5 text-lg">{t(`solution.${key}.t`)}</h3>
                <p className="body-muted mt-3 text-sm">{t(`solution.${key}.d`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
