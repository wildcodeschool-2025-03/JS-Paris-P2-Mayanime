import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Catalogue from "./Catalogue";
import Description from "./Description";
import Nouveaute from "./Nouveaute";
import Profile from "./Profile";
import Watchlist from "./Watchlist";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Nouveaute />,
			},
			{
				path: "/Catalogue",
				element: <Catalogue />,
			},

			{
				path: "/Description/:mal_id",
				element: <Description />,
			},

			{
				path: "/Watchlist",
				element: <Watchlist />,
			},
			{
				path: "/Profile",
				element: <Profile />,
			},
		],
	},
]);

export default router;
