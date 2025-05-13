import { useState } from "react";
import AnimeCards from "../components/AnimeCards";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";
import "./Catalogue.css";
function Catalogue() {
	const [checked, setChecked] = useState(false);
	const [search, setSearch] = useState("");

	return (
		<>
			<body>
				<div className="searchBar">
					<SearchBar search={search} setSearch={setSearch} />
				</div>
				<main className="catalogue">
					<div className="sideBar">
						<aside>
							<FilterBar setChecked={setChecked} />
						</aside>
					</div>
					<section className="animeCards">
						<AnimeCards checked={checked} search={search} />
					</section>
				</main>
			</body>
		</>
	);
}

export default Catalogue;
