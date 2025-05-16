import { useCallback, useEffect, useState } from "react";
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
	const [data, setData] = useState<Anime[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [secondsLeft, setSecondsLeft] = useState(30);

	// Fonction de timer automatique
	const startTimer = useCallback(() => {
		let time = 30;
		const intervalId = setInterval(() => {
			time -= 3;
			setSecondsLeft((prev) => prev - 3);

			setCurrentIndex((prevIndex) => {
				const nextIndex = prevIndex + 1;
				return nextIndex >= 10 ? 0 : nextIndex;
			});

			if (time <= 0) {
				time = 30;
			}
		}, 3000);

		return () => clearInterval(intervalId);
	}, []);

	// Récupération des animés à l'ouverture
	useEffect(() => {
		fetch("https://api.jikan.moe/v4/anime")
			.then((response) => response.json())
			.then((data) => {
				const sortedData = data.data.sort(
					(a: Anime, b: Anime) => b.score - a.score,
				);
				const top10 = sortedData.slice(0, 10);
				setData(top10);

				const cleanup = startTimer(); // démarrage du timer
				return cleanup; // arrêt du timer à la fermeture
			});
	}, [startTimer]);

	if (data.length === 0) {
		return <p>Chargement...</p>;
	}

	const currentAnime = data[currentIndex];

	return (
		<article className="Cover" key={currentAnime?.mal_id}>
			<div>
				<h2>{currentAnime?.title}</h2>
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

export default Cover;
