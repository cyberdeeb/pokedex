# pokedex

Welcome to the Pokedex project!

This is a command-line REPL (Read-Eval-Print Loop) application that lets you explore information about Pokémon right from your terminal. The Pokedex uses the [PokéAPI](https://pokeapi.co/) to fetch all the data you need using HTTP GET requests.

## Features

- 🎮 **Interactive command-line interface** - Navigate with simple commands
- 🗺️ **Location exploration** - Browse Pokemon locations with pagination
- 🔍 **Pokemon discovery** - Find Pokemon in different areas
- 🎯 **Pokemon catching** - Attempt to catch Pokemon with realistic success rates
- 📚 **Personal Pokedex** - Keep track of your caught Pokemon
- ⚡ **Smart caching** - Fast responses with automatic data caching
- 🌐 **Live data** - Real-time information from the PokéAPI

## Available Commands

- `help` — Show all available commands
- `map` — View the next page of locations
- `mapb` — View the previous page of locations
- `explore <location>` — Explore a specific location to find Pokemon
- `catch <pokemon>` — Attempt to catch a Pokemon you've discovered
- `exit` — Exit the Pokedex

## Getting Started

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Run the Pokedex:**

   ```sh
   npm run dev
   ```

3. **Start exploring:**
   ```sh
   pokedex > help
   pokedex > map
   pokedex > explore pallet-town
   pokedex > catch pikachu
   ```

## Tech Stack

- **TypeScript** - Type-safe development
- **Node.js** - Runtime environment
- **PokéAPI** - Pokemon data source
- **Custom caching system** - Improved performance

## Project Structure

- `src/commands/` - Individual command implementations
- `src/pokecache.ts` - Time-based caching system
- `src/pokeapi.ts` - API client and data fetching
- `src/repl.ts` - Command-line interface logic
- `src/state.ts` - Application state management

---

**More features and commands coming soon!**
