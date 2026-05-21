import { Store, Paintbrush, Globe, FileText } from 'lucide-react';

const services = [
  {
    icon: <Store className="w-8 h-8 text-natural-primary" />,
    title: "Pembuatan Booth & Fisik",
    description: "Desain dan produksi booth kontainer, tenda, atau gerobak custom berkualitas premium. Mencakup instalasi kelistrikan aman, cat anti-karat, tata letak interior yang ergonomis, serta pengerjaan neon box & signage eksterior untuk menarik pelanggan."
  },
  {
    icon: <Paintbrush className="w-8 h-8 text-natural-primary" />,
    title: "Identitas Visual & Cetak",
    description: "Tingkatkan nilai jual dengan desain profesional. Meliputi pembuatan logo brand, desain dan cetak kemasan (packaging), stiker label, flyer promo, x-banner, hingga desain seragam karyawan agar bisnis tampil menonjol."
  },
  {
    icon: <Globe className="w-8 h-8 text-natural-primary" />,
    title: "Digitalisasi & Ekosistem",
    description: "Persiapan jualan online menyeluruh. Mulai dari pendaftaran merchant (GoFood, GrabFood, ShopeeFood), pembuatan website kasir/katalog Cerdas, setup Google Maps (My Business), hingga optimasi iklan digital (SEO & Social Media Ads)."
  },
  {
    icon: <FileText className="w-8 h-8 text-natural-primary" />,
    title: "Legalitas & Sertifikasi",
    description: "Fokus berjualan, biarkan kami urus birokrasinya. Layanan pendampingan legal mencakup pengurusan NIB, pendirian badan usaha (CV / PT Perorangan), pengurusan Izin Edar BPOM, asitensi Sertifikasi Halal, serta pendaftaran Merek (HAKI)."
  }
];

export default function Services() {
  return (
    <section id="layanan" className="py-24 bg-natural-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-natural-base text-natural-text/80 font-bold text-[10px] uppercase tracking-widest mb-4 border border-natural-border">
            Solusi Satu Pintu
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-natural-text tracking-tight mb-6">
            Layanan Terpadu untuk <br className="hidden md:block"/>Mulai Bisnis Tanpa Ribet
          </h2>
          <p className="text-lg text-natural-text/70">
            Dari bentuk fisik hingga jejak digital dan legalitas hukum, kami menyediakan semua yang Anda butuhkan untuk memulai bisnis secara profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-natural-base p-8 rounded-2xl border border-natural-border shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-natural-bg/50 border border-natural-border flex items-center justify-center mb-6 group-hover:bg-natural-light transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif text-natural-text mb-3">{service.title}</h3>
              <p className="text-natural-text/70 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
