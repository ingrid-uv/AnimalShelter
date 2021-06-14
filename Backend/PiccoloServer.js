var mySql = require("mysql");

var settings = {
  host: "localhost",
  user: "root",
  password: "janina",
  database: "tierheim",
};

var verbindung = mySql.createConnection(settings);

var http = require("http");

verbindung.connect(statusBearbeitung);

function statusBearbeitung(err) {
  if (err) {
    console.log("Verbindungsfehler");
    console.log(err);
  } else {
    console.log("Verbindung Ok");
  }
}

function serverCallback(req, res) {
  res.writeHead(200);
  console.log("Server contacted! " + req.url);
  res.write("Server responds: " + req.url);

  if (req.url == "/cane2") {
    verbindung.query(
      "SELECT * FROM hunde WHERE HundID = " + 2,
      antwortBearbeitung
    );
  }

  function antwortBearbeitung(err, result, fields) {
    if (err) throw err;
    console.log("Query Antwort ist " + JSON.stringify(result));
    res.write("Query Antwort ist " + JSON.stringify(result));
    res.end();
  }
}

http.createServer(serverCallback).listen(80);
