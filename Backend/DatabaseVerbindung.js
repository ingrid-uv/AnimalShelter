var mySql = require("mysql");
var settings = {
  host: "localhost",
  user: "root",
  password: "janina",
  database: "tierheim",
};

var verbindung = mySql.createConnection(settings);

console.log("Verbindung starten");

verbindung.connect(antwortBearbeitung);

function antwortBearbeitung(err) {
  if (err) {
    console.log("Verbindungsfehler");
  } else {
    console.log("Verbindung Ok");

    var queryString =
      "INSERT INTO `tierheim`.`anfrage` (`AnfragID`, `AnfrageName`, `AnfrageNachname`) VALUES ('AA104', 'Gelsomina', 'Amata');";
    verbindung.query(queryString, fehlerBearbeitung);
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
