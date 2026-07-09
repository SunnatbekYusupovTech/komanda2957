import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const INITIAL_CARS = [
  { id: 1, brand: 'Chevrolet', model: 'Corvette C8 Cosmic', price: 89000, color: 'Qizil', img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800' },
  { id: 2, brand: 'Toyota', model: 'Supra MK5 Hyper', price: 58000, color: 'Sariq', img: 'https://images.unsplash.com/photo-1617469767053-d3b508a0d13c?auto=format&fit=crop&q=80&w=800' },
  { id: 3, brand: 'Hyundai', model: 'Ioniq 5 Cyber N', price: 69000, color: 'Ko\'k', img: 'https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?auto=format&fit=crop&q=80&w=800' },
  { id: 4, brand: 'Chevrolet', model: 'Camaro ZL1 Stealth', price: 75000, color: 'Qora', img: 'https://images.unsplash.com/photo-1611245801097-453d6e2e9093?auto=format&fit=crop&q=80&w=800' },
  { id: 5, brand: 'Toyota', model: 'Land Cruiser Carbon', price: 98000, color: 'Oq', img: 'https://images.unsplash.com/photo-1627454820516-dc767bcb4d3e?auto=format&fit=crop&q=80&w=800' },
  { id: 6, brand: 'Hyundai', model: 'Elantra N Kinetic', price: 38000, color: 'Kulrang', img: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&q=80&w=800' },
];

export default function App() {
  const [cars, setCars] = useState(INITIAL_CARS);
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [sortByPrice, setSortByPrice] = useState('default');
  const [activeTab, setActiveTab] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1200, // Sal sekinroq, premium harakatlanadi
      once: false,
      easing: 'ease-out-back', // Orqaga biroz siltanib ochiladigan effekt
    });
  }, []);

  const changeCarColor = (id, newColor) => {
    setCars(cars.map(car => car.id === id ? { ...car, color: newColor } : car));
  };

  const filteredCars = cars
    .filter(car => selectedBrand === 'All' ? true : car.brand === selectedBrand)
    .sort((a, b) => {
      if (sortByPrice === 'low') return a.price - b.price;
      if (sortByPrice === 'high') return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans antialiased overflow-x-hidden relative selection:bg-cyan-500 selection:text-black">
      
      {/* 🌌 ULTRA CYBERPUNK BACKGROUND (Futuristik kiber fon) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* 🔴 DYNAMIC NEON GLOW ORBS (Aylanib turadigan neon sharlar) */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/30 to-purple-600/30 rounded-full blur-[160px] pointer-events-none mix-blend-screen animate-pulse"></div>
      <div className="absolute top-[30%] right-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-full blur-[140px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-[10%] left-[10%] w-[550px] h-[550px] bg-gradient-to-tr from-fuchsia-600/10 to-blue-600/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

      {/* ==================== NAVBAR (HEADER) ==================== */}
      <nav className="sticky top-0 z-50 bg-[#030712]/60 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Logo Neon effekti bilan */}
            <div className="flex-shrink-0 flex items-center group cursor-pointer">
              <span className="text-2xl font-black tracking-widest bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent group-hover:brightness-125 transition-all">
                HYPER_DRIVE
              </span>
              <div className="w-2 h-2 rounded-full bg-cyan-400 ml-1 shadow-[0_0_10px_#22d3ee] animate-ping"></div>
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-1 bg-white/5 border border-white/10 p-1.5 rounded-full backdrop-blur-md">
              {['Asosiy', 'Katalog', 'Eksklyuziv'].map((item, idx) => (
                <a 
                  key={idx}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setActiveTab(idx)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                    activeTab === idx 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-[0_0_15px_rgba(34,211,238,0.4)] font-black' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Trigger */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-400 hover:text-cyan-400 focus:outline-none transition-colors"
              >
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#030712]/95 border-b border-white/5 px-4 pt-2 pb-4 space-y-2 backdrop-blur-2xl">
            {['Asosiy', 'Katalog', 'Eksklyuziv'].map((item, idx) => (
              <a 
                key={idx}
                href={`#${item.toLowerCase()}`}
                onClick={() => { setIsMobileMenuOpen(false); setActiveTab(idx); }}
                className="block px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-cyan-400 rounded-xl transition font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ==================== HERO SECTION (Kiber-Sarlavha) ==================== */}
      <header id="asosiy" className="relative pt-24 pb-20 px-4 max-w-7xl mx-auto text-center z-10">
        <div data-aos="zoom-out-down" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-fuchsia-400 bg-fuchsia-950/30 border border-fuchsia-800/40 px-5 py-2 rounded-full mb-8 shadow-[0_0_20px_rgba(240,70,250,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse"></span>
          CYBERNETIC MATRIX EDITION 4.0
        </div>
        
        <h1 
          data-aos="fade-up"
          className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-8 uppercase leading-none"
        >
          KODNI <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent filter drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">TEZLIKKA</span> ALMASHTIRING
        </h1>
        
        <p 
          data-aos="fade-up" 
          data-aos-delay="200"
          className="text-slate-400 max-w-3xl mx-auto text-lg md:text-xl mb-12 leading-relaxed font-light"
        >
          Chevrolet, Toyota va Hyundai modellarining raqamli evolyutsiyasi. Har bir skrol harakatida virtual aerodinamikani his eting.
        </p>

        {/* INTERAKTIV GADGET GLOW BUTTONS */}
        <div data-aos="fade-up" data-aos-delay="400" className="flex flex-wrap justify-center gap-5">
          {['Gidravlika', 'Kiber Tizim', 'Neyro Drayv'].map((text, idx) => (
            <button
              key={idx}
              className="px-8 py-4 bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 hover:border-cyan-500/60 rounded-2xl font-bold tracking-wider text-sm uppercase text-slate-200 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:-translate-y-1 active:scale-95"
            >
              {text}
            </button>
          ))}
        </div>
      </header>

      {/* ==================== STATISTIKA (Xuddi pribor panelidek porlaydi) ==================== */}
      <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6 z-10 relative">
        {[
          { label: 'TOP TEZLIK (KM/S)', val: '420+', color: 'from-cyan-400 to-blue-500' },
          { label: 'NEYRO SINXRONLIK', val: '99.4%', color: 'from-blue-500 to-indigo-500' },
          { label: 'FAOL MATRITSA', val: '2,048', color: 'from-indigo-500 to-fuchsia-500' },
          { label: 'YILLIK COIN BONUS', val: '200+', color: 'from-fuchsia-500 to-pink-500' },
        ].map((stat, i) => (
          <div 
            key={i} 
            data-aos="flip-left"
            data-aos-delay={i * 100} 
            className="bg-white/[0.02] border border-white/5 hover:border-white/10 p-6 rounded-2xl backdrop-blur-xl relative group overflow-hidden transition-all duration-500"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className={`text-3xl md:text-5xl font-black tracking-tight bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
              {stat.val}
            </div>
            <div className="text-[10px] md:text-xs font-bold text-slate-500 tracking-widest mt-3 uppercase">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* ==================== KATALOG SEKSIYASI ==================== */}
      <main id="katalog" className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        
        {/* FILTERS (Matritsa uslubida) */}
        <div 
          data-aos="fade-zoom-in"
          className="bg-white/[0.01] border border-white/5 p-6 rounded-3xl mb-16 flex flex-col md:flex-row justify-between items-center gap-6 backdrop-blur-2xl"
        >
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-2">Filtr:</span>
            {['All', 'Chevrolet', 'Toyota', 'Hyundai'].map(brand => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                  selectedBrand === brand
                    ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {brand === 'All' ? 'Barchasi' : brand}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end border-t border-white/5 md:border-none pt-4 md:pt-0">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Narxlar:</span>
            <select
              value={sortByPrice}
              onChange={(e) => setSortByPrice(e.target.value)}
              className="bg-[#0b0f19] border border-white/10 text-slate-300 rounded-xl px-4 py-2 text-xs font-semibold focus:outline-none focus:border-cyan-500 cursor-pointer transition-colors"
            >
              <option value="default">Odatiy holat</option>
              <option value="low">Arzonidan qimmatiga</option>
              <option value="high">Qimmatidan arzoniga</option>
            </select>
          </div>
        </div>

        {/* 🏎️ CARS GRID (AOS ketma-ket harakatlantiradi) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car, index) => (
            <div
              key={car.id}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 150} 
              className="group bg-[#0b0f19]/40 border border-white/5 rounded-3xl overflow-hidden hover:border-cyan-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(34,211,238,0.12)] relative"
            >
              {/* Rasm oynasi */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <img 
                  src={car.img} 
                  alt={car.model} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05] brightness-[0.9]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-90"></div>
                
                {/* Brend nishoni */}
                <span className="absolute bottom-4 left-4 bg-black/60 border border-white/10 backdrop-blur-md text-cyan-400 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-md shadow-lg">
                  {car.brand}
                </span>
              </div>

              {/* Kontent oynasi */}
              <div className="p-6 space-y-5">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors uppercase">
                    {car.model}
                  </h3>
                  <span className="text-base font-black text-emerald-400 filter drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">
                    ${car.price.toLocaleString()}
                  </span>
                </div>

                {/* Neon Rang Tanlagich (Interaktiv o'zgarish bilan) */}
                <div className="flex justify-between items-center text-xs border-t border-white/5 pt-4">
                  <span className="text-slate-500 font-bold tracking-wider uppercase">
                    Matritsa Rangi: <strong className="text-slate-200 font-black ml-1">{car.color}</strong>
                  </span>
                  
                  <div className="flex gap-2">
                    {['Qizil', 'Ko\'k', 'Sariq', 'Qora'].map((c) => (
                      <button
                        key={c}
                        onClick={() => changeCarColor(car.id, c)}
                        className={`w-3.5 h-3.5 rounded-full border border-black ring-1 transition-all duration-300 transform hover:scale-130 ${
                          c === 'Qizil' ? 'bg-red-500 ring-red-500/50 hover:shadow-[0_0_8px_#ef4444]' :
                          c === 'Ko\'k' ? 'bg-blue-500 ring-blue-500/50 hover:shadow-[0_0_8px_#3b82f6]' :
                          c === 'Sariq' ? 'bg-yellow-400 ring-yellow-400/50 hover:shadow-[0_0_8px_#eab308]' : 
                                          'bg-zinc-800 ring-zinc-500/50 hover:shadow-[0_0_8px_#27272a]'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Giper-Ssilka Tugmasi */}
                <button className="w-full py-3.5 bg-white/5 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 text-slate-300 hover:text-black font-black text-xs uppercase tracking-widest rounded-2xl transition-all duration-300 border border-white/5 hover:border-transparent">
                  Giper-Sinfni Yuklash
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer id="eksklyuziv" className="border-t border-white/5 bg-[#02050c] text-slate-600 py-12 text-center text-xs relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="tracking-wide">© 2026 HYPER_DRIVE MATRIX. 200 COIN REYTINQI TASDIQLANDI 🦾</p>
          <div className="flex space-x-6 font-bold tracking-widest uppercase text-slate-500">
            <span className="hover:text-cyan-400 cursor-pointer transition-colors">Tizim</span>
            <span className="hover:text-fuchsia-400 cursor-pointer transition-colors">Yadro</span>
            <span className="hover:text-white cursor-pointer transition-colors">Aloqa</span>
          </div>
        </div>
      </footer>
    </div>
  );
}