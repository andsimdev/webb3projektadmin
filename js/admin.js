"use strict";
// URL TILL WEBBTJÄNSTER
const rooturl = "https://studenter.miun.se/~sian2001/writeable/dt173g/projekt/api/";
const urlstud = "https://studenter.miun.se/~sian2001/writeable/dt173g/projekt/api/studiesapi.php";
const urlemp = "https://studenter.miun.se/~sian2001/writeable/dt173g/projekt/api/employmentsapi.php";
const urlweb = "https://studenter.miun.se/~sian2001/writeable/dt173g/projekt/api/websitesapi.php";

// HTML-ELEMENT
const studiessectionEl = document.getElementById("studiessection");
const employmentssectionEl = document.getElementById("employmentssection");
const websitessectionEl = document.getElementById("websitessection");

// EVENTHANTERARE
// Skriv ut all data vid inladdning
window.onload = printData();

// FUNKTIONER
// Skriv ut all data vid inladdning
function printData() {
    // Anropa webbtjänsten för studier och skriv ut svaret
    fetch(urlstud)
        .then((res) => res.json())
        .then((data => {
            // Loopa igenom innehåll
            data.forEach(studies => {
                studiessectionEl.innerHTML+=
                `
                <article>
                <p><b>${studies.studtitle}</b></p>
                <p>${studies.university}</p>
                <p>${studies.studstartdate} - ${studies.studenddate}</p>
                <a href="updatestud.php?id=${studies.studID}" class="change">Ändra</a>
                </article>
                `;
            });
        }));

    // Anropa webbtjänsten för arbeten och skriv ut svaret
    fetch(urlemp)
        .then((res) => res.json())
        .then((data => {
            // Loopa igenom innehåll
            data.forEach(employments => {
                employmentssectionEl.innerHTML+=
                `
                <article>
                <p><b>${employments.emptitle}</b></p>
                <p>${employments.empplace}</p>
                <p>${employments.empstartdate} - ${employments.empenddate}</p>
                <a href="updateemp.php?id=${employments.empID}" class="change">Ändra</a>
                </article>
                `;
            });
        }));

    // Anropa webbtjänsten för webbplatser och skriv ut svaret
    fetch(urlweb)
        .then((res) => res.json())
        .then((data => {
            // Loopa igenom innehåll
            data.forEach(websites => {
                websitessectionEl.innerHTML+=
                `
                <article>
                <p><b>${websites.sitetitle}</b></p>
                <p class="smallurl">${websites.siteurl}</p>
                <p>${websites.sitedesc}</p>
                <img src="${rooturl}${websites.siteimage}">
                <a href="updateweb.php?id=${websites.siteID}" class="change">Ändra</a>
                </article>
                `;
            });
        }));
};