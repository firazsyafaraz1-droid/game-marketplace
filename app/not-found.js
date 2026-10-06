import Link from 'next/link';
import { Crown, Gamepad2, ShoppingBag, Tags } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <div className="mb-5 inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 p-3 text-violet-300">
        <Gamepad2 size={28} />
      </div>
      <h1 className="text-4xl font-black text-white">Halaman tidak ditemukan</h1>
      <p className="mt-4 text-slate-300">Maaf, halaman yang Anda cari mungkin sudah dipindah atau tidak tersedia saat ini.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/" className="rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white">Kembali ke beranda</Link>
        <Link href="/login" className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 font-semibold text-slate-100">Login atau daftar</Link>
      </div>
    </main>
  );
}
