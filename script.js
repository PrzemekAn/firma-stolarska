const homePageLink = document.querySelector('#home');
const homePageTarget = document.querySelector('.header');
const homePagePosition = homePageTarget.offsetTop;

const services_link = document.querySelector('#uslugi');
const services_target = document.querySelector('.services-container');
const services_position = services_target.offsetTop;

const galleryLink = document.getElementById('galeria')
const galleryTarget = document.querySelector('.gallery-container');
const galleryPosition = galleryTarget.offsetTop;

const contactLink = document.getElementById('kontakt');
const contactTarget = document.querySelector('.contact-container');
const contactPosition = contactTarget.offsetTop;

const upButton = document.querySelector('.up-button');


//Scrollowanie do danych elementow strony
services_link.addEventListener('click', function () {
    window.scrollTo({
        top: services_position,
        left: 100,
        behavior: 'smooth'
    });
})

galleryLink.addEventListener('click', () => {
    window.scrollTo({
        top: galleryPosition,
        left: 100,
        behavior: 'smooth'
    });
})

contactLink.addEventListener('click', () => {
    window.scrollTo({
        top: contactPosition,
        left: 100,
        behavior: 'smooth'
    })
})

//Rozwijanie uslug i obracanie strzalki
const services = document.querySelectorAll('.service');

services.forEach(service => {
    service.addEventListener('click', (e) => {
        e.preventDefault;
        service.classList.toggle('active');
        const arrowIcon = service.querySelector('i');
        arrowIcon.classList.toggle('icon-active');
    })
})

//Przycisk powrotu na gore strony

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 150) {
        upButton.style.display = 'block';
    }
    if (window.pageYOffset > 151) {
        upButton.style.opacity = 1;
    } else if (window.pageYOffset < 151) {
        upButton.style.opacity = 0;
    } else if (window.pageYOffset < 150) {
        upButton.style.display = 'none';
    }
})

upButton.addEventListener('click', () => {
    this.scrollTo({
        top: homePagePosition,
        left: 100,
        behavior: 'smooth'
    })
})

//Img slajder

const images = document.querySelectorAll('img');
let idx = 0;



function slajder() {

    images.forEach(image => {
        image.style.transform = (`translateX(${-idx*800}px)`);
    })
    idx++;
    if (idx === images.length) {
        idx = 0;
    }
}
setInterval(slajder, 2000);


//Rozwijane menu kotaktowe

// const homeAdres = document.querySelector('.fa-home');
// const phoneNumber = document.querySelector('.fa-phone');
// const mailAdres = document.querySelector('.fa-envelope');

const adresData = document.querySelectorAll('.contact-profiles .fas');
const contactInfo = document.querySelectorAll('.contact-info');
let z_idx = 0;
// const contactInfoHeader = document.querySelector('.contact-info-header');
// const contactInfoText = document.querySelector('.contact-info-text');
adresData.forEach(adresType => {
    adresType.addEventListener('click', function (e) {
        const id = adresType.id;
        contactInfo[id].style.left = 0;
        contactInfo[id].style.zIndex = `${z_idx++}`;
        const timer = setTimeout(() => {
            contactInfo[id].style.left = '-30%';
        }, 7000);
    })
})