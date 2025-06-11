// new
import React from "react";
import { allNews } from "./NewsList";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => (
   <Link to={`/berita/${news.id}`}>
    <div className="bg-white text-black p-4 rounded shadow mb-2 hover:bg-gray-200 hover:scale-105 hover:shadow-lg transition">
      <img
        src={news.image}
        alt={news.title}
        className="mb-2 rounded w-full h-auto"
      />
      <h3 className="text-lg font-semibold">{news.title}</h3>
    </div>
  </Link>
);

export default NewsCard;