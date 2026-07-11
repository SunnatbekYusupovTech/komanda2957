import React from 'react'

const Ot = () => {
  return (
    <div className="bg-[#0b0c10] text-white font-sans min-h-screen py-16 px-4 md:px-10">
  
  {/* SECTION 1: FEATURED COLLECTION */}
  <div className="max-w-[1200px] mx-auto mb-24">
    <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-4">
      <div>
        <span className="text-[#00FBFB] text-xs font-bold tracking-widest uppercase block mb-2">SELECTED ITEMS</span>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase leading-none">
          FEATURED <br /> COLLECTION
        </h2>
      </div>
      <p className="text-gray-400 text-sm max-w-xs md:text-right md:self-end leading-relaxed">
        Limited edition drops powered by our proprietary Manga Mesh AI. High-fidelity prints on sustainable, tech-infused fabrics.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="relative overflow-hidden group bg-[#12131a] md:col-span-1 md:row-span-2 h-[500px] md:h-[620px]">
        <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600&auto=format&fit=crop" alt="Cyberpunk Girl Hoodie" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-6">
          <span className="text-[#00FBFB] text-[10px] font-bold tracking-wider uppercase mb-1">CYBER-MANGA STYLE</span>
          <h3 className="text-xl font-bold mb-1">Cyberpunk Girl Hoodie</h3>
          <p className="text-[#00FBFB] font-mono text-sm">$95</p>
        </div>
        <button className="absolute bottom-6 right-6 bg-[#00FBFB] text-black p-3 rounded-none hover:bg-white transition-colors cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0s" /></svg>
        </button>
      </div>

      <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="relative overflow-hidden group bg-[#12131a] h-[300px] md:h-[295px]">
          <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop" alt="Mechanical Eye Tee" className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-6">
            <span className="text-[#00FBFB] text-[10px] font-bold tracking-wider uppercase mb-1">MINIMAL DESIGN</span>
            <h3 className="text-lg font-bold mb-1">Mechanical Eye Tee</h3>
            <p className="text-[#00FBFB] font-mono text-sm">$45</p>
          </div>
          <button className="absolute bottom-6 right-6 bg-[#00FBFB] text-black p-2.5 rounded-none hover:bg-white transition-colors cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0s" /></svg>
          </button>
        </div>

        <div className="relative overflow-hidden group bg-[#12131a] h-[300px] md:h-[295px]">
          <img src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop" alt="Katakana Zip-Up" className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-6">
            <span className="text-[#00FBFB] text-[10px] font-bold tracking-wider uppercase mb-1">LIMITED</span>
            <h3 className="text-lg font-bold mb-1">Katakana Zip-Up</h3>
            <p className="text-[#00FBFB] font-mono text-sm">$115</p>
          </div>
          <button className="absolute bottom-6 right-6 bg-[#00FBFB] text-black p-2.5 rounded-none hover:bg-white transition-colors cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0s" /></svg>
          </button>
        </div>

        <div className="relative overflow-hidden group bg-[#12131a] h-[300px] md:h-[300px] sm:col-span-2 md:col-span-2">
          <img src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=600&auto=format&fit=crop" alt="Action Sequence Tee" className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-6">
            <span className="text-[#00FBFB] text-[10px] font-bold tracking-wider uppercase mb-1">MANGA PRINT</span>
            <h3 className="text-lg font-bold mb-1">Action Sequence Tee</h3>
            <p className="text-[#00FBFB] font-mono text-sm">$45</p>
          </div>
          <button className="absolute bottom-6 right-6 bg-[#00FBFB] text-black p-2.5 rounded-none hover:bg-white transition-colors cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0s" /></svg>
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* SECTION 2: CRAFT YOUR LEGACY */}
  <div className="max-w-[1000px] mx-auto text-center border-t border-gray-900 pt-20">
    <h2 className="text-2xl font-black uppercase tracking-widest mb-2">CRAFT YOUR LEGACY</h2>
    <div className="w-16 h-[2px] bg-[#00FBFB] mx-auto mb-16"></div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border border-gray-700 rotate-45 flex items-center justify-center mb-8 bg-[#12131a]">
          <div className="-rotate-45 text-[#00FBFB]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 0 2.4 2.245h1.5a2.25 2.25 0 0 0 2.4-2.245 3 3 0 0 0-.52-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 3.395-1.622m-3.395 1.622a15.998 15.998 0 0 1-1.622-3.395m3.42 3.42L18.75 18.75" /></svg>
          </div>
        </div>
        <h4 className="font-bold uppercase tracking-wider text-sm mb-3">AI CANVAS</h4>
        <p className="text-gray-400 text-xs leading-relaxed max-w-[240px]">
          Describe your vision in text. From Cyberpunk samurai to 'Minimalist mecha heart'.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border border-gray-700 rotate-45 flex items-center justify-center mb-8 bg-[#12131a]">
          <div className="-rotate-45 text-[#00FBFB]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 21l8.982-8.982M18 10l-.793.793M12 9.018 13.5 3h-3.328" /></svg>
          </div>
        </div>
        <h4 className="font-bold uppercase tracking-wider text-sm mb-3">MANGA MESH</h4>
        <p className="text-gray-400 text-xs leading-relaxed max-w-[240px]">
          Our proprietary AI generates a unique, studio-grade manga-style graphic in seconds.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border border-gray-700 rotate-45 flex items-center justify-center mb-8 bg-[#12131a]">
          <div className="-rotate-45 text-[#00FBFB]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>
          </div>
        </div>
        <h4 className="font-bold uppercase tracking-wider text-sm mb-3">PREMIUM STITCH</h4>
        <p className="text-gray-400 text-xs leading-relaxed max-w-[240px]">
          We print and ship your custom apparel globally with meticulous attention to detail.
        </p>
      </div>
    </div>
  </div>

      {/* ===== SECTION 3: CHINA SHOP ===== */}
      <div className="bg-[#0f1117] py-20 px-4 md:px-10 border-t border-gray-900 mt-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-14 gap-4">
            <div>
              <span className="text-[#00FBFB] text-xs font-bold tracking-widest uppercase block mb-2">IMPORT FROM CHINA</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase leading-none">
                CHINA <span className="text-[#00FBFB]">SHOP</span>
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-xs md:text-right md:self-end leading-relaxed">
              Premium clothing directly sourced from China. High quality, affordable prices, fast delivery worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-[#12131a] overflow-hidden border border-gray-800 hover:border-[#00FBFB]/30 transition-all duration-300">
              <div className="relative overflow-hidden h-[350px]">
                <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=436&auto=format&fit=crop" alt="Chinese Silk Jacket" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-3 left-3 bg-[#00FBFB] text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider">New</div>
              </div>
              <div className="p-5">
                <span className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">CHINA IMPORT</span>
                <h3 className="text-white font-bold text-base mt-1 mb-1 group-hover:text-[#00FBFB] transition-colors">Chinese Silk Bomber Jacket</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#00FBFB] font-mono text-lg font-bold">$89</span>
                  <span className="text-gray-500 text-xs line-through">$149</span>
                  <span className="text-green-400 text-[10px] font-bold">-40%</span>
                </div>
                <button className="w-full bg-[#00FBFB] text-black py-3 font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors duration-300 cursor-pointer flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0s" /></svg>
                  Buy Now
                </button>
              </div>
            </div>

        
            <div className="group bg-[#12131a] overflow-hidden border border-gray-800 hover:border-[#00FBFB]/30 transition-all duration-300">
              <div className="relative overflow-hidden h-[350px]">
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=870&auto=format&fit=crop" alt="Chinese Streetwear Hoodie" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">Hot</div>
              </div>
              <div className="p-5">
                <span className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">CHINA IMPORT</span>
                <h3 className="text-white font-bold text-base mt-1 mb-1 group-hover:text-[#00FBFB] transition-colors">Streetwear Dragon Hoodie</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#00FBFB] font-mono text-lg font-bold">$55</span>
                  <span className="text-gray-500 text-xs line-through">$99</span>
                  <span className="text-green-400 text-[10px] font-bold">-44%</span>
                </div>
                <button className="w-full bg-[#00FBFB] text-black py-3 font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors duration-300 cursor-pointer flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0s" /></svg>
                  Buy Now
                </button>
              </div>
            </div>

            <div className="group bg-[#12131a] overflow-hidden border border-gray-800 hover:border-[#00FBFB]/30 transition-all duration-300">
              <div className="relative overflow-hidden h-[350px]">
                <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=464&auto=format&fit=crop" alt="Chinese Fashion Tee" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-3 left-3 bg-[#00FBFB] text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider">Sale</div>
              </div>
              <div className="p-5">
                <span className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">CHINA IMPORT</span>
                <h3 className="text-white font-bold text-base mt-1 mb-1 group-hover:text-[#00FBFB] transition-colors">Oriental Pattern T-Shirt</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#00FBFB] font-mono text-lg font-bold">$29</span>
                  <span className="text-gray-500 text-xs line-through">$59</span>
                  <span className="text-green-400 text-[10px] font-bold">-51%</span>
                </div>
                <button className="w-full bg-[#00FBFB] text-black py-3 font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors duration-300 cursor-pointer flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0s" /></svg>
                  Buy Now
                </button>
              </div>
            </div>

            <div className="group bg-[#12131a] overflow-hidden border border-gray-800 hover:border-[#00FBFB]/30 transition-all duration-300">
              <div className="relative overflow-hidden h-[350px]">
                <img src="https://images.unsplash.com/photo-1608236415056-4b1029f37c76?q=80&w=387&auto=format&fit=crop" alt="Chinese Varsity Jacket" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-5">
                <span className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">CHINA IMPORT</span>
                <h3 className="text-white font-bold text-base mt-1 mb-1 group-hover:text-[#00FBFB] transition-colors">Varsity Letterman Jacket</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#00FBFB] font-mono text-lg font-bold">$125</span>
                  <span className="text-gray-500 text-xs line-through">$199</span>
                  <span className="text-green-400 text-[10px] font-bold">-37%</span>
                </div>
                <button className="w-full bg-[#00FBFB] text-black py-3 font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors duration-300 cursor-pointer flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0s" /></svg>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ===== SECTION 4: FOOTER ===== */}
      <footer className="bg-[#08090e] border-t border-gray-900 pt-16 pb-8 px-4 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
         
            {/* Brand */}
            <div>
              <h3 className="text-xl font-black tracking-tight uppercase mb-4">
                CHINA <span className="text-[#00FBFB]">SHOP</span>
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Premium clothing and fashion items imported directly from China. Quality products at unbeatable prices with worldwide shipping.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 border border-gray-800 flex items-center justify-center hover:border-[#00FBFB] hover:bg-[#00FBFB]/10 transition-all duration-300 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-gray-500 group-hover:text-[#00FBFB] transition-colors" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></svg>
                </a>
                <a href="#" className="w-9 h-9 border border-gray-800 flex items-center justify-center hover:border-[#00FBFB] hover:bg-[#00FBFB]/10 transition-all duration-300 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-gray-500 group-hover:text-[#00FBFB] transition-colors" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15"/></svg>
                </a>
                <a href="#" className="w-9 h-9 border border-gray-800 flex items-center justify-center hover:border-[#00FBFB] hover:bg-[#00FBFB]/10 transition-all duration-300 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-gray-500 group-hover:text-[#00FBFB] transition-colors" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
                </a>
                <a href="#" className="w-9 h-9 border border-gray-800 flex items-center justify-center hover:border-[#00FBFB] hover:bg-[#00FBFB]/10 transition-all duration-300 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-gray-500 group-hover:text-[#00FBFB] transition-colors" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/></svg>
                </a>
              </div>
            </div>

        
            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-5 text-gray-300">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'Shop All', 'New Arrivals', 'Best Sellers', 'Sale'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 text-sm hover:text-[#00FBFB] transition-colors duration-300">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

      
            {/* Customer Service */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-5 text-gray-300">Customer Service</h4>
              <ul className="space-y-3">
                {['Contact Us', 'Shipping Info', 'Returns & Exchanges', 'Size Guide', 'FAQ'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 text-sm hover:text-[#00FBFB] transition-colors duration-300">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            
            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-5 text-gray-300">Newsletter</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Subscribe to get special offers, free giveaways, and exclusive deals.
              </p>
              <div className="flex border border-gray-800 overflow-hidden">
                <input type="email" placeholder="Your email" className="bg-transparent text-white text-sm px-4 py-3 flex-1 outline-none placeholder-gray-600" />
                <button className="bg-[#00FBFB] text-black px-5 font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors cursor-pointer">
                  Subscribe
                </button>
              </div>
              <div className="flex items-center gap-3 mt-6 text-gray-500 text-xs">
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-[#00FBFB]"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>
                  Secure Payment
                </div>
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-[#00FBFB]"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>
                  Free Shipping
                </div>
              </div>
            </div>
          </div>

        
          {/* Bottom bar */}
          <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-xs">
              &copy; 2026 <span className="text-[#00FBFB]">China Shop</span>. All rights reserved. Made with ❤️
            </p>
            <div className="flex gap-4 text-gray-600 text-xs">
              <a href="#" className="hover:text-[#00FBFB] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#00FBFB] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#00FBFB] transition-colors">Cookie Policy</a>
            </div>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-gray-900 text-gray-400 text-[10px] font-bold tracking-wider">VISA</span>
              <span className="px-2 py-1 bg-gray-900 text-gray-400 text-[10px] font-bold tracking-wider">MC</span>
              <span className="px-2 py-1 bg-gray-900 text-gray-400 text-[10px] font-bold tracking-wider">PAYPAL</span>
              <span className="px-2 py-1 bg-gray-900 text-gray-400 text-[10px] font-bold tracking-wider">ALIPAY</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Ot