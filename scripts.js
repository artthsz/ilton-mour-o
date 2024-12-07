// Script para ativar o carrossel
let index = 0;
const images = document.querySelectorAll('.carousel-image');

function changeImage() {
    images.forEach((image, i) => {
        image.classList.remove('active');
    });
    index++;
    if (index === images.length) index = 0;
    images[index].classList.add('active');
}

setInterval(changeImage, 5000); // Troca de imagem a cada 5 segundos

// Navegação suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
