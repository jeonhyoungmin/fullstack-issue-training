const fs = require('fs');

function issue(number) {
  const pokemon = JSON.parse(
    fs.readFileSync('../fromDB/pokemon.json', 'utf-8')
  );
  const pokemons = pokemon.find((data) => {
    return data.id === number;
  });
  console.log(pokemons);
}

const issue8 = issue(25);
module.exports = {
  issue8,
};
