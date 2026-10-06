import Link from 'next/link';
import { ArrowRight, Bell, ChevronRight, Gamepad2, Search, ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-sky-500 text-white shadow-lg shadow-violet-500/20">
            <Gamepad2 size={20} />
          </div>
          <div>
            <p className="text-lg font-black tracking-tight text-white">GameVerse</p>
            <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Marketplace</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <Link href="/" className="hover:text-white">Beranda</Link>
          <Link href="/" className="hover:text-white">Top Up</Link>
          <Link href="/" className="hover:text-white">Akun</Link>
          <Link href="/" className="hover:text-white">Item</Link>
          <Link href="/dashboard" className="hover:text-white">Penjual</Link>
          <Link href="/chat" className="hover:text-white">Chat</Link>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200 md:flex">
            <Search size={16} /> Cari game
          </button>
          <Link href="/chat" className="rounded-xl border border-slate-700 bg-slate-900 p-2.5 text-slate-200">
            <Bell size={18} />
          </Link>
          <Link href="/cart" className="rounded-xl border border-slate-700 bg-slate-900 p-2.5 text-slate-200">
            <ShoppingCart size={18} />
          </Link>
          <Link href="/login" className="rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-500">Masuk</Link>
        </div>
      </div>
    </header>
  );
}
