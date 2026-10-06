import Link from 'next/link';
import { ArrowLeft, BellRing, MessageCircleMore, Paperclip, SendHorizonal } from 'lucide-react';

const messages = [
  { from: 'buyer', text: 'Kak ini mau gimana? Mau beli akun Mobile Legends?', time: '10:22' },
  { from: 'seller', text: 'Bisa kak, tinggal pilih paket dan saya kirim data loginnya.', time: '10:23' },
  { from: 'buyer', text: 'Oke kak, yang paling aman yang mana?', time: '10:25' },
  { from: 'seller', text: 'Yang Mythic ini aman, semua data sudah terverifikasi dan siap pakai.', time: '10:26' },
];

export default function ChatPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm text-violet-300">
        <ArrowLeft size={16} /> Kembali
      </Link>

      <div className="grid gap-6 lg:grid-cols-[0.42fr_1fr]">
        <aside className="rounded-3xl border border-slate-800 bg-slate-900 p-4">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Chat</h2>
            <BellRing size={18} className="text-violet-300" />
          </div>
          <div className="space-y-3">
            {[
              { name: 'Asha', last: 'Kak ini mau gimana?', active: true },
              { name: 'Rizky', last: 'Sudah dikirim, cek chat ya', active: false },
              { name: 'Nabila', last: 'Ditunggu ya kak', active: false },
            ].map((chat) => (
              <div key={chat.name} className={`rounded-2xl border p-3 ${chat.active ? 'border-violet-500 bg-violet-500/5' : 'border-slate-800 bg-slate-950'}`}>
                <p className="font-semibold text-white">{chat.name}</p>
                <p className="mt-1 text-sm text-slate-400">{chat.last}</p>
              </div>
            ))}
          </div>
        </aside>

        <section className="rounded-3xl border border-slate-800 bg-slate-900 p-4">
          <div className="mb-5 flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <p className="text-xl font-bold text-white">Asha</p>
              <p className="text-sm text-emerald-400">Online</p>
            </div>
            <div className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">Seller</div>
          </div>

          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.time} className={`flex ${message.from === 'buyer' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${message.from === 'buyer' ? 'bg-slate-950 text-slate-200' : 'bg-violet-600 text-white'}`}>
                  <p className="text-sm">{message.text}</p>
                  <p className={`mt-1 text-[10px] uppercase tracking-[0.18em] ${message.from === 'buyer' ? 'text-slate-500' : 'text-violet-100'}`}>{message.time}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950 p-3">
            <button className="rounded-xl border border-slate-700 p-2 text-slate-200">
              <Paperclip size={16} />
            </button>
            <input type="text" value="Kak, saya mau beli akun yang paling aman" className="w-full bg-transparent text-white focus:outline-none" readOnly />
            <button className="rounded-xl bg-violet-600 p-2 text-white">
              <SendHorizonal size={18} />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
