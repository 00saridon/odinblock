'use client';

import { useI18n } from '@/i18n/I18n';

export default function LangToggle({ className = '' }: { className?: string }) {
  const { lang, setLang } = useI18n();
  return (
    <div
      className={`inline-flex items-center rounded-full border border-white/10 bg-white/5 p-0.5 text-xs ${className}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        aria-pressed={lang === 'ko'}
        onClick={() => setLang('ko')}
        className={`px-2.5 py-1 rounded-full transition-colors ${
          lang === 'ko'
            ? 'bg-gradient-to-r from-cyan to-bio text-midnight-950 font-semibold'
            : 'text-slate-300 hover:text-white'
        }`}
      >
        KO
      </button>
      <button
        type="button"
        aria-pressed={lang === 'en'}
        onClick={() => setLang('en')}
        className={`px-2.5 py-1 rounded-full transition-colors ${
          lang === 'en'
            ? 'bg-gradient-to-r from-cyan to-bio text-midnight-950 font-semibold'
            : 'text-slate-300 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
}
