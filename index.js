
const fetch = require("node-fetch");
const cheerio = require("cheerio");

const Players = require("./src/Players");
const Teams = require("./src/Teams");
const Top = require("./src/Top");
module.exports = class Soccer {
  constructor(props){
     this.lang = props ? props.lang : "en";
     this.baseURL = `https://www.footballdatabase.eu/${this.lang}/`;
  }

fetchBestPlayers = () => { 
 return new Promise(async (resolve, reject) => {
  let url;
  if(!["en","fr","es"].includes(this.lang)) reject('Invalid language.')
  if (this.baseURL === `https://www.footballdatabase.eu/en/`) {
    url = `${this.baseURL}players`;
  }

  if (this.baseURL === `https://www.footballdatabase.eu/fr/`) {
    url = `${this.baseURL}joueurs`;
  }

  if (this.baseURL === `https://www.footballdatabase.eu/es/`) {
    url = `${this.baseURL}jugadores`;
  }

  const res = await fetch(url);
  const content = await res.text();
  const $ = cheerio.load(content);
  resolve(new Top($))
   });
}
}