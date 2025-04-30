import { Link } from "react-router-dom";
import logo from "../assets/images/logoResize.png";
function Nav() {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navigation">
        <button type="button">
          <Link to="/">Nouveautés</Link>
        </button>
        <button type="button">
          <Link to="/Watchlist">Watchlist</Link>
        </button>
        <button type="button">
          <Link to="/Catalogue">Catalogue</Link>
        </button>
        <button type="button">
          <Link to="/Profile">Profile</Link>
        </button>
      </div>
    </>
  );
}

export default Nav;
