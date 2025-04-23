import avatar from "../assets/images/avatar.png";
import logo from "../assets/images/logoResize.png";
function Nav() {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navigation">
        <a href="/">
          <button type="button">Catalogue</button>
        </a>
        <a href="/">
          <button type="button">Nouveautés</button>
        </a>
        <a href="/">
          <button type="button">Watchlist</button>
        </a>
        <a href="/">
          <img src={avatar} alt="avatar" />
        </a>
      </div>
    </>
  );
}

export default Nav;
