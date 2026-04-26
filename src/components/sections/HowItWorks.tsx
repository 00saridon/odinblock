'use client';

import { useT } from '@/i18n/I18n';
import { User, Database, Building2, ArrowRight, type LucideIcon } from 'lucide-react';

type Actor = {
  icon: LucideIcon;
  badge: string;
  key: 'a1' | 'a2' | 'a3';
  color: 'cyan' | 'bio';
};

const actors: Actor[] = [
  { icon: User, badge: 'Provider', key: 'a1', color: 'cyan' },
  { icon: Database, badge: 'Protocol', key: 'a2', color: 'bio' },
  { icon: Building2, badge: 'Demand', key: 'a3', color: 'cyan' },
];

export default function HowItWorks() {
  const t = useT();
  return (
    <section id="how" className="section">
      <div className="container-page">
        <div className="max-w-3xl">
          <div className="eyebrow">{t('how.eyebrow')}</div>
          <h2 className="heading-lg mt-4">{t('how.title')}</h2>
          <p className="body-muted mt-5 text-base sm:text-lg">{t('how.lead')}</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-5 items-stretch">
          {actors.map((actor, i) => (
            <div key={actor.key} className="md:col-span-1 contents md:contents-none">
              <ActorCard actor={actor} t={t} />
              {i < actors.length - 1 && (
                <div className="hidden md:flex items-center justify-center text-slate-500">
                  <ArrowRight size={22} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-br from-midnight-800/40 to-midnight-900/40 p-6 sm:p-8">
          <div className="grid gap-6 md:grid-cols-3 text-sm">
            {(['s1', 's2', 's3'] as const).map((s, i) => (
              <div key={s}>
                <div className="font-mono text-xs text-cyan-glow uppercase tracking-widest">
                  Step {i + 1}
                </div>
                <div className="mt-2 text-white font-semibold">{t(`how.${s}.t`)}</div>
                <div className="mt-1 text-slate-400">{t(`how.${s}.d`)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ActorCard({ actor, t }: { actor: Actor; t: (s: string) => string }) {
  const { icon: Icon, badge, key, color } = actor;
  const accent = color === 'cyan' ? 'text-cyan-glow' : 'text-bio-glow';
  const ring = color === 'cyan' ? 'shadow-glow' : 'shadow-glow-bio';
  return (
    <div className="card md:col-span-1 flex-1 flex flex-col">
      <div className="flex items-center justify-between">
        <div
          className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cyan/20 to-bio/10 border border-white/10 ${ring}`}
        >
          <Icon size={20} className={accent} />
        </div>
        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-mono">
          {badge}
        </span>
      </div>
      <h3 className="mt-5 text-white font-semibold text-lg">{t(`how.${key}.t`)}</h3>
      <p className="body-muted mt-2 text-sm">{t(`how.${key}.d`)}</p>
    </div>
  );
}
