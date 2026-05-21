import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';

const WHATSAPP_LINK = "https://wa.me/6281330763633?text=Halo%2C%20saya%20tertarik%20dengan%20jasa%20pembuatan%20booth%20kontainer.%20Boleh%20konsultasi%3F";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-natural-bg/95 backdrop-blur-sm z-50 border-b border-natural-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 text-xl font-bold text-natural-text tracking-tight">
            <span className="text-natural-primary">Karya</span>Kontainer
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#layanan" className="text-natural-text/70 hover:text-natural-primary transition-colors text-sm font-medium uppercase tracking-widest">Layanan</a>
            <a href="#proses" className="text-natural-text/70 hover:text-natural-primary transition-colors text-sm font-medium uppercase tracking-widest">Proses</a>
            <a href="#harga" className="text-natural-text/70 hover:text-natural-primary transition-colors text-sm font-medium uppercase tracking-widest">Paket Usaha</a>
            <a href="#kalkulator" className="text-natural-text/70 hover:text-natural-primary transition-colors text-sm font-medium uppercase tracking-widest">Custom Paket</a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-natural-accent hover:opacity-90 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Konsultasi Gratis</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-natural-text hover:text-natural-primary">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-natural-bg border-b border-natural-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#layanan" className="block px-3 py-2 text-natural-text hover:bg-natural-light hover:text-natural-primary rounded-md uppercase text-xs font-bold tracking-wider">Layanan</a>
            <a href="#proses" className="block px-3 py-2 text-natural-text hover:bg-natural-light hover:text-natural-primary rounded-md uppercase text-xs font-bold tracking-wider">Proses</a>
            <a href="#harga" className="block px-3 py-2 text-natural-text hover:bg-natural-light hover:text-natural-primary rounded-md uppercase text-xs font-bold tracking-wider">Paket Usaha</a>
            <a href="#kalkulator" className="block px-3 py-2 text-natural-text hover:bg-natural-light hover:text-natural-primary rounded-md uppercase text-xs font-bold tracking-wider">Custom Paket</a>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 mt-4 text-white bg-natural-accent rounded-md text-xs font-bold uppercase tracking-wider"
            >
              <Phone className="w-4 h-4" />
              Hubungi Kami Sekarang
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
