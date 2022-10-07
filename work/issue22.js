const fs = require('fs');
const pokemonData = require("../fromDB/pokemon.json")

class pokemon39 {
  constructor(id,name,koreaName) {
    this.id = id;
    this.name = name;
    this.koreaName = koreaName;
  }
}

const issue22 =new pokemon39(pokemonData[38].id,pokemonData[38].name,pokemonData[38].koreaName)
console.log(issue22)

fs.writeFile('./issue22.json', JSON.stringify((issue22),null,2) , err => {if(err) throw err})


module.exports = {
  issue22
};