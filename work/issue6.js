const pokemon = require('../fromDB/pokemon.json');
const fs = require('fs');

// console.log(pokemon[22]);

class Pokemon23 {
  constructor(id, name, koreaName){
    this.id = id;
    this.name = name;
    this.koreaName = koreaName;
  }
}

const issue6 = new Pokemon23(pokemon[22].id, pokemon[22].name, pokemon[22].koreaName);
// new Pokemon23();
console.log(issue6);

module.exports = {
  issue6
};