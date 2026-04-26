import { ShieldCheck, FileCheck2, Microscope, Users } from 'lucide-react';

const stats = [
  { v: '30억', l: '인간 게놈 염기쌍' },
  { v: '800+', l: '글로벌 게놈 산업 기업 (US 기준)' },
  { v: '100+', l: 'FDA 권고 약물 게놈 분석' },
  { v: '24/7', l: '온체인 데이터 검증' },
];

const trustBadges = [
  { icon: ShieldCheck, label: 'DID 기반 보안', desc: '분산 신원으로 데이터 권한 통제' },
  { icon: FileCheck2, label: '온체인 감사', desc: '거래·접근 이력의 완전한 추적성' },
  { icon: Microscope, label: '클리노믹스 기술', desc: '게놈 유전자지도 앵커' },
  { icon: Users, label: '의료·블록체인 자문단', desc: '국내외 전문가 네트워크' },
];

export default function Trust() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-midnight-800/50 to-midnight-900/50 p-8 sm:p-12">
          <div className="max-w-3xl">
            <div className="eyebrow">Trust</div>
            <h2 className="heading-lg mt-4">왜 ODINBLOCK인가</h2>
            <p className="body-muted mt-5 text-base sm:text-lg">
              의료·연구의 엄격함과 블록체인의 투명성을 결합합니다.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                <div className="text-3xl font-bold text-white">
                  <span className="bg-gradient-to-r from-cyan-glow to-bio bg-clip-text text-transparent">
                    {s.v}
                  </span>
                </div>
                <div className="mt-2 text-sm text-slate-400">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustBadges.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-start gap-3 rounded-xl p-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-cyan/20 to-bio/10 border border-white/10 shrink-0">
                  <Icon size={16} className="text-cyan-glow" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-white">{label}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
