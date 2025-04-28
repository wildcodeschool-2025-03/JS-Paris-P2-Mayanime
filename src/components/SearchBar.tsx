function SearchBar({ search, setSearch }) {
  const handleChange = (event) => {
    console.info(event.target.value);
    setSearch(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Votre recherche..."
        onChange={handleChange}
      />
      <button type="button">🔍︎</button>
    </>
  );
}

export default SearchBar;

// INPUT ---
// je veux récupérer ce qu'il y'a dans mon input afin de le stocker qq part
//  BOUTTON ---
// quand je vais cliquer sur le btn, je récup ce qui est dans le input
// j'utilise ce que je récupere pour filtrer mes cartes

// etape 1 : je vais aller stocker les données récuperer par mon input dans un state, pour le mettre à jour notre state avec onChange
