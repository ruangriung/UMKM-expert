import React, { useState } from 'react';
import { Phone, Lightbulb, Rocket, Megaphone, Store, PenTool, LayoutList, Mail, Send } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/6281330763633?text=Halo%20Karya%20Kontainer!%20Saya%20masih%20bingung%20mau%20buka%20usaha%20apa,%20boleh%20bantu%20konsultasi?";
const WA_NUMBER = "0813-3076-3633";

const consultationFeatures = [
  {
    icon: <Store className="w-6 h-6 text-natural-primary" />,
    title: "Konsep & Booth",
    desc: "Brainstorm ide bisnis, penentuan target pasar, & desain booth fisik."
  },
  {
    icon: <Megaphone className="w-6 h-6 text-natural-primary" />,
    title: "Strategi Promo",
    desc: "Perencanaan marketing, grand opening promo, hingga operasional."
  },
  {
    icon: <LayoutList className="w-6 h-6 text-natural-primary" />,
    title: "Merchant Online",
    desc: "Daftar & integrasi ShopeeFood, GrabFood, GoFood, Tokopedia, Lazada, dll."
  },
  {
    icon: <PenTool className="w-6 h-6 text-natural-primary" />,
    title: "Identitas Desain",
    desc: "Desain logo, kemasan produk, stiker labeling, x-banner tripod, hingga menu."
  }
];

export default function ContactCTA() {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryService, setInquiryService] = useState('Paket All-in-One');
  const [inquiryBudget, setInquiryBudget] = useState('');
  const [inquiryDeadline, setInquiryDeadline] = useState('');
  const [inquiryDesc, setInquiryDesc] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Penawaran Custom Project - ${inquiryName}`);
    const body = encodeURIComponent(`Nama: ${inquiryName}\nLayanan: ${inquiryService}\nAnggaran: ${inquiryBudget}\nTenggat Waktu: ${inquiryDeadline}\n\nDetail:\n${inquiryDesc}`);
    window.location.href = `mailto:admin@karyakontainer.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-24 bg-natural-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-natural-base rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl flex flex-col xl:flex-row gap-12 items-center mb-16">
            
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-natural-primary/10 text-natural-primary font-bold text-[10px] uppercase tracking-widest mb-6 border border-natural-primary/20">
              <Lightbulb className="w-4 h-4" /> Temukan Ide Bisnismu
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-natural-text mb-6 leading-tight">
              Masih Bingung <br/>Mau Buka <span className="text-natural-primary italic font-normal">Usaha Apa?</span>
            </h2>
            <p className="text-lg text-natural-text/70 mb-8 max-w-xl leading-relaxed">
              Tenang, mari diskusikan dengan kami. Mulai dari pengerucutan ide jualan, strategi marketing, pendaftaran merchant online, hingga persiapan desain kemasan siap jual.
            </p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-5 bg-natural-accent hover:opacity-90 text-white rounded-xl font-bold text-xs md:text-sm uppercase tracking-widest transition-transform hover:-translate-y-1 shadow-xl shadow-natural-accent/30"
            >
              <Rocket className="w-5 h-5" />
              Tanya via WhatsApp
            </a>
          </div>

          <div className="flex-1 w-full grid sm:grid-cols-2 gap-4 md:gap-6">
            {consultationFeatures.map((feat, idx) => (
              <div key={idx} className="bg-natural-light/40 p-6 rounded-2xl border border-natural-border hover:border-natural-accent/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-white border border-natural-border flex items-center justify-center mb-5 shadow-sm">
                    {feat.icon}
                  </div>
                  <h3 className="font-bold text-natural-text mb-3 text-sm uppercase tracking-wider">{feat.title}</h3>
                  <p className="text-xs text-natural-text/60 leading-relaxed font-medium">{feat.desc}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Custom Quote Form section */}
        <div id="penawaran-custom" className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-natural-border">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-serif text-natural-text mb-4">
              Minta Penawaran Custom
            </h2>
            <p className="text-natural-text/70 text-sm md:text-base">
              Punya detail proyek spesifik? Ceritakan kepada kami, mulai dari budget hingga tenggat waktu, dan kami akan mengirimkan proposal solusi terbaik via email.
            </p>
          </div>
          
          <form onSubmit={handleEmailSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-natural-text/70 mb-2">Nama Anda / Instansi</label>
                <input 
                  type="text" 
                  required
                  value={inquiryName}
                  onChange={(e) => setInquiryName(e.target.value)}
                  className="w-full bg-natural-bg border border-natural-border px-4 py-3 rounded-xl focus:outline-none focus:border-natural-primary" 
                  placeholder="Misal: Budi / PT Bangun Santosa"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-natural-text/70 mb-2">Jenis Layanan</label>
                <select 
                  value={inquiryService}
                  onChange={(e) => setInquiryService(e.target.value)}
                  className="w-full bg-natural-bg border border-natural-border px-4 py-3 rounded-xl focus:outline-none focus:border-natural-primary appearance-none cursor-pointer"
                >
                  <option>Paket All-in-One</option>
                  <option>Pembuatan Booth Saja</option>
                  <option>Desain & Branding</option>
                  <option>Pembuatan Website/Landing Page</option>
                  <option>Legalitas & Merchant Online</option>
                  <option>Lainnya</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-natural-text/70 mb-2">Anggaran Estimasi</label>
                <input 
                  type="text" 
                  required
                  value={inquiryBudget}
                  onChange={(e) => setInquiryBudget(e.target.value)}
                  className="w-full bg-natural-bg border border-natural-border px-4 py-3 rounded-xl focus:outline-none focus:border-natural-primary" 
                  placeholder="Misal: Rp 15 - 20 Juta"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-natural-text/70 mb-2">Tenggat Waktu Proyek</label>
                <input 
                  type="text" 
                  required
                  value={inquiryDeadline}
                  onChange={(e) => setInquiryDeadline(e.target.value)}
                  className="w-full bg-natural-bg border border-natural-border px-4 py-3 rounded-xl focus:outline-none focus:border-natural-primary" 
                  placeholder="Misal: Awal Bulan Depan / Segera"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-natural-text/70 mb-2">Detail Spesifik</label>
              <textarea 
                rows={4}
                required
                value={inquiryDesc}
                onChange={(e) => setInquiryDesc(e.target.value)}
                className="w-full bg-natural-bg border border-natural-border px-4 py-3 rounded-xl focus:outline-none focus:border-natural-primary resize-y" 
                placeholder="Deskripsikan kebutuhan unik Anda secara singkat..."
              ></textarea>
            </div>

            <div className="pt-2 text-center md:text-right text-natural-text/50 text-xs">
              Mengeklik tombol ini akan membuka aplikasi email standar (Gmail/Outlook dll) di perangkat Anda.
            </div>

            <button 
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-natural-primary hover:bg-natural-accent text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-colors shadow-lg shadow-natural-primary/20"
            >
              <Send className="w-5 h-5" />
              Kirim via Email
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
