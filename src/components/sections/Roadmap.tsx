'use client';

import { useI18n } from '@/i18n/I18n';
import { CheckCircle2, Circle, CircleDot } from 'lucide-react';

type Phase = {
  period: string;
  title: string;
  status: 'done' | 'in-progress' | 'upcoming';
  ko: string[];
  en: string[];
};

const phases: Phase[] = [
  {
    period: '2024 H1',
    title: 'Genesis',
    status: 'done',
    ko: ['프로젝트 설계 및 기술 백서 v1', '핵심 팀 구성', '초기 자문단 영입'],
    en: ['Project design and whitepaper v1', 'Core team formation', 'Initial advisors'],
  },
  {
    period: '2024 H2',
    title: 'Foundation',
    status: 'done',
    ko: ['데이터 모델·DID 스펙 확정', '테스트넷 v1 가동', '클리노믹스 파트너십'],
    en: ['Data model and DID spec', 'Testnet v1 launch', 'Clinomics partnership'],
  },
  {
    period: '2025 H1',
    title: 'Network',
    status: 'in-progress',
    ko: ['메인넷 런칭', 'ODIN 토큰 TGE', '데이터 마켓플레이스 v1 베타'],
    en: ['Mainnet launch', 'ODIN token TGE', 'Marketplace v1 beta'],
  },
  {
    period: '2025 H2',
    title: 'Adoption',
    status: 'upcoming',
    ko: ['연구·의료기관 온보딩', '글로벌 거래소 상장', '거버넌스 시작'],
    en: ['Research/medical onboarding', 'Global exchange listings', 'Governance launch'],
  },
  {
    period: '2026+',
    title: 'Expansion',
    status: 'upcoming',
    ko: ['글로벌 시장 확장', '다국가 의료 데이터 인터페이스', 'AI 모델 학습 인프라'],
    en: ['Global expansion', 'Multi-country medical data interface', 'AI model training infra'],
  },
];

export default function Roadmap() {
  const { lang, t } = useI18n();
  const statusMap = {
    done: { Icon: CheckCircle2, color: 'text-bio-glow', label: t('roadmap.done') },
    'in-progress': { Icon: CircleDot, color: 'text-cyan-glow', label: t('roadmap.progress') },
    upcoming: { Icon: Circle, color: 'text-slate-500', label: t('roadmap.upcoming') },
  } as const;

  return (
    <section id="roadmap" className="section">
      <div className="container-page">
        <div className="max-w-3xl">
          <div className="eyebrow">{t('roadmap.eyebrow')}</div>
          <h2 className="heading-lg mt-4">{t('roadmap.title')}</h2>
          <p className="body-muted mt-5 text-base sm:text-lg">{t('roadmap.lead')}</p>
        </div>

        <div className="mt-14 relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/40 via-bio/30 to-transparent" />

          <div className="space-y-10">
            {phases.map((phase, i) => {
              const s = statusMap[phase.status];
              const isLeft = i % 2 === 0;
              const items = lang === 'en' ? phase.en : phase.ko;
              return (
                <div key={phase.title} className="relative grid sm:grid-cols-2 gap-6">
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-2 grid place-items-center">
                    <div className="h-3 w-3 rounded-full bg-cyan-glow shadow-glow ring-4 ring-midnight-900" />
                  </div>

                  <div
                    className={`pl-12 sm:pl-0 ${
                      isLeft ? 'sm:pr-12 sm:text-right' : 'sm:col-start-2 sm:pl-12'
                    }`}
                  >
                    <div className="card inline-block text-left w-full">
                      <div className="flex items-center gap-2">
                        <s.Icon size={16} className={s.color} />
                        <span
                          className={`text-xs uppercase tracking-widest font-mono ${s.color}`}
                        >
                          {s.label}
                        </span>
                      </div>
                      <div className="mt-3 flex items-baseline justify-between gap-2">
                        <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
                        <span className="font-mono text-xs text-slate-400">{phase.period}</span>
                      </div>
                      <ul className="mt-4 space-y-2 text-sm text-slate-300">
                        {items.map((it, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1 w-1 rounded-full bg-cyan-glow shrink-0" />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
