let currentDate = document.querySelector("#currentDate");

let date = new Date;
let fullDate= date.getFullYear();

currentDate.textContent = fullDate;