import { useState } from "react";
import AnimeCards from "../components/AnimeCards";
import FilterBar from "../components/FilterBar";
import "./Catalogue.css";
function Catalogue() {
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState("");

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
              <FilterBar setChecked={setChecked} setName={setName} />
            </aside>
          </div>
          <section className="animeCards">
            <AnimeCards checked={checked} name={name} />
          </section>
        </main>
      </body>
    </>
  );
}

export default Catalogue;
