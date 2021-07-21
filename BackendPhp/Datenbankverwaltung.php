<!DOCTYPE html>
<html lang="en">

<head>
    <title>Animal Shelter</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="Style.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" type="text/css" href="DatenbankStyle.css">
<script type="text/javascript">

function send(aktion, id){
    if(aktion==2)
      if(!confirm("Datensatz mit P-Nr " + id + " entfernen?"))
      return;

    document.f.aktion.value = aktion;
    document.f.id.value = id;
    document.f.submit();    
}
</script>
    </head>

<body>

<?php
   $con = new mysqli("", "root", "janina", "tierheim");
   $od = "ORDER BY HundCode";
       
   if(isset($_POST["aktion"]))
   {

       if($_POST["aktion"] == "0")
       {         

           $ps = $con->prepare("INSERT INTO hunde (HundName, HundCode, HundGeburtstag, HundAnkunft, HundGeschlecht, HundRasse, HundCharakter, 
           HundGesundheit, HundHerkunft, HundBeschreibung) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
           $ps->bind_param("ssssssssss", $_POST["hna"][0], $_POST["hco"][0],$_POST["hgeb"][0], $_POST["han"][0],$_POST["hge"][0], $_POST["hra"][0], 
           $_POST["hch"][0],$_POST["hges"][0], $_POST["hch"][0],$_POST["hbe"][0]);
           $ps->execute();
           $ps->close();
       }
       else if($_POST["aktion"] == "1")
       {
        $id = $_POST["id"];   
        $ps = $con->prepare("UPDATE hunde SET HundName=?, HundCode=?, HundGeburtstag=?, HundAnkunft=?, HundGeschlecht=?, HundRasse=?, HundCharakter=?, 
        HundGesundheit=?, HundHerkunft=?, HundBeschreibung=? WHERE HundCode=$id");
        $ps->bind_param("ssssssssss", $_POST["hna"][$id], $_POST["hco"][$id], $_POST["hgeb"][$id], $_POST["han"][$id], $_POST["hge"][$id],
        $_POST["hra"][$id], $_POST["hch"][$id], $_POST["hges"][$id], $_POST["hch"][$id], $_POST["hbe"][$id]);
        $ps->execute();
        $ps->close();
       }
       else if($_POST["aktion"] == "2")
       {
        $id = $_POST["id"];   
        $ps = $con->prepare("DELETE FROM hunde WHERE HundCode = $id");
      
        $ps->execute();
        $ps->close();
       }
       else if($_POST["aktion"] == "3")
         $od = "ORDER BY HundName";
         else if($_POST["aktion"] == "4")
         $od = "ORDER BY HundGeburtstag";
         else if($_POST["aktion"] == "5")
         $od = "ORDER BY HundAnkunft";
         else if($_POST["aktion"] == "6")
         $od = "ORDER BY HundGeschlecht";
         else if($_POST["aktion"] == "7")
         $od = "ORDER BY HundRasse";
         else if($_POST["aktion"] == "8")
         $od = "ORDER BY HundHerkunft";
   }
   /* Formularbeginn */
   echo "<form name='f' action='Datenbankverwaltung.php' method='post'>";
   echo "<input name='aktion' type='hidden'>";
   echo "<input name='id' type='hidden'>\n\n";

   /* Tabellenbeginn */
   echo "<table><tr>";
   echo "<td><a href='javascript:send(3,0);'>Name</a></td>";
   echo "<td><a>Code</a></td>";
   echo "<td><a href='javascript:send(4,0);'>Geburtstag</a></td>";
   echo "<td><a href='javascript:send(5,0);'>Ankunft</a></td>";
   echo "<td><a href='javascript:send(6,0);'>Geschlecht</a></td>";
   echo "<td><a href='javascript:send(7,0);'>Rasse</a></td>";
   echo "<td><a>Charakter</a></td>";
   echo "<td><a>Gesundheit</a></td>";
   echo "<td><a href='javascript:send(8,0);'>Herkunft</a></td>";
   echo "<td><a>Beschreibung</a></td>";
   echo "<td>Aktion</td></tr>\n\n";

   /* Neuer Eintrag */
   echo "<tr>";
   echo "<td><input name='hna[0]' size='10'></td>";
   echo "<td><input name='hco[0]' size='10'></td>";
   echo "<td><input name='hgeb[0]' size='10'></td>";
   echo "<td><input name='han[0]' size='10'></td>";
   echo "<td><input name='hge[0]' size='10'></td>";
   echo "<td><input name='hra[0]' size='15'></td>";
   echo "<td><input name='hch[0]' size='30'></td>";
   echo "<td><input name='hges[0]' size='20'></td>";
   echo "<td><input name='hher[0]' size='10'></td>";
   echo "<td><textarea name='hbe[0]' cols='20' rows ='1'></textarea>
   </td>";
   echo "<td><a href='javascript:send(0,0);'>"
        . "neu eintragen</a></td>";
   echo "</tr>\n\n";

   /* Anzeigen */

   $res = $con->query("SELECT * FROM hunde $od");

   /* Alle vorhandenen Datensätze */
   while ($dsatz = $res->fetch_assoc())
   {
       $id = $dsatz["HundCode"];
       $hna = $dsatz["HundName"];
       $hco = $dsatz["HundCode"];
       $hgeb = $dsatz["HundGeburtstag"];
       $han = $dsatz["HundAnkunft"];
       $hge = $dsatz["HundGeschleht"];
       $hra = $dsatz["HundRasse"];
       $hch = $dsatz["HundCharakter"];
       $hges = $dsatz["HundGesundheit"];
       $hher = $dsatz["HundHerkunft"];
       $hbe = $dsatz["HundBeschreibung"];

        echo "<tr>"
          . "<td><input name='hna[$id]' value='$hna' size='10'></td>"
          . "<td><input name='hco[$id]' value='$hco' size='10'></td>"
          . "<td><input name='hgeb[$id]' value='$hgeb' size='10'></td>"
          . "<td><input name='han[$id]' value='$han' size='10'></td>"
          . "<td><input name='hge[$id]' value='$hge' size='10'></td>"
          . "<td><input name='hra[$id]' value='$hra' size='15'></td>"
          . "<td><input name='hch[$id]' value='$hch' size='30'></td>"
          . "<td><input name='hges[$id]' value='$hges' size='20'></td>"
          . "<td><input name='hher[$id]' value='$hher' size='10'></td>"
          . "<td><textarea name='hbe[$id]' cols='20' rows ='1'>$hbe</textarea></td>"
          . "<td><a href='javascript:send(1,$id);'>speichern</a>"
          . " <a href='javascript:send(2,$id);'>entfernen</a></td>"
          . "</tr>\n\n";

   }
   echo "</table>";
   echo "</form>";

   $res->close();
   $con->close();

   ?>

</body>

</html>    