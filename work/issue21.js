const pokemonData = require("../fromDB/pokemon.json");

class PokemonDataClass {
  constructor(id, name, koreaName) {
    this.id = id;
    this.name = name;
    this.koreaName = koreaName;
  }
}

const issue21 = new PokemonDataClass(pokemonData[21+16].id, pokemonData[21+16].name, pokemonData[21+16].koreaName);


module.exports = {
  issue21
};

console.log(issue21);