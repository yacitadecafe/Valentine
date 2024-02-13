document.getElementById('no').addEventListener('mouseover', function() {
    const noButton = this;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const availableWidth = viewportWidth - noButton.offsetWidth;
    const availableHeight = viewportHeight - noButton.offsetHeight;
    const newX = Math.random() * availableWidth;
    const newY = Math.random() * availableHeight;

    noButton.style.position = 'fixed';
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
});

document.getElementById('no').addEventListener('click', function() {
    window.location.reload();
});

document.getElementById('yes').addEventListener('click', function() {
    document.getElementById('gif').src = 'kitty3.gif'; // Asegúrate de reemplazar 'nuevo-gif.gif' con la ruta de tu nuevo GIF

    document.querySelector('.buttons').style.display = 'none';

    document.getElementById('newText').style.display = 'block';

    document.getElementById('newText2').style.display = 'block';

    document.getElementById('Text').style.display = 'none';
});
