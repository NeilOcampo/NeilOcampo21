const noButton = document.querySelector('.styledbutton1');
const yesButton = document.querySelector('.styledbutton');


const image = document.getElementById('image');
let noImageCount = 0;
let yesImageCount = 0;

noButton.addEventListener('mouseover', () => {
  noButton.style.position = 'absolute';
  noButton.style.left = `${Math.random() * window.innerWidth}px`;
  noButton.style.top = `${Math.random() * window.innerHeight}px`;

  noImageCount++;
  if (noImageCount === 1) {
    image.src = "images (1).jpg"; 
  } else if (noImageCount === 2) {
    image.src = "images (3).jpg"; 
    noImageCount = 0; 
  }
});

yesButton.addEventListener('mouseover', () => {
  yesImageCount++;
  if (yesImageCount === 1) {
    image.src = "images (2).jpg"; 
  } else if (yesImageCount === 2) {
    image.src = "download.jpg";
    yesImageCount = 0; 
  }
});

yesButton.addEventListener('click', () => {
  window.location.href = 'yes.html'; 
});


