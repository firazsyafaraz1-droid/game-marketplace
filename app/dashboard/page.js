import { BellRing, Box, CreditCard, MessageSquareText, PackageCheck, TrendingUp } from 'lucide-react';
import { notifications, orders, sellerStats } from '@/lib/data';

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-violet-300">Seller Center</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Dashboard penjual</h1>
        </div>
        <button className="rounded-xl bg-violet-600 px-4 py-2.5 font-semibold text-white">+ Tambah produk</button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {sellerStats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <div className="mb-4 inline-flex rounded-xl bg-violet-500/10 p-3 text-violet-300">{stat.icon}</div>
            <p className="text-sm text-slate-400">{stat.label}</p>
            <p className="mt-2 text-3xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Order terbaru</h2>
            <span className="text-sm text-violet-300">12 transaksi</span>
          </div>
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 p-3">
                <div>
                  <p className="font-semibold text-white">{order.product}</p>
                  <p className="text-sm text-slate-400">{order.buyer} • {order.time}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-violet-300">Rp {order.amount.toLocaleString('id-ID')}</p>
                  <span className="inline-flex rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-400">{order.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Notifikasi</h2>
            <BellRing size={18} className="text-violet-300" />
          </div>
          <div className="space-y-3">
            {notifications.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-800 bg-slate-950 p-3">
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-sm text-slate-400">{item.message}</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-slate-500">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
