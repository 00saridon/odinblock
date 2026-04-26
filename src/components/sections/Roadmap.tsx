import { CheckCircle2, Circle, CircleDot } from 'lucide-react';

const phases = [
  {
    period: '2024 H1',
    title: 'Genesis',
    status: 'done',
    items: ['프로젝트 설계 및 기술 백서 v1', '핵심 팀 구성', '초기 자문단 영입'],
  },
  {
    period: '2024 H2',
    title: 'Foundation',
    status: 'done',
    items: ['데이터 모델·DID 스펙 확정', '테스트넷 v1 가동', '클리노믹스 파트너십'],
  },
  {
    period: '2025 H1',
    title: 'Network',
    status: 'in-progress',
    items: ['메인넷 런칭', 'ODIN 토큰 TGE', '데이터 마켓플레이스 v1 베타'],
  },
  {
    period: '2025 H2',
    title: 'Adoption',
    status: 'upcoming',
    items: ['연구·의료기관 온보딩', '글로벌 거래소 상장', '거버넌스 시작'],
  },
  {
    period: '2026+',
    title: 'Expansion',
    status: 'upcoming',
    items: ['글로벌 시장 확장', '다국가 의료 데이터 인터페이스', 'AI 모델 학습 인프라'],
  },
];

const statusMap = {
  done: { Icon: CheckCircle2, color: 'text-bio-glow', label: 'Completed' },
  'in-progress': { Icon: CircleDot, color: 'text-cyan-glow', label: 'In progress' },
  upcoming: { Icon: Circle, color: 'text-slate-500', label: 'Upcoming' },
} as const;

export default function Roadmap() {
  return (
    <section id="roadmap" className="section">
      <div className="container-page">
        <div className="max-w-3xl">
          <div className="eyebrow">Roadmap</div>
          <h2 className="heading-lg mt-4">단계적으로, 그러나 빠르게</h2>
          <p className="body-muted mt-5 text-base sm:text-lg">
            기반부터 글로벌 확장까지 — 5단계로 시장에 진입합니다.
          </p>
        </div>

        <div className="mt-14 relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/40 via-bio/30 to-transparent" />

          <div className="space-y-10">
            {phases.map((phase, i) => {
              const s = statusMap[phase.status as keyof typeof statusMap];
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={phase.title}
                  className={`relative grid sm:grid-cols-2 gap-6 ${isLeft ? '' : ''}`}
                >
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
                        <span className={`text-xs uppercase tracking-widest font-mono ${s.color}`}>
                          {s.label}
                        </span>
                      </div>
                      <div className="mt-3 flex items-baseline justify-between gap-2">
                        <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
                        <span className="font-mono text-xs text-slate-400">{phase.period}</span>
                      </div>
                      <ul className="mt-4 space-y-2 text-sm text-slate-300">
                        {phase.items.map((it) => (
                          <li key={it} className="flex items-start gap-2">
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
