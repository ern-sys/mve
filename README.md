# Blog Pixel Minimalis (Hitam/Putih)

Situs blog sederhana dengan estetika pixel, kontras tinggi, cepat dan mudah diubah.

## Fitur
- Tema hitam/putih dengan tepi 1-2px yang tegas
- Font pixel/retro via Google Fonts `Press Start 2P`
- Grid responsif untuk daftar artikel
- Toggle tema DARK/LIGHT (persisten via `localStorage`)

## Struktur
- `index.html` — markup utama dan contoh 3 artikel
- `styles.css` — tema pixel black & white + responsif
- `script.js` — toggle tema dan tahun footer

## Cara Menjalankan
Cukup buka `index.html` di browser modern. Untuk server lokal:

```bash
python3 -m http.server 5173
# lalu buka http://localhost:5173
```

## Kustomisasi Cepat
- **Judul & brand**: ubah elemen di header pada `index.html`
- **Warna**: sesuaikan variabel CSS di `:root` dan `html[data-theme="dark"]`
- **Font**: ganti `Press Start 2P` di `index.html` dan `styles.css`
- **Kartu artikel**: duplikasi `.post` di bagian `.posts`

## Lisensi
MIT