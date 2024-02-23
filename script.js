alert("Ticket Masuk Studio!")

const nama = prompt("Masukkan nama Anda:");
const usia = prompt("Masukkan usia Anda:");

if (usia >= 13) {
    const studio = prompt("Pilih studio \n A: Studio A \n B: Studio B \n C: Studio C");

    if (studio == "A") {
        alert(`Tiket atas nama ${nama} dengan Usia ${usia} silakan masuk Studio A`);
    } else if (studio == "B") {
        alert(`Tiket atas nama ${nama} dengan Usia ${usia} silakan masuk Studio B`);
    } else if (studio == "C") {
        alert(`Tiket atas nama ${nama} dengan Usia ${usia} silakan masuk Studio C`);
    } else {
        alert("Studio tidak valid");
    }
} else {
    alert(`Maaf ${nama}, usia Anda belum memenuhi syarat masuk Studio.`);
}