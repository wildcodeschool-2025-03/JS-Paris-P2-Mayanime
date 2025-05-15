import { useContext } from "react";
import selectionWatchlistContext from "../context/selectionWatchlist";

function AddWatchlistButton({ anime }) {
	const {
		selectionWatchlist,
		setSelectionWatchlist,
		isItSelected,
		removeSelection,
	} = useContext(selectionWatchlistContext);
	return (
		<button
			type="button"
			onClick={() =>
				!isItSelected(anime)
					? setSelectionWatchlist([...selectionWatchlist, anime])
					: removeSelection(anime)
			}
		>
				
			{!isItSelected(anime)
				? "Ajouter à la Watchlist ​🕛"
				: "Supprimer de la Watchlist "}
			​​
		</button>
				
	);
}
export default AddWatchlistButton;
