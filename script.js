//navbar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { 
        navbar.classList.add('sticky'); 
    } else {
        navbar.classList.remove('sticky');
    }
});

// FAQ
const items = document.querySelectorAll('.FAQ-item');

    items.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

// Galerija
const carouselContainer = document.querySelector('.carousel-container');
const images = document.querySelectorAll('.carousel-img');

images.forEach((image) => {
    const clone = image.cloneNode(true);
    carouselContainer.appendChild(clone);
});

const totalWidth = carouselContainer.scrollWidth;

carouselContainer.style.animationDuration = `${totalWidth / 100}px`; 

//Povečana slika
const modal = document.createElement('div');
modal.classList.add('image-modal');
modal.innerHTML = `
    <button class="close-btn">&times;</button>
    <img src="" alt="Full Image">`;
    
document.body.appendChild(modal);

const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-btn');

document.querySelectorAll('.carousel-img').forEach(img => {
    img.addEventListener('click', () => {
        modalImage.src = img.src;
        modal.classList.add('active');
    });
});

modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target === closeButton) {
        modal.classList.remove('active');
    }
});
