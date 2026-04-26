'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useT } from '@/i18n/I18n';

const keys = ['q1', 'q2', 'q3', 'q4', 'q5'] as const;

export default function FAQ() {
  const t = useT();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section">
      <div className="container-page">
        <div className="max-w-3xl">
          <div className="eyebrow">{t('faq.eyebrow')}</div>
          <h2 className="heading-lg mt-4">{t('faq.title')}</h2>
        </div>

        <div className="mt-12 max-w-3xl space-y-3">
          {keys.map((qk, i) => {
            const ak = qk.replace('q', 'a');
            const isOpen = open === i;
            return (
              <div
                key={qk}
                className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold text-white">{t(`faq.${qk}`)}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-transform text-slate-400 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                      {t(`faq.${ak}`)}
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
