import "./Watchlist.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AnimeCardPourLaWatchlist from "../components/AnimeCardPourLaWatchlist";
import selectionWatchlistContext from "../context/selectionWatchlist";

// Typage minimal pour anime
interface Anime {
	mal_id: number;
	// autres propriétés possibles
}

// Typage attendu du contexte
interface SelectionWatchlistContextType {
	selectionWatchlist: Anime[];
}

function Watchlist() {
	// Caster le contexte pour préciser le type
	const context = useContext(
		selectionWatchlistContext,
	) as SelectionWatchlistContextType | null;
	const navigate = useNavigate();

	// Accès sécurisé à selectionWatchlist
	const selectionWatchlist: Anime[] = context?.selectionWatchlist || [];

	const handleGoToCatalog = () => {
		navigate("/Catalogue"); // adapte selon ta route
	};

	if (selectionWatchlist.length === 0) {
		return (
			<div
				className="bouton empty"
				style={{
					minHeight: "60vh",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					gap: "30px",
				}}
			>
				<p>Ajoutez des animés à votre liste !</p>
				<button type="button" onClick={handleGoToCatalog}>
					Voir le catalogue
				</button>
			</div>
		);
	}

	return (
		<div className="bouton">
			{selectionWatchlist.map((anime: Anime) => (
				<AnimeCardPourLaWatchlist key={anime.mal_id} anime={anime} />
			))}
		</div>
	);
}

export default Watchlist;
