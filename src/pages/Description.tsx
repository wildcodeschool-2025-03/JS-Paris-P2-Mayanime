import { useEffect, useState } from "react";
import "./Description.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AddWatchlistButton from "../components/AddWatchlistButton";

// Interfaces
interface Genres {
	name: string;
}
interface Producers {
	name: string;
}
interface Themes {
	name: string;
}
interface Anime {
	mal_id: number;
	title: string;
	score: number;
	episodes: number;
	year: number;
	rating: string;
	trailer: {
		embed_url: string;
	};
	images: {
		webp: {
			large_image_url: string;
		};
	};
	synopsis: string;
	type: string;
	name: string;
	genres: Genres[];
	themes: Themes[];
	producers: Producers[];
}

function Description() {
	const { mal_id } = useParams();
	const [description, setDescription] = useState<Anime | null>(null);

	const navigate = useNavigate();

	useEffect(() => {
		const getDescription = async () => {
			const response = await fetch(`https://api.jikan.moe/v4/anime/${mal_id}`);
			const data = await response.json();
			setDescription(data.data);
		};

		getDescription();
	}, [mal_id]);

	if (!description) {
		return <p>Chargement...</p>;
	}

	return (
		<section className="all">
			<section className="description-block">
				<div className="description-top">
					{description.trailer?.embed_url ? (
						<iframe
							src={description.trailer.embed_url}
							title={`Trailer de ${description.title}`}
							className="trailer-video"
							width="100%"
							height="400"
							allowFullScreen
						/>
					) : (
						<p>Trailer indisponible</p>
					)}

					<div className="rating-box">
						<span>★★★★☆</span>
					</div>

					{/* ✅ On passe le bon anime ici */}
					<AddWatchlistButton anime={description} />
				</div>

				<div className="rating-info">
					<span className="rating-text">
						Noté <strong>{description.score}</strong> par nos utilisateurs
					</span>
					<span className="separator">|</span>
					<span>{description.year}</span>
					<span className="separator">|</span>
					<span>{description.rating}</span>
					<span className="separator">|</span>
					<span>
						<strong>{description.episodes}</strong> épisodes
					</span>
				</div>

				<div className="description-content">
					<div className="left">
						<p>{description.synopsis}</p>
					</div>
					<div className="right">
						<p>
							<strong style={{ color: "#733597" }}>Production:</strong>{" "}
							{description.producers.map((p) => p.name).join(", ")}
						</p>
						<p>
							<strong style={{ color: "#733597" }}>Genre:</strong>{" "}
							{description.genres.map((g) => g.name).join(", ")}
						</p>
						<p>
							<strong style={{ color: "#733597" }}>Thèmes:</strong>{" "}
							{description.themes.map((t) => t.name).join(", ")}
						</p>
					</div>
				</div>

						<div className="description-content">
							<div className="left">
								<p>{description.synopsis}</p>
							</div>
							<div className="right">
								<p>
									<strong style={{ color: "#733597" }}>Distribution:</strong>{" "}
									Mayumi Tanaka, Kazuya Nakai, Akemi Okamura, Kappei
									Yamaguchi...
								</p>
								<p>
									<strong style={{ color: "#733597" }}>Genre:</strong> Action,
									Aventure, Fantastique, Comédie
								</p>
								<p>
									<strong style={{ color: "#733597" }}>Thèmes:</strong>{" "}
									Piraterie, Liberté, Amitié, Héritage, Justice...
								</p>
							</div>
						</div>

						<button
							onClick={() => navigate("/Commentaire")}
							className="btn-avis"
							type="button"
						>
							💬 Avis <span className="badge">27</span>
						</button>
					</section>
				</section>
	);
}
export default Description;
