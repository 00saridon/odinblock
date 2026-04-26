'use client';

import { Github, Send, Twitter } from 'lucide-react';
import { useT } from '@/i18n/I18n';

export default function Footer() {
  const t = useT();
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="border-t border-white/5 bg-midnight-950/60">
      <div className="container-page py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-cyan to-bio">
              <span className="text-midnight-950 font-black text-sm">Ø</span>
            </div>
            <span className="font-bold tracking-wide text-white">ODINBLOCK</span>
          </div>
          <p className="body-muted max-w-md text-sm">
            {t('footer.tag')}
            <br />
            {t('footer.tag2')}
          </p>
          <div className="flex gap-3 pt-2">
            <a
              aria-label="Twitter"
              href="#"
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 hover:bg-white/5"
            >
              <Twitter size={16} />
            </a>
            <a
              aria-label="Telegram"
              href="#"
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 hover:bg-white/5"
            >
              <Send size={16} />
            </a>
            <a
              aria-label="GitHub"
              href="https://github.com/00saridon/odinblock"
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 hover:bg-white/5"
            >
              <Github size={16} />
            </a>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <div className="text-white font-semibold">{t('footer.proj')}</div>
          <ul className="space-y-2 text-slate-400">
            <li><a href="#problem" className="hover:text-white">{t('nav.problem')}</a></li>
            <li><a href="#solution" className="hover:text-white">{t('nav.solution')}</a></li>
            <li><a href="#token" className="hover:text-white">{t('nav.token')}</a></li>
            <li><a href="#roadmap" className="hover:text-white">{t('nav.roadmap')}</a></li>
            <li><a href="#team" className="hover:text-white">{t('nav.team')}</a></li>
          </ul>
        </div>

        <div className="space-y-3 text-sm">
          <div className="text-white font-semibold">{t('footer.docs')}</div>
          <ul className="space-y-2 text-slate-400">
            <li>
              <a href="/docs/ODIN%20whitepaper.pdf" className="hover:text-white">
                {t('nav.whitepaper')}
              </a>
            </li>
            <li><a href="#blog" className="hover:text-white">{t('nav.blog')}</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            <li>
              <a href="mailto:contact@odinblock.com" className="hover:text-white">
                contact@odinblock.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container-page py-6 text-xs text-slate-500 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <div>{t('footer.copy').replace('{year}', String(year))}</div>
          <div>{t('footer.disclaimer')}</div>
        </div>
      </div>
    </footer>
  );
}
