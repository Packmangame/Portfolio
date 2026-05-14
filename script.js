
const citizenImages = [
  'Image/Grazdanin1.jpg',
  'Image/Grazdanin2.jpg'
];

let currentCitizenSlide = 0;
const citizenImg = document.getElementById('citizen-slider-image');

function updateCitizenSlide() {
  if (citizenImg) {
    citizenImg.src = citizenImages[currentCitizenSlide];
  }
}

document.querySelector('.slider-btn.next')?.addEventListener('click', () => {
  currentCitizenSlide = (currentCitizenSlide + 1) % citizenImages.length;
  updateCitizenSlide();
});

document.querySelector('.slider-btn.prev')?.addEventListener('click', () => {
  currentCitizenSlide = (currentCitizenSlide - 1 + citizenImages.length) % citizenImages.length;
  updateCitizenSlide();
});
