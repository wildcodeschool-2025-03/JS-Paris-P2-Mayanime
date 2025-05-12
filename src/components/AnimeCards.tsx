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

function AnimeCards({ checked, search }) {
  // console.log(checked, name);

  const [data, setData] = useState<Anime[]>([]);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/anime")
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }, []);

  const dataFiltered = data.filter((anime) => {
    if (checked) {
      return anime.status === "Currently Airing";
    }
    return true;
  });

  const result = dataFiltered.filter((el) => el.title.includes(search));
  console.info(result);
  return (
    <>
      {result.map((anime) => (
        <article key={anime.mal_id}>
          <a href="/">
            <img src={anime.images.jpg.image_url} alt="" />
          </a>
          <p>{anime.title}</p>
          <p>{anime.score}⭐</p>
          <p>{anime.episodes}🎞️</p>
          <div className="redirection">
            <button type="button">En savoir plus</button>
            <button type="button">Ajouter à la Watchlist ​🕛​​</button>
          </div>
        </article>
      ))}
    </>
  );
}

export default AnimeCards;
