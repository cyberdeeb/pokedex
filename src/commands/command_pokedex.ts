import { State } from '../state.js';

export async function commandPokedex(state: State) {
  const pokedex = state.pokedex;
  const caughtPokemon = Object.values(pokedex).filter((p) => p.caught);

  if (caughtPokemon.length === 0) {
    console.log(
      "You haven't caught any Pokémon yet! Use 'catch <pokemon>' to catch one."
    );
    return;
  }

  console.log(`\n📖 Your Pokedex:`);
  caughtPokemon.forEach((pokemon) => {
    console.log(`  - ${pokemon.name}`);
  });
  console.log(`\nTotal caught: ${caughtPokemon.length}\n`);
}
