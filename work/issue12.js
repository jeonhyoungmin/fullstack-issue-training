//console.log('a');

const jsonData = require("../fromDB/pokemon.json");
//console.log(jsonData);
//console.log(jsonData[0]);

const issueNum = 12;
const numDat = 17;


const issue12 = (id, name, koreaName) => {
  this.id = id;
  this.name = name;
  this.korea = koreaName;
  const returnValue = `id = ${id} name = ${name} koreaName = ${koreaName}`;   
  return returnValue;
}

console.log(issue12(12, "MinhoYoo", "유민호"));
console.log(jsonData[issueNum + numDat - 1]);



// class issue12 {
//   constructor(id, name, koreaname) {
//     this.id = id;
//     this.name = name;
//     this.koreaname = koreaname;
//   }
// }

//const issueA = new issue12();



module.exports = {
  issue12,
};
