'use client';

import { useT } from '@/i18n/I18n';
import { Lock, Coins, BarChart3 } from 'lucide-react';

const items = [
  { icon: Lock, key: 'p1' },
  { icon: Coins, key: 'p2' },
  { icon: BarChart3, key: 'p3' },
] as const;

export default function Problem() {
  const t = useT();
  return (
    <section id="problem" className="section">
      <div className="container-page">
        <div className="max-w-3xl">
          <div className="eyebrow">{t('problem.eyebrow')}</div>
          <h2 className="heading-lg mt-4">
            {t('problem.title1')}{' '}
            <span className="text-cyan-glow">{t('problem.title2')}</span>
          </h2>
          <p className="body-muted mt-5 text-base sm:text-lg">{t('problem.lead')}</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map(({ icon: Icon, key }) => (
            <div key={key} className="card">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cyan/20 to-bio/10 border border-white/10">
                <Icon size={20} className="text-cyan-glow" />
              </div>
              <h3 className="heading-md mt-5 text-xl">{t(`problem.${key}.t`)}</h3>
              <p className="body-muted mt-3 text-sm">{t(`problem.${key}.d`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
