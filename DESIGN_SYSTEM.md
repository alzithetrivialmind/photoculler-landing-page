# SnapCuller Design System

Informasi mengenai color palette dan tipografi yang digunakan dalam aplikasi SnapCuller.

## 🎨 Color Palette

SnapCuller menggunakan sistem warna berbasis CSS Variables (HSL) yang mendukung berbagai tema.

### 1. Light Theme (Clean & Professional)
- **Background**: `hsl(0, 0%, 100%)` (Putih)
- **Foreground**: `hsl(240, 10%, 4%)` (Hitam Pekat)
- **Primary**: `hsl(240, 6%, 10%)`
- **Accent**: `hsl(227, 42%, 47%)` (Blue Professional)
- **Destructive**: `hsl(0, 84%, 60%)` (Red)

### 1. Snap Black (Signature Pro - DEFAULT)
*Identitas utama SnapCuller dengan estetika premium dark mode.*
- **Background**: `hsl(240, 10%, 2%)` (Deep Black)
- **Foreground**: `hsl(0, 0%, 98%)` (White Smoke)
- **Primary**: `hsl(334, 82%, 72%)` (Logo Pink - #f27fb2)
- **Secondary**: `hsl(226, 43%, 47%)` (Logo Blue - #445ca9)
- **Accent**: `hsl(334, 82%, 72%)`
- **Muted**: `hsl(240, 5%, 15%)`
- **Glass**: `hsla(240, 10%, 5%, 0.8)`

### 2. Brand Gradient
Digunakan untuk elemen hero, CTA, dan aksen premium.
- **Direction**: `to right / 135deg`
- **Colors**: `#f27fb2` (Start) to `#445ca9` (End)

---

Aplikasi menggunakan tipografi yang dioptimalkan untuk "UI-UX Pro Max Standards" guna mencapai tampilan modern dan profesional.

| Jenis | Font Family | Penggunaan |
| :--- | :--- | :--- |
| **Sans (Default)** | `DM Sans`, sans-serif | Body text, label, dan konten umum. |
| **Heading** | `Satoshi`, sans-serif | Heading utama, sub-heading, dan branding. |
| **Mono** | `JetBrains Mono`, monospace | Versi rilis, kode, dan data teknis. |

### Konfigurasi Tailwind:
```javascript
fontFamily: {
    sans: ['Inter', 'sans-serif'],
    brand: ['Outfit', 'sans-serif'],
    outfit: ['Outfit', 'sans-serif'],
    urbanist: ['Urbanist', 'sans-serif'],
}
```

---

## ✨ Design Principles
- **Modern Minimalist**: Penggunaan ruang putih (dan hitam) yang luas.
- **Glassmorphism**: Beberapa komponen menggunakan efek blur/trasparansi.
- **Micro-animations**: Respons visual cepat pada interaksi klik dan hover.
