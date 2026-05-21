import { useState } from 'react';
import { Palette, Globe, Check, Calculator, Ruler, Smartphone, Sparkles, Building2, LayoutTemplate, Coffee, ShoppingBag, Utensils } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Options Data
const DESIGN_STYLES = [
  { id: 'industrial', label: 'Industrial (Besi & Kayu)', icon: <Building2 className="w-5 h-5 mb-2" /> },
  { id: 'minimalist', label: 'Minimalis Modern', icon: <LayoutTemplate className="w-5 h-5 mb-2" /> },
  { id: 'colorful', label: 'Playful & Colorful', icon: <Palette className="w-5 h-5 mb-2" /> },
];

const WEB_CATEGORIES = [
  { id: 'fnb', label: 'F&B / Kuliner', icon: <Utensils className="w-5 h-5 mb-2" /> },
  { id: 'retail', label: 'Toko Retail', icon: <ShoppingBag className="w-5 h-5 mb-2" /> },
  { id: 'cafe', label: 'Cafe / Kopi', icon: <Coffee className="w-5 h-5 mb-2" /> },
  { id: 'services', label: 'Jasa / Lainnya', icon: <Sparkles className="w-5 h-5 mb-2" /> },
];

export default function BentoBuilder() {
  const [budget, setBudget] = useState<number>(15); // in millions
  const [length, setLength] = useState<number>(3);
  const [width, setWidth] = useState<number>(2);
  const [style, setStyle] = useState('industrial');
  const [webCategory, setWebCategory] = useState('fnb');
  
  const [wantsWeb, setWantsWeb] = useState(true);
  const [wantsLegal, setWantsLegal] = useState(true);
  const [wantsDesign, setWantsDesign] = useState(true);
  const [wantsMerchant, setWantsMerchant] = useState(true);

  const formatMillions = (val: number) => `Rp ${val} Juta`;

  const waText = `Halo Karya Kontainer! Saya tertarik membangun bisnis dengan preferensi berikut:\n\n`
    + `*Budget:* ${formatMillions(budget)}\n`
    + `*Ukuran Lahan:* ${length}m x ${width}m\n`
    + `*Gaya Desain Booth:* ${DESIGN_STYLES.find(s => s.id === style)?.label}\n`
    + `*Kategori Web:* ${wantsWeb ? WEB_CATEGORIES.find(w => w.id === webCategory)?.label : 'Tidak butuh web'}\n`
    + `*Tambahan:* ${[wantsDesign && 'Desain Branding', wantsLegal && 'Legalitas (NIB/Halal)', wantsMerchant && 'Daftar Merchant Online'].filter(Boolean).join(', ') || '-'}\n\n`
    + `Mohon konsultasi lebih lanjut.`;
    
  const waLink = `https://wa.me/6281330763633?text=${encodeURIComponent(waText)}`;

  return (
    <section id="kalkulator" className="py-24 bg-natural-bg/50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-natural-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-natural-accent/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-natural-primary text-white font-bold text-[10px] uppercase tracking-widest mb-4 shadow-md">
            <Sparkles className="w-3 h-3" /> Bebas Custom Sesuai Keinginan
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-natural-text mb-6">
            Rancang Paket Usahamu <br className="hidden md:block"/>Dalam <span className="text-natural-primary italic">Satu Dashboard</span>
          </h2>
          <p className="text-lg text-natural-text/70 mb-2">
            Pilih kebutuhan bisnis Anda, atur budget yang dimiliki, dan kami akan menyesuaikan solusinya. 
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          
          {/* Card 1: Budget Slider (Span 2 col) */}
          <div className="md:col-span-2 lg:col-span-2 bg-natural-base p-6 rounded-3xl border border-natural-border shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2 text-natural-text/70 uppercase tracking-widest text-xs font-bold">
                  <span>Target Budget</span>
                </div>
                <span className="text-3xl font-serif text-natural-primary font-bold">{formatMillions(budget)}</span>
              </div>
              <p className="text-sm text-natural-text/60 mb-6">Geser untuk menyesuaikan kesiapan dana awal bisnis Anda (Termasuk booth, alat, dll).</p>
            </div>
            <div>
              <input 
                type="range" 
                min="5" max="100" step="1" 
                value={budget} 
                onChange={(e) => setBudget(parseFloat(e.target.value))}
                className="w-full accent-natural-primary h-2 bg-natural-light rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-natural-text/40 font-bold uppercase mt-2">
                <span>Rp 5 Jt</span>
                <span>Rp 100+ Jt</span>
              </div>
            </div>
          </div>

          {/* Card 2: Lahan Ukuran */}
          <div className="md:col-span-1 lg:col-span-2 bg-natural-base p-6 rounded-3xl border border-natural-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-natural-light rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-natural-text/70 uppercase tracking-widest text-xs font-bold mb-4">
                <Ruler className="w-4 h-4 text-natural-accent" /> Ukuran Lahan (Meter)
              </div>
              <div className="flex gap-4 items-center justify-between mb-4">
                 <div className="flex flex-col flex-1">
                   <label className="text-[10px] text-natural-text/50 uppercase font-bold mb-1">Panjang</label>
                   <input type="number" value={length} onChange={e => setLength(Number(e.target.value))} className="w-full bg-natural-bg border border-natural-border rounded-xl px-3 py-2 text-xl font-serif text-natural-text font-bold text-center appearance-none focus:outline-none focus:border-natural-primary" />
                 </div>
                 <div className="text-xl font-light text-natural-text/30 mt-4">x</div>
                 <div className="flex flex-col flex-1">
                   <label className="text-[10px] text-natural-text/50 uppercase font-bold mb-1">Lebar</label>
                   <input type="number" value={width} onChange={e => setWidth(Number(e.target.value))} className="w-full bg-natural-bg border border-natural-border rounded-xl px-3 py-2 text-xl font-serif text-natural-text font-bold text-center appearance-none focus:outline-none focus:border-natural-primary" />
                 </div>
              </div>
              <div className="text-center py-2 bg-natural-light/50 rounded-lg text-sm text-natural-text font-bold">
                Luas: <span className="text-natural-primary">{length * width} m&sup2;</span>
              </div>
            </div>
          </div>

          {/* Card 3: Design Style Booth */}
          <div className="md:col-span-3 lg:col-span-2 bg-natural-base p-6 rounded-3xl border border-natural-border shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="flex items-center gap-2 text-natural-text/70 uppercase tracking-widest text-xs font-bold mb-4">
              <Palette className="w-4 h-4 text-natural-accent" /> Referensi Desain Booth
            </div>
            <div className="grid grid-cols-3 gap-3 flex-1">
              {DESIGN_STYLES.map(ds => (
                <button 
                  key={ds.id}
                  onClick={() => setStyle(ds.id)}
                  className={`flex flex-col items-center justify-center text-center p-3 rounded-2xl border transition-all ${style === ds.id ? 'border-natural-primary bg-natural-primary text-white shadow-md' : 'border-natural-border bg-natural-bg text-natural-text/60 hover:border-natural-primary/50'}`}
                >
                  <div className={`${style === ds.id ? 'text-white' : 'text-natural-primary'}`}>{ds.icon}</div>
                  <span className="text-[10px] font-bold leading-tight">{ds.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Card 4: Web Kategori */}
          <div className="md:col-span-3 lg:col-span-2 bg-natural-base p-6 rounded-3xl border border-natural-border shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2 text-natural-text/70 uppercase tracking-widest text-xs font-bold">
                <Globe className="w-4 h-4 text-natural-accent" /> Kategori Website
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={wantsWeb} onChange={() => setWantsWeb(!wantsWeb)} className="sr-only peer" />
                <div className="w-9 h-5 bg-natural-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-natural-primary"></div>
              </label>
            </div>
            <div className={`grid grid-cols-4 gap-2 flex-1 transition-opacity ${!wantsWeb ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
              {WEB_CATEGORIES.map(wc => (
                <button 
                  key={wc.id}
                  onClick={() => setWebCategory(wc.id)}
                  className={`flex flex-col items-center justify-center text-center p-2 rounded-2xl border transition-all ${webCategory === wc.id ? 'border-natural-primary bg-natural-primary/10 text-natural-primary font-bold' : 'border-natural-border bg-natural-bg text-natural-text/50 hover:bg-natural-light/50'}`}
                >
                  {wc.icon}
                  <span className="text-[9px] font-bold">{wc.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Card 5: Add-ons Legal & Design */}
          <div className="md:col-span-3 lg:col-span-4 bg-natural-primary p-6 md:p-8 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 text-white overflow-hidden relative">
            <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
            
            <div className="flex-1 z-10 w-full">
              <h3 className="text-2xl font-serif mb-2">Lengkapi Ekosistem Bisnis</h3>
              <p className="text-white/80 text-sm mb-4">Tambahkan layanan pendukung agar siap rilis tanpa pusing ke sana kemari.</p>
              
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors ${wantsDesign ? 'bg-white text-natural-primary' : 'bg-white/20 text-transparent border border-white/30'}`}>
                    <Check className="w-4 h-4" />
                  </div>
                  <input type="checkbox" checked={wantsDesign} onChange={e => setWantsDesign(e.target.checked)} className="hidden" />
                  <span className="text-sm font-bold opacity-90 group-hover:opacity-100">Desain Logo & Banner</span>
                </label>
                
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors ${wantsLegal ? 'bg-white text-natural-primary' : 'bg-white/20 text-transparent border border-white/30'}`}>
                    <Check className="w-4 h-4" />
                  </div>
                  <input type="checkbox" checked={wantsLegal} onChange={e => setWantsLegal(e.target.checked)} className="hidden" />
                  <span className="text-sm font-bold opacity-90 group-hover:opacity-100">Urus Legalitas (NIB/Halal)</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group mt-2 md:mt-0">
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors ${wantsMerchant ? 'bg-white text-natural-primary' : 'bg-white/20 text-transparent border border-white/30'}`}>
                    <Check className="w-4 h-4" />
                  </div>
                  <input type="checkbox" checked={wantsMerchant} onChange={e => setWantsMerchant(e.target.checked)} className="hidden" />
                  <span className="text-sm font-bold opacity-90 group-hover:opacity-100 whitespace-nowrap">Daftar Merchant Online</span>
                </label>
              </div>
            </div>

            <div className="w-full md:w-auto z-10">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-white text-natural-text hover:bg-natural-light px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm transition-transform hover:-translate-y-1 shadow-xl">
                Kirim Konfigurasi
              </a>
              <p className="text-[10px] text-white/50 text-center mt-3 uppercase tracking-widest">Konsultasi via WA Gratis & Tanpa Komitmen</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
