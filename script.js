const ham = document.querySelector(".ham");
const navmenu = document.querySelector(".navmenu");

ham.addEventListener("click", () => {
    ham.classList.toggle("active");
    navmenu.classList.toggle("active");
})