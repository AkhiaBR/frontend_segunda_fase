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

function clearForm() {
    const inputs = document.querySelectorAll('.input_box input, .input_box select');

    // Loop através de todos os elementos e limpa o valor
    inputs.forEach(input => {
        if (input.type === "checkbox" || input.type === "radio") {
            input.checked = false;  // Desmarca os checkboxes e radio buttons
        } else if (input.type === "text" || input.type === "tel" || input.type === "email" || input.type === "number" || input.type === "date") {
            input.value = '';  // Limpa os campos de texto e outros inputs
        } else if (input.tagName.toLowerCase() === 'select') {
            input.selectedIndex = 0;  // Reseta os selects para a opção padrão
        }
    });
}

setInterval(nextSlide, 3000); // altera a imagem a cada 3 segundos
