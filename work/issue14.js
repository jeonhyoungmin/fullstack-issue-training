// const { get } = require("request");
const pokemonData = require("../fromDB/pokemon.json");
//node.js에서 require메소드를 통해 외부 모듈을 가져올 수 있다

function getData(data) {
  this.id = data.id;
  this.name = data.name;
  this.koreaName = data.koreaName;

  console.log(this.id, this.name, this.koreaName);
}

const issue14 = new getData(pokemonData[31]);

//export문은 js에서 내보낼때 사용
module.exports = {
  issue14,
};

console.log("hi");
