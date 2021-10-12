<?php
include_once('config.php');

// Kontrollera om användaren är inloggad, annars skicka till inloggningssidan
if(!isset($_SESSION['username'])) {
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
    <title>Administration - Simons portfolio</title>
</head>
<body>
    <header>
    <h1>Simons portfolio</h1>
    <nav>
    <a href="admin.php" id="startlink">Startsidan</a>
    <a href="logout.php">Logga ut</a>
    </nav>
    </header>

    <main>
        <section id="studiessection">
            <div class="topdiv">
            <h2>Utbildningar</h2>
            <a href="createstud.php">+</a>
            </div>          

        </section>
        <section id="employmentssection">
        <div class="topdiv">
            <h2>Arbeten</h2>
            <a href="createemp.php">+</a>
            </div>

        </section>
        <section id="websitessection">
        <div class="topdiv">
            <h2>Webbplatser</h2>
            <a href="createweb.php">+</a>
            </div>

        </section>
    </main>
    
    <script src="js/admin.js"></script>
</body>
</html>