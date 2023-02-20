/* Modification de la navbar */

/* document.getElementById("navbar").addEventListener("scroll", myFunction);

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.navbar').addClass('scroll');
  } else {
    $('.navbar').removeClass('scroll');
  }
}); */


//Calendrier d'événements
let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectMonth = document.getElementById("month-name");
let months = [  "Janvier",  "Février",  "Mars",  "Avril",  "Mai",  "Juin",  "Juillet",  "Août",  "Septembre",  "Octobre",  "Novembre",  "Décembre"];
let monthAndYear = document.getElementById("month-name");
showCalendar(currentMonth, currentYear);

function showCalendar(month, year) {
let firstDay = new Date(year, month).getDay();
let daysInMonth = 32 - new Date(year, month, 32).getDate();

let tbl = document.getElementById("calendar-body");
tbl.innerHTML = "";

selectMonth.innerHTML = months[month] + " " + year;

let date = 1;
for (let i = 0; i < 6; i++) {
let row = document.createElement("tr");

for (let j = 0; j < 7; j++) {
if (i === 0 && j < firstDay) {
let cell = document.createElement("td");
let cellText = document.createTextNode("");
cell.appendChild(cellText);
row.appendChild(cell);
} else if (date > daysInMonth) {
break;
} else {
let cell = document.createElement("td");
let cellText = document.createTextNode(date);
if (
date === today.getDate() &&
year === today.getFullYear() &&
month === today.getMonth()
) {
cell.classList.add("bg-info");
}
cell.appendChild(cellText);
row.appendChild(cell);
date++;
}
}
tbl.appendChild(row);
}
}


/* Formulaire d'inscription */
document.querySelector('#formulaire-inscription').addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('Formulaire soumis');
  
  const nom = document.querySelector('#nom').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  
  console.log(nom, email, password);
});
 












