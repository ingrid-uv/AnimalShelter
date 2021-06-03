var mySql = require("mysql");
var i = 650;
var settings = {
  host: "localhost",
  user: "root",
  password: "janina",
  database: "tierheim",
};

var verbindung = mySql.createConnection(settings);

console.log("Verbindung starten");

var http = require("http");

server = http.createServer(myCallback);
server.listen(80);

console.log("Server läuft");

verbindung.connect(antwortBearbeitung);

function myCallback(req, res) {
  console.log("Server kontactiert mit dem String " + req.url);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.writeHead(200);

  if (req.url == "/favicon.ico") {
    risposta = "";
    console.log("Nix icona");
  } else {
    console.log("Datenbank wir Kontaktiert mit i= " + i);
    risposta = "Alles Ok";
    i++;

    var arrStringa = req.url.split("$");

    animalID = arrStringa[1];
    vorname = arrStringa[2];
    nachname = arrStringa[3];
    email = arrStringa[4];
    telefonnummer = arrStringa[5];
    adresse = arrStringa[6];
    hausnummer = arrStringa[7];
    stadt = arrStringa[8];
    plz = arrStringa[9];
    land = arrStringa[10];
    nachricht = arrStringa[11];

    console.log("Animal code = " + animalID);
    console.log("Name = " + vorname);
    console.log("Nachname = " + nachname);
    console.log("E-mail = " + email);
    console.log("Telefon = " + telefonnummer);
    console.log("Adresse = " + adresse);
    console.log("Hausnummer = " + hausnummer);
    console.log("Stadt = " + stadt);
    console.log("PLZ = " + plz);
    console.log("Land = " + land);
    console.log("NAchricht = " + nachricht);
    var queryString =
      "INSERT INTO `tierheim`.`kontaktformular` (`animalID`, `vorname`, `nachname`, `email`, `telefonnummer`, `adresse`, `hausnummer`, `stadt`, `plz`, `land`, `nachricht`) VALUES ('" +animalID+"', '" +vorname+ "', '" +nachname+"','"+email+"', '"+telefonnummer+"', '"+adresse+"', '"+hausnummer+"', '"+stadt+"', '"+plz+"', '"+land+"', '"+nachricht+"' );"

    console.log("Wir nutzen die Querystring " + queryString);
    verbindung.query(queryString, fehlerBearbeitung);
  }
  res.end(risposta);
}

function antwortBearbeitung(err) {
  if (err) {
    console.log("Verbindungsfehler");
    console.log(err);
  } else {
    console.log("Verbindung Ok");
  }
}


function fehlerBearbeitung(err) {
  if (err) {
    console.log("Query Fehler");
    console.log(err);
  } else {
    console.log("Query Ok");
  }
}
