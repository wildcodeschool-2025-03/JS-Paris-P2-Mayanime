import AnimeCards from "../components/AnimeCards";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";
import "./Catalogue.css";

function Catalogue() {
  return (
    <>
      <body>
        <div className="searchBar">
          <SearchBar />
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
