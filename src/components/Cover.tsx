import { useEffect, useState } from "react";
import "../pages/Nouveaute.css";

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
	synopsis: string;
}

function Cover() {
	const [data, setData] = useState<Anime[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0); // ➔ Pour savoir quel animé afficher

	useEffect(() => {
		fetch("https://api.jikan.moe/v4/anime")
			.then((response) => response.json())
			.then((data) => {
				const sortedData = data.data.sort(
					(a: Anime, b: Anime) => b.score - a.score,
				);
				const top10 = sortedData.slice(0, 10);
				setData(top10);
			});
	}, []);

	useEffect(() => {
		// ➔ Changer d'animé toutes les 10 secondes
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
		}, 10000);

		return () => clearInterval(interval); // ➔ Nettoyage important
	}, [data]);

	if (data.length === 0) {
		return <p>Loading...</p>;
	}

	const currentAnime = data[currentIndex]; // ➔ L'animé affiché

	return (
		<article key={currentAnime.mal_id}>
			<a href="/">
				<img src={currentAnime.images.jpg.image_url} alt={currentAnime.title} />
			</a>
			<h2>{currentAnime.title}</h2>
			<p>{currentAnime.score} ⭐</p>
			<p>🎞️ {currentAnime.episodes} épisodes</p>
			<h3>Synopsis</h3>
			<p>
				{currentAnime.synopsis.length > 300
					// biome-ignore lint/style/useTemplate: <explanation>
					? currentAnime.synopsis.substring(0, 300) + "..."
					: currentAnime.synopsis}
			</p>
			{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
			<button>En savoir plus</button>
		</article>
	);
}

export default Cover;
