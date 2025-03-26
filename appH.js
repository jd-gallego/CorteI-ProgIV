document.querySelector(".menu-toggle").addEventListener("click", function() {
    let menu = document.querySelector(".menu");
    let content = document.querySelector(".content");

    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        content.style.marginTop = "150px"; // Ajusta según el tamaño del menú
    } else {
        content.style.marginTop = "0";
    }
});


let index = 0;
const images = document.querySelectorAll(".carousel img");
const totalImages = images.length;
const carousel = document.querySelector(".carousel");

function showImage(i) {
    index = (i + totalImages) % totalImages;
    carousel.style.transform = `translateX(${-index * 100}%)`;
}

document.querySelector(".next").addEventListener("click", () => showImage(index + 1));
document.querySelector(".prev").addEventListener("click", () => showImage(index - 1));

setInterval(() => showImage(index + 1), 3000); // Cambio automático cada 3s

document.getElementById('formulario').addEventListener('submit', async function(event) {
    event.preventDefault();

    let name = document.getElementById('nombre').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    if (name === '' || email === '' || password === '') {
        alert('Llena todo');
        return;
    }

    const url = "https://example.com/registro-usuario";

    const formData = {
        name: name,
        email: email,
        password: password
    };

    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        });

        let result = await response.json();

        if (response.ok) {
            alert("Formulario enviado con éxito!");
            this.reset();
        } else {
            alert(`Error: ${result.message || 'Error al enviar'}`);
        }
    } catch (error) {
        console.error('Error', error);
        alert("Un error ocurrió");
    }
});
