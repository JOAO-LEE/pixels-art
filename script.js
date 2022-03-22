//2 - Adicione à página uma paleta contendo quatro cores distintas.
let myBody = document.querySelector("body");
let mainTag = document.createElement("main");
let paletteSection = document.createElement("section");
myBody.appendChild(mainTag);
mainTag.className = "main-content"
mainTag.appendChild(paletteSection);
paletteSection.id = "color-palette"


function divMaker() {
    for (let index = 0; index < 4; index += 1) {
       let palette = document.createElement("div")
       palette.className = "color"
       palette.id = `colors${index}`
       paletteSection.appendChild(palette);
    }
}
divMaker()


// let paletteDivs = document.getElementsByClassName("color")[0];
// function paletteColors () {
//     for (let index = 0; index < myColors.length; index += 1){
//         myColors[index] = paletteDivs.style.backgroundColor
//         console.log(myColors[index]) 
//     }
    
    
// }
// paletteColors()
