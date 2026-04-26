'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: '제 게놈 데이터가 외부에 그대로 공개되나요?',
    a: '아니요. 원본은 암호화된 상태로 보관되며, 연구·의료기관은 권한이 부여된 범위에서만 통계·모델을 학습할 수 있습니다. 데이터 주체의 명시적 동의 없이는 어떠한 액세스도 일어나지 않습니다.',
  },
  {
    q: '데이터를 제공하면 어떻게 보상받나요?',
    a: '데이터가 검증되어 마켓플레이스에서 거래되면 수요 기관이 ODIN 토큰으로 결제하고, 그 일부가 자동으로 제공자의 지갑으로 분배됩니다. 사용 빈도와 데이터 가치에 따라 보상이 누적됩니다.',
  },
  {
    q: 'ODIN 토큰은 어디서 거래할 수 있나요?',
    a: 'TGE 이후 글로벌 거래소 상장 일정이 로드맵에 따라 진행됩니다. 최신 정보는 공식 채널과 공지사항에서 확인할 수 있습니다.',
  },
  {
    q: '연구 기관은 어떻게 데이터에 접근할 수 있나요?',
    a: '기관은 KYC와 연구 목적 검증을 거친 후 ODINBLOCK의 데이터 마켓플레이스에서 데이터셋을 탐색하고 ODIN 토큰으로 액세스를 구매할 수 있습니다.',
  },
  {
    q: '개인정보 보호 규정 (GDPR/PIPA)을 준수하나요?',
    a: '네. 데이터 주체의 동의·접근권·삭제권을 프로토콜 차원에서 보장하도록 설계되었으며, 한국·유럽 의료 데이터 규제 준수를 우선 목표로 합니다.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section">
      <div className="container-page">
        <div className="max-w-3xl">
          <div className="eyebrow">FAQ</div>
          <h2 className="heading-lg mt-4">자주 묻는 질문</h2>
        </div>

        <div className="mt-12 max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold text-white">{f.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-transform text-slate-400 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                      {f.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
