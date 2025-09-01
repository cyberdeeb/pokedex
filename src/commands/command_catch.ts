import { State } from '../state.js';
import terminalImage from 'terminal-image';

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

    console.log(`✨ You caught ${pokemonName}! ✨`);

    const spriteUrl =
      (caughtPokemon as any)?.sprites?.front_default ??
      (caughtPokemon as any)?.spriteUrl ??
      null;

    if (spriteUrl) {
      try {
        const resp = await fetch(spriteUrl);
        const buf = Buffer.from(await resp.arrayBuffer());
        console.log(
          await terminalImage.buffer(buf, { preserveAspectRatio: true })
        );
      } catch {
        console.log('(Could not render sprite, showing URL instead)');
        console.log(spriteUrl);
      }
    } else {
      console.log('(No sprite available)');
    }

    for (const [key, value] of Object.entries(caughtPokemon)) {
      if (key == 'sprites') continue;
      console.log(`  ${key}: ${value}`);
    }
  } else {
    console.log(`Oh no! ${pokemonName} broke free!`);
  }
}
