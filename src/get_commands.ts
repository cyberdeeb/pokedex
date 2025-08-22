import type { CLICommand } from 'src/state.js';
import { commandExit } from './commands/command_exit.js';
import { commandHelp } from './commands/help.js';

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: 'exit',
      description: 'Exits the Pokedex',
      callback: commandExit,
    },
    help: {
      name: 'help',
      description: 'Displays help information',
      callback: commandHelp,
    },
  };
}
