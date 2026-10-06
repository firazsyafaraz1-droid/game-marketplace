import Link from 'next/link';
import { ArrowRight, CheckCircle2, Mail, ShieldCheck, Sparkles } from 'lucide-react';

export default function LoginPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-violet-300">Masuk / Daftar</p>
          <h1 className="mt-4 text-4xl font-black text-white">Login dengan email untuk belanja atau jual game.</h1>
          <div className="mt-8 space-y-4 text-slate-300">
            {[
              'Login pakai email aktif',
              'Daftar mudah sebagai pembeli atau penjual',
              'Notifikasi seperti chat WhatsApp ke seller & buyer',
              'Verifikasi keamanan akun dan transaksi',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-emerald-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-glow">
          <div className="mb-6 flex gap-2 rounded-2xl bg-slate-950 p-1">
            <button className="flex-1 rounded-xl bg-violet-600 px-4 py-2.5 font-semibold text-white">Masuk</button>
            <button className="flex-1 rounded-xl px-4 py-2.5 font-semibold text-slate-300">Daftar</button>
          </div>

          <form className="space-y-4">
            <div>
              <label className="mb-2 block text-sm text-slate-300">Email</label>
              <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950 px-3 py-3">
                <Mail size={18} className="text-slate-400" />
                <input type="email" placeholder="nama@email.com" className="w-full bg-transparent text-white placeholder:text-slate-500 focus:outline-none" />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm text-slate-300">Password</label>
              <input type="password" placeholder="Masukkan password" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-white placeholder:text-slate-500 focus:outline-none" />
            </div>
            <div className="flex items-center justify-between text-sm text-slate-400">
              <label className="flex items-center gap-2"><input type="checkbox" /> Ingat saya</label>
              <Link href="/" className="text-violet-300">Lupa password?</Link>
            </div>
            <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 font-semibold text-white hover:bg-violet-500">
              Masuk sekarang <ArrowRight size={18} />
            </button>
          </form>

          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
              <ShieldCheck size={16} className="text-emerald-400" /> Keamanan akun
            </div>
            <p className="mt-2 text-sm text-slate-400">Semua transaksi dan komunikasi seller-buyer terenkripsi dan diawasi untuk keamanan transaksi.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
