import { createInterface } from 'readline';
import { getCommands } from './get_commands.js';

export function startREPL() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'pokedex > ',
  });

  rl.prompt();

  rl.on('line', async (input) => {
    const words = cleanInput(input);
    if (words.length === 0) {
      rl.prompt();
      return;
    }

    const commandName = words[0];
    const commands = getCommands();

    if (commandName === 'exit') {
      commands[commandName].callback(commands);
    } else if (!(commandName in commands)) {
      console.log(`Unknown command: ${commandName}`);
      rl.prompt();
    } else {
      commands[commandName].callback(commands);
      rl.prompt();
    }
  });
}

export function cleanInput(input: string): string[] {
  return input.trim().toLowerCase().split(/\s+/);
}
