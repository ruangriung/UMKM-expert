import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const categories = ["Semua", "Booth Kontainer", "Website & Branding", "Booth Indoor"];

const projects = [
  {
    id: 1,
    title: "Kopi Senja - Booth Industrial",
    category: "Booth Kontainer",
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop",
    desc: "Pembuatan booth kontainer untuk brand kopi lengkap dengan instalasi kelistrikan."
  },
  {
    id: 2,
    title: "Mie Pedas Gila - Ekosistem Digital",
    category: "Website & Branding",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    desc: "Pembuatan website company profile, desain kemasan, dan sosmed."
  },
  {
    id: 3,
    title: "Burger Bang - Island Booth",
    category: "Booth Indoor",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop",
    desc: "Desain dan fabrikasi booth untuk penempatan di dalam foodcourt mall."
  },
  {
    id: 4,
    title: "Teh Nusantara - Kontainer Medium",
    category: "Booth Kontainer",
    image: "https://plus.unsplash.com/premium_photo-1663126781223-96b4685ff5d8?q=80&w=2069&auto=format&fit=crop",
    desc: "Fabrikasi kontainer medium dengan modifikasi jendela hidrolik."
  },
  {
    id: 5,
    title: "Fried Chicken - Rebranding",
    category: "Website & Branding",
    image: "https://images.unsplash.com/photo-1583321500900-82807e458f3c?q=80&w=2070&auto=format&fit=crop",
    desc: "Pembaruan visual identitas, logo, seragam, dan e-menu."
  },
  {
    id: 6,
    title: "Sushi Go - Mini Booth",
    category: "Booth Indoor",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop",
    desc: "Booth kayu modern minimalis untuk penempatan area koridor."
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProjects = projects.filter(project => 
    activeCategory === "Semua" ? true : project.category === activeCategory
  );

  return (
    <section className="py-24 bg-white" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-natural-primary/10 text-natural-primary font-bold text-[10px] uppercase tracking-widest mb-4 border border-natural-primary/20">
            Portfolio Kami
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-natural-text mb-6">
            Hasil Karya Nyata
          </h2>
          <p className="text-natural-text/70 max-w-2xl mx-auto">
            Kumpulan proyek yang telah kami selesaikan, mulai dari fabrikasi fisik booth hingga pengembangan ekosistem digital untuk berbagai UMKM dan perusahaan.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-natural-primary text-white shadow-lg shadow-natural-primary/30" 
                  : "bg-natural-bg text-natural-text/70 hover:bg-natural-bg hover:text-natural-primary border border-natural-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative overflow-hidden rounded-3xl bg-natural-bg border border-natural-border"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-natural-accent text-xs font-bold uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{project.desc}</p>
                </div>
                
                {/* Default State Info (Visible when not hovering on mobile/desktop) */}
                <div className="p-6 bg-white group-hover:opacity-0 transition-opacity duration-300 absolute bottom-0 left-0 right-0 border-t border-natural-border">
                  <span className="text-natural-primary text-xs font-bold uppercase tracking-wider mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="text-natural-text text-lg font-bold">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
