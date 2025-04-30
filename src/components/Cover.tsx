import { useEffect, useState } from "react";
import "../pages/Nouveaute.css";

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
	const [data, setData] = useState<Anime[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		fetch("https://api.jikan.moe/v4/anime")
			.then((response) => response.json())
			.then((data) => {
				const sortedData = data.data.sort((a: Anime, b: Anime) => b.score - a.score);
				setData(sortedData.slice(0, 10));
			});
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
		}, 10000);
		return () => clearInterval(interval);
	}, [data]);

	if (data.length === 0) return <p>Loading...</p>;

	const currentAnime = data[currentIndex];

	return (
		<article className="Cover" key={currentAnime.mal_id}>
			<div className="content">
				<span className="badge">TOP 10</span>
				<h2>{currentAnime.title}</h2>
				<p>{currentAnime.score} ⭐</p>
				<p>🎞️ {currentAnime.episodes} épisodes</p>
				<h3>Synopsis</h3>
				<p>
					{currentAnime.synopsis.length > 300
						? `${currentAnime.synopsis.substring(0, 300)}...`
						: currentAnime.synopsis}
				</p>
				<button type="button">En savoir plus</button>
			</div>
			<a href="/">
				<img src={currentAnime.images.webp.large_image_url} alt={currentAnime.title} />
			</a>
		</article>
	);
}

export default Cover;
