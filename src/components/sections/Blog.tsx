'use client';

import { useT } from '@/i18n/I18n';
import { ArrowUpRight, Newspaper } from 'lucide-react';

const placeholders = [
  {
    tag: 'Protocol',
    date: '2026.04.20',
    title_ko: '메인넷 v1 가동 — 데이터 마켓플레이스 베타 오픈',
    title_en: 'Mainnet v1 live — data marketplace beta opens',
  },
  {
    tag: 'Research',
    date: '2026.03.18',
    title_ko: 'SNP 기반 약물 반응성 예측의 한계와 분산 학습 가능성',
    title_en: 'Limits of SNP-based drug response prediction and federated learning',
  },
  {
    tag: 'Industry',
    date: '2026.02.05',
    title_ko: '게놈 산업의 800개 기업 — 표준화의 부재가 기회인 이유',
    title_en: 'The 800 genome companies — why the lack of standards is the opportunity',
  },
];

export default function Blog() {
  const t = useT();
  return (
    <section id="blog" className="section">
      <div className="container-page">
        <div className="flex flex-wrap gap-6 items-end justify-between">
          <div className="max-w-2xl">
            <div className="eyebrow">{t('blog.eyebrow')}</div>
            <h2 className="heading-lg mt-4">{t('blog.title')}</h2>
            <p className="body-muted mt-5 text-base sm:text-lg">{t('blog.lead')}</p>
          </div>
          <a href="#" className="btn-outline">
            {t('blog.cta')} <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {placeholders.map((p) => (
            <a
              href="#"
              key={p.title_ko}
              className="card group flex flex-col gap-4 hover:translate-y-[-2px] transition-transform"
            >
              <div className="aspect-[16/9] rounded-xl border border-white/5 bg-gradient-to-br from-cyan/10 to-bio/5 grid place-items-center">
                <Newspaper size={28} className="text-cyan-glow opacity-50" />
              </div>
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-slate-400 font-mono">
                <span className="text-cyan-glow">{p.tag}</span>
                <span>·</span>
                <span>{p.date}</span>
              </div>
              <div className="text-white font-semibold leading-snug group-hover:text-cyan-glow transition-colors">
                {p.title_ko}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-6 text-xs text-slate-500">{t('blog.placeholder')}</div>
      </div>
    </section>
  );
}
