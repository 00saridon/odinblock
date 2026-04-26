import { Fingerprint, Network, Coins, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    icon: Fingerprint,
    title: 'DID 기반 데이터 소유권',
    desc: '개인이 발급한 분산 신원으로 게놈·건강 데이터의 접근 권한을 직접 통제합니다.',
  },
  {
    icon: Network,
    title: 'PTP 게놈 데이터 생태계',
    desc: '클리노믹스 게놈 유전자지도 기술을 앵커로, 검증된 데이터를 분산 원장에 연결합니다.',
  },
  {
    icon: Coins,
    title: '토큰 인센티브',
    desc: '데이터 제공·검증·구매가 ODIN 토큰으로 정산되며, 가치 분배가 공정해집니다.',
  },
  {
    icon: ShieldCheck,
    title: '프라이버시 보존 액세스',
    desc: '원본 데이터를 공개하지 않고도 연구·의료기관이 통계·모델을 학습할 수 있습니다.',
  },
];

export default function Solution() {
  return (
    <section id="solution" className="section relative">
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
      <div className="container-page relative">
        <div className="max-w-3xl">
          <div className="eyebrow">Solution</div>
          <h2 className="heading-lg mt-4">
            데이터 주권과 보상을
            <br />
            <span className="bg-gradient-to-r from-cyan-glow to-bio bg-clip-text text-transparent">
              체인 위에 새로 설계합니다.
            </span>
          </h2>
          <p className="body-muted mt-5 text-base sm:text-lg">
            ODINBLOCK은 게놈 데이터의 주체·연구자·제공자를 잇는 분산 마켓플레이스입니다.
            네 가지 핵심 축으로 시장을 재설계합니다.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="card relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-cyan/15 to-bio/10 blur-2xl" />
              <div className="relative">
                <div className="text-xs text-slate-500 font-mono">0{i + 1}</div>
                <div className="mt-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cyan/20 to-bio/10 border border-white/10">
                  <Icon size={20} className="text-cyan-glow" />
                </div>
                <h3 className="heading-md mt-5 text-lg">{title}</h3>
                <p className="body-muted mt-3 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
