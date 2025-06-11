import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import NewsList, { allNews } from "./NewsList";
import NewsCard from "./Card";
import logo from '../assets/Photos/Logo_Photo.png';

const Navbar = () => {
  const [darkMode, setDarkmode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const [search, setSearch] = useState("")
  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log("mencari:", search);
  };
  const filteredSearch = allNews.filter(
    (news) => news.title.toLowerCase().includes(search.toLowerCase())

  );

  // Tutup dropdown jika mouse keluar selama 1 detik
  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 3000); // 1 detik
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current); // Bersihkan saat unmount
  }, []);

  return (
    <header className="flex justify-between items-center text-white py-6 px-8 md:px-32 bg-black drop-shadow-md relative">
      <Link to="#">
        <img
          src={logo}
          alt="foto tidak ada"
          className="h-32 w-45 hover:scale-105 transition-all" />
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
  <li className="group relative cursor-pointer">
    <Link
      to="/"
      className="p-3 transition-all hover:text-sky-400"
    >
      Home
      <span className="block h-0.5 bg-sky-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
    </Link>
  </li>

  <li
    className="group relative cursor-pointer"
    ref={dropdownRef}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <span
      onClick={() => setIsDropdownOpen((prev) => !prev)}
      className="p-3 transition-all hover:text-sky-400"
    >
      Category
      <span className="block h-0.5 bg-sky-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
    </span>

    {isDropdownOpen && (
      <ul className="absolute left-0 top-full bg-white text-black rounded shadow-md mt-2 z-50">
          <li className="px-4 py-2 hover:bg-gray-200">
        <Link to="/berita" onClick={() => setIsDropdownOpen(false)}>Semua</Link>
      </li>
      <li className="px-4 py-2 hover:bg-gray-200">
        <Link to="/kategori/catur" onClick={() => setIsDropdownOpen(false)}>Catur</Link>
      </li>
      <li className="px-4 py-2 hover:bg-gray-200">
        <Link to="/kategori/bridge" onClick={() => setIsDropdownOpen(false)}>Bridge</Link>
      </li>
      <li className="px-4 py-2 hover:bg-gray-200">
        <Link to="/kategori/esport" onClick={() => setIsDropdownOpen(false)}>Esport</Link>
      </li>
      </ul>
    )}
  </li>

  <li className="group relative cursor-pointer">
    <Link
      to="/about"
      className="p-3 transition-all hover:text-sky-400"
    >
      About Us
      <span className="block h-0.5 bg-sky-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
    </Link>
  </li>
</ul>


      {/* Search Input */}
      <div className="flex gap-4">
  <div className="relative hidden md:flex items-center justify-center gap-3">
    <i className="bx bx-search-alt absolute left-3 text-2xl text-gray-500"></i>
    <input
      type="text"
      placeholder="cari apa bang..."
      value={search}
      onChange={handleChange}
      className="py-2 pl-10 rounded-xl border-2 border-yellow-300 focus:bg-slate-100 focus:outline-red-500 text-black"
    />
    {search && (
      <div className="absolute bg-white text-black rounded p-4 w-[300px] max-h-[300px] overflow-y-auto shadow-md top-full mt-2 z-50">
        {filteredSearch.length > 0 ? (
          filteredSearch.map((news) => (
            <Link to={`/berita/${news.id}`} key={news.id} onClick={() => setSearch("")}>
              <NewsCard news={news} />
            </Link>
          ))
        ) : (
          <p>Tidak ditemukan</p>
        )}
      </div>
    )}
  </div>
</div>


      {/* Mobile Menu Button */}
      <i
        className="bx bx-menu xl:hidden block text-5xl cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></i>
      {/* Mobile Menu */}
      <div
        className={`absolute xl:hidden top-28 py-4 left-0 w-full bg-black flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
      >
<li className="group list-none w-full text-center p-4 hover:bg-sky-400 transition-all cursor-pointer">
  <Link
    to="/"
    className="relative inline-block text-white hover:text-white"
  >
    Home
    <span className="block h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
  </Link>
</li>

<li
  className="group relative list-none w-full text-center p-4 hover:bg-sky-400 transition-all cursor-pointer"
  ref={dropdownRef}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  <span
    onClick={() => setIsDropdownOpen((prev) => !prev)}
    className="relative inline-block text-white cursor-pointer"
  >
    Category
    <span className="block h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
  </span>

  {isDropdownOpen && (
    <ul className="bg-white text-black rounded shadow-md mt-2 z-50">
      <li className="px-4 py-2 hover:bg-gray-200">
        <Link to="/berita" onClick={() => setIsDropdownOpen(false)}>Semua</Link>
      </li>
      <li className="px-4 py-2 hover:bg-gray-200">
        <Link to="/kategori/catur" onClick={() => setIsDropdownOpen(false)}>Catur</Link>
      </li>
      <li className="px-4 py-2 hover:bg-gray-200">
        <Link to="/kategori/bridge" onClick={() => setIsDropdownOpen(false)}>Bridge</Link>
      </li>
      <li className="px-4 py-2 hover:bg-gray-200">
        <Link to="/kategori/esport" onClick={() => setIsDropdownOpen(false)}>Esport</Link>
      </li>
    </ul>
  )}
</li>

<li className="group list-none w-full text-center p-4 hover:bg-sky-400 transition-all cursor-pointer">
  <Link
    to="/about"
    className="relative inline-block text-white hover:text-white"
  >
    About Us
    <span className="block h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
  </Link>
</li>

        <input
          type="text"
          placeholder="cari apa bang..."
          value={search}
          onChange={handleChange}
          className="py-2 pl-10 rounded-xl border-2 border-yellow-300 focus:bg-slate-100 focus:outline-red-500 text-black xl:hidden block"
        />

      </div>
    </header>

  );
};

export default Navbar;
