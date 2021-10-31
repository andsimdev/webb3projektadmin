<?php
include_once('config.php');

// Kontrollera om användaren är inloggad, annars skicka till inloggningssidan
if (!isset($_SESSION['username'])) {
    header("location: index.php");
}
?>

<!DOCTYPE html>
<html lang="sv">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/main.css">
    <title>Simons portfolio</title>
</head>

<body>
    <!--Sidhuvud-->
    <header>
        <h1>Simons portfolio</h1>
        <nav>
            <a href="admin.php" id="startlink">Startsidan</a>
            <a href="logout.php">Logga ut</a>
        </nav>
    </header>

    <h2>Skapa ny studiepost</h2>
    <!--Formulär för att skapa ny post-->
    <form class="updateform" id="updateform">
        <input type="hidden" name="id" id="id">
        <label for="studtitle">Studietitel</label>
        <input type="text" id="studtitle" name="studtitle">
        <br>

        <label for="university">Lärosäte</label>
        <input type="text" id="university" name="university">
        <br>

        <label for="studstartdate">Startdatum</label>
        <input type="month" id="studstartdate" name="studstartdate">
        <br>

        <label for="studenddate">Slutdatum</label>
        <input type="month" id="studenddate" name="studenddate">
        <br>
        <div class="formbtns" id="formbtndiv">
            <input type=submit class="createbtn" id="createbtn" value="Spara">
        </div>
        <br>
        <p id="msg"></p>
    </form>

    <!--JavaScript-->    
    <script src="js/createstud.js"></script>
</body>

</html>