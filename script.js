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
    //    palette.id = `colors${index}`;
    //    if (index === 0) {
    //     palette.style.backgroundColor = 'black';
    //     palette.classList.add('selected');
    // }
       paletteSection.appendChild(palette);
    }
    let firstColor = document.querySelectorAll('div')[0];
    firstColor.style.backgroundColor = 'black';
    firstColor.classList.add('selected');
    let secondColor = document.querySelectorAll('div')[1];
    secondColor.style.backgroundColor = '#ffcb77';
    let thirdColor = document.querySelectorAll('div')[2];
    thirdColor.style.backgroundColor = '#fe6d73';
    let fourthColor = document.querySelectorAll('div')[3];
    fourthColor.style.backgroundColor = '#17c3b2';
}
divMaker()
// 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
// clearButton.innerText = 'Limpar';
// clearButton.id = 'clear-board';
// function clearAll(){
//     let blocksToClear = document.querySelectorAll('section')[1].children;
//     for (let xxx of blocksToClear){
//         xxx.style.backgroundColor = 'white';
//     }
// }
// clearButton.addEventListener('click', clearAll);
//4 - Adicione à página um quadro de pixels, com 25 pixels.
//5 - Faça com que cada elemento do quadro de pixels possua 40 pixels de largura, 40 pixels de altura e seja delimitado por uma borda preta de 1 pixel.

let pixelSection = document.createElement('section');
mainTag.appendChild(pixelSection);
pixelSection.id = 'pixel-board';
function pixelBoard() {
    for (let index2 = 0; index2 <= 24; index2 += 1) {
            let blocks = document.createElement('div');
            blocks.className = 'pixel';
            pixelSection.appendChild(blocks);
        }
    }
pixelBoard()
//7 - Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.
let colorPicker = document.querySelector('section').children
for (let xyx of colorPicker){
    xyx.addEventListener('click', colorSelection)
}
function colorSelection(colorizer){
    for (let i of colorPicker){
        i.classList.remove('selected')
    }
    colorizer.target.classList.add('selected')                           
}
