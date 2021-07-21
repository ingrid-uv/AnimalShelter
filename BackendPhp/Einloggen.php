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
    $benutzer = htmlentities($_POST["benutzer"]);
    $passwort = htmlentities($_POST["passwort"]);

if ($benutzer != "Ingrid Ugussi Vukman"){
    echo "Nicht vorhandener Benutzername<br>";
         
        } else if ($passwort != "DanaDanina2005")
        {
            echo "Ungültiges Passwort<br>";          
        }

if($benutzer == "Ingrid Ugussi Vukman" && $passwort == "DanaDanina2005"){
    echo "Name : $benutzer<br>";
    echo "<a href='Datenbankverwaltung.php'>Datenverwaltung</a>";
}
    
?>  




</body>

</html>    