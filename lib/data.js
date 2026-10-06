export const categories = [
  { name: 'Akun Game', description: 'Jual beli akun siap pakai berbagai game populer', icon: '🎮' },
  { name: 'Top Up', description: 'Diamond, coin, dan saldo game cepat siap kirim', icon: '💎' },
  { name: 'Item Skin', description: 'Skin, bundle, misi premium, dan item langka', icon: '🧩' },
  { name: 'Joki & Boost', description: 'Bantu naik rank, win streak, dan leveling palsu', icon: '⚡' },
];

export const featuredProducts = [
  {
    id: 'akun-ml-mythic',
    name: 'Akun Mobile Legends Mythic',
    platform: 'Mobile Legends',
    price: 245000,
    sold: 186,
    rating: 4.9,
    badge: 'Top Seller',
    seller: 'AstraGames',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80',
    description: 'Akun Mobile Legends dengan rank Mythic, skin premium, dan gold lengkap. Sudah siap pakai untuk bermain tanpa proses lama.',
    features: ['Rank Mythic', 'Skin langka 5+', 'Gold dan token lengkap', 'Login aman via email'],
  },
  {
    id: 'diamond-pubg',
    name: 'Top Up Diamond PUBG',
    platform: 'PUBG Mobile',
    price: 120000,
    sold: 432,
    rating: 4.8,
    badge: 'Fast Delivery',
    seller: 'PixelMarket',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80',
    description: 'Top up diamond PUBG Mobile instan dengan proses otomatis dan aman. Cocok untuk upgrade item dan battle pass.',
    features: ['Pengiriman instan', 'Nominal fleksibel', 'Pembayaran aman', 'Transaksi real-time'],
  },
  {
    id: 'skin-valorant',
    name: 'Bundle Skin Valorant',
    platform: 'Valorant',
    price: 380000,
    sold: 94,
    rating: 5.0,
    badge: 'Rare',
    seller: 'PrimeVault',
    image: 'https://images.unsplash.com/photo-1528819622761-6bcf9d416f4a?auto=format&fit=crop&w=900&q=80',
    description: 'Skin bundle Valorant premium dengan kualitas terbaik. Masih aman, original, dan bisa langsung digunakan.',
    features: ['Bundle premium', 'Editan collectible', 'Original account', 'Aman dan amanah'],
  },
  {
    id: 'akun-free-fire',
    name: 'Akun Free Fire Elite',
    platform: 'Free Fire',
    price: 165000,
    sold: 290,
    rating: 4.7,
    badge: 'Popular',
    seller: 'LevelUpHub',
    image: 'https://images.unsplash.com/photo-1526509867165-5c7cdd0f5f2f?auto=format&fit=crop&w=900&q=80',
    description: 'Akun Free Fire Elite dengan banyak skin, karakter, dan mastery. Cocok untuk pemain yang ingin start lebih kuat.',
    features: ['Elite rank', 'Skin premium', 'Mastery tinggi', 'Ready to play'],
  },
];

export const testimonials = [
  { name: 'Rafi', role: 'Pembeli Top Up', comment: 'Prosesnya cepat banget, aman, dan chatnya responsif seperti WhatsApp. Mantap.' },
  { name: 'Nadia', role: 'Penjual Akun', comment: 'Saya jadi penjual di sini gampang, dashboard jelas, dan notifikasi transaksi sangat membantu.' },
  { name: 'Dika', role: 'Pemain PUBG', comment: 'Marketplace ini memenuhi kebutuhan game saya. Produk lengkap dan harganya jelas.' },
];

export const sellerStats = [
  { label: 'Pendapatan', value: 'Rp 48.2Jt', icon: '💸' },
  { label: 'Product aktif', value: '142', icon: '📦' },
  { label: 'Transaksi', value: '2.134', icon: '🔁' },
  { label: 'Rating', value: '4.9/5', icon: '⭐' },
];

export const notifications = [
  { id: 1, title: 'Pembeli baru', message: 'Kak ini mau gimana? Mau beli akun Mobile Legends?', time: '5 menit lalu' },
  { id: 2, title: 'Status order', message: 'Top Up PUBG Anda sedang diproses oleh seller.', time: '18 menit lalu' },
  { id: 3, title: 'Chat penjual', message: 'Seller membalas chat Anda: “Siap kak, tinggal pilih item yang cocok.”', time: '1 jam lalu' },
  { id: 4, title: 'Review baru', message: 'Pembeli memberi rating 5.0 untuk akun Free Fire Anda.', time: '2 jam lalu' },
];

export const orders = [
  { id: 'INV-201', product: 'Akun Mobile Legends Mythic', buyer: 'Asha', time: '12 menit lalu', amount: 245000, status: 'Selesai' },
  { id: 'INV-202', product: 'Diamond PUBG', buyer: 'Rizky', time: '29 menit lalu', amount: 120000, status: 'Diproses' },
  { id: 'INV-203', product: 'Bundle Skin Valorant', buyer: 'Nabila', time: '1 jam lalu', amount: 380000, status: 'Menunggu' },
  { id: 'INV-204', product: 'Akun Free Fire Elite', buyer: 'Denny', time: '1 jam lalu', amount: 165000, status: 'Selesai' },
];
