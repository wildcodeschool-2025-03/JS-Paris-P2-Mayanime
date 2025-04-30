import "../pages/Catalogue.css";

function FilterBar({ setChecked, setName }) {
  const clickChange = (event) => {
    setChecked(event.target.checked);
    // console.log(setChecked);

    setName(event.target.name);
    // console.log(event.target.name);
    // console.log(event.target.checked);
  };

  return (
    <>
      <div className="langues" />
      <h4>Status</h4>
      <div>
        <input type="checkbox" name="Currently Airing" onClick={clickChange} />
        <label htmlFor="Currently Airing">Currently Airing</label>
      </div>
      {/* <div>
        <input type="checkbox" name="Currently Airing" onClick={clickChange} />
        <label for="Currently Airing">Currently Airing</label>
      </div>
      <div>
        <input type="checkbox" name="Movie" onClick={clickChange} />
        <label for="Movie">Movie</label>
      </div> */}
      {/* <h4>Âges</h4>
      <input type="checkbox" name="Pour tous" onClick={clickChange} />
      <input type="checkbox" name="16" onClick={clickChange} />
      <input type="checkbox" name="12" onClick={clickChange} />
      <h4>Types</h4>
      <input type="checkbox" name="Shōnen" onClick={clickChange} />
      <input type="checkbox" name="Seinen" onClick={clickChange} />
      <input type="checkbox" name="Shōjo" onClick={clickChange} />
      <h4>Genres</h4>
      <input type="checkbox" name="action" onClick={clickChange} />
      <input type="checkbox" name="comédie" onClick={clickChange} />
      <input type="checkbox" name="horreur" onClick={clickChange} />
      <input type="checkbox" name="romance" onClick={clickChange} />
      <h4>Popularité</h4>
      <input type="checkbox" name="Les mieux notés" onClick={clickChange} /> */}
    </>
  );
}

export default FilterBar;

// Je souhaite que lorsque j'appuie sur les filtres
// qui sont dans les checkbox un filtre s'applique.

// Etape 1 : ajouter un événement sur les checkbox
// Etape 2: mettre en place l'événement du click; je lui
// ai passé le nom "clickChange"_ on va devoir la stocker
// pour pouvoir l'utiliser, OK
// Etape 3 : OK l'événement fonctionne mtn on doit aller
// chercher la donnée
