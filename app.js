let button = document.querySelector("#button")

function changeColor() {
    let canvasBg = document.querySelector("#canvas")
    let text = "0123456789ABCDEF"
    let hash = "#"

    for(let i = 0; i < 6; i++) {
        hash = hash + text[Math.floor(Math.random() * 16)]
    } 

    canvasBg.style.backgroundColor = hash
}

button.addEventListener('click', changeColor)