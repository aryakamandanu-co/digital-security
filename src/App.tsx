import React, { useState, useEffect, useRef } from 'react';
import {
  Shield, ShieldCheck, ShieldAlert, Lock, Key, Eye, EyeOff, Wifi,
  Smartphone, UserCheck, MessageSquareWarning, Footprints, CreditCard,
  BookOpen, Video, Gamepad2, Trophy, User, Home, Play, Pause, CheckCircle2,
  XCircle, ArrowRight, ArrowLeft, RotateCcw, Award, Zap, Sparkles, Search,
  ChevronRight, ChevronDown, AlertTriangle, Check, Info, Terminal, Volume2,
  VolumeX, Flame, Target, Layers, BarChart3, Clock, Star, RefreshCw, Menu, X,
  Headphones, ExternalLink, Film, Tv
} from 'lucide-react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell
} from 'recharts';

// ============================================================================
// 1. DATA: 11 LEARNING MODULES & CURATED EDUCATIONAL VIDEOS
// ============================================================================
const LEARNING_MODULES = [
  {
    id: 1,
    title: 'Pengenalan Digital Security',
    icon: Shield,
    color: 'from-cyan-500 to-blue-600',
    duration: '6 Menit',
    summary: 'Memahami konsep dasar keamanan digital, aset informasi, dan mengapa pelajar SMP/SMA wajib waspada di dunia siber.',
    sections: [
      {
        heading: 'Apa Itu Digital Security?',
        body: 'Digital Security (Keamanan Digital) adalah serangkaian langkah, kebiasaan, dan teknologi untuk melindungi perangkat, akun, serta data pribadi kita dari akses tidak sah, pencurian, maupun perusakan di internet.'
      },
      {
        heading: 'Mengapa Pelajar Menjadi Target?',
        body: 'Remaja sangat aktif menggunakan media sosial, game online, dan dompet digital. Pelaku kejahatan siber sering menargetkan pelajar dengan iming-iming voucher game gratis, giveaway palsu, atau tautan mencurigakan.'
      }
    ],
    keyTakeaways: [
      'Perlakukan data pribadi (password, OTP, foto KTP/kartu pelajar) seperti kunci rumahmu sendiri',
      'Selalu terapkan prinsip "Berpikir Sebelum Klik" pada setiap tautan atau pesan masuk',
      'Keamanan digital dimulai dari kebiasaan kecil sehari-hari, bukan hanya perangkat lunak mahal'
    ]
  },
  {
    id: 2,
    title: 'Password Security',
    icon: Key,
    color: 'from-blue-500 to-indigo-600',
    duration: '7 Menit',
    summary: 'Strategi membuat kata sandi anti-bobol menggunakan metode Passphrase dan cara aman mengelolanya.',
    sections: [
      {
        heading: 'Bahaya Password Lemah & Berulang',
        body: 'Menggunakan tanggal lahir, nama panggilan, atau "12345678" dapat dibobol program otomatis dalam hitungan detik. Memakai satu password untuk semua akun juga berisiko efek domino jika satu situs bocor.'
      },
      {
        heading: 'Formula Passphrase Kuat',
        body: 'Gabungkan 3–4 kata acak yang mudah diingat namun sulit ditebak dengan huruf kapital, angka, dan simbol. Contoh: "KucingBiru#MakanBakso2026!". Minimal 12 karakter.'
      }
    ],
    keyTakeaways: [
      'Gunakan minimal 12 karakter dengan kombinasi huruf besar, kecil, angka, dan simbol',
      'Jangan pernah menggunakan password yang sama untuk email utama dan akun media sosial/game',
      'Manfaatkan Password Manager bawaan browser atau aplikasi terpercaya'
    ]
  },
  {
    id: 3,
    title: 'Phishing dan Social Engineering',
    icon: ShieldAlert,
    color: 'from-rose-500 to-orange-600',
    duration: '8 Menit',
    summary: 'Mengenali teknik manipulasi psikologis dan tautan jebakan yang menyamar sebagai pihak resmi.',
    sections: [
      {
        heading: 'Apa Itu Phishing & Social Engineering?',
        body: 'Social Engineering adalah seni memanipulasi psikologis korban (panik, takut, atau tergiur hadiah) agar mau menyerahkan informasi rahasia. Phishing adalah bentuknya melalui pesan WhatsApp, email, atau situs login palsu.'
      },
      {
        heading: 'Tanda-Tanda Pesan Phishing',
        body: '1) Mendesak ("Akun diblokir dalam 1 jam!"), 2) Alamat domain aneh (misal: instagrarn-help.xyz bukan instagram.com), 3) Meminta kode OTP atau password, 4) File lampiran berakhiran .APK.'
      }
    ],
    keyTakeaways: [
      'Periksa huruf demi huruf alamat website sebelum mengetikkan username dan password',
      'Jangan pernah mengunduh file .APK yang dikirim lewat chat WhatsApp dari nomor tak dikenal',
      'Instansi resmi tidak pernah meminta PIN atau kode OTP melalui pesan singkat'
    ]
  },
  {
    id: 4,
    title: 'Malware dan Virus Komputer',
    icon: Terminal,
    color: 'from-purple-500 to-pink-600',
    duration: '7 Menit',
    summary: 'Mengenal jenis perangkat lunak berbahaya seperti Trojan, Ransomware, Spyware, serta cara mencegah infeksinya.',
    sections: [
      {
        heading: 'Jenis-Jenis Malware Umum',
        body: 'Trojan menyamar sebagai aplikasi/game bajakan (MOD APK). Spyware diam-diam merekam ketikan dan mencuri password. Ransomware mengunci seluruh file di laptop dan meminta uang tebusan.'
      },
      {
        heading: 'Jalur Masuk Malware',
        body: 'Situs download game bajakan (crack), ekstensi browser tidak resmi, iklan pop-up palsu bertuliskan "HP Anda Terkena Virus!", serta flashdisk yang terinfeksi.'
      }
    ],
    keyTakeaways: [
      'Unduh aplikasi hanya dari Google Play Store, App Store, atau situs resmi pengembang',
      'Hindari memasang MOD APK atau software bajakan yang sering disisipi Spyware',
      'Selalu perbarui sistem operasi (OS) dan aktifkan Windows Defender / antivirus tepercaya'
    ]
  },
  {
    id: 5,
    title: 'Keamanan Media Sosial',
    icon: UserCheck,
    color: 'from-sky-500 to-cyan-600',
    duration: '6 Menit',
    summary: 'Mengatur privasi akun Instagram, TikTok, dan WhatsApp agar terhindar dari peretasan dan doxxing.',
    sections: [
      {
        heading: 'Risiko Oversharing di Media Sosial',
        body: 'Mengunggah foto tiket konser dengan barcode, kartu pelajar, lokasi rumah secara real-time, atau jadwal harian memudahkan pelaku kejahatan melacak dan meniru identitasmu.'
      },
      {
        heading: 'Pengaturan Keamanan Wajib',
        body: 'Aktifkan akun privat bila perlu, periksa menu "Perangkat yang Login" (Login Activity) secara berkala, dan matikan fitur "Tampilkan Lokasi" pada unggahan publik.'
      }
    ],
    keyTakeaways: [
      'Hindari membagikan informasi sensitif seperti alamat rumah, nomor HP pribadi, dan jadwal rutin',
      'Cek secara berkala daftar perangkat yang terhubung ke akun Instagram, TikTok, dan WhatsApp',
      'Waspadai DM dari akun yang mengaku teman namun tiba-tiba meminjam uang'
    ]
  },
  {
    id: 6,
    title: 'Privasi dan Perlindungan Data Pribadi',
    icon: EyeOff,
    color: 'from-emerald-500 to-teal-600',
    duration: '7 Menit',
    summary: 'Memahami hak atas data pribadi, izin aplikasi (App Permissions), dan perlindungan sesuai UU PDP.',
    sections: [
      {
        heading: 'Data Pribadi Spesifik & Umum',
        body: 'Data pribadi mencakup nama lengkap, NIK, tanggal lahir, alamat, nomor telepon, hingga data biometrik (wajah & sidik jari). Kebocoran data ini dapat disalahgunakan untuk pinjaman online ilegal.'
      },
      {
        heading: 'Audit Izin Aplikasi di Smartphone',
        body: 'Jika aplikasi editor foto atau kalkulator meminta izin akses Kontak, SMS, dan Lokasi secara terus-menerus, segera tolak izin tersebut karena tidak relevan dengan fungsinya.'
      }
    ],
    keyTakeaways: [
      'Berikan izin akses (Kamera, Mikrofon, Lokasi, Kontak) hanya saat aplikasi digunakan dan memang relevan',
      'Jangan mengunggah foto kartu identitas (KTP, Kartu Pelajar, KK) ke internet atau grup publik',
      'Gunakan email sekunder untuk mendaftar di situs atau aplikasi yang kurang dikenal'
    ]
  },
  {
    id: 7,
    title: 'Keamanan Jaringan dan Wi-Fi',
    icon: Wifi,
    color: 'from-amber-500 to-orange-600',
    duration: '6 Menit',
    summary: 'Waspada bahaya Wi-Fi publik gratis tanpa sandi dan serangan penyadapan data (Man-in-the-Middle).',
    sections: [
      {
        heading: 'Bahaya Wi-Fi Publik Gratis',
        body: 'Wi-Fi terbuka di kafe, mal, atau taman tanpa enkripsi memungkinkan peretas di jaringan yang sama mengintip lalu lintas data yang tidak terenkripsi atau membuat hotspot palsu (Evil Twin).'
      },
      {
        heading: 'Cara Aman Menggunakan Wi-Fi Umum',
        body: 'Matikan fitur "Auto-Connect Wi-Fi", pastikan situs yang dibuka menggunakan protokol HTTPS (ikon gembok), dan hindari membuka mobile banking saat memakai Wi-Fi publik.'
      }
    ],
    keyTakeaways: [
      'Gunakan paket data seluler pribadi saat melakukan transaksi keuangan atau login akun penting',
      'Pastikan browser menampilkan ikon gembok (HTTPS) sebelum memasukkan data apa pun',
      'Matikan fitur koneksi otomatis ke jaringan Wi-Fi terbuka di pengaturan ponsel'
    ]
  },
  {
    id: 8,
    title: 'Two-Factor Authentication (2FA)',
    icon: Smartphone,
    color: 'from-indigo-500 to-purple-600',
    duration: '5 Menit',
    summary: 'Menambahkan lapisan kunci kedua agar akun tetap aman meskipun password berhasil diketahui orang lain.',
    sections: [
      {
        heading: 'Bagaimana 2FA Bekerja?',
        body: '2FA menggabungkan dua bukti identitas: sesuatu yang kamu ketahui (Password) dan sesuatu yang kamu miliki (kode OTP di ponsel atau aplikasi Authenticator). Tanpa kode kedua, peretas tidak bisa masuk.'
      },
      {
        heading: 'Jenis 2FA Terbaik',
        body: 'Aplikasi Authenticator (Google Authenticator / Microsoft Authenticator) jauh lebih aman dibanding OTP lewat SMS karena tidak rentan terhadap penyadapan SIM Swap.'
      }
    ],
    keyTakeaways: [
      'Aktifkan 2FA pada akun Email utama, WhatsApp (PIN 6 digit), Instagram, dan akun game',
      'Gunakan aplikasi Authenticator untuk keamanan yang lebih kuat daripada SMS OTP',
      'Simpan kode cadangan (Backup Codes) di tempat aman yang terpisah dari ponsel'
    ]
  },
  {
    id: 9,
    title: 'Cyberbullying dan Etika Digital',
    icon: MessageSquareWarning,
    color: 'from-pink-500 to-rose-600',
    duration: '6 Menit',
    summary: 'Membangun empati digital, melawan perundungan siber, dan memahami konsekuensi hukum di ruang digital.',
    sections: [
      {
        heading: 'Bentuk-Bentuk Cyberbullying',
        body: 'Mengejek fisik di kolom komentar, menyebarkan rumor, mengucilkan teman dari grup, hingga menyebarkan foto/video tanpa izin (doxxing/non-consensual sharing).'
      },
      {
        heading: 'Langkah Menghadapi Cyberbullying',
        body: 'Jangan terpancing membalas dengan emosi. Ambil tangkapan layar (screenshot) sebagai bukti, blokir dan laporkan akun pelaku, lalu ceritakan kepada orang tua atau guru BK.'
      }
    ],
    keyTakeaways: [
      'Terapkan aturan emas: jangan mengetik sesuatu yang tidak berani kamu ucapkan langsung secara tatap muka',
      'Simpan bukti screenshot jika mengalami atau menyaksikan perundungan siber',
      'Gunakan fitur Block dan Report pada platform media sosial untuk memutus interaksi toksik'
    ]
  },
  {
    id: 10,
    title: 'Digital Footprint',
    icon: Footprints,
    color: 'from-teal-500 to-emerald-600',
    duration: '6 Menit',
    summary: 'Memahami jejak digital aktif maupun pasif yang terekam permanen dan dampaknya bagi masa depan.',
    sections: [
      {
        heading: 'Apa Itu Jejak Digital?',
        body: 'Setiap foto yang diunggah, komentar yang ditulis, video yang disukai, hingga riwayat pencarian membentuk rekam jejak digital yang sulit dihapus sepenuhnya meski postingan sudah dihapus.'
      },
      {
        heading: 'Dampak bagi Beasiswa & Karier',
        body: 'Banyak universitas dan perusahaan kini meninjau profil media sosial kandidat. Jejak digital positif (karya, prestasi, diskusi santun) justru menjadi nilai tambah besar.'
      }
    ],
    keyTakeaways: [
      'Ingat bahwa internet memiliki "ingatan permanen" lewat tangkapan layar dan arsip',
      'Bangun jejak digital positif dengan membagikan karya, hobi bermanfaat, dan komentar santun',
      'Lakukan pencarian namamu sendiri di mesin pencari secara berkala untuk memantau privasi'
    ]
  },
  {
    id: 11,
    title: 'Keamanan Transaksi Online',
    icon: CreditCard,
    color: 'from-violet-500 to-blue-600',
    duration: '7 Menit',
    summary: 'Tips aman berbelanja di e-commerce, memakai e-wallet, dan memeriksa keaslian pembayaran QRIS.',
    sections: [
      {
        heading: 'Modus Penipuan Transaksi Online',
        body: 'Waspadai penjual yang mengajak transaksi di luar aplikasi resmi dengan harga terlalu murah, bukti transfer editan, maupun penipuan refund yang meminta kode OTP.'
      },
      {
        heading: 'Keamanan QRIS & E-Wallet',
        body: 'Saat memindai QRIS, selalu pastikan nama merchant yang muncul di layar sesuai dengan nama toko. Jangan pernah memindai kode QR yang dikirim orang asing untuk "menerima hadiah".'
      }
    ],
    keyTakeaways: [
      'Gunakan kartu kredit virtual atau e-wallet dengan saldo terbatas untuk belanja online',
      'Periksa nama penerima pada layar konfirmasi QRIS sebelum memasukkan PIN',
      'Jangan pernah membagikan kode OTP atau CVV kartu kepada siapa pun'
    ]
  }
];

const EDUCATIONAL_VIDEOS = [
  {
    id: 101,
    moduleId: 1,
    title: 'Apa Itu Keamanan Siber (Cyber Security)? Pengenalan Dasar untuk Pemula',
    description: 'Penjelasan ringan dan mudah dipahami mengenai konsep dasar keamanan digital, ancaman di dunia maya, dan mengapa kita harus melindungi diri saat berinternet.',
    channel: 'Literasi Digital Kominfo',
    youtubeId: 'inWWhr5tnEA',
    youtubeUrl: 'https://www.youtube.com/watch?v=inWWhr5tnEA',
    duration: '07:24',
    topicCategory: 'Pengenalan Digital Security'
  },
  {
    id: 102,
    moduleId: 2,
    title: 'Cara Membuat Password yang Kuat & Susah Dibobol Hacker',
    description: 'Pelajari trik membuat kombinasi kata sandi (passphrase) yang panjang, unik, mudah diingat, serta manfaat menggunakan Password Manager.',
    channel: 'Edukasi Keamanan Siber ID',
    youtubeId: '3NjQ9b3pgIg',
    youtubeUrl: 'https://www.youtube.com/watch?v=3NjQ9b3pgIg',
    duration: '06:15',
    topicCategory: 'Password Security'
  },
  {
    id: 103,
    moduleId: 3,
    title: 'Mengenal Phishing & Social Engineering: Modus Penipuan Link Palsu',
    description: 'Kenali ciri-ciri link phishing di WhatsApp dan email, teknik manipulasi psikologis (Social Engineering), dan cara mengecek keaslian alamat website.',
    channel: 'Siberkreasi Edukasi',
    youtubeId: 'XBkzBjfDOYs',
    youtubeUrl: 'https://www.youtube.com/watch?v=XBkzBjfDOYs',
    duration: '08:10',
    topicCategory: 'Phishing & Social Engineering'
  },
  {
    id: 104,
    moduleId: 4,
    title: 'Apa Itu Malware, Virus, Trojan & Ransomware? Ini Bedanya!',
    description: 'Pahami cara kerja perangkat lunak berbahaya yang sering menyusup lewat file bajakan dan cara melindungi perangkat HP maupun laptop kamu.',
    channel: 'Tekno Edukasi Indonesia',
    youtubeId: 'n8mbzU0X2nQ',
    youtubeUrl: 'https://www.youtube.com/watch?v=n8mbzU0X2nQ',
    duration: '06:48',
    topicCategory: 'Malware & Virus Komputer'
  },
  {
    id: 105,
    moduleId: 5,
    title: 'Cara Mengamankan Akun Instagram, TikTok & Media Sosial dari Bajakan',
    description: 'Panduan lengkap mengatur privasi akun media sosial, mengecek perangkat yang login, dan menghindari risiko oversharing.',
    channel: 'Literasi Digital Pelajar',
    youtubeId: 'aEmF3Iylvr4',
    youtubeUrl: 'https://www.youtube.com/watch?v=aEmF3Iylvr4',
    duration: '07:52',
    topicCategory: 'Keamanan Media Sosial'
  },
  {
    id: 106,
    moduleId: 6,
    title: 'Pentingnya Perlindungan Data Pribadi & Bahaya Sebar Data Sensitif',
    description: 'Mengapa NIK, nomor HP, alamat rumah, dan foto identitas harus dijaga ketat dari penyalahgunaan pinjol ilegal maupun pencurian identitas.',
    channel: 'Literasi Digital Kominfo',
    youtubeId: 'Z54bLvmzvFQ',
    youtubeUrl: 'https://www.youtube.com/watch?v=Z54bLvmzvFQ',
    duration: '05:40',
    topicCategory: 'Privasi & Perlindungan Data'
  },
  {
    id: 107,
    moduleId: 7,
    title: 'Bahaya Wi-Fi Publik Gratis & Cara Aman Berselancar di Jaringan Umum',
    description: 'Penjelasan tentang serangan Man-in-the-Middle di Wi-Fi kafe atau ruang publik serta langkah pencegahan menggunakan enkripsi HTTPS.',
    channel: 'Cyber Academy ID',
    youtubeId: 'k1k-n02y0eU',
    youtubeUrl: 'https://www.youtube.com/watch?v=k1k-n02y0eU',
    duration: '06:05',
    topicCategory: 'Keamanan Jaringan & Wi-Fi'
  },
  {
    id: 108,
    moduleId: 8,
    title: 'Apa Itu Two-Factor Authentication (2FA) dan Cara Mengaktifkannya',
    description: 'Tutorial praktis menambah lapisan keamanan ekstra menggunakan Google Authenticator agar akun tetap aman meski password bocor.',
    channel: 'Panduan Keamanan Digital',
    youtubeId: '0mvCeNsTa1g',
    youtubeUrl: 'https://www.youtube.com/watch?v=0mvCeNsTa1g',
    duration: '05:19',
    topicCategory: 'Two-Factor Authentication (2FA)'
  },
  {
    id: 109,
    moduleId: 9,
    title: 'Stop Cyberbullying! Etika Digital & Cara Menghadapi Perundungan Online',
    description: 'Belajar berempati di dunia maya, memahami dampak hukum UU ITE, dan langkah tepat saat mengalami atau melihat cyberbullying.',
    channel: 'Siberkreasi Edukasi',
    youtubeId: '0oGfQvJg9gQ',
    youtubeUrl: 'https://www.youtube.com/watch?v=0oGfQvJg9gQ',
    duration: '07:12',
    topicCategory: 'Cyberbullying & Etika Digital'
  },
  {
    id: 110,
    moduleId: 10,
    title: 'Jejak Digital (Digital Footprint): Semua Aktivitas Online Tersimpan Selamanya',
    description: 'Bagaimana komentar, postingan lama, dan riwayat internet memengaruhi reputasi pendidikan dan karier kamu di masa depan.',
    channel: 'Literasi Digital Pelajar',
    youtubeId: 'DwFE25f50P4',
    youtubeUrl: 'https://www.youtube.com/watch?v=DwFE25f50P4',
    duration: '06:33',
    topicCategory: 'Digital Footprint'
  },
  {
    id: 111,
    moduleId: 11,
    title: 'Tips Aman Transaksi Online, E-Wallet & QRIS agar Terhindar Penipuan',
    description: 'Cara memastikan toko online terpercaya, mewaspadai bukti transfer palsu, dan menjaga kerahasiaan PIN serta kode OTP.',
    channel: 'Edukasi Finansial & Siber',
    youtubeId: 'hGRii5Mf_qo',
    youtubeUrl: 'https://www.youtube.com/watch?v=hGRii5Mf_qo',
    duration: '08:04',
    topicCategory: 'Keamanan Transaksi Online'
  }
];

// ============================================================================
// 2. DATA: PRE-ASSESSMENT & POST-ASSESSMENT QUESTIONS
// ============================================================================
const ASSESSMENT_QUESTIONS = [
  {
    id: 1,
    category: 'Password',
    question: 'Manakah contoh kata sandi (password) yang paling kuat dan aman?',
    options: [
      'BudiSantoso2009',
      '1234567890',
      'NasiGoreng#Pedas99!',
      'qwertyuiop'
    ],
    answer: 2,
    explanation: 'Passphrase panjang (>12 karakter) yang menggabungkan kata acak, huruf kapital, angka, dan simbol sangat sulit ditebak oleh serangan brute-force.'
  },
  {
    id: 2,
    category: 'Phishing',
    question: 'Kamu menerima pesan WhatsApp berisi file "Undangan_Pernikahan.apk" dari nomor tak dikenal. Apa tindakan paling tepat?',
    options: [
      'Langsung menginstal file tersebut untuk melihat isinya',
      'Mengabaikan, menghapus pesan, dan memblokir pengirim tanpa mengunduh file',
      'Meneruskan file tersebut ke grup kelas agar teman ikut mengecek',
      'Membalas pesan dengan menanyakan siapa pengirimnya'
    ],
    answer: 1,
    explanation: 'File .APK yang dikirim lewat chat adalah modus malware pencuri SMS/OTP perbankan. Jangan pernah mengunduh atau menginstalnya.'
  },
  {
    id: 3,
    category: '2FA',
    question: 'Apa fungsi utama dari Two-Factor Authentication (2FA)?',
    options: [
      'Mempercepat koneksi internet saat bermain game',
      'Menghapus riwayat browsing secara otomatis',
      'Menambah lapisan verifikasi kedua selain password saat login',
      'Mengganti password setiap hari secara acak'
    ],
    answer: 2,
    explanation: '2FA memastikan akun tetap terlindungi oleh kode verifikasi kedua (seperti Authenticator) meskipun password kamu bocor.'
  },
  {
    id: 4,
    category: 'Privasi',
    question: 'Sebuah aplikasi kalkulator gratis meminta izin akses ke Kontak, SMS, dan Lokasi. Apa yang sebaiknya kamu lakukan?',
    options: [
      'Menyetujui semua izin agar aplikasi cepat terbuka',
      'Menolak izin yang tidak relevan atau menghapus aplikasi tersebut',
      'Memberikan izin hanya saat malam hari',
      'Membagikan aplikasi tersebut ke teman'
    ],
    answer: 1,
    explanation: 'Aplikasi kalkulator tidak membutuhkan akses Kontak atau SMS. Izin berlebihan merupakan ciri aplikasi pengumpul data (spyware).'
  },
  {
    id: 5,
    category: 'Wi-Fi',
    question: 'Aktivitas manakah yang SEBAIKNYA DIHINDARI saat terhubung ke Wi-Fi publik gratis tanpa kata sandi di kafe?',
    options: [
      'Membaca artikel berita publik',
      'Menonton video edukasi',
      'Login ke aplikasi mobile banking atau e-wallet utama',
      'Mencari jadwal kereta api'
    ],
    answer: 2,
    explanation: 'Jaringan Wi-Fi terbuka rentan terhadap penyadapan paket data (Man-in-the-Middle). Gunakan paket data pribadi untuk transaksi finansial.'
  },
  {
    id: 6,
    category: 'Social Media',
    question: 'Teman dekatmu mengirim DM Instagram: "Bro, tolong kirim kode OTP yang masuk ke SMS kamu ya, HP-ku lagi error". Sikapmu?',
    options: [
      'Segera mengirimkannya karena dia teman dekat',
      'Menolak memberikan OTP dan menghubungi teman lewat telepon/tatap muka karena akunnya kemungkinan dibajak',
      'Mengirimkan setengah digit kode OTP saja',
      'Memposting kode OTP di Story'
    ],
    answer: 1,
    explanation: 'Kode OTP bersifat rahasia dan digunakan untuk mengambil alih akunmu. Akun temanmu kemungkinan besar sedang dibajak peretas.'
  }
];

// ============================================================================
// 3. DATA: CYBER CHALLENGE (6 REAL-LIFE SCENARIOS)
// ============================================================================
const CYBER_SCENARIOS = [
  {
    id: 1,
    title: 'Hadiah Diamond Game Gratis di WhatsApp',
    difficulty: 'Pemula',
    xp: 40,
    context: 'Kamu mendapat pesan WhatsApp: "SELAMAT! Akunmu terpilih mendapat 5.000 Diamond Gratis! Klaim sekarang di http://free-diamond-event2026.xyz sebelum hangus!"',
    choices: [
      {
        text: 'Klik link tersebut dan login menggunakan akun email & password game',
        isCorrect: false,
        feedback: 'Bahaya! Domain tersebut adalah situs phishing palsu yang dirancang untuk mencuri akun game dan email utamamu.'
      },
      {
        text: 'Abaikan pesan, jangan klik tautan, dan laporkan/blokir nomor pengirim',
        isCorrect: true,
        feedback: 'Tepat sekali! Hadiah resmi game hanya diumumkan melalui aplikasi resmi atau media sosial terverifikasi, bukan link acak berakhiran .xyz.'
      },
      {
        text: 'Bagikan link ke 5 grup WhatsApp seperti instruksi di halaman web',
        isCorrect: false,
        feedback: 'Jangan menyebarkan tautan phishing! Itu hanya membuat pelaku mendapatkan lebih banyak korban dari daftar kontakmu.'
      }
    ]
  },
  {
    id: 2,
    title: 'Email Peringatan Keamanan Akun Palsu',
    difficulty: 'Menengah',
    xp: 50,
    context: 'Masuk email dari "security@g00gle-verify-alert.com" bertuliskan: "Terdeteksi login mencurigakan dari luar negeri. Klik tombol Verifikasi Sekarang atau akun dihapus dalam 2 jam."',
    choices: [
      {
        text: 'Langsung klik tombol di email dan ketikkan password lama serta baru',
        isCorrect: false,
        feedback: 'Perhatikan alamat pengirimnya: "g00gle-verify-alert.com" memakai angka nol (00). Ini adalah teknik spoofing/phishing!'
      },
      {
        text: 'Buka aplikasi Google / myaccount.google.com secara manual lewat browser tanpa mengklik link di email',
        isCorrect: true,
        feedback: 'Cerdas! Selalu cek status keamanan akun langsung melalui aplikasi atau situs resmi yang diketik sendiri alamatnya.'
      }
    ]
  },
  {
    id: 3,
    title: 'Wi-Fi Gratis "FREE_WIFI_CAFE_FAST"',
    difficulty: 'Menengah',
    xp: 50,
    context: 'Saat nongkrong di kafe, muncul dua jaringan Wi-Fi: "KafeNusantara_Guest" (meminta password kasir) dan "FREE_WIFI_CAFE_FAST" (tanpa password). Kamu ingin top-up saldo e-wallet.',
    choices: [
      {
        text: 'Pakai "FREE_WIFI_CAFE_FAST" karena tidak perlu tanya password ke kasir',
        isCorrect: false,
        feedback: 'Waspada Evil Twin Attack! Hotspot gratis tanpa password sering dibuat peretas untuk menyadap data pengguna.'
      },
      {
        text: 'Matikan Wi-Fi dan gunakan kuota data seluler pribadi saat melakukan top-up e-wallet',
        isCorrect: true,
        feedback: 'Sempurna! Jaringan seluler jauh lebih terenkripsi dan aman dibandingkan Wi-Fi publik untuk transaksi keuangan.'
      }
    ]
  },
  {
    id: 4,
    title: 'Permintaan Kode OTP Lewat Telepon',
    difficulty: 'Pemula',
    xp: 40,
    context: 'Seseorang menelepon mengaku dari pihak ekspedisi paket dan berkata: "Kak, paketnya nyasar. Tolong sebutkan 6 digit kode SMS yang baru masuk supaya kurir bisa lanjut antar."',
    choices: [
      {
        text: 'Sebutkan kode SMS tersebut karena memang sedang menunggu paket belanja online',
        isCorrect: false,
        feedback: 'Kurir paket tidak pernah membutuhkan kode OTP akunmu! Pelaku sedang mencoba mereset password WhatsApp atau e-wallet kamu.'
      },
      {
        text: 'Tolak memberikan kode apa pun, tutup telepon, dan cek status resi langsung di aplikasi belanja',
        isCorrect: true,
        feedback: 'Hebat! Kode OTP adalah kunci rahasia mutlak yang tidak boleh diberikan kepada siapa pun dengan alasan apa pun.'
      }
    ]
  },
  {
    id: 5,
    title: 'File Tugas Kelompok Format .EXE / .SCR',
    difficulty: 'Lanjutan',
    xp: 60,
    context: 'Di grup belajar online, seorang anggota baru mengirim file bernama "Rangkuman_Ujian_Akhir.pdf.exe" berukuran 450 KB.',
    choices: [
      {
        text: 'Klik dua kali file tersebut di laptop karena berawalan .pdf',
        isCorrect: false,
        feedback: 'Perhatikan ekstensi terakhirnya: ".exe"! Itu adalah program aplikasi (kemungkinan besar malware/trojan), bukan dokumen PDF.'
      },
      {
        text: 'Jangan jalankan file tersebut dan peringatkan admin grup bahwa itu adalah file mencurigakan',
        isCorrect: true,
        feedback: 'Tepat! Sistem operasi membaca ekstensi paling belakang (.exe). Mengenali ekstensi ganda menyelamatkan laptopmu dari infeksi malware.'
      }
    ]
  },
  {
    id: 6,
    title: 'QRIS Stiker Tertempel di Meja',
    difficulty: 'Lanjutan',
    xp: 60,
    context: 'Saat membayar makanan di kantin, kamu melihat stiker QRIS tertempel menimpa stiker QRIS lama. Saat dipindai, nama penerima yang muncul adalah "TOKO_PULSA_JAYA88", bukan nama kantin.',
    choices: [
      {
        text: 'Tetap lanjutkan pembayaran karena kode QR-nya bisa dipindai',
        isCorrect: false,
        feedback: 'Ini adalah modus penipuan QRIS palsu (Quishing/QR tampering). Uangmu akan masuk ke rekening penipu, bukan pemilik kantin!'
      },
      {
        text: 'Batalkan pembayaran dan beri tahu pemilik kantin bahwa stiker QRIS mereka telah ditimpa',
        isCorrect: true,
        feedback: 'Luar biasa! Memeriksa nama merchant pada layar konfirmasi sebelum memasukkan PIN adalah langkah krusial transaksi QRIS.'
      }
    ]
  }
];

// ============================================================================
// 4. DATA: MINI GAMES CONTENT
// ============================================================================
const PHISHING_CARDS = [
  {
    sender: 'support@instagram.com',
    subject: 'Pemberitahuan Login Baru di Chrome Windows',
    snippet: 'Kami mendeteksi login baru ke akun Anda. Jika ini Anda, abaikan pesan ini. Anda dapat mengecek Aktivitas Login di pengaturan aplikasi.',
    isPhishing: false,
    reason: 'Domain resmi instagram.com, tidak memaksa klik tautan aneh, dan tidak meminta password/OTP.'
  },
  {
    sender: 'admin@bank-bri-hadiah2026.xyz',
    subject: 'URGENT: Klaim Saldo Rp 2.500.000 Sekarang!',
    snippet: 'Selamat! Nomor Anda memenangkan undian resmi. Klik http://bit.ly/klaim-cepat-vip dan masukkan PIN ATM Anda.',
    isPhishing: true,
    reason: 'Menggunakan domain palsu (.xyz), tautan pendek mencurigakan, dan meminta PIN ATM.'
  },
  {
    sender: 'no-reply@accounts.google.com',
    subject: 'Verifikasi 2 Langkah Diaktifkan',
    snippet: 'Verifikasi 2 Langkah untuk akun Google Anda baru saja diaktifkan. Kunjungi myaccount.google.com untuk meninjau pengaturan keamanan.',
    isPhishing: false,
    reason: 'Alamat resmi accounts.google.com dan mengarahkan ke domain resmi myaccount.google.com.'
  },
  {
    sender: '+62 812-9988-XXXX (WhatsApp)',
    subject: 'Surat Tilang Elektronik (ETLE)',
    snippet: 'Anda melanggar lalu lintas. Silakan unduh dan instal file Surat_Tilang_Resmi.apk untuk melihat bukti foto.',
    isPhishing: true,
    reason: 'Kepolisian tidak pernah mengirim surat tilang dalam bentuk file aplikasi (.apk) melalui WhatsApp pribadi.'
  },
  {
    sender: 'cs@dana-indonesia-care.online',
    subject: 'Akun Anda Akan Dibekukan Permanen!',
    snippet: 'Terjadi kesalahan sistem. Segera konfirmasi kode OTP 4 digit yang dikirim ke SMS Anda agar saldo tidak hangus.',
    isPhishing: true,
    reason: 'Domain palsu (.online), menciptakan kepanikan, dan meminta kode OTP rahasia.'
  }
];

const HACK_OR_SAFE_ITEMS = [
  { text: 'Mengaktifkan Google Authenticator pada akun email utama', safe: true, tip: '2FA aplikasi melindungi akun meski password bocor.' },
  { text: 'Menggunakan tanggal lahir "17082008" sebagai password semua akun', safe: false, tip: 'Tanggal lahir sangat mudah ditebak dari profil media sosial.' },
  { text: 'Mengunduh game berbayar versi MOD APK dari situs tidak dikenal', safe: false, tip: 'MOD APK sering disisipi trojan pencuri data.' },
  { text: 'Memeriksa ikon gembok HTTPS sebelum login di website sekolah', safe: true, tip: 'HTTPS mengenkripsi data yang dikirim browser.' },
  { text: 'Memposting foto kartu pelajar yang menampilkan NISN dan alamat lengkap', safe: false, tip: 'Data identitas pribadi berisiko disalahgunakan (doxxing).' },
  { text: 'Logout dari akun email setelah selesai memakai komputer lab sekolah', safe: true, tip: 'Selalu logout di perangkat bersama agar tidak diakses orang berikutnya.' }
];

const DETECTIVE_CLUES = [
  {
    caseTitle: 'Kasus #1: Situs Login Palsu',
    url: 'https://www.paypa1-security-login.com/verify',
    question: 'Temukan kejanggalan utama pada URL di atas!',
    options: [
      'Menggunakan protokol https://',
      'Huruf "l" pada PayPal diganti angka "1" (typosquatting) dan domain utamanya bukan paypal.com',
      'Memiliki path /verify di belakangnya'
    ],
    answer: 1
  },
  {
    caseTitle: 'Kasus #2: Izin Aplikasi Mencurigakan',
    url: 'Aplikasi: "Wallpaper Keren HD" | Izin: Kamera, Mikrofon, Baca SMS, Daftar Kontak',
    question: 'Mengapa aplikasi wallpaper ini berbahaya?',
    options: [
      'Meminta izin membaca SMS (bisa mencuri OTP) dan Kontak yang tidak ada hubungannya dengan wallpaper',
      'Ukurannya terlalu kecil',
      'Hanya tersedia untuk tema gelap'
    ],
    answer: 0
  },
  {
    caseTitle: 'Kasus #3: Pesan Pinjam Uang dari Akun Teman',
    url: 'DM Instagram dari @rani.putri: "Pinjem 300rb dong transfer ke rek 88210 a.n. Agus Setiawan, lagi darurat banget!"',
    question: 'Apa petunjuk kuat bahwa akun @rani.putri sedang dibajak?',
    options: [
      'Mengirim pesan pada siang hari',
      'Nama pemilik rekening tujuan (Agus Setiawan) berbeda dengan nama temanmu (Rani Putri) disertai nada mendesak',
      'Menggunakan bahasa Indonesia santai'
    ],
    answer: 1
  }
];

const FOOTPRINT_POSTS = [
  {
    content: '📸 "Lagi liburan sekeluarga ke Bali selama 5 hari! Rumah kosong nih guys, jangan lupa mampir haha #holiday"',
    safeToPost: false,
    explanation: 'Berbahaya! Mengumumkan rumah sedang kosong secara publik mengundang risiko pencurian fisik.'
  },
  {
    content: '🏆 "Senang banget tim robotik sekolah kami berhasil meraih juara 2 lomba tingkat provinsi hari ini! Terima kasih pembina & teman-teman."',
    safeToPost: true,
    explanation: 'Aman & Positif! Membagikan prestasi tanpa membocorkan data pribadi sensitif membangun rekam jejak digital yang baik.'
  },
  {
    content: '🎫 "Akhirnya dapet tiket konser VIP! Nih foto tiket beserta barcode-nya biar pada percaya!"',
    safeToPost: false,
    explanation: 'Berbahaya! Barcode/QR tiket yang terlihat jelas dapat dipindai dan diklaim oleh orang lain sebelum kamu masuk venue.'
  },
  {
    content: '🎨 "Hasil latihan desain poster kampanye anti-hoaks minggu ini. Kritik dan saran yang membangun sangat diterima!"',
    safeToPost: true,
    explanation: 'Aman & Positif! Portofolio karya kreatif menjadi nilai tambah di masa depan.'
  }
];

// ============================================================================
// 5. INITIAL STATE & BADGE SYSTEM
// ============================================================================
const INITIAL_USER_STATE = {
  name: 'Cyber Defender',
  avatar: '🛡️',
  xp: 0,
  completedModules: [],
  watchedVideos: [],
  completedScenarios: [],
  gameHighScores: {
    phishing: 0,
    hackOrSafe: 0,
    password: 0,
    detective: 0,
    footprint: 0
  },
  preTestScore: null,
  postTestScore: null,
  history: []
};

const BADGE_LEVELS = [
  { minXP: 0, name: 'Cyber Rookie', icon: '🌱', color: 'text-slate-300 border-slate-600 bg-slate-800/60' },
  { minXP: 150, name: 'Digital Scout', icon: '🧭', color: 'text-cyan-300 border-cyan-500/50 bg-cyan-950/60' },
  { minXP: 400, name: 'Cyber Guardian', icon: '🛡️', color: 'text-blue-300 border-blue-500/50 bg-blue-950/60' },
  { minXP: 750, name: 'Security Sentinel', icon: '⚡', color: 'text-purple-300 border-purple-500/50 bg-purple-950/60' },
  { minXP: 1100, name: 'Grand Cyber Master', icon: '👑', color: 'text-amber-300 border-amber-500/50 bg-amber-950/60' }
];

// ============================================================================
// 6. AMBIENT WEB AUDIO SYNTH (NO EXTERNAL AUDIO FILE ERRORS)
// ============================================================================
function useAmbientSynth() {
  const [isPlaying, setIsPlaying] = useState(false);
  const ctxRef = useRef(null);
  const intervalRef = useRef(null);

  const toggleAudio = () => {
    if (isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (ctxRef.current) {
        ctxRef.current.close().catch(() => {});
        ctxRef.current = null;
      }
      setIsPlaying(false);
      return;
    }

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();
      ctxRef.current = ctx;

      const chords = [
        [220.0, 261.63, 329.63, 392.0], // Am7
        [174.61, 220.0, 261.63, 329.63], // Fmaj7
        [130.81, 196.0, 246.94, 293.66], // Cmaj9
        [196.0, 246.94, 293.66, 349.23]  // G7
      ];
      let step = 0;

      const playChord = () => {
        if (!ctxRef.current || ctxRef.current.state === 'closed') return;
        const now = ctx.currentTime;
        const freqs = chords[step % chords.length];
        freqs.forEach((f) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(f, now);

          gain.gain.setValueAtTime(0.0001, now);
          gain.gain.exponentialRampToValueAtTime(0.018, now + 1.2);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.8);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 3.9);
        });
        step++;
      };

      playChord();
      intervalRef.current = setInterval(playChord, 4000);
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (ctxRef.current) ctxRef.current.close().catch(() => {});
    };
  }, []);

  return { isPlaying, toggleAudio };
}

// ============================================================================
// 7. PASSWORD STRENGTH EVALUATOR HELPER
// ============================================================================
function evaluatePassword(pw) {
  let score = 0;
  const checks = {
    length: pw.length >= 12,
    upper: /[A-Z]/.test(pw),
    lower: /[a-z]/.test(pw),
    number: /[0-9]/.test(pw),
    symbol: /[^A-Za-z0-9]/.test(pw)
  };
  if (pw.length >= 8) score += 15;
  if (checks.length) score += 25;
  if (checks.upper) score += 15;
  if (checks.lower) score += 15;
  if (checks.number) score += 15;
  if (checks.symbol) score += 15;

  let label = 'Sangat Lemah';
  let color = 'bg-rose-500';
  let crackTime = 'Instan (< 1 detik)';

  if (score >= 90) {
    label = 'Sangat Kuat (Cyber Grade)';
    color = 'bg-emerald-400';
    crackTime = '± 400 Abad';
  } else if (score >= 70) {
    label = 'Kuat';
    color = 'bg-cyan-400';
    crackTime = '± 12 Tahun';
  } else if (score >= 45) {
    label = 'Sedang';
    color = 'bg-amber-400';
    crackTime = '± 3 Hari';
  }

  return { score, label, color, crackTime, checks };
}

// ============================================================================
// 8. MAIN APPLICATION COMPONENT
// ============================================================================
export default function App() {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('cyberguard_user_v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...INITIAL_USER_STATE,
          ...parsed,
          watchedVideos: Array.isArray(parsed.watchedVideos) ? parsed.watchedVideos : []
        };
      }
      return INITIAL_USER_STATE;
    } catch {
      return INITIAL_USER_STATE;
    }
  });

  const [activeTab, setActiveTab] = useState('home'); // home, modules, videos, path, challenge, games, quiz, leaderboard, profile
  const [selectedModule, setSelectedModule] = useState(null);
  const [moduleLearningMode, setModuleLearningMode] = useState('read'); // 'read' | 'video'
  const [selectedLibraryVideoId, setSelectedLibraryVideoId] = useState(EDUCATIONAL_VIDEOS[0].id);
  const [videoSearchQuery, setVideoSearchQuery] = useState('');
  const [videoTopicFilter, setVideoTopicFilter] = useState('ALL');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(user.name);

  // Cyber Challenge states
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);

  // Mini Games states
  const [activeGame, setActiveGame] = useState(null); // null, phishing, hackOrSafe, password, detective, footprint
  const [gameStep, setGameStep] = useState(0);
  const [gameScore, setGameScore] = useState(0);
  const [gameFeedback, setGameFeedback] = useState(null);
  const [gameFinished, setGameFinished] = useState(false);
  const [pwTestInput, setPwTestInput] = useState('');
  const [showPwTest, setShowPwTest] = useState(false);

  // Quiz states
  const [quizMode, setQuizMode] = useState(null); // null, 'pre', 'post'
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);

  const { isPlaying, toggleAudio } = useAmbientSynth();

  // Persist user progress to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('cyberguard_user_v1', JSON.stringify(user));
    } catch {
      // ignore storage quota errors
    }
  }, [user]);

  const currentBadge = [...BADGE_LEVELS].reverse().find((b) => user.xp >= b.minXP) || BADGE_LEVELS[0];
  const nextBadge = BADGE_LEVELS.find((b) => b.minXP > user.xp);

  const addXP = (amount, activityTitle, category = 'general') => {
    if (amount <= 0) return;
    setUser((prev) => {
      const updated = {
        ...prev,
        xp: prev.xp + amount,
        history: [
          {
            id: Date.now() + Math.random(),
            title: activityTitle,
            xp: amount,
            category,
            date: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
          },
          ...prev.history.slice(0, 19)
        ]
      };
      return updated;
    });
    setToast({ title: `+${amount} XP Diperoleh!`, subtitle: activityTitle });
    setTimeout(() => setToast(null), 3200);
  };

  const handleMarkVideoWatched = (video) => {
    const watchedList = user.watchedVideos || [];
    if (watchedList.includes(video.id)) return;
    setUser((prev) => ({
      ...prev,
      watchedVideos: [...(prev.watchedVideos || []), video.id]
    }));
    addXP(25, `Menonton Video: ${video.topicCategory}`, 'video');
  };

  const handleOpenModule = (mod, initialMode = 'read') => {
    setSelectedModule(mod);
    setModuleLearningMode(initialMode);
    setActiveTab('modules');
  };

  const handleCompleteModule = (moduleId, moduleTitle) => {
    if (user.completedModules.includes(moduleId)) return;
    setUser((prev) => ({
      ...prev,
      completedModules: [...prev.completedModules, moduleId]
    }));
    addXP(50, `Selesai Modul: ${moduleTitle}`, 'module');
  };

  const startMiniGame = (gameId) => {
    setActiveGame(gameId);
    setGameStep(0);
    setGameScore(0);
    setGameFeedback(null);
    setGameFinished(false);
    setPwTestInput('');
  };

  const finishMiniGame = (gameId, finalScore, label) => {
    setGameFinished(true);
    const prevHigh = user.gameHighScores[gameId] || 0;
    if (finalScore > prevHigh) {
      setUser((prev) => ({
        ...prev,
        gameHighScores: { ...prev.gameHighScores, [gameId]: finalScore }
      }));
    }
    const earnedXP = Math.max(15, Math.round(finalScore / 2));
    addXP(earnedXP, `Mini Game: ${label} (Skor ${finalScore})`, 'game');
  };

  // Navigation Items
  const navItems = [
    { id: 'home', label: 'Beranda', icon: Home },
    { id: 'modules', label: 'Materi (11)', icon: BookOpen },
    { id: 'videos', label: 'Video Library', icon: Video },
    { id: 'path', label: 'Learning Path', icon: Layers },
    { id: 'challenge', label: 'Cyber Challenge', icon: MessageSquareWarning },
    { id: 'games', label: 'Mini Games', icon: Gamepad2 },
    { id: 'quiz', label: 'Pre/Post Quiz', icon: BarChart3 },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
    { id: 'profile', label: 'Profil', icon: User }
  ];

  // Radar Chart Data for Profile & Analytics
  const skillChartData = [
    { subject: 'Password', score: Math.min(100, (user.completedModules.includes(2) ? 60 : 20) + (user.gameHighScores.password > 70 ? 40 : 10)) },
    { subject: 'Anti-Phishing', score: Math.min(100, (user.completedModules.includes(3) ? 50 : 15) + Math.round((user.gameHighScores.phishing || 0) / 2)) },
    { subject: 'Privasi Data', score: Math.min(100, (user.completedModules.includes(6) ? 60 : 20) + (user.completedModules.includes(5) ? 40 : 10)) },
    { subject: 'Jaringan & 2FA', score: Math.min(100, (user.completedModules.includes(7) ? 50 : 15) + (user.completedModules.includes(8) ? 50 : 10)) },
    { subject: 'Etika & Jejak', score: Math.min(100, (user.completedModules.includes(9) ? 50 : 15) + Math.round((user.gameHighScores.footprint || 0) / 2)) },
    { subject: 'Transaksi Aman', score: Math.min(100, (user.completedModules.includes(11) ? 70 : 20) + (user.completedScenarios.includes(6) ? 30 : 0)) }
  ];

  return (
    <div className="min-h-screen bg-[#060B19] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 flex flex-col">
      {/* Floating XP Toast Notification */}
      {toast && (
        <div className="fixed bottom-5 right-5 z-50 animate-bounce bg-slate-900/95 border border-cyan-400/60 shadow-lg shadow-cyan-500/20 rounded-2xl px-4 py-3 flex items-center gap-3 backdrop-blur-md">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 font-bold">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-cyan-300">{toast.title}</p>
            <p className="text-xs text-slate-300">{toast.subtitle}</p>
          </div>
        </div>
      )}

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#060B19]/90 backdrop-blur-xl border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2">
          {/* Brand Logo */}
          <button
            onClick={() => {
              setActiveTab('home');
              setSelectedModule(null);
            }}
            className="flex items-center gap-2.5 text-left group shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-sm sm:text-base bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent block leading-none">
                DIGITAL SECURITY
              </span>
              <span className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">
                Learn • Explore • Protect
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    if (item.id !== 'modules') setSelectedModule(null);
                    if (item.id !== 'games') setActiveGame(null);
                  }}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Controls: XP Pill, Ambient Audio, Mobile Drawer Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleAudio}
              title={isPlaying ? 'Matikan Musik Latar Ambient' : 'Putar Musik Latar Ambient'}
              className={`p-2 rounded-xl border text-xs flex items-center gap-1.5 transition ${
                isPlaying
                  ? 'bg-purple-500/20 border-purple-400/50 text-purple-200'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {isPlaying ? <Volume2 className="w-4 h-4 text-purple-300" /> : <VolumeX className="w-4 h-4" />}
              <span className="hidden sm:inline font-medium">{isPlaying ? 'Ambient On' : 'Musik'}</span>
            </button>

            <button
              onClick={() => setActiveTab('profile')}
              className="flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 px-3 py-1.5 rounded-xl transition"
            >
              <span className="text-base">{user.avatar}</span>
              <div className="text-left">
                <div className="text-xs font-bold text-cyan-300 leading-none">{user.xp} XP</div>
                <div className="text-[10px] text-slate-400 leading-tight hidden sm:block">{currentBadge.name}</div>
              </div>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#091126] border-b border-slate-800 px-4 py-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                    if (item.id !== 'modules') setSelectedModule(null);
                    if (item.id !== 'games') setActiveGame(null);
                  }}
                  className={`px-3 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'bg-slate-900/70 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* Main Page Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 md:py-10">
        {/* ==================== 1. HOME / BERANDA ==================== */}
        {activeTab === 'home' && (
          <div className="space-y-12">
            {/* Hero Section */}
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-[#0B1633] to-indigo-950/80 border border-slate-800/90 p-6 sm:p-10 md:p-14 shadow-2xl">
              <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    Platform Edukasi Keamanan Siber Pelajar Indonesia
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
                    DIGITAL SECURITY
                    <span className="block mt-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Learn, Explore & Protect
                    </span>
                  </h1>

                  <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
                    Kuasai cara melindungi akun, data pribadi, dan transaksi digitalmu dari ancaman phishing, malware, dan penipuan online melalui 11 modul interaktif, video pembelajaran, simulasi kasus nyata, serta mini games seru.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <button
                      onClick={() => setActiveTab('modules')}
                      className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all"
                    >
                      Mulai Belajar Sekarang <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setActiveTab('videos')}
                      className="px-6 py-3.5 rounded-2xl bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/40 text-purple-200 font-semibold text-sm flex items-center gap-2 transition-all"
                    >
                      <Video className="w-4 h-4 text-purple-300" /> Video Library
                    </button>
                    <button
                      onClick={() => setActiveTab('games')}
                      className="px-6 py-3.5 rounded-2xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-sm flex items-center gap-2 transition-all"
                    >
                      <Gamepad2 className="w-4 h-4 text-cyan-400" /> Mainkan Mini Games
                    </button>
                  </div>
                </div>

                {/* Right Cyber Status Card */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-slate-950/80 border border-slate-800 p-6 backdrop-blur-md space-y-5 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center text-2xl">
                          {user.avatar}
                        </div>
                        <div>
                          <p className="text-xs text-slate-400">Halo, Agen Keamanan!</p>
                          <h3 className="font-bold text-white text-base">{user.name}</h3>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${currentBadge.color}`}>
                        {currentBadge.icon} {currentBadge.name}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400">Progres Penyelesaian Materi</span>
                        <span className="font-bold text-cyan-300">{user.completedModules.length} / 11 Modul</span>
                      </div>
                      <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-500"
                          style={{ width: `${Math.round((user.completedModules.length / 11) * 100)}%` }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2.5 text-center">
                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                        <div className="text-lg font-extrabold text-cyan-400">{user.xp}</div>
                        <div className="text-[11px] text-slate-400">Total XP</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                        <div className="text-lg font-extrabold text-purple-400">{(user.watchedVideos || []).length}/11</div>
                        <div className="text-[11px] text-slate-400">Video</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                        <div className="text-lg font-extrabold text-emerald-400">
                          {user.postTestScore !== null ? `${user.postTestScore}%` : user.preTestScore !== null ? `${user.preTestScore}%` : '-'}
                        </div>
                        <div className="text-[11px] text-slate-400">Skor Quiz</div>
                      </div>
                    </div>

                    {nextBadge && (
                      <p className="text-xs text-slate-400 text-center">
                        Kumpulkan <span className="text-cyan-300 font-bold">{nextBadge.minXP - user.xp} XP</span> lagi untuk naik ke pangkat <span className="text-white font-semibold">{nextBadge.name}</span>!
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: '11 Modul Materi',
                  desc: 'Baca materi atau tonton video penjelasan untuk setiap topik keamanan digital.',
                  icon: BookOpen,
                  color: 'text-cyan-400',
                  bg: 'bg-cyan-500/10',
                  tab: 'modules',
                  stat: `${user.completedModules.length}/11 Selesai`
                },
                {
                  title: 'Video Library',
                  desc: 'Belajar visual lewat video YouTube edukasi terkurasi untuk semua topik.',
                  icon: Video,
                  color: 'text-rose-400',
                  bg: 'bg-rose-500/10',
                  tab: 'videos',
                  stat: `${(user.watchedVideos || []).length}/${EDUCATIONAL_VIDEOS.length} Ditonton`
                },
                {
                  title: 'Cyber Challenge',
                  desc: 'Simulasi interaktif menghadapi chat phishing, penipuan, dan Wi-Fi publik.',
                  icon: ShieldAlert,
                  color: 'text-purple-400',
                  bg: 'bg-purple-500/10',
                  tab: 'challenge',
                  stat: `${user.completedScenarios.length}/6 Skenario`
                },
                {
                  title: '5 Mini Games',
                  desc: 'Uji refleks dan ketelitianmu di game edukasi keamanan siber yang seru.',
                  icon: Gamepad2,
                  color: 'text-emerald-400',
                  bg: 'bg-emerald-500/10',
                  tab: 'games',
                  stat: '5 Game Aktif'
                }
              ].map((card, i) => {
                const Icon = card.icon;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveTab(card.tab)}
                    className="text-left p-6 rounded-2xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className={`w-11 h-11 rounded-xl ${card.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-6 h-6 ${card.color}`} />
                      </div>
                      <h3 className="font-bold text-white text-base mb-1.5">{card.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed mb-4">{card.desc}</p>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                      <span className={`text-xs font-bold ${card.color}`}>{card.stat}</span>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ==================== 2. 11 LEARNING MODULES ==================== */}
        {activeTab === 'modules' && (
          <div className="space-y-6">
            {!selectedModule ? (
              <>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-extrabold text-white">11 Modul Keamanan Digital</h1>
                    <p className="text-slate-400 text-sm mt-1">
                      Pilih cara belajarmu: baca materi ringkas atau tonton video penjelasan di setiap modul (+50 XP baca & +25 XP video).
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => setActiveTab('videos')}
                      className="px-3.5 py-2 rounded-xl bg-purple-500/15 border border-purple-500/30 hover:border-purple-400 text-xs font-bold text-purple-300 flex items-center gap-1.5 transition"
                    >
                      <Video className="w-4 h-4" /> Buka Video Library
                    </button>
                    <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm font-semibold text-cyan-400">
                      Progres Baca: {user.completedModules.length} / 11
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {LEARNING_MODULES.map((mod) => {
                    const ModIcon = mod.icon;
                    const isDone = user.completedModules.includes(mod.id);
                    const modVideo = EDUCATIONAL_VIDEOS.find((v) => v.moduleId === mod.id);
                    const isVideoWatched = modVideo && (user.watchedVideos || []).includes(modVideo.id);
                    return (
                      <div
                        key={mod.id}
                        className={`rounded-2xl p-6 border transition-all flex flex-col justify-between group ${
                          isDone
                            ? 'bg-slate-900/70 border-emerald-500/40 hover:border-emerald-400'
                            : 'bg-slate-900/70 border-slate-800 hover:border-cyan-500/50'
                        }`}
                      >
                        <div
                          onClick={() => handleOpenModule(mod, 'read')}
                          className="cursor-pointer"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300">
                              Modul #{mod.id} • {mod.duration}
                            </span>
                            <div className="flex items-center gap-1.5">
                              {isVideoWatched && (
                                <span className="flex items-center gap-1 text-[11px] font-bold text-purple-300 bg-purple-500/15 border border-purple-500/30 px-2 py-0.5 rounded-full">
                                  <Video className="w-3 h-3" /> Video ✓
                                </span>
                              )}
                              {isDone ? (
                                <span className="flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                                  <CheckCircle2 className="w-3.5 h-3.5" /> Selesai
                                </span>
                              ) : (
                                <span className="text-xs font-semibold text-cyan-400">+50 XP</span>
                              )}
                            </div>
                          </div>

                          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${mod.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-105 transition-transform`}>
                            <ModIcon className="w-6 h-6 text-white" />
                          </div>

                          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                            {mod.title}
                          </h3>
                          <p className="text-xs text-slate-400 leading-relaxed mb-4">
                            {mod.summary}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-2">
                          <button
                            onClick={() => handleOpenModule(mod, 'read')}
                            className="py-2 px-3 rounded-xl bg-slate-800/90 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/40 text-xs font-bold text-cyan-300 flex items-center justify-center gap-1.5 transition"
                          >
                            <BookOpen className="w-3.5 h-3.5" /> Baca Materi
                          </button>
                          <button
                            onClick={() => handleOpenModule(mod, 'video')}
                            className="py-2 px-3 rounded-xl bg-purple-500/15 hover:bg-purple-500/25 border border-purple-500/30 hover:border-purple-400 text-xs font-bold text-purple-300 flex items-center justify-center gap-1.5 transition"
                          >
                            <Play className="w-3.5 h-3.5" /> Tonton Video
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              /* Detailed Module View with Dual Learning Mode (Baca Materi / Tonton Video) */
              (() => {
                const modVideo = EDUCATIONAL_VIDEOS.find((v) => v.moduleId === selectedModule.id) || EDUCATIONAL_VIDEOS[0];
                const isVideoWatched = (user.watchedVideos || []).includes(modVideo.id);
                const relatedVideos = EDUCATIONAL_VIDEOS.filter((v) => v.moduleId !== selectedModule.id).slice(0, 3);

                return (
                  <div className="max-w-4xl mx-auto space-y-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <button
                        onClick={() => {
                          setSelectedModule(null);
                          setModuleLearningMode('read');
                        }}
                        className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-cyan-400 transition"
                      >
                        <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Modul
                      </button>

                      {/* Dual Learning Mode Switcher */}
                      <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg">
                        <button
                          onClick={() => setModuleLearningMode('read')}
                          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                            moduleLearningMode === 'read'
                              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/20'
                              : 'text-slate-300 hover:text-white'
                          }`}
                        >
                          <BookOpen className="w-4 h-4" /> Baca Materi
                        </button>
                        <button
                          onClick={() => setModuleLearningMode('video')}
                          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                            moduleLearningMode === 'video'
                              ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md shadow-purple-500/25'
                              : 'text-slate-300 hover:text-white'
                          }`}
                        >
                          <Play className="w-4 h-4" /> Tonton Video
                          {isVideoWatched && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />}
                        </button>
                      </div>
                    </div>

                    {moduleLearningMode === 'read' ? (
                      /* MODE MEMBACA */
                      <div className="rounded-3xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-2xl">
                        <div className={`p-6 md:p-8 bg-gradient-to-r ${selectedModule.color}`}>
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span className="inline-block text-xs font-bold uppercase tracking-wider bg-black/30 text-white px-3 py-1 rounded-full">
                              Modul {selectedModule.id} dari 11 • {selectedModule.duration}
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs font-bold bg-black/30 text-white px-3 py-1 rounded-full">
                              <BookOpen className="w-3.5 h-3.5" /> Mode Membaca
                            </span>
                          </div>
                          <h1 className="text-2xl md:text-3xl font-extrabold text-white">{selectedModule.title}</h1>
                          <p className="text-white/90 text-sm mt-2">{selectedModule.summary}</p>
                        </div>

                        <div className="p-6 md:p-8 space-y-6">
                          {/* Video Learning Callout Banner inside Reading Mode */}
                          <div className="rounded-2xl bg-gradient-to-r from-indigo-950/90 via-purple-950/70 to-slate-900 border border-purple-500/40 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
                            <div className="flex items-start gap-3.5">
                              <div className="w-11 h-11 rounded-2xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center shrink-0 mt-0.5">
                                <Headphones className="w-5 h-5 text-purple-300" />
                              </div>
                              <div>
                                <div className="flex flex-wrap items-center gap-2">
                                  <h3 className="text-sm font-extrabold uppercase tracking-wide text-purple-300">
                                    LEBIH SUKA BELAJAR DENGAN MENONTON?
                                  </h3>
                                  {isVideoWatched && (
                                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                      ✓ Video Selesai Ditonton
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                                  Tenang! Kamu juga bisa memahami materi ini melalui video pembelajaran yang sudah kami sediakan.
                                </p>
                              </div>
                            </div>
                            <button
                              onClick={() => setModuleLearningMode('video')}
                              className="px-4 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-purple-500/25 transition"
                            >
                              <Play className="w-4 h-4 fill-current" /> Tonton Video Pembelajaran
                            </button>
                          </div>

                          {selectedModule.sections.map((sec, idx) => (
                            <div key={idx} className="space-y-2">
                              <h3 className="text-lg font-bold text-cyan-400 flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-cyan-500/15 text-cyan-400 text-xs flex items-center justify-center font-extrabold">
                                  {idx + 1}
                                </span>
                                {sec.heading}
                              </h3>
                              <p className="text-slate-300 text-sm md:text-base leading-relaxed pl-8">
                                {sec.body}
                              </p>
                            </div>
                          ))}

                          <div className="rounded-2xl bg-slate-950/90 border border-cyan-500/30 p-5 space-y-3">
                            <h4 className="font-bold text-white flex items-center gap-2 text-sm">
                              <ShieldCheck className="w-5 h-5 text-emerald-400" /> Poin Kunci Keamanan (Key Takeaways)
                            </h4>
                            <ul className="space-y-2">
                              {selectedModule.keyTakeaways.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <button
                              onClick={() => handleCompleteModule(selectedModule.id, selectedModule.title)}
                              disabled={user.completedModules.includes(selectedModule.id)}
                              className={`w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition ${
                                user.completedModules.includes(selectedModule.id)
                                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 cursor-default'
                                  : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25'
                              }`}
                            >
                              {user.completedModules.includes(selectedModule.id) ? (
                                <>
                                  <CheckCircle2 className="w-5 h-5" /> Materi Sudah Diselesaikan
                                </>
                              ) : (
                                <>
                                  <Award className="w-5 h-5" /> Tandai Selesai & Klaim +50 XP
                                </>
                              )}
                            </button>

                            {selectedModule.id < LEARNING_MODULES.length && (
                              <button
                                onClick={() => {
                                  const next = LEARNING_MODULES.find((m) => m.id === selectedModule.id + 1);
                                  if (next) {
                                    setSelectedModule(next);
                                    setModuleLearningMode('read');
                                  }
                                }}
                                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition"
                              >
                                Modul Berikutnya <ChevronRight className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* MODE MENONTON (VIDEO LEARNING MODE) */
                      <div className="space-y-6">
                        <div className="rounded-3xl bg-slate-900/90 border border-purple-500/30 overflow-hidden shadow-2xl">
                          {/* Top Video Mode Header */}
                          <div className="px-6 py-4 bg-gradient-to-r from-slate-900 via-indigo-950/70 to-purple-950/60 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
                            <div className="flex items-center gap-2.5">
                              <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold flex items-center gap-1.5">
                                <Video className="w-3.5 h-3.5" /> Video Learning Mode • Modul #{selectedModule.id}
                              </span>
                              <span className="text-xs text-slate-400 hidden sm:inline">
                                Durasi {modVideo.duration}
                              </span>
                            </div>

                            {isVideoWatched ? (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
                                <CheckCircle2 className="w-4 h-4" /> Video Selesai Ditonton (+25 XP)
                              </span>
                            ) : (
                              <span className="text-xs font-semibold text-cyan-400">
                                Tonton lalu tandai selesai untuk +25 XP
                              </span>
                            )}
                          </div>

                          {/* 16:9 Responsive YouTube Embed */}
                          <div className="relative w-full aspect-video bg-black">
                            <iframe
                              className="w-full h-full"
                              src={`https://www.youtube.com/embed/${modVideo.youtubeId}?rel=0`}
                              title={modVideo.title}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                            />
                          </div>

                          {/* Video Metadata & Controls */}
                          <div className="p-6 md:p-8 space-y-5">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                              <div className="space-y-2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-800/90 border border-slate-700 text-xs font-semibold text-cyan-300">
                                  <Tv className="w-3.5 h-3.5" /> Channel: {modVideo.channel}
                                </div>
                                <h2 className="text-xl md:text-2xl font-extrabold text-white leading-snug">
                                  {modVideo.title}
                                </h2>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                  {modVideo.description}
                                </p>
                              </div>
                            </div>

                            {/* Honest Watch Confirmation & YouTube Fallback */}
                            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                              <div className="text-xs text-slate-400">
                                <span className="text-slate-200 font-semibold block">Sudah selesai menonton videonya?</span>
                                Klik tombol di samping untuk mencatat progres belajarmu secara manual.
                              </div>
                              <div className="flex flex-wrap items-center gap-2.5">
                                <a
                                  href={modVideo.youtubeUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-slate-200 flex items-center justify-center gap-1.5 transition"
                                >
                                  <ExternalLink className="w-3.5 h-3.5 text-rose-400" /> Tonton di YouTube
                                </a>

                                <button
                                  onClick={() => handleMarkVideoWatched(modVideo)}
                                  disabled={isVideoWatched}
                                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition ${
                                    isVideoWatched
                                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 cursor-default'
                                      : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                                  }`}
                                >
                                  {isVideoWatched ? (
                                    <>
                                      <CheckCircle2 className="w-4 h-4" /> Sudah Ditonton ✓
                                    </>
                                  ) : (
                                    <>
                                      <CheckCircle2 className="w-4 h-4" /> Tandai Sudah Ditonton (+25 XP)
                                    </>
                                  )}
                                </button>
                              </div>
                            </div>

                            {/* Navigation Footer back to Reading Mode or Next Module */}
                            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                              <button
                                onClick={() => setModuleLearningMode('read')}
                                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition"
                              >
                                <BookOpen className="w-4 h-4 text-cyan-400" /> Kembali ke Materi Tertulis
                              </button>

                              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                                <button
                                  onClick={() => {
                                    setSelectedLibraryVideoId(modVideo.id);
                                    setActiveTab('videos');
                                  }}
                                  className="flex-1 sm:flex-initial px-4 py-3 rounded-xl bg-purple-500/15 hover:bg-purple-500/25 border border-purple-500/30 text-purple-300 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition"
                                >
                                  <Video className="w-4 h-4" /> Semua Video
                                </button>
                                {selectedModule.id < LEARNING_MODULES.length && (
                                  <button
                                    onClick={() => {
                                      const next = LEARNING_MODULES.find((m) => m.id === selectedModule.id + 1);
                                      if (next) {
                                        setSelectedModule(next);
                                        setModuleLearningMode('video');
                                      }
                                    }}
                                    className="flex-1 sm:flex-initial px-4 py-3 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition"
                                  >
                                    Video Berikutnya <ChevronRight className="w-4 h-4" />
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Related Videos Section */}
                        <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-5 sm:p-6 space-y-4">
                          <div className="flex items-center justify-between">
                            <h3 className="text-base font-bold text-white flex items-center gap-2">
                              <Film className="w-4 h-4 text-purple-400" /> Video Pembelajaran Terkait Lainnya
                            </h3>
                            <button
                              onClick={() => setActiveTab('videos')}
                              className="text-xs font-bold text-cyan-400 hover:text-cyan-300"
                            >
                              Lihat Video Library →
                            </button>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {relatedVideos.map((rel) => {
                              const relWatched = (user.watchedVideos || []).includes(rel.id);
                              return (
                                <button
                                  key={rel.id}
                                  onClick={() => {
                                    const targetMod = LEARNING_MODULES.find((m) => m.id === rel.moduleId);
                                    if (targetMod) {
                                      setSelectedModule(targetMod);
                                      setModuleLearningMode('video');
                                    }
                                  }}
                                  className="text-left rounded-xl bg-slate-950/80 border border-slate-800 hover:border-purple-500/50 overflow-hidden group transition flex flex-col"
                                >
                                  <div className="relative aspect-video bg-slate-900 overflow-hidden">
                                    <img
                                      src={`https://img.youtube.com/vi/${rel.youtubeId}/hqdefault.jpg`}
                                      alt={rel.title}
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/35 flex items-center justify-center opacity-90 group-hover:bg-black/20 transition">
                                      <div className="w-9 h-9 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-lg">
                                        <Play className="w-4 h-4 fill-current ml-0.5" />
                                      </div>
                                    </div>
                                    <span className="absolute bottom-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded bg-black/80 text-white">
                                      {rel.duration}
                                    </span>
                                    {relWatched && (
                                      <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/90 text-slate-950 flex items-center gap-1">
                                        <CheckCircle2 className="w-3 h-3" /> Selesai
                                      </span>
                                    )}
                                  </div>
                                  <div className="p-3 space-y-1 flex-1">
                                    <span className="text-[10px] font-bold text-purple-300 uppercase">
                                      Modul #{rel.moduleId}
                                    </span>
                                    <p className="text-xs font-bold text-white line-clamp-2 group-hover:text-cyan-300 transition">
                                      {rel.title}
                                    </p>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()
            )}
          </div>
        )}

        {/* ==================== 2B. VIDEO LIBRARY PAGE ==================== */}
        {activeTab === 'videos' && (
          <div className="space-y-6">
            {(() => {
              const activeVideo =
                EDUCATIONAL_VIDEOS.find((v) => v.id === selectedLibraryVideoId) || EDUCATIONAL_VIDEOS[0];
              const isActiveWatched = (user.watchedVideos || []).includes(activeVideo.id);
              const linkedModule = LEARNING_MODULES.find((m) => m.id === activeVideo.moduleId);

              const filteredVideos = EDUCATIONAL_VIDEOS.filter((video) => {
                const matchesSearch =
                  video.title.toLowerCase().includes(videoSearchQuery.toLowerCase()) ||
                  video.description.toLowerCase().includes(videoSearchQuery.toLowerCase()) ||
                  video.topicCategory.toLowerCase().includes(videoSearchQuery.toLowerCase()) ||
                  video.channel.toLowerCase().includes(videoSearchQuery.toLowerCase());

                if (!matchesSearch) return false;
                if (videoTopicFilter === 'ALL') return true;
                if (videoTopicFilter === 'WATCHED') {
                  return (user.watchedVideos || []).includes(video.id);
                }
                return video.moduleId === Number(videoTopicFilter);
              });

              const recommendedVideos = EDUCATIONAL_VIDEOS.filter(
                (v) => v.id !== activeVideo.id && !(user.watchedVideos || []).includes(v.id)
              ).slice(0, 3);

              return (
                <>
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-bold mb-2">
                        <Headphones className="w-3.5 h-3.5" /> Video Learning Mode • Visual & Audio
                      </div>
                      <h1 className="text-2xl md:text-3xl font-extrabold text-white">
                        Video Library Keamanan Digital
                      </h1>
                      <p className="text-slate-400 text-sm mt-1">
                        Pahami ke-11 materi Digital Security melalui video edukasi pilihan. Tandai video selesai untuk meraih +25 XP per video!
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="px-4 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-right">
                        <div className="text-[11px] text-slate-400">Progres Video</div>
                        <div className="text-sm font-extrabold text-purple-300">
                          {(user.watchedVideos || []).length} / {EDUCATIONAL_VIDEOS.length} Selesai
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Active Featured 16:9 Player */}
                  <div className="rounded-3xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                      {/* 16:9 Player Column */}
                      <div className="lg:col-span-8 bg-black flex flex-col justify-center">
                        <div className="relative w-full aspect-video">
                          <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?rel=0`}
                            title={activeVideo.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          />
                        </div>
                      </div>

                      {/* Video Info & Action Column */}
                      <div className="lg:col-span-4 p-6 flex flex-col justify-between bg-gradient-to-b from-slate-900 to-slate-950 border-t lg:border-t-0 lg:border-l border-slate-800 space-y-5">
                        <div className="space-y-3">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2.5 py-1 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold">
                              Modul #{activeVideo.moduleId} • {activeVideo.topicCategory}
                            </span>
                            {isActiveWatched && (
                              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5" /> Selesai
                              </span>
                            )}
                          </div>

                          <h2 className="text-lg md:text-xl font-extrabold text-white leading-snug">
                            {activeVideo.title}
                          </h2>

                          <div className="flex items-center gap-3 text-xs text-slate-400">
                            <span className="flex items-center gap-1 text-slate-300 font-semibold">
                              <Tv className="w-3.5 h-3.5 text-purple-400" /> {activeVideo.channel}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" /> {activeVideo.duration}
                            </span>
                          </div>

                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            {activeVideo.description}
                          </p>
                        </div>

                        <div className="space-y-2.5 pt-3 border-t border-slate-800">
                          <button
                            onClick={() => handleMarkVideoWatched(activeVideo)}
                            disabled={isActiveWatched}
                            className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition ${
                              isActiveWatched
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 cursor-default'
                                : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                            }`}
                          >
                            {isActiveWatched ? (
                              <>
                                <CheckCircle2 className="w-4 h-4" /> Video Selesai Ditonton ✓
                              </>
                            ) : (
                              <>
                                <CheckCircle2 className="w-4 h-4" /> Tandai Sudah Ditonton (+25 XP)
                              </>
                            )}
                          </button>

                          <div className="grid grid-cols-2 gap-2">
                            {linkedModule && (
                              <button
                                onClick={() => handleOpenModule(linkedModule, 'read')}
                                className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-cyan-300 flex items-center justify-center gap-1.5 transition"
                              >
                                <BookOpen className="w-3.5 h-3.5" /> Baca Materinya
                              </button>
                            )}
                            <a
                              href={activeVideo.youtubeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-slate-200 flex items-center justify-center gap-1.5 transition"
                            >
                              <ExternalLink className="w-3.5 h-3.5 text-rose-400" /> Tonton di YouTube
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Search & Topic Filters */}
                  <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-4 sm:p-5 space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="relative flex-1">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={videoSearchQuery}
                          onChange={(e) => setVideoSearchQuery(e.target.value)}
                          placeholder="Cari judul video, topik materi, atau channel..."
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 text-sm text-white placeholder-slate-500 focus:outline-none"
                        />
                      </div>
                      {videoSearchQuery && (
                        <button
                          onClick={() => setVideoSearchQuery('')}
                          className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300"
                        >
                          Reset Pencarian
                        </button>
                      )}
                    </div>

                    {/* Topic Filter Pills */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-1">
                      <button
                        onClick={() => setVideoTopicFilter('ALL')}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${
                          videoTopicFilter === 'ALL'
                            ? 'bg-cyan-500 text-slate-950'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        Semua Topik ({EDUCATIONAL_VIDEOS.length})
                      </button>
                      <button
                        onClick={() => setVideoTopicFilter('WATCHED')}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition flex items-center gap-1 ${
                          videoTopicFilter === 'WATCHED'
                            ? 'bg-emerald-500 text-slate-950'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" /> Sudah Ditonton ({(user.watchedVideos || []).length})
                      </button>
                      {LEARNING_MODULES.map((m) => (
                        <button
                          key={m.id}
                          onClick={() => setVideoTopicFilter(String(m.id))}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${
                            videoTopicFilter === String(m.id)
                              ? 'bg-purple-500 text-white'
                              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                          }`}
                        >
                          #{m.id} {m.title}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Video Cards Grid */}
                  {filteredVideos.length === 0 ? (
                    <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-10 text-center space-y-2">
                      <Video className="w-10 h-10 text-slate-600 mx-auto" />
                      <h3 className="text-base font-bold text-white">Video tidak ditemukan</h3>
                      <p className="text-xs text-slate-400">
                        Coba ubah kata kunci pencarian atau pilih filter "Semua Topik".
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {filteredVideos.map((video) => {
                        const isPlayingVideo = video.id === activeVideo.id;
                        const isWatched = (user.watchedVideos || []).includes(video.id);
                        return (
                          <div
                            key={video.id}
                            className={`rounded-2xl border overflow-hidden flex flex-col justify-between transition-all group ${
                              isPlayingVideo
                                ? 'bg-slate-900 border-purple-500 shadow-lg shadow-purple-500/15'
                                : 'bg-slate-900/70 border-slate-800 hover:border-cyan-500/50'
                            }`}
                          >
                            <div>
                              {/* Thumbnail */}
                              <div
                                onClick={() => {
                                  setSelectedLibraryVideoId(video.id);
                                  window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className="relative aspect-video bg-slate-950 overflow-hidden cursor-pointer"
                              >
                                <img
                                  src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                                  alt={video.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-black/25 to-transparent flex items-center justify-center">
                                  <div
                                    className={`w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-transform group-hover:scale-110 ${
                                      isPlayingVideo
                                        ? 'bg-purple-500 text-white'
                                        : 'bg-cyan-500/95 text-slate-950'
                                    }`}
                                  >
                                    <Play className="w-5 h-5 fill-current ml-0.5" />
                                  </div>
                                </div>

                                <span className="absolute top-3 left-3 text-[11px] font-extrabold px-2.5 py-1 rounded-lg bg-slate-950/85 text-cyan-300 border border-slate-700">
                                  Modul #{video.moduleId}
                                </span>

                                {isWatched && (
                                  <span className="absolute top-3 right-3 text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-500 text-slate-950 flex items-center gap-1 shadow">
                                    <CheckCircle2 className="w-3.5 h-3.5" /> Selesai
                                  </span>
                                )}

                                <span className="absolute bottom-2.5 right-2.5 text-[11px] font-bold px-2 py-0.5 rounded bg-black/80 text-white">
                                  {video.duration}
                                </span>
                              </div>

                              {/* Content */}
                              <div className="p-5 space-y-2">
                                <div className="text-[11px] font-bold text-purple-300">
                                  {video.topicCategory} • {video.channel}
                                </div>
                                <h3 className="text-base font-bold text-white leading-snug group-hover:text-cyan-300 transition">
                                  {video.title}
                                </h3>
                                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                                  {video.description}
                                </p>
                              </div>
                            </div>

                            <div className="px-5 pb-5 pt-2 flex items-center gap-2">
                              <button
                                onClick={() => {
                                  setSelectedLibraryVideoId(video.id);
                                  window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition ${
                                  isPlayingVideo
                                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                                    : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950'
                                }`}
                              >
                                <Play className="w-3.5 h-3.5 fill-current" />
                                {isPlayingVideo ? 'Sedang Diputar' : 'Putar Video'}
                              </button>
                              <button
                                onClick={() => {
                                  const mod = LEARNING_MODULES.find((m) => m.id === video.moduleId);
                                  if (mod) handleOpenModule(mod, 'read');
                                }}
                                title="Baca Materi Modul"
                                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-cyan-300 transition"
                              >
                                <BookOpen className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Recommended Next Videos */}
                  {recommendedVideos.length > 0 && (
                    <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 p-5 sm:p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-base font-bold text-white flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-cyan-400" /> Rekomendasi Video Berikutnya untuk Kamu
                          </h3>
                          <p className="text-xs text-slate-400 mt-0.5">
                            Lanjutkan tontonanmu untuk mengumpulkan lebih banyak XP keamanan siber.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {recommendedVideos.map((rec) => (
                          <button
                            key={rec.id}
                            onClick={() => {
                              setSelectedLibraryVideoId(rec.id);
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 flex items-center gap-3 text-left transition group"
                          >
                            <div className="w-20 h-14 rounded-lg overflow-hidden bg-slate-900 shrink-0 relative">
                              <img
                                src={`https://img.youtube.com/vi/${rec.youtubeId}/hqdefault.jpg`}
                                alt={rec.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <Play className="w-4 h-4 text-white fill-current" />
                              </div>
                            </div>
                            <div className="min-w-0 flex-1">
                              <span className="text-[10px] font-bold text-cyan-400 block">
                                Modul #{rec.moduleId} • +25 XP
                              </span>
                              <p className="text-xs font-bold text-white truncate group-hover:text-cyan-300">
                                {rec.title}
                              </p>
                              <span className="text-[11px] text-slate-400">{rec.duration}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              );
            })()}
          </div>
        )}

        {/* ==================== 3. VISUAL LEARNING PATH ==================== */}
        {activeTab === 'path' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-2xl md:text-3xl font-extrabold text-white">Digital Security Learning Path</h1>
              <p className="text-sm text-slate-400">
                Ikuti tahapan belajar terstruktur dari dasar hingga mahir perlindungan transaksi digital (baca atau tonton video).
              </p>
            </div>

            <div className="relative pl-6 md:pl-8 border-l-2 border-slate-800 space-y-6">
              {LEARNING_MODULES.map((mod) => {
                const isDone = user.completedModules.includes(mod.id);
                const modVideo = EDUCATIONAL_VIDEOS.find((v) => v.moduleId === mod.id);
                const isVideoDone = modVideo && (user.watchedVideos || []).includes(modVideo.id);
                const isNext = !isDone && (mod.id === 1 || user.completedModules.includes(mod.id - 1));
                return (
                  <div
                    key={mod.id}
                    className={`relative rounded-2xl p-5 border transition-all ${
                      isDone
                        ? 'bg-slate-900/80 border-emerald-500/40'
                        : isNext
                        ? 'bg-slate-900 border-cyan-500 shadow-lg shadow-cyan-500/10'
                        : 'bg-slate-900/40 border-slate-800/80'
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold absolute -left-[39px] md:-left-[47px] top-6 border-2 ${
                        isDone
                          ? 'bg-emerald-500 border-emerald-300 text-slate-950'
                          : isNext
                          ? 'bg-cyan-500 border-cyan-200 text-slate-950 animate-pulse'
                          : 'bg-slate-900 border-slate-700 text-slate-400'
                      }`}
                    >
                      {isDone ? '✓' : mod.id}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-bold text-cyan-400">Tahap {mod.id}</span>
                          {isNext && (
                            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                              Rekomendasi Berikutnya
                            </span>
                          )}
                          {isDone && (
                            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                              Baca Selesai
                            </span>
                          )}
                          {isVideoDone && (
                            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
                              Video Selesai
                            </span>
                          )}
                        </div>
                        <h3 className="text-base font-bold text-white mt-1">{mod.title}</h3>
                        <p className="text-xs text-slate-400 mt-1">{mod.summary}</p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => handleOpenModule(mod, 'read')}
                          className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-xs font-bold text-white transition flex items-center gap-1.5"
                        >
                          <BookOpen className="w-3.5 h-3.5" /> Baca
                        </button>
                        <button
                          onClick={() => handleOpenModule(mod, 'video')}
                          className="px-3.5 py-2.5 rounded-xl bg-purple-500/20 hover:bg-purple-500 text-purple-200 hover:text-white border border-purple-500/30 text-xs font-bold transition flex items-center gap-1.5"
                        >
                          <Play className="w-3.5 h-3.5" /> Video
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ==================== 4. CYBER CHALLENGE (REAL-LIFE SCENARIOS) ==================== */}
        {activeTab === 'challenge' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-white">Cyber Challenge: Simulasi Kasus Nyata</h1>
                <p className="text-sm text-slate-400 mt-1">
                  Ambil keputusan terbaik saat menghadapi situasi ancaman digital sehari-hari.
                </p>
              </div>
              <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-purple-300">
                Selesai: {user.completedScenarios.length} / {CYBER_SCENARIOS.length}
              </div>
            </div>

            {/* Scenario Selector Pills */}
            <div className="flex flex-wrap gap-2">
              {CYBER_SCENARIOS.map((sc, idx) => {
                const done = user.completedScenarios.includes(sc.id);
                return (
                  <button
                    key={sc.id}
                    onClick={() => {
                      setScenarioIdx(idx);
                      setSelectedChoice(null);
                    }}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition flex items-center gap-1.5 ${
                      scenarioIdx === idx
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                        : done
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {done && <CheckCircle2 className="w-3.5 h-3.5" />}
                    Kasus #{sc.id}
                  </button>
                );
              })}
            </div>

            {/* Active Scenario Card */}
            {(() => {
              const current = CYBER_SCENARIOS[scenarioIdx];
              return (
                <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 md:p-8 space-y-6 shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      Tingkat: {current.difficulty} • +{current.xp} XP
                    </span>
                    <span className="text-xs text-slate-400">
                      Skenario {scenarioIdx + 1} dari {CYBER_SCENARIOS.length}
                    </span>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-white">{current.title}</h2>

                  <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-slate-200 text-sm md:text-base leading-relaxed">
                    "{current.context}"
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Pilih Tindakanmu:
                    </p>
                    {current.choices.map((ch, idx) => {
                      const isPicked = selectedChoice === idx;
                      let btnStyle = 'bg-slate-800/70 hover:bg-slate-800 border-slate-700 text-slate-200';
                      if (selectedChoice !== null) {
                        if (ch.isCorrect) {
                          btnStyle = 'bg-emerald-500/20 border-emerald-400 text-emerald-200';
                        } else if (isPicked) {
                          btnStyle = 'bg-rose-500/20 border-rose-400 text-rose-200';
                        } else {
                          btnStyle = 'bg-slate-900/50 border-slate-800 text-slate-500';
                        }
                      }
                      return (
                        <button
                          key={idx}
                          disabled={selectedChoice !== null}
                          onClick={() => {
                            setSelectedChoice(idx);
                            if (ch.isCorrect && !user.completedScenarios.includes(current.id)) {
                              setUser((prev) => ({
                                ...prev,
                                completedScenarios: [...prev.completedScenarios, current.id]
                              }));
                              addXP(current.xp, `Menyelesaikan Skenario: ${current.title}`, 'challenge');
                            }
                          }}
                          className={`w-full text-left p-4 rounded-2xl border text-sm font-medium transition-all flex items-start gap-3 ${btnStyle}`}
                        >
                          <span className="w-6 h-6 rounded-lg bg-slate-950/60 flex items-center justify-center text-xs font-bold shrink-0">
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span>{ch.text}</span>
                        </button>
                      );
                    })}
                  </div>

                  {selectedChoice !== null && (
                    <div
                      className={`p-4 rounded-2xl border text-sm flex items-start gap-3 ${
                        current.choices[selectedChoice].isCorrect
                          ? 'bg-emerald-950/50 border-emerald-500/40 text-emerald-200'
                          : 'bg-rose-950/50 border-rose-500/40 text-rose-200'
                      }`}
                    >
                      {current.choices[selectedChoice].isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                      )}
                      <div className="space-y-2">
                        <p className="leading-relaxed">{current.choices[selectedChoice].feedback}</p>
                        {!current.choices[selectedChoice].isCorrect && (
                          <button
                            onClick={() => setSelectedChoice(null)}
                            className="text-xs font-bold underline text-white"
                          >
                            Coba Pilih Lagi
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between pt-2">
                    <button
                      onClick={() => {
                        setScenarioIdx((prev) => (prev > 0 ? prev - 1 : CYBER_SCENARIOS.length - 1));
                        setSelectedChoice(null);
                      }}
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300"
                    >
                      ← Sebelumnya
                    </button>
                    <button
                      onClick={() => {
                        setScenarioIdx((prev) => (prev + 1) % CYBER_SCENARIOS.length);
                        setSelectedChoice(null);
                      }}
                      className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-xs font-bold text-slate-950"
                    >
                      Skenario Berikutnya →
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* ==================== 5. 5 INTERACTIVE MINI GAMES ==================== */}
        {activeTab === 'games' && (
          <div className="space-y-6">
            {!activeGame ? (
              <>
                <div>
                  <h1 className="text-2xl md:text-3xl font-extrabold text-white">5 Mini Games Keamanan Siber</h1>
                  <p className="text-sm text-slate-400 mt-1">
                    Latih ketelitianmu mendeteksi penipuan, menguji kekuatan password, hingga menjaga jejak digital.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[
                    {
                      id: 'phishing',
                      title: '1. Spot the Phishing',
                      desc: 'Analisis pesan masuk dan tentukan apakah pesan tersebut Asli atau jebakan Phishing!',
                      icon: ShieldAlert,
                      color: 'from-rose-500 to-orange-500',
                      best: user.gameHighScores.phishing
                    },
                    {
                      id: 'hackOrSafe',
                      title: '2. Hack or Safe',
                      desc: 'Klasifikasikan kebiasaan digital sehari-hari: apakah Aman atau Rawan Diretas?',
                      icon: ShieldCheck,
                      color: 'from-cyan-500 to-blue-600',
                      best: user.gameHighScores.hackOrSafe
                    },
                    {
                      id: 'password',
                      title: '3. Password Master Lab',
                      desc: 'Uji kekuatan kata sandimu secara real-time dan lihat estimasi waktu pembobolannya.',
                      icon: Key,
                      color: 'from-emerald-500 to-teal-600',
                      best: user.gameHighScores.password
                    },
                    {
                      id: 'detective',
                      title: '4. Cyber Detective',
                      desc: 'Temukan kejanggalan tersembunyi pada URL palsu, izin aplikasi, dan chat pembajak.',
                      icon: Search,
                      color: 'from-purple-500 to-indigo-600',
                      best: user.gameHighScores.detective
                    },
                    {
                      id: 'footprint',
                      title: '5. Digital Footprint Challenge',
                      desc: 'Putuskan postingan mana yang aman diunggah ke media sosial dan mana yang berbahaya.',
                      icon: Footprints,
                      color: 'from-amber-500 to-pink-600',
                      best: user.gameHighScores.footprint
                    }
                  ].map((g) => {
                    const GIcon = g.icon;
                    return (
                      <div
                        key={g.id}
                        className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${g.color} flex items-center justify-center shadow-lg`}>
                              <GIcon className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-800 text-cyan-300">
                              Skor Tertinggi: {g.best}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-white mb-2">{g.title}</h3>
                          <p className="text-xs text-slate-400 leading-relaxed mb-5">{g.desc}</p>
                        </div>
                        <button
                          onClick={() => startMiniGame(g.id)}
                          className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition"
                        >
                          <Play className="w-4 h-4 fill-current" /> Mainkan Sekarang
                        </button>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              /* Active Mini Game Arena */
              <div className="max-w-2xl mx-auto rounded-3xl bg-slate-900 border border-slate-800 p-6 md:p-8 shadow-2xl space-y-6">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setActiveGame(null)}
                    className="text-xs font-bold text-slate-400 hover:text-cyan-400 flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Game
                  </button>
                  {activeGame !== 'password' && (
                    <span className="px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 text-xs font-extrabold">
                      Skor: {gameScore}
                    </span>
                  )}
                </div>

                {/* GAME 1: SPOT THE PHISHING */}
                {activeGame === 'phishing' && (
                  !gameFinished ? (
                    (() => {
                      const card = PHISHING_CARDS[gameStep];
                      const handleGuess = (guessPhishing) => {
                        if (gameFeedback) return;
                        const correct = guessPhishing === card.isPhishing;
                        const nextScore = correct ? gameScore + 20 : gameScore;
                        if (correct) setGameScore(nextScore);
                        setGameFeedback({ correct, text: card.reason });
                        setTimeout(() => {
                          setGameFeedback(null);
                          if (gameStep + 1 < PHISHING_CARDS.length) {
                            setGameStep(gameStep + 1);
                          } else {
                            finishMiniGame('phishing', nextScore, 'Spot the Phishing');
                          }
                        }, 1800);
                      };
                      return (
                        <div className="space-y-5">
                          <div className="flex justify-between text-xs text-slate-400">
                            <span className="font-bold text-white">Spot the Phishing</span>
                            <span>Pesan {gameStep + 1} / {PHISHING_CARDS.length}</span>
                          </div>
                          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                            <div className="text-xs text-cyan-400 font-mono">Dari: {card.sender}</div>
                            <div className="text-base font-bold text-white">{card.subject}</div>
                            <p className="text-sm text-slate-300 pt-2 border-t border-slate-800/80">{card.snippet}</p>
                          </div>
                          {gameFeedback ? (
                            <div className={`p-4 rounded-2xl text-sm font-medium ${gameFeedback.correct ? 'bg-emerald-500/20 text-emerald-200 border border-emerald-500/40' : 'bg-rose-500/20 text-rose-200 border border-rose-500/40'}`}>
                              {gameFeedback.correct ? '✅ Benar! ' : '❌ Kurang Tepat! '} {gameFeedback.text}
                            </div>
                          ) : (
                            <div className="grid grid-cols-2 gap-3">
                              <button
                                onClick={() => handleGuess(false)}
                                className="py-3.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 font-bold text-sm"
                              >
                                ✅ Pesan Aman / Asli
                              </button>
                              <button
                                onClick={() => handleGuess(true)}
                                className="py-3.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-300 font-bold text-sm"
                              >
                                🚨 Jebakan Phishing
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })()
                  ) : (
                    <GameResultView score={gameScore} maxScore={100} onRetry={() => startMiniGame('phishing')} onBack={() => setActiveGame(null)} />
                  )
                )}

                {/* GAME 2: HACK OR SAFE */}
                {activeGame === 'hackOrSafe' && (
                  !gameFinished ? (
                    (() => {
                      const item = HACK_OR_SAFE_ITEMS[gameStep];
                      const handleChoice = (userSaysSafe) => {
                        if (gameFeedback) return;
                        const correct = userSaysSafe === item.safe;
                        const nextScore = correct ? gameScore + 20 : gameScore;
                        if (correct) setGameScore(nextScore);
                        setGameFeedback({ correct, text: item.tip });
                        setTimeout(() => {
                          setGameFeedback(null);
                          if (gameStep + 1 < HACK_OR_SAFE_ITEMS.length) {
                            setGameStep(gameStep + 1);
                          } else {
                            finishMiniGame('hackOrSafe', nextScore, 'Hack or Safe');
                          }
                        }, 1600);
                      };
                      return (
                        <div className="space-y-5">
                          <div className="flex justify-between text-xs text-slate-400">
                            <span className="font-bold text-white">Hack or Safe</span>
                            <span>Situasi {gameStep + 1} / {HACK_OR_SAFE_ITEMS.length}</span>
                          </div>
                          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center text-base md:text-lg font-bold text-white">
                            "{item.text}"
                          </div>
                          {gameFeedback ? (
                            <div className={`p-4 rounded-2xl text-sm ${gameFeedback.correct ? 'bg-emerald-500/20 text-emerald-200' : 'bg-rose-500/20 text-rose-200'}`}>
                              {gameFeedback.correct ? '✅ Tepat! ' : '❌ Salah! '} {gameFeedback.text}
                            </div>
                          ) : (
                            <div className="grid grid-cols-2 gap-3">
                              <button onClick={() => handleChoice(true)} className="py-3.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 font-bold text-sm">
                                🛡️ SAFE (Aman)
                              </button>
                              <button onClick={() => handleChoice(false)} className="py-3.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-bold text-sm">
                                ⚠️ HACK RISK (Berbahaya)
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })()
                  ) : (
                    <GameResultView score={gameScore} maxScore={120} onRetry={() => startMiniGame('hackOrSafe')} onBack={() => setActiveGame(null)} />
                  )
                )}

                {/* GAME 3: PASSWORD MASTER LAB */}
                {activeGame === 'password' && (() => {
                  const evalResult = evaluatePassword(pwTestInput);
                  return (
                    <div className="space-y-5">
                      <div>
                        <h2 className="text-xl font-bold text-white">Password Master Lab</h2>
                        <p className="text-xs text-slate-400 mt-1">
                          Rancang kombinasi password/passphrase terkuat! (Simulasi lokal 100% di browsermu, tidak dikirim ke mana pun).
                        </p>
                      </div>

                      <div className="relative">
                        <input
                          type={showPwTest ? 'text' : 'password'}
                          value={pwTestInput}
                          onChange={(e) => setPwTestInput(e.target.value)}
                          placeholder="Ketik simulasi password di sini..."
                          className="w-full px-4 py-3.5 pr-12 rounded-2xl bg-slate-950 border border-slate-700 focus:border-cyan-400 text-white text-sm focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPwTest(!showPwTest)}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                        >
                          {showPwTest ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-bold">
                          <span className="text-slate-300">Kekuatan: {evalResult.label}</span>
                          <span className="text-cyan-400">Skor: {evalResult.score}/100</span>
                        </div>
                        <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                          <div className={`h-full transition-all duration-300 ${evalResult.color}`} style={{ width: `${evalResult.score}%` }} />
                        </div>
                        <p className="text-xs text-slate-400">
                          Estimasi waktu dibobol brute-force: <span className="text-white font-bold">{evalResult.crackTime}</span>
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {[
                          { ok: evalResult.checks.length, label: 'Minimal 12 Karakter' },
                          { ok: evalResult.checks.upper, label: 'Huruf Kapital (A-Z)' },
                          { ok: evalResult.checks.lower, label: 'Huruf Kecil (a-z)' },
                          { ok: evalResult.checks.number, label: 'Angka (0-9)' },
                          { ok: evalResult.checks.symbol, label: 'Simbol Unik (!@#$)' }
                        ].map((c, idx) => (
                          <div key={idx} className={`p-2.5 rounded-xl border flex items-center gap-2 ${c.ok ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'bg-slate-950 border-slate-800 text-slate-500'}`}>
                            {c.ok ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <XCircle className="w-4 h-4 shrink-0" />}
                            <span>{c.label}</span>
                          </div>
                        ))}
                      </div>

                      {evalResult.score >= 90 && (
                        <button
                          onClick={() => finishMiniGame('password', evalResult.score, 'Password Master Lab')}
                          className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-sm"
                        >
                          Simpan Rekor Password Master & Klaim XP!
                        </button>
                      )}
                    </div>
                  );
                })()}

                {/* GAME 4: CYBER DETECTIVE */}
                {activeGame === 'detective' && (
                  !gameFinished ? (
                    (() => {
                      const clue = DETECTIVE_CLUES[gameStep];
                      const handlePick = (idx) => {
                        if (gameFeedback) return;
                        const correct = idx === clue.answer;
                        const nextScore = correct ? gameScore + 35 : gameScore;
                        if (correct) setGameScore(nextScore);
                        setGameFeedback({ correct, text: clue.options[clue.answer] });
                        setTimeout(() => {
                          setGameFeedback(null);
                          if (gameStep + 1 < DETECTIVE_CLUES.length) {
                            setGameStep(gameStep + 1);
                          } else {
                            finishMiniGame('detective', Math.min(100, nextScore), 'Cyber Detective');
                          }
                        }, 1800);
                      };
                      return (
                        <div className="space-y-5">
                          <div className="flex justify-between text-xs text-slate-400">
                            <span className="font-bold text-white">{clue.caseTitle}</span>
                            <span>Bukti {gameStep + 1} / {DETECTIVE_CLUES.length}</span>
                          </div>
                          <div className="p-4 rounded-2xl bg-slate-950 border border-purple-500/30 font-mono text-xs sm:text-sm text-cyan-300 break-all">
                            {clue.url}
                          </div>
                          <p className="text-sm font-bold text-white">{clue.question}</p>
                          <div className="space-y-2.5">
                            {clue.options.map((opt, idx) => (
                              <button
                                key={idx}
                                onClick={() => handlePick(idx)}
                                className="w-full text-left p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-xs sm:text-sm text-slate-200 transition"
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                          {gameFeedback && (
                            <div className={`p-3.5 rounded-xl text-xs font-semibold ${gameFeedback.correct ? 'bg-emerald-500/20 text-emerald-200' : 'bg-rose-500/20 text-rose-200'}`}>
                              {gameFeedback.correct ? '🔍 Analisis Tepat!' : `❌ Petunjuk Benar: ${gameFeedback.text}`}
                            </div>
                          )}
                        </div>
                      );
                    })()
                  ) : (
                    <GameResultView score={gameScore} maxScore={100} onRetry={() => startMiniGame('detective')} onBack={() => setActiveGame(null)} />
                  )
                )}

                {/* GAME 5: DIGITAL FOOTPRINT CHALLENGE */}
                {activeGame === 'footprint' && (
                  !gameFinished ? (
                    (() => {
                      const post = FOOTPRINT_POSTS[gameStep];
                      const handlePostDecision = (allowPost) => {
                        if (gameFeedback) return;
                        const correct = allowPost === post.safeToPost;
                        const nextScore = correct ? gameScore + 25 : gameScore;
                        if (correct) setGameScore(nextScore);
                        setGameFeedback({ correct, text: post.explanation });
                        setTimeout(() => {
                          setGameFeedback(null);
                          if (gameStep + 1 < FOOTPRINT_POSTS.length) {
                            setGameStep(gameStep + 1);
                          } else {
                            finishMiniGame('footprint', nextScore, 'Digital Footprint Challenge');
                          }
                        }, 1800);
                      };
                      return (
                        <div className="space-y-5">
                          <div className="flex justify-between text-xs text-slate-400">
                            <span className="font-bold text-white">Digital Footprint Challenge</span>
                            <span>Draf Postingan {gameStep + 1} / {FOOTPRINT_POSTS.length}</span>
                          </div>
                          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-sm text-slate-200 leading-relaxed">
                            {post.content}
                          </div>
                          {gameFeedback ? (
                            <div className={`p-4 rounded-2xl text-xs sm:text-sm ${gameFeedback.correct ? 'bg-emerald-500/20 text-emerald-200' : 'bg-rose-500/20 text-rose-200'}`}>
                              {gameFeedback.correct ? '✅ Keputusan Bijak! ' : '⚠️ Hati-hati! '} {gameFeedback.text}
                            </div>
                          ) : (
                            <div className="grid grid-cols-2 gap-3">
                              <button onClick={() => handlePostDecision(true)} className="py-3.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 font-bold text-xs sm:text-sm">
                                🌐 Aman Diposting
                              </button>
                              <button onClick={() => handlePostDecision(false)} className="py-3.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-300 font-bold text-xs sm:text-sm">
                                🗑️ Jangan Posting!
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })()
                  ) : (
                    <GameResultView score={gameScore} maxScore={100} onRetry={() => startMiniGame('footprint')} onBack={() => setActiveGame(null)} />
                  )
                )}
              </div>
            )}
          </div>
        )}

        {/* ==================== 6. PRE/POST KNOWLEDGE TEST ==================== */}
        {activeTab === 'quiz' && (
          <div className="max-w-3xl mx-auto space-y-6">
            {!quizMode ? (
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-extrabold text-white">Pre-Test & Post-Test Keamanan Digital</h1>
                  <p className="text-sm text-slate-400 mt-1">
                    Ukur peningkatan pemahaman keamanan sibermu sebelum dan sesudah mempelajari modul.
                  </p>
                </div>

                {/* Comparison Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/15 text-blue-300">
                        Tahap Awal
                      </span>
                      <span className="text-2xl font-extrabold text-white">
                        {user.preTestScore !== null ? `${user.preTestScore}%` : 'Belum Tes'}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white">Pre-Assessment Test</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Tes diagnostik awal untuk mengukur pengetahuan dasarmu sebelum mempelajari seluruh materi.
                    </p>
                    <button
                      onClick={() => {
                        setQuizMode('pre');
                        setQuizIdx(0);
                        setQuizAnswers({});
                        setQuizCompleted(false);
                      }}
                      className="w-full py-3 rounded-xl bg-slate-800 hover:bg-blue-600 text-white font-bold text-sm transition"
                    >
                      {user.preTestScore !== null ? 'Ulangi Pre-Test' : 'Mulai Pre-Test'}
                    </button>
                  </div>

                  <div className="rounded-2xl bg-slate-900/80 border border-cyan-500/30 p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300">
                        Evaluasi Akhir
                      </span>
                      <span className="text-2xl font-extrabold text-cyan-400">
                        {user.postTestScore !== null ? `${user.postTestScore}%` : 'Belum Tes'}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white">Post-Assessment Test</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Evaluasi akhir setelah membaca modul & menonton video pembelajaran untuk meraih bonus +100 XP!
                    </p>
                    <button
                      onClick={() => {
                        setQuizMode('post');
                        setQuizIdx(0);
                        setQuizAnswers({});
                        setQuizCompleted(false);
                      }}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm transition"
                    >
                      {user.postTestScore !== null ? 'Ulangi Post-Test' : 'Mulai Post-Test'}
                    </button>
                  </div>
                </div>

                {/* Visual Comparison Chart when scores exist */}
                {(user.preTestScore !== null || user.postTestScore !== null) && (
                  <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 space-y-4">
                    <h3 className="text-base font-bold text-white">Grafik Perbandingan Skor Evaluasi</h3>
                    <div className="h-56 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={[
                            { name: 'Pre-Test', skor: user.preTestScore ?? 0 },
                            { name: 'Post-Test', skor: user.postTestScore ?? 0 }
                          ]}
                        >
                          <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
                          <YAxis domain={[0, 100]} stroke="#94a3b8" fontSize={12} />
                          <Tooltip
                            contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff' }}
                          />
                          <Bar dataKey="skor" radius={[10, 10, 0, 0]} barSize={56}>
                            <Cell fill="#3b82f6" />
                            <Cell fill="#06b6d4" />
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                )}
              </div>
            ) : !quizCompleted ? (
              /* Active Quiz Interface */
              (() => {
                const q = ASSESSMENT_QUESTIONS[quizIdx];
                const picked = quizAnswers[q.id];
                return (
                  <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 md:p-8 space-y-6">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold uppercase text-cyan-400">
                        {quizMode === 'pre' ? 'Pre-Assessment' : 'Post-Assessment'} • {q.category}
                      </span>
                      <span className="text-slate-400">
                        Pertanyaan {quizIdx + 1} dari {ASSESSMENT_QUESTIONS.length}
                      </span>
                    </div>

                    <h2 className="text-lg md:text-xl font-bold text-white leading-snug">{q.question}</h2>

                    <div className="space-y-3">
                      {q.options.map((opt, idx) => {
                        let style = 'bg-slate-800/70 hover:bg-slate-800 border-slate-700 text-slate-200';
                        if (picked !== undefined) {
                          if (idx === q.answer) style = 'bg-emerald-500/20 border-emerald-400 text-emerald-200';
                          else if (idx === picked) style = 'bg-rose-500/20 border-rose-400 text-rose-200';
                          else style = 'bg-slate-900/40 border-slate-800 text-slate-500';
                        }
                        return (
                          <button
                            key={idx}
                            disabled={picked !== undefined}
                            onClick={() => setQuizAnswers((prev) => ({ ...prev, [q.id]: idx }))}
                            className={`w-full text-left p-4 rounded-2xl border text-sm font-medium transition ${style}`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {picked !== undefined && (
                      <div className="p-4 rounded-2xl bg-slate-950 border border-cyan-500/30 text-xs sm:text-sm text-slate-300">
                        <span className="font-bold text-cyan-400 block mb-1">Penjelasan:</span>
                        {q.explanation}
                      </div>
                    )}

                    <div className="flex justify-between pt-2">
                      <button
                        onClick={() => setQuizMode(null)}
                        className="px-4 py-2.5 rounded-xl bg-slate-800 text-xs font-bold text-slate-300"
                      >
                        Batal
                      </button>
                      {picked !== undefined && (
                        <button
                          onClick={() => {
                            if (quizIdx + 1 < ASSESSMENT_QUESTIONS.length) {
                              setQuizIdx(quizIdx + 1);
                            } else {
                              const correctCount = ASSESSMENT_QUESTIONS.filter(
                                (item) => quizAnswers[item.id] === item.answer
                              ).length;
                              const pct = Math.round((correctCount / ASSESSMENT_QUESTIONS.length) * 100);
                              setUser((prev) => ({
                                ...prev,
                                preTestScore: quizMode === 'pre' ? pct : prev.preTestScore,
                                postTestScore: quizMode === 'post' ? pct : prev.postTestScore
                              }));
                              addXP(quizMode === 'post' ? 100 : 40, `Selesai ${quizMode === 'pre' ? 'Pre-Test' : 'Post-Test'} (${pct}%)`, 'quiz');
                              setQuizCompleted(true);
                            }
                          }}
                          className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm"
                        >
                          {quizIdx + 1 < ASSESSMENT_QUESTIONS.length ? 'Soal Berikutnya →' : 'Lihat Hasil Akhir'}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })()
            ) : (
              /* Quiz Completed Summary */
              (() => {
                const finalPct = quizMode === 'pre' ? user.preTestScore : user.postTestScore;
                return (
                  <div className="rounded-3xl bg-slate-900 border border-cyan-500/40 p-8 text-center space-y-5">
                    <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center mx-auto">
                      <Award className="w-9 h-9" />
                    </div>
                    <h2 className="text-2xl font-extrabold text-white">
                      Hasil {quizMode === 'pre' ? 'Pre-Assessment' : 'Post-Assessment'}
                    </h2>
                    <div className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {finalPct}%
                    </div>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      {finalPct >= 80
                        ? 'Luar biasa! Pemahaman keamanan digitalmu sudah sangat matang.'
                        : 'Bagus! Terus pelajari modul & video pembelajaran untuk meningkatkan ketahanan sibermu.'}
                    </p>
                    <button
                      onClick={() => setQuizMode(null)}
                      className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm"
                    >
                      Kembali ke Ringkasan Tes
                    </button>
                  </div>
                );
              })()
            )}
          </div>
        )}

        {/* ==================== 7. REAL-DATA LEADERBOARD ==================== */}
        {activeTab === 'leaderboard' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white">Papan Peringkat (Leaderboard)</h1>
              <p className="text-sm text-slate-400 mt-1">
                Menampilkan 100% progres asli pengguna yang tersimpan secara lokal di perangkat ini tanpa akun fiktif.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-xl">
              <div className="p-5 bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-purple-500/15 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 font-extrabold">
                    #1
                  </div>
                  <div className="text-2xl">{user.avatar}</div>
                  <div>
                    <div className="font-bold text-white flex items-center gap-2">
                      {user.name}
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-bold">
                        Kamu
                      </span>
                    </div>
                    <div className="text-xs text-slate-400">
                      {currentBadge.icon} {currentBadge.name} • {user.completedModules.length} Modul • {(user.watchedVideos || []).length} Video
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-black text-cyan-400">{user.xp} XP</div>
                  <div className="text-[11px] text-slate-400">Skor Aktif</div>
                </div>
              </div>

              <div className="p-8 text-center space-y-2">
                <Trophy className="w-10 h-10 text-slate-600 mx-auto" />
                <p className="text-sm font-semibold text-slate-300">
                  Belum ada peserta lain di sesi perangkat ini.
                </p>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Sesuai standar integritas data, platform ini tidak menampilkan nama pengguna fiktif atau dummy. Terus kumpulkan XP dari modul, video, dan mini games!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== 8. PERSONAL PROFILE & ACHIEVEMENTS ==================== */}
        {activeTab === 'profile' && (
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Profile Banner */}
            <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/70 to-slate-900 border border-slate-800 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-4xl shadow-xl">
                  {user.avatar}
                </div>
                <div>
                  {editingName ? (
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                        maxLength={24}
                        className="px-3 py-1.5 rounded-xl bg-slate-950 border border-cyan-500 text-white font-bold text-lg focus:outline-none"
                      />
                      <button
                        onClick={() => {
                          if (nameInput.trim()) {
                            setUser((prev) => ({ ...prev, name: nameInput.trim() }));
                          }
                          setEditingName(false);
                        }}
                        className="px-3 py-1.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
                      >
                        Simpan
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center sm:justify-start gap-2">
                      <h1 className="text-2xl font-extrabold text-white">{user.name}</h1>
                      <button
                        onClick={() => {
                          setNameInput(user.name);
                          setEditingName(true);
                        }}
                        className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                      >
                        Ubah Nama
                      </button>
                    </div>
                  )}
                  <p className="text-sm text-cyan-400 font-semibold mt-1">
                    {currentBadge.icon} {currentBadge.name} • {user.xp} Total XP
                  </p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
                    {['🛡️', '🕵️', '🔐', '🦊', '🚀', '👾'].map((emoji, idx) => (
                      <button
                        key={idx}
                        onClick={() => setUser((prev) => ({ ...prev, avatar: emoji }))}
                        className={`w-8 h-8 rounded-lg flex items-center justify-center text-base border ${
                          user.avatar === emoji
                            ? 'bg-cyan-500/20 border-cyan-400'
                            : 'bg-slate-900 border-slate-800 hover:border-slate-600'
                        }`}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2.5 text-center w-full md:w-auto">
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="text-lg font-extrabold text-cyan-400">{user.completedModules.length}/11</div>
                  <div className="text-[11px] text-slate-400">Modul</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="text-lg font-extrabold text-rose-400">{(user.watchedVideos || []).length}/11</div>
                  <div className="text-[11px] text-slate-400">Video</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="text-lg font-extrabold text-purple-400">{user.completedScenarios.length}/6</div>
                  <div className="text-[11px] text-slate-400">Skenario</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="text-lg font-extrabold text-emerald-400">{user.xp}</div>
                  <div className="text-[11px] text-slate-400">Total XP</div>
                </div>
              </div>
            </div>

            {/* Skill Radar & Activity Log */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6">
                <h3 className="text-base font-bold text-white mb-2">Radar Kompetensi Keamanan Digital</h3>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={skillChartData}>
                      <PolarGrid stroke="#1e293b" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                      <Radar name="Skill" dataKey="score" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.35} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-4">Riwayat Aktivitas & XP Terbaru</h3>
                  {user.history.length === 0 ? (
                    <p className="text-xs text-slate-500 py-8 text-center">
                      Belum ada aktivitas tercatat. Mulai baca modul, tonton video, atau mainkan mini game!
                    </p>
                  ) : (
                    <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                      {user.history.map((h) => (
                        <div key={h.id} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs">
                          <span className="text-slate-200 font-medium truncate pr-2">{h.title}</span>
                          <span className="text-cyan-400 font-bold shrink-0">+{h.xp} XP</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800 flex justify-end">
                  <button
                    onClick={() => {
                      localStorage.removeItem('cyberguard_user_v1');
                      setUser(INITIAL_USER_STATE);
                    }}
                    className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1.5 font-semibold"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Reset Semua Progres Lokal
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-[#050914] py-6 text-center text-xs text-slate-500">
        <p>DIGITAL SECURITY — Learn, Explore & Protect • Platform Edukasi Keamanan Siber Pelajar Indonesia</p>
      </footer>
    </div>
  );
}

// ============================================================================
// HELPER COMPONENT: MINI GAME RESULT VIEW
// ============================================================================
function GameResultView({ score, maxScore, onRetry, onBack }) {
  return (
    <div className="text-center py-6 space-y-4">
      <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center mx-auto">
        <Trophy className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-extrabold text-white">Permainan Selesai!</h3>
      <div className="text-4xl font-black text-cyan-400">
        {score} <span className="text-base text-slate-400 font-semibold">/ {maxScore}</span>
      </div>
      <p className="text-xs text-slate-400">XP telah otomatis ditambahkan ke profil belajarmu.</p>
      <div className="flex justify-center gap-3 pt-2">
        <button onClick={onRetry} className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs">
          Main Lagi
        </button>
        <button onClick={onBack} className="px-5 py-2.5 rounded-xl bg-slate-800 text-white font-bold text-xs">
          Pilih Game Lain
        </button>
      </div>
    </div>
  );
}