/* Musiteli Mubuso
30 Vanilla JS Challenge
Day 01 Drum Kit */

//Variables
//Array for holding dance gifs
const dances = ['url("src/images/dancing-1.gif")','url("src/images/dancing-2.gif")','url("src/images/dancing-3.gif")','url("src/images/dancing-4.gif")','url("src/images/dancing-5.gif")','url("src/images/dancing-6.gif")','url("src/images/dancing-7.gif")','url("src/images/dancing-8.gif")','url("src/images/dancing-9.gif")']
//Array for holding all nine canvases
const canvases = []
//Controls positioning of canvas starting from left side
let canvasPositionFromLeft = 0


for(let i = 0; i < 9; i++){
    let div = document.createElement("div")
    div.classList.add('canvas')
    document.body.appendChild(div)
    div.style.left = canvasPositionFromLeft + '%'
    canvasPositionFromLeft += 5
    canvases.push(div)
}

// run animation that corresponds with key
function runDanceAnimation(index){
    canvases[index].style.backgroundImage = dances[index]
}

// remove dance animation
function removeDanceAnimation(index){
    canvases[index].style.backgroundImage = ''
}

//convert audio datakey to array index
function convertKeyboardKeyToArrayIndex(keyboardKey) {
    switch (parseInt(keyboardKey)){
        case 65:
            return 0
        case 83:
            return 1
        case 68:
            return 2
        case 70:
            return 3
        case 71:
            return 4
        case 72:
            return 5
        case 74:
            return 6
        case 75:
            return 7
        case 76:
            return 8
        default:
            return 0
    }
}

//EventListerners
//Listens for "ASDFGHJKL" keys. Create sound depending on what key was pressed
document.addEventListener('keydown', function (e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if (e.keyCode + "" === audio.dataset.key) {
        let dance = convertKeyboardKeyToArrayIndex(audio.dataset.key)
        runDanceAnimation(dance)
        setTimeout(() => removeDanceAnimation(dance),2000)
        audio.play()
    }
})

//Create a ball for each square block
