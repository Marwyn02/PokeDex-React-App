const URL = "https://pokeapi.co/api/v2";
const query = {
  pokemon_species: "pokemon-species",
};

export async function GetSpeciesPokemon(pokemon_species) {
  // console.log(`${URL}/${query.pokemon_species}/${pokemon_species}`);
  return fetch(`${URL}/${query.pokemon_species}/${pokemon_species}`, {
    method: "GET",
  });
}
