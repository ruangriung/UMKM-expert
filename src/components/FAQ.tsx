import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Berapa lama proses pengerjaan pembuatan booth dan website?",
    answer: "Untuk pembuatan website dan media sosial biasanya memakan waktu 3-5 minggu. Pembuatan booth kontainer custom dan perlengkapan fisik memakan waktu 4-6 minggu. Namun, semua proses ini berjalan secara paralel sehingga secara keseluruhan paket bisnis Anda bisa siap dalam waktu 1 hingga 2 bulan."
  },
  {
    question: "Apakah bisa membuat booth dengan desain dan ukuran custom di luar paket?",
    answer: "Sangat bisa. Kami menyediakan Paket Custom di mana Anda bisa menentukan dimensi, warna, bahan baku, instalasi interior, hingga desain visual eksterior sesuai dengan branding dan budget yang Anda miliki."
  },
  {
    question: "Bagaimana sistem pembayaran untuk layanan All-in-One ini?",
    answer: "Kami menggunakan sistem pembayaran 3 tahap: 30% Down Payment (DP) saat kontrak disepakati, 40% saat milestone bulan pertama tercapai (desain & administrasi selesai), dan pelunasan 30% saat serah terima final seluruh fisik booth, website, dan dokumen legal."
  },
  {
    question: "Apakah pengurusan legalitas seperti NIB dan Halal pasti berhasil?",
    answer: "Kami dibantu oleh tim Konsultan Legal profesional. Untuk NIB dan CV, tingkat keberhasilannya hampir 100% karena persyaratannya jelas. Untuk Sertifikasi Halal, kami akan mendampingi penuh proses administrasi & audit operasional agar memenuhi standar BPJPH hingga sertifikat terbit."
  },
  {
    question: "Apakah ada garansi setelah booth dan website diserahterimakan?",
    answer: "Ya, kami memberikan garansi pemeliharaan selama 1 bulan setelah serah terima. Ini mencakup perbaikan minor pada fisik booth jika terjadi kerusakan akibat produksi, kebocoran, atau perbaikan bug/error pada website yang telah dibuat."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-natural-bg" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-natural-primary/10 text-natural-primary font-bold text-[10px] uppercase tracking-widest mb-4 border border-natural-primary/20">
            Pertanyaan Umum
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-natural-text">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-natural-primary bg-white shadow-lg' : 'border-natural-border bg-white'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                >
                  <span className="text-lg font-bold text-natural-text pr-8">{faq.question}</span>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-natural-primary text-white' : 'bg-natural-bg text-natural-primary'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-natural-text/70 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
