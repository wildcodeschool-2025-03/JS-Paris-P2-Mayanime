import type React from "react";
import { useEffect, useState } from "react";
import "./Intro.css";
import logo from "../assets/img/mayanime.png";

const Intro: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		// Durée totale de l’animation ~4.2s donc on attend un peu plus
		const timer = setTimeout(() => {
			setVisible(false);
			onFinish();
		}, 4500);

		return () => clearTimeout(timer);
	}, [onFinish]);

	if (!visible) return null;

	return (
		<div className="intro">
			<img src={logo} alt="Mayanime Logo" className="intro-logo" />
			<p className="intro-text">Streaming & Anime</p>
		</div>
	);
};

export default Intro;
