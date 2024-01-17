const img = document.querySelector("#themeImg");
const body = document.querySelector("body");
img.onclick = () => {
    body.classList.toggle("dark-theme");
};