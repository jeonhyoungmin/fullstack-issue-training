const pokemonData = require('../fromDB/pokemon.json')

class MyPokemonData {
  constructor(dbdata){
    this.id = dbdata.id
    this.name = dbdata.name
    this.KoreaName = dbdata.koreaName
  }
}
    const issue19 = new MyPokemonData(pokemonData[35]);
    console.log(issue19)

    module.exports = {
      issue19
    };
  