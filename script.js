const services_link = document.querySelector('#uslugi');
const services_target = document.querySelector('.services');
const position = services_target.offsetTop;

services_link.addEventListener('click', function () {
    window.scrollTo({
        top: position,
        left: 100,
        behavior: 'smooth'
    });
})

