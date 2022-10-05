const fs = require("fs");
const path = require("path");

let issue13 = null;

function Issue13({ id, name, koreaName }) {
  this.id = id;
  this.name = name;
  this.koreaName = koreaName;
}

const JsonFile = fs.readFileSync(
  path.join(__dirname, "..", "/fromDB", "pokemon.json"),
  "utf-8"
);
const JsonData = JSON.parse(JsonFile);

JsonData.forEach((data) => {
  if (data.id === 13 + 17) {
    issue13 = new Issue13(data);
  }
});

module.exports = {
  issue13,
};

//
