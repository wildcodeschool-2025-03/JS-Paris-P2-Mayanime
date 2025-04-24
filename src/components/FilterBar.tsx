import "../pages/Catalogue.css";

function FilterBar() {
	return (
		<>
			<div className="langues" />
			<h4>Langues</h4>
			<input type="checkbox" name="VO" />
			<input type="checkbox" name="VF" />
			<h4>Âges</h4>
			<input type="checkbox" name="Pour tous" />
			<input type="checkbox" name="16" />
			<input type="checkbox" name="12" />
			<h4>Types</h4>
			<input type="checkbox" name="Shōnen" />
			<input type="checkbox" name="Seinen" />
			<input type="checkbox" name="Shōjo" />
			<h4>Genres</h4>
			<input type="checkbox" name="action" />
			<input type="checkbox" name="comédie" />
			<input type="checkbox" name="horreur" />
			<input type="checkbox" name="romance" />
			<h4>Popularité</h4>
			<input type="checkbox" name="Les mieux notés" />
		</>
	);
}

export default FilterBar;
