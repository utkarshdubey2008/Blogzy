document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.slider img');
    const prev = document.querySelector('button.prev');
    const next = document.querySelector('button.next');
    let currentImageIndex = 0;

    function showImage(index) {
        images.forEach((img, idx) => {
            img.style.display = idx === index ? 'block' : 'none';
        });
    }

    showImage(currentImageIndex);

    prev.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    });

    next.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    });
});
