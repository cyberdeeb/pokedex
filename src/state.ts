import { createInterface, type Interface } from 'readline';
import { getCommands } from './get_commands.js';

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};

export type State = {
  rl: Interface;
  commands: Record<string, CLICommand>;
};

export function initState(): State {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'pokedex > ',
  });

  const commands = getCommands();

  return { rl, commands };
}
