const Pokemon = require("../fromDB/pokemon.json");
class PokemonData {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.koreaName = data.koreaName;
  }
}
const issue2 = new PokemonData(Pokemon[20]);
// const issue2 = Pokemon[20];
console.log(issue2);
module.exports = {
  issue2,
};
