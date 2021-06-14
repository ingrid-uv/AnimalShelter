var mySql = require("mysql");

var settings = {
  host: "localhost",
  user: "root",
  password: "janina",
  database: "tierheim",
};

var verbindung = mySql.createConnection(settings);


verbindung.connect(antwortBearbeitung);

verbindung.query("SELECT * FROM hunde WHERE HundID = " +2, fehlerBearbeitung);

function fehlerBearbeitung(err, result, fields) {
  if (err) throw err;
  console.log("Query Antwort ist " +JSON.stringify(result)
  
  );
  console.log(result);
}

function antwortBearbeitung(err) {
  if (err) {
    console.log("Verbindungsfehler");
    console.log(err);
  } else {
    console.log("Verbindung Ok");
  }
}
