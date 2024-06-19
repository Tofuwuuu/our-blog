// public/js/script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const likeButton = document.getElementById('likeButton');
    if (likeButton) {
        likeButton.addEventListener('click', () => {
            alert('You liked this content!');
        });
    }

    // Only execute the image slideshow on the index page
    if (document.getElementById('mainImage')) {
        const images = ["1.png", "2.jpg", "3.jpg", "4.jpg"];
        let currentIndex = 0;

        function changeImage() {
            const imageElement = document.getElementById('mainImage');
            imageElement.src = "public/images/" + images[currentIndex];
            currentIndex = (currentIndex + 1) % images.length;
        }

        setInterval(changeImage, 3000);
    }
});
