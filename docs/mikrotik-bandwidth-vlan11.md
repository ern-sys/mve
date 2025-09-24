# Manajemen Bandwidth VLAN 11 (MikroTik)

## Ringkasan
Tujuan: atur QoS/bandwidth limiting untuk VLAN 11 (staff). Menguji beberapa metode queue dan merekam hasil.

## Langkah singkat
1. Pastikan interface bridge/VLAN sudah benar.
2. Contoh simple queue:
```bash
/ip firewall mangle add chain=prerouting in-interface=vlan11 action=mark-packet new-packet-mark=staff_pkt
/queue tree add parent=global packet-mark=staff_pkt limit-at=1M max-limit=2M queue=default
