import { createContext, useState } from "react";

const selectionWatchlistContext = createContext(null);

function SelectionWatchlistProvider({ children }) {
	const [selectionWatchlist, setSelectionWatchlist] = useState([]);

	const isItSelected = (anime) => {
		console.log(anime);
		
		const exist = selectionWatchlist.find((select) => select.mal_id === anime.mal_id);
		if (exist) return true;
		return false;
	};
	const removeSelection = (anime) => {
		const selects = selectionWatchlist.filter(
			(select) => select.mal_id !== anime.mal_id,
		);
		setSelectionWatchlist(selects);
	};

	return (
		<selectionWatchlistContext.Provider
			value={{
				selectionWatchlist,
				setSelectionWatchlist,
				isItSelected,
				removeSelection,
			}}
		>
			{children}
		</selectionWatchlistContext.Provider>
	);
}

export default selectionWatchlistContext;
export { SelectionWatchlistProvider };
