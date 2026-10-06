import Link from 'next/link';
import { ArrowRight, ShieldCheck, Star, Zap, Coins, Gamepad2, MessageCircleMore } from 'lucide-react';
import { categories, featuredProducts, testimonials } from '@/lib/data';
import ProductCard from '@/components/ProductCard';

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-violet-200">
              <Gamepad2 size={14} /> Marketplace game paling trusted
            </span>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Beli akun, item, dan top up game dengan aman.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">
              Tempat jual beli game modern untuk akun, skin, item, top up, dan kebutuhan gaming favorit Anda.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/login" className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-500">
                Mulai belanja <ArrowRight size={18} />
              </Link>
              <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 font-semibold text-slate-100 transition hover:border-violet-500 hover:text-violet-200">
                Jadi penjual
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-emerald-400" /> Verifikasi seller</div>
              <div className="flex items-center gap-2"><Star size={16} className="text-yellow-400" /> Rating 4.9/5</div>
              <div className="flex items-center gap-2"><Zap size={16} className="text-sky-400" /> Proses cepat</div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-violet-950 p-5 shadow-glow">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Live transaction</p>
                  <p className="mt-2 text-2xl font-bold text-white">1.284</p>
                </div>
                <div className="rounded-full bg-emerald-500/10 p-3 text-emerald-400">
                  <Coins size={20} />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {featuredProducts.slice(0, 3).map((product) => (
                  <div key={product.id} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-3">
                    <div>
                      <p className="text-sm font-semibold text-white">{product.name}</p>
                      <p className="mt-1 text-xs text-slate-400">{product.platform}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-violet-300">Rp {product.price.toLocaleString('id-ID')}</p>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-400">ready stock</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-violet-300">Kategori</p>
            <h2 className="mt-2 text-3xl font-bold text-white">Pilih kebutuhan game Anda</h2>
          </div>
          <Link href="/login" className="text-sm font-semibold text-violet-300 hover:text-violet-200">Lihat semua</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <div key={category.name} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-violet-500 hover:shadow-glow">
              <div className="mb-4 inline-flex rounded-xl bg-violet-500/10 p-3 text-violet-300">{category.icon}</div>
              <h3 className="text-xl font-bold text-white">{category.name}</h3>
              <p className="mt-2 text-sm text-slate-400">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-violet-300">Featured</p>
            <h2 className="mt-2 text-3xl font-bold text-white">Produk paling laris</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-violet-500/20 bg-gradient-to-r from-violet-600/20 via-slate-900 to-sky-600/20 p-8">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-violet-200">Kenapa pilih kami</p>
              <h2 className="mt-3 text-3xl font-bold text-white">Marketplace game yang aman, cepat, dan terpercaya.</h2>
            </div>
            <Link href="/login" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-900">
              <MessageCircleMore size={18} /> Chat penjual sekarang
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.25em] text-violet-300">Testimoni</p>
          <h2 className="mt-2 text-3xl font-bold text-white">Apa kata pembeli</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <div className="mb-4 flex items-center gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-300">“{item.comment}”</p>
              <div className="mt-5 border-t border-slate-800 pt-4">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-slate-400">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
