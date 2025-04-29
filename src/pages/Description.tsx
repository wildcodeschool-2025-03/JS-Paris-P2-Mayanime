import { useState } from "react";
import "./Description.css";
import pieceImage from "../assets/img/Piece.jpg";
import mayanimeLogo from "../assets/img/mayanime.png";
import onePieceLogo from "../assets/img/onepiece.png";
// import video from "../assets/img/video.mp4";

function Description() {
	const [showTrailer, setShowTrailer] = useState(false);

	return (
		<>
			<section className="all">
				<div className="close-button">✕</div>

				<section className="hero">
					<img src={pieceImage} alt="One Piece" className="hero-img" />
					<div className="hero-gradient" />
					<img
						src={mayanimeLogo}
						alt="mayanime logo"
						className="mayanime-logo"
					/>
					<img
						src={onePieceLogo}
						alt="One Piece Logo"
						className="onepiece-logo"
					/>
					<p>
						<strong>Plongez dans une aventure extraordinaire!</strong>
					</p>
				</section>

				<section className="description-block">
					<div className="description-top">
						<button
							className="btn-trailer"
							onClick={() => setShowTrailer(true)}
							type="button"
						>
							▶ Bande-annonce
						</button>

						<div className="rating-box">
							<span>★★★★☆</span>
						</div>

						<button className="btn-add" type="button">
							Ajouter à ma liste ➕
						</button>
					</div>

					<div className="rating-info">
						<span className="rating-text">
							Noté <strong>4.8 ★</strong> par nos utilisateurs
						</span>
						<span className="separator">|</span>
						<span>2003</span>
						<span className="separator">|</span>
						<span>13+</span>
						<span className="separator">|</span>
						<span>22 saisons</span>
					</div>

					<div className="description-content">
						<div className="left">
							<p>
								<strong>"One Piece"</strong> suit les aventures de Monkey D.
								Luffy, un jeune pirate, dont le corps a acquis les propriétés du
								caoutchouc après avoir mangé un Fruit du Démon. Avec son
								équipage, les Mugiwara (Chapeaux de Paille), il parcourt la mer
								à la recherche du trésor légendaire, le One Piece, afin de
								devenir le Roi des Pirates.
							</p>
						</div>
						<div className="right">
							<p>
								<strong style={{ color: "#733597" }}>Distribution:</strong>{" "}
								Mayumi Tanaka, Kazuya Nakai, Akemi Okamura, Kappei Yamaguchi...
							</p>
							<p>
								<strong style={{ color: "#733597" }}>Genre:</strong> Action,
								Aventure, Fantastique, Comédie
							</p>
							<p>
								<strong style={{ color: "#733597" }}>Thèmes:</strong> Piraterie,
								Liberté, Amitié, Héritage, Justice...
							</p>
						</div>
					</div>

					<button className="btn-avis" type="button">
						💬 Avis <span className="badge">27</span>
					</button>
				</section>
			</section>

			{showTrailer && (
				<div className="video-modal">
					<button
						className="close-button"
						onClick={() => setShowTrailer(false)}
						type="button"
					>
						✕
					</button>
					{/* biome-ignore lint/a11y/useMediaCaption: no subtitle translation */}
					<video controls autoPlay className="trailer-video">
						{/* <source src={video} type="video/mp4" /> */}
						Votre navigateur ne supporte pas la vidéo.
					</video>
				</div>
			)}
		</>
	);
}

export default Description;
