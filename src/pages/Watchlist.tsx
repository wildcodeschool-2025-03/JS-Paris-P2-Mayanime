import "./Watchlist.css";
import { useEffect, useState } from "react";
import { useContext } from "react";
import AddWatchlistButton from "../components/AddWatchlistButton";
import AnimeCards from "../components/AnimeCards";
import selectionWatchlistContext from "../context/selectionWatchlist";
// function WatchAnime({ anime }) {
// 	const [insideWatchlist, setInsideWatchlist] = useState(
// 		localStorage.getItem(`${anime.mal_id}-vu`) === "true",
// 	const {}
// 	);

// 	return (
// 		<section className="seiya">
// 			<div className="image1">
// 				<img src={anime.images.webp.image_url} alt="" />
// 				<div>
// 					<p>{anime.title_japanese}</p>
// 					<p>{anime.title_english}</p>
// 					<h1>Doublage - Sous titres</h1>
// 				</div>
// 				<div className="bouton2">
// 					{!insideWatchlist ? (
// 						<button
// 							type="button"
// 							onClick={() => {
// 								setInsideWatchlist(true);
// 								localStorage.setItem(`${anime.mal_id}-vu`, "true");
// 							}}
// 						>
// 							Vu
// 						</button>
// 					) : (
// 						<button
// 							type="button"
// 							onClick={() => {
// 								setInsideWatchlist(false);
// 								localStorage.removeItem(`${anime.mal_id}-vu`);
// 							}}
// 						>
// 							Supprimer
// 						</button>
// 					)}
// 				</div>
// 			</div>
// 		</section>
// 	);
// }
// function Watchlist() {
// 	const [animeList, setAnimeList] = useState([]);
// 	useEffect(() => {
// 		fetch("https://api.jikan.moe/v4/anime")
// 			.then((response) => response.json())
// 			.then((fullData) => setAnimeList(fullData.data));
// 	}, []);
// 	return (
// 		<>
// 			{animeList.map((animeFromTheList) => (
// 				<WatchAnime key={animeFromTheList.mal_id} anime={animeFromTheList} />
// 			))}
// 			<div className="bouton">
// 				<button type="button">Watchlist</button>
// 				<button type="button">Vus</button>
// 			</div>
// 		</>
// 	);
// }
function Watchlist() {
	const { selectionWatchlist } = useContext(selectionWatchlistContext);

	return (
		<div className="bouton">
			{selectionWatchlist.map((anime) => (
				<AnimeCards key={anime.mal_id} anime={anime} />
			))}
		</div>
	);
}

export default Watchlist;
