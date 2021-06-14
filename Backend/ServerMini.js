

var http = require("http");

server = http.createServer(myCallback);

server.listen(80);

console.log("Hello World!");

function myCallback(req, res) {
  console.log("Callback called");
  console.log(req.url);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.writeHead(200, {"Content-Type": "text/html"});

  if (req.url == "/favicon.ico") {
    risposta = "";
    console.log("Richiesta icona");
  } else {
    risposta = "Cane <b>non</b> trovato";
  }
  console.log("Il server risponde con " +risposta)
  res.end(risposta);

}
