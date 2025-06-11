// NewsDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { allNews } from "../components/NewsList";
import NewsCard from "../components/Card"; // opsional jika ingin pakai komponen kartu berita lainnya



const NewsDetail = () => {
  const { id } = useParams();
  const newsId = parseInt(id);
  const news = allNews.find(item => item.id === newsId);

  if (!news) return <p>Berita tidak ditemukan.</p>;

  // Cari berita lain dengan kategori yang sama, tapi ID berbeda
  const relatedNews = allNews.filter(item => item.category === news.category && item.id !== newsId);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* Detail Berita */}

      <div className="shadow-lg border-2 border-solid p-4 mb-4 rounded-md">
      <h1 className="text-2xl font-bold mb-2">{news.title}</h1>
      <p className="text-sm text-gray-600 mb-4">{news.date} | {news.category}</p>
      <img src={news.image} alt={news.title} className="w-full rounded-lg mb-4" />
      <div className="prose mb-8">{news.description}</div>
      </div>

      {/* Berita Lainnya */}
      <h2 className="text-xl font-semibold mb-4">Berita Lainnya</h2>
      {relatedNews.length === 0 ? (
        <p>Tidak ada berita lainnya dalam kategori yang sama.</p>
      ) : (
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {relatedNews.map(item => (
            <NewsCard key={item.id} news={item}/>
          ))} 
        </div>
      )}
    </div>
  );
};

export default NewsDetail;
