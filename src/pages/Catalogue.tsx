import { useState } from "react";
import AnimeCards from "../components/AnimeCards";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";
import "./Catalogue.css";

function Catalogue() {
  const [search, setSearch] = useState("");

  return (
    <>
      <body>
        <div className="searchBar">
          <SearchBar search={search} setSearch={setSearch} />
        </div>
        <main className="catalogue">
          <div className="sideBar">
            <aside>
              <FilterBar />
            </aside>
          </div>
          <section className="animeCards">
            <AnimeCards search={search} />
          </section>
        </main>
      </body>
    </>
  );
}

export default Catalogue;
