import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";

function App() {
	return (
		<>
			<nav>
				<Nav />
			</nav>
			<Outlet />
		</>
	);
}

export default App;
