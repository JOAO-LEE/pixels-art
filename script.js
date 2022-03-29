let myBody = document.querySelector('body');
let mainTag = document.createElement('main');
let paletteSection = document.createElement('section');
let clearButton = document.createElement('button');
myBody.appendChild(mainTag);
mainTag.className = 'main-content';
mainTag.appendChild(paletteSection);
paletteSection.id = 'color-palette';
mainTag.appendChild(clearButton);
//2 - Adicione à página uma paleta contendo quatro cores distintas.
//3 - Adicione a cor preta como a primeira cor da paleta de cores.
//6 - Defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels
function divMaker() {
    for (let index = 0; index < 4; index += 1) {
       let palette = document.createElement('div');
       palette.classList.add('color');
       paletteSection.appendChild(palette);
    }
}
divMaker()
    let firstColor = document.querySelectorAll('div')[0];
    firstColor.style.backgroundColor = 'black';
    firstColor.classList.add('selected');
    let secondColor = document.querySelectorAll('div')[1];
    secondColor.style.backgroundColor = '#ffcb77';
    let thirdColor = document.querySelectorAll('div')[2];
    thirdColor.style.backgroundColor = '#fe6d73';
    let fourthColor = document.querySelectorAll('div')[3];
    fourthColor.style.backgroundColor = '#17c3b2';
// 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.
function pickColor(event){
    // firstColor =     event.target.attributes.style.value.toString().split(':')[1].slice(0, -1)
    let selectionColor = document.querySelector('.selected')
    let selectedBg = selectionColor.style.backgroundColor
    let dart = event.target
    dart.style.backgroundColor = selectedBg
}
function colorApplication(action2) {
    let appliance = document.getElementById(action2)
    appliance.style.backgroundColor = firstColor
}
//4 - Adicione à página um quadro de pixels, com 25 pixels.
//5 - Faça com que cada elemento do quadro de pixels possua 40 pixels de largura, 40 pixels de altura e seja delimitado por uma borda preta de 1 pixel.
let pixelSection = document.createElement('section');
mainTag.appendChild(pixelSection);
pixelSection.id = 'pixel-board';
function pixelBoard() {
    for (let index2 = 0; index2 <= 24; index2 += 1) {
            let blocks = document.createElement('div');
            blocks.className = 'pixel';
            blocks.id = 'painting' + index2
            pixelSection.appendChild(blocks);
            blocks.addEventListener('click', pickColor)
        }   
    }
pixelBoard()
//7 - Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.
let colorPicker = document.querySelector('section').children
for (let index3 of colorPicker) {
    index3.addEventListener('click', colorSelection)
}
function colorSelection(colorizer) {
    for (let index4 of colorPicker) {
        index4.classList.remove('selected')
    }
    colorizer.target.classList.add('selected')                           
}
let paitingBlocks = document.querySelectorAll('.pixels')
// 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
clearButton.innerText = 'Limpar';
clearButton.id = 'clear-board';
let buttonToClear = document.getElementById('clear-board')
function clearAll() {
    let blocksToClear = document.querySelectorAll('.pixel');
    for (let xxx of blocksToClear) {
        xxx.style.backgroundColor = 'white'
    }
}
buttonToClear.addEventListener('click', clearAll);
