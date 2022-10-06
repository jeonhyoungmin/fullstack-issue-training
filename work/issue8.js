// 어제 Q. 선언된 issue + '숫자' 데이터에 숫자 + 17 에 해당하는 포켓몬스터 데이터를 구하시오. 를 안 보고 문제 풀었기 때문에 다시 수정합니다.
// 할당된 'issue8'에서 숫자를 뽑아 낸 다음 함수에 대입
const fs = require('fs');

let issue8 = 'work';

function findKey(obj) {
  for (let key in obj) {
    return key;
  }
}

const myNum = parseInt(findKey({ issue8 }).replace(/\D/g, ''));

function issue(number) {
  const pokemon = JSON.parse(
    fs.readFileSync('../fromDB/pokemon.json', 'utf-8')
  );
  const pokemons = pokemon.find((data) => {
    return data.id === number + 17;
  });
  console.log(pokemons);
}

issue8 = issue(myNum);
module.exports = {
  issue8,
};

// 결과
// { id: 25, name: 'Pikachu', koreaName: '피카츄' }
