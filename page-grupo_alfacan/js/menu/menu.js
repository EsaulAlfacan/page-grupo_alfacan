document.addEventListener('DOMContentLoaded', function () {
    var hamburguesa = document.getElementById('hamburguesa');
    var menuResponsive = document.querySelector('.menu-links');

    hamburguesa.addEventListener('click', function () {
        menuResponsive.classList.toggle('activo');
    });

    // Agregar event listener para cerrar el menú al hacer clic en un enlace
    menuResponsive.addEventListener('click', function (event) {
        // Verificar si el clic ocurrió en un enlace
        if (event.target.classList.contains('link')) {
            // Cerrar el menú al hacer clic en un enlace
            menuResponsive.classList.remove('activo');
        }
    });
});
