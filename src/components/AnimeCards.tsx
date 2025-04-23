import { useEffect, useState } from "react";
import "../pages/Catalogue.css";

interface Anime {
  mal_id: number;
  title: string;
  score: number;
  episodes: number;
  images: {
    jpg: {
      image_url: string;
    };
  };
}

function AnimeCards() {
  const [data, setData] = useState<Anime[]>([]);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/anime")
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <>
      {data.map((anime) => (
        <article key={anime.mal_id}>
          <a href="/">
            <img src={anime.images.jpg.image_url} alt="" />
          </a>
          <p>{anime.title}</p>
          <p>{anime.score}⭐</p>
          <p>🎞️{anime.episodes}</p>
        </article>
      ))}
    </>
  );
}

export default AnimeCards;
