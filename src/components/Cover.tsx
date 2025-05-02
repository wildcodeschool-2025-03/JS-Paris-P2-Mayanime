import { useEffect, useState } from "react";
import "../pages/Nouveaute.css";
import "../pages/Description";
import Description from "../pages/Description";

// Définition de la forme des données d'un animé
interface Anime {
  mal_id: number;
  title: string;
  score: number;
  episodes: number;
  images: {
    webp: {
      large_image_url: string;
    };
  };
  synopsis: string;
}

function Cover() {
  // State pour stocker la liste des 10 meilleurs animés
  const [data, setData] = useState<Anime[]>([]);
  // State pour garder en mémoire l'indice de l'anime actuellement affiché
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect sans dépendances => s'exécute une seule fois au montage du composant
  useEffect(() => {
    // Appel à l'API pour récupérer la liste des animés
    fetch("https://api.jikan.moe/v4/anime")
      .then((response) => response.json()) // Conversion de la réponse en JSON
      .then((data) => {
        // Tri des animés par score décroissant
        const sortedData = data.data.sort(
          (a: Anime, b: Anime) => b.score - a.score
        );
        // On ne garde que les 10 premiers éléments
        const top10 = sortedData.slice(0, 10);
        // On met à jour le state avec ces 10 animés
        setData(top10);
      });
  }, []);

  // Si les données ne sont pas encore chargées, on affiche un message
  if (data.length === 0) {
    return <p>Loading...</p>;
  }

  // On récupère l'anime à afficher selon l'indice courant
  const currentAnime = data[currentIndex];

  // Rendu : on affiche les détails de l'anime courant
  return (
    <article className="Cover" key={currentAnime.mal_id}>
      <div>
        <h2>{currentAnime.title}</h2>
        {/*on a cré un bouton evenement onclik pour mettre l'animé suivant en parcourant les data; modulo = reste de la division*/}
        <button
          type="button"
          onClick={() =>
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length)
          }
        >
          Suivant
        </button>
        <p>{currentAnime.score} ⭐</p>
        <p>🎞️ {currentAnime.episodes} épisodes</p>
        <h3>Synopsis</h3>
        <p>
          {currentAnime.synopsis.length > 300
            ? // Si le synopsis fait plus de 300 caractères, on le coupe et on ajoute '...'
              // biome-ignore lint/style/useTemplate: <explanation>
              currentAnime.synopsis.substring(0, 300) + "..."
            : // Sinon on l'affiche en entier
              currentAnime.synopsis}
        </p>
        {/* Bouton sans type pour l'instant, on pourra ajouter une action plus tard */}
        <details>
          <summary>En savoir plus</summary>
          <Description anime={currentAnime} />
        </details>
      </div>
      <a href="/">
        <img
          src={currentAnime.images.webp.large_image_url}
          alt={currentAnime.title}
        />
      </a>
    </article>
  );
}

export default Cover;
