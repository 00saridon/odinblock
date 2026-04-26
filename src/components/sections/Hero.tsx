'use client';

import { motion } from 'framer-motion';
import { ArrowRight, FileText, ShieldCheck, Activity, Dna } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" />

      <div className="container-page relative">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow"
            >
              <Dna size={12} /> Blockchain × Genome Data Infrastructure
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="heading-xl"
            >
              내 유전자 데이터의 주권을
              <br />
              <span className="bg-gradient-to-r from-cyan-glow via-cyan to-bio bg-clip-text text-transparent">
                개인에게 돌려드립니다.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="body-muted max-w-2xl text-base sm:text-lg"
            >
              ODINBLOCK은 DID 기반 게놈·건강 데이터 인프라입니다. 개인의 데이터 보안과
              통제권을 보장하면서, 연구·의료기관에게는 신뢰 가능한 데이터 액세스를,
              데이터 제공자에게는 토큰 보상을 분배합니다.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-wrap gap-3"
            >
              <a href="/docs/ODIN%20whitepaper.pdf" className="btn-primary">
                <FileText size={16} /> 백서 다운로드
              </a>
              <a href="#solution" className="btn-outline">
                솔루션 보기 <ArrowRight size={16} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid grid-cols-3 gap-4 pt-4 max-w-xl"
            >
              {[
                { k: '30억', v: '인간 게놈 염기쌍' },
                { k: 'DID', v: '분산 신원 관리' },
                { k: 'PTP', v: '게놈 데이터 생태계' },
              ].map((s) => (
                <div key={s.k} className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
                  <div className="text-cyan-glow font-bold text-lg">{s.k}</div>
                  <div className="text-xs text-slate-400 mt-1">{s.v}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <HelixVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HelixVisual() {
  return (
    <div className="relative aspect-square max-w-md mx-auto">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan/20 to-bio/15 blur-3xl" />
      <div className="absolute inset-6 rounded-3xl border border-white/10 bg-gradient-to-br from-midnight-800/60 to-midnight-900/60 backdrop-blur" />
      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full p-10">
        <defs>
          <linearGradient id="helix-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
        {Array.from({ length: 18 }).map((_, i) => {
          const t = i / 17;
          const y = 40 + t * 320;
          const phase = t * Math.PI * 4;
          const x1 = 200 + Math.sin(phase) * 70;
          const x2 = 200 - Math.sin(phase) * 70;
          return (
            <g key={i}>
              <line
                x1={x1}
                y1={y}
                x2={x2}
                y2={y}
                stroke="url(#helix-grad)"
                strokeWidth="1.2"
                opacity={0.45 + Math.abs(Math.sin(phase)) * 0.4}
              />
              <circle cx={x1} cy={y} r="4" fill="#22D3EE" opacity={0.85} />
              <circle cx={x2} cy={y} r="4" fill="#10B981" opacity={0.85} />
            </g>
          );
        })}
      </svg>

      <div className="absolute -right-2 top-8 rounded-xl border border-white/10 bg-midnight-800/80 backdrop-blur px-3 py-2 flex items-center gap-2 shadow-glow">
        <ShieldCheck size={14} className="text-cyan-glow" />
        <span className="text-xs text-slate-200">DID 보안</span>
      </div>
      <div className="absolute -left-2 bottom-12 rounded-xl border border-white/10 bg-midnight-800/80 backdrop-blur px-3 py-2 flex items-center gap-2 shadow-glow-bio">
        <Activity size={14} className="text-bio-glow" />
        <span className="text-xs text-slate-200">건강 데이터</span>
      </div>
    </div>
  );
}
