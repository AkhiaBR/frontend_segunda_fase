let currentSlide = 0;
const slides = document.querySelectorAll('.slide'); // Seleciona todas as imagens do slider
const totalSlides = slides.length;

// Função para mostrar o slide ativo
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // Remove a classe "active" de todas as imagens
        if (i === index) {
            slide.classList.add('active'); // Adiciona a classe "active" na imagem atual
        }
    });
}

// Função para ir para o próximo slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Avança para o próximo slide
    showSlide(currentSlide); // Exibe o slide atual
}

// Função para ir para o slide anterior
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Volta para o slide anterior
    showSlide(currentSlide); // Exibe o slide atual
}

// Inicia o slider, mostrando o primeiro slide
showSlide(currentSlide);

// Troca automaticamente as imagens a cada 3 segundos (3000 milissegundos)
setInterval(nextSlide, 3000);
