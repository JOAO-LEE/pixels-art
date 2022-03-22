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
       palette.className = "color";
       palette.id = `colors${index}`;
       paletteSection.appendChild(palette);
    }
}
divMaker()
//4 - Adicione à página um quadro de pixels, com 25 pixels.
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
