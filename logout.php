<?php
// Radera session och skicka tillbaka till inloggningssidan
session_start();
session_unset();
session_unset();

header("Location: index.php");

exit();