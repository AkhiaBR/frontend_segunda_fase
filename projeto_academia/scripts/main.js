let currentIndex = 0; // posicao da imagem atual 
const slides = document.querySelectorAll('.slide'); // faz um array (lista) com todos os elementos .slide, ou seja, as imagens utilizadas
const totalSlides = slides.length; // total de imagens

function showSlide(index) { // função de mostrar as imagens / (index = currentIndex + 1)
    if (index >= totalSlides) { // se a posicao for maior do que o total de imagens, volta para a posicao inial 0
        currentIndex = 0;
    } 
    else { // se não for maior, apenas define que a posição atual é o index
        currentIndex = index;
    }

    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = 'translateX(-'+(currentIndex*100)+'%)'; // altera a imagem para esquerda (-), horizontalmente (x) e totalmente (100%)
}

function nextSlide() { // funcao de selecionar a próxima imagem
    showSlide(currentIndex + 1);
}

setInterval(nextSlide, 5000); // altera a imagem a cada 3 segundos
