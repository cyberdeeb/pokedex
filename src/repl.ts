import { createInterface } from 'readline';
import { getCommands } from './get_commands.js';
import { State } from './state.js';

export function startREPL(state: State) {
  const { rl, commands } = state;

  rl.prompt();

  rl.on('line', async (input) => {
    const words = cleanInput(input);
    if (words.length === 0) {
      rl.prompt();
      return;
    }

    const commandName = words[0];

    if (commandName === 'exit') {
      commands[commandName].callback(state);
    } else if (!(commandName in commands)) {
      console.log(`Unknown command: ${commandName}`);
      rl.prompt();
    } else {
      commands[commandName].callback(state);
      rl.prompt();
    }
  });
}

export function cleanInput(input: string): string[] {
  return input.trim().toLowerCase().split(/\s+/);
}
