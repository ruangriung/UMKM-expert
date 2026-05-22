import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export default function ProposalApp() {
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const proposalRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = async () => {
    if (!proposalRef.current) return;
    setIsGeneratingPdf(true);
    
    try {
      // Small delay to ensure rendering is complete if any dynamic elements were loading
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const element = proposalRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      const pageHeight = pdf.internal.pageSize.getHeight();
      
      let heightLeft = pdfHeight;
      let position = 0;
      
      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
      heightLeft -= pageHeight;
      
      while (heightLeft >= 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
        heightLeft -= pageHeight;
      }
      
      pdf.save('Proposal-RuangRiung-Academy.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <div ref={proposalRef} className="bg-slate-50 text-slate-800 font-sans antialiased selection:bg-accent-500 selection:text-white">

    {/* Header Utama */}
    <header className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24 px-4 text-center overflow-hidden">
        {/* Elemen Dekorasi Latar Belakang */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="absolute -right-16 -top-16 w-80 h-80 text-white" fill="currentColor" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" />
            </svg>
            <svg className="absolute -left-16 -bottom-16 w-80 h-80 text-white" fill="currentColor" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" />
            </svg>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
            <span className="inline-block bg-accent-500 text-slate-950 font-extrabold text-xs tracking-widest uppercase px-3.5 py-1 rounded-full mb-4 shadow-sm">
                Kemitraan Bisnis Premium
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
                PROPOSAL LAYANAN BISNIS TERIMA BERES
            </h1>
            <p className="text-base md:text-xl text-primary-100 max-w-2xl mx-auto font-light">
                Persembahan dari <span className="font-semibold text-white">RuangRiung Academy</span> <br className="hidden md:inline" />"Solusi Satu Atap Memulai Usaha Tanpa Ribet"
            </p>
        </div>
    </header>

    {/* Menu Navigasi (Otomatis disembunyikan saat cetak) */}
    <nav className="no-print sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm" data-html2canvas-ignore>
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between overflow-x-auto whitespace-nowrap py-1 scrollbar-none">
            <div className="flex gap-1">
                <a href="/" className="text-slate-600 hover:text-primary-600 font-semibold px-4 py-3.5 text-xs md:text-sm transition duration-150 border-b-2 border-transparent hover:border-accent-500">← Kembali</a>
                <a href="#gambaran" className="text-slate-600 hover:text-primary-600 font-semibold px-4 py-3.5 text-xs md:text-sm transition duration-150 border-b-2 border-transparent hover:border-accent-500">Gambaran</a>
                <a href="#tim" className="text-slate-600 hover:text-primary-600 font-semibold px-4 py-3.5 text-xs md:text-sm transition duration-150 border-b-2 border-transparent hover:border-accent-500">Tim Ahli</a>
                <a href="#lingkup" className="text-slate-600 hover:text-primary-600 font-semibold px-4 py-3.5 text-xs md:text-sm transition duration-150 border-b-2 border-transparent hover:border-accent-500">Lingkup Kerja</a>
                <a href="#timeline" className="text-slate-600 hover:text-primary-600 font-semibold px-4 py-3.5 text-xs md:text-sm transition duration-150 border-b-2 border-transparent hover:border-accent-500">Timeline</a>
                <a href="#harga" className="text-slate-600 hover:text-primary-600 font-semibold px-4 py-3.5 text-xs md:text-sm transition duration-150 border-b-2 border-transparent hover:border-accent-500">Harga</a>
            </div>
            
            <button 
                onClick={handleDownloadPdf}
                disabled={isGeneratingPdf}
                className="bg-accent-500 hover:bg-accent-600 text-slate-900 font-bold px-4 py-2 rounded-full text-xs transition duration-150 shadow-sm disabled:opacity-50 flex items-center gap-2 flex-shrink-0"
            >
                {isGeneratingPdf ? (
                    <span className="flex items-center gap-2">Memproses...</span>
                ) : (
                    <span className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download PDF
                    </span>
                )}
            </button>
        </div>
    </nav>

    {/* Konten Utama */}
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        
        {/* Bagian I: Gambaran Proyek */}
        <section id="gambaran" className="scroll-mt-24">
            <div className="mb-6 text-center md:text-left">
                <span className="text-accent-500 font-extrabold text-xs md:text-sm tracking-wider uppercase">Bagian I</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-primary-900 mt-1">GAMBARAN PROYEK</h2>
                <div className="h-1 w-16 bg-accent-500 rounded mt-2.5 mx-auto md:mx-0"></div>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 print-card">
                <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                    Kami di <strong className="text-slate-800">RuangRiung Academy</strong> hadir sebagai solusi terintegrasi bagi Anda yang ingin memulai usaha tanpa direpotkan oleh urusan teknis, promosi, dan perizinan. Proyek ini menggabungkan tiga tim spesialis kami dalam satu ekosistem layanan yang berkelanjutan. Anda cukup menyiapkan anggaran, kami yang mengurus semuanya hingga bisnis Anda siap beroperasi secara penuh, sukses, dan legal.
                </p>
            </div>
        </section>

        {/* Bagian II: Tim Ahli */}
        <section id="tim" className="scroll-mt-24">
            <div className="mb-8 text-center md:text-left">
                <span className="text-accent-500 font-extrabold text-xs md:text-sm tracking-wider uppercase">Bagian II</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-primary-900 mt-1">TIM AHLI DAN PERSONEL</h2>
                <div className="h-1 w-16 bg-accent-500 rounded mt-2.5 mx-auto md:mx-0"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Kartu Tim 1 */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border-t-4 border-primary-600 hover:shadow-md transition duration-300 print-card flex flex-col justify-between">
                    <div>
                        <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 mb-1">Ahli Website & Media Sosial</h3>
                        <p className="text-xs font-semibold text-primary-600 mb-3">Tim Digital</p>
                        <p className="text-sm text-slate-500 leading-relaxed">Bertanggung jawab penuh atas pengerjaan desain web interaktif, optimasi akun media sosial profesional, pendaftaran merchant kuliner online, serta eksekusi kampanye pemasaran digital.</p>
                    </div>
                </div>

                {/* Kartu Tim 2 */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border-t-4 border-accent-500 hover:shadow-md transition duration-300 print-card flex flex-col justify-between">
                    <div>
                        <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-accent-500 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 mb-1">Ahli Bangunan & Advertising</h3>
                        <p className="text-xs font-semibold text-accent-500 mb-3">Tim Produksi</p>
                        <p className="text-sm text-slate-500 leading-relaxed">Mengelola seluruh proses desain dan perakitan booth kontainer kustom, perancangan identitas visual promosi fisik, hingga pencetakan kemasan dan materi promosi luar ruang.</p>
                    </div>
                </div>

                {/* Kartu Tim 3 */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border-t-4 border-slate-800 hover:shadow-md transition duration-300 print-card flex flex-col justify-between">
                    <div>
                        <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 mb-1">Ahli Birokrasi & Lobi</h3>
                        <p className="text-xs font-semibold text-slate-800 mb-3">Konsultan Legal</p>
                        <p className="text-sm text-slate-500 leading-relaxed">Menangani seluruh administrasi perizinan usaha, pengurusan NIB, pendirian badan hukum resmi (CV/PT), sertifikasi halal BPJPH, hingga lobi operasional izin zonasi lokal.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Bagian III: Lingkup Kerja */}
        <section id="lingkup" className="scroll-mt-24">
            <div className="mb-8 text-center md:text-left">
                <span className="text-accent-500 font-extrabold text-xs md:text-sm tracking-wider uppercase">Bagian III</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-primary-900 mt-1">LINGKUP KERJA DAN ESTIMASI</h2>
                <div className="h-1 w-16 bg-accent-500 rounded mt-2.5 mx-auto md:mx-0"></div>
            </div>

            <div className="space-y-8">
                {/* Tabel A */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden print-card">
                    <div className="bg-primary-600 px-6 py-4 text-white flex justify-between items-center flex-wrap gap-2">
                        <span className="font-bold text-sm tracking-wide">A. TIM DIGITAL (WEBSITE & SOSMED)</span>
                        <span className="bg-accent-500 text-slate-950 font-extrabold text-xs px-3 py-1 rounded-full">Total Estimasi: 3–5 Minggu</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-slate-100">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider w-16">No</th>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Lingkup Pekerjaan</th>
                                    <th className="px-6 py-3 text-right text-xs font-bold text-slate-500 uppercase tracking-wider w-44">Estimasi Durasi</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-100 text-sm text-slate-600">
                                <tr className="hover:bg-slate-50/50 transition">
                                    <td className="px-6 py-4 font-semibold">1</td>
                                    <td className="px-6 py-4">Desain & pengembangan website (landing page / profil usaha)</td>
                                    <td className="px-6 py-4 text-right font-medium">10–14 hari kerja</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 transition">
                                    <td className="px-6 py-4 font-semibold">2</td>
                                    <td className="px-6 py-4">Setup & optimasi akun media sosial (X, Facebook, Instagram)</td>
                                    <td className="px-6 py-4 text-right font-medium">3–5 hari kerja</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 transition">
                                    <td className="px-6 py-4 font-semibold">3</td>
                                    <td className="px-6 py-4">Pendaftaran merchant online (ShopeeFood, GrabFood, GoFood)</td>
                                    <td className="px-6 py-4 text-right font-medium">7–14 hari kerja</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 transition">
                                    <td className="px-6 py-4 font-semibold">4</td>
                                    <td className="px-6 py-4">Pembuatan toko di marketplace (Tokopedia, Shopee, TikTok Shop)</td>
                                    <td className="px-6 py-4 text-right font-medium">7–14 hari kerja</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 transition">
                                    <td className="px-6 py-4 font-semibold">5</td>
                                    <td className="px-6 py-4">Pembuatan materi iklan awal & strategi pemasaran digital</td>
                                    <td className="px-6 py-4 text-right font-medium">5–7 hari kerja</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Tabel B */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden print-card">
                    <div className="bg-accent-600 px-6 py-4 text-white flex justify-between items-center flex-wrap gap-2">
                        <span className="font-bold text-sm tracking-wide text-white">B. TIM PRODUKSI (BOOTH & ADVERTISING)</span>
                        <span className="bg-slate-900 text-white font-extrabold text-xs px-3 py-1 rounded-full">Total Estimasi: 4–6 Minggu</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-slate-100">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider w-16">No</th>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Lingkup Pekerjaan</th>
                                    <th className="px-6 py-3 text-right text-xs font-bold text-slate-500 uppercase tracking-wider w-44">Estimasi Durasi</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-100 text-sm text-slate-600">
                                <tr className="hover:bg-slate-50/50 transition">
                                    <td className="px-6 py-4 font-semibold">1</td>
                                    <td className="px-6 py-4">Desain booth kontainer kustom (termasuk revisi)</td>
                                    <td className="px-6 py-4 text-right font-medium">5–7 hari kerja</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 transition">
                                    <td className="px-6 py-4 font-semibold">2</td>
                                    <td className="px-6 py-4">Fabrikasi & pemasangan booth kontainer di lokasi</td>
                                    <td className="px-6 py-4 text-right font-medium">14–21 hari kerja</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 transition">
                                    <td className="px-6 py-4 font-semibold">3</td>
                                    <td className="px-6 py-4">Desain grafis materi promosi (banner, X-banner, stiker, flyer, kemasan)</td>
                                    <td className="px-6 py-4 text-right font-medium">7–10 hari kerja</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 transition">
                                    <td className="px-6 py-4 font-semibold">4</td>
                                    <td className="px-6 py-4">Produksi cetak & finishing seluruh materi promosi fisik</td>
                                    <td className="px-6 py-4 text-right font-medium">5–7 hari kerja</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Tabel C */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden print-card">
                    <div className="bg-slate-800 px-6 py-4 text-white flex justify-between items-center flex-wrap gap-2">
                        <span className="font-bold text-sm tracking-wide">C. KONSULTAN LEGAL (BIROKRASI & LOBYING)</span>
                        <span className="bg-accent-500 text-slate-950 font-extrabold text-xs px-3 py-1 rounded-full">Total Estimasi: 2–3 Bulan</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-slate-100">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider w-16">No</th>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Lingkup Pekerjaan</th>
                                    <th className="px-6 py-3 text-right text-xs font-bold text-slate-500 uppercase tracking-wider w-44">Estimasi Durasi</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-100 text-sm text-slate-600">
                                <tr className="hover:bg-slate-50/50 transition">
                                    <td className="px-6 py-4 font-semibold">1</td>
                                    <td className="px-6 py-4">Pengurusan NIB (Nomor Induk Berusaha)</td>
                                    <td className="px-6 py-4 text-right font-medium">1–3 hari kerja</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 transition">
                                    <td className="px-6 py-4 font-semibold">2</td>
                                    <td className="px-6 py-4">Pendirian CV/PT (akta notaris, SK Kemenkumham, NPWP Badan, dll)</td>
                                    <td className="px-6 py-4 text-right font-medium">14–28 hari kerja</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 transition">
                                    <td className="px-6 py-4 font-semibold">3</td>
                                    <td className="px-6 py-4">Pengajuan Sertifikasi Halal resmi (hingga terbit)</td>
                                    <td className="px-6 py-4 text-right font-medium">60–90 hari kerja</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 transition">
                                    <td className="px-6 py-4 font-semibold">4</td>
                                    <td className="px-6 py-4">Lobi perizinan tambahan / pengondisian area (jika diperlukan)</td>
                                    <td className="px-6 py-4 text-right font-medium">7–14 hari kerja</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

        {/* Bagian IV: Timeline & Milestone */}
        <section id="timeline" className="scroll-mt-24">
            <div className="mb-8 text-center md:text-left">
                <span className="text-accent-500 font-extrabold text-xs md:text-sm tracking-wider uppercase">Bagian IV</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-primary-900 mt-1">TIMELINE DAN MILESTONE KONTRAK (3 BULAN)</h2>
                <div className="h-1 w-16 bg-accent-500 rounded mt-2.5 mx-auto md:mx-0"></div>
            </div>

            {/* Jalur Timeline Menarik */}
            <div className="relative pl-6 md:pl-8 border-l-2 border-slate-200 ml-3 space-y-10">
                {/* Milestone 1 */}
                <div className="relative print-card">
                    <div className="absolute -left-[37px] md:-left-[41px] top-1 bg-primary-600 text-white w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-md">
                        M1
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition">
                        <h4 className="text-lg font-bold text-primary-900 mb-3">Bulan ke-1: Fase Setup & Persiapan Awal</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex items-start gap-2.5">
                                <span className="text-emerald-500 font-bold">✓</span>
                                <span>Website dan seluruh akun media sosial resmi telah tayang online</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="text-emerald-500 font-bold">✓</span>
                                <span>Desain akhir booth kontainer selesai disepakati; proses pabrikasi dimulai</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="text-emerald-500 font-bold">✓</span>
                                <span>Seluruh draf desain materi promosi selesai dibuat oleh tim kreatif</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="text-emerald-500 font-bold">✓</span>
                                <span>Sertifikasi NIB terbit dan berkas pendirian CV/PT mulai diproses ke notaris</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Milestone 2 */}
                <div className="relative print-card">
                    <div className="absolute -left-[37px] md:-left-[41px] top-1 bg-accent-500 text-slate-950 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-md">
                        M2
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition">
                        <h4 className="text-lg font-bold text-primary-900 mb-3">Bulan ke-2: Fase Konstruksi & Integrasi</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex items-start gap-2.5">
                                <span className="text-emerald-500 font-bold">✓</span>
                                <span>Booth kontainer fisik selesai dirakit dan dipasang kokoh di lokasi mitra</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="text-emerald-500 font-bold">✓</span>
                                <span>Seluruh materi promosi selesai dicetak dan siap digunakan di lapangan</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="text-emerald-500 font-bold">✓</span>
                                <span>Toko online & merchant katering/makanan mulai diaktifkan secara komersial</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="text-emerald-500 font-bold">✓</span>
                                <span>Badan usaha CV/PT selesai dilegalkan; berkas sertifikat halal masuk tahap sidang fatwa</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Milestone 3 */}
                <div className="relative print-card">
                    <div className="absolute -left-[37px] md:-left-[41px] top-1 bg-slate-800 text-white w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-md">
                        M3
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition">
                        <h4 className="text-lg font-bold text-primary-900 mb-3">Bulan ke-3: Fase Serah Terima & Launching</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex items-start gap-2.5">
                                <span className="text-emerald-500 font-bold">✓</span>
                                <span>Sertifikat halal terbit resmi dan siap dipajang di gerai fisik maupun online</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="text-emerald-500 font-bold">✓</span>
                                <span>Serah terima seluruh akun digital, password, dokumen legalitas, dan kunci fisik booth</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="text-emerald-500 font-bold">✓</span>
                                <span>Pelatihan dasar 1 sesi untuk membekali operasional harian staf Anda</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="text-emerald-500 font-bold">✓</span>
                                <span>Masa garansi pemeliharaan sistem skala minor resmi berjalan selama 1 bulan penuh</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <p className="mt-6 text-xs text-slate-500 italic bg-slate-100 p-4 rounded-xl border border-slate-200">
                *Catatan: Apabila proses sertifikasi halal memerlukan waktu verifikasi dokumen tambahan di luar kewenangan tim kami, klausul perpanjangan khusus waktu pengerjaan item halal ini dapat disepakati bersama tanpa membatalkan keabsahan kontrak utama.
            </p>
        </section>

        {/* Bagian V: Rincian Paket Harga */}
        <section id="harga" className="scroll-mt-24">
            <div className="mb-8 text-center md:text-left">
                <span className="text-accent-500 font-extrabold text-xs md:text-sm tracking-wider uppercase">Bagian V</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-primary-900 mt-1">RINCIAN HARGA & PAKET INVESTASI</h2>
                <div className="h-1 w-16 bg-accent-500 rounded mt-2.5 mx-auto md:mx-0"></div>
                <p className="text-sm text-slate-500 mt-2">Nominal paket di bawah ini dapat disesuaikan kembali dengan kebijakan finansial yang Anda tetapkan.</p>
            </div>

            {/* Grid Paket Investasi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Paket Dasar */}
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition print-card flex flex-col justify-between">
                    <div>
                        <span className="text-[10px] font-extrabold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full uppercase">UMKM Inisiasi</span>
                        <h4 className="text-xl font-bold text-slate-800 mt-2">Paket Dasar</h4>
                        <p className="text-sm text-slate-500 mb-4">Pengembangan pondasi digital & legalitas esensial.</p>
                        <ul className="space-y-2 text-sm text-slate-600 border-t border-slate-100 pt-4 mb-6">
                            <li className="flex items-center gap-2">• Pembuatan Website / Landing Page Bisnis</li>
                            <li className="flex items-center gap-2">• Setup optimalisasi 3 platform sosial media utama</li>
                            <li className="flex items-center gap-2">• Pembuatan Legalitas NIB elektronik</li>
                            <li className="flex items-center gap-2">• Draf desain spanduk, banner promosi & kartu nama</li>
                        </ul>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl text-center">
                        <span className="text-xs text-slate-400 block">Investasi Paket</span>
                        <span className="text-xl font-extrabold text-primary-600">Rp 25.000.000</span>
                    </div>
                </div>

                {/* Paket Bisnis */}
                <div className="bg-gradient-to-br from-white to-primary-50 rounded-2xl p-6 border-2 border-primary-600 shadow-md print-card flex flex-col justify-between">
                    <div>
                        <span className="text-[10px] font-extrabold bg-accent-500 text-slate-950 px-2.5 py-1 rounded-full uppercase tracking-wider">Rekomendasi Utama</span>
                        <h4 className="text-xl font-bold text-slate-800 mt-2">Paket Bisnis</h4>
                        <p className="text-sm text-slate-500 mb-4">Solusi terlengkap integrasi outlet fisik dan ekosistem online.</p>
                        <ul className="space-y-2 text-sm text-slate-600 border-t border-slate-200 pt-4 mb-6">
                            <li className="flex items-center gap-2 font-medium text-slate-800">• Seluruh Item di Paket Dasar</li>
                            <li className="flex items-center gap-2">• Perakitan & fabrikasi booth kontainer kustom</li>
                            <li className="flex items-center gap-2">• Cetak seluruh materi iklan (stiker, kemasan, banner, flyer)</li>
                            <li className="flex items-center gap-2">• Setup merchant makanan & e-commerce online</li>
                        </ul>
                    </div>
                    <div className="bg-primary-600 p-4 rounded-xl text-center text-white">
                        <span className="text-xs text-primary-100 block">Investasi Paket</span>
                        <span className="text-xl font-extrabold text-accent-500">Rp 75.000.000</span>
                    </div>
                </div>

                {/* Paket Premium */}
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition print-card flex flex-col justify-between">
                    <div>
                        <span className="text-[10px] font-extrabold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full uppercase">Autopilot Ekspansi</span>
                        <h4 className="text-xl font-bold text-slate-800 mt-2">Paket Premium</h4>
                        <p className="text-sm text-slate-500 mb-4">Paling lengkap dengan pendirian PT resmi & kampanye promosi berbayar.</p>
                        <ul className="space-y-2 text-sm text-slate-600 border-t border-slate-100 pt-4 mb-6">
                            <li className="flex items-center gap-2 font-medium text-slate-800">• Seluruh Item di Paket Bisnis</li>
                            <li className="flex items-center gap-2">• Pendirian PT resmi (Notaris & Kemenkumham)</li>
                            <li className="flex items-center gap-2">• Kepengurusan Sertifikasi Halal dari BPJPH</li>
                            <li className="flex items-center gap-2">• Manajemen iklan digital (Ads budget) aktif 3 bulan</li>
                            <li className="flex items-center gap-2">• Layanan lobi wilayah operasional tambahan</li>
                        </ul>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl text-center">
                        <span className="text-xs text-slate-400 block">Investasi Paket</span>
                        <span className="text-xl font-extrabold text-primary-600">Rp 150.000.000</span>
                    </div>
                </div>

                {/* Paket Custom */}
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition print-card flex flex-col justify-between">
                    <div>
                        <span className="text-[10px] font-extrabold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full uppercase">Kustom Modular</span>
                        <h4 className="text-xl font-bold text-slate-800 mt-2">Paket Custom</h4>
                        <p className="text-sm text-slate-500 mb-4">Konsultasikan struktur kebutuhan modul secara bertahap bersama kami.</p>
                        <p className="text-sm text-slate-600 border-t border-slate-100 pt-4 leading-relaxed mb-6">
                            Anda dibebaskan merancang kombinasi layanan unik di luar pilihan paket standar di atas. Silakan beri tahu tim konsultan kami mengenai poin pengerjaan yang ingin difokuskan agar efisiensi biaya tetap terjaga.
                        </p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl text-center">
                        <span className="text-xs text-slate-400 block">Investasi Paket</span>
                        <span className="text-xl font-extrabold text-slate-700">Menyesuaikan</span>
                    </div>
                </div>
            </div>

            {/* Skema Pembayaran */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 mt-8 shadow-sm print-card">
                <h4 className="text-lg font-bold text-accent-500 mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent-500"></span>
                    Skema Alur Pembayaran Termin:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                    <div className="p-4 bg-slate-800 rounded-xl">
                        <div className="text-accent-500 font-extrabold mb-1">Termin I (30%)</div>
                        <p className="text-slate-300 text-xs">Dibayarkan saat awal penandatanganan memorandum kesepakatan (MoU) kemitraan.</p>
                    </div>
                    <div className="p-4 bg-slate-800 rounded-xl">
                        <div className="text-accent-500 font-extrabold mb-1">Termin II (40%)</div>
                        <p className="text-slate-300 text-xs">Dibayarkan setelah milestone penyelesaian target di bulan ke-1 berhasil diverifikasi.</p>
                    </div>
                    <div className="p-4 bg-slate-800 rounded-xl">
                        <div className="text-accent-500 font-extrabold mb-1">Termin III (30%)</div>
                        <p className="text-slate-300 text-xs">Dibayarkan saat serah terima dokumen legalitas, akun digital, dan fisik outlet di bulan ke-3.</p>
                    </div>
                </div>
                <p className="text-slate-400 text-[11px] mt-4 italic leading-relaxed">
                    *Keterangan Tambahan: Nominal harga paket yang disepakati belum termasuk beban biaya akta notaris khusus, retribusi resmi yang ditetapkan pemerintah daerah, serta anggaran deposit langsung kampanye iklan berbayar.
                </p>
            </div>
        </section>

        {/* Bagian VI: Klausul Perjanjian */}
        <section id="klausul" className="scroll-mt-24">
            <div className="mb-8 text-center md:text-left">
                <span className="text-accent-500 font-extrabold text-xs md:text-sm tracking-wider uppercase">Bagian VI</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-primary-900 mt-1">KLAUSUL PERJANJIAN TAMBAHAN</h2>
                <div className="h-1 w-16 bg-accent-500 rounded mt-2.5 mx-auto md:mx-0"></div>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 print-card">
                <ol className="space-y-4 text-sm text-slate-600 list-decimal pl-5">
                    <li className="pl-2 leading-relaxed">
                        <strong className="text-slate-800">Perubahan Lingkup Kerja:</strong> Setiap penambahan, revisi masif, atau perubahan di luar rincian lingkup kerja tertulis pada proposal ini akan dikenakan biaya tambahan penyesuaian yang akan dituangkan di adendum kerja resmi.
                    </li>
                    <li className="pl-2 leading-relaxed">
                        <strong className="text-slate-800">Penalti Keterlambatan:</strong> Apabila terjadi keterlambatan penyelesaian murni akibat kelalaian internal tim kami, Klien berhak mengajukan kompensasi potongan biaya sebesar [1%] per hari dari nilai paket termin terkait, dengan batas akumulasi maksimal [10%]. Jika keterlambatan dipicu oleh lambatnya Klien menyerahkan data verifikasi, timeline otomatis digeser tanpa kompensasi penalti.
                    </li>
                    <li className="pl-2 leading-relaxed">
                        <strong className="text-slate-800">Keadaan Kahar (Force Majeure):</strong> Adanya bencana alam hebat, perubahan mendadak hukum komersial pemerintah setempat yang memblokir operasional, kerusuhan massal, dibebaskan dari tuntutan penalti ganti rugi; jadwal penyelesaian akan disusun kembali secara kekeluargaan.
                    </li>
                    <li className="pl-2 leading-relaxed">
                        <strong className="text-slate-800">Kerahasiaan Informasi (NDA):</strong> Seluruh resep rahasia usaha, alur pasokan barang, data operasional, maupun identitas klien dijamin aman dan tidak akan dibagikan kepada pihak luar mana pun.
                    </li>
                    <li className="pl-2 leading-relaxed">
                        <strong className="text-slate-800">Pembatalan Sepihak:</strong> Pembatalan sepihak oleh Klien mengakibatkan seluruh biaya uang muka yang telah masuk ke rekening kami hangus. Jika pembatalan dilakukan sepihak oleh kami tanpa alasan objektif, tim kami wajib mengembalikan dana masuk ditambah denda kompensasi [5%] dari total kontrak.
                    </li>
                    <li className="pl-2 leading-relaxed">
                        <strong className="text-slate-800">Garansi Perawatan:</strong> Layanan pemeliharaan gratis serta koreksi error/bug minor berjalan selama 30 hari kalender penuh terhitung sejak masa serah terima ditandatangani, selama tidak mencakup perubahan fungsi logika sistem yang mendasar.
                    </li>
                </ol>
            </div>
        </section>

        {/* Bagian VII: Keuntungan Kemitraan */}
        <section className="scroll-mt-24">
            <div className="mb-8 text-center md:text-left">
                <span className="text-accent-500 font-extrabold text-xs md:text-sm tracking-wider uppercase">Bagian VII</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-primary-900 mt-1">KEUNTUNGAN LAYANAN KAMI</h2>
                <div className="h-1 w-16 bg-accent-500 rounded mt-2.5 mx-auto md:mx-0"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Benefit Card 1 */}
                <div className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100 print-card">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 font-bold">
                        ✓
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">Satu Pintu, Tanpa Repot</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">Anda tidak perlu membuang waktu mengoordinasikan belasan vendor yang berbeda. Cukup berkomunikasi dengan satu Manajer Akun kami yang responsif.</p>
                    </div>
                </div>

                {/* Benefit Card 2 */}
                <div className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100 print-card">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 font-bold">
                        ✓
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">Efisiensi Anggaran Signifikan</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">Dapatkan harga terintegrasi yang jauh lebih terjangkau dibandingkan merekrut tim programmer, kontraktor konstruksi booth, dan konsultan hukum secara terpisah.</p>
                    </div>
                </div>

                {/* Benefit Card 3 */}
                <div className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100 print-card">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 font-bold">
                        ✓
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">Kepastian Status Legal</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">Bisnis baru Anda resmi diluncurkan dengan izin operasional yang diakui pemerintah, meminimalisir risiko razia di masa mendatang.</p>
                    </div>
                </div>

                {/* Benefit Card 4 */}
                <div className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100 print-card">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 font-bold">
                        ✓
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">Garansi Pemeliharaan Menenangkan</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">Masa pendampingan harian pasca serah terima menjamin kenyamanan Anda ketika masa transisi penggunaan awal sistem dimulai.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>

    {/* Hubungi Kami & CTA */}
    <section id="kontak" className="bg-gradient-to-br from-primary-900 to-slate-900 text-white py-16 px-4 text-center relative overflow-hidden print-card">
        <div className="max-w-2xl mx-auto relative z-10 space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">Langkah Mudah Memulai Bisnis Baru</h2>
            <p className="text-slate-300 text-sm md:text-base font-light">
                Konsultasikan konsep usaha Anda secara santai bersama kami hari ini. Hubungi konsultan kami melalui narahubung resmi di bawah untuk membuat draf jadwal diskusi pertama.
            </p>
            
            <div className="bg-slate-950/50 backdrop-blur-sm p-4 rounded-xl border border-slate-800 inline-block text-left">
                <span className="text-xs text-slate-400 block mb-1 uppercase tracking-wider font-semibold">Kontak Informasi Resmi</span>
                <span className="text-base md:text-lg font-bold text-accent-500">admin@ruangriung.my.id | 0813-3076-3633</span>
            </div>
            
            <div className="no-print">
                <a href="https://wa.me/6281330763633" target="_blank" rel="noopener noreferrer" className="inline-block bg-accent-500 hover:bg-accent-600 text-slate-950 font-extrabold px-8 py-3.5 rounded-full transition duration-150 transform hover:scale-[1.03] shadow-lg">
                    Hubungi via WhatsApp
                </a>
            </div>
        </div>
    </section>

    {/* Footer */}
    <footer className="bg-slate-100 border-t border-slate-200 py-8 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto px-4">
            <p>&copy; 2026 RuangRiung Academy. All rights reserved.</p>
            <p className="text-[10px] text-slate-400 mt-1">Desain proposal ini telah dioptimalkan untuk akses layar seluler serta cetak lembar kerja kertas (Print to PDF).</p>
        </div>
    </footer>

    </div>
  );
}
