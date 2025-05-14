import { createContext, useState } from "react";

const selectionWatchlistContext = createContext(null);

function SelectionWatchlistProvider({ children }) {
	const [selectionWatchlist, setSelectionWatchlist] = useState([]);

	const isItSelected = (anime) => {
		const exist = selectionWatchlist.find((select) => select.id === anime.id);
		if (exist) return true;
		return false;
	};
	const removeSelection = (anime) => {
		const selects = selectionWatchlist.filter(
			(select) => select.id !== anime.id,
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
