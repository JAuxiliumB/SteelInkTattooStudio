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
    document.addEventListener("DOMContentLoaded", () => {
        const faqSection = document.querySelector(".FAQ-section");
    
        const FAQobserver = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                faqSection.classList.add("show");
                FAQobserver.unobserve(faqSection);
            }
        }, { threshold: 0.3 });
    
        FAQobserver.observe(faqSection);
    });
    

// Galerija
const carouselContainer = document.querySelector('.carousel-container');
const images = document.querySelectorAll('.carousel-img');

images.forEach((image) => {
    const clone = image.cloneNode(true);
    carouselContainer.appendChild(clone);
});

const totalWidth = carouselContainer.scrollWidth;

const scrollSpeed = 3;
carouselContainer.style.animationDuration = `${images.length * scrollSpeed}s`;

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

//Lepa misel napis
const textintro ="Tetovaža je platno duše, kjer vsak zamah igle riše zgodbo, ki ostane za vedno vtkana v kožo.";
const introDiv = document.getElementById("text");

    function typeEffect() {
        textintro.split("").forEach((char, i) => {
            let span = document.createElement("span");
                span.textContent = char;
                span.classList.add("fade");
                span.style.animationDelay = `${i * 0.06}s`;
                introDiv.appendChild(span);
            });
    }

    const observerIntro = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            typeEffect();
            observerIntro.unobserve(introDiv);
        }
        }, { threshold: 0.3 });
    
        observerIntro.observe(introDiv);

//artist-photo rollIn
const artistPhoto = document.querySelector(".artist-photo");

const observerArtistPhoto = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        artistPhoto.style.animation = "rollIn 1.2s ease-out forwards";
    }
}, { threshold: 0.3 });

observerArtistPhoto.observe(artistPhoto);

//artist-bio-napis
const textBio = "Matej Vidovič je mojster tetoviranja z več kot 10-letnimi izkušnjami." +
" Znano je, da s svojimi detajli in inovativnimi dizajni ustvarja edinstvene umetnine." +
" Njegova strast do umetnosti in tetoviranja se odraža v vsakem njegovem delu.";

const bioDiv = document.getElementById("bio");

function writeText() {
    textBio.split("").forEach((char, i) => {
    let span = document.createElement("span");
        span.textContent = char;
        span.classList.add("fade");
        span.style.animationDelay = `${i * 0.01}s`;
        bioDiv.appendChild(span);
    });
}

const observerBio = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        writeText();
        observerBio.unobserve(bioDiv);
    }
    }, { threshold: 0.3 });

    observerBio.observe(bioDiv);
