import type { CLICommand } from 'src/state.js';
import { commandExit } from './commands/command_exit.js';
import { commandHelp } from './commands/command_help.js';
import {
  commandMapForward,
  commandMapBackward,
} from './commands/command_map.js';

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
    map: {
      name: 'map',
      description: 'Get the next page of locations',
      callback: commandMapForward,
    },
    mapb: {
      name: 'mapb',
      description: 'Get the previous page of locations',
      callback: commandMapBackward,
    },
  };
}
