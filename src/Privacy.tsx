import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Privacy() {
  return (
    <div className="bg-natural-bg text-natural-text font-sans antialiased min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">Kebijakan Privasi</h1>
        <div className="space-y-6 text-natural-text/80 leading-relaxed text-lg">
          <p className="text-sm font-semibold tracking-wider text-natural-text/50 uppercase">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-natural-text mt-8">1. Pendahuluan</h2>
            <p>Selamat datang di RuangRiung Academy. Kami menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi yang Anda bagikan kepada kami.</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-natural-text mt-8">2. Pengumpulan Data</h2>
            <p>Kami dapat mengumpulkan informasi pribadi yang Anda berikan secara langsung kepada kami, seperti nama, alamat email, nomor telepon, dan informasi lain yang relevan dengan layanan kami saat Anda mengisi formulir atau menghubungi kami.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-natural-text mt-8">3. Penggunaan Data</h2>
            <p>Informasi yang kami kumpulkan digunakan untuk:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Menyediakan, mengoperasikan, dan memelihara layanan kami.</li>
              <li>Meningkatkan, mempersonalisasi, dan memperluas layanan kami.</li>
              <li>Berkomunikasi dengan Anda, baik secara langsung atau melalui salah satu mitra kami, termasuk untuk layanan pelanggan dan pembaruan informasi.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-natural-text mt-8">4. Perlindungan Data</h2>
            <p>Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi informasi Anda dari akses yang tidak sah, pengungkapan, perubahan, atau perusakan.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-natural-text mt-8">5. Perubahan Kebijakan</h2>
            <p>Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Kami akan memberi tahu Anda tentang segala perubahan dengan memposting Kebijakan Privasi baru di halaman ini.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
