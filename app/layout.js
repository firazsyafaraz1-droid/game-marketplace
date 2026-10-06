import './globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: 'GameVerse Market',
  description: 'Marketplace jual beli akun, top up, item game dan produk digital game lainnya.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-slate-950 text-slate-100 antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
