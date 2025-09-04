import { State } from '../state.js';
import terminalImage from 'terminal-image';
import { displayPokemonInfo } from '../helpers/helper_displayPokemon.js';

export async function commandCatch(state: State, pokemonName: string) {
  const pokedex = state.pokedex;

  if (pokedex[pokemonName]?.caught) {
    console.log(`You already caught ${pokemonName}!`);
    return;
  }

  console.log(`Throwing a Pokeball at ${pokemonName}...`);

  const pokemonData = await state.pokeAPI.fetchPokemon(pokemonName);

  const difficulty = Math.min(pokemonData.base_experience / 600, 1);

  let catchRate = 0.5 * (1 - difficulty);

  catchRate = Math.max(0.05, Math.min(catchRate, 0.9));

  if (Math.random() < catchRate) {
    let caughtPokemon = { ...pokemonData, caught: true };
    pokedex[pokemonName] = caughtPokemon;

    console.log(`\n✨ You caught ${pokemonName}! ✨`);

    displayPokemonInfo(caughtPokemon);
  } else {
    console.log(`Oh no! ${pokemonName} broke free!\n`);
  }
}
