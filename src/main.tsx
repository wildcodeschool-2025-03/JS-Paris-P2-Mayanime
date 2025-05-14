import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { SelectionWatchlistProvider } from "./context/selectionWatchlist.tsx";
import router from "./pages/Router.tsx";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<SelectionWatchlistProvider>
		<RouterProvider router={router} />
	</SelectionWatchlistProvider>,
);
