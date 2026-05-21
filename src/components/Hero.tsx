import { ArrowRight, MessageCircle } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/6281330763633?text=Halo%2C%20saya%20tertarik%20dengan%20jasa%20pembuatan%20booth%20kontainer.%20Boleh%20konsultasi%3F";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-natural-bg min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-natural-bg via-natural-bg/95 to-natural-bg/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=2070" 
          alt="Container Booth Background" 
          className="w-full h-full object-cover opacity-20 blur-sm"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-natural-primary/10 text-natural-primary font-medium text-sm border border-natural-primary/20 mb-6 uppercase tracking-widest text-[10px]">
            <span className="flex h-2 w-2 rounded-full bg-natural-primary animate-pulse"></span>
            Solusi Satu Pintu UMKM
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-light text-natural-text leading-tight mb-6">
            Mulai Usaha Tanpa Ribet: <br/><span className="text-natural-primary italic font-normal">Booth, Digital & Legalitas</span>
          </h1>
          
          <p className="text-lg md:text-xl text-natural-text/70 mb-10 max-w-2xl leading-relaxed">
            Paket lengkap untuk UMKM cerdas & Franchise. Dari pembuatan booth kontainer custom, desain visual (logo & kemasan), pendaftaran merchant online (Gojek, Grab, Shopee), pembuatan website AI & manajemen sosmed, sistem pemasaran digital terpadu (SEO/Ads), hingga pengurusan legalitas bisnis (Sertifikat Halal, NIB, & HAKI). Kami siapkan seluruh ekosistemnya untuk Anda!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-natural-accent hover:opacity-90 text-white rounded-full font-bold text-xs uppercase tracking-widest transition-transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Konsultasi Gratis Sekarang
            </a>
            <a 
              href="#harga"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-natural-base hover:bg-natural-light text-natural-text rounded-full font-bold text-xs uppercase tracking-widest transition-colors border border-natural-border shadow-sm"
            >
              Lihat Paket Usaha
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6 text-[10px] uppercase tracking-widest text-natural-text/60 font-bold">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-natural-light border border-natural-border flex items-center justify-center opacity-80 text-sm">✅</div>
              <span>Bergaransi</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-natural-light border border-natural-border flex items-center justify-center opacity-80 text-sm">📐</div>
              <span>Desain Bebas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-natural-light border border-natural-border flex items-center justify-center opacity-80 text-sm">⚡</div>
              <span>Pengerjaan Cepat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
