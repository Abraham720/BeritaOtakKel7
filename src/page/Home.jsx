import { Link } from "react-router-dom";


const Home = () => {
  return (
<div className="pt-40 pb-64 bg-gradient-to-b from-white to-[#f5f5dc] flex flex-col md:flex-row items-center justify-center px-6 md:px-12 gap-8">
  {/* Teks */}
  <div className="md:w-1/2 text-center md:text-left">
    <p className="text-2xl md:text-3xl font-serif pt-20 md:pt-48 text-center md:text-left">
      Selamat datang di pusat informasi olahraga otak! <br />
      Strategi, logika, dan kejernihan berpikir ada di sini.
    </p>
    <Link to="/berita">
      <button className="bg-black text-white p-2 mt-4 rounded-xl hover:bg-sky-400 transition-all">
        Lihat Berita
      </button>
    </Link>
  </div>

  {/* Gambar */}
  <div className="w-10/12">
    <img
      src="/assets/Photos/Olahraga-Otak.png"
      alt="Ilustrasi olahraga otak"
      className="pl-10 scale-150 w-full max-w-md mx-auto rounded-xl"
    />
  </div>
</div>


  );
};

export default Home;

