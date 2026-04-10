# SnapCuller Design System

Informasi mengenai color palette dan tipografi yang digunakan dalam aplikasi SnapCuller.

## 🎨 Color Palette

SnapCuller menggunakan sistem warna berbasis CSS Variables (HSL) yang mendukung berbagai tema.

### 1. Light Theme (Clean Professional - TEMPORARILY DISABLED)
- **Background**: `hsl(0, 0%, 100%)` (Pure White)
- **Foreground**: `hsl(240, 10%, 3.9%)` (Dark Gray)
- **Primary**: `hsl(289, 63%, 55%)` (Vibrant Violet)
- **Secondary**: `hsl(240, 4.8%, 95.9%)` (Soft Gray)
- **Accent**: `hsl(227, 60%, 55%)` (Indigo Blue)
- **Border**: `hsl(240, 5.9%, 90%)`

### 2. Snap Indigo (Premium Deep Night - DEFAULT)
*Estetika "Premium Night" yang dirancang untuk kenyamanan mata fotografer.*
- **Background**: `hsl(240, 50%, 3%)` (Deep Indigo Black)
- **Foreground**: `hsl(240, 10%, 96%)` (Ghost White)
- **Primary**: `hsl(289, 63%, 68%)` (Orchid / Violet)
- **Secondary**: `hsl(240, 30%, 12%)` (Dark Navy - Used for backgrounds)
- **Accent**: `hsl(227, 60%, 55%)` (Indigo Blue - Used for visibility/icons)
- **Muted**: `hsl(240, 25%, 18%)`
- **Card**: `hsl(240, 40%, 6%)`
- **Glass**: `rgba(255, 255, 255, 0.05)`

### 3. Brand Gradient
Digunakan untuk elemen hero, CTA, dan aksen premium.
- **Direction**: `to bottom / to right`
- **Colors**: `from-primary/10 to-transparent` or `from-primary to-accent`

---

## 🔡 Typography

Kombinasi tiga font premium dari Google Fonts untuk menciptakan tampilan yang modern dan profesional:

| Brand / Class | Font Family | Peran & Penggunaan |
| :--- | :--- | :--- |
| **font-brand** / **font-outfit** | `Outfit` | **Branding/Header**: Digunakan untuk judul (headers), branding, dan UI utama yang ditonjolkan. |
| **font-urbanist** | `Urbanist` | **Headline/Aksen**: Font geometris sekunder yang elegan untuk elemen desain estetika tinggi. |
| **font-sans** | `Inter` | **UI/Konten**: Default sistem untuk keterbacaan tinggi pada teks panjang dan label metadata. |

### Konfigurasi Tailwind (v4):
```css
@theme {
  --font-sans: "Inter", sans-serif;
  --font-brand: "Outfit", sans-serif;
  --font-outfit: "Outfit", sans-serif;
  --font-urbanist: "Urbanist", sans-serif;
}
```

---

## ✨ Design Principles
- **Modern Minimalist**: Penggunaan ruang putih (dan hitam) yang luas.
- **Glassmorphism**: Beberapa komponen menggunakan efek blur/trasparansi.
- **Micro-animations**: Respons visual cepat pada interaksi klik dan hover.
