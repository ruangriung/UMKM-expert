import React from 'react';
import { Users, Code, Hammer, FileCheck, CheckCircle2, AlertCircle } from 'lucide-react';

export default function BusinessProposal() {
  return (
    <section id="proposal" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Proposal */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-natural-primary/10 text-natural-primary font-bold text-[10px] uppercase tracking-widest mb-4 border border-natural-primary/20">
            Proposal Layanan
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-natural-text mb-6">
            Solusi Satu Atap Memulai <br className="hidden md:block"/>Usaha Tanpa Ribet
          </h2>
          <p className="text-lg text-natural-text/70 leading-relaxed">
            Kami hadir sebagai solusi terintegrasi bagi Anda yang ingin memulai usaha tanpa direpotkan oleh urusan teknis, promosi, dan perizinan. Proyek ini menggabungkan tiga tim ahli dalam satu layanan berkelanjutan.
          </p>
        </div>

        {/* Tim Ahli */}
        <div className="mb-20">
          <h3 className="text-2xl font-serif text-natural-text mb-8 text-center">Tim Ahli & Personel</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Code className="w-6 h-6" />,
                title: "Ahli Website & Sosmed",
                team: "Tim Digital",
                desc: "Fokus pada desain web, set-up media sosial, pendaftaran marketplace & merchant online, serta iklan digital."
              },
              {
                icon: <Hammer className="w-6 h-6" />,
                title: "Ahli Bangunan & Advertising",
                team: "Tim Produksi",
                desc: "Menangani fabrikasi booth kontainer custom, desain grafis kemasan, hingga cetak seluruh materi promosi."
              },
              {
                icon: <FileCheck className="w-6 h-6" />,
                title: "Ahli Birokrasi & Legalitas",
                team: "Konsultan Legal",
                desc: "Berperan dalam pengurusan NIB, pendirian badan usaha (CV/PT), sertifikasi halal, dan pendaftaran HAKI."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-natural-bg p-8 rounded-3xl border border-natural-border hover:border-natural-accent/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-natural-primary/10 text-natural-primary flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-natural-text mb-2">{item.title}</h4>
                <p className="text-xs font-bold uppercase tracking-widest text-natural-primary mb-4">{item.team}</p>
                <p className="text-natural-text/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Lingkup Kerja & Estimasi Durasi */}
        <div className="mb-20">
          <h3 className="text-2xl font-serif text-natural-text mb-8 text-center">Lingkup Kerja & Estimasi Waktu</h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-natural-bg rounded-3xl p-6 md:p-8 border border-natural-border">
              <h4 className="font-bold text-lg text-natural-text mb-4 pb-4 border-b border-natural-border">1. Digital & Penjualan Online (3-5 Minggu)</h4>
              <ul className="space-y-4">
                {[
                  "Desain & pengembangan website landing page (10-14 hari)",
                  "Setup & optimasi akun IG, FB, TikTok (3-5 hari)",
                  "Pendaftaran merchant online: GrabFood, GoFood, dll (7-14 hari)",
                  "Pembuatan materi iklan & strategi digital marketing (5-7 hari)"
                ].map((text, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-natural-text/80 items-start">
                    <CheckCircle2 className="w-5 h-5 text-natural-primary shrink-0 opacity-70" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-natural-bg rounded-3xl p-6 md:p-8 border border-natural-border">
              <h4 className="font-bold text-lg text-natural-text mb-4 pb-4 border-b border-natural-border">2. Produksi Fisik & Visual (4-6 Minggu)</h4>
              <ul className="space-y-4">
                {[
                  "Desain 3D booth kontainer kustom + revisi (5-7 hari)",
                  "Fabrikasi & pemasangan booth di lokasi (14-21 hari)",
                  "Desain logo, kemasan, banner, x-banner, seragam (7-10 hari)",
                  "Produksi cetak seluruh materi promosi (5-7 hari)"
                ].map((text, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-natural-text/80 items-start">
                    <CheckCircle2 className="w-5 h-5 text-natural-primary shrink-0 opacity-70" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-natural-bg rounded-3xl p-6 md:p-8 border border-natural-border lg:col-span-2">
              <h4 className="font-bold text-lg text-natural-text mb-4 pb-4 border-b border-natural-border">3. Legalitas & Birokrasi (2-3 Bulan)</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-4">
                  <li className="flex gap-3 text-sm text-natural-text/80 items-start">
                    <CheckCircle2 className="w-5 h-5 text-natural-primary shrink-0 opacity-70" />
                    <span>Penerbitan Nomor Induk Berusaha (NIB) (1-3 hari)</span>
                  </li>
                  <li className="flex gap-3 text-sm text-natural-text/80 items-start">
                    <CheckCircle2 className="w-5 h-5 text-natural-primary shrink-0 opacity-70" />
                    <span>Pendirian CV/PT, NPWP Badan, SK Kemenkumham (14-28 hari)</span>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-sm text-natural-text/80 items-start">
                    <CheckCircle2 className="w-5 h-5 text-natural-primary shrink-0 opacity-70" />
                    <span>Asistensi Pendaftaran & Audit Sertifikasi Halal (60-90 hari)</span>
                  </li>
                  <li className="flex gap-3 text-sm text-natural-text/80 items-start">
                    <CheckCircle2 className="w-5 h-5 text-natural-primary shrink-0 opacity-70" />
                    <span>Lobi perizinan tambahan / Izin Edar BPOM (Jika diperlukan)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Kontrak */}
        <div className="mb-20">
          <h3 className="text-2xl font-serif text-natural-text mb-8 text-center">Timeline Pencapaian (Skema 3 Bulan)</h3>
          
          <div className="relative border-l-2 border-natural-primary/20 ml-4 md:ml-8 space-y-12 pb-12">
            {[
              {
                month: "Bulan ke-1",
                points: ["Website & media sosial tayang", "Desain booth final, fabrikasi dimulai", "Desain materi promosi selesai", "NIB terbit, proses CV/PT berjalan"]
              },
              {
                month: "Bulan ke-2",
                points: ["Booth selesai & terpasang di lokasi", "Materi branding cetak selesai & diterima", "Toko merchant online aktif (GoFood, dll)", "CV/PT resmi terdaftar, iklan digital mulai tayang"]
              },
              {
                month: "Bulan ke-3",
                points: ["Sertifikasi halal terbit (jika lancar sesuai estimasi)", "Serah terima final seluruh aset (website, akun, dokumen)", "Training/Pelatihan singkat manajemen", "Masa garansi pemeliharaan minor (1 bulan) dimulai"]
              }
            ].map((milestone, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-natural-primary ring-4 ring-white"></div>
                <h4 className="text-xl font-bold text-natural-text mb-4">{milestone.month}</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {milestone.points.map((pt, i) => (
                    <div key={i} className="flex gap-2 items-start text-sm text-natural-text/70 bg-natural-bg p-3 rounded-lg">
                      <div className="min-w-1.5 h-1.5 rounded-full bg-natural-accent mt-1.5"></div>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Klausul Perjanjian Tambahan */}
        <div className="bg-natural-primary text-white rounded-3xl p-8 md:p-12 mb-20 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <h3 className="text-2xl font-serif mb-8 text-natural-bg flex items-center gap-3">
            <AlertCircle className="w-8 h-8" />
            Klausul Perjanjian
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10">
              <h4 className="font-bold text-sm tracking-wider uppercase mb-2">1. Perubahan Lingkup</h4>
              <p className="text-sm opacity-80 leading-relaxed">Penambahan di luar proposal dikenakan biaya tambahan dan dituangkan dalam adendum kontrak.</p>
            </div>
            <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10">
              <h4 className="font-bold text-sm tracking-wider uppercase mb-2">2. Kompensasi Keterlambatan</h4>
              <p className="text-sm opacity-80 leading-relaxed">Kelalaian dari tim kami akan dikompensasi (potongan 1%/hari, maks 10%). Keterlambatan data klien menggeser timeline tanpa kompensasi.</p>
            </div>
            <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10">
              <h4 className="font-bold text-sm tracking-wider uppercase mb-2">3. Force Majeure & Rahasia</h4>
              <p className="text-sm opacity-80 leading-relaxed">Kendala luar batas (bencana/aturan baru) mengubah jadwal. Data klien dijaga kerahasiaannya penuh.</p>
            </div>
            <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10">
              <h4 className="font-bold text-sm tracking-wider uppercase mb-2">4. Pembatalan & Garansi</h4>
              <p className="text-sm opacity-80 leading-relaxed">Garansi pemeliharaan web & minor 1 bulan pasca serah terima. Aturan pembatalan sepihak berlaku adil untuk kedua belah pihak.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
