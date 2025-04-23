import AnimeCards from "../components/AnimeCards";
import FilterBar from "../components/FilterBar";
import "./Catalogue.css";

function Catalogue() {
  return (
    <>
      <body>
        <div className="searchBar">
          <input type="text" placeholder="Search..." />
          <button type="button">🔍︎</button>
        </div>
        <main className="catalogue">
          <div className="sideBar">
            <aside>
              <FilterBar />
            </aside>
          </div>
          <section className="animeCards">
            <AnimeCards />
          </section>
        </main>
      </body>
    </>
  );
}

export default Catalogue;
