import React, { useState } from 'react';

// KENGAYTIRILGAN MAHSULOTLAR MA'LUMOTI (Kiyimlar ko'paytirildi)
const PRODUCTS_DATA = [
  { id: 1, name: "Premium Erkaklar Futbolkasi", category: "Kiyim", price: 145000, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500", rating: "4.8" },
  { id: 2, name: "Smart Soat Pro X", category: "Elektronika", price: 890000, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", rating: "4.6" },
  { id: 3, name: "Sport Oyoq Kiyimi Max", category: "Oyoq kiyim", price: 650000, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", rating: "4.9" },
  { id: 4, name: "Ondasiz Ayollar Ko'ylagi", category: "Kiyim", price: 380000, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500", rating: "4.7" },
  { id: 5, name: "Urban Uslubdagi Hudi", category: "Kiyim", price: 310000, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500", rating: "4.4" },
  { id: 6, name: "Charm Erkaklar Hamyoni", category: "Aksessuarlar", price: 175000, image: "https://images.unsplash.com/photo-1627124765138-b64da0293338?w=500", rating: "4.5" },
  { id: 7, name: "Klassik Erkaklar Kostyumi", category: "Kiyim", price: 1200000, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500", rating: "5.0" },
  { id: 8, name: "Kuzgi Oversize Nimcha", category: "Kiyim", price: 450000, image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500", rating: "4.6" },
  { id: 9, name: "Simsiz Quloqchinlar ANC", category: "Elektronika", price: 420000, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", rating: "4.7" },
  { id: 10, name: "Jinsi Shim Slim-Fit", category: "Kiyim", price: 280000, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500", rating: "4.3" }
];

const Bot = () => {
  const [products] = useState(PRODUCTS_DATA);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Barchasi');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = ['Barchasi', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(item => {
    const matchesCategory = activeCategory === 'Barchasi' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans flex flex-col justify-between">
      
      <div>
        {/* ─── NAVIGATSIYA ─── */}
        <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="text-xl font-black tracking-tight text-slate-900">
              SAYDAZIM<span className="text-emerald-600">.SHOP</span>
            </div>

            <div className="flex-1 max-w-md mx-8 hidden md:block">
              <input
                type="text"
                placeholder="Mahsulotlarni qidirish..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none text-sm"
              />
            </div>

            <button 
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-emerald-600 active:scale-95 transition-all"
            >
              <span>Savatcha</span>
              <span className="bg-white text-slate-900 text-xs px-2 py-0.5 rounded-md font-bold">
                {totalItems}
              </span>
            </button>
          </div>
        </nav>

        {/* MOBIL QIDIRUV */}
        <div className="p-4 md:hidden bg-white border-b border-slate-200">
          <input
            type="text"
            placeholder="Mahsulotlarni qidirish..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm outline-none"
          />
        </div>

        {/* ─── BANNER VA KATEGORIYALAR ─── */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-10 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 rounded-3xl p-8 md:p-12 text-white shadow-xl min-h-[200px] flex flex-col justify-center">
            <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full uppercase w-max mb-3 tracking-wider">Yangi Kolleksiya</span>
            <h1 className="text-3xl md:text-4xl font-black mb-2 tracking-tight">Katta Chegirmalar Haftaligi</h1>
            <p className="text-slate-400 text-sm md:text-base max-w-sm">Kafolatlangan keshbek va tezkor yetkazib berish xizmati.</p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === cat ? 'bg-emerald-600 text-white shadow-md' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ─── MAHSULOTLAR RO'YXATI ─── */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 text-slate-400 font-medium">Hech narsa topilmadi 😕</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                  <div className="relative aspect-square bg-slate-100 overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute top-2 right-2 bg-white/90 px-2 py-0.5 rounded-lg text-xs font-bold">★ {product.rating}</div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-semibold text-emerald-600 uppercase">{product.category}</span>
                      <h3 className="font-bold text-slate-900 mt-1 text-sm line-clamp-2 min-h-[40px] leading-snug">{product.name}</h3>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-medium uppercase">Narxi</span>
                        <span className="font-black text-slate-900 text-sm">{product.price.toLocaleString()} so'm</span>
                      </div>
                      <button onClick={() => addToCart(product)} className="bg-slate-100 hover:bg-emerald-600 text-slate-800 hover:text-white p-2 rounded-xl transition-all active:scale-90">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* ─── ZAMONAVIY FOOTER (SAYT PASSI) ─── */}
      <footer className="bg-slate-900 text-slate-400 text-sm mt-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-black text-lg mb-4">SAYDAZIM<span className="text-emerald-500">.SHOP</span></h3>
            <p className="text-xs leading-relaxed text-slate-400">O'zbekistondagi eng zamonaviy va ishonchli premium onlayn magazin. Biz bilan sifatli brendlar yanada yaqin.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Kategoriyalar</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Kiyim-kechaklar</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Elektronika jihozlari</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Oyoq kiyimlar</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Aksessuarlar</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Yordam va Aloqa</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Yetkazib berish xizmati</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Qaytarish shartlari</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Ko'p beriladigan savollar</a></li>
              <li><span className="text-emerald-400 font-semibold">Tel: +998 (99) 123-45-67</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Biz ijtimoiy tarmoqlarda</h4>
            <p className="text-xs mb-3">Yangi chegirmalarni birinchilardan bo'lib bilib boring.</p>
            <div className="flex gap-3 text-xs font-bold">
              <span className="bg-slate-800 px-3 py-1.5 rounded-lg text-white hover:bg-emerald-600 cursor-pointer transition-all">Telegram</span>
              <span className="bg-slate-800 px-3 py-1.5 rounded-lg text-white hover:bg-emerald-600 cursor-pointer transition-all">Instagram</span>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 text-center py-6 text-xs text-slate-500">
          © {new Date().getFullYear()} SAYDAZIM.SHOP. Barcha huquqlar himoyalangan.
        </div>
      </footer>

      {/* ─── SAVATCHA PANELİ (SIDEBAR) ─── */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-xs" onClick={() => setIsCartOpen(false)} />
          <div className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
              <div className="p-6 border-b border-slate-200 flex items-center justify-between">
                <h2 className="text-lg font-black text-slate-900">Sizning Savatchangiz</h2>
                <button onClick={() => setIsCartOpen(false)} className="text-sm font-semibold text-slate-400 hover:text-slate-600">Yopish</button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="text-center py-20 text-slate-400 font-medium">Savatchangiz bo'sh</div>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="flex items-center gap-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-slate-900 text-xs truncate">{item.name}</h4>
                        <p className="text-xs text-slate-500 mt-1">{item.price.toLocaleString()} so'm x {item.qty}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-xs font-bold text-red-500 hover:bg-red-50 px-2 py-1 rounded-lg">O'chirish</button>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t border-slate-200 bg-slate-50">
                  <div className="flex justify-between text-sm font-bold text-slate-900 mb-4">
                    <span>Jami summa:</span>
                    <span className="text-emerald-600 text-base">{totalPrice.toLocaleString()} so'm</span>
                  </div>
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold transition-all shadow-md active:scale-98">Sotib olish</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Bot;