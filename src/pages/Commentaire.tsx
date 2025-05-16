import { useEffect, useState } from "react";
import "./Commentaire.css";
import { useNavigate } from "react-router-dom";

interface Comment {
	id: string;
	user: string;
	date: string;
	rating: number;
	text: string;
}

const Commentaire = () => {
	const navigate = useNavigate(); // Si tu veux rediriger plus tard
	const [rating, setRating] = useState(1);
	const [text, setText] = useState("");
	const [user, setUser] = useState("");
	const [comments, setComments] = useState<Comment[]>([]);

	useEffect(() => {
		const storedComments = localStorage.getItem("comments");
		if (storedComments) {
			setComments(JSON.parse(storedComments));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("comments", JSON.stringify(comments));
	}, [comments]);

	const handleSubmit = () => {
		if (!text.trim() || !user.trim()) return;

		const today = new Date().toLocaleDateString("fr-FR", {
			day: "numeric",
			month: "long",
			year: "numeric",
		});

		const newComment: Comment = {
			id: crypto.randomUUID(),
			user,
			date: today,
			rating,
			text,
		};

		setComments([newComment, ...comments]);
		setText("");
		setRating(1);
		setUser("");
	};

	return (
		<div className="comments-container">
			<div className="comment-list">
				<h2>Commentaires récents</h2>
				<div className="comment-scroll">
					{comments.map((c) => (
						<div key={c.id} className="comment-card">
							<div className="header">
								<span className="user">{c.user}</span>
								<span className="date">{c.date}</span>
							</div>
							<div className="stars">
								{"★".repeat(c.rating)}
								{"☆".repeat(5 - c.rating)}
							</div>
							<p>{c.text}</p>
						</div>
					))}
				</div>
			</div>

			<div className="comment-form">
				<h3>Ajouter un commentaire</h3>
				<input
					type="text"
					placeholder="Ton pseudo"
					value={user}
					onChange={(e) => setUser(e.target.value)}
				/>
				<div className="star-input">
					{["one", "two", "three", "four", "five"].map((label, i) => (
						<button
							key={`star-${label}`}
							type="button"
							onClick={() => setRating(i + 1)}
							onKeyDown={(e) => e.key === "Enter" && setRating(i + 1)}
							className={i < rating ? "active star-button" : "star-button"}
							aria-label={`Note ${i + 1} étoiles`}
						>
							{i < rating ? "★" : "☆"}
						</button>
					))}
				</div>

				<textarea
					placeholder="Exprime-toi..."
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<button type="button" onClick={handleSubmit}>
					Envoyer
				</button>
			</div>
		</div>
	);
};

export default Commentaire;
