import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<nav>
				<h1>MayAnime !</h1>
				<button type="button">
					<Link to="/">Nouveauté</Link>
				</button>
				<button type="button">
					<Link to="/Watchlist">Watchlist</Link>
				</button>
				<button type="button">
					<Link to="/Catalogue">Catalogue</Link>
				</button>
				<button type="button">
					<Link to="/Profile">Profile</Link>
				</button>
			</nav>
			<Outlet />
		</>
	);
}

export default App;
