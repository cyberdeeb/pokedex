# pokedex

Welcome to the Pokedex project!

This is a command-line REPL (Read-Eval-Print Loop) application that lets you explore and catch Pokémon right from your terminal. The Pokedex uses the [PokéAPI](https://pokeapi.co/) to fetch all the data you need using HTTP GET requests.

## Features

- 🎮 **Interactive command-line interface** — Use simple commands to explore the Pokémon world
- 🗺️ **Location exploration** — Browse and paginate through Pokémon locations
- 🔍 **Pokemon discovery** — Find Pokémon in different areas
- 🎯 **Pokemon catching** — Attempt to catch Pokémon with realistic success rates
- 📚 **Personal Pokedex** — Track all Pokémon you've caught
- ⚡ **Smart caching** — Fast responses with automatic data caching
- 🌐 **Live data** — Real-time information from the PokéAPI
- 🖼️ **Sprite display** — See Pokémon artwork URLs in your terminal

## Available Commands

- `help` — Show all available commands
- `map` — View the next page of locations
- `mapb` — View the previous page of locations
- `explore <location>` — Explore a specific location to find Pokémon
- `catch <pokemon>` — Attempt to catch a Pokémon you've discovered
- `pokedex` — View your personal Pokedex of caught Pokémon
- `inspect <pokemon>` — View detailed info about a caught Pokémon
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
   pokedex > pokedex
   pokedex > inspect pikachu
   ```

## Tech Stack

- **TypeScript** — Type-safe development
- **Node.js** — Runtime environment
- **PokéAPI** — Pokémon data source
- **Custom caching system** — Improved performance

## Project Structure

- `src/commands/` — Individual command implementations
- `src/pokecache.ts` — Time-based caching system
- `src/pokeapi.ts` — API client and data fetching
- `src/repl.ts` — Command-line interface logic
- `src/state.ts` — Application state management
- `src/helpers/` — Utility functions for displaying and formatting Pokémon info

---

**More features and commands coming soon!**
