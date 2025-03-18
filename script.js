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
document.addEventListener('mousemove', (e) => {
    for (let i = 0; i < 1; i++) { // Create multiple sparkles
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        document.body.appendChild(sparkle);
        
        const size = Math.random() * 4 + 2; // Randomize size
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        
        const offsetX = (Math.random() - 0.5) * 20;
        const offsetY = (Math.random() - 0.5) * 20;

        sparkle.style.left = `${e.pageX + offsetX}px`;
        sparkle.style.top = `${e.pageY + offsetY}px`;
        
        setTimeout(() => sparkle.remove(), 500); // Longer visibility
    }
});

