'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#problem', label: '문제' },
  { href: '#solution', label: '솔루션' },
  { href: '#how', label: '구조' },
  { href: '#token', label: '토큰' },
  { href: '#roadmap', label: '로드맵' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/5 bg-midnight-900/70 backdrop-blur-lg'
          : 'border-b border-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-cyan to-bio shadow-glow">
            <span className="text-midnight-950 font-black text-sm">Ø</span>
          </div>
          <span className="font-bold tracking-wide text-white">ODINBLOCK</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="/docs/ODIN%20whitepaper.pdf" className="btn-outline">
            백서
          </a>
          <a href="#contact" className="btn-primary">
            문의하기
          </a>
        </div>

        <button
          aria-label="메뉴 열기"
          className="md:hidden grid place-items-center h-9 w-9 rounded-lg border border-white/10 bg-white/5 text-white"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-midnight-900/95 backdrop-blur-lg">
          <div className="container-page py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-slate-200 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <a href="/docs/ODIN%20whitepaper.pdf" className="btn-outline flex-1">
                백서
              </a>
              <a href="#contact" className="btn-primary flex-1">
                문의하기
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
