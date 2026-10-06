import Link from 'next/link';
import { Check, ChevronLeft, MessageSquareText, ShieldCheck, ShoppingCart, Star } from 'lucide-react';
import { featuredProducts } from '@/lib/data';

export default function ProductDetailPage({ params }) {
  const product = featuredProducts.find((item) => item.id === params.id) || featuredProducts[0];

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm text-violet-300">
        <ChevronLeft size={16} /> Kembali
      </Link>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
            <img src={product.image} alt={product.name} className="h-[490px] w-full object-cover" />
          </div>
          <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-bold text-white">Deskripsi produk</h2>
            <p className="mt-4 text-slate-300">{product.description}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {product.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950 p-3 text-sm text-slate-200">
                  <Check size={16} className="text-emerald-400" /> {feature}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-violet-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.25em] text-violet-200">{product.badge}</span>
              <div className="flex items-center gap-1 text-yellow-400">
                <Star size={16} fill="currentColor" />
                <span className="text-sm font-semibold text-white">{product.rating}</span>
              </div>
            </div>

            <h1 className="mt-4 text-3xl font-black text-white">{product.name}</h1>
            <p className="mt-2 text-sm text-slate-400">{product.platform} • {product.sold} terjual</p>

            <div className="mt-6 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-4">
              <p className="text-sm text-violet-200">Harga</p>
              <p className="mt-2 text-4xl font-black text-white">Rp {product.price.toLocaleString('id-ID')}</p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button className="rounded-xl bg-violet-600 px-4 py-3 font-semibold text-white hover:bg-violet-500">Beli sekarang</button>
              <button className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 font-semibold text-slate-100 hover:border-violet-500 hover:text-violet-200">Masukkan keranjang</button>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500/10 text-xl font-bold text-violet-200">{product.seller[0]}</div>
              <div>
                <p className="font-semibold text-white">{product.seller}</p>
                <p className="text-sm text-slate-400">Penjual terpercaya</p>
              </div>
            </div>

            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-3"><ShieldCheck size={16} className="text-emerald-400" /> Verifikasi seller aktif</div>
              <div className="flex items-center gap-3"><ShoppingCart size={16} className="text-sky-400" /> 2.460 item terjual</div>
              <div className="flex items-center gap-3"><MessageSquareText size={16} className="text-violet-400" /> Respons chat cepat</div>
            </div>

            <button className="mt-5 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 font-semibold text-white hover:border-violet-500 hover:text-violet-200">
              Chat penjual
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
