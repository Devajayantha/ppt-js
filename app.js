var code = (file, text, output = "") => ({ kind: "code", file, text, output });
var cards = items => ({ kind: "cards", items });
var flow = items => ({ kind: "flow", items });
var boxes = items => ({ kind: "boxes", items });
var preview = () => ({ kind: "preview" });
var image = (src, alt) => ({ kind: "image", src, alt });
var quiz = (question, choices, answer, feedback) => ({ kind: "quiz", question, choices, answer, feedback });
var task = (minutes, goal, example, starter, steps, extra = []) => ({ kind: "task", minutes, goal, example, starter, steps, extra });

var days = [
  {
    id: "day2",
    title: "Day 2",
    subtitle: "Mengenal JavaScript",
    intro: "Dari console.log sampai program biodata dan nilai.",
    sections: [
      section("2.1", "Selamat Datang di Dunia Pemrograman", [
        s("Program Ada di Sekitar Kita", "Saat kasir menghitung total, game mengecek menang, atau web menyimpan nama, di belakangnya ada program yang bekerja.", flow(["Input", "Proses", "Output"])),
        s("Empat Hari Ini Kita Buat Apa?", "Kita belajar pelan-pelan. Target akhirnya: aplikasi kecil untuk mencatat nilai siswa.", cards(["Day 2: simpan data", "Day 3: ambil keputusan", "Day 4: banyak data"])),
        s("Program Apa yang Sering Kalian Pakai?", "Coba sebutkan aplikasi yang kalian buka minggu ini. Menurut kalian, bagian mana yang dihitung oleh program?", boxes(["TikTok", "Game", "Kasir", "Absensi", "Marketplace"])),
        s("Input, Proses, Output", "Sederhananya begini: data masuk, program mengolah, lalu hasil keluar.", flow(["Nilai tugas", "Hitung rata-rata", "Status lulus"])),
        s("Pemrograman Itu Instruksi", "Komputer tidak paham maksud kita kalau tidak ditulis jelas. Jadi kode itu seperti instruksi langkah demi langkah.", cards(["Urutan penting", "Nama data jelas", "Hasil bisa dicek"])),
      ]),
      section("2.2", "Mengenal JavaScript", [
        s("Bisakah Website Merespons Klik?", "Pernah klik tombol lalu tulisan berubah? Itu bukan sihir. Ada JavaScript yang jalan.", preview()),
        s("Apa Itu JavaScript?", "JavaScript adalah bahasa untuk memberi perintah ke halaman web. Nanti kita pakai untuk menghitung, mengecek, dan menampilkan hasil.", image("assets/images/day2/day2-js-logo.svg", "Logo JavaScript sederhana dengan contoh console.log")),
        s("HTML, CSS, JavaScript", "Bayangkan website seperti tubuh: HTML rangkanya, CSS bajunya, JavaScript gerakannya.", flow(["HTML: isi", "CSS: tampilan", "JavaScript: aksi"])),
        s("Contoh Interaksi Sederhana", "Saat tombol diklik, JavaScript bisa mengambil angka, menghitung, lalu menaruh hasilnya di halaman.", flow(["Klik tombol", "JS jalan", "Hasil muncul"])),
        s("Lihat Hasilnya Dulu", "Sebelum lihat kode, lihat dulu hasil yang ingin kita buat.", { kind: "console", lines: ["Nama: Made", "Nilai rata-rata: 87.5", "Status: Lulus"] }),
      ]),
      section("2.3", "Langsung Mencoba JavaScript", [
        s("Langsung Coba JavaScript", "Tidak perlu instalasi. Ketik kode, jalankan, lalu lihat hasilnya.", { kind: "links" }),
        s("Console Itu Apa?", "Console itu papan catatan untuk programmer. Kita pakai untuk melihat hasil sementara dan membaca error.", { kind: "console", lines: ["Pesan program muncul di sini", "Error juga bisa terlihat di sini"] }),
        s("Apa Itu console.log()?", "console.log() dipakai untuk menulis sesuatu ke console. Cocok untuk cek: kodeku jalan atau belum?", code("script.js", 'console.log("Halo dari console");', "Halo dari console")),
        s("Program Pertama", "Coba jalankan dua baris ini. Kalau teksnya muncul, berarti JavaScript kalian sudah jalan.", code("script.js", 'console.log("Halo, dunia!");\nconsole.log("Saya sedang belajar JavaScript!");', "Halo, dunia!\nSaya sedang belajar JavaScript!")),
        s("Ganti Isi Teks", "Ubah kalimatnya menjadi nama kalian sendiri.", code("script.js", 'console.log("Halo, nama saya Made");\nconsole.log("Saya kelas X RPL");', "Halo, nama saya Made\nSaya kelas X RPL")),
        s("Hasil Bisa Lebih dari Satu", "Setiap console.log menampilkan satu baris hasil.", code("script.js", 'console.log("Nama: Sari");\nconsole.log("Kelas: X RPL 1");\nconsole.log("Hobi: futsal");', "Nama: Sari\nKelas: X RPL 1\nHobi: futsal")),
        s("Latihan 10 Menit", "Buat 4 output: nama, kelas, sekolah, dan alasan ingin belajar coding.", task(10, "Berani mencoba console.log sendiri.", "Nama: Dika", 'console.log("Nama: ...");\nconsole.log("Kelas: ...");', ["Ganti titik-titik dengan data kalian.", "Jalankan program.", "Perbaiki jika ada tanda petik yang kurang."])),
      ]),
      section("2.4", "Mengenal Visual Studio Code", [
        s("Dari Online ke VS Code", "Kalau contoh kecil sudah berhasil, sekarang kita pindah ke alat kerja yang lebih serius: VS Code.", cards(["Editor kode", "Folder latihan", "File HTML dan JS"])),
        s("Apa Itu Editor Kode?", "Editor kode itu tempat menulis kode. Mirip buku catatan, tapi khusus untuk program.", { kind: "mock-vscode" }),
        s("Membuka Folder Project", "Buat satu folder khusus. Semua file latihan hari ini taruh di situ agar tidak tercecer.", flow(["Folder", "VS Code", "File project"])),
        s("Buat index.html", "HTML menjadi halaman yang dibuka di browser.", code("index.html", '<!doctype html>\n<html>\n  <body>\n    <h1>Belajar JavaScript</h1>\n  </body>\n</html>')),
        s("Buat script.js", "JavaScript kita simpan di file terpisah agar lebih rapi.", code("script.js", 'console.log("File JS berhasil terhubung");')),
        s("Hubungkan HTML dan JavaScript", "Tambahkan script sebelum penutup body.", code("index.html", '<h1>Belajar JavaScript</h1>\n<script src="script.js"></script>', "File JS berhasil terhubung")),
        s("Buka Browser Console", "Kalau hasil belum terlihat di halaman, cek console. Biasanya petunjuk error ada di sana.", { kind: "console", lines: ["File JS berhasil terhubung", "Tidak ada error"] }),
        s("Jalankan dengan Live Server", "Klik kanan index.html, pilih Open with Live Server, lalu browser akan membuka halaman project.", flow(["index.html", "Live Server", "Browser"])),
        s("Error yang Sering Terjadi", "Nama file salah, script belum terhubung, atau tanda petik belum ditutup.", cards(["script.js ≠ Script.js", "Cek tag script", "Cek tanda petik"])),
      ]),
      section("2.5", "Program Mengingat Data", [
        s("Bagaimana Program Mengingat Nama?", "Program memakai variabel, seperti kotak penyimpanan yang diberi label.", image("assets/images/day2/day2-variable-box.svg", "Variabel sebagai kotak penyimpanan nama, umur, dan sekolah")),
        s("Mulai dari var", "var kita pakai untuk membuat kotak data. Kotak ini punya nama, lalu bisa diisi nilai.", code("script.js", 'var nama = "Made";\nconsole.log(nama);', "Made")),
        s("Isi Variabel Bisa Berubah", "Isi kotaknya bisa diganti. Awalnya Made, lalu diganti jadi Ayu.", code("script.js", 'var nama = "Made";\nnama = "Ayu";\nconsole.log(nama);', "Ayu")),
        s("Catatan: Ada let dan const", "Nanti kalian akan ketemu let dan const juga. Untuk sekarang, kita pakai var dulu supaya fokus ke cara berpikirnya.", cards(["var: dipakai di latihan", "let: ketemu nanti", "const: data tetap"])),
        s("Contoh Data Tetap", "Ada data yang biasanya tidak berubah, misalnya batas lulus. Hari ini tetap boleh pakai var dulu.", code("script.js", 'var batasLulus = 75;\nconsole.log(batasLulus);', "75")),
        s("Pakai var Dulu", "Aturan kelas kita minggu ini sederhana: kalau mau menyimpan data, mulai dengan var.", cards(["Nama siswa", "Nilai tugas", "Rata-rata"])),
        s("Contoh Data Siswa", "Nama variabel yang jelas membuat kode lebih mudah dibaca.", code("script.js", 'var nama = "Made";\nvar umur = 15;\nvar sekolah = "SMK Contoh";\n\nconsole.log(nama);\nconsole.log(umur);\nconsole.log(sekolah);', "Made\n15\nSMK Contoh")),
        s("Mengubah Isi Variabel", "Variabel dengan var bisa diisi ulang dengan nilai baru.", code("script.js", 'var uangSaku = 10000;\nuangSaku = 15000;\nconsole.log(uangSaku);', "15000")),
      ]),
      section("2.6", "Jenis Data", [
        s("Teks, Angka, Benar/Salah", "JavaScript membedakan jenis data agar prosesnya tepat.", cards(["String: teks", "Number: angka", "Boolean: true/false"])),
        s("String Memakai Tanda Petik", "Nama, kelas, dan alamat biasanya disimpan sebagai String.", code("script.js", 'var nama = "Ayu";\nvar kelas = "X RPL 1";')),
        s("Number untuk Hitungan", "Nilai dan uang saku disimpan sebagai Number jika ingin dihitung.", code("script.js", 'var nilaiTugas = 80;\nvar nilaiUjian = 90;\nconsole.log(nilaiTugas + nilaiUjian);', "170")),
        s("Boolean untuk Status", "Boolean cocok untuk jawaban ya/tidak atau benar/salah.", code("script.js", 'var sudahMengumpulkan = true;\nconsole.log(sudahMengumpulkan);', "true")),
        s("Teks Angka Berbeda dengan Angka", "Angka dalam tanda petik dianggap teks.", code("script.js", 'console.log(10 + 5);\nconsole.log("10" + "5");', "15\n105")),
        s("Saat Tipe Data Keliru", "Program tidak selalu error merah. Kadang program tetap jalan, tetapi hasilnya salah karena angka disimpan sebagai teks.", code("script.js", 'var nilaiTugas = "80";\nvar nilaiUjian = "90";\nvar total = nilaiTugas + nilaiUjian;\n\nconsole.log(total);', "8090")),
        s("Tentukan Tipe Data Sebelum Mengisi Nilai", "Sebelum membuat variabel, tanya dulu: data ini mau dihitung, ditampilkan sebagai teks, atau dipakai sebagai status benar/salah?", cards(["Mau dihitung → Number", "Mau ditulis → String", "Status ya/tidak → Boolean"])),
      ]),
      section("2.7", "Perhitungan Dasar", [
        s("JavaScript Bisa Menghitung", "Tanda hitung dipakai untuk menghitung nilai, total belanja, dan rata-rata.", cards(["+ tambah", "- kurang", "* kali"])),
        s("Penjumlahan dan Pengurangan", "Gunakan angka tanpa tanda petik untuk hasil hitungan.", code("script.js", 'var uang = 20000;\nvar jajan = 7000;\nconsole.log(uang - jajan);', "13000")),
        s("Perkalian dan Pembagian", "Simbol perkalian adalah * dan pembagian adalah /.", code("script.js", 'var harga = 5000;\nvar jumlah = 3;\nconsole.log(harga * jumlah);', "15000")),
        s("Menghitung Rata-rata", "Jumlahkan dua nilai, lalu bagi dua.", code("script.js", 'var tugas = 80;\nvar ujian = 90;\nvar rataRata = (tugas + ujian) / 2;\nconsole.log(rataRata);', "85")),
        s("Latihan 15 Menit", "Hitung total belanja dari harga barang dan jumlah barang.", task(15, "Latihan memakai tanda hitung.", "Total: 24000", "var harga = 8000;\nvar jumlah = 3;\n// hitung total di sini", ["Buat variabel total.", "Isi dengan harga * jumlah.", "Tampilkan memakai console.log."])),
      ]),
      section("2.8", "Kuis Cepat Day 2", [
        s("Kuis: Fungsi JavaScript", "", quiz("JavaScript di web biasanya dipakai untuk apa?", ["Membuat halaman bereaksi saat diklik", "Mengganti kabel jaringan", "Mencetak foto"], 0, ["Benar! JavaScript membuat web bisa interaktif.", "Belum tepat. Ingat bagian aksi pada halaman web.", "Belum tepat. JavaScript bekerja di program, bukan printer."])),
        s("Kuis: console.log", "", quiz("console.log() kita pakai untuk...", ["Menampilkan hasil di console", "Menghapus file", "Mengubah warna monitor"], 0, ["Benar! Kita pakai untuk melihat hasil program.", "Belum tepat. console.log tidak menghapus file.", "Belum tepat. Warna tampilan diatur CSS."])),
        s("Kuis: Variabel", "", quiz("Variabel paling mirip dengan...", ["Kotak penyimpanan berlabel", "Kabel charger", "Tombol power"], 0, ["Benar! Labelnya adalah nama variabel.", "Belum tepat. Variabel menyimpan data.", "Belum tepat. Variabel bukan tombol."])),
        s("Kuis: String atau Number", "", quiz('Data "85" termasuk...', ["String", "Number", "Boolean"], 0, ["Benar! Ada tanda petik, jadi teks.", "Belum tepat. Number tidak memakai tanda petik.", "Belum tepat. Boolean adalah true/false."])),
        s("Kuis: Hasil Hitung", "", quiz("Hasil dari (80 + 90) / 2 adalah...", ["85", "170", "80"], 0, ["Benar! Jumlahnya 170 lalu dibagi 2.", "Belum tepat. Itu belum dibagi dua.", "Belum tepat. Coba hitung ulang."])),
      ]),
      section("2.9", "Tugas Akhir Day 2", [
        s("Tugas: Buat Program Biodata dan Nilai", "Waktu pengerjaan 60 menit. Targetnya selesai di kelas.", task(60, "Menyimpan biodata, menghitung rata-rata, dan menampilkan hasil.", "Nama: Made\nKelas: X RPL 1\nRata-rata: 87.5", 'var nama = "...";\nvar kelas = "...";\nvar nilaiTugas = 0;\nvar nilaiUjian = 0;\n\n// hitung rata-rata\n// tampilkan semua data', ["Isi nama dan kelas.", "Isi nilai tugas dan ujian.", "Buat variabel rataRata.", "Tampilkan semua data dengan console.log."], ["Tambahkan umur.", "Hitung umur tahun depan.", "Tambahkan nama sekolah."])),
        s("Checklist Tugas Day 2", "Centang saat sudah selesai.", cards(["Nama dan kelas tersimpan", "Nilai tugas dan ujian tersimpan", "Rata-rata tampil"])),
        s("Pembahasan Day 2", "Kunci utamanya: data disimpan di variabel, angka dihitung sebagai Number, hasil dicek di console.", code("script.js", 'var nama = "Made";\nvar kelas = "X RPL 1";\nvar nilaiTugas = 85;\nvar nilaiUjian = 90;\nvar rataRata = (nilaiTugas + nilaiUjian) / 2;\nconsole.log("Rata-rata: " + rataRata);', "Rata-rata: 87.5")),
        s("Rangkuman Day 2", "Hari ini kalian sudah menjalankan JavaScript, memakai variabel, mengenal tipe data, dan menghitung nilai.", cards(["console.log", "var, let, const", "String, Number, Boolean"])),
        s("Refleksi Day 2", "Tuliskan satu hal yang sudah bisa, satu hal yang masih bingung, dan satu contoh program yang ingin kalian buat.", boxes(["Sudah bisa", "Masih bingung", "Ingin buat"])),
      ]),
    ]
  },
  {
    id: "day3",
    title: "Day 3",
    subtitle: "Keputusan dan Pengulangan",
    intro: "Program mulai memilih, mengecek, dan mengulang pekerjaan.",
    sections: [
      section("3.1", "Pemanasan", [
        s("Review Day 2", "Kemarin kita menyimpan data dan menghitung. Hari ini program mulai memilih: lulus atau belum, baik atau perlu latihan.", flow(["Data", "Hitung", "Keputusan"])),
        s("Kuis Pemanasan 1", "", quiz("Keyword variabel yang kita pakai di kelas ini adalah...", ["var", "console", "if"], 0, ["Benar!", "Belum tepat. console untuk output.", "Belum tepat. if untuk kondisi."])),
        s("Kuis Pemanasan 2", "", quiz("Hasil 5 * 3 adalah...", ["15", "8", "53"], 0, ["Benar!", "Belum tepat.", "Belum tepat. Itu seperti teks digabung."])),
        s("Prediksi Output", "Apa yang muncul?", code("script.js", 'var nama = "Rani";\nconsole.log("Halo " + nama);', "Halo Rani")),
        s("Perbaiki Kesalahan", "Kode ini error karena tanda petiknya belum ditutup.", code("script.js", 'console.log("Belajar JS);', "Perbaikan: console.log(\"Belajar JS\");")),
      ]),
      section("3.2", "Program Membandingkan Data", [
        s("Nilai 80 Lebih Besar dari 75?", "Komputer menjawab perbandingan dengan dua kemungkinan: true atau false.", code("script.js", 'console.log(80 > 75);\nconsole.log(60 > 75);', "true\nfalse")),
        s("Tanda untuk Membandingkan", "Tanda ini dipakai saat program perlu mengecek dua nilai.", cards(["> lebih besar", "< lebih kecil", "=== sama dengan"])),
        s("Tidak Sama Dengan", "Kalau mau mengecek dua data berbeda, pakai !==.", code("script.js", 'var kelas = "X RPL 1";\nconsole.log(kelas !== "X TKJ 1");', "true")),
        s("Batas Kelulusan", "Contoh gampang: nilai siswa dibandingkan dengan batas lulus.", flow(["nilai = 80", "nilai >= 75?", "true"])),
        s("Latihan 10 Menit", "Buat 3 perbandingan nilai dengan batas 75.", task(10, "Latihan memakai tanda perbandingan.", "true\nfalse\ntrue", "var nilai = 82;\nconsole.log(nilai >= 75);", ["Ganti nilai beberapa kali.", "Coba tanda >, <, ===.", "Catat hasil true atau false."])),
      ]),
      section("3.3", "Program Membuat Keputusan", [
        s("Kalau Nilainya 75, Lulus atau Tidak?", "Di sinilah if dipakai. Program cek syarat, lalu memilih pesan yang cocok.", image("assets/images/day3/day3-if-else-flow.svg", "Diagram if else untuk nilai lulus")),
        s("if", "Bagian di dalam if jalan hanya kalau syaratnya benar.", code("script.js", 'var nilai = 80;\n\nif (nilai >= 75) {\n  console.log("Lulus");\n}', "Lulus")),
        s("if...else", "else adalah jalan cadangan. Dipakai kalau syarat if tidak terpenuhi.", code("script.js", 'var nilai = 70;\n\nif (nilai >= 75) {\n  console.log("Lulus");\n} else {\n  console.log("Belum lulus");\n}', "Belum lulus")),
        s("else if", "Kalau pilihannya lebih dari dua, tambahkan else if.", code("script.js", 'var nilai = 85;\n\nif (nilai >= 90) {\n  console.log("Istimewa");\n} else if (nilai >= 75) {\n  console.log("Baik");\n} else {\n  console.log("Perlu latihan");\n}', "Baik")),
        s("Baca dari Atas ke Bawah", "Program mengecek dari atas. Begitu ada syarat yang cocok, bagian itu yang dipakai.", flow(["nilai >= 90?", "nilai >= 75?", "else"])),
      ]),
      section("3.4", "Studi Kasus Nilai", [
        s("Kategori Nilai", "Angka saja kadang kurang jelas. Kita ubah menjadi pesan yang lebih enak dibaca.", cards(["85-100: Sangat Baik", "75-84: Baik", "<75: Perlu Belajar Lagi"])),
        s("Kode Kategori", "Urutan pengecekan penting. Nilai besar harus dicek lebih dulu.", code("script.js", 'var nilai = 92;\n\nif (nilai >= 85) {\n  console.log("Sangat Baik");\n} else if (nilai >= 75) {\n  console.log("Baik");\n} else {\n  console.log("Perlu Belajar Lagi");\n}', "Sangat Baik")),
        s("Prediksi Bersama", "Jika nilai diubah menjadi 78, pesan apa yang keluar?", boxes(["92 → Sangat Baik", "78 → ?", "60 → ?"])),
        s("Latihan 15 Menit", "Buat program kategori nilai dengan tiga hasil.", task(15, "Melatih if, else if, dan else.", "Nilai 82: Baik", "var nilai = 82;\n// tulis kondisi di sini", ["Cek nilai >= 85.", "Jika tidak, cek nilai >= 75.", "Selain itu tampilkan Perlu Belajar Lagi."])),
      ]),
      section("3.5", "Kuis Percabangan", [
        s("Kuis: Prediksi Output", "", quiz("Jika nilai = 70 dan kondisi nilai >= 75, hasilnya?", ["Belum lulus", "Lulus", "Error"], 0, ["Benar!", "Belum tepat. 70 kurang dari 75.", "Belum tepat. Kodenya tetap bisa berjalan."])),
        s("Kuis: Operator yang Tepat", "", quiz("Mengecek nilai minimal 75 memakai...", [">= 75", "> 75", "=== 75"], 0, ["Benar! 75 ikut lulus.", "Belum tepat. Nilai 75 tidak ikut.", "Belum tepat. Hanya pas 75."])),
        s("Kuis: Cari Kesalahan", "", quiz("Apa yang kurang dari if (nilai >= 75) console.log('Lulus')?", ["Kurung kurawal agar blok jelas", "Tanda tambah", "Variabel kelas"], 0, ["Benar. Blok lebih aman dan mudah dibaca.", "Belum tepat.", "Belum tepat."])),
        s("Kuis: Banyak Kemungkinan", "", quiz("Jika hasil bisa A, B, atau C, kita pakai...", ["if, else if, else", "console.log saja", "var saja"], 0, ["Benar!", "Belum cukup.", "Belum cukup."])),
        s("Kuis: True atau False", "", quiz("80 !== 80 menghasilkan...", ["false", "true", "80"], 0, ["Benar! 80 tidak berbeda dari 80.", "Belum tepat.", "Belum tepat."])),
      ]),
      section("3.6", "Mengapa Program Perlu Mengulang?", [
        s("Kalau Ada 30 Siswa?", "Kalau ada 30 siswa, masa kita menulis console.log 30 kali? Loop membantu kita mengulang otomatis.", boxes(["Siswa 1", "Siswa 2", "Siswa 3", "...", "Siswa 30"])),
        s("Konsep Pengulangan", "Loop artinya: lakukan perintah ini lagi, selama syaratnya masih benar.", image("assets/images/day3/day3-loop-visual.svg", "Visual pengulangan angka 1 sampai 5")),
        s("for", "for enak dipakai kalau jumlah ulangannya sudah jelas.", code("script.js", 'for (var i = 1; i <= 5; i++) {\n  console.log(i);\n}', "1\n2\n3\n4\n5")),
        s("Bagian for", "Baca for seperti ini: mulai dari 1, selama masih sampai 5, naik satu-satu.", cards(["var i = 1", "i <= 5", "i++"])),
        s("while Singkat", "while dipakai saat kita ingin mengulang selama syaratnya masih benar.", code("script.js", 'var angka = 1;\nwhile (angka <= 3) {\n  console.log(angka);\n  angka++;\n}', "1\n2\n3")),
      ]),
      section("3.7", "Contoh Pengulangan", [
        s("Menampilkan Angka 1 sampai 5", "Loop membuat kode lebih pendek.", code("script.js", 'for (var i = 1; i <= 5; i++) {\n  console.log(i);\n}', "1\n2\n3\n4\n5")),
        s("Menampilkan Tulisan Lima Kali", "Tulisan yang sama bisa diulang tanpa mengetik berkali-kali.", code("script.js", 'for (var i = 1; i <= 5; i++) {\n  console.log("Saya belajar JS");\n}', "Saya belajar JS\nSaya belajar JS\nSaya belajar JS\nSaya belajar JS\nSaya belajar JS")),
        s("Menghitung Mundur", "Perubahan nilai tidak selalu naik. Bisa juga turun.", code("script.js", 'for (var i = 5; i >= 1; i--) {\n  console.log(i);\n}', "5\n4\n3\n2\n1")),
        s("Nomor Siswa", "Loop bisa membuat daftar nomor siswa.", code("script.js", 'for (var nomor = 1; nomor <= 10; nomor++) {\n  console.log("Siswa " + nomor);\n}', "Siswa 1\nSiswa 2\n...\nSiswa 10")),
        s("Latihan 20 Menit", "Tampilkan nomor absen 1 sampai 20.", task(20, "Melatih for loop.", "Absen 1\nAbsen 2\n...", "for (var absen = 1; absen <= 20; absen++) {\n  // tampilkan di sini\n}", ["Isi console.log.", "Jalankan.", "Ubah menjadi hitung mundur jika sudah berhasil."])),
      ]),
      section("3.8", "Tugas Akhir Day 3", [
        s("Tugas: Program Pemeriksa Nilai", "Waktu 60-75 menit. Nilainya sudah disiapkan, jadi kalian fokus ke if dan loop.", task(75, "Cek setiap nilai, tentukan lulus atau belum, lalu beri kategori.", "Nilai 80: Lulus - Baik", "var daftarNilai = [90, 80, 72, 60];\n\nfor (var i = 0; i < daftarNilai.length; i++) {\n  var nilai = daftarNilai[i];\n  // tentukan status dan kategori\n}", ["Ambil satu nilai dari daftar.", "Cek lulus jika >= 75.", "Buat kategori.", "Tampilkan hasil."], ["Validasi nilai hanya 0-100.", "Tampilkan pesan jika nilai tidak valid."])),
        s("Checklist Tugas Day 3", "Pastikan semua bagian utama sudah berjalan.", cards(["Status lulus muncul", "Kategori nilai muncul", "Semua nilai diproses loop"])),
        s("Pembahasan Day 3", "Logika keputusan dan pengulangan sering dipakai bersama.", code("script.js", 'var daftarNilai = [90, 80, 72];\n\nfor (var i = 0; i < daftarNilai.length; i++) {\n  var nilai = daftarNilai[i];\n  var status = nilai >= 75 ? "Lulus" : "Belum lulus";\n  console.log(nilai + ": " + status);\n}', "90: Lulus\n80: Lulus\n72: Belum lulus")),
        s("Rangkuman Day 3", "Program bisa membandingkan data, membuat keputusan, dan mengulang pekerjaan.", cards(["Perbandingan", "if / else", "for / while"])),
        s("Refleksi Day 3", "Bagian mana yang lebih mudah: percabangan atau pengulangan? Kenapa?", boxes(["Percabangan", "Pengulangan", "Alasan"])),
      ]),
    ]
  },
  {
    id: "day4",
    title: "Day 4",
    subtitle: "Banyak Data dan Kode Rapi",
    intro: "Menyimpan banyak data, membuat function, dan menampilkan hasil di halaman.",
    sections: [
      section("4.1", "Pemanasan Day 4", [
        s("Review Percabangan", "Kalau nilai cukup, tampilkan lulus. Kalau belum cukup, tampilkan belum lulus.", flow(["nilai", "if", "pesan"])),
        s("Review Perulangan", "Loop membantu kita mengulang pekerjaan tanpa mengetik kode yang sama berkali-kali.", boxes(["1", "2", "3", "4", "5"])),
        s("Kuis Output", "", quiz("for (var i = 1; i <= 3; i++) menampilkan...", ["1 2 3", "0 1 2", "1 2 3 4"], 0, ["Benar!", "Belum tepat. Mulainya 1.", "Belum tepat. Berhenti saat i <= 3."])),
        s("Perbaiki Kode", "Loop ini tidak berhenti karena i tidak berubah.", code("script.js", 'var i = 1;\nwhile (i <= 3) {\n  console.log(i);\n  i++;\n}', "1\n2\n3")),
      ]),
      section("4.2", "Bagaimana Menyimpan Banyak Nilai?", [
        s("Terlalu Banyak Variabel", "Kalau nilainya banyak, jangan bikin nilai1, nilai2, nilai3 terus. Kodenya cepat penuh.", cards(["nilai1", "nilai2", "nilai3"])),
        s("Array Menyimpan Banyak Data", "Array itu satu nama yang bisa menyimpan banyak isi.", boxes(["80", "75", "90", "85"])),
        s("Membuat Array", "Array ditulis dengan kurung siku. Isinya dipisahkan koma.", code("script.js", 'var daftarNilai = [80, 75, 90, 85];\nconsole.log(daftarNilai);')),
        s("Nomor Kotak Mulai dari 0", "Di array, nomor kotak pertama adalah 0, bukan 1. Nomor ini sering disebut indeks.", image("assets/images/day4/day4-array-index.svg", "Array nilai dengan indeks mulai dari nol")),
        s("Membaca Data Array", "Gunakan nama array dan nomor kotaknya.", code("script.js", 'var daftarNilai = [80, 75, 90, 85];\nconsole.log(daftarNilai[0]);\nconsole.log(daftarNilai.length);', "80\n4")),
        s("Menambah Data", "push menambahkan data baru ke bagian akhir array.", code("script.js", 'var teman = ["Ayu", "Bima"];\nteman.push("Citra");\nconsole.log(teman);', '["Ayu", "Bima", "Citra"]')),
      ]),
      section("4.3", "Array dan Perulangan", [
        s("Menampilkan Semua Isi Array", "Untuk membaca semua isi array, loop dari nomor kotak 0 sampai data terakhir.", code("script.js", 'var nilai = [80, 75, 90];\nfor (var i = 0; i < nilai.length; i++) {\n  console.log(nilai[i]);\n}', "80\n75\n90")),
        s("Menghitung Total", "Mulai dari total 0. Lalu tambahkan nilai satu per satu.", code("script.js", 'var nilai = [80, 75, 90];\nvar total = 0;\nfor (var i = 0; i < nilai.length; i++) {\n  total = total + nilai[i];\n}\nconsole.log(total);', "245")),
        s("Menghitung Rata-rata Array", "Setelah total ketemu, bagi dengan jumlah data.", code("script.js", 'var rataRata = total / nilai.length;\nconsole.log(rataRata.toFixed(2));', "81.67")),
        s("Mencari Nilai Tertinggi Sederhana", "Anggap nilai pertama paling tinggi. Lalu bandingkan dengan nilai berikutnya.", code("script.js", 'var tertinggi = nilai[0];\nfor (var i = 1; i < nilai.length; i++) {\n  if (nilai[i] > tertinggi) tertinggi = nilai[i];\n}\nconsole.log(tertinggi);', "90")),
        s("Latihan 20 Menit", "Hitung total dan rata-rata dari 5 nilai.", task(20, "Latihan membaca isi array dengan loop.", "Rata-rata: 82", "var nilai = [80, 85, 90, 75, 80];\nvar total = 0;\n// loop di sini", ["Loop semua nilai.", "Tambahkan ke total.", "Bagi total dengan nilai.length."])),
      ]),
      section("4.4", "Membuat Function", [
        s("Kalau Perhitungan Sama Dipakai Berkali-kali?", "Daripada menulis rumus yang sama terus, simpan rumusnya dalam function.", image("assets/images/day4/day4-function-process.svg", "Function menerima input nilai dan menghasilkan rata-rata")),
        s("Membuat Function", "Function itu kumpulan perintah yang diberi nama. Kalau namanya dipanggil, isinya jalan.", code("script.js", 'function sapa() {\n  console.log("Halo siswa RPL");\n}\n\nsapa();', "Halo siswa RPL")),
        s("Parameter: Data yang Masuk", "Parameter itu data yang kita kirim ke function. Contohnya nama yang dikirim ke function sapa.", code("script.js", 'function sapa(nama) {\n  console.log("Halo " + nama);\n}\n\nsapa("Dika");', "Halo Dika")),
        s("return: Hasil yang Keluar", "return artinya function mengirim hasil keluar supaya bisa dipakai lagi.", code("script.js", 'function hitungRataRata(tugas, ujian) {\n  return (tugas + ujian) / 2;\n}\n\nconsole.log(hitungRataRata(80, 90));', "85")),
        s("Latihan 15 Menit", "Buat function hitungTotalBelanja.", task(15, "Latihan data masuk dan hasil keluar dari function.", "15000", "function hitungTotal(harga, jumlah) {\n  // return hasil\n}", ["Terima harga dan jumlah.", "Kembalikan hasil harga * jumlah.", "Tampilkan hasilnya."])),
      ]),
      section("4.5", "Pecah Masalah Besar", [
        s("Masalah Besar Dibagi Kecil", "Kalau tugas terasa besar, pecah dulu. Kerjakan satu bagian kecil sampai jalan.", flow(["Project", "Bagian kecil", "Selesai bertahap"])),
        s("Contoh Pembagian Project", "Aplikasi nilai tidak perlu dibuat sekali jadi. Kita mulai dari bagian kecil.", cards(["Ambil input", "Hitung rata-rata", "Tampilkan data"])),
        s("Alur Data", "Data masuk dari form, dihitung oleh function, lalu hasilnya ditampilkan.", flow(["Form", "Function", "Hasil"])),
        s("Kenapa Ini Membantu?", "Kalau error, kita tidak panik. Cek satu bagian dulu.", boxes(["Input", "Hitung", "Status", "Tampil"])),
      ]),
      section("4.6", "Jangan Mengulang Kode", [
        s("Jangan Mengulang Kode yang Sama", "Kalau kode yang sama muncul berkali-kali, biasanya bisa dirapikan dengan function. Prinsip ini sering disebut DRY.", cards(["Don't", "Repeat", "Yourself"])),
        s("Sebelum Dirapikan", "Kalau rumusnya diulang terus, nanti capek saat harus memperbaiki.", code("script.js", 'var rata1 = (80 + 90) / 2;\nvar rata2 = (75 + 85) / 2;\nvar rata3 = (70 + 80) / 2;')),
        s("Sesudah Dirapikan", "Dengan function, rumusnya cukup ditulis satu kali.", code("script.js", 'function hitungRataRata(tugas, ujian) {\n  return (tugas + ujian) / 2;\n}\n\nvar rata1 = hitungRataRata(80, 90);\nvar rata2 = hitungRataRata(75, 85);')),
        s("Kapan Perlu Function?", "Jika pekerjaan yang sama muncul lagi dan lagi, itu tanda function akan membantu.", boxes(["Hitung rata-rata", "Tentukan status", "Tampilkan baris"])),
      ]),
      section("4.7", "Input dan Output di Halaman Web", [
        s("Dari Console ke Halaman", "Sekarang hasilnya tidak cuma muncul di console. Kita tampilkan langsung di halaman web.", preview()),
        s("Input HTML", "Input dipakai siswa untuk mengetik data.", code("index.html", '<input id="nama" placeholder="Nama siswa">\n<input id="tugas" type="number" placeholder="Nilai tugas">')),
        s("Button", "Button menjalankan aksi saat diklik.", code("index.html", '<button id="hitung">Hitung</button>\n<p id="hasil"></p>')),
        s("Mengambil Nilai Input", "JavaScript bisa mencari input berdasarkan id, lalu membaca isinya.", code("script.js", 'var nama = document.querySelector("#nama").value;\nvar tugas = Number(document.querySelector("#tugas").value);')),
        s("Saat Tombol Diklik", "addEventListener artinya: kalau tombol diklik, jalankan kode ini.", code("script.js", 'document.querySelector("#hitung").addEventListener("click", function () {\n  console.log("Tombol diklik");\n});', "Tombol diklik")),
        s("Menampilkan Hasil", "textContent dipakai untuk mengganti tulisan di halaman. Cukup ingat: ini untuk mengisi teks hasil.", code("script.js", 'document.querySelector("#hasil").textContent = "Rata-rata: 85";')),
        s("Alur Tombol ke Hasil", "Urutannya: klik tombol, ambil isi input, hitung, lalu tampilkan hasil.", flow(["Klik", "Ambil input", "Tampilkan hasil"])),
      ]),
      section("4.8", "Kuis Day 4", [
        s("Kuis: Array", "", quiz("Array cocok untuk...", ["Menyimpan banyak data", "Menghapus browser", "Membuat kabel"], 0, ["Benar!", "Belum tepat.", "Belum tepat."])),
        s("Kuis: Nomor Kotak", "", quiz("Data pertama array punya nomor kotak...", ["0", "1", "10"], 0, ["Benar! Nomor array mulai dari 0.", "Belum tepat.", "Belum tepat."])),
        s("Kuis: Loop Array", "", quiz("Syarat loop array yang umum adalah...", ["i < array.length", "i <= array.length", "i > array.length"], 0, ["Benar!", "Hati-hati, ini bisa melewati nomor kotak terakhir.", "Belum tepat."])),
        s("Kuis: Function", "", quiz("Data yang masuk ke function disebut...", ["Parameter", "Console", "CSS"], 0, ["Benar! Parameter adalah data yang dikirim ke function.", "Belum tepat.", "Belum tepat."])),
        s("Kuis: Hasil Function", "", quiz("return dipakai saat function perlu...", ["Mengirim hasil keluar", "Menghapus function", "Membuka VS Code"], 0, ["Benar!", "Belum tepat.", "Belum tepat."])),
        s("Kuis: Kode Berulang", "", quiz("Function membantu kita...", ["Mengurangi kode berulang", "Memperbanyak file", "Menulis tanpa logika"], 0, ["Benar!", "Belum tepat.", "Belum tepat."])),
      ]),
      section("4.9", "Tugas Persiapan Project", [
        s("Tugas: Menampilkan Data Siswa di Halaman", "Waktu 75-90 menit. Hasil hari ini menjadi dasar project Day 5.", task(90, "Melengkapi JavaScript untuk form nilai siswa.", "Made - Rata-rata 87.5 - Lulus", "function hitungRataRata(tugas, ujian) {\n  return (tugas + ujian) / 2;\n}\n\n// ambil input\n// tentukan status\n// tampilkan hasil", ["Ambil nama, tugas, dan ujian.", "Hitung rata-rata.", "Tentukan status.", "Tampilkan ke halaman."], ["Beri warna berbeda untuk Lulus dan Belum lulus.", "Kosongkan input setelah dihitung."])),
        s("Starter HTML dan CSS", "HTML dan CSS sudah disiapkan. Tugas kalian melengkapi bagian JavaScript.", code("index.html", '<input id="nama">\n<input id="tugas" type="number">\n<input id="ujian" type="number">\n<button id="proses">Proses</button>\n<div id="hasil"></div>')),
        s("Checklist Tugas Day 4", "Tugas selesai jika form bisa dipakai dari awal sampai hasil muncul.", cards(["Input terbaca", "Rata-rata benar", "Status tampil"])),
        s("Pembahasan Day 4", "Pisahkan pekerjaan ke function kecil: hitung rata-rata dan tentukan status.", code("script.js", 'function tentukanStatus(rataRata) {\n  if (rataRata >= 75) return "Lulus";\n  return "Belum lulus";\n}')),
        s("Rangkuman Day 4", "Kita sudah menyimpan banyak data, merapikan kode dengan function, dan mulai mengubah isi halaman web.", cards(["Array", "Function", "Halaman web"])),
        s("Refleksi Day 4", "Tuliskan bagian project yang paling ingin kalian kuasai sebelum Day 5.", boxes(["Form", "Hitung", "Tabel", "Hapus data"])),
      ]),
    ]
  },
  {
    id: "day5",
    title: "Day 5",
    subtitle: "Project Aplikasi Daftar Nilai Siswa",
    intro: "Sebagian besar waktu dipakai untuk membuat project pertama.",
    sections: [
      section("5.1", "Pemanasan", [
        s("Kesiapan Project", "Hari ini semua yang sudah dipelajari digabung: data, if, loop, array, function, dan halaman web.", flow(["Data", "Logika", "Halaman"])),
        s("Kuis: Variabel", "", quiz("Data nama siswa cocok disimpan di...", ["variabel", "aturan CSS", "border"], 0, ["Benar!", "Belum tepat.", "Belum tepat."])),
        s("Kuis: Percabangan", "", quiz("Menentukan lulus atau belum memakai...", ["if", "push", "length"], 0, ["Benar!", "Belum tepat.", "Belum tepat."])),
        s("Kuis: Perulangan", "", quiz("Menampilkan semua siswa di tabel butuh...", ["loop", "satu console.log", "warna CSS saja"], 0, ["Benar!", "Belum cukup.", "Belum tepat."])),
        s("Kuis: Array", "", quiz("Daftar banyak siswa paling cocok disimpan dalam...", ["array", "satu string panjang", "judul halaman"], 0, ["Benar!", "Belum rapi.", "Belum tepat."])),
        s("Kuis: Function", "", quiz("Perhitungan rata-rata sebaiknya dibuat sebagai...", ["function", "nama file", "komentar"], 0, ["Benar!", "Belum tepat.", "Belum tepat."])),
      ]),
      section("5.2", "Tantangan Hari Ini", [
        s("Saatnya Membuat Aplikasi Pertama!", "Tenang, tidak mulai dari kosong. HTML, CSS, form, tabel, tombol, dan sebagian JavaScript sudah disiapkan.", image("assets/images/day5/day5-project-preview.svg", "Preview aplikasi daftar nilai siswa")),
        s("Preview Hasil Akhir", "Nanti aplikasinya bisa menerima nama siswa, menghitung nilai, memberi status, lalu menampilkan tabel.", preview()),
      ]),
      section("5.3", "Mengenal Project", [
        s("Project: Aplikasi Daftar Nilai Siswa", "Bayangkan ini catatan nilai sederhana. Masukkan nama dan nilai, lalu aplikasi menghitung hasilnya.", cards(["Input nama", "Nilai tugas", "Nilai ujian"])),
        s("Fitur Utama", "Yang penting bisa tambah siswa, lihat daftar, hapus data, dan hitung jumlah siswa.", cards(["Tambah siswa", "Hapus data", "Jumlah siswa"])),
        s("Data yang Diproses", "Untuk setiap siswa, kita simpan lima data ini.", boxes(["Nama", "Tugas", "Ujian", "Rata-rata", "Status"])),
      ]),
      section("5.4", "Membagi Project Menjadi Bagian Kecil", [
        s("Pecah Project Jadi Kecil", "Jangan kerjakan semuanya sekaligus. Selesaikan satu bagian, tes, baru lanjut.", flow(["Input", "Hitung", "Tabel", "Uji"])),
        s("Peta Pekerjaan 1-7", "Urutannya: ambil input, hitung, beri status, simpan, tampilkan, hapus, lalu tes.", cards(["1-3: input dan hitung", "4-6: simpan dan tampil", "7: tes aplikasi"])),
      ]),
      section("5.5", "Waktu Mengerjakan", [
        s("Mode Pengerjaan 180 Menit", "Pakai checklist ini saat praktik. Kalau macet, buka petunjuk sedikit dulu, jangan langsung solusi penuh.", { kind: "work-mode" }),
        s("Tahap 1: Membaca Input", "Ambil nama, nilai tugas, dan nilai ujian dari form.", code("script.js", 'var nama = document.querySelector("#nama").value;\nvar tugas = Number(document.querySelector("#tugas").value);\nvar ujian = Number(document.querySelector("#ujian").value);')),
        s("Tahap 2: Menghitung Rata-rata", "Buat function agar rumus rata-rata tidak ditulis berulang.", code("script.js", 'function hitungRataRata(tugas, ujian) {\n  return (tugas + ujian) / 2;\n}')),
        s("Tahap 3: Menentukan Status", "Gunakan if untuk menentukan Lulus atau Belum lulus.", code("script.js", 'function tentukanStatus(rataRata) {\n  if (rataRata >= 75) return "Lulus";\n  return "Belum lulus";\n}')),
        s("Tahap 4: Menyimpan Data", "Simpan data satu siswa dalam satu paket, lalu masukkan ke daftar siswa.", code("script.js", 'var daftarSiswa = [];\n\ndaftarSiswa.push({ nama, tugas, ujian, rataRata, status });')),
        s("Tahap 5-7: Tabel, Hapus, Tes", "Tampilkan daftar dengan loop, hapus pakai nomor baris, lalu tes dengan data normal dan data aneh.", code("script.js", 'function hapusSiswa(index) {\n  daftarSiswa.splice(index, 1);\n  tampilkanTabel();\n}')),
      ]),
      section("5.6", "Pengujian", [
        s("Checklist Pengujian", "Project belum selesai kalau belum dites. Coba masukkan data normal, kosong, dan nilai yang salah.", task(45, "Pastikan bagian pentingnya benar-benar jalan.", "Nama masuk, rata-rata benar, tabel muncul.", "", ["Nama bisa diisi.", "Nilai bisa dihitung.", "Status sudah benar.", "Data muncul di tabel.", "Bisa tambah beberapa siswa.", "Tombol hapus bekerja.", "Input kosong ditolak.", "Nilai di luar 0-100 ditolak."])),
        s("Contoh Cek Input", "Jangan izinkan nama kosong atau nilai di luar 0-100 masuk ke tabel.", code("script.js", 'if (nama === "" || Number.isNaN(tugas) || Number.isNaN(ujian) || tugas < 0 || tugas > 100 || ujian < 0 || ujian > 100) {\n  alert("Periksa input lagi");\n  return;\n}')),
        s("Uji Data Batas", "Nilai 75 harus Lulus. Nilai 74 harus Belum lulus.", boxes(["75 → Lulus", "74 → Belum lulus", "100 → Lulus"])),
      ]),
      section("5.7", "Presentasi dan Refleksi", [
        s("Refleksi Project", "Bagian mana yang berhasil dibuat? Bagian mana yang paling sulit?", boxes(["Berhasil", "Sulit", "Solusi"])),
        s("Rangkuman Day 5", "Hari ini kalian sudah membuat aplikasi kecil: ada form, hitung nilai, tampilkan tabel, dan hapus data.", cards(["Form", "Array", "Function"])),
        s("Penutup", "Kalau hari ini masih banyak error, itu normal. Yang penting kalian tahu cara mencoba, membaca error, lalu memperbaiki.", boxes(["Coba", "Error", "Perbaiki", "Ulangi"])),
      ]),
    ]
  }
];

function section(id, title, slides) {
  return { id, title, slides };
}

function s(title, body, visual) {
  return { title, body, visual };
}

var app = document.querySelector("#app");
var crumbs = document.querySelector("#crumbs");
var current = { day: null, section: null, slide: null };

function allSlides(day) {
  return day.sections.flatMap((section, sectionIndex) =>
    section.slides.map((slide, slideIndex) => ({ ...slide, section, sectionIndex, slideIndex }))
  );
}

function showHome() {
  stopTimer();
  current = { day: null, section: null, slide: null };
  crumbs.textContent = "Daftar Materi";
  app.innerHTML = `
    <section class="home">
      <div class="hero">
        <div>
          <div class="eyebrow">Presentasi Interaktif</div>
          <h1>${escapeHtml("JavaScript untuk Kelas X RPL")}</h1>
          <p class="muted">${escapeHtml("Materi Day 2 sampai Day 5. Ringan, visual, banyak praktik, dan mengarah ke project aplikasi daftar nilai siswa.")}</p>
        </div>
        <div class="visual dark" aria-label="Ilustrasi input proses output">
          ${renderVisual(flow(["Input", "Proses", "Output"]))}
        </div>
      </div>
      <div class="grid">
        ${days.map((day, i) => `
          <button class="day-card" data-day="${i}">
            <strong>${escapeHtml(day.title)}</strong>
            <h3>${escapeHtml(day.subtitle)}</h3>
            <p>${escapeHtml(day.intro)}</p>
            <span class="pill">${allSlides(day).length} slide</span>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function showDay(dayIndex) {
  stopTimer();
  var day = days[dayIndex];
  current = { day: dayIndex, section: null, slide: null };
  crumbs.textContent = `${day.title} → Daftar Section`;
  app.innerHTML = `
    <section class="day-index">
      <div class="hero">
        <div>
          <div class="eyebrow">${escapeHtml(day.title)}</div>
          <h1>${escapeHtml(day.subtitle)}</h1>
          <p class="muted">${escapeHtml(day.intro)}</p>
        </div>
        <div class="visual" aria-label="Preview materi ${day.title}">
          ${renderVisual(day.id === "day5" ? preview() : flow(["Masalah", "Kode", "Hasil"]))}
        </div>
      </div>
      <div class="grid">
        ${day.sections.map((section, i) => `
          <button class="section-card" data-section="${i}">
            <small>${escapeHtml(section.id)}</small>
            <h3>${escapeHtml(section.title)}</h3>
            <p>${section.slides.length} slide</p>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function showSlide(dayIndex, sectionIndex, slideIndex) {
  stopTimer();
  var day = days[dayIndex];
  var section = day.sections[sectionIndex];
  var slide = section.slides[slideIndex];
  var flat = allSlides(day);
  var absoluteIndex = flat.findIndex(item => item.sectionIndex === sectionIndex && item.slideIndex === slideIndex);
  current = { day: dayIndex, section: sectionIndex, slide: slideIndex };
  crumbs.textContent = `${day.title} → ${section.title}`;
  var progress = Math.round(((absoluteIndex + 1) / flat.length) * 100);
  app.innerHTML = `
    <section class="slide-shell">
      <div class="slide-meta">
        <span>${escapeHtml(day.title)} → ${escapeHtml(section.title)}</span>
        <span>Slide ${absoluteIndex + 1}/${flat.length}</span>
      </div>
      <div class="progress-wrap"><div class="progress-bar" style="width:${progress}%"></div></div>
      <article class="slide">
        ${renderSlide(slide)}
      </article>
      <nav class="nav">
        <button data-back-day>Indeks</button>
        <div>
          <button data-prev ${absoluteIndex === 0 ? "disabled" : ""}>Sebelumnya</button>
          <button class="primary" data-next ${absoluteIndex === flat.length - 1 ? "disabled" : ""}>Berikutnya</button>
        </div>
      </nav>
    </section>
  `;
}

function renderSlide(slide) {
  var visual = slide.visual ? renderVisual(slide.visual) : "";
  if (slide.visual?.kind === "quiz") {
    return `<div class="quiz"><h1>${escapeHtml(slide.title)}</h1>${visual}</div>`;
  }
  if (slide.visual?.kind === "task" || slide.visual?.kind === "work-mode") {
    return `
      <div class="task-slide">
        <div>
          <h1>${escapeHtml(slide.title)}</h1>
          ${slide.body ? `<p>${escapeHtml(slide.body)}</p>` : ""}
        </div>
        ${visual}
      </div>
    `;
  }
  if (slide.title.includes("Refleksi") || slide.title.includes("Penutup")) {
    return `<div class="big-question"><h1>${escapeHtml(slide.title)}</h1><p>${escapeHtml(slide.body)}</p>${visual}</div>`;
  }
  return `
    <div class="two-col">
      <div>
        <h1>${escapeHtml(slide.title)}</h1>
        ${slide.body ? `<p>${escapeHtml(slide.body)}</p>` : ""}
      </div>
      <div class="visual" aria-label="${escapeHtml(slide.title)}">
        ${visual}
      </div>
    </div>
  `;
}

function renderVisual(visual) {
  if (!visual) return "";
  if (visual.kind === "code") {
    return `
      <div class="code-card">
        <div class="code-head"><span>${escapeHtml(visual.file)}</span><button class="copy" data-copy="${encodeURIComponent(visual.text)}">Salin Kode</button></div>
        <pre><code>${highlightCode(visual.text)}</code></pre>
      </div>
      ${visual.output ? `<div class="console">${escapeHtml(visual.output).replaceAll("\n", "<br>")}</div>` : ""}
    `;
  }
  if (visual.kind === "image") {
    return `<img class="slide-image" src="${escapeHtml(visual.src)}" alt="${escapeHtml(visual.alt)}">`;
  }
  if (visual.kind === "cards") {
    return `<div class="cards">${visual.items.map(item => {
      var title = item.includes(":") ? item.slice(0, item.indexOf(":")) : item;
      var body = item.includes(":") ? item.slice(item.indexOf(":") + 1).trim() : "";
      return `<div class="mini-card"><strong>${escapeHtml(title)}</strong><p>${escapeHtml(body)}</p></div>`;
    }).join("")}</div>`;
  }
  if (visual.kind === "flow") {
    return `<div class="flow">${visual.items.map((item, i) => `<div class="node">${escapeHtml(item)}</div>${i < visual.items.length - 1 ? '<div class="arrow">→</div>' : ""}`).join("")}</div>`;
  }
  if (visual.kind === "boxes") {
    return `<div class="box-row">${visual.items.map(item => {
      const [small, big] = item.includes(":") ? item.split(":") : ["", item];
      return `<div class="data-box">${small ? `<small>${escapeHtml(small)}</small>` : ""}${escapeHtml(big.trim())}</div>`;
    }).join("")}</div>`;
  }
  if (visual.kind === "console") {
    return `<div class="console">${visual.lines.map(escapeHtml).join("<br>")}</div>`;
  }
  if (visual.kind === "links") {
    return `<div><p>Tidak perlu instalasi. Pilih salah satu tempat mencoba.</p><div class="links"><a class="link-btn" href="https://runjs.app/play" target="_blank" rel="noreferrer">Coba di RunJS</a><a class="link-btn" href="https://jsfiddle.net/" target="_blank" rel="noreferrer">Coba di JSFiddle</a></div></div>`;
  }
  if (visual.kind === "quiz") {
    return `
      <h2>${escapeHtml(visual.question)}</h2>
      <div class="choices">
        ${visual.choices.map((choice, i) => `<button class="choice" data-answer="${i}" data-correct="${visual.answer}" data-feedback="${escapeHtml(visual.feedback[i])}">${escapeHtml(choice)}</button>`).join("")}
      </div>
      <div class="feedback" aria-live="polite"></div>
    `;
  }
  if (visual.kind === "task") {
    return `
      <div class="task-panel">
        <div class="task-main">
          <div class="task-time">Waktu: ${visual.minutes} menit</div>
          <p>${escapeHtml(visual.goal)}</p>
          ${visual.example ? `<div class="task-output"><strong>Contoh hasil</strong><pre>${escapeHtml(visual.example)}</pre></div>` : ""}
          ${visual.starter ? `
            <div class="task-code">
              <div class="code-head"><span>starter</span><button class="copy" data-copy="${encodeURIComponent(visual.starter)}">Salin Kode</button></div>
              <pre><code>${highlightCode(visual.starter)}</code></pre>
            </div>
          ` : ""}
        </div>
        <div class="task-steps">
          <h3>Langkah dan Checklist</h3>
          <div class="checklist">${visual.steps.map(step => `<label><input type="checkbox"> ${escapeHtml(step)}</label>`).join("")}</div>
          <div class="hint-actions">
            <button class="reveal" data-hint>Petunjuk Bertahap</button>
            <button class="reveal" data-hint>Jawaban Tersembunyi</button>
          </div>
          <div class="hint">Kerjakan satu baris dulu. Isi data yang masih kosong, jalankan, lalu lihat hasilnya. Kalau error, baca baris yang disebut di console.</div>
          <div class="hint">Bandingkan dengan contoh guru setelah mencoba sendiri. Fokus cek nama variabel, tanda petik, dan kurung.</div>
          ${visual.extra.length ? `<h3>Tantangan Tambahan</h3><ul>${visual.extra.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}
        </div>
      </div>
    `;
  }
  if (visual.kind === "preview") {
    return `
      <div class="app-preview">
        <h3>Daftar Nilai Siswa</h3>
        <input value="Made" aria-label="Nama">
        <input value="85" aria-label="Nilai tugas">
        <input value="90" aria-label="Nilai ujian">
        <button class="primary">Tambah Siswa</button>
        <table>
          <thead><tr><th>Nama</th><th>Rata-rata</th><th>Status</th></tr></thead>
          <tbody><tr><td>Made</td><td>87.5</td><td><span class="tag">Lulus</span></td></tr></tbody>
        </table>
      </div>
    `;
  }
  if (visual.kind === "mock-vscode") {
    return `<div class="code-card" style="width:100%"><div class="code-head"><span>Explorer</span><span>index.html</span></div><pre><code>ppt-js/\n  index.html\n  script.js\n\n&lt;h1&gt;Belajar JavaScript&lt;/h1&gt;</code></pre></div>`;
  }
  if (visual.kind === "table") {
    return `<div class="app-preview"><table><thead><tr><th>Nama</th><th>Tugas</th><th>Ujian</th><th>Rata-rata</th><th>Status</th></tr></thead><tbody><tr><td>Made</td><td>85</td><td>90</td><td>87.5</td><td><span class="tag">Lulus</span></td></tr><tr><td>Sari</td><td>70</td><td>74</td><td>72</td><td>Belum</td></tr></tbody></table></div>`;
  }
  if (visual.kind === "work-mode") {
    return `
      <div>
        <div class="timer" data-timer="10800">180:00</div>
        <div class="checklist">
          ${["Input", "Rata-rata", "Status", "Simpan", "Tabel", "Hapus", "Uji"].map(item => `<label><input type="checkbox"> ${item}</label>`).join("")}
        </div>
        <button class="primary" data-start-timer>Mulai Timer</button>
        <button class="reveal" data-hint>Bantuan</button>
        <div class="hint">Kerjakan tahap 1 sampai 7. Kalau macet, cek console. Biasanya masalahnya ada di id HTML, nama variabel, atau tanda kurung.</div>
      </div>
    `;
  }
  return "";
}

function move(delta) {
  if (current.day === null || current.slide === null) return;
  var day = days[current.day];
  var flat = allSlides(day);
  var index = flat.findIndex(item => item.sectionIndex === current.section && item.slideIndex === current.slide);
  var next = flat[index + delta];
  if (next) showSlide(current.day, next.sectionIndex, next.slideIndex);
}

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
}

function highlightCode(text) {
  return String(text).split("\n").map(line => {
    var commentIndex = line.indexOf("//");
    if (commentIndex === -1) return highlightCodePart(line);
    return highlightCodePart(line.slice(0, commentIndex)) + `<span class="tok-comment">${escapeHtml(line.slice(commentIndex))}</span>`;
  }).join("\n");
}

function highlightCodePart(text) {
  return escapeHtml(text)
    .replace(/(&quot;.*?&quot;|&#039;.*?&#039;)/g, '<span class="tok-string">$1</span>')
    .replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="tok-number">$1</span>')
    .replace(/\b(function|var|let|const|if|else|return|for|while|true|false|Number|document|console|alert)\b/g, '<span class="tok-keyword">$1</span>');
}

app.addEventListener("click", event => {
  var target = event.target.closest("button, a");
  if (!target) return;
  if (target.dataset.day) showDay(Number(target.dataset.day));
  if (target.dataset.section) showSlide(current.day, Number(target.dataset.section), 0);
  if (target.dataset.prev !== undefined) move(-1);
  if (target.dataset.next !== undefined) move(1);
  if (target.dataset.backDay !== undefined) showDay(current.day);
  if (target.dataset.copy) navigator.clipboard?.writeText(decodeURIComponent(target.dataset.copy));
  if (target.dataset.hint !== undefined) {
    var box = target.closest(".task-steps, [data-work-mode]");
    var buttons = [...box.querySelectorAll("[data-hint]")];
    var hints = [...box.querySelectorAll(".hint")];
    hints[buttons.indexOf(target)]?.classList.toggle("show");
  }
  if (target.dataset.answer !== undefined) {
    var quizBox = target.closest(".quiz");
    quizBox.querySelectorAll(".choice").forEach(btn => btn.classList.remove("correct", "wrong"));
    var correct = target.dataset.answer === target.dataset.correct;
    target.classList.add(correct ? "correct" : "wrong");
    quizBox.querySelector(".feedback").textContent = target.dataset.feedback;
  }
  if (target.dataset.startTimer !== undefined) startTimer();
});

document.querySelector("[data-home]").addEventListener("click", showHome);
document.querySelector("#fullBtn").addEventListener("click", () => document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen());
document.querySelector("#helpBtn").addEventListener("click", () => document.querySelector("#helpDialog").showModal());
document.querySelector("[data-close-help]").addEventListener("click", () => document.querySelector("#helpDialog").close());

document.addEventListener("keydown", event => {
  if (event.key === "ArrowRight") move(1);
  if (event.key === "ArrowLeft") move(-1);
  if (event.key === "Escape" && current.day !== null) showDay(current.day);
  if (event.key.toLowerCase() === "f") document.querySelector("#fullBtn").click();
});

var timerId = null;
function stopTimer() {
  if (!timerId) return;
  clearInterval(timerId);
  timerId = null;
}

function startTimer() {
  var el = document.querySelector("[data-timer]");
  if (!el || timerId) return;
  var seconds = Number(el.dataset.timer);
  timerId = setInterval(() => {
    seconds--;
    var m = String(Math.floor(seconds / 60)).padStart(2, "0");
    var s = String(seconds % 60).padStart(2, "0");
    el.textContent = `${m}:${s}`;
    if (seconds <= 0) stopTimer();
  }, 1000);
}

showHome();
