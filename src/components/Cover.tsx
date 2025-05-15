import { useEffect, useState } from "react";
import "../pages/Nouveaute.css";
import "../pages/Description";
import { Link } from "react-router-dom";
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
	background: string;
}

function Cover() {
	// State pour stocker la liste des 10 meilleurs animés
	const [data, setData] = useState<Anime[]>([]);
	// State pour garder en mémoire l'indice de l'anime actuellement affiché
	const [currentIndex, setCurrentIndex] = useState(0);
	const [secondsLeft, setSecondsLeft] = useState(30);

	const Timer = () => {
		// faire défiler les animés via un slide intervalle de 30secondes

		// dès que les 30 secondes se sont écoulées, le slide passe à l'animé suivant
		let time = 30;
		const timer = setInterval(() => {
			time -= 3;
			setSecondsLeft((prev) => prev - 3);
			setCurrentIndex((prevIndex) => prevIndex + 1);
			if (time === 0) setCurrentIndex(0);
		}, 3000);

		// afin de revenir au premier animé à la fin de la boucle
	};

	// useEffect sans dépendances => s'exécute une seule fois au montage du composant
	useEffect(() => {
		// Appel à l'API pour récupérer la liste des animés
		fetch("https://api.jikan.moe/v4/anime")
			.then((response) => response.json()) // Conversion de la réponse en JSON
			.then((data) => {
				// Tri des animés par score décroissant
				const sortedData = data.data.sort(
					(a: Anime, b: Anime) => b.score - a.score,
				);
				// On ne garde que les 10 premiers éléments
				const top10 = sortedData.slice(0, 10);
				// On met à jour le state avec ces 10 animés
				setData(top10);
				Timer();
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
		<article className="Cover" key={currentAnime?.mal_id}>
			<div>
				<h2>{currentAnime?.title}</h2>
				{/*on a cré un bouton evenement onclik pour mettre l'animé suivant en parcourant les data; modulo = reste de la division*/}
				<button
					type="button"
					onClick={() =>
						setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length)
					}
				>
					Suivant
				</button>
				<p>{currentAnime?.score} ⭐</p>
				<p>🎞️ {currentAnime?.episodes} épisodes</p>
				<p>{currentAnime?.background}</p>
				<button type="button">
					<Link to={`/Description/${currentAnime?.mal_id}`}>
						En savoir plus
					</Link>
				</button>
			</div>
			<a href="/">
				<img
					src={currentAnime?.images.webp.large_image_url}
					alt={currentAnime?.title}
				/>
			</a>
		</article>
	);
}

// temps restant entre le slide des animés

export default Cover;
