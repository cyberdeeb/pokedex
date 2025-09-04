import { Cache } from './pokecache.js';

export class PokeAPI {
  private static readonly baseURL = 'https://pokeapi.co/api/v2';
  private cache = new Cache(5 * 60 * 1000); // 5 minute cache

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const locationsURL = pageURL || `${PokeAPI.baseURL}/location-area/`;
    const cacheKey = locationsURL;

    const cached = this.cache.get<ShallowLocations>(cacheKey);
    if (cached) {
      return cached;
    }

    try {
      const response = await fetch(locationsURL);
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }
      const locations: ShallowLocations = await response.json();
      this.cache.add(cacheKey, locations);
      return locations;
    } catch (error) {
      console.error('Error fetching locations:', error);
      throw error;
    }
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const locationURL = `${PokeAPI.baseURL}/location-area/${locationName}/`;

    const cacheKey = locationURL;

    const cached = this.cache.get<Location>(cacheKey);
    if (cached) {
      return cached;
    }

    try {
      const response = await fetch(locationURL);
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }
      const location: Location = await response.json();
      this.cache.add(cacheKey, location);
      return location;
    } catch (error) {
      console.error('Error fetching location:', error);
      throw error;
    }
  }

  async fetchPokemon(pokemonName: string): Promise<Pokemon> {
    const pokemonURL = `${PokeAPI.baseURL}/pokemon/${pokemonName}/`;

    const cacheKey = pokemonURL;

    const cached = this.cache.get<Pokemon>(cacheKey);
    if (cached) {
      return cached;
    }

    try {
      const response = await fetch(pokemonURL);
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }
      const data = await response.json();

      const pokemon: Pokemon = {
        id: data.id,
        name: data.name,
        base_experience: data.base_experience,
        height: data.height,
        weight: data.weight,
        stats: {
          hp: data.stats.find((s: any) => s.stat.name === 'hp')?.base_stat ?? 0,
          attack:
            data.stats.find((s: any) => s.stat.name === 'attack')?.base_stat ??
            0,
          defense:
            data.stats.find((s: any) => s.stat.name === 'defense')?.base_stat ??
            0,
          special_attack:
            data.stats.find((s: any) => s.stat.name === 'special-attack')
              ?.base_stat ?? 0,
          special_defense:
            data.stats.find((s: any) => s.stat.name === 'special-defense')
              ?.base_stat ?? 0,
          speed:
            data.stats.find((s: any) => s.stat.name === 'speed')?.base_stat ??
            0,
        },
        types: data.types.map((t: any) => t.type.name),
        abilities: data.abilities.map((a: any) => a.ability.name),
        caught: false, // default
        spriteUrl:
          data.sprites.other?.['official-artwork']?.front_default ||
          data.sprites.front_default ||
          null,
      };

      this.cache.add(cacheKey, pokemon);
      return pokemon;
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
      throw error;
    }
  }
}

export type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
  };
  types: string[];
  abilities: string[];
  caught: boolean;
  spriteUrl: string | null;
};

export type ShallowLocations = {
  count: number; // total number of locations
  next: string; // URL to next page (if any)
  previous: string; // URL to previous page (if any)
  results: {
    name: string; // e.g. "canalave-city"
    url: string; // API URL to fetch full Location
  }[];
};

export type Location = {
  encounter_method_rates: {
    encounter_method: {
      name: string;
      url: string;
    };
    version_details: {
      rate: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
  game_index: number;
  id: number;
  location: {
    name: string;
    url: string;
  };
  name: string;
  names: {
    language: {
      name: string;
      url: string;
    };
    name: string;
  }[];
  pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
    };
    version_details: {
      encounter_details: {
        chance: number;
        condition_values: any[];
        max_level: number;
        method: {
          name: string;
          url: string;
        };
        min_level: number;
      }[];
      max_chance: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
};
