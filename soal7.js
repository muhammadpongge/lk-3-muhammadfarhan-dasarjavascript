
(function () {

    let jumlahSiswa = parseInt(prompt("Jumlah siswa: "));

    let tabel = "";

    for (let i = 1; i <= jumlahSiswa; i++) {

        let nama = prompt("Nama siswa ke-" + i + ": ");
        let nilai = parseInt(prompt("Nilai siswa ke-" + i + ": "));

        let status;

        if (nilai >= 75) {
            status = "Lulus";
        } else {
            status = "Belum Lulus";
        }

        tabel += i + "   " + nama + "   " + nilai + "   " + status + "\n";
    }

    console.log("==============================");
    console.log("       DATA NILAI SISWA");
    console.log("==============================");

    console.log("No  Nama       Nilai   Status");
    console.log(tabel);

    console.log("==============================");

})();
