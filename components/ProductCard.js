import Link from 'next/link';
import { ArrowRight, ShieldCheck, Star } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-1 hover:border-violet-500 hover:shadow-glow">
      <div className="relative">
        <img src={product.image} alt={product.name} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-violet-500/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">{product.badge}</span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{product.platform}</p>
          <div className="flex items-center gap-1 text-yellow-400">
            <Star size={14} fill="currentColor" />
            <span className="text-xs font-semibold text-slate-200">{product.rating}</span>
          </div>
        </div>

        <h3 className="mt-3 text-xl font-bold text-white">{product.name}</h3>
        <p className="mt-2 text-sm text-slate-400">{product.seller}</p>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">Harga</p>
            <p className="text-2xl font-black text-white">Rp {product.price.toLocaleString('id-ID')}</p>
          </div>
          <div className="text-right text-sm text-slate-400">
            <p>{product.sold} sold</p>
          </div>
        </div>

        <Link href={`/product/${product.id}`} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 font-semibold text-white transition hover:bg-violet-500">
          Lihat detail <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
