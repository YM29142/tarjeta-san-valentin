function openCard() {
    const card = document.querySelector('.card');
    card.classList.toggle('open');
}

// Función para generar rosas cayendo
function createRose() {
    const rose = document.createElement('div');
    rose.classList.add('rose');
    document.querySelector('.roses-container').appendChild(rose);

    // Posición aleatoria
    let startPosX = Math.random() * window.innerWidth;
    let animationDuration = Math.random() * 3 + 2; // Entre 2 y 5 segundos
    let size = Math.random() * 20 + 20; // Tamaño entre 20px y 40px

    rose.style.left = `${startPosX}px`;
    rose.style.width = `${size}px`;
    rose.style.height = `${size}px`;
    rose.style.animationDuration = `${animationDuration}s`;

    // Eliminar la rosa cuando termine la animación
    setTimeout(() => {
        rose.remove();
    }, animationDuration * 1000);
}

// Crear rosas continuamente
setInterval(createRose, 500); // Genera una rosa cada 500ms
