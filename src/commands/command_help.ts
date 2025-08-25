import type { State } from 'src/state.js';

export async function commandHelp(state: State) {
  const { commands } = state;
  console.log('Welcome to the Pokedex!');
  console.log('Usage:');
  console.log('\n');
  for (const command in commands) {
    console.log(`  ${command}: ${commands[command].description}`);
  }
}
