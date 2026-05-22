import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Terms() {
  return (
    <div className="bg-natural-bg text-natural-text font-sans antialiased min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">Syarat dan Ketentuan</h1>
        <div className="space-y-6 text-natural-text/80 leading-relaxed text-lg">
          <p className="text-sm font-semibold tracking-wider text-natural-text/50 uppercase">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-natural-text mt-8">1. Penerimaan Syarat</h2>
            <p>Dengan mengakses atau menggunakan situs web dan layanan RuangRiung Academy, Anda setuju untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan ketentuan apa pun, Anda dilarang menggunakan situs ini.</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-natural-text mt-8">2. Layanan Kami</h2>
            <p>RuangRiung Academy menawarkan berbagai layanan termasuk namun tidak terbatas pada pembuatan booth, desain digital, pendaftaran merchant, dan pendampingan legalitas bisnis. Rincian dan spesifikasi layanan akan disepakati dalam kontrak atau perjanjian penawaran secara terpisah.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-natural-text mt-8">3. Tanggung Jawab Pengguna</h2>
            <p>Anda setuju untuk menggunakan situs web ini dan layanan yang disediakan hanya untuk tujuan yang sah. Anda setuju untuk tidak menggunakan situs ini dengan cara yang dapat merusak, menonaktifkan, membebani, atau mengganggu server atau jaringan apa pun yang terhubung ke situs ini.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-natural-text mt-8">4. Kekayaan Intelektual</h2>
            <p>Semua konten yang ada di situs ini, termasuk namun tidak terbatas pada teks, grafik, logo, ikon, gambar, dan desain adalah milik kami atau mitra kami dan dilindungi oleh undang-undang hak cipta dan kekayaan intelektual.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-natural-text mt-8">5. Pembatasan Tanggung Jawab</h2>
            <p>RuangRiung Academy tidak akan bertanggung jawab atas kerugian langsung, tidak langsung, kebetulan, atau konsekuensial yang diakibatkan oleh penggunaan atau ketidakmampuan untuk menggunakan layanan kami, meskipun kami telah diberitahu tentang kemungkinan kerugian tersebut.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
