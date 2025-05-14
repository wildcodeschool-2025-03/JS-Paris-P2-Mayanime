import { Navigate } from "react-router-dom";
import AddWatchlistButton from "./AddWatchlistButton";

function AnimeCardPourLaWatchlist({ anime }) {
	return (
		<>
			<article key={anime.mal_id}>
				<a href="/">
					<img src={anime.images.jpg.image_url} alt="" />
				</a>
				<p>{anime.title}</p>
				<p>{anime.score}⭐</p>
				<p>{anime.episodes}🎞️</p>
				<div className="redirection">
					<button onClick={() => Navigate("/Description")} type="button">
						En savoir plus
					</button>
					<AddWatchlistButton anime={anime} />
				</div>
			</article>
		</>
	);
}

export default AnimeCardPourLaWatchlist;
