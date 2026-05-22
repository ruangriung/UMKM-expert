import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Utensils, Award, ShieldCheck, Building2, Store } from 'lucide-react';

const partners = [
  { name: 'ShopeeFood', icon: ShoppingBag },
  { name: 'GrabFood', icon: Utensils },
  { name: 'GoFood', icon: Store },
  { name: 'Halal BPJPH', icon: Award },
  { name: 'NIB OSS', icon: ShieldCheck },
  { name: 'Bank UMKM', icon: Building2 },
];

export default function TrustedBy() {
  // Duplicate the array to create a seamless loop
  const scrollItems = [...partners, ...partners];

  return (
    <section className="py-12 bg-white border-y border-natural-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-natural-text/40">
          Mendukung Ekosistem Bisnis
        </p>
      </div>
      
      <div className="relative w-full overflow-hidden flex">
        <motion.div
          className="flex gap-16 items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {scrollItems.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div 
                key={index} 
                className="flex items-center gap-3 text-natural-text/30 hover:text-natural-primary transition-colors duration-300 grayscale hover:grayscale-0"
              >
                <Icon size={28} strokeWidth={1.5} />
                <span className="font-bold text-xl tracking-tight">{partner.name}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
