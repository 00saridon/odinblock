import { User, Database, Building2, ArrowRight, type LucideIcon } from 'lucide-react';

type Actor = {
  icon: LucideIcon;
  badge: string;
  title: string;
  desc: string;
  color: 'cyan' | 'bio';
};

const actors: Actor[] = [
  {
    icon: User,
    badge: 'Provider',
    title: '데이터 제공자',
    desc: '개인이 게놈·건강 데이터를 등록하고 DID로 관리. 데이터 활용 시 ODIN 토큰으로 보상받습니다.',
    color: 'cyan',
  },
  {
    icon: Database,
    badge: 'Protocol',
    title: 'ODINBLOCK 프로토콜',
    desc: '데이터 무결성·접근권한·결제를 블록체인으로 검증. 프라이버시를 보존한 액세스를 중개합니다.',
    color: 'bio',
  },
  {
    icon: Building2,
    badge: 'Demand',
    title: '수요 기관',
    desc: '제약·의료기기·보험·식품·연구소·바이오 기업이 검증된 데이터를 구매·연구에 활용합니다.',
    color: 'cyan',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section">
      <div className="container-page">
        <div className="max-w-3xl">
          <div className="eyebrow">How it works</div>
          <h2 className="heading-lg mt-4">세 주체가 만드는 데이터 경제</h2>
          <p className="body-muted mt-5 text-base sm:text-lg">
            제공자, 프로토콜, 수요 기관이 토큰을 매개로 연결됩니다. 데이터는 흐르고
            가치는 분배됩니다.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-5 items-stretch">
          {actors.map((actor, i) => (
            <div key={actor.title} className="md:col-span-1 contents md:contents-none">
              <ActorCard {...actor} />
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
            {[
              { k: 'Step 1', t: '등록', d: '제공자가 데이터 + DID 등록' },
              { k: 'Step 2', t: '검증·매칭', d: '프로토콜이 무결성 확인 후 수요와 매칭' },
              { k: 'Step 3', t: '결제·분배', d: 'ODIN 토큰으로 결제, 제공자에 보상 분배' },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-mono text-xs text-cyan-glow uppercase tracking-widest">
                  {s.k}
                </div>
                <div className="mt-2 text-white font-semibold">{s.t}</div>
                <div className="mt-1 text-slate-400">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ActorCard({ icon: Icon, badge, title, desc, color }: Actor) {
  const accent = color === 'cyan' ? 'text-cyan-glow' : 'text-bio-glow';
  const ring = color === 'cyan' ? 'shadow-glow' : 'shadow-glow-bio';
  return (
    <div className="card md:col-span-1 flex-1 flex flex-col">
      <div className="flex items-center justify-between">
        <div className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cyan/20 to-bio/10 border border-white/10 ${ring}`}>
          <Icon size={20} className={accent} />
        </div>
        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-mono">
          {badge}
        </span>
      </div>
      <h3 className="mt-5 text-white font-semibold text-lg">{title}</h3>
      <p className="body-muted mt-2 text-sm">{desc}</p>
    </div>
  );
}
