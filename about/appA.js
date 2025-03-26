document.querySelector(".menu-toggle").addEventListener("click", function() {
    let menu = document.querySelector(".menu");
    let content = document.querySelector(".content");

    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        content.style.marginTop = "200px"; 
    } else {
        content.style.marginTop = "0";
    }
});