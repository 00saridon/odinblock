'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Dna } from 'lucide-react';
import { useT } from '@/i18n/I18n';

export default function Hero() {
  const t = useT();
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden min-h-[100svh] flex items-center pt-28 pb-24 sm:pt-32 sm:pb-32"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-70"
        />
      </div>

      {/* Gradient overlays for readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-midnight-950/40 via-midnight-900/70 to-midnight-950" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(14,165,233,0.18),transparent_70%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_80%_100%,rgba(16,185,129,0.12),transparent_70%)]" />

      <div className="container-page relative">
        <div className="max-w-3xl space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            <Dna size={12} /> {t('hero.eyebrow')}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="heading-xl"
          >
            {t('hero.title.line1')}
            <br />
            <span className="bg-gradient-to-r from-cyan-glow via-cyan to-bio bg-clip-text text-transparent">
              {t('hero.title.line2')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="body-muted max-w-2xl text-base sm:text-lg"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap gap-3"
          >
            <a href="/docs/ODIN%20whitepaper.pdf" className="btn-primary">
              <FileText size={16} /> {t('hero.cta.primary')}
            </a>
            <a href="#solution" className="btn-outline">
              {t('hero.cta.secondary')} <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 max-w-xl"
          >
            {[
              { k: '3,000,000,000', v: t('hero.stats.basepairs') },
              { k: 'DID', v: t('hero.stats.did') },
              { k: 'PTP', v: t('hero.stats.ptp') },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-xl border border-white/10 bg-midnight-900/50 backdrop-blur-md px-3 sm:px-4 py-3"
              >
                <div className="text-cyan-glow font-bold text-base sm:text-lg truncate">
                  {s.k}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-1">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom fade to next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-midnight-900" />
    </section>
  );
}
