let openMenuButton = document.querySelector(".open-menu");
let closeMenuButton = document.querySelector(".close-menu");
let sideMenu = document.querySelector(".side-menu");

openMenuButton.addEventListener("click", function() {
    openMenuButton.style.display = "none"; 
    sideMenu.style.height = "100%"
});

closeMenuButton.addEventListener("click", function() {
    sideMenu.style.height = "0px";
    openMenuButton.style.display = "inline-block";
});
