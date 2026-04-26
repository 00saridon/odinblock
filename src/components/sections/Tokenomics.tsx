const allocations = [
  { label: 'Reward Pool', pct: 40, color: '#22D3EE', desc: '데이터 제공자 보상' },
  { label: 'Buyer Liquidity', pct: 20, color: '#10B981', desc: '수요 기관 결제 풀' },
  { label: 'Company Reserve', pct: 15, color: '#0EA5E9', desc: '운영·확장 준비금' },
  { label: 'Team & Advisors', pct: 12, color: '#34D399', desc: '베스팅 4년' },
  { label: 'Ecosystem & Partners', pct: 8, color: '#0284C7', desc: '제휴·연구 보조금' },
  { label: 'Marketing', pct: 5, color: '#059669', desc: '커뮤니티·캠페인' },
];

const utility = [
  '데이터 거래 결제 통화',
  '제공자 보상 분배',
  '거버넌스 투표권',
  '검증자 스테이킹',
];

export default function Tokenomics() {
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
          <div className="eyebrow">Tokenomics</div>
          <h2 className="heading-lg mt-4">ODIN 토큰 — 데이터 경제의 결제 단위</h2>
          <p className="body-muted mt-5 text-base sm:text-lg">
            ODIN은 데이터의 흐름과 가치 분배를 매개합니다. 총발행량의 40%가 데이터
            제공자 보상에 직접 할당됩니다.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5 items-center">
          <div className="lg:col-span-2 flex justify-center">
            <DonutChart segments={segments} />
          </div>

          <div className="lg:col-span-3 space-y-3">
            {segments.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3"
              >
                <div
                  className="h-3 w-3 rounded-sm shrink-0"
                  style={{ background: s.color }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-white font-semibold">{s.label}</div>
                    <div className="font-mono text-cyan-glow">{s.pct}%</div>
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-br from-midnight-800/40 to-midnight-900/40 p-6 sm:p-8">
          <div className="text-xs uppercase tracking-widest text-slate-400 font-mono">
            Token Utility
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {utility.map((u) => (
              <div
                key={u}
                className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm text-slate-200"
              >
                {u}
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
}: {
  segments: { label: string; pct: number; color: string; start: number; end: number }[];
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
              key={s.label}
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
            Total Supply
          </div>
          <div className="text-3xl font-bold text-white mt-1">100%</div>
        </div>
      </div>
    </div>
  );
}
