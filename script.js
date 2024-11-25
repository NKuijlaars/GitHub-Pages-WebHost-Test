document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');

    // Preload the high-resolution image
    const highResImage = new Image();
    highResImage.src = 'base.png'; // Replace with your high-res image
    highResImage.onload = () => {
        container.classList.add('loaded'); // Add 'loaded' class once the image is ready
    };
});
