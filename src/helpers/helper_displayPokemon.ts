function titleCase(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function displayPokemonInfo(pokemon: any) {
  console.log(`\n🎉 ${pokemon.name} has been added to your pokedex! 🎉\n`);
  console.log(`\n📸 ${pokemon.spriteUrl}\n`);
  console.log(`\n📝 Pokemon Details:`);
  console.log(`  - ID: ${pokemon.id}`);
  console.log(`  - Name: ${titleCase(pokemon.name)}`);
  console.log(`  - Height: ${pokemon.height}`);
  console.log(`  - Weight: ${pokemon.weight}`);
  console.log(`  - Base Experience: ${pokemon.base_experience}`);
  console.log(`  - Types: ${pokemon.types.map(titleCase).join(', ')}`);
  console.log(`  - Abilities: ${pokemon.abilities.map(titleCase).join(', ')}`);

  if (pokemon.stats) {
    console.log(`\n📊 Stats:`);
    console.log(`  - HP: ${pokemon.stats.hp}`);
    console.log(`  - Attack: ${pokemon.stats.attack}`);
    console.log(`  - Defense: ${pokemon.stats.defense}`);
    console.log(`  - Special Attack: ${pokemon.stats.special_attack}`);
    console.log(`  - Special Defense: ${pokemon.stats.special_defense}`);
    console.log(`  - Speed: ${pokemon.stats.speed}`);
  }

  console.log(`  \n Caught: ${pokemon.caught ? '✅' : '❌'}\n`);
}
