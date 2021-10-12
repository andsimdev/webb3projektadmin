"use strict";
// URL TILL WEBBTJÄNST
const url = "http://localhost/webbutveckling3/projekt/api/studiesapi.php";

// HTML & VARIABLER
const formEl = document.getElementById("updateform");
const studtitleEl = document.getElementById("studtitle");
const universityEl = document.getElementById("university");
const studstartdateEl = document.getElementById("studstartdate");
const studenddateEl = document.getElementById("studenddate");
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
            data.forEach(studies => {
                studtitleEl.value = studies.studtitle;
                universityEl.value = studies.university;
                studstartdateEl.value = studies.studstartdate;
                studenddateEl.value = studies.studenddate;
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

    console.log(updateurl);

    // Samla in data från formuläret och lagra som objekt
    let data = {
        studtitle: studtitleEl.value,
        university: universityEl.value,
        studstartdate: studstartdateEl.value,
        studenddate: studenddateEl.value
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