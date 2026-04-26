'use client';

import { useT } from '@/i18n/I18n';
import { Users } from 'lucide-react';

const placeholders = [
  { initials: 'KD', role: 'CEO · Founder', focus: 'Genome × Blockchain' },
  { initials: 'JL', role: 'CTO', focus: 'Distributed Systems' },
  { initials: 'SH', role: 'Chief Science Officer', focus: 'Clinical Genomics' },
  { initials: 'MK', role: 'Head of Product', focus: 'Health Data UX' },
  { initials: 'YR', role: 'Head of Research', focus: 'Pharmacogenomics' },
  { initials: 'AC', role: 'Head of Compliance', focus: 'GDPR · PIPA' },
];

export default function Team() {
  const t = useT();
  return (
    <section id="team" className="section">
      <div className="container-page">
        <div className="max-w-3xl">
          <div className="eyebrow">{t('team.eyebrow')}</div>
          <h2 className="heading-lg mt-4">{t('team.title')}</h2>
          <p className="body-muted mt-5 text-base sm:text-lg">{t('team.lead')}</p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((p, i) => (
            <div key={p.initials + i} className="card flex items-center gap-4">
              <div
                className={`grid h-14 w-14 place-items-center rounded-2xl border border-white/10 text-white font-bold ${
                  i % 2 === 0
                    ? 'bg-gradient-to-br from-cyan/30 to-cyan/10 shadow-glow'
                    : 'bg-gradient-to-br from-bio/30 to-bio/10 shadow-glow-bio'
                }`}
              >
                {p.initials}
              </div>
              <div className="min-w-0">
                <div className="text-white font-semibold">{p.role}</div>
                <div className="text-xs text-slate-400 mt-0.5">{p.focus}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-xs text-slate-500 inline-flex items-center gap-2">
          <Users size={12} /> {t('team.placeholder')}
        </div>
      </div>
    </section>
  );
}
