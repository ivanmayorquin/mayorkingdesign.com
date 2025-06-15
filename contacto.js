document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Script de contacto cargado correctamente.");

    const formulario = document.getElementById("contact-form");

    if (formulario) {
        formulario.addEventListener("submit", function (event) {
           // event.preventDefault(); // Evita recargar la página

            let nombre = document.getElementById("nombre").value.trim();
            let apellido = document.getElementById("apellido").value.trim();
            let email = document.getElementById("email").value.trim();
            let mensaje = document.getElementById("mensaje").value.trim();

            // Validaciones
            if (!nombre || !apellido || !email || !mensaje) {
                alert("⚠️ Por favor, completa todos los campos.");
                return;
            }

            if (!validarEmail(email)) {
                alert("⚠️ Ingresa un correo electrónico válido.");
                return;
            }
        });
    } else {
        console.warn("⚠️ No se encontró el formulario con ID 'contact-form'.");
    }

    // Función para validar el correo electrónico
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});


