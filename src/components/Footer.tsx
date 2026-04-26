import { Github, Send, Twitter } from 'lucide-react';

export default function Footer() {
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
            블록체인 기반 게놈·건강 데이터 플랫폼.
            <br />
            과학·의료의 발전을 위해 데이터 주권과 보상을 다시 디자인합니다.
          </p>
          <div className="flex gap-3 pt-2">
            <a aria-label="Twitter" href="#" className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 hover:bg-white/5">
              <Twitter size={16} />
            </a>
            <a aria-label="Telegram" href="#" className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 hover:bg-white/5">
              <Send size={16} />
            </a>
            <a aria-label="GitHub" href="https://github.com/00saridon/odinblock" className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 hover:bg-white/5">
              <Github size={16} />
            </a>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <div className="text-white font-semibold">프로젝트</div>
          <ul className="space-y-2 text-slate-400">
            <li><a href="#problem" className="hover:text-white">문제</a></li>
            <li><a href="#solution" className="hover:text-white">솔루션</a></li>
            <li><a href="#token" className="hover:text-white">토큰</a></li>
            <li><a href="#roadmap" className="hover:text-white">로드맵</a></li>
          </ul>
        </div>

        <div className="space-y-3 text-sm">
          <div className="text-white font-semibold">자료</div>
          <ul className="space-y-2 text-slate-400">
            <li><a href="/docs/ODIN%20whitepaper.pdf" className="hover:text-white">백서 (KOR)</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            <li><a href="mailto:contact@odinblock.com" className="hover:text-white">contact@odinblock.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container-page py-6 text-xs text-slate-500 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} ODINBLOCK. All rights reserved.</div>
          <div>본 자료는 투자 권유나 자문이 아닙니다.</div>
        </div>
      </div>
    </footer>
  );
}
