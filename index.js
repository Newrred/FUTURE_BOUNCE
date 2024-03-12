let posX = 0;
let posY = 0;

const ccursor = document.querySelector('.cursor')

    function mouseFunc(event) {
        console.log(event.clientX, event.clientY)
        posX = (event.clientX -25) + "px"
        posY = (event.clientY -25) + "px"

        ccursor.style.left = posX
        ccursor.style.top = posY

    }

    document.addEventListener("mousemove", mouseFunc)
    document.addEventListener("scroll", mouseFunc, false)

let mains = document.querySelector('.fRow')

function mText() {
    
}

mains.addEventListener("mouseover",mText)