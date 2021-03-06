"use strict";
// URL TILL WEBBTJÄNST
const url = "https://studenter.miun.se/~sian2001/writeable/dt173g/projekt/api/websitesapi.php";

// HTML & VARIABLER
const formEl = document.getElementById("updateform");
const sitetitleEl = document.getElementById("sitetitle");
const siteurlEl = document.getElementById("siteurl");
const sitedescEl = document.getElementById("sitedesc");
const siteimageEl = document.getElementById("siteimage");
const updatebtnEl = document.getElementById("updatebtn");
const formidEl = document.getElementById("id");
const msgEl = document.getElementById("msg");

// EVENTHANTERARE
// Vid klick på submit-knappen i formuläret, förhindra omladdning
updatebtnEl.addEventListener("click", function (event) {
    event.preventDefault();
    updatePost();
})

// FUNKTIONER

// Hämta aktuell post och fyll i formuläret
function getPost(id) {
    console.log("Kör getPost...");

    // Spara id i formuläret
    formidEl.value = id;

    // Skapa url för medskickat id
    let geturl = url + "?id=" + id;

    // Anropa webbtjänsten för att hämta enskild post
    fetch(geturl)
        .then((res) => res.json())
        .then((data => {
            console.log(data);
            // Skriv ut innehållet till formuläret
            data.forEach(websites => {
                sitetitleEl.value = websites.sitetitle;
                siteurlEl.value = websites.siteurl;
                sitedescEl.value = websites.sitedesc;
                siteimageEl.value = websites.siteimage;
            })
        }))
}

// Uppdatera befintlig post via webbtjänsten
function updatePost() {
    console.log("Kör updatePost...");

    // Hämta id från formuläret
    let id = formidEl.value;

    // Skapa url för medskickat id
    let updateurl = url + "?id=" + id;

    // Samla in data från formuläret och lagra som objekt
    let data = {
        sitetitle: sitetitleEl.value,
        siteurl: siteurlEl.value,
        sitedesc: sitedescEl.value,
        siteimage: siteimageEl.value
    }

    // Konvertera objekt till JSON
    let JSONdata = JSON.stringify(data);

    // Skicka begäran till webbtjänsten med PUT
    fetch(updateurl, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSONdata
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

// Radera post
function deletePost() {
    console.log("Kör deletePost...");

    // Hämta id från formuläret
    let id = formidEl.value;

    // Skapa url för medskickat id
    let deleteurl = url + "?id=" + id;

    fetch(deleteurl, {
        method: "DELETE"
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