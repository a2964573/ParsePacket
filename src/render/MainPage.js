console.log("MainPage.js|NOR|MainPage Start!");

const saveBtn = document.getElementById("saveBtn");
const parseBtn = document.getElementById("parseBtn");
const optionBtn = document.getElementById("optionBtn");

saveBtn.addEventListener("click", (event) => {
    console.log("MainPage.js|NOR|saveBtn clicked");
    window.location.href = "SavePage.html";
});

parseBtn.addEventListener("click", (event) => {
    console.log("MainPage.js|NOR|parseBtn clicked");
});

optionBtn.addEventListener("click", (event) => {
    console.log("MainPage.js|NOR|optionBtn clicked");
});