var idDogs = ["/cane1", "/cane2", "/cane3"];
var dataDogs = ["Rea, metticcio", "Frodo, metticcio", "Mario, metticcio"];

const fs = require("fs");
let rawdata = fs.readFileSync("Dogs.json");
let dogs = JSON.parse(rawdata);

console.log(rawdata)

var http = require("http");

server = http.createServer(myCallback);
server.listen(80);

console.log("Hello World!");

function myCallback(req, res) {
  console.log("Callback called");
  console.log(req.url);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.writeHead(200);

  if (req.url == "/favicon.ico") {
    risposta = "";
    console.log("Richiesta icona");
  } else {
    risposta = "Cane non trovato";

    for (let i = 0; i < dogs.length; i++) {
      if (req.url == dogs[i].id) {
        risposta = dogs[i].data;
      }
    }

    if (risposta == "Cane non trovato") {
      console.log("Cane non trovato!");

      nuovoCane = { id: req.url, data: "Lana, Labrador" };
      dogs.push(nuovoCane);

      let data = JSON.stringify(dogs)
      
      fs.writeFileSync("Dogs.json", data);
    }

    console.log("Lista cani **");
    for (let i = 0; i < dogs.length; i++) {
      console.log(dogs[i].id);
    }
    console.log("*************");
  }
  console.log("Il server risponde con " +risposta)
  res.end(risposta);

}
