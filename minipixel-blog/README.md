# MiniPixel — Blog Minimalis Hitam Putih Bergaya Pixel

Situs blog statis sederhana dengan estetika hitam-putih dan sentuhan pixel (tepi 1px, bayangan blok). Tidak perlu build step.

## Struktur Proyek
```
minipixel-blog/
├─ index.html
├─ about.html
├─ posts/
│  └─ hello-world.html
├─ css/
│  └─ styles.css
├─ js/
│  └─ main.js
└─ favicon.svg
```

## Menjalankan Secara Lokal
- Opsi 1: Buka `index.html` di browser.
- Opsi 2: Jalankan server statis:

```bash
cd minipixel-blog
python3 -m http.server 8080
```

Kunjungi `http://localhost:8080`.

## Menambah Post Baru
1. Duplikasi `posts/hello-world.html` menjadi `posts/nama-post.html`.
2. Ubah `<title>`, `<h1>`, tanggal di `.meta`, dan konten.
3. Tambahkan tautan di daftar post `index.html`.

## Tema Gelap/Terang
Klik tombol "Tema" untuk beralih. Preferensi disimpan di `localStorage`.

## Lisensi
Bebas digunakan. Tidak ada garansi.