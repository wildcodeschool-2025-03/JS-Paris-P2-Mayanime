import "./Watchlist.css";
import { useContext } from "react";
import AnimeCardPourLaWatchlist from "../components/AnimeCardPourLaWatchlist";
import selectionWatchlistContext from "../context/selectionWatchlist";

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
				<AnimeCardPourLaWatchlist key={anime.mal_id} anime={anime} />
			))}
		</div>
	);
}

export default Watchlist;
