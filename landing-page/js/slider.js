document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const flechaIzquierda = document.getElementById('izq');
    const flechaDerecha = document.getElementById('der');
    let currentIndex = 0;

    // Ajusta el ancho del slider según la cantidad de slides
    slider.style.width = `${slides.length * 100}%`;

    flechaIzquierda.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1;
        }
        updateSliderPosition();
    });

    flechaDerecha.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSliderPosition();
    });

    // Cambia de slide automáticamente cada 30 segundos
    setInterval(() => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSliderPosition();
    }, 30000);

    function updateSliderPosition() {
        const newTransformValue = -currentIndex * (100 / slides.length);
        slider.style.transform = `translateX(${newTransformValue}%)`;
    }
});
