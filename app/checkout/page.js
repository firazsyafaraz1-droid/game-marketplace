import Link from 'next/link';
import { ArrowLeft, Check, ShieldCheck } from 'lucide-react';

export default function CheckoutPage() {
  const items = [
    { name: 'Akun Mobile Legends Mythic', price: 245000 },
    { name: 'Top Up Diamond PUBG', price: 120000 },
  ];

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <Link href="/cart" className="mb-6 inline-flex items-center gap-2 text-sm text-violet-300">
        <ArrowLeft size={16} /> Kembali ke keranjang
      </Link>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
          <h1 className="text-3xl font-bold text-white">Checkout</h1>
          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-sm text-slate-300">Email</label>
              <input type="email" placeholder="email@email.com" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-white placeholder:text-slate-500 focus:outline-none" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-slate-300">Nama akun/ID game</label>
              <input type="text" placeholder="Contoh: username123" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-white placeholder:text-slate-500 focus:outline-none" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-slate-300">Metode pembayaran</label>
              <select className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-white focus:outline-none">
                <option>E-Wallet</option>
                <option>Bank Transfer</option>
                <option>QRIS</option>
              </select>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
          <h2 className="text-xl font-bold text-white">Detail pesanan</h2>
          <div className="mt-5 space-y-3">
            {items.map((item) => (
              <div key={item.name} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 p-3 text-sm">
                <span className="text-slate-300">{item.name}</span>
                <span className="font-semibold text-white">Rp {item.price.toLocaleString('id-ID')}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 border-t border-slate-800 pt-4 flex justify-between text-lg font-bold text-white">
            <span>Total</span>
            <span>Rp {total.toLocaleString('id-ID')}</span>
          </div>
          <button className="mt-6 w-full rounded-xl bg-violet-600 px-4 py-3 font-semibold text-white hover:bg-violet-500">Bayar sekarang</button>
          <div className="mt-4 flex items-center gap-2 text-sm text-emerald-400">
            <ShieldCheck size={16} /> Pembayaran aman dan terverifikasi
          </div>
        </div>
      </div>
    </main>
  );
}
