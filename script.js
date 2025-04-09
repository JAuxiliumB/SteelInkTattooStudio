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

//Galerija
const images = document.querySelectorAll('.carousel-img');
let currentIndex = 0;
let interval;

function updateCarousel() {
  images.forEach((img, i) => {
    img.classList.remove('active', 'left', 'right');

    if (i === currentIndex) {
      img.classList.add('active');
    } else if (i === (currentIndex - 1 + images.length) % images.length) {
      img.classList.add('left');
    } else if (i === (currentIndex + 1) % images.length) {
      img.classList.add('right');
    }
  });
}


images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});

updateCarousel();

 
//lepa misel
const textintro = "Tetovaža je platno duše, kjer vsak zamah igle riše zgodbo, ki ostane za vedno vtkana v kožo.";
const introDiv = document.getElementById("text");

let sentenceIndex = 0;
const sentences = textintro.match(/[^.?!]+[.?!]/g); // razbije na stavke

function typeSentenceWords(sentence, callback) {
    introDiv.innerHTML = "";
    const words = sentence.trim().split(" ");

    words.forEach((word, i) => {
        const span = document.createElement("span");
        span.textContent = word + " ";
        span.classList.add("fade");
        span.style.animationDelay = `${i * 0.3}s`;
        introDiv.appendChild(span);
    });

    setTimeout(() => {
        if (callback) callback();
    }, words.length * 300 + 500);
}

function startTyping() {
    if (sentenceIndex >= sentences.length) return;

    typeSentenceWords(sentences[sentenceIndex], () => {
        sentenceIndex++;
        setTimeout(startTyping, 1000);
    });
}

const observerIntro = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        startTyping();
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

// artist-bio-napis
const textBio = "Matej Vidovič je mojster tetoviranja z več kot 10-letnimi izkušnjami." +
" Znano je, da s svojimi detajli in inovativnimi dizajni ustvarja edinstvene umetnine." +
" Njegova strast do umetnosti in tetoviranja se odraža v vsakem njegovem delu.";

const bioDiv = document.getElementById("bio");

function writeText() {
    const words = textBio.split(" ");
    words.forEach((word, i) => {
        const span = document.createElement("span");
        span.textContent = word + " ";
        span.classList.add("fade");
        span.style.animationDelay = `${i * 0.2}s`;
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
