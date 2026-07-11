import React, { useState } from 'react'

const Zapar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const products = [
    { id: 1, name: "Air Max Pulse", category: "Krossovkalar", price: 890000, oldPrice: 1200000, rating: 4.8, image: "\uD83D\uDC5F", badge: "Yangi" },
    { id: 2, name: "Classic Hoodie", category: "Kiyimlar", price: 350000, oldPrice: 450000, rating: 4.6, image: "\uD83E\uDDE5", badge: "Chegirma" },
    { id: 3, name: "Smart Watch Pro", category: "Aksessuarlar", price: 650000, oldPrice: 850000, rating: 4.9, image: "\u231A", badge: "HIT" },
    { id: 4, name: "Premium Sneakers", category: "Krossovkalar", price: 1200000, oldPrice: 1500000, rating: 4.7, image: "\uD83D\uDC5E", badge: "Yangi" },
    { id: 5, name: "Wireless Buds", category: "Elektronika", price: 450000, oldPrice: 600000, rating: 4.5, image: "\uD83C\uDFA7", badge: "Chegirma" },
    { id: 6, name: "Designer Bag", category: "Aksessuarlar", price: 780000, oldPrice: 950000, rating: 4.4, image: "\uD83D\uDC5C", badge: "Yangi" },
    { id: 7, name: "Sport Fit T-Shirt", category: "Kiyimlar", price: 180000, oldPrice: 250000, rating: 4.3, image: "\uD83D\uDC55", badge: "Aksiya" },
    { id: 8, name: "Leather Wallet", category: "Aksessuarlar", price: 290000, oldPrice: 380000, rating: 4.7, image: "\uD83D\uDC5D", badge: "Chegirma" },
  ]

  const categories = [
    { name: "Krossovkalar", icon: "\uD83D\uDC5F", count: "124 ta", color: "from-blue-500 to-blue-700" },
    { name: "Kiyimlar", icon: "\uD83D\uDC55", count: "256 ta", color: "from-purple-500 to-purple-700" },
    { name: "Aksessuarlar", icon: "\u231A", count: "189 ta", color: "from-amber-500 to-amber-700" },
    { name: "Elektronika", icon: "\uD83C\uDFA7", count: "67 ta", color: "from-emerald-500 to-emerald-700" },
    { name: "Sumkalar", icon: "\uD83D\uDC5C", count: "93 ta", color: "from-rose-500 to-rose-700" },
    { name: "Sport tovarlari", icon: "\u26BD", count: "45 ta", color: "from-cyan-500 to-cyan-700" },
  ]

  const testimonials = [
    { name: "Madina R.", text: "Juda sifatli mahsulotlar! Tez yetkazib berishdi va narxlar hamyonbop.", rating: 5, avatar: "\uD83D\uDC69" },
    { name: "Jahongir A.", text: "Onlayn xarid qilishni yoqtiradigan bo'ldim. Tavsiya qilaman!", rating: 5, avatar: "\uD83D\uDC68" },
    { name: "Dilnoza K.", text: "Krossovkalarim ajoyib! Rasmdagidan ham chiroyli chiqdi.", rating: 4, avatar: "\uD83D\uDC69\u200D\uD83E\uDD30" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* ========== HEADER ========== */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        {/* Top bar */}
        <div className="hidden lg:block bg-gray-900 text-gray-300 text-xs">
          <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">Shop Bepul yetkazib berish</span>
              <span className="w-px h-3 bg-gray-700"></span>
              <span className="flex items-center gap-1">Shop 30 kunlik qaytarish</span>
              <span className="w-px h-3 bg-gray-700"></span>
              <span className="flex items-center gap-1">Shop 24/7 qo'llab-quvvatlash</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors duration-200">Sotuvchilar uchun</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Yordam</a>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
              <div className="flex items-center gap-2">
                <span className="text-3xl">Shop</span>
                <div>
                  <h1 className="text-2xl font-extrabold tracking-tight">
                    <span className="text-gray-900">Shop</span>
                    <span className="text-blue-600">Zone</span>
                  </h1>
                  <p className="text-[10px] text-gray-400 tracking-widest uppercase -mt-1">Internet Magazine</p>
                </div>
              </div>
            </div>

            {/* Search bar */}
            <div className="hidden md:flex flex-1 max-w-lg">
              <div className="relative w-full group">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Qidirish..."
                  className="w-full pl-11 pr-4 py-2.5 bg-gray-100 border-2 border-transparent rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                />
                <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="hidden lg:inline">Kirish</span>
              </button>
              <button className="relative p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">3</span>
              </button>
              <button className="relative p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-blue-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center">5</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden px-4 pb-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Qidirish..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-xl text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block border-t border-gray-100`}>
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex flex-col lg:flex-row lg:items-center gap-1 py-2 lg:py-0">
              {[
                { name: "Bosh sahifa", icon: "\uD83C\uDFE0", active: true },
                { name: "Erkaklar", icon: "\uD83D\uDC54" },
                { name: "Ayollar", icon: "\uD83D\uDC57" },
                { name: "Bolalar", icon: "\uD83E\uDDF8" },
                { name: "Aksessuarlar", icon: "\u231A" },
                { name: "Chegirmalar", icon: "\uD83D\uDD25", badge: "30%" },
                { name: "Yangi kelganlar", icon: "\u2728" },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-all duration-200
                      ${item.active
                        ? 'text-blue-600 bg-blue-50 font-semibold'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="ml-1 px-1.5 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full">
                        -{item.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* ========== MAIN ========== */}
      <main>

        {/* Hero Banner */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 py-12 sm:py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span>Yangi kolleksiya 2026</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
                  Yozgi
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    Chegirmalar
                  </span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 max-w-lg leading-relaxed">
                  Eng so'nggi moda tendensiyalari bilan tanishing. 50% gacha chegirmalar bilan xarid qiling!
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="#" className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5">
                    Hoziroq xarid qiling
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                    Videoni ko'rish
                  </a>
                </div>
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex -space-x-2">
                    {['\uD83D\uDC69', '\uD83D\uDC68', '\uD83D\uDC69\u200D\uD83E\uDD31', '\uD83D\uDC68\u200D\uD83E\uDD30', '\uD83E\uDDD1'].map((avatar, i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-gray-800 bg-gray-700 flex items-center justify-center text-sm">
                        {avatar}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-400">
                    <span className="text-white font-bold">12k+</span> muntazam mijozlar
                  </p>
                </div>
              </div>
              <div className="hidden lg:flex justify-center relative">
                <div className="relative">
                  <div className="w-72 h-72 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full blur-2xl opacity-30 absolute -top-10 -left-10 animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                    <div className="text-[120px] text-center">\uD83D\uDECD\uFE0F</div>
                    <div className="text-center space-y-1">
                      <p className="text-3xl font-bold">50%</p>
                      <p className="text-gray-300">gacha chegirma</p>
                    </div>
                    <div className="absolute -bottom-3 -right-3 bg-blue-600 rounded-full p-3 shadow-lg animate-bounce">
                      <span className="text-2xl">\uD83C\uDF89</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kategoriyalar */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Kategoriyalar</h2>
              <p className="text-gray-500 mt-1">O'zingizga kerakli bo'limni tanlang</p>
            </div>
            <a href="#" className="hidden sm:flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
              Barchasini ko'rish
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <a
                key={i}
                href="#"
                className="group relative overflow-hidden bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">{cat.icon}</div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{cat.name}</h3>
                  <p className="text-xs text-gray-400 mt-0.5">{cat.count}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Chegirma banner */}
        <section className="bg-gradient-to-r from-red-600 via-red-500 to-pink-600 py-10">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <span className="text-5xl">\u26A1</span>
              <div>
                <p className="text-white/80 text-sm uppercase tracking-widest">Cheklangan taklif</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Haftaning super chegirmalari!</h2>
                <p className="text-white/70 mt-1">Barcha mahsulotlar 40% gacha arzon</p>
              </div>
              <a href="#" className="ml-0 sm:ml-6 px-8 py-3 bg-white text-red-600 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
                Foydalanish
              </a>
            </div>
          </div>
        </section>

        {/* Mahsulotlar */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Ommabop mahsulotlar</h2>
              <p className="text-gray-500 mt-1">Eng ko'p sotilgan tovarlar</p>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                {/* Image */}
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:p-8 flex items-center justify-center overflow-hidden">
                  <span className="text-6xl sm:text-7xl group-hover:scale-110 transition-transform duration-500">{product.image}</span>
                  <span className={`absolute top-3 left-3 px-2 py-0.5 text-[10px] font-bold text-white rounded-md
                    ${product.badge === 'Yangi' ? 'bg-green-500' : product.badge === 'Chegirma' ? 'bg-red-500' : product.badge === 'HIT' ? 'bg-purple-500' : 'bg-orange-500'}`}>
                    {product.badge}
                  </span>
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 shadow-sm">
                    <svg className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/80 to-transparent"></div>
                </div>
                {/* Info */}
                <div className="p-3 sm:p-4">
                  <p className="text-[11px] text-gray-400 mb-1">{product.category}</p>
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base leading-tight mb-2 line-clamp-1">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-[10px] text-gray-400 ml-1">{product.rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-gray-900">
                      {product.price.toLocaleString()} so'm
                    </span>
                    {product.oldPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        {product.oldPrice.toLocaleString()} so'm
                      </span>
                    )}
                  </div>
                  <button className="mt-2 w-full py-2 bg-gray-900 hover:bg-blue-600 text-white text-sm font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20 flex items-center justify-center gap-2 group/btn">
                    <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                    </svg>
                    Savatga
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Xususiyatlar */}
        <section className="bg-white py-16 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: "\uD83D\uDE9A", title: "Bepul yetkazish", desc: "50 000 so'm dan yuqori" },
                { icon: "\uD83D\uDD04", title: "Bepul qaytarish", desc: "30 kun ichida" },
                { icon: "\uD83D\uDD12", title: "Xavfsiz to'lov", desc: "100% himoyalangan" },
                { icon: "\uD83D\uDCAC", title: "24/7 Qo'llab-quvvatlash", desc: "Tez yordam" },
              ].map((feature, i) => (
                <div key={i} className="text-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <h4 className="font-semibold text-gray-800 text-sm">{feature.title}</h4>
                  <p className="text-xs text-gray-400 mt-0.5">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mijozlar fikri */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <span className="text-xs text-blue-600 font-semibold uppercase tracking-widest">Mijozlar fikri</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">Ularning aytganlari</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(item.rating)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">"{item.text}"</p>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.avatar}</span>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
                    <p className="text-xs text-gray-400">Muntazam mijoz</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Yangiliklar */}
        <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Eng so'nggi yangiliklardan xabardor bo'ling!
            </h2>
            <p className="text-blue-200 mb-6 max-w-md mx-auto">
              Chegirmalar va yangi mahsulotlar haqida birinchilardan bo'lib xabar oling
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email manzilingiz"
                className="flex-1 px-4 py-3 rounded-xl border-0 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
              />
              <button className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-colors shadow-lg">
                Obuna bo'lish
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* ========== FOOTER ========== */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Company */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">\uD83D\uDECD\uFE0F</span>
                <h3 className="text-xl font-bold text-white">
                  Shop<span className="text-blue-400">Zone</span>
                </h3>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                Eng sifatli va arzon mahsulotlar bilan sizning xizmatingizda. 2020 yildan beri ishonchli hamkoringiz.
              </p>
              <div className="flex gap-3">
                {['\uD83D\uDCD8', '\uD83D\uDCF7', '\uD83D\uDC26', '\u25B6\uFE0F'].map((social, i) => (
                  <a key={i} href="#" className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-sm transition-all duration-300 hover:scale-110">
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Bo'limlar</h4>
              <ul className="space-y-2.5">
                {['Erkaklar', 'Ayollar', 'Bolalar', 'Aksessuarlar', 'Sport'].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-sm hover:text-blue-400 transition-colors duration-200">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Yordam</h4>
              <ul className="space-y-2.5">
                {['Yetkazib berish', "To'lov usullari", 'Buyurtma holati', 'Qaytarish', 'FAQ'].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-sm hover:text-blue-400 transition-colors duration-200">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Bog'lanish</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <span>\uD83D\uDCCD</span>
                  <span>Toshkent, O'zbekiston</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span>\uD83D\uDCDE</span>
                  <span>+998 90 123 45 67</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span>\u2709\uFE0F</span>
                  <span>info@shopzone.uz</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span>\uD83D\uDD50</span>
                  <span>Dushanba - Shanba: 9:00 - 21:00</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-8 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
              <p>&copy; 2026 ShopZone. Barcha huquqlar himoyalangan.</p>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-blue-400 transition-colors">Maxfiylik siyosati</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Foydalanish shartlari</a>
                <span className="flex items-center gap-2">
                  <span>\uD83D\uDCB3</span>
                  <span>Visa | UzCard | Click</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Zapar