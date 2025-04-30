import "./Watchlist.css";
import dbz from "../assets/DBZ.jpg";
import saintseiya from "../assets/Saint Seiya.png";
import { useEffect, useState } from "react";
function WatchAnime({ anime }) {
	const [insideWatchlist, setInsideWatchlist] = useState(
		localStorage.getItem(`${anime.mal_id}-vu`) === "true",
	);
	return (
		<section className="seiya">
			<div className="image1">
				<img src={anime.images.webp.image_url} alt="" />
				<div>
					<p>{anime.title_japanese}</p>
					<p>{anime.title_english}</p>
					<p>Doublage-Sous titres</p>
				</div>
				<div className="bouton2">
					{!insideWatchlist ? (
						<button
							type="button"
							onClick={() => {
								setInsideWatchlist(true);
								localStorage.setItem(`${anime.mal_id}-vu`, "true");
							}}
						>
							Vu
						</button>
					) : (
						<button
							type="button"
							onClick={() => {
								setInsideWatchlist(false);
								localStorage.removeItem(`${anime.mal_id}-vu`);
							}}
						>
							Supprimer
						</button>
					)}
				</div>
			</div>
		</section>
	);
}
function Watchlist() {
	const [animeList, setAnimeList] = useState([]);
	useEffect(() => {
		fetch("https://api.jikan.moe/v4/anime")
			.then((response) => response.json())
			.then((fullData) => setAnimeList(fullData.data));
	}, []);
	console.log(animeList);
	return (
		<>
			{animeList.map((animeFromTheList) => (
				<WatchAnime key={animeFromTheList.mal_id} anime={animeFromTheList} />
			))}
			<div className="bouton">
				<button type="button">Watchlist</button>
				<button type="button">Vus</button>
			</div>
		</>
	);
}

export default Watchlist;
