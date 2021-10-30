"use strict";
// URL TILL WEBBTJÄNST
const url = "https://studenter.miun.se/~sian2001/writeable/dt173g/projekt/api/websitesapi.php";

// HTML & VARIABLER
const formEl = document.getElementById("updateform");
const sitetitleEl = document.getElementById("sitetitle");
const siteurlEl = document.getElementById("siteurl");
const sitedescEl = document.getElementById("sitedesc");
const siteimageEl = document.getElementById("siteimage");
const createbtnEl = document.getElementById("createbtn");
const msgEl = document.getElementById("msg");

// EVENTHANTERARE
// Vid klick på submit-knappen i formuläret, förhindra omladdning
createbtnEl.addEventListener("click", function (event) {
    event.preventDefault();
    createPost();
})

// FUNKTIONER
// Skapa ny post
function createPost() {
    console.log("Kör createPost...");

    // Samla in data
    let sitetitle = sitetitleEl.value;
    let siteurl = siteurlEl.value;
    let sitedesc = sitedescEl.value;
    let siteimage = siteimageEl.files[0];

    // Gör till formulärdata
    let formData = new FormData();

    formData.append("sitetitle", sitetitle);
    formData.append("siteurl", siteurl);
    formData.append("sitedesc", sitedesc);
    formData.append("siteimage", siteimage);

    // Anropa webbtjänsten
    fetch(url, {
        method: "POST",
        body: formData
    })

        // Konvertera svaret till JSON
        .then(response => response.json())

        // Skriv ut svaret från webbtjänsten till konsolen
        .then(json => {
            // Gör om objektet för att kunna skriva ut
            let message = Object.values(json);
            // Skriv ut svaret till konsolen och skärmen
            console.log(message);
            msgEl.innerHTML = message;
            // Nollställ formulär
            formEl.reset();
        })

        // Fånga eventuella fel
        .catch((err) => console.log(err));
}