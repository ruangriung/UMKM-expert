import { QRCodeSVG } from 'qrcode.react';

export default function Footer() {
  const waUrl = "https://wa.me/6281330763633";

  return (
    <footer className="bg-natural-bg text-natural-text/60 py-12 border-t border-natural-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-xl font-bold text-natural-text tracking-tight mb-4">
            <span className="text-natural-primary">RuangRiung</span>Academy
          </div>
          <p className="text-sm leading-relaxed mb-4">
            Solusi satu pintu untuk UMKM Indonesia. Kami menyediakan layanan terpadu mulai dari pembuatan booth, desain digital, hingga legalitas bisnis (CV, NIB, Halal). Mulai usaha jadi lebih mudah.
          </p>
        </div>
        
        <div>
          <h3 className="text-natural-text font-bold mb-4 uppercase tracking-widest text-xs">Layanan Terpadu</h3>
          <ul className="space-y-2 text-sm">
            <li>Pembuatan Booth & Gerobak</li>
            <li>Desain Cetak (Banner & Stiker)</li>
            <li>Website, LP & Toko Online</li>
            <li>Pendampingan LegalITAS & Halal</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-natural-text font-bold mb-4 uppercase tracking-widest text-xs">Hubungi Kami</h3>
          <ul className="space-y-4 text-sm">
            <li className="space-y-1">
              <span className="block">WhatsApp: 0813-3076-3633</span>
              <span className="block">Telepon: 0813-3076-3633</span>
              <span className="block">Email: admin@ruangriung.my.id</span>
            </li>
            <li>
              <div className="p-2 bg-white rounded-xl inline-block shadow-sm">
                <QRCodeSVG value={waUrl} size={80} level="M" />
              </div>
              <p className="text-xs mt-2 text-natural-text/50">Scan untuk konsultasi</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-natural-border text-xs opacity-50 uppercase tracking-widest text-center">
        &copy; {new Date().getFullYear()} RuangRiung Academy. All rights reserved.
      </div>
    </footer>
  );
}
