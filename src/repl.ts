import { State } from './state.js';

export async function startREPL(state: State) {
  const { readline, commands } = state;

  readline.prompt();

  readline.on('line', async (input) => {
    const words = cleanInput(input);
    if (words.length === 0) {
      readline.prompt();
      return;
    }

    const commandName = words[0];

    if (!(commandName in commands)) {
      console.log(
        `Unknown command: "${commandName}". Type "help" for a list of commands.`
      );
      readline.prompt();
    } else {
      try {
        await commands[commandName].callback(state);
      } catch (error) {
        console.error(`Error executing command "${commandName}":`, error);
      }
      readline.prompt();
    }
  });
}

export function cleanInput(input: string): string[] {
  return input.trim().toLowerCase().split(/\s+/);
}
