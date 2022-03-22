let myBody = document.querySelector("body");
let mainTag = document.createElement("main");
let paletteSection = document.createElement("section");
myBody.appendChild(mainTag);
mainTag.className = "main-content"
mainTag.appendChild(paletteSection);
paletteSection.id = "color-palette"

//2 - Adicione à página uma paleta contendo quatro cores distintas.
//3 - Adicione a cor preta como a primeira cor da paleta de cores.
function divMaker() {
    for (let index = 0; index < 4; index += 1) {
       let palette = document.createElement("div");
       palette.classList = "color";
       palette.id = `colors${index}`;
       if (index === 0) {
        palette.style.backgroundColor = "black";
        palette.classList.add("selected");
    }
       paletteSection.appendChild(palette);
    }
}
divMaker()
//4 - Adicione à página um quadro de pixels, com 25 pixels.
//5 - Faça com que cada elemento do quadro de pixels possua 40 pixels de largura, 40 pixels de altura e seja delimitado por uma borda preta de 1 pixel.
//6 - Defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels
let pixelSection = document.createElement("section")
paletteSection.appendChild(pixelSection);
pixelSection.id = "pixel-board";
function pixelBoard(){
    for (let index2 = 0; index2 <= 24; index2 += 1) {
            let blocks = document.createElement("div");
            blocks.className = "pixel";
            pixelSection.appendChild(blocks);
        }
    }
pixelBoard()
// let paletteDivs = document.getElementsByClassName("color")[0];
// function paletteColors () {
//     for (let index = 0; index < myColors.length; index += 1){
//         myColors[index] = paletteDivs.style.backgroundColor
//         console.log(myColors[index]) 
//     }
    
    
// }
// paletteColors()
