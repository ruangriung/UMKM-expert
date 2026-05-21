export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Konsultasi Kebutuhan",
      desc: "Diskusi via WA/Meeting tentang booth, branding, kebutuhan web, dan legalitas yang belum dimiliki bisnis Anda."
    },
    {
      num: "02",
      title: "Desain & Legal",
      desc: "Sembari desain layout booth & logo dibuat, tim kami akan memproses draft legalitas (NIB/Halal/CV) Anda secara paralel."
    },
    {
      num: "03",
      title: "Produksi & Development",
      desc: "Booth masuk tahap fabrikasi. Bersamaan dengan itu, website toko online dan aset digital Anda mulai dibangun."
    },
    {
      num: "04",
      title: "Siap Launching!",
      desc: "Booth dikirim, website online, legalitas terbit. Anda terima beres dan siap untuk grand opening bisnis."
    }
  ];

  return (
    <section id="proses" className="py-24 bg-natural-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-natural-base text-natural-text/80 font-bold text-[10px] uppercase tracking-widest mb-4 border border-natural-border">
            Alur Terstruktur
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-natural-text mb-6">
            Proses Pengerjaan
          </h2>
          <p className="text-lg text-natural-text/70">
            Tim kami bekerja secara paralel. Pembuatan fisik, desain digital, dan legalitas berjalan serentak untuk menghemat waktu Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative bg-natural-base p-8 rounded-2xl shadow-sm border border-natural-border border-b-4 border-b-natural-border hover:border-b-natural-accent transition-all">
              <div className="text-5xl font-serif text-natural-light mb-6">{step.num}</div>
              <h3 className="text-xl font-serif text-natural-text mb-3">{step.title}</h3>
              <p className="text-natural-text/70 leading-relaxed text-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
