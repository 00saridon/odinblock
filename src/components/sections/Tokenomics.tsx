'use client';

import { useT } from '@/i18n/I18n';

type AllocKey = 'reward' | 'buyer' | 'reserve' | 'team' | 'eco' | 'mkt';

const allocations: { key: AllocKey; pct: number; color: string }[] = [
  { key: 'reward', pct: 40, color: '#22D3EE' },
  { key: 'buyer', pct: 20, color: '#10B981' },
  { key: 'reserve', pct: 15, color: '#0EA5E9' },
  { key: 'team', pct: 12, color: '#34D399' },
  { key: 'eco', pct: 8, color: '#0284C7' },
  { key: 'mkt', pct: 5, color: '#059669' },
];

export default function Tokenomics() {
  const t = useT();
  let cum = 0;
  const segments = allocations.map((a) => {
    const start = cum;
    cum += a.pct;
    return { ...a, start, end: cum };
  });

  return (
    <section id="token" className="section relative">
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
      <div className="container-page relative">
        <div className="max-w-3xl">
          <div className="eyebrow">{t('token.eyebrow')}</div>
          <h2 className="heading-lg mt-4">{t('token.title')}</h2>
          <p className="body-muted mt-5 text-base sm:text-lg">{t('token.lead')}</p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5 items-center">
          <div className="lg:col-span-2 flex justify-center">
            <DonutChart segments={segments} totalLabel={t('token.total')} />
          </div>

          <div className="lg:col-span-3 space-y-3">
            {segments.map((s) => (
              <div
                key={s.key}
                className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3"
              >
                <div
                  className="h-3 w-3 rounded-sm shrink-0"
                  style={{ background: s.color }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-white font-semibold">{t(`token.a.${s.key}`)}</div>
                    <div className="font-mono text-cyan-glow">{s.pct}%</div>
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {t(`token.a.${s.key}.d`)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-br from-midnight-800/40 to-midnight-900/40 p-6 sm:p-8">
          <div className="text-xs uppercase tracking-widest text-slate-400 font-mono">
            {t('token.utility_title')}
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {(['u1', 'u2', 'u3', 'u4'] as const).map((u) => (
              <div
                key={u}
                className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm text-slate-200"
              >
                {t(`token.${u}`)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DonutChart({
  segments,
  totalLabel,
}: {
  segments: { key: string; pct: number; color: string; start: number; end: number }[];
  totalLabel: string;
}) {
  const r = 70;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative">
      <svg width="240" height="240" viewBox="-100 -100 200 200" className="-rotate-90">
        <circle cx="0" cy="0" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="22" />
        {segments.map((s) => {
          const dash = (s.pct / 100) * c;
          const offset = -((s.start / 100) * c);
          return (
            <circle
              key={s.key}
              cx="0"
              cy="0"
              r={r}
              fill="none"
              stroke={s.color}
              strokeWidth="22"
              strokeDasharray={`${dash} ${c - dash}`}
              strokeDashoffset={offset}
              strokeLinecap="butt"
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <div className="font-mono text-xs text-slate-400 uppercase tracking-widest">
            {totalLabel}
          </div>
          <div className="text-3xl font-bold text-white mt-1">100%</div>
        </div>
      </div>
    </div>
  );
}
