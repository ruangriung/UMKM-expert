# RuangRiung Academy - Solusi Bisnis Terima Beres

Landing page modern dan responsif untuk **RuangRiung Academy**, sebuah layanan penyedia jasa terpadu (All-in-One) untuk UMKM dan Franchise. Layanan yang ditawarkan mencakup pembuatan booth kontainer custom, identitas visual, pendaftaran merchant online, pembuatan website, strategi digital marketing, hingga pengurusan legalitas bisnis (Sertifikat Halal, NIB, & HAKI).

## 🚀 Fitur Utama Website

- **Desain Modern & Profesional**: Menggunakan Tailwind CSS untuk tampilan yang bersih, elegan, dan *mobile-friendly*.
- **Animasi Halus**: Transisi dan interaksi elemen menggunakan Framer Motion.
- **Sistem Harga Dinamis (Pricing)**: Tab filter interaktif untuk memudahkan calon klien memilih paket jasa.
- **Struktur SEO Optimized**: Dilengkapi dengan Meta Tags yang relevan dan Schema.org JSON-LD untuk performa pencarian lokal.
- **Siap Deploy ke Cloudflare**: Dilengkapi dengan konfigurasi `_redirects` di folder public untuk mendukung routing SPA di Cloudflare Pages.

## 🛠️ Teknologi yang Digunakan

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/)
- [Lucide React](https://lucide.dev/) (Iconography)

## 💻 Panduan Pengembangan Lokal (Local Development)

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di komputer Anda:

1. **Clone repositori ini**
   ```bash
   git clone https://github.com/username-anda/karya-kontainer.git
   cd karya-kontainer
   ```

2. **Install dependensi**
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan**
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan di `http://localhost:3000` (atau port lain yang disediakan oleh Vite).

4. **Build untuk Produksi**
   ```bash
   npm run build
   ```
   Hasil build akan di-generate ke dalam folder `dist/`.

## 🌐 Panduan Deployment ke Cloudflare Pages

Proyek ini sudah dikonfigurasi agar kompatibel dengan Cloudflare Pages (SPA routing didukung melalui file `public/_redirects`).

1. Login ke dashboard [Cloudflare](https://dash.cloudflare.com/).
2. Masuk ke menu **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
3. Pilih repositori GitHub ini.
4. Pada bagian **Build settings**, atur:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Klik **Save and Deploy**. Cloudflare akan otomatis membangun dan mempublikasikan website Anda setiap kali ada *commit* baru ke *branch* utama.

## 📝 Lisensi

Dikustomisasi untuk kebutuhan RuangRiung Academy.
