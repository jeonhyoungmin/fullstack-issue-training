const pokemonData = require("../fromDB/pokemon.json");

function newData(data) {
  this.id = data.id;
  this.name = data.name;
  this.koreaName = data.koreaName;
}

const issue1 = new newData(pokemonData[17]);

console.log(issue1);
module.exports = {
  issue1,
};
