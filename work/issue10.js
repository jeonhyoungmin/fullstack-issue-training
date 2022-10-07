const PokemonData = require('../fromDB/pokemon.json');
// console.log(PokemonData);

const findPoketemon = (num, plusNum) => {
  let limitPokemon = PokemonData.filter((value) => value.id === num + plusNum);
  // console.log(limitPokemon);
  let Poketsort = limitPokemon[0]
  class Poketmons {
    constructor(id, name, koreaname) {
      this.id = id;
      this.name = name;
      this.koreaname = koreaname;
    };
  };
  let Instance = new Poketmons(Poketsort.id, Poketsort.name, Poketsort.koreaName);
  // console.log(Instance);
  return Instance
}

const issue10 = findPoketemon(10, 17)

module.exports = {
  issue10,
  findPoketemon
};
