 // Peringatan //
function masuk() {
    var nama = document.getElementById("nama").value;
    var usia = document.getElementById("usia").value;
    swal.setActionValue(usia);
    if (nama == '') {
        swal("Maaf", "Tolong isi Nama Anda", "warning");
        return false;
    } else if (usia == '') {
        swal("Maaf", "Tolong isi Usia Anda", "warning");
        return false;
    } else if (usia >= 1 && usia <= 2) {
        swal("Anda mahasiswa tahun pertama", "Mahasiswa Baru", "success");
        return false;
    } else if (usia >= 3 && usia <= 4) {
        swal("Anda mahasiswa tahun kedua", "Semangat!", "success");
        return false;
    } else if (usia >= 5 && usia <= 6) {
        swal("Anda mahasiswa tahun ketiga", "Tetap Semangat!", "success");
        return false;
    } else if (usia >= 7 && usia <= 8) {
        swal("Anda mahasiswa tahun keempat", "Lulus tahun ini!", "success");
        return false;
    } else if (usia >= 8) {
        swal("Salah", "Anda bukan mahasiswa universitas ini!", "warning");
        return false;
    } else if (usia <= 0) {
        swal("Salah", "Anda bukan mahasiswa universitas ini!", "warning");
        return false;
    }

    document.getElementById("submit").addEventListener("click", function (event) {
        event.preventDefault()
    });
}
