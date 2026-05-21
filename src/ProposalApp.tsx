import React from 'react';
import BusinessProposal from './components/BusinessProposal';
import Footer from './components/Footer';

export default function ProposalApp() {
  return (
    <div className="min-h-screen bg-natural-bg font-sans pt-12 text-natural-text selection:bg-natural-primary selection:text-white">
      {/* Simple Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-natural-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-10 h-10 bg-natural-primary rounded-xl flex items-center justify-center shadow-lg shadow-natural-primary/30">
                <div className="w-5 h-5 border-2 border-white rounded-sm transform rotate-45"></div>
              </div>
              <div>
                <span className="font-serif font-bold text-xl tracking-wide text-natural-text block leading-none">Karya Kontainer</span>
                <span className="text-[10px] uppercase tracking-widest text-natural-text/50 font-bold">Layanan Bisnis Terpadu</span>
              </div>
            </div>
            
            <a 
              href="/" 
              className="text-sm font-bold uppercase tracking-wider text-natural-primary hover:text-natural-accent transition-colors hidden md:block"
            >
              ← Kembali ke Beranda
            </a>
            <a 
              href="/" 
              className="px-4 py-2 bg-natural-bg border border-natural-border rounded-full text-xs font-bold uppercase tracking-wider text-natural-text hover:bg-natural-light transition-colors md:hidden"
            >
              Kembali
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-12">
        <BusinessProposal />
      </main>

      <Footer />
    </div>
  );
}
