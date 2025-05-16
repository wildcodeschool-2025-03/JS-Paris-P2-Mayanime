import { useEffect, useState } from "react";
import "./Description.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface Anime {
	anime: {
		mal_id: number;
		title: string;
		score: number;
		episodes: number;
		year: number;
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
	};
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

	return (
		<>
			{description && (
				<section className="all">
					{/* <div className="close-button">✕</div> */}

					{/* <section className="hero">
						<img
							src={description.images.webp.large_image_url}
							alt={description.title}
						/>
						<div className="hero-gradient" />
					</section> */}

					<section className="description-block">
						<div className="description-top">
							{/* <p>▶ Bande-annonce</p> */}
							{description.trailer.embed_url == null ? (
								<p>indisponible :/</p>
							) : (
								<iframe
									src={description.trailer.embed_url}
									title={`Trailer de ${description.title}`}
									className="trailer-video"
									width="100%"
									height="400"
									allowFullScreen
								/>
							)}

							<div className="rating-box">
								<span>★★★★☆</span>
							</div>

							<button className="btn-add" type="button">
								Ajouter à ma liste ➕
							</button>
						</div>

						<div className="rating-info">
							<span className="rating-text">
								Noté <strong>{description.score}</strong> par nos utilisateurs
							</span>
							<span className="separator">|</span>
							<span>{description.year}</span>
							<span className="separator">|</span>
							<span>13+</span>
							<span className="separator">|</span>
							<span>{description.episodes}</span>
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
			)}
		</>
	);
}

export default Description;
