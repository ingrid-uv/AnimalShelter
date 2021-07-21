<!DOCTYPE html>
<html lang="en">

<head>
    <title>Animal Shelter</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="Style.css" rel="stylesheet" type="text/css" />
    </head>

<body>
    <?php

$wieoft = $_POST["wieoft"];
$betrag = $_POST["betrag"];
$betrag2 = $_POST["betrag2"];  

if (!empty($betrag2))  {
   $betrag =  $betrag2;

} 

if (isset($_POST["gesendet"]))
 {

     $con = new mysqli("", "root", "janina", "tierheim");
     $ps = $con->prepare("INSERT INTO spender"
         . "(vorname, nachname, email, telefon, adresse, hausnummer, stadt, plz, land, beitrag1, beitrag2)"  
         . "VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"); 

    $ps->bind_param("sssssssissd", $_POST["name1"], $_POST["name2"], $_POST["email"],$_POST["tel"], $_POST["adresse"], 
    $_POST["hausnum"], $_POST["stadt"], $_POST["plz"], $_POST["land"],$_POST["wieoft"], $betrag);
    $ps->execute();

    if($ps->affected_rows > 0)
       echo "Datensatz hinzugekommen<br>";
      else
       echo "Fehler, kein Datensatz hinzugekommen<br>";
       $ps->close();
       $con->close();
 }


 

;


   

   echo "<b>Ihr Beitrag ist: </b><br>";

   switch($wieoft)
   {
       case "Einmal":      
        echo "   Häufigkeit  : $wieoft <br>   Betrag: $betrag €<br>";
        break;
       case "Monatlich";    
        echo "Dein Beitrag ist: $wieoft, $betrag<br>";
        break;
       case "Jarlich";
        echo "Dein Beitrag ist: $wieoft, $betrag<br>";
        break; 
   }

       $vorname = htmlentities($_POST["name1"]);
       $nachname = htmlentities($_POST["name2"]);
       $email = htmlentities($_POST["email"]);
       $telefonnummer = htmlentities($_POST["tel"]);
       $adresse = htmlentities($_POST["adresse"]);
       $hausnummer = htmlentities($_POST["hausnum"]);
       $stadt = htmlentities($_POST["stadt"]);
       $plz = htmlentities($_POST["plz"]);
       $land = htmlentities($_POST["land"]);

       echo "Vorname: $vorname<br>";
       echo " Nachname: $nachname<br>";
       echo "E-Mail: $email<br>";
       echo "Telefonnummer: $telefonnummer<br>";
       echo "Adresse: $adresse $hausnummer<br>";
       echo "Stadt: $stadt $plz<br>";
       echo "Land:  $land<br>";
     ?>  


</body>

</html>    