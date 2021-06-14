var dogs = [
  {
    Foto: "Pictures/Dog1.jpg",
    name: "Nala",
    tiercode: "H0065",
    geburtstag: "03.12.2020",
    geschlecht: "Weiblich",
    ankunft: "20.04.2021",
    rasse: "Mischling",
    herkunft: "Kroatien",
    Charakter: "Verträglich mit Hunden und Hündinen",
    Gesundheitszustand: "Geimpft, Gechipt, Entwurmt, Kastriert",
    Beschreibung: [
      "Nala wurde vermutlich angefahren und in einem sehr schlechten Zustand von unseren Tierschutzfreunden nahe Pula aufgenommen. Inzwischen hat er sich gut erholt. ",
      "Nala muss schon längere Zeit ohne menschlichen Kontakt gelebt haben. Er zeigt sich derzeit noch sehr zurückhalten und bevorzugt den Kontakt zu seinen Artgenossen. ",
      "Er lebt in der Auffangstation mit einer Hündin zusammen, das klappt gut. Am menschlichen Kontakt wird gearbeitet. ",
      "Derzeit ist Nala nur an hundeerfahrene Menschen zu vermitteln die Nala die Zeit geben die er braucht um den Menschen zu vertrauen.",
    ],
  },
  {
    Foto: "Pictures/Dog5.jpg",
    name: "Nero & Lili",
    tiercode: "H0066",
    geburtstag: "03.12.2020",
    geschlecht: "Weiblich, Männlich",
    ankunft: "20.04.2021",
    rasse: "Mischling",
    herkunft: "Kroatien",
    Charakter: "Verträglich mit Hunden und Hündinen und Katzen",
    Gesundheitszustand: "Geimpft, Gechipt, Entwurmt, Kastriert",
    Beschreibung: [
      "Nala wurde vermutlich angefahren und in einem sehr schlechten Zustand von unseren Tierschutzfreunden nahe Pula aufgenommen. Inzwischen hat er sich gut erholt. ",
      "Nala muss schon längere Zeit ohne menschlichen Kontakt gelebt haben. Er zeigt sich derzeit noch sehr zurückhalten und bevorzugt den Kontakt zu seinen Artgenossen. ",
      "Er lebt in der Auffangstation mit einer Hündin zusammen, das klappt gut. Am menschlichen Kontakt wird gearbeitet. ",
      "Derzeit ist Nala nur an hundeerfahrene Menschen zu vermitteln die Nala die Zeit geben die er braucht um den Menschen zu vertrauen.",
    ],
  },
  {
    Foto: "Pictures/Dog2.jpg",
    name: "Frodo",
    tiercode: "H0067",
    geburtstag: "03.12.2020",
    geschlecht: "Männlich",
    ankunft: "20.04.2021",
    rasse: "Mischling",
    herkunft: "Kroatien",
    Charakter: "Verträglich mit Hunden und Hündinen",
    Gesundheitszustand: "Geimpft, Gechipt, Entwurmt, Kastriert",
    Beschreibung: [
      "Nala wurde vermutlich angefahren und in einem sehr schlechten Zustand von unseren Tierschutzfreunden nahe Pula aufgenommen. Inzwischen hat er sich gut erholt. ",
      "Nala muss schon längere Zeit ohne menschlichen Kontakt gelebt haben. Er zeigt sich derzeit noch sehr zurückhalten und bevorzugt den Kontakt zu seinen Artgenossen. ",
      "Er lebt in der Auffangstation mit einer Hündin zusammen, das klappt gut. Am menschlichen Kontakt wird gearbeitet. ",
      "Derzeit ist Nala nur an hundeerfahrene Menschen zu vermitteln die Nala die Zeit geben die er braucht um den Menschen zu vertrauen.",
    ],
  },
];

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

    var stringaDiVerifica = arrStringa[0];

    if (stringaDiVerifica == "/cane") {
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
      console.log("Nachricht = " + nachricht);
      var queryString =
        "INSERT INTO `tierheim`.`kontaktformular` (`animalID`, `vorname`, `nachname`, `email`, `telefonnummer`, `adresse`, `hausnummer`, `stadt`, `plz`, `land`, `nachricht`) VALUES ('" +
        animalID +
        "', '" +
        vorname +
        "', '" +
        nachname +
        "','" +
        email +
        "', '" +
        telefonnummer +
        "', '" +
        adresse +
        "', '" +
        hausnummer +
        "', '" +
        stadt +
        "', '" +
        plz +
        "', '" +
        land +
        "', '" +
        nachricht +
        "' );";

      console.log("Wir nutzen die Querystring " + queryString);
      verbindung.query(queryString, fehlerBearbeitung);
    } else {
      if (stringaDiVerifica == "/queryDog") {
        animalID = arrStringa[1];

        if (animalID < dogs.length) {
          risposta = JSON.stringify(dogs[animalID]);
          console.log(risposta);
        } else {
          risposta = "Non conosco questo cane";
        }
      } else {
        if (req.url == "/mengeHunde") {
          risposta = "Il numero di cani e'$" +dogs.length;
        } else {
          risposta =
            "Command error! I recived " +
            req.url +
            " and the command word is " +
            stringaDiVerifica;
        }
      }
    }
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
