document.querySelector(".menu-toggle").addEventListener("click", function() {
    let menu = document.querySelector(".menu");
    let content = document.querySelector(".content");

    menu.classList.toggle("active");

    // Ajustar el margen del contenido según el estado del menú
    if (menu.classList.contains("active")) {
        content.style.marginTop = "200px"; // Ajusta este valor según la altura del menú
    } else {
        content.style.marginTop = "0";
    }
});