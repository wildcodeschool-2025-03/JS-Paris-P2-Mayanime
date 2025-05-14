import { createContext, useState } from "react";

const selectionWatchlistContext = createContext(null);

function SelectionWatchlistProvider({ children }) {
	const [selectionWatchlist, setSelectionWatchlist] = useState([]);

	return (
		<selectionWatchlistContext.Provider
			value={{ selectionWatchlist, setSelectionWatchlist }}
		>
			{children}
		</selectionWatchlistContext.Provider>
	);
}

export default selectionWatchlistContext;
export { SelectionWatchlistProvider };
