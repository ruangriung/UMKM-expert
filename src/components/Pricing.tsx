import React, { useState } from 'react';
import { Check, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CATEGORIES = [
  { id: 'semua', label: 'Semua Paket' },
  { id: 'baru', label: 'UMKM / Usaha Baru' },
  { id: 'upgrade', label: 'Upgrade Fisik' },
  { id: 'franchise', label: 'Kemitraan / Franchise' },
];

const pricingPlans = [
  {
    name: "Paket Dasar",
    size: "Website + Legalitas Dasar",
    priceRange: "Rp 25 Juta",
    categories: ['semua', 'baru'],
    bestFor: "Memulai bisnis dengan fondasi digital dan legal yang kuat",
    features: [
      "Pembuatan Website Profil Usaha",
      "Setup 3 Akun Media Sosial",
      "Desain Banner & Kartu Nama",
      "Penerbitan NIB",
      "Pendirian Badan Usaha CV"
    ],
    highlight: false
  },
  {
    name: "Paket Bisnis",
    size: "Paket Dasar + Booth & Ekosistem",
    priceRange: "Rp 75 Juta",
    categories: ['semua', 'upgrade', 'baru'],
    bestFor: "Usaha siap operasional dengan gerai fisik",
    features: [
      "Semua fitur di Paket Dasar",
      "Pembuatan Booth Kontainer Kustom",
      "Seluruh Materi Promosi (Stiker, Flyer, Kemasan, dll)",
      "Pendaftaran & Optimasi Marketplace",
      "Pendaftaran Merchant Online (GrabFood, GoFood, dll)"
    ],
    highlight: true
  },
  {
    name: "Paket Premium",
    size: "Skala Penuh + Sertifikasi",
    priceRange: "Rp 150 Juta",
    categories: ['semua', 'franchise', 'upgrade'],
    bestFor: "Ekspansi skala besar & kemitraan jangka panjang",
    features: [
      "Semua fitur di Paket Bisnis",
      "Manajemen Iklan Digital (Ads) selama 3 Bulan",
      "Asistensi & Pengurusan Sertifikasi Halal",
      "Pendirian Badan Usaha PT",
      "Lobi Perizinan Tambahan Terkait"
    ],
    highlight: false
  },
  {
    name: "Paket Custom",
    size: "Kombinasi Modular",
    priceRange: "Menyesuaikan",
    categories: ['semua', 'baru', 'upgrade', 'franchise'],
    bestFor: "Kebutuhan unik spesifik yang tidak ada di paket standar",
    features: [
      "Kombinasi layanan sesuai dengan anggaran & kebutuhan",
      "Konsultasi khusus desain booth & ukuran",
      "Penyesuaian target marketing & optimasi SEO spesifik",
      "Modifikasi fitur legalitas & sertifikasi"
    ],
    highlight: false
  }
];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('semua');

  const filteredPlans = pricingPlans.filter(plan => 
    plan.categories.includes(activeTab)
  );

  return (
    <section id="harga" className="py-24 bg-natural-base relative top-border-curve">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-natural-light text-natural-text/80 font-bold text-[10px] uppercase tracking-widest mb-4 border border-natural-border">
            Pilihan Fleksibel
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-natural-text mb-6">
            Pilih Paket Sesuai <br className="hidden md:block"/>Skala Bisnismu
          </h2>
          <p className="text-lg text-natural-text/70 mb-8">
             Harga dapat disesuaikan kembali (custom) sesuai budget dan tingkat kesulitan desain bangunan, web atau legalitas yang dibutuhkan.
          </p>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-4 bg-natural-bg p-2 rounded-2xl border border-natural-border shadow-sm max-w-fit mx-auto">
            {CATEGORIES.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all
                  ${activeTab === category.id 
                    ? 'bg-natural-primary text-white shadow-md' 
                    : 'text-natural-text/70 hover:bg-natural-light hover:text-natural-text'
                  }
                `}
              >
                {activeTab === category.id && <Filter className="w-3.5 h-3.5" />}
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:px-4 items-start"
        >
          <AnimatePresence mode="popLayout">
            {filteredPlans.map((plan, idx) => (
              <motion.div 
                key={plan.name} // Unique key for animation
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`relative flex flex-col p-8 rounded-3xl border w-full h-full ${plan.highlight ? 'border-natural-accent shadow-2xl z-10 bg-natural-primary lg:scale-105' : 'border-natural-border bg-natural-bg shadow-xl'}`}
              >
                
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-natural-accent text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20 whitespace-nowrap">
                    PALING DIMINATI
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className={`text-xl font-serif mb-2 ${plan.highlight ? 'text-natural-bg' : 'text-natural-text'}`}>{plan.name}</h3>
                  <p className={`text-xs md:text-sm leading-relaxed ${plan.highlight ? 'text-natural-bg/80' : 'text-natural-text/70'}`}>Cocok untuk: {plan.bestFor}</p>
                  <div className="mt-4 flex items-baseline text-2xl md:text-3xl font-serif gap-2">
                    <span className={plan.highlight ? 'text-natural-accent' : 'text-natural-text'}>{plan.priceRange}</span>
                  </div>
                  <div className={`mt-2 text-xs font-bold uppercase tracking-wider ${plan.highlight ? 'text-natural-bg/80' : 'text-natural-text/80'}`}>
                     Fokus: {plan.size}
                  </div>
                </div>

                <div className="flex-1">
                  <ul className="space-y-4 mb-4">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 shrink-0 mt-0.5 ${plan.highlight ? 'text-natural-accent' : 'text-natural-primary'}`} />
                        <span className={`text-xs md:text-sm font-medium leading-relaxed ${plan.highlight ? 'text-natural-bg/90' : 'text-natural-text/70'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Skema Pembayaran */}
        <div className="mt-16 max-w-4xl mx-auto bg-white rounded-3xl p-8 border border-natural-border shadow-xl">
          <h3 className="text-2xl font-serif text-natural-text mb-6 text-center">Skema Pembayaran Terstruktur</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-natural-bg p-6 rounded-2xl border border-natural-border text-center">
              <div className="text-3xl font-bold text-natural-primary mb-2">30%</div>
              <div className="text-sm font-bold uppercase tracking-widest text-natural-text/70 mb-2">Tahap 1</div>
              <p className="text-sm text-natural-text/80">Saat penandatanganan kontrak dan spesifikasi disepakati.</p>
            </div>
            <div className="bg-natural-bg p-6 rounded-2xl border border-natural-border text-center">
              <div className="text-3xl font-bold text-natural-primary mb-2">40%</div>
              <div className="text-sm font-bold uppercase tracking-widest text-natural-text/70 mb-2">Tahap 2</div>
              <p className="text-sm text-natural-text/80">Setelah milestone bulan ke-1 tercapai (desain & legal berjalan).</p>
            </div>
            <div className="bg-natural-bg p-6 rounded-2xl border border-natural-border text-center">
              <div className="text-3xl font-bold text-natural-primary mb-2">30%</div>
              <div className="text-sm font-bold uppercase tracking-widest text-natural-text/70 mb-2">Tahap 3</div>
              <p className="text-sm text-natural-text/80">Pelunasan saat serah terima final di bulan ke-3.</p>
            </div>
          </div>
          <p className="text-xs text-natural-text/50 mt-6 text-center">
            *Catatan: Harga belum termasuk biaya notaris, biaya resmi pemerintah, dan biaya iklan berbayar (ads budget). Biaya tersebut ditanggung klien secara langsung sesuai kebutuhan riil.
          </p>
        </div>
      </div>
    </section>
  );
}
