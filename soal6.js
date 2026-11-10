
let jumlahSiswa = parseInt(prompt("Masukkan jumlah siswa: "));

let totalNilai = 0;
let nilaiTertinggi = 0;
let nilaiTerendah = 100;
let jumlahLulus = 0;
let jumlahTidakLulus = 0;

for (let i = 1; i <= jumlahSiswa; i++) {

    let nilai = parseInt(prompt("Nilai siswa ke-" + i + ": "));

    totalNilai += nilai;

    if (nilai > nilaiTertinggi) {
        nilaiTertinggi = nilai;
    }

    if (nilai < nilaiTerendah) {
        nilaiTerendah = nilai;
    }

    if (nilai >= 75) {
        jumlahLulus++;
    } else {
        jumlahTidakLulus++;
    }
}

let rataRata = totalNilai / jumlahSiswa;

console.log("==============================");
console.log("      REKAP NILAI SISWA");
console.log("==============================");

console.log("Jumlah Siswa    : " + jumlahSiswa);
console.log("Jumlah Nilai    : " + totalNilai);
console.log("Rata-rata       : " + rataRata.toFixed(2));
console.log("Nilai Tertinggi : " + nilaiTertinggi);
console.log("Nilai Terendah  : " + nilaiTerendah);

console.log("");
console.log("Jumlah Lulus    : " + jumlahLulus);
console.log("Belum Lulus     : " + jumlahTidakLulus);

console.log("==============================");
