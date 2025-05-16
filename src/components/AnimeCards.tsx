import { useEffect, useState } from "react";
import "../pages/Catalogue.css";
import { useNavigate } from "react-router-dom";
import AddWatchlistButton from "./AddWatchlistButton";
import AnimeCardPourLaWatchlist from "./AnimeCardPourLaWatchlist";

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
	const navigate = useNavigate();

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

	const result = dataFiltered.filter((el) =>
		el.title.toLowerCase().includes(search.toLowerCase()),
	);
	//  console.info(result);
	return (
		<>
			{result.map((anime) => (
				<AnimeCardPourLaWatchlist key={anime.mal_id} anime={anime} />
			))}
		</>
	);
}

export default AnimeCards;
