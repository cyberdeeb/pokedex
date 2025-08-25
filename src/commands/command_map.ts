import type { State } from 'src/state.js';

export async function commandMapForward(state: State) {
  const locations = await state.pokeAPI.fetchLocations(state.nextLocationsURL);

  state.nextLocationsURL = locations.next;
  state.prevLocationsURL = locations.previous;

  for (const location of locations.results) {
    console.log(`- ${location.name}`);
  }
}

export async function commandMapBackward(state: State) {
  if (!state.prevLocationsURL) {
    console.log('You are already on the first page.');
    return;
  }

  const locations = await state.pokeAPI.fetchLocations(state.prevLocationsURL);

  state.nextLocationsURL = locations.next;
  state.prevLocationsURL = locations.previous;

  for (const location of locations.results) {
    console.log(`- ${location.name}`);
  }
}
