import { useContext } from "react";
import selectionWatchlistContext from "../context/selectionWatchlist";

function AddWatchlistButton({ anime }) {
	const { selectionWatchlist, setSelectionWatchlist } = useContext(
		selectionWatchlistContext,
	);
	return (
		<button
			type="button"
			onClick={() => setSelectionWatchlist([...selectionWatchlist, anime])}
		>
			Ajouter à la Watchlist ​🕛​​
		</button>
	);
}
export default AddWatchlistButton;
