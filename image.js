const imageContainer = document.getElementById('gallery');

const storedImages = localStorage.getItem('images');
const imageArray = JSON.parse(storedImages);

if (imageArray) {
  for (let i = 0; i < imageArray.length; i++) {
    const imageUrl = imageArray[i];
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    imageContainer.appendChild(imageElement);
  }
}