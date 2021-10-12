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
    <header>
        <h1>Simons portfolio</h1>
        <nav>
            <a href="admin.php" id="startlink">Startsidan</a>
            <a href="logout.php">Logga ut</a>
        </nav>
    </header>

    <h2>Skapa ny arbete-post</h2>

    <form class="updateform" id="updateform">
        <input type="hidden" name="id" id="id">
        <label for="emptitle">Arbetstitel</label>
        <input type="text" id="emptitle" name="emptitle">
        <br>

        <label for="empplace">Arbetsställe</label>
        <input type="text" id="empplace" name="empplace">
        <br>

        <label for="empstartdate">Startdatum</label>
        <input type="month" id="empstartdate" name="empstartdate">
        <br>

        <label for="empenddate">Slutdatum</label>
        <input type="month" id="empenddate" name="empenddate">
        <br>
        <div class="formbtns" id="formbtndiv">
            <input type=submit class="createbtn" id="createbtn" value="Spara">
        </div>
        <br>
        <p id="msg"></p>
    </form>

    <script src="js/createemp.js"></script>
</body>

</html>