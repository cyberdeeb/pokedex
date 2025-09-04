import type { CLICommand } from 'src/state.js';
import { commandCatch } from './commands/command_catch.js';
import { commandExit } from './commands/command_exit.js';
import { commandHelp } from './commands/command_help.js';
import { commandExplore } from './commands/command_explore.js';
import { commandInspect } from './commands/command_inspect.js';
import { commandPokedex } from './commands/command_pokedex.js';
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
    explore: {
      name: 'explore',
      description: 'Explore a location',
      callback: commandExplore,
    },
    catch: {
      name: 'catch',
      description: 'Catch a Pokémon',
      callback: commandCatch,
    },
    inspect: {
      name: 'inspect',
      description: 'Inspect a Pokémon',
      callback: commandInspect,
    },
    pokedex: {
      name: 'pokedex',
      description: 'View your Pokedex',
      callback: commandPokedex,
    },
  };
}
