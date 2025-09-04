import { State } from '../state.js';
import { displayPokemonInfo } from '../helpers/helper_displayPokemon.js';

export async function commandInspect(state: State, pokemonName: string) {
  const pokedex = state.pokedex;

  const pokemon = pokedex[pokemonName];
  if (!pokemon) {
    console.log(
      `You haven't caught ${pokemonName} yet! Use 'catch ${pokemonName}' to try and catch it.`
    );
    return;
  }

  displayPokemonInfo(pokemon, true);
}
