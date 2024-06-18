// public/js/script.js

document.addEventListener("DOMContentLoaded", function() {
    const likeButton = document.getElementById("likeButton");

    likeButton.addEventListener("click", function() {
        if (this.classList.contains("liked")) {
            this.classList.remove("liked");
            this.textContent = "Like";
        } else {
            this.classList.add("liked");
            this.textContent = "Liked!";
        }
    });
});

// Define an array of image file names
const images = ["1.png", "2.jpg", "3.jpg", "4.jpg"]; // Add all image file names here

let currentIndex = 0; // Initialize the index of the current image

// Function to change the image every 5 seconds
function changeImage() {
    // Get the image element by its ID
    const imageElement = document.getElementById('mainImage');
    // Set the src attribute of the image to the next image in the array
    imageElement.src = "public/images/" + images[currentIndex];
    // Increment the index, looping back to 0 if it exceeds the array length
    currentIndex = (currentIndex + 1) % images.length;
}

// Call the changeImage function every 5 seconds
setInterval(changeImage, 3000);