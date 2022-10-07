const pokemon = require('pokemon');
    
class Pokemon46 {
  constructor(id, name, koreaName) {
    this.id = id;
    this.name = name;
    this.koreaName = koreaName;
  }
}
function pokemonObj(data) {
  const int = [];
  let findNum = 23*2; //issue 23*2
  let temp = new Pokemon46(findNum, data.getName(findNum), data.getName(findNum, "ko"));
  int.push(temp);
  return int;
}

// console.log(pokemon.all()); //포켓몬들의 이름 출력됨
// console.log(pokemon);
// console.log(pokemon.all().length); //905
// console.log(pokemon.getName()); //함수 확인 
// console.log(pokemonObj(pokemon)); //결과확인

const issue23 = pokemonObj(pokemon);
console.log(issue23); //[ Pokemon46 { id: 46, name: 'Paras', koreaName: '파라스' } ]