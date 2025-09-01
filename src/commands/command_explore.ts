import { State } from '../state.js';

export async function commandExplore(state: State, location: string) {
  const locationData = await state.pokeAPI.fetchLocation(location);

  let pokemonMap = locationData.pokemon_encounters;

  console.log('Exploring ', location);
  console.log('Found Pokemon:');
  for (const pokemonEntry of pokemonMap) {
    console.log(`- ${pokemonEntry.pokemon.name}`);
  }
}
