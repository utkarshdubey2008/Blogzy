document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.slider img');
    let currentImageIndex = 0;

    function showImage(index) {
        images.forEach((img, idx) => {
            img.style.display = idx === index ? 'block' : 'none';
        });
    }

    showImage(currentImageIndex);

    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }, 3000);
});
