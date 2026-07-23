# 📋 Plan: Modern Portfolio App — Next.js

## 🎯 Tujuan
Membangun website portfolio pribadi modern dengan **Next.js 14+ (App Router)**, responsif di semua perangkat, dan mencakup halaman: **About, Blog, Project, Contact & Social Media (GitHub, LinkedIn, Instagram, X)**.

## 🛠 Tech Stack
| Kategori | Pilihan |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Bahasa | TypeScript |
| Styling | Tailwind CSS |
| Animasi | Framer Motion |
| Ikon | react-icons (termasuk ikon sosmed) |
| Blog/Content | MDX atau JSON lokal (static) |
| Deployment | Vercel |

## 📁 Struktur Folder
```
modern-portofolio-app/
├── public/                  # assets statis (images, favicon, dll)
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout (navbar + footer)
│   │   ├── page.tsx         # Homepage (Hero)
│   │   ├── about/page.tsx   # About page
│   │   ├── blog/
│   │   │   ├── page.tsx     # Blog list
│   │   │   └── [slug]/page.tsx  # Blog detail
│   │   ├── projects/
│   │   │   ├── page.tsx     # Project list
│   │   │   └── [slug]/page.tsx  # Project detail
│   │   ├── contact/page.tsx # Contact form + sosmed
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── ui/              # Button, Card, Badge, etc
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── BlogSection.tsx
│   │   │   └── ProjectSection.tsx
│   │   └── social/
│   │       └── SocialLinks.tsx  # GitHub, LinkedIn, IG, X
│   ├── lib/
│   │   ├── content.ts       # Fungsi baca MDX/JSON
│   │   └── utils.ts         # Utility functions
│   ├── data/
│   │   ├── projects.json
│   │   ├── blog-posts.json
│   │   └── profile.json
│   └── types/
│       └── index.ts
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## 🧩 Fitur & Halaman

| Halaman | Konten |
|---|---|
| **🏠 Home** | Hero section dengan nama, role, CTA, social links |
| **👤 About** | Bio singkat, skills, pengalaman, pendidikan |
| **📝 Blog** | List artikel (judul, excerpt, date), halaman detail per post |
| **💼 Projects** | Grid project cards (thumbnail, tech stack, link demo/github), halaman detail |
| **📬 Contact** | Form kontak + semua social media icons (GitHub, LinkedIn, Instagram, X) dengan link langsung |
| **🧭 Navbar** | Navigasi antar halaman, sticky, responsive (mobile hamburger) |
| **🦶 Footer** | Copyright, social links ringkasan |

## 📱 Responsive Design
- **Mobile-first** dengan Tailwind breakpoints (`sm`, `md`, `lg`, `xl`)
- Navbar berubah menjadi **hamburger menu** di layar kecil (`< md`)
- Grid project/blog otomatis menyesuaikan kolom (1 → 2 → 3 kolom)
- Hero section dengan typography yang menyesuaikan ukuran layar

## 🔧 Tahapan Implementasi

| # | Task | Estimasi |
|---|---|---|
| 1 | Init project Next.js + TypeScript + Tailwind | 15 menit |
| 2 | Setup struktur folder & routing | 15 menit |
| 3 | Build Navbar + Footer + Layout (responsive) | 45 menit |
| 4 | Hero Section & Homepage | 30 menit |
| 5 | About page | 30 menit |
| 6 | Blog page + detail page (MDX/JSON) | 45 menit |
| 7 | Projects page + detail page | 45 menit |
| 8 | Contact page + Social links | 30 menit |
| 9 | Refine responsive & animasi | 30 menit |
| 10 | Final testing | 15 menit |
| | **Total** | **~5 jam** |

## 🎨 Komponen UI Recommendations

### Hero Section
- Animasi teks dengan Framer Motion
- Include tipe animasi dan pencarian cursor
- Animasi kekuatan naga yang mengacu pada kode `fa-shield-halved`
- status pulse animasi untuk avatar
- Ikon SVG yang dihasilkan secara teknis
- Konfigurasi ukuran font yang opto

### Social Links
- Kombinasi setiap formulir di halaman kontak & pelat
- Ikon media sosial yang dioptimalkan
- Hover staat animasi
- Konfigurasi yang tepat
- Tampilan link ini menggunakan microgrid
- Allah semua pegangan sosial di halaman kontak

### Form kontak
- Komponen ion dengan status animasi
- Form kontrol dengan tindakan yang tepat
- Konfigurasi status status
- Status sebuah etik dalam font dan font sebuah pending

### Card page proyek
- Thumbnail + badge untuk setiap tag teknologi
- Link demo + link github
- Animasi hover dengan desain hover card
- Menambahkan kondisi dalam membuat halaman detail yang tepat untuk setiap proyek
- Membuat halaman proyek detail yang tepat dengan penjelasan
- Membuat halaman detail proyek untuk setiap proyek utama dan tautan yang tepat untuk halaman detail utama