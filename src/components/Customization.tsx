import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PenTool, Smartphone, Palette, Grid, GripHorizontal, Check, X, Image as ImageIcon } from 'lucide-react';

const BOOTH_COLORS = [
  { id: 'orange', hex: '#E85D04', name: 'Industrial Orange' },
  { id: 'black', hex: '#1C1C1C', name: 'Matte Black' },
  { id: 'green', hex: '#2D6A4F', name: 'Forest Green' },
  { id: 'blue', hex: '#023E8A', name: 'Navy Blue' },
  { id: 'creme', hex: '#F4F1DE', name: 'Classic Creme' },
];

const WEB_TEMPLATES = [
  { 
    id: 'culinary', 
    name: 'Warm Culinary', 
    desc: 'Cocok untuk F&B, Cafe',
    colors: { bg: '#FFF3E0', text: '#BF360C', accent: '#FF5722' },
    heroImg: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80'
  },
  { 
    id: 'minimalist', 
    name: 'Modern Retail', 
    desc: 'Toko baju, elektronik',
    colors: { bg: '#FAFAFA', text: '#212121', accent: '#000000' },
    heroImg: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80'
  },
  { 
    id: 'playful', 
    name: 'Playful Service', 
    desc: 'Jasa digital, kreatif',
    colors: { bg: '#E0F7FA', text: '#006064', accent: '#00BCD4' },
    heroImg: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80'
  }
];

export default function Customization() {
  const [activeMode, setActiveMode] = useState<'booth' | 'web'>('booth');
  
  // Booth States
  const [boothColor, setBoothColor] = useState(BOOTH_COLORS[0].hex);
  const [placedItems, setPlacedItems] = useState<string[]>(['window']); 
  const [isDragOver, setIsDragOver] = useState(false);

  // Web States
  const [webTemplate, setWebTemplate] = useState(WEB_TEMPLATES[0]);
  const [brandText, setBrandText] = useState('My Brand');

  // Drag & Drop Handlers
  const handleDragStart = (e: React.DragEvent, item: string) => {
    e.dataTransfer.setData('itemId', item);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const itemId = e.dataTransfer.getData('itemId');
    if (itemId && !placedItems.includes(itemId)) {
      setPlacedItems(prev => [...prev, itemId]);
    }
  };

  const removeItem = (item: string) => {
    setPlacedItems(prev => prev.filter(i => i !== item));
  };

  return (
    <section id="fitur" className="py-24 bg-natural-base relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-natural-light text-natural-text/80 font-bold text-[10px] uppercase tracking-widest mb-4 border border-natural-border">
            <PenTool className="w-4 h-4" /> Kustomisasi Visual Live
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-natural-text tracking-tight mb-6">
            Rancang Visibilitas <br className="hidden md:block"/>Bisnismu Sendiri
          </h2>
          <p className="text-lg text-natural-text/70 mb-8">
            Eksperimen dengan desain booth fisik secara interaktif, atau pilih template website siap pakai untuk digitalisasi bisnis Anda.
          </p>

          <div className="inline-flex bg-natural-light rounded-xl p-1 shadow-inner border border-natural-border">
            <button 
              onClick={() => setActiveMode('booth')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all ${activeMode === 'booth' ? 'bg-natural-base text-natural-primary shadow text-natural-text' : 'text-natural-text/60 hover:text-natural-text'}`}
            >
              <Grid className="w-4 h-4" /> Booth Configurator
            </button>
            <button 
              onClick={() => setActiveMode('web')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all ${activeMode === 'web' ? 'bg-natural-base text-natural-primary shadow text-natural-text' : 'text-natural-text/60 hover:text-natural-text'}`}
            >
              <Smartphone className="w-4 h-4" /> Web Templates
            </button>
          </div>
        </div>

        <div className="mt-12 bg-natural-bg border border-natural-border rounded-3xl p-6 md:p-10 shadow-sm overflow-hidden">
          
          <AnimatePresence mode="wait">
            {activeMode === 'booth' && (
              <motion.div 
                key="booth-mode"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col lg:flex-row gap-12"
              >
                {/* Left: Booth Interactive Preview */}
                <div className="flex-1 flex flex-col items-center justify-center bg-natural-base rounded-2xl p-8 border border-natural-border/50 relative shadow-inner overflow-hidden min-h-[400px]">
                  <div className="absolute top-4 left-4 text-xs font-bold uppercase tracking-widest text-natural-text/40">Area Pratinjau Live</div>
                  
                  {/* Dropzone */}
                  <div 
                    className={`relative w-64 h-64 border-[12px] border-black/80 rounded-sm shadow-2xl flex flex-col justify-end overflow-visible transition-colors duration-300 ${isDragOver ? 'ring-4 ring-natural-accent ring-offset-4 ring-offset-natural-base' : ''}`}
                    style={{ backgroundColor: boothColor }}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    {/* Corrugated Texture */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(0,0,0,0.5) 10px, rgba(255,255,255,0.1) 12px, transparent 12px, transparent 20px)' }} />

                    {/* Window */}
                    <AnimatePresence>
                      {placedItems.includes('window') && (
                        <motion.div 
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="absolute top-12 left-1/2 -translate-x-1/2 w-48 h-20 border-[3px] border-white/60 bg-white/20 backdrop-blur-sm z-10 flex flex-col shadow-inner"
                        >
                          <div className="w-full h-1/2 border-b-2 border-white/40"></div>
                          <div className="w-px h-full bg-white/40 absolute left-1/2 top-0"></div>
                          <button onClick={() => removeItem('window')} className="absolute -top-3 -right-3 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity z-20"><X className="w-3 h-3"/></button>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Wood Accent Meja */}
                    <AnimatePresence>
                      {placedItems.includes('wood') && (
                        <motion.div 
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          className="absolute bottom-0 w-[105%] -left-1 h-12 bg-[#8B5A2B] border-t-4 border-black/40 z-20 rounded-b-sm"
                          style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.2) 2px, rgba(0,0,0,0.2) 4px)' }}
                        >
                          <button onClick={() => removeItem('wood')} className="absolute -top-3 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><X className="w-3 h-3"/></button>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Neon Box */}
                    <AnimatePresence>
                      {placedItems.includes('neon') && (
                        <motion.div 
                          initial={{ y: -20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          className="absolute -top-10 left-1/2 -translate-x-1/2 px-6 py-2 bg-white rounded flex items-center justify-center shadow-[0_0_25px_rgba(255,255,255,0.8)] border border-yellow-300 z-30 min-w-[120px]"
                        >
                          <span className="text-xs font-bold text-black tracking-widest whitespace-nowrap">{brandText || 'BRAND'}</span>
                          <button onClick={() => removeItem('neon')} className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><X className="w-3 h-3"/></button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {isDragOver && <div className="absolute bottom-4 text-xs font-bold text-natural-accent animate-pulse uppercase tracking-widest">Lepaskan untuk memasang</div>}
                </div>

                {/* Right: Controls & Draggables */}
                <div className="flex-1 space-y-8">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-natural-text/70 mb-4 flex items-center gap-2">
                      <Palette className="w-4 h-4" /> 1. Warna Dasar
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {BOOTH_COLORS.map(color => (
                        <button
                          key={color.id}
                          onClick={() => setBoothColor(color.hex)}
                          className={`w-10 h-10 rounded-full border-2 transition-all hover:scale-110 ${boothColor === color.hex ? 'border-natural-accent ring-2 ring-natural-accent/30 ring-offset-2 ring-offset-natural-bg' : 'border-black/10'}`}
                          style={{ backgroundColor: color.hex }}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-natural-text/70 mb-4 flex items-center gap-2">
                      <PenTool className="w-4 h-4" /> 2. Nama Brand (Untuk Neon Box)
                    </h3>
                    <input 
                      type="text" 
                      value={brandText}
                      onChange={(e) => setBrandText(e.target.value)}
                      placeholder="Masukkan nama brand..."
                      className="w-full bg-natural-base border border-natural-border px-4 py-3 rounded-xl focus:outline-none focus:border-natural-primary"
                    />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-natural-text/70 mb-4 mt-2">
                      3. Eksterior (Drag & Drop)
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {[{id: 'window', name: 'Jendela Kaca'}, {id: 'wood', name: 'Aksen Kayu'}, {id: 'neon', name: 'Neon Box Atas'}].map(item => {
                        const isPlaced = placedItems.includes(item.id);
                        return (
                          <div 
                            key={item.id}
                            draggable={!isPlaced}
                            onDragStart={(e) => handleDragStart(e, item.id)}
                            className={`px-4 py-3 border rounded-xl flex items-center gap-2 text-sm font-bold transition-all
                              ${isPlaced 
                                ? 'bg-natural-light border-natural-border text-natural-text/30 cursor-not-allowed' 
                                : 'bg-natural-base border-natural-border hover:border-natural-primary cursor-grab active:cursor-grabbing hover:shadow-md'
                              }
                            `}
                          >
                            <GripHorizontal className="w-4 h-4 opacity-50" />
                            {item.name}
                            {isPlaced && <Check className="w-4 h-4 ml-auto text-green-500" />}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeMode === 'web' && (
              <motion.div 
                key="web-mode"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col lg:flex-row gap-12"
              >
                {/* Left: Web Interactive Preview */}
                <div className="flex-1 flex flex-col items-center justify-center bg-natural-base rounded-2xl p-8 border border-natural-border/50 relative shadow-inner overflow-hidden min-h-[400px]">
                  <div className="absolute top-4 left-4 text-xs font-bold uppercase tracking-widest text-natural-text/40 z-10">Area Pratinjau Live</div>
                  
                  {/* Mini Browser Frame */}
                  <div className="w-full max-w-sm h-[400px] bg-white rounded-t-xl rounded-b-md shadow-2xl border border-gray-200 flex flex-col overflow-hidden relative">
                    {/* Browser Header */}
                    <div className="h-8 bg-gray-100 border-b border-gray-200 flex items-center px-4 gap-1.5 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                      <div className="ml-4 flex-1 bg-white h-5 rounded flex items-center px-2 text-[8px] text-gray-400 font-mono tracking-wider overflow-hidden truncate">
                        https://{brandText.toLowerCase().replace(/\s+/g, '')}.com
                      </div>
                    </div>
                    {/* Web Content Rendered based on template */}
                    <div 
                      className="flex-1 w-full relative overflow-y-auto overflow-x-hidden"
                      style={{ backgroundColor: webTemplate.colors.bg }}
                    >
                      <div className="h-48 w-full relative">
                        <img src={webTemplate.heroImg} alt="Hero" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className="text-2xl font-serif font-bold text-white tracking-widest">{brandText}</div>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="w-1/2 h-3 rounded mb-3" style={{ backgroundColor: webTemplate.colors.accent }}></div>
                        <div className="w-full h-2 rounded mb-2 opacity-50" style={{ backgroundColor: webTemplate.colors.text }}></div>
                        <div className="w-3/4 h-2 rounded mb-6 opacity-50" style={{ backgroundColor: webTemplate.colors.text }}></div>
                        
                        <div className="grid grid-cols-2 gap-3 mb-6">
                           <div className="h-20 rounded-lg flex items-center justify-center border-2 border-dashed" style={{ borderColor: webTemplate.colors.accent, backgroundColor: webTemplate.colors.text + '10' }}><ImageIcon className="w-6 h-6 opacity-50" style={{ color: webTemplate.colors.text }}/></div>
                           <div className="h-20 rounded-lg flex items-center justify-center border-2 border-dashed" style={{ borderColor: webTemplate.colors.accent, backgroundColor: webTemplate.colors.text + '10' }}><ImageIcon className="w-6 h-6 opacity-50" style={{ color: webTemplate.colors.text }}/></div>
                        </div>

                        <div className="w-full py-2 rounded text-center text-[10px] font-bold tracking-widest uppercase text-white shadow" style={{ backgroundColor: webTemplate.colors.accent }}>Pesan Sekarang</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Web Controls */}
                <div className="flex-1 space-y-8">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-natural-text/70 mb-4">
                      1. Pilih Konsep Website
                    </h3>
                    <div className="grid gap-3">
                      {WEB_TEMPLATES.map(tmpl => (
                        <button
                          key={tmpl.id}
                          onClick={() => setWebTemplate(tmpl)}
                          className={`flex items-start text-left p-4 rounded-xl border transition-all ${webTemplate.id === tmpl.id ? 'border-natural-accent bg-natural-light/50 ring-1 ring-natural-accent shadow-sm' : 'border-natural-border bg-natural-base hover:border-natural-primary/50'}`}
                        >
                          <div className="flex-1">
                            <div className="font-bold text-natural-text mb-1">{tmpl.name}</div>
                            <div className="text-xs text-natural-text/60">{tmpl.desc}</div>
                          </div>
                          <div className="flex gap-1">
                             <div className="w-4 h-4 rounded-full border border-black/10" style={{ backgroundColor: tmpl.colors.bg }}/>
                             <div className="w-4 h-4 rounded-full border border-black/10" style={{ backgroundColor: tmpl.colors.accent }}/>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-natural-text/70 mb-4 mt-2">
                       2. Personalisasi Data
                    </h3>
                     <label className="block text-xs font-bold text-natural-text/60 mb-2 uppercase">Nama Brand Utama</label>
                    <input 
                      type="text" 
                      value={brandText}
                      onChange={(e) => setBrandText(e.target.value)}
                      placeholder="Masukkan nama brand..."
                      className="w-full bg-natural-base border border-natural-border px-4 py-3 rounded-xl focus:outline-none focus:border-natural-primary mb-4"
                    />
                    <p className="text-xs text-natural-text/50">Teks ini akan otomatis terupdate pada preview desain di samping.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}

