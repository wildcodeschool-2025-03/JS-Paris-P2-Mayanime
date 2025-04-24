import "./Nouveaute.css";

function Nouveaute() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={LogoMayanime} alt="logo" />
        </div>
        <div className="navigation">
          <button type="button">Catalogue</button>
          <button type="button">Nouveauté</button>
          <button type="button">Watchlist</button>
          <button type="button">Profile</button>
        </div>
      </nav>
    </>
  );
}

export default Nouveaute;
