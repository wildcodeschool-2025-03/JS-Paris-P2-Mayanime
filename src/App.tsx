import { Outlet } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Intro from "./components/Intro"; // Import du composant Intro
import Nav from "./components/Nav";

function App() {
	const [introDone, setIntroDone] = useState(false);

	return (
		<>
			{!introDone && <Intro onFinish={() => setIntroDone(true)} />}

			{introDone && (
				<>
					<nav>
						<Nav />
					</nav>
					<Outlet />
				</>
			)}
		</>
	);
}

export default App;
