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

    <h2>Uppdatera webbsidepost</h2>
    <!--Formulär för att uppdatera post-->
    <form class="updateform" id="updateform">
    <input type="hidden" name="id" id="id">
    <input type="hidden" name="siteimage" id="siteimage">
        <label for="sitetitle">Webbsitetitel</label>
        <input type="text" id="sitetitle" name="sitetitle">
        <br>

        <label for="siteurl">Webbside-url</label>
        <input type="text" id="siteurl" name="siteurl">
        <br>

        <label for="sitedesc">Webbsidebeskrivning</label>
        <textarea name="sitedesc" id="sitedesc" cols="30" rows="10"></textarea>

        <br>
        <div class="formbtns" id="formbtndiv">
            <input type=submit class="updatebtn" id="updatebtn" value="Uppdatera">
            <input type="button" class="deletebtn" value="Radera" onclick="deletePost()">
        </div>
        <br>
        <p id="msg"></p>
    </form>
    <!--JavaScript-->
    <script src="js/updateweb.js"></script>
</body>

</html>

<?php
// Kontrollera om id skickats med
if (isset($_GET['id'])) {
    $id = $_GET['id'];

    // Kör funktionen för att hämta in data, skicka id
    echo '<script>getPost(' . $id . ');</script>';
} else {
    echo "<p style='color:red;'>Inget id har skickats med</p>";
}
?>