"use strict";
// URL TILL WEBBTJÄNST
const url = "https://studenter.miun.se/~sian2001/writeable/dt173g/projekt/api/employmentsapi.php";

// HTML & VARIABLER
const formEl = document.getElementById("updateform");
const emptitleEl = document.getElementById("emptitle");
const empplaceEl = document.getElementById("empplace");
const empstartdateEl = document.getElementById("empstartdate");
const empenddateEl = document.getElementById("empenddate");
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

    // Samla in data från formuläret och lagra som objekt
    let data = {
        emptitle: emptitleEl.value,
        empplace: empplaceEl.value,
        empstartdate: empstartdateEl.value,
        empenddate: empenddateEl.value
    }

    // Konvertera objekt till JSON
    let JSONdata = JSON.stringify(data);

    // Anropa webbtjänsten
    fetch(url, {
        method: "POST",
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