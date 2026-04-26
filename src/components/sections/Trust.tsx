'use client';

import { useT } from '@/i18n/I18n';
import { ShieldCheck, FileCheck2, Microscope, Users } from 'lucide-react';

const stats = [
  { v: '3,000,000,000', key: 's1' },
  { v: '800+', key: 's2' },
  { v: '100+', key: 's3' },
  { v: '24/7', key: 's4' },
] as const;

const badges = [
  { icon: ShieldCheck, key: 'b1' },
  { icon: FileCheck2, key: 'b2' },
  { icon: Microscope, key: 'b3' },
  { icon: Users, key: 'b4' },
] as const;

export default function Trust() {
  const t = useT();
  return (
    <section className="section">
      <div className="container-page">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-midnight-800/50 to-midnight-900/50 p-8 sm:p-12">
          <div className="max-w-3xl">
            <div className="eyebrow">{t('trust.eyebrow')}</div>
            <h2 className="heading-lg mt-4">{t('trust.title')}</h2>
            <p className="body-muted mt-5 text-base sm:text-lg">{t('trust.lead')}</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.key} className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                <div className="text-3xl font-bold text-white">
                  <span className="bg-gradient-to-r from-cyan-glow to-bio bg-clip-text text-transparent">
                    {s.v}
                  </span>
                </div>
                <div className="mt-2 text-sm text-slate-400">{t(`trust.${s.key}`)}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {badges.map(({ icon: Icon, key }) => (
              <div key={key} className="flex items-start gap-3 rounded-xl p-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-cyan/20 to-bio/10 border border-white/10 shrink-0">
                  <Icon size={16} className="text-cyan-glow" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-white">
                    {t(`trust.${key}.t`)}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">{t(`trust.${key}.d`)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
