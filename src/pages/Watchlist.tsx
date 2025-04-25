import "./Watchlist.css";
import dbz from "../assets/DBZ.jpg";
import saintseiya from "../assets/Saint Seiya.png";
function Watchlist() {
	return (
		<>
			<div className="bouton">
				<button type="button">Watchlist</button>
				<button type="button">Vus</button>
			</div>

			<section className="seiya">
				<div className="image1">
					<img src={saintseiya} alt="" />
					<div>
						<p>SAINT SEIYA/LES CHEVALIERS DU ZODIAQUE</p>
						<p>Doublage-Sous titres</p>
					</div>
					<div className="bouton2">
						<button type="button">Vu</button>
						<button type="button">Supprimer</button>
					</div>
				</div>
			</section>

			<section className="goku">
				<div className="image1">
					<img src={dbz} alt="" />
					<div>
						<p>DRAGON BALL Z</p>
						<p>Doublage-Sous titres</p>
					</div>
					<div className="bouton2">
						<button type="button">Vu</button>
						<button type="button">Supprimer</button>
					</div>
				</div>
			</section>
		</>
	);
}

export default Watchlist;
