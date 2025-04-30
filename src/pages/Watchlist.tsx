import dbz from "../assets/DBZ.jpg";
import saintseiya from "../assets/Saint Seiya.png";
import { useEffect, useState } from "react";
function Watchlist() {
	const [animeList, setAnimeList] = useState([])
	useEffect (()=> {
		fetch("https://api.jikan.moe/v4/anime").then((response) => response.json()).then((fullData) => setAnimeList(fullData.data))
	}, [])
	console.log (animeList)
	return (
		<>
		{animeList.map ((anime)=>(
		<section className="seiya">
				<div className="image1">
					<img src={anime.images.webp.image_url} alt="" />
					<div>
						<p>{anime.title_japanese}</p>
						<p>{anime.title_english}</p>
						<p>Doublage-Sous titres</p>
					</div>
					<div className="bouton2">
						<button type="button">Vu</button>
						<button type="button">Supprimer</button>
					</div>
				</div>
			</section>	
		))}
			<div className="bouton">
				<button type="button">Watchlist</button>
				<button type="button">Vus</button>
			</div>
		</>
	);
}

export default Watchlist;
