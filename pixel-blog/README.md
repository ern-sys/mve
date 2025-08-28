# Pixel Blog (Minimalis Hitam-Putih, Gaya Pixel)

Blog statis minimalis dengan estetika pixel dan palet hitam/putih.

## Struktur
- `index.html`: Beranda
- `post.html`: Contoh tulisan
- `styles.css`: Gaya hitam/putih + pixel
- `script.js`: Toggle menu mobile
- `README.md`: Dokumen ini

## Cara Menjalankan
Buka `index.html` langsung di browser, atau jalankan server statis:

```bash
python3 -m http.server 5500 --directory /workspace
# lalu buka: http://localhost:5500/pixel-blog/
```

## Kustomisasi Cepat
- Ubah judul/logo dan tautan di `index.html`
- Ubah variabel warna/ukuran di `styles.css` (bagian `:root`)
- Duplikat `post.html` untuk tulisan baru

Lisensi: MIT