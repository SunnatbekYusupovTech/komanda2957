import React from 'react'

const Mirzohid = () => {
  return (
    // Barcha elementlarni bitta umumiy ota div o'rab turishi shart
    <div className='w-full min-h-screen bg-surface'>
      
      {/* 1. HEADER (class -> className ga o'zgartirildi) */}
      <header className="sticky top-0 z-50 flex justify-between items-center w-full px-4 md:px-margin-desktop py-4 bg-surface/90 backdrop-blur-md shadow-sm">
        <div className="flex items-center gap-8">
          <a className="font-headline-md text-headline-md font-black italic tracking-tighter text-primary dark:text-primary-fixed" href="#">APEX PITCH</a>
          <nav className="hidden md:flex items-center gap-6">
            <a className="text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1 font-label-bold text-label-bold hover:text-primary-fixed-variant transition-colors duration-200" href="#">Boots</a>
            <a className="text-on-surface dark:text-surface-variant font-label-bold text-label-bold hover:text-primary-fixed-variant transition-colors duration-200" href="#">Kits</a>
            <a className="text-on-surface dark:text-surface-variant font-label-bold text-label-bold hover:text-primary-fixed-variant transition-colors duration-200" href="#">Equipment</a>
            <a className="text-on-surface dark:text-surface-variant font-label-bold text-label-bold hover:text-primary-fixed-variant transition-colors duration-200" href="#">Elite</a>
          </nav>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden lg:flex items-center bg-surface-container px-4 py-2 rounded-full border border-outline-variant">
            <span className="material-symbols-outlined text-outline mr-2">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-label-bold placeholder:text-outline w-48" placeholder="Search gear..." type="text"/>
          </div>
          <button className="active:scale-95 transition-transform hover:text-primary-fixed-variant">
            <span className="material-symbols-outlined">favorite</span>
          </button>
          <button className="active:scale-95 transition-transform hover:text-primary-fixed-variant relative">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
          </button>
          <button className="active:scale-95 transition-transform hover:text-primary-fixed-variant">
            <span className="material-symbols-outlined">person</span>
          </button>
        </div>
      </header>

      {/* 2. MAIN */}
      <main className="max-w-container-max mx-auto px-4 md:px-margin-desktop py-8 md:py-16">
        <nav className="flex items-center gap-2 mb-8 text-on-surface-variant font-label-bold text-label-bold">
          <a className="hover:text-primary" href="#">Home</a>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <a className="hover:text-primary" href="#">Football Boots</a>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-on-surface">Apex Ultra Speed</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-16">
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="col-span-2 relative aspect-[4/3] bg-surface-container-low rounded-lg overflow-hidden group">
              <img className="w-full h-full object-cover product-image-transition group-hover:scale-110" alt="Apex Ultra Speed Boots" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXfezrgvQzuuExJAFDR8HFgd7K7ujXB80ZrotMGi5VicPnxiH3y8c1mkSq6vrmvw2b4sbAHB57AehDBn9rvwVQzAul2c_h5poh_spLL5U4_XvZVwiuJlaqMGNTxlCZkEraIe2508hBR-wrX4uk1VuWTzCdzeZP-z4HUub-BBP0GStcIYBLzKSK6WMcbhjLRz3T67MdKp8BP7SeuvWOrH1oNLYK7Op4ylkUfmPpv4P0Ps8CAzf-BOkshJ68KN7_GJN-6WEh1lZmM5nW"/>
              <div className="absolute top-4 left-4 bg-tertiary text-on-tertiary font-label-bold text-label-bold px-3 py-1 shear-btn"><span>ELITE PERFORMANCE</span></div>
            </div>
            <div className="aspect-square bg-surface-container-low rounded-lg overflow-hidden">
              <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="Sole plate close up" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNelhZemrnobz7LNIp2EhgNzcyf_R8QKW1axY-HTG6NzzV1ubiSH5A252b6myfb2LUN9SHrb8Wt0H3LGB0f09DsXag4rhJTWZDr0KCAv9HnOMqay5QAG4Dw47Ny83lR7EC6aR7MOkTFt3QsZ7Ygsm9BZa7CKo4dJmiIa0x3_c1Ng87JwWVkM46XeN_0FiwPmdocu0drjdIpAgydyI9sxlAv0wx4cbTNmr1IvQUCcut7KzMsKxbb9ItdKTCqrBC0Wz1QmwLldFXn5d9"/>
            </div>
            <div className="aspect-square bg-surface-container-low rounded-lg overflow-hidden">
              <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="Texture detailed view" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4WE_7P8zRNJJbdjR2QWIeIp011DvRjH-X5IoyaxHp6fU8k7HWLTXRBhPZ9sJu659whhiU0_j5HMoa4pV83MD3BwsmYvDSMMqL5r3AHRIWT7K3uBdCn2v1X93_1nrhwWuCiSGEvGi5vFv5YCrYnrhoo05VneFrQ5uLASFx2mUEkWN7aeuhLVSCQiX96y3V1nlfQif-OGswsF37HQ6rpP3oscXBFiBBaLLUML0kjN9On8_KjwEUqdiJlBIdLMTYqbinjj5UGZSyq32J"/>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-2 mb-2 text-primary">
                <div className="flex">
                  <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined text-sm">star_half</span>
                </div>
                <span className="font-label-bold text-label-bold">(128 Reviews)</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg md:text-headline-lg mb-2 tracking-tight">APEX ULTRA SPEED BOOTS</h1>
              <p className="text-headline-md font-headline-md text-tertiary">$249.99</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="font-label-bold text-label-bold">SELECT SIZE (US)</span>
                <a className="text-label-sm font-label-sm underline text-on-surface-variant hover:text-primary" href="#">Size Guide</a>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <button className="py-3 border border-outline-variant hover:border-primary font-label-bold text-label-bold transition-colors">7</button>
                <button className="py-3 border border-outline-variant hover:border-primary font-label-bold text-label-bold transition-colors">8</button>
                <button className="py-3 border-2 border-primary bg-primary-container font-label-bold text-label-bold">9</button>
                <button className="py-3 border border-outline-variant hover:border-primary font-label-bold text-label-bold transition-colors">10</button>
                <button className="py-3 border border-outline-variant hover:border-primary font-label-bold text-label-bold transition-colors">11</button>
                <button className="py-3 border border-outline-variant hover:border-primary font-label-bold text-label-bold transition-colors">12</button>
                <button className="py-3 border border-outline-variant opacity-40 cursor-not-allowed font-label-bold text-label-bold line-through">13</button>
                <button className="py-3 border border-outline-variant hover:border-primary font-label-bold text-label-bold transition-colors relative group">
                  14
                  <span className="absolute -top-2 -right-1 bg-tertiary text-on-tertiary text-[8px] px-1 rounded-sm">LOW STOCK</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button className="w-full bg-primary-fixed text-on-secondary-fixed py-5 font-headline-md shear-btn hover:bg-primary-fixed-dim transition-colors active:scale-[0.98]">
                <span>ADD TO CART</span>
              </button>
              <button className="w-full border-2 border-on-secondary-fixed text-on-secondary-fixed py-5 font-headline-md shear-btn hover:bg-on-secondary-fixed hover:text-white transition-all active:scale-[0.98]">
                <span>BUY NOW</span>
              </button>
            </div>

            <div className="flex items-center gap-6 py-4 border-y border-outline-variant">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">local_shipping</span>
                <span className="text-label-sm font-label-sm">Free Express Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                <span className="text-label-sm font-label-sm">2-Year Warranty</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-headline-md text-headline-md">TECH SPECS</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container p-4 rounded-lg">
                  <span className="text-label-sm font-label-sm text-outline block uppercase mb-1">Weight</span>
                  <span className="font-label-bold text-label-bold text-on-surface">180g (Ultra Light)</span>
                </div>
                <div className="bg-surface-container p-4 rounded-lg">
                  <span className="text-label-sm font-label-sm text-outline block uppercase mb-1">Traction</span>
                  <span className="font-label-bold text-label-bold text-on-surface">Grip-Slam Studs</span>
                </div>
                <div className="bg-surface-container p-4 rounded-lg">
                  <span className="text-label-sm font-label-sm text-outline block uppercase mb-1">Material</span>
                  <span className="font-label-bold text-label-bold text-on-surface">Aero-Weave Upper</span>
                </div>
                <div className="bg-surface-container p-4 rounded-lg">
                  <span className="text-label-sm font-label-sm text-outline block uppercase mb-1">Surface</span>
                  <span className="font-label-bold text-label-bold text-on-surface">Firm Ground (FG)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-12 -left-12 font-display-xl text-surface-container-highest opacity-50 -z-10 select-none">PERFORM</div>
            <h2 className="font-headline-lg text-headline-lg mb-6 leading-none">ENGINEERED FOR THE <br/><span className="text-primary italic">1% MOMENTS.</span></h2>
            <div className="space-y-4 text-body-lg font-body-lg text-on-secondary-fixed-variant">
              <p>The Apex Ultra Speed is not just a boot; it's a precision instrument. Designed in collaboration with world-class sprinters and elite midfielders, every gram has been scrutinized to deliver explosive acceleration.</p>
              <p>The Aero-Weave upper provides a second-skin feel while ensuring maximum lockdown during high-speed pivots. Our patented Grip-Slam sole plate features multi-directional studs that bite into the pitch, giving you the edge when every millisecond counts.</p>
            </div>
            <div className="mt-8 flex gap-4">
              <div className="flex flex-col items-center p-4 bg-primary-container/20 rounded-full w-24 h-24 justify-center border border-primary-container">
                <span className="font-headline-md text-primary">+15%</span>
                <span className="text-[10px] font-bold text-outline">SPEED</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-tertiary-container/20 rounded-full w-24 h-24 justify-center border border-tertiary-container">
                <span className="font-headline-md text-tertiary">-20g</span>
                <span className="text-[10px] font-bold text-outline">WEIGHT</span>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img className="w-full h-full object-cover aspect-video" alt="Footballer mid-sprint" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgSeeWk9j8LA-9XvpKypCpHZQ28Efn4f8SdHg2dTjIiCG6FJqKtoB-ZtEkj6aB-kRlg-F6Oi405I0mGXKzAN_MvIZLk0VC_oC9fUZrcXV-k4x5_pGcQDvNuUsrPLrZPFImhDjEI5OK9ZX5D9s0Je5lIQJIhyiMUT0neJmWl6NL2Hui5QAtBFmuj_UP08jerGkllXOJhbCSBuYBWlLxTL379FEsnaidcsi_bHOQkRmZNqqChp9UxdfVMZtOiDD-hXgeerKocZaRzYmF"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <p className="text-white font-headline-md italic">"THE LIGHTEST BOOTS I'VE EVER WORN." — MARCUS V., PRO STRIKER</p>
            </div>
          </div>
        </section>

        <section className="mt-32">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-headline-lg text-headline-lg tracking-tight">COMPLETE THE KIT</h2>
              <p className="text-on-surface-variant font-label-bold">Recommended gear for the Apex Elite.</p>
            </div>
            <div className="flex gap-2">
              <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-surface-container overflow-hidden rounded-lg mb-4">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Apex Pro Compression Top" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCodAXZKVe_CAv7q0zboAAlDYAA6b7D6kCPMLsWkJvUNgRiOen_NgRpADuBAsRYvRF3M8Py9RdDIsFhq-Ih295dbWrMDW2CSiOtAdCC9hH53ejeaAK0lWaYXlWjjZgJuAF-4s8Iz2RuRAj_O1T79mPwFzPtiRh2siX8v4hdiqawcCCRQXsrd9HIRHtdyTgpUmkhXnHzoTnYt2EYdS31RzTnPZHQ1ronaoqcejsr_idT-CA-jVPOQs7dQuQFOPbHukuNKtq7pdZUsM3S"/>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-bold">NEW ARRIVAL</div>
              </div>
              <h3 className="font-label-bold text-label-bold group-hover:text-primary transition-colors">Apex Pro Compression Top</h3>
              <p className="text-on-surface-variant text-label-sm font-label-sm">$65.00</p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-surface-container overflow-hidden rounded-lg mb-4">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Apex Grip-Lock Socks" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy_x2iZimF_lGVx5IuOBqdKov6ejWbWtBnwkorY4V2hpbGNhMlYHrV6Ho5sOBd1pAwvJtWLnJxgjxLdKVDuSW_MAs4rwrIxQpPC4rscp3dDe-ki73itp6XIEB_mupnDbfHbBOr-jpBV9XTj8rktYseuThBXWwPxx3Emxynv26aCCrZi06GaeAS7MhbORhvsmPhAG1qUFIL1at-Yc9jUO2YgAFi7aqHnqFcN7am8_Wl6_RFY5zPNZbBEw4ppRqHLVseOKL4bTl7GQCX"/>
              </div>
              <h3 className="font-label-bold text-label-bold group-hover:text-primary transition-colors">Apex Grip-Lock Socks</h3>
              <p className="text-on-surface-variant text-label-sm font-label-sm">$22.00</p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-surface-container overflow-hidden rounded-lg mb-4">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Apex Pitch Elite Ball" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw7FjyQIXeR8iHpGWa-7xD8Lxn_HEw0wgwfVuV_jPHALBrSt55fMg5ONfIUsdWbmVjd_J22IZu5JlDngeAu9_FZGgMbXE5_hNH5f6iPTC5H8IPLfayGxxu2nf-iBV7G4j738Ri8PEexgPuESBo53VQIEJJNt0aPmN_j1XBCNyrI4SzGtq627OZ-QgRMS-exuYcWmHz9uOP6lF9zNvPgoqTdpNwPFJwsDLhXDpiN5r1dsQNEI0OX6-q6in5gJUIYOapMRrCY-oIvZkH"/>
              </div>
              <h3 className="font-label-bold text-label-bold group-hover:text-primary transition-colors">Apex Pitch Elite Ball</h3>
              <p className="text-on-surface-variant text-label-sm font-label-sm">$140.00</p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-surface-container overflow-hidden rounded-lg mb-4">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Apex Carbon Shield Lite" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvNNsl--z9xKlDwPv9FLd3gu6dZZj4gWt1DKK3Suzmn-DFx-oMquaMGNif0n1BrJjRhN5s362RsTtDbxVfgmDc2i9C26xaOqsvzImAtobQ5QPPMsaAjLXYCQ_119P_xoipviJZaBBLshS6aU6L8-7ZB8V-GpW_8uwrN7o91Dq7JIUrA_g6A1ItRnWksnaV-BMQ6BXV_8iFaqhSvAUYDnFbYzB1Ymar-6ar2aM05T7OqBJ57XOpPu9Wc6BbOmKN89svKe8aJv3vLgOh"/>
              </div>
              <h3 className="font-label-bold text-label-bold group-hover:text-primary transition-colors">Apex Carbon Shield Lite</h3>
              <p className="text-on-surface-variant text-label-sm font-label-sm">$85.00</p>
            </div>
          </div>
        </section>
      </main>

      {/* 3. FOOTER */}
      <footer className="bg-on-secondary-fixed dark:bg-surface-container-lowest border-t border-outline-variant w-full py-20 px-4 md:px-margin-desktop mt-32">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <div className="col-span-1 md:col-span-2">
            <a className="font-headline-md text-headline-md text-primary-fixed dark:text-primary italic mb-6 block" href="#">APEX PITCH</a>
            <p className="text-surface-variant dark:text-on-surface-variant max-w-sm mb-8 font-body-md">Our mission is to equip the next generation of elite athletes with gear that defies limits. Engineered for speed, designed for dominance.</p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-on-secondary-fixed-variant flex items-center justify-center hover:bg-primary-fixed transition-colors" href="#">
                <span className="material-symbols-outlined text-white text-lg">public</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-on-secondary-fixed-variant flex items-center justify-center hover:bg-primary-fixed transition-colors" href="#">
                <span className="material-symbols-outlined text-white text-lg">chat</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-on-secondary-fixed-variant flex items-center justify-center hover:bg-primary-fixed transition-colors" href="#">
                <span className="material-symbols-outlined text-white text-lg">videocam</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-primary-fixed font-label-bold text-label-bold mb-6">SUPPORT</h4>
            <ul className="space-y-4 text-surface-variant dark:text-on-surface-variant font-label-bold">
              <li><a className="hover:text-primary-fixed transition-all focus:underline decoration-primary-fixed decoration-2 underline-offset-4" href="#">Shipping &amp; Returns</a></li>
              <li><a className="hover:text-primary-fixed transition-all focus:underline decoration-primary-fixed decoration-2 underline-offset-4" href="#">Size Guide</a></li>
              <li><a className="hover:text-primary-fixed transition-all focus:underline decoration-primary-fixed decoration-2 underline-offset-4" href="#">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary-fixed font-label-bold text-label-bold mb-6">LEGAL</h4>
            <ul className="space-y-4 text-surface-variant dark:text-on-surface-variant font-label-bold">
              <li><a className="hover:text-primary-fixed transition-all focus:underline decoration-primary-fixed decoration-2 underline-offset-4" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-primary-fixed transition-all focus:underline decoration-primary-fixed decoration-2 underline-offset-4" href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-container-max mx-auto mt-20 pt-8 border-t border-outline-variant/20">
          <p className="text-surface-variant/60 dark:text-on-surface-variant/60 font-label-sm text-label-sm">© 2024 Apex Pitch. Engineered for the Elite.</p>
        </div>
      </footer>

    </div> // Mana shu o'rab turuvchi div oxirida yopilishi shart edi
  )
}

export default Mirzohid;