import NewsPage from "./page/NewsPage";
import Home from "./page/home";
import Berita from "./page/Berita";
import About from "./page/About"
import KategoriCatur from "./page/KategoriCatur";
import KategoriBridge from "./page/KategoriBridge";
import KategoriEsport from "./page/KategoriEsport";
import NewsDetail from "./page/NewsDetail";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";


// Placeholder for kategori, about, contact
const KategoriPage = ({ kategori }) => (
  <div className="min-h-screen bg-gradient-to-r from-blue-100 to-emerald-100 p-6">
    <h1 className="text-3xl font-bold mb-4">Berita Kategori: {kategori}</h1>
    {/* Kamu bisa filter berita berdasarkan kategori di sini */}
  </div>
);

const AboutPage = () => <div className="p-10 text-xl">Tentang Kami</div>;
const ContactPage = () => <div className="p-10 text-xl">Kontak Kami</div>;

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/berita" element={<Berita />} />
          <Route path="/kategori/catur" element={<KategoriCatur />} />
          <Route path="/kategori/bridge" element={<KategoriBridge />} />
          <Route path="/kategori/esport" element={<KategoriEsport />} />
          <Route path="/berita/:id" element={<NewsDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;


