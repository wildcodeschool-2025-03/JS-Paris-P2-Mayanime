import { useState } from "react";
import AnimeCards from "../components/AnimeCards";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";
import "./Catalogue.css";
function Catalogue() {
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState("");
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
              <FilterBar setChecked={setChecked} setName={setName} />
            </aside>
          </div>
          <section className="animeCards">
            <AnimeCards checked={checked} name={name} search={search} />
          </section>
        </main>
      </body>
    </>
  );
}

export default Catalogue;
