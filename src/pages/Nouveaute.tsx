import "./Nouveaute.css";
import onePieceImg from "../images/onepiece.png";

function Nouveaute() {
  return (
    <>
      <main className="main-content">
        <section className="text-section">
          <h1>One piece</h1>
          <h2>Synopsis :</h2>
          <p>
            Monkey D. Luffy est un jeune aventurier qui a toujours rêvé d'une
            vie de liberté. Quittant son village, il se lance dans un périlleux
            voyage à la recherche d'un trésor mythique, le One Piece, afin de
            devenir le roi des pirates !
          </p>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button className="btn-more">En savoir plus</button>
        </section>
        <section className="image-section">
          <img
            src={onePieceImg}
            alt="One piece characters"
            className="main-image"
          />
        </section>
      </main>
    </>
  );
}

export default Nouveaute;
