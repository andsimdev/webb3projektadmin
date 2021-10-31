<?php
include_once('config.php');

// Kontrollera om användaren redan är inloggad och skicka vidare till huvudsidan
if(isset($_SESSION['username'])) {
    header("location: admin.php");
}

// Kontrollera om POST-uppgifter skickats med
if(isset($_POST['username'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Kontrollera om medskickat användarnamn och lösenord stämmer
    if($username == "admin" && $password == "password") {
        // Sätt sessionsvariabeln
        $_SESSION['username'] = $username;
        // Skicka vidare till admin-sidan
        header("location: admin.php");
    } else {
        // Skicka felmeddelande
        $message = "Ange korrekt användarnamn och lösenord";
    }
}
?>

<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/login.css">
    <title>Administrationsinloggning</title>
</head>
<body>

<h1 class="loginh1">Hej! 👋</h1>

<!--Inloggningssektion-->
<section class="loginsection">
<h2 class="loginh2">Administrationsinloggning</h2>
<form method="POST" action="index.php" class="loginform">
    <input type="text" name="username" id="username" placeholder="Användarnamn">
    <input type="password" name="password" id="password" placeholder="Lösenord">
    <input type="submit" value="Logga in" class="loginbtn">
    <!--Skriv ut meddelande om det finns-->
    <p style="color:red;">
    <?php if(isset($message)) {
        echo $message;
    }?>
    </p>
</form>
</section>
    
</body>
</html>