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

    <h2>Skapa ny webbsidepost</h2>

    <form class="updateform" id="updateform" enctype="multipart/form-data">
        <input type="hidden" name="id" id="id">
        <label for="sitetitle">Webbsitetitel</label>
        <input type="text" id="sitetitle" name="sitetitle">
        <br>

        <label for="siteurl">Webbside-url</label>
        <input type="text" id="siteurl" name="siteurl">
        <br>

        <label for="sitedesc">Webbsidebeskrivning</label>
        <textarea name="sitedesc" id="sitedesc" cols="30" rows="10"></textarea>
        <br>

        <label for="siteimage">Webbsidebild</label>
        <input type="file" name="siteimage" id="siteimage">
        <br>

        <div class="formbtns" id="formbtndiv">
            <input type=submit class="createbtn" id="createbtn" value="Spara">
        </div>
        <br>
        <p id="msg"></p>
    </form>

    <script src="js/createweb.js"></script>
</body>

</html>