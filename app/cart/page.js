import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, MessageSquareText, ShieldCheck, ShoppingCart } from 'lucide-react';
import { featuredProducts } from '@/lib/data';

const cartItems = [
  { id: 1, name: 'Akun Mobile Legends Mythic', price: 245000, qty: 1 },
  { id: 2, name: 'Top Up Diamond PUBG', price: 120000, qty: 1 },
];

export default function CartPage() {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm text-violet-300">
        <ArrowLeft size={16} /> Kembali ke beranda
      </Link>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
          <h1 className="text-3xl font-bold text-white">Keranjang belanja</h1>
          <div className="mt-6 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 p-4">
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="mt-1 text-sm text-slate-400">Qty: {item.qty}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-violet-300">Rp {(item.price * item.qty).toLocaleString('id-ID')}</p>
                  <button className="mt-2 text-xs text-red-400">Hapus</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
          <h2 className="text-xl font-bold text-white">Ringkasan checkout</h2>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            <div className="flex justify-between"><span>Subtotal</span><span>Rp {total.toLocaleString('id-ID')}</span></div>
            <div className="flex justify-between"><span>Biaya admin</span><span>Rp 0</span></div>
            <div className="flex justify-between"><span>Diskon</span><span>Rp 0</span></div>
          </div>
          <div className="mt-5 border-t border-slate-800 pt-4 text-lg font-bold text-white flex justify-between">
            <span>Total</span>
            <span>Rp {total.toLocaleString('id-ID')}</span>
          </div>
          <Link href="/checkout" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 font-semibold text-white hover:bg-violet-500">
            Checkout <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </main>
  );
}
