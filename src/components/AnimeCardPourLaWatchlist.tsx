import { Navigate, useNavigate } from "react-router-dom";
import AddWatchlistButton from "./AddWatchlistButton";
import "../pages/Description";

function AnimeCardPourLaWatchlist({ anime }) {
	const Navigate = useNavigate();
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
					<button
						type="button"
						onClick={() => Navigate(`/Description/${anime.mal_id}`)}
					>
						En savoir plus
					</button>
					<AddWatchlistButton anime={anime} />
				</div>
			</article>
		</>
	);
}

export default AnimeCardPourLaWatchlist;
