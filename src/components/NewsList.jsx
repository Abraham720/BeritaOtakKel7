// NewsList.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NewsCard from "../components/Card"

export const allNews = [
  {
    id: 1,
    title: "Catur Indonesia Target Empat Emas di SEA Games 2025",
    content: "Catur Indonesia memasang target empat medali emas SEA Games 2025 di Bangkok, Thailand.",
    date: "Minggu-16-03-2025",
    category: "catur",
    image: "https://akcdn.detik.net.id/community/media/visual/2021/03/17/ilustrasi-catur-1.jpeg?w=700&q=90",
    description: <p>Salah satunya mereka percaya diri merebut dua emas dari nomor tradisional tuan rumah. Sekretaris Jenderal Pengurus Besar Persatuan Catur Seluruh Indonesia (PB Percasi) Henry Hendratno yang menyampaikan target tersebut.
      <br /><br />"Kami target empat medali emas. Dua emas diharapkan dari catur internasional dan regional salah satunya nomor catur cepat. Sedangkan dua lainnya dari nomor catur tradisional milik tuan rumah," kata Henry saat ditemui di Wisma Kemenpora, Senayan, Minggu (16/3/2025).
      <br /><br />Cabor catur masuk dalam satu dari 50 cabang olahraga dan tiga ekshibisi yang dipertandingkan di Bangkok, Thailand. Catur akan mempertandingkan delapan nomor, yang empat di antaranya merupakan catur tradisional milik tuan rumah.
      <br /><br />Namun, guna memastikan tim catur Indonesia mampu mewujudkan target tersebut, Pengurus Besar Persatuan Catur Seluruh Indonesia (PB Percasi) akan mengirim atlet-atletnya mengikuti uji coba di Thailand.
      <br /><br />Sehubungan rencana uji coba tersebut, PB Percasi masih menunggu review lanjutan yang akan dilakukan Kemenpora pada April nanti.Sebab, Pelatnas catur saat ini terhenti sementara karena dampak efisiensi anggaran. PB Percasi sejatinya sudah melakukan Pelatnas sejak November 2024 namun terhenti pada 31 Januari 2025. Menurut rencana, Pelatnas akan dilanjutkan pada bulan depan.Adapun jumlah awal atlet yang dipelatnaskan totalnya 16 atlet terdiri dari delapan atlet putra dan delapan atlet putri dengan jumlah anggaran Rp 9 miliar.
      <br /><br />Catur Indonesia terakhir kali tampil di SEA Games 2021. Saat itu, mereka mempersembahkan tiga medali emas, empat medali perak, dan empat medali perunggu.
    </p>
  },
  {
    id: 2,
    title: "Jadi Tuan Rumah, Indonesia Targetkan 2 Emas di Piala Asia Bridge 2022",
    content: "Piala Asia Bridge 2022 akan berlangsung di Jakarta pada 19 sampai 25 Oktober 2022. Indonesia membidik dua medali emas.",
    date: "20-10-2022",
    category: "bridge",
    image: "https://cdn0-production-images-kly.akamaized.net/QXlEVHXTVOPPoMINgVl6uWVxnec=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4197414/original/062038100_1666220056-IMG_20221019_174301.jpg",
    description: <p> Indonesia dipercaya menjadi tuan rumah Piala Asia Bridge 2022 atau Bridge Championship Asia Cup 2022. Ajang ini berlangsung di Jakarta pada 19 sampai 25 Oktober 2022. Sebagai tuan rumah, Pengurus Besar Gabungan Bridge Seluruh Indonesia (PB GABSI) menargetkan dua medali emas.
      <br /><br />Piala Asia Bridge 2022 diikuti 11 negara yakni Australia, Bangladesh, Hong Kong, Chinese Taipei, India, Jepang, Korea Selatan, Selandia Baru, Singapura, Thailand dan Indonesia. Ajang ini berlangsung di Hotel Sultan, Jakarta Pusat. 11 negara peserta Piala Asia Bridge 2022 ini akan mengikuti empat nomor tim dan pasangan. Keempat nomor tersebut adalah putra, putri, campuran dan senior.
      <br /><br />Ketum PB GABSI Miranda S. Goeltom menyatakan Indonesia membidik dua medali emas dari tim putri dan tim campuran yang menjadi nomor unggulan tuan rumah.
      <br /><br />"Harapan kita akan menggondol medali, kalau bisa medali emas," kata Miranda dalam upacara pembukaan ajang yang digelar empat tahunan itu di Jakarta, Rabu (19/10/2022).
      <br /><br />Miranda menargetkan dua emas setelah melihat keberhasilan Indonesia dalam Asia Pacific Federation Cup, yang digelar Desember di mana tim Merah Putih berhasil menggondol medali emas untuk nomor putri dan campuran.
    </p>
  },
  {
    id: 3,
    title: "RRQ vs EVOS: Hasil Derbi Klasik sepanjang masa di MPL ID",
    content: "RRQ vs EVOS Legends selalu menarik perhatian pencinta MLBB dunia..",
    date: "10-05-2025",
    category: "esport",
    image: "https://cdn.oneesports.id/cdn-data/sites/2/2022/03/Mobile-Legends_RRQ-Hoshi_EVOS-Legends_El-Clasico-2.jpeg",
    description: <p>RRQ vs EVOS Legends adalah duel bersejarah di scene MLBB, terutama MPL ID. Rivalitas kedua tim begitu kental sejak season 1 sampai sekarang.
    Persaingan dua organisasi terbesar esports di Indonesia itu pada scene Mobile Legends memang panas. Keduanya bahkan aktif bermain di liga tertinggi selama sembilan musim beruntun.
    <br /><br />Hasil yang didapati pun beragam. Ada masa di mana RRQ lebih dominan, juga ada momen saat EVOS Legends lebih bisa menguasai pertandingan.
    <br /><br />Panasnya duel kedua tim, membuat pertandingan antar keduanya disebut El Clasico atau sekarang diubah menjadi Derbi Klasik. Bahkan basis fans kedua tim yang terbesar di Indonesia, tak jarang melakukan perdebatan online selaiknya rival.
    Kedua tim baru saja berjumpa untuk pertama kalinya di MPL ID S13. Pada seri ini, RRQ Hoshi menang tipis 2-1.
    <br /><br />Hasil Derbi Klasik RRQ vs EVOS Legends di MPL ID TERBARU
    <br /><br />MPL ID S15
    <br />Regular season: RRQ Hoshi 2-1 Evos Glory
    <br />Regular season: EVOS Glory 0-2 RRQ Hoshi
    </p>
  },
  {
    id: 4,
    title: "Shafira Devi senang bisa kunci tiket Piala Dunia Catur",
    content: "Pecatur muda Indonesia Shafira Devi Harfesa senang bisa mengamankan tiket Piala Dunia Catur 2025.",
    date: "Sabtu 10-04-2025",
    category: "catur",
    image: "https://img.antaranews.com/cache/1200x800/2025/05/10/IMG-20250510-WA0080.jpg.webp",
    description: <p>Pecatur asal Sleman di Yogyakarta ini menyegel tiket Piala Dunia setelah menjuarai Asian Zone 3.3 Chess Championship 2025 di Ulaanbaatar, Mongolia pada 22 April-3 Mei.
      <br /><br />"Saya sendiri sih senang dan bangga ya sama diri saya sendiri," kata Shafira Devi kepada pewarta di Jakarta, Sabtu.
      <br /><br />Meski berstatus non unggulan, Shafira tampil garang dengan membungkam wakil Hong Kong, Malaysia, Filipina, Singapura, Vietnam, dan Mongolia.
      Pecatur berusia 16 tahun itu mengaku sangat tegang ketika persaingan mencapai babak terakhir karena lewat kemenangan di babak ini yang akan menentukannya lolos ke Piala Dunia.
      <br /><br />"Di babak terakhir sih (paling menegangkan) karena babak terakhir itu benar-benar kayak penentuan untuk saya jadi juara," ungkap pecatur Sekolah Catur Utut Adianto tersebut.
      <br /><br />Torehan manis dari Shafira membuatnya digadang-gadang sebagai salah satu tonggak generasi pecatur baru Indonesia.
      Ketua Umum Pengurus Besar Persatuan Catur Seluruh Indonesia (PB Percasi) Utut Adianto menilai Shafira mempunyai potensi menjadi pecatur kelas dunia.
      Shafira menjadi pecatur perempuan ketiga Indonesia yang menembus Piala Dunia Catur setelah Irene Kharisma Sukandar dan Medina Warda Aulia.
    </p>
  },
  {
    id: 5,
    title: "Jadwal FFWS SEA 2025 Spring, format dan tim peserta",
    content: "Bidik, tembak, JUARA!",
    date: "22-03-2025",
    category: "esport",
    image: "https://cdn.oneesports.id/cdn-data/sites/2/2025/04/FreeFire_FFWS_SEA_Spring_2025.png",
    description: <p>Garena resmi mengumumkan gelaran Free Fire World Series Southeast Asia (FFWS SEA) 2025 Spring, yang akan berlangsung mulai 25 April hingga 14 Juni 2025.
      <br /><br />Kompetisi esports Free Fire kasta tertinggi di region Asia Tenggara ini akan mempertemukan 18 tim terbaik dari empat negara, termasuk lima wakil Indonesia yang berjuang memperebutkan total hadiah US$375.000.
      <br /><br />Jadwal FFWS SEA 2025 Spring dan lokasi
      FFWS SEA 2025 Spring akan dibagi menjadi dua babak utama:
      <br /><br />Babak Knockout (Hybrid) | 25 April – 1 Juni 2025
      <br />Fase 1: 25 April – 11 Mei 2025
      <br />Fase 2: 16 Mei – 25 Mei 2025
      <br />Play-in: 30 Mei – 1 Juni 2025
      <br /><br />Babak Final | 13-14 Juni 2025
      Bertempat di National Convention Center, Hanoi, Vietnam
      <br /><br />Wakil Indonesia siap berjaya Indonesia mengirimkan lima tim terbaiknya yaitu:
      <br />1.RRQ Kazu
      <br />2.ONIC Olympus
      <br />3.EVOS Divine
      <br />4.Bigetron Esports
      <br />5.Vesakha Esports
    </p>
  },
  {
    id: 6,
    title: "Timnas Bridge Indonesia  Menuju The 25th APBF Youth Championships 2025 ",
    content: "Timnas Bridge Indonesia meraih hasil gemilang pada The 25th APBF Youth Championships 2025 yang diselenggarakan di Ayutthaya, Thailand, pada 1–6 Mei 2025.",
    date: "30-04-2025",
    category: "bridge",
    image: "https://www.satumejanews.id/wp-content/uploads/2025/05/bridge.jpg",
    description: <p>Hari ini Rabu 30 April 2025, Timnas Bridge Junior U31 dan U26 Indonesia berangkat menuju Bangkok untuk mengikuti  The 25th APBF Youth Championships 2025  pada tanggal 1-6 Mei 2025 The Cavalli Casa Resort di Ayutthaya, Thailand.
      <br /><br />Sebenarnya ada 3 tim yang mewakili Indonesia pada event ini, tapi tim Indonesia U16 telah berangkat lebih dahulu. Tim U16 terdiri dari 3 pasangan yang berasal dari 3 kota berbeda. Pasangan Randy Arifin dan David Utomo dari Samarinda/Balikpapan telah berangkat lebih dahulu pada tanggal 28/4 langsung dari Balikpapan via Singapura bersama Team Manager/NPC : Oktavianus H. Batara dan official Ester D. Soriton dan Hendrik Lapian. Empat pemain lainnya Lionel Joshua, Steven De Nathanael dari Purwokerto  dan . Eufrosiana Sapphire Radiant dan Excel Suryanegara dari Sidoardjo serta pelatih Raf Radiant Agung dan official Tjatur Indrawan berangkat dari Jakarta tanggal 29/4.
      <br /><br />Dua tim yang berangkat hari ini adalah : Tim U26 Open : Team Manager : Dr.Eng. Nenen R. Djauhaari ep. Sastramihardja,  Pelatih : Very Pangkerego, NPC : Tonny P Sastramihardja.
      <br /><br />Atlet : 1. Amanda Bagus Taruna  2. Khansa Satria Ramadhan 3. Aditya Riswan Imawan  4. Diana Aulia Rahma 5. Muhammad Amman Murtaqib  6. Annisa Fathimah Azzahra.
      <br />Tim U31 : Team Manager : Dr.Eng. Nenen R. Djauhaari ep. Sastramihardja, Pelatih : Very Pangkerego, NPC : Tonny P Sastramihardja.
      <br />Atlet : 1. Rachma Shaumi  2. Dewita Sonya Tarabunga  3. Mohammad Shahbana Satriawan  4. Stefanus Endras Wijayanto 5. Della Ayu Nobira  6. Desy Noervita Rahayu.
      <br /><br />The 25th APBF Youth Championships 2025 di The Cavalli Casa Resort di Ayutthaya, Thailand akan diawali dengan nomor Open Pair pada tanggal 1 Mei 2025. Pada nomor ini tidak ada kategori usia semua bertanding bersama. Indonesia sudah mendaftarkan 3 pasangan U16 dan 2 pasangan U31 dan 1 pasangan dari DKI Jakarta Gabriela Watupongoh-Dafa dari Jakarta yang khusus dating untuk mengikuti nomor pasangan.
      <br /><br />Namun untuk dua pasangan dari U31 menurut pelatihnya Very Pangkerego bisa batal bertanding jika mereka nanti malam tiba di tempat pertandingan sudah diatas jam 10 malam. Hal ini memungkinkan karena mereka baru terbang nanti pukul 14.10 dari Jakarta.
    </p>
  },
  {
    id: 7,
    title: "376 Pecatur Ramaikan JAPFA FIDE Rated Chess 2025",
    content: "SEBANYAK 376 atlet ikut berkompetisi pada turnamen catur bertajuk JAPFA FIDE Rated Chess Tournamet 2025.",
    date: "11-05-2025",
    category: "catur",
    image: "https://mediaindonesia.gumlet.io/news/2025/05/11/1746928570_c6b46c96ded1fda9c5d1.png?w=700&dpr=1",
    description: <p>  Event yang berlangsung mulai 10-15 Mei di Wisma Serbaguna Senayan, Jakarta, itu memperlombakan dua kategori, yaitu Open dan Challenger dengan permainan sembilan babak.
      Para peserta berasal dari 28 provinsi, ditambah delapan negara. Selain tuan rumah Indonesia, juga ada pecatur dari Italia, Australia, Uzbekistan, Singapura, Filipina, India, Belgia dan Sierra Leone.
      <br /><br />Sejumlah pecatur nasional turut berpartisipasi di ajang ini, antara lain FM Satria Duta Cahaya, IM Nayaka Budhidarma, IM Mohamad Ervan, IM Arif Abdul Hafiz, FM Zacky Dhia Ulhaq, IM Anjas Novita. Termasuk, pecatur muda yang baru saja memperoleh tiket Piala Dunia Catur 2025, Shafira Devi Herfesa.
      <br /><br />Ajang JAPFA FIDE Rated Chess Tour Tournamet kali ini dibuka secara resmi oleh Menpora Dito Ariotedjo, Sabtu (10/5).
      <br /><br />Pada kesempatan ini, turut hadir adalah Ketua Umum PB Percasi GM Utut Adianto dan Wakil Ketua Umum KONI Pusat Tursandi Alwi dan Direktur  Corporate Affairs PT JAPFA Comfeed Indo nesia, Rahmat Indrajaya.
      <br /><br />Utut Adianto mengatakan, Percasi tak akan berhenti memberikan kesempatan kepada para atlet untuk terus berkembang bahkan mencapai prestasi Internasional.
      <br /><br />Untuk JAPFA Chess FIDE Rated, menurut Rahmat Indrajaya, merupakan penyelenggaraan edisi yang keempat.
      Dari turnamen ini, salah satu tujuannya adalah meningkatkan elorating para pemain yang saat ini sedang berkompetisi.
    </p>
  },
  {
    id: 8,
    title: "International Bridge Tournament Siliwangi Cup 2025, Brigjen TNI Aminudin Harapkan Cabor Ini Dapat Menyentuh Kawula Muda Untuk Kedepannya",
    content: "International Bridge Tournament Siliwangi Cup 2025, diadakan di Telkom Convention Centre di Jalan Gegerkalong, Kota Bandung pada Kamis, 7 Februari 2025.",
    date: "",
    category: "bridge",
    image: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1641543921/rv1u7ee3exfknc5pd3t2.jpg",
    description: <p>Ketua Umum Gabungan Bridge Seluruh Indonesia (Gabsi) Jawa Barat Brigadir Jenderal TNI Aminudin menyampaikan “Agar cabang olah raga ini dapat menyentuh kawula muda dan juga melaksanakan kegiatan ini serta tertarik akan olah raga bridge ini, ini dikarenakan cabang ini sudah bukan lagi level nasional tapi sudah level internasional”. Ujarnya. Ini terlihat dari sekian banyaknya peserta lebih banyak diikuti oleh para senior.
      <br /><br />Ketua Umum Gabungan Bridge Seluruh Indonesia (Gabsi) Jawa Barat Brigadir Jenderal TNI Aminudin juga menyampaikan selain Indonesia, ada beberapa negara lain yang hadir. Di antaranya Inggris, Malaysia, Singapura dan Tiongkok.
      <br /><br />Turnamen internasional olahraga bridge yang diadakan Kodam III/Siliwangi ini, dengan nama Siliwangi Cup ini pun bertujuan memperkenalkan olahraga tersebut.
      <br /><br />“Kami juga membuka beberapa kelas dalam turnamen ini semisal senior open, tim putri, perorangan dan tim,” Ujarnya.
      <br /><br />“Sementara pertandingan diikuti 28 tim, dan diadakan selama tiga hari,” kata Aminudin di lokasi turnamen yang berada di Telkom Convention Centre.
      <br /><br />Lima Negara mengikuti Turnamen Bridge Internasional ini, dan Gabsi Jabar Berharap di PON Nanti bisa Hadirkan Emas untuk cabang olah raga ini.
    </p>
  },
  {
    id: 9,
    title: "Indonesia jadi tuan rumah, 2025 PMSL SEA Summer di Jakarta!",
    content: "Teka-teki tuan rumah 2025 PMSL SEA Summer terungkap.",
    date: "25-03-2025",
    category: "esport",
    image: "https://cdn.oneesports.id/cdn-data/sites/2/2025/03/PUBGM_PMSLSEASummber_2025-1024x576.jpg",
    description: <p>Jakarta resmi menjadi tuan rumah 2025 PUBG MOBILE Super League – Southeast Asia (PMSL SEA) Summer. Keputusan ini diharapkan dapat semakin memperkuat ekosistem esports Indonesia dan membuktikan daya saing Indonesia di kancah global.
      <br /><br />Setelah sukses menggelar edisi Spring di Malaysia, banyak penggemar bertanya-tanya mengenai negara yang akan menjadi tuan rumah untuk edisi Summer. Jawaban akhirnya terungkap pada Minggu, 23 Maret 2025, dalam perayaan ulang tahun ke-7 PUBG MOBILE yang digelar di Mal Taman Anggrek, Jakarta.
      <br /><br />Pada acara tersebut, Agung Chaniago, selaku Country Manager Level Infinite Indonesia, secara resmi mengumumkan bahwa Jakarta akan menjadi tuan rumah 2025 PMSL SEA Summer.
      <br /><br />“Kami ingin mengumumkan bahwa PMSL SEA akan kembali digelar di Indonesia. Tepatnya di Jakarta, jadi dinantikan saja,” ujar Agung Chaniago.
      <br /><br />Dukungan dari pemerintah dan PB ESI :
      Keputusan ini mendapat sambutan positif dari berbagai pihak, termasuk Wakil Menteri Ekonomi Kreatif Indonesia, Irene Umar. Ia menyampaikan optimisme terhadap perkembangan esports di Indonesia serta memberikan dukungan penuh untuk penyelenggaraan PMSL SEA Summer di Jakarta.
      <br /><br />“Dari Ekraf, kita ingin Indonesia menjadi esports center di Asia. Banyak yang melihat Indonesia sebagai negara dengan 281 juta penduduk dan pasar yang besar, tetapi lebih dari itu, kita memiliki banyak pemain top yang mampu bersaing di tingkat dunia. Saat Indonesia menjadi tuan rumah kejuaraan dunia, harapan saya adalah kita bisa meraih posisi juara pertama dan membuktikan kapasitas kita sebagai negara esports yang kuat,” ujar Irene Umar.
      <br /><br />Ia juga menambahkan bahwa pemerintah siap berkolaborasi dengan berbagai pihak untuk memperkuat industri game dan esports nasional. “Selamat ulang tahun PUBG MOBILE, mari kita berkolaborasi untuk memajukan industri game Indonesia. Kita menjadi raja di negara kita sendiri, dan merajalela di seluruh dunia!” tegasnya.
      <br /><br />Selain itu, PB ESI (Pengurus Besar Esports Indonesia) juga turut memberikan apresiasi terhadap terpilihnya Jakarta sebagai tuan rumah PMSL SEA Summer 2025. Richard Permana, selaku Wakil Ketua Bidang Pembinaan dan Prestasi PB ESI, mengapresiasi kontribusi PUBG MOBILE dalam pengembangan esports di Indonesia.
    </p>
  },
   {
    id: 10,
    title: "Pecatur Indonesia Ikuti Asian Individual Chess Championships 2025: Perebutkan Tiket ke Piala Dunia!",
    content: "Sebanyak 11 pecatur Indonesia resmi bertanding di Asian Individual Chess Championships 2025, yang digelar mulai 7 hingga 15 Mei di Danat Hotel & Resorts, Al Ain, Uni Emirat Arab.",
    date: "07-05-2025",
    category: "catur",
    image: "https://images.chesscomfiles.com/uploads/v1/news/1660712.69bd40ef.668x375o.75a12410c7a5.png",
    description: <p>Kejuaraan ini merupakan salah satu kompetisi catur paling prestisius di Asia, dengan lebih dari 250 peserta dari sekitar 33 negara yang ikut berpartisipasi.
      <br /><br />Turnamen ini bukan sekadar ajang perebutan gelar juara Asia, tetapi juga menjadi salah satu jalur kualifikasi menuju Piala Dunia FIDE 2025. Sepuluh pemain terbaik dari kategori Terbuka serta dua pemain teratas dari kategori Wanita akan memperoleh tiket ke kejuaraan dunia tersebut.
      <br /><br />Sebelumnya, Indonesia telah memastikan satu tempat di Piala Dunia Wanita FIDE 2025 melalui keberhasilan Shafira Devi Herfesa yang tampil sebagai juara di kategori Wanita Asian Zone 3.3. Melalui keikutsertaan di turnamen ini, diharapkan kita bisa menambah jumlah wakil Indonesia yang lolos ke Piala Dunia FIDE 2025.
      <br /><br />Asian Individual Chess Championships 2025 menggunakan sistem Swiss 9 babak, dengan kontrol waktu 90 menit untuk 40 langkah pertama, dilanjutkan 30 menit hingga akhir permainan, serta increment 30 detik per langkah sejak langkah pertama. Total hadiah yang diperebutkan mencapai $80.000.
      <br /><br />Turnamen tahun ini menjadi semakin kompetitif dengan kehadiran sejumlah pecatur papan atas. Di kategori Terbuka, hadir para unggulan seperti GM Nihal Sarin (2693), GM Amin Tabatabaei (2670), dan GM Nodirbek Yakubboev (2665). Sementara di kategori Wanita, persaingan juga ketat dengan kehadiran IM Leya Garifullina (2467), GM Valentina Gunina (2425), serta GM Olga Girya (2400) sebagai lawan tangguh yang patut diwaspadai.
    </p>
  },
   {
    id: 11,
    title: "Indonesia ikut turnamen bridge dunia di Polandia",
    content: "Dua pasang atlet bridge Indonesia mengikuti Turnamen Bridge Dunia 2016 di Wroclaw, Polandia yang berlangsung dari tanggal 11 hingga 17 September 2016.",
    date: "11-09-2016",
    category: "bridge",
    image: "https://img.jakpost.net/c/2019/10/10/2019_10_10_80631_1570683988._large.jpg",
    description: <p>Pasangan putra Bert Toar Polii dan Hartono, dan pasangan putri Yessi Grasella dan Vila Rosa akan berhadapan dengan tim dari sekitar 65 negara lainnya, demikian Sekretaris Tiga Pensosbud KBRI Warsawa Jorrie Andrean kepada Antara, Minggu.
      <br /><br />"Saya bangga adanya perwakilan Indonesia di kejuaraan bridge ini, yang membuktikan Indonesia merupakan bangsa maju, sejajar dengan negara maju lainnya," ujar Dubes RI untuk Polandia, Peter Frans Gontha, saat menyambut tim Indonesia di Warsawa.
      <br /><br />Dubes Gontha menekankan agar tim Indonesia memiliki target menjadi juara dunia, sehingga dapat mengharumkan nama bangsa.Dalam video call, tokoh bridge Indonesia Roy Tirtadji mengatakan, "Tim Indonesia harus menjadi juara pertama."
      <br /><br />"Turnamen Bridge Dunia 2016 dimulai sejak 3 September. Namun, untuk pertandingan pasangan (pairs) baru pada 11 September," ujar pemain senior bridge Indonesia Bert Toar Polii.
      <br /><br />Vila dan Yesi merupakan pemain muda bridge Indonesia yang telah menorehkan berbagai prestasi di tingkat internasional seperti juara ketiga pada Kejuaraan Asia Pasifik Bridge beregu di Beijing pada April 2016 dan Kejuaraan Bridge Pemuda di Thailand pada April 2015.
      <br /><br />Mereka mulai menggeluti permainan bridge sejak duduk di bangku Sekolah Menengah Pertama. Mereka merupakan pemain bridge yang direkrut dari Kabupaten Langkat, Provinsi Sumatera Utara, melalui program Gabungan Bridge Seluruh Indonesia (GABSI) yaitu Bridge Masuk Sekolah. Kini kedua remaja putri tersebut tengah menjalani pendidikan teknik di Sekolah Tinggi Teknik PLN.
    </p>
  },
  {
    id: 12,
    title: "Honor of Kings Destiny, anime kedua HOK menampilkan hero favorit fans",
    content: "Kenangan memudar tetapi tanggung jawab tetap harus ditunaikan.",
    date: "24-04-2025",
    category: "esport",
    image: "https://cdn.oneesports.id/cdn-data/sites/2/2025/04/HonorOfKings_Destiny_Anime_Kaiser_KV-1024x576-1.jpg",
    description: <p>Loyalis Honor of Kings menambah daftar hal yang layak dinanti seiring dengan dipastikannya serial animasi Honor of Kings: Destiny yang dibintangi oleh Kaizer bakal tersedia secara global di Crunchyrull pada Mei 2025.
      <br /><br />Keseruan bagi para penikmat Honor of Kings tidak berhenti di sana karena akan hadir juga hero terbaru dari periode Three Warring States ke dalam game. Kolaborasi HOK x Ne Zha 2 juga telah diumumkan.
      <br /><br />Di sisi esports, China dipastikan bakal menjadi tuan rumah festival musik esports, dan Grand Final King Pro League (KPL) akan menjadi event mobile esports pertama yang bakal digelar di Beijing National Stadium.
      <br /><br />SEDIKIT CERITA MENGENAI KAIZER
      <br /><br />Dahulu Kaizer adalah seorang bangsawan dari keluarga Navenia, namun hidupnya berubah secara drastis saat kelurganya terkena kutukan mengerikan. Karena cinta yang begitu besar terhadap adiknya, Kaizer memutuskan untuk memikul kutukan itu seorang diri, harapannya adalah sang adik bisa lepas dari cengkraman penderitaan.
      <br /><br />Keputusan tersebut membawa Kaizer pada jalan hidup yang sunyi hingga dia tiba di hadapan Tembok Besar, sebuah garis pertahanan legendaris dalam melawan ancaman dari dunia lain.
      <br /><br />Kaizer yang kehilangan ingatan akibat kutukan, sekarang berdiri sebagai salah satu penjaga setia Tembok Besar. Dia menghunus pedang iblis miliknya bahkan memanfaatkan kekuatan kutukan yang sudah melebur bersama dirinya.
      <br /><br />Anime Honor of Kings Destiny besar kemungkinan akan mengeksploitasi kisah Kaizer. Seri ini hadir setelah serial antologi animasi Secret Level yang sudah tayang di Amazon Prime Video yang menyajikan hero mid lane Yixing.
      <br /><br />Episode berjudul “The Way of All Things” (S1, E14) tayang perdana pada 17 Desember 2024, memperlihatkan kisah Yixing, seorang anak yatim piatu jenius yang menggunakan kemahirannya dalam permainan strategi Weiqi (Go) untuk menantang kecerdasan buatan maha tahu yang menguasai kota.
    </p>
  },

  {
    id: 13,
    title: "Viral Pecatur Nomor Satu Dunia Kalah lalu Gebrak Meja",
    content: "Viral pecatur nomor satu dunia, Magnus Carlsen gebrak meja saat dikalahkan grandmaster catur dari India, Gukesh Dommaraju.",
    date: "03-06-2025",
    category: "catur",
    image: "https://akcdn.detik.net.id/community/media/visual/2025/06/03/magnus-carlsen-1748926896213.jpeg?w=700&q=90",
    description: <p>Hal itu terjadi pada laga catur klasik Norway Chess 2025. Magnus Carlsen hadapi Gukesh Dommaraju.
      <br /><br />Dua-duanya merupakan pecatur papan atas dunia. Hanya saja, Gukesh masih muda berusia 19 tahun sedangkan Carlsen sudah berusia 34 tahun.
      <br /><br />Mulanya, Magnus Carlsen berada di atas angin saat tiga poin lagi akan menang. Gukesh lakukan comeback, manfaatkan kesalahan Carlsen, kemudian malah jadi pemenangnya!
      <br /><br />Carlsen langsung menggebrak meja, meluapkan emosinya. Bidak-bidak catur sampai melayang, Gukesh pun seolah tidak percaya dan hanya terdiam.
      <br /><br />Carlsen tampak emosi, akan tetapi langsung bersalaman dengan Gukesh. Pun setelah tinggalkan meja, Carlsen juga menepuk pundak Gukesh seolah tanda permintaan maafnya.
      <br /><br />"Saya juga telah memukul banyak meja dalam karier saya. Ini bukan seperti yang saya inginkan, tetapi oke, saya akan menerimanya" kata Gukesh seperti dikutip dari <a href="https://www.chess.com/news/view/2025-norway-chess-round-6">Chess.com.</a>
      <br /><br />Bagi Gukesh, itu adalah balas dendam yang sempurna, karena dia telah kalah dari Carlsen di ronde pembukaan. Gukesh kini naik ke posisi ketiga dengan 8,5 poin dan berada di belakang Carlsen dan Fabiano Caruana hanya dengan selisih satu poin.
      <br /><br />Norway Chess 2025 menjadi salah satu turnamen elite yang mempertandingkan para pecatur terbaik dunia, termasuk Gukesh, Carlsen, Hikaru Nakamura, dan Alireza Firouzja. Turnamen ini juga menandai kembalinya Carlsen ke kompetisi catur standar semenjak Olimpiade Catur pada September tahun lalu
    </p>
  },

  {
    id: 14,
    title: "Siswa Madrasah Harumkan Indonesia di Ajang Olahraga Bridge Internasional",
    content: "Dua siswa Madrasah Tsanawiyah Negeri (MTsN) Sawahlunto berhasil mengharumkan nama Indonesia di ajang internasional olahraga Bridge. Kedua siswa kelas IX MTsN Sawahlunto tersebut, Dimas Fikriaza dan M. Al Hanif sebagai pasangan atlit bridge mewakili Indonesia, berhasil meraih peringkat kedua Pertandingan Bridge Internasional usia -16 tahun (kelas C) di Salsamaggiore Italy 3-13 Agustus 2016 lalu.",
    date: "15-08-2016",
    category: "bridge",
    image: "data:image/jpeg;base64,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",
    description: <p>Perjalanan kedua siswa MTsN Sawahlunto ini hingga bisa mencapai tingkat internasional ini, awalnya mewakili Kota Sawahlunto di ajang pertandingan bridge usia -16 tahun tingkat provinsi Sumatera Barat di Padang. Pasangan Dimas dan Hanif keluar sebagai juara pertama. Selanjutnya, pasangan ini didaftarkan untuk seleksi nasional oleh Pengurus Provinsi (Pengprov) Gabungan Bridge Seluruh Indonesia (Gabsi) Sumatera Barat pada bulan Maret 2016 dan dinyatakan lulus oleh team penyeleksi PB GABSI Pusat
      <br /><br />Dalam Seleknas ini, Hanif dan Dimas mendapat pringkat 1 dari 22 dalam kategori kids. Yang berhak masuk pelatnas peringkat 1-5 dari hasil seleknas yaitu 5 pasang. Di bulan Ramadhan, Hanif dan Dimas mengikuti seleknas dan diambil 3 pasang dari 5 pasang. Atas keberhasilan tersebut, Hanif-Dimas berhak masuk pelatnas untuk persiapan menuju WBF Young di Salsomanggiore Italy.
      <br /><br />Di kejuaraan Bridge Internasional usia -16 tahun (kelas C) ini, Dimas dan Hanif berada di peringkat kedua setelah Kanada, menyusul Ceko dan Swedia, masing-masing di peringkat ketiga dan keempat.
      <br /><br />Saat diterima Sekretaris Jenderal Kementerian Agama Nur Syam yang didampingi Sesditjen Pendidikan Islam M. Ishom Yusqi dan Kepala Biro Umum sekaligus Pgs. Kepala Pusat Informasi dan Humas Syafrizal di Kantor Kemenag Jalan Lapangan Banteng Barat 3-4 Jakarta, Jumat (12/8) lalu , Dimas dan Hanif yang didampingi Kasie Pendidikan Madrasah Kemenag Sawahlunto Mofri Antoni, mengaku senang atas keikutsertaannya dalam ajang ini.
      <br /><br />"Alhamdulillah, saya berdua senang atas keberhasilan meraih prestasi ini meski peringkat kedua, Insya Allah kami akan terus latihan lagi," ujar Hanif saat ditanya Sekjen bagaimana perasaan bisa ikut di ajang internasional olahraga kartu ini.
      <br /><br />Kemampuan Hanif dan Dimas dalam olahraga kartu ini, memang tidak terlepas dari kemampuan mereka dalam bidang pelajaran matematika di sekolah. Wajar saja, sebab kedua siswa tersebut sama-sama berhasil menuntaskan pelajaran mate­­matika di kelas.
      <br /><br />"Yang tuntas dalam mata pelajaran matematika di kelas, memang mereka berdua," ujar Kepala MTsN Sawahlunto, Indra Gani seperti dikutip dari Haluan, Padang.
      <br /><br />Atas prestasi yang diraih siswa MTs ini, Sekjen Kemenag Nur Syam menyampaikan apresiasinya yang telah membanggakan nama bangsa Indonesia, khususnya membanggakan Kementerian Agama, dan lebih khusus lagi membanggakan madrasah kita.
      <br /><br />"Jadi selama ini, kalau bicara madrasah, terutama bidang olahraganya seperti Volley Ball, Badminton, Basket dan lainnya, tapi ternyata ada kegiatan di luar pikiran kita yaitu olahraga Bridge, yang ternyata ada di antara anak-anak kita yang bisa jadi juara di tingkat internasional," ucap Sekjen.
      <br /><br />"Oleh karenanya, kami berharap ke depan ananda berdua ini akan bisa lebih maju lagi dalam olahraga bridge ini, tetapi jangan lupa, tugas utama ananda adalah belajar. Belajar tetap nomor satu," pesan Sekjen. (dm/dm).
    </p>
  },

  {
    id: 15,
    title: "RRQ di grup Neraka! Hasil undian babak grup VCT Pacific Stage 2",
    content: "Selamat berjuang untuk semua tim peserta.",
    date: "03-05-2025",
    category: "esport",
    image: "https://cdn.oneesports.id/cdn-data/sites/2/2025/05/Valorant_VCTPacificStage1_RRQ_Celebration-1024x576-1.jpg",
    description: <p>Pembagian babak grup VCT Pacific Stage 2 langsung dilakukan tidak alama setelah putaran final, Minggu (11/5) kemarin.
      <br /><br />RRQ, sang juara VCT Pacific Stage 2 langsung dihadapkan kenyataan masuk ke Grup Alpha yang diberi label sebagai Grup Neraka karena menjadi tempat berkumpulnya tim-tim papan atas.
      <br /><br />Berdasarkan klasemen Stage 1, enam tim teratas didistribusikan ke dalam grup berbeda, hal ini dilakukan untuk memastikan tidak ada tim yang berasal di grup stage mereka sebelumnya. Akibatnya, RRQ sebagai unggulan teratas masuk ke Grup Alpha, sementara BOOM Esports sang unggulan kedua, masuk ke Grup Omega.
      <br /><br />Paper Rex dan Nongshim RedForce yang sama-sama berada di empat besar Stage 1, bersaam Team Secret dan DetonatioN FocusMe, juga dipisahkan ke grup berbeda jika dibandingkan dengan penempatan di Stage 1.
      <br /><br />Alpha Group
      <br />RRQ
      <br />DRX
      <br />Gen.G
      <br />Nongshim RedForce
      <br />Global Esports
      <br />Team Secret
      <br /><br />Grup Alpha disebut sebagai grup neraka dan yang paling berat di turnamen karena berisikan tiga tim Korea termasuk juara, runner-up dan peringkat keempat Stage 1 sehingga menyambar reputasi sebagai bracket paling panas di turnamen.
    </p>
  },

  {
    id: 16,
    title: "Carlsen dan Humpy Pimpin Klasemen; Nakamura Blunder Lawan Arjun",
    content: "Babak kelima Norway Chess 2025 menampilkan tiga hasil remis di partai klasik, yang diikuti dengan tiga kemenangan di armageddon. ",
    date: "31-05-2025",
    category: "catur",
    image: "https://images.chesscomfiles.com/uploads/v1/news/1680524.9cb9536c.668x375o.9ffa3c917b8a.png",
    description: <p>GM Magnus Carlsen mengalahkan GM Fabiano Caruana dengan buah Hitam di armageddon dan memperkuat posisinya di puncak klasemen. Sementara itu, GM Hikaru Nakamura memiliki peluang menang baik di partai klasik maupun armageddon melawan GM Arjun Erigaisi, namun melakukan blunder dalam posisi menang dan akhirnya kalah. Terakhir, GM Wei Yi menebus peluang yang terlewat di partai klasik dengan mengalahkan Juara Dunia Gukesh Dommaraju dengan buah Putih di armageddon.
      <br /><br />GM Koneru Humpy menjadi pemimpin tunggal Norway Chess Women 2025 di paruh pertama turnamen, setelah mengalahkan GM Lei Tingjie di armageddon. Rival terdekatnya, GM Anna Muzychuk kalah dari GM Ju Wenjun. Satu-satunya kemenangan klasik hari itu diraih oleh GM Vaishali Rameshbabu, yang menggambarkan kemenangannya atas IM Sara Khadem sebagai "sangat lancar."
      <br /><br />abak keenam akan dimulai pada hari Minggu, 1 Juni mulai pukul 22:00 WIB.
    </p>
  },

  {
    id: 17,
    title: "Bridge Indonesia Raih Gelar Juara di Thailand",
    content: "Atlet bridge Indonesia kembali meraih prestasi di luar negeri.",
    date: "02-06-2015",
    category: "bridge",
    image: "https://cdn0-production-images-kly.akamaized.net/1pKtzBrjfd4gTfST0nLxu_3-lVE=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/891219/original/086098400_1433259240-bridge.JPG",
    description:<p>Prestasi membanggakan kembali dipetik atlet bridge Indonesia. Kali ini,tim bridge Indonesia sukses meraih gelar juara lewat nomor senior dalam kejuaraan "50th Asian Pacific Bridge Federation (APBF) Championship 2015" yang berlangsung pada 21-31 Mei di Bangkok, Thailand.
      <br /><br />Skuat "Merah Putih" yang diperkuat Henky Lasut, Eddy Manoppo, Denny Sacul, Bert Toar Polii, Munawar Sawirudin dan Michael Bambang Hartono, memastikan raihan medali emas setelah mengandaskan tim Hongkong dengan 14,20 – 5,80 VPs setelah menyelesaikan 2x Round Robin @ 20 boards.
      <br /><br />Selain berhasil mengakahkan Hongkong, kemenangan tim Indonesia juga tidak lepas dari kekalahan Taiwan, yang menjadi saingan terdekat Indonesia, dari Australia dengan 8,66 – 11,34 VPs. Kemenangan Indonesia atas Hongkong juga sangat dramatis, karena ditentukan pada board No. 19 (2 boards terakhir) setelah pasangan Denny – Berce di Open Room kontrak 3NT + 2, sementara di Close Room pasangan Henky – Eddy menggagalkan kontrak 4S – 2 dari pemain Hongkong.
      <br /><br />"Pertandingan round terakhir ini sangat menegangkan, karena kami ketinggalan dari Taiwan di round 11 dan round 12, dan Hongkong juga bermain bagus waktu lawan kami di round terakhir. Selanjutnya tentu kami harus lebih giat berlatih agar bisa mencapai target sebagai Juara Dunia di Chennai bulan September-Oktober," ujar Hengky Lasut, Selasa (2/6/2015) seperti rilis yang diterima media.
      <br /><br />Atas keberhasilan itu, tim senior Indonesia pun berhak atas tiket menuju kejuaraan dunia di Chennai, India pada 26 September – 10 Oktober mendatang. "Keberhasilan ini sudah sesuai target. Semoga kami bisa melanjutkan hasil positif ini di kejuaraan dunia nanti," kata Michael Bambang Hartono yang juga merupakan Dewan Pembina PB GABSI ini.
      <br /><br />Selain itu, Indonesia juga menjadi pelopor terbentuknya federasi bridge Asia Tenggara yakni South-East Asia (SEA) Bridge Federation. Federasi tersebut diketuai oleh Michael Bambang Hartono, sementara Handojo Susanto didaulat sebagai Sekretaris Jendral.
      <br /><br />"Ini terobosan dari PB GABSI. Dengan adanya federasi ini, tim-tim dari Asia Tenggara nantinya akan berlaga di regional sendiri. Karena selama ini kita berkompetisi di Asia Pasific. Federasi ini juga diharapkan bisa mempermulus bridge dipertandingkan di SEA Games," ucap Ketua Umum PB GABSI Ekawahyu Kasih.
    </p>
  },

  {
    id: 18,
    title: "The Invincibles, Alter Ego X juara MDL ID S11",
    content: "Istimewa, Alter Ego X juara tanpa pernah menelan kekalahan.",
    date: "01-06-2025",
    category: "esport",
    image: "https://cdn.oneesports.id/cdn-data/sites/2/2025/06/MLBB_Alter-Ego-X-Juara-MDL-ID-S11-2025-1024x574.jpeg",
    description: <p>Alter Ego X mengukuhkan dominasi dengan menjadi juara MDL ID S11 setelah menumbangkan perlawanan Diton Esportrs dengan skor 4-2, Minggu (6/1) malam WIB.
      <br /><br />Kekuatan istimewa Alter Ego X yang digawangi oleh Owenn, Cyruz, Yazukee, Haizz dan Fawndeer memang sudah terlihat semenjak awal kompetisi baik itu dari babak grup, swiss round hingga putaran playoff.
      <br /><br />Sempat kehilangan ritme, Alter Ego X juara MDL ID S11
      <br /><br />Setelah melewati rintangan Kagendra di babak perempat-final (3-1) lalu lolos dari sergapan TL Academy ID dengan skor tipis 3-2, Alter Ego X ditantang oleh Diton yang menumbangkan Pendekar Esports dan ONIC Prodigy untuk tampil di partai puncak.
      <br /><br />Jika bercermin pada hasil di babak-babak sebelumnya, pertemuan antara Alter Ego X dan Diton bisa dikatakan sebagai final ideal akan tetapi pada kenyataannya Yazukee dan kawan-kawan langsung tancap gas dengan mengamankan tiga game pertama putaran final ini.
      <br /><br />Meski tertinggal jauh, Diton enggan menyerah tanpa perlawanan. Tim ini berhasil menipiskan kedudukan dengan merebut game keempat dan kelima. Sayang, harapan mereka untuk menciptakan reverse sweep pupus setelah Alter Ego X menuntaskan perlawanan Diton di game keenam.
      <br /><br />Alter Ego X menjadi juara dengan status Invincibles atau tak terkalahkan di sepanjang kompetisi. Di babak grup tim ini merangkai tiga kemenangan untuk menjadi pemuncak Grup C, lalu di babak swiss round mereka menorehkan tiga kemenangan tanpa kekalahan untuk mengamankan posisi ke babak playoff.
    </p>
  },
  
];

const NewsList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  let category = null;

  if (path.includes("catur")) category = "catur";
  else if (path.includes("bridge")) category = "bridge";
  else if (path.includes("esport")) category = "esport";

  const filteredNews = category
    ? allNews.filter((item) => item.category === category)
    : allNews;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-6 text-black capitalize">
        {category ? `Berita ${category}` : "Semua Berita"}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredNews.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:bg-gray-200 hover:scale-105 hover:shadow-lg transition overflow-hidden cursor-pointer"
            onClick={() => navigate(`/berita/${item.id}`)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-500 mb-2">{item.date}</p>
              <p className="text-gray-700">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;

