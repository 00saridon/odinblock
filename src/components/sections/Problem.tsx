import { Lock, Coins, BarChart3 } from 'lucide-react';

const problems = [
  {
    icon: Lock,
    title: '데이터 주권의 부재',
    desc: '개인의 게놈·건강 데이터가 본인 동의 없이 수집·이용되어도 통제할 수단이 없습니다. 분산된 의료 시스템 사이에 데이터가 갇혀 환자 본인이 접근하기조차 어렵습니다.',
  },
  {
    icon: Coins,
    title: '데이터 제공자에 대한 보상 없음',
    desc: '데이터를 제공한 개인은 어떠한 보상도 받지 못하고, 그 가치는 일부 기관·기업에 귀속됩니다. 정당한 분배 메커니즘이 부재합니다.',
  },
  {
    icon: BarChart3,
    title: '연구 활용의 비효율',
    desc: '제약·바이오 연구는 표본 부족과 데이터 신뢰도 문제로 정체됩니다. 검증 가능한 데이터 마켓이 없어 거래 비용이 비대칭적으로 큽니다.',
  },
];

export default function Problem() {
  return (
    <section id="problem" className="section">
      <div className="container-page">
        <div className="max-w-3xl">
          <div className="eyebrow">Problem</div>
          <h2 className="heading-lg mt-4">
            게놈 데이터 시장은 <span className="text-cyan-glow">깨져 있습니다.</span>
          </h2>
          <p className="body-muted mt-5 text-base sm:text-lg">
            인간 게놈은 30억 염기쌍의 거대한 정보 자산이지만, 정작 그 데이터의 주체인
            개인은 통제권도 보상도 갖지 못합니다.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {problems.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cyan/20 to-bio/10 border border-white/10">
                <Icon size={20} className="text-cyan-glow" />
              </div>
              <h3 className="heading-md mt-5 text-xl">{title}</h3>
              <p className="body-muted mt-3 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
