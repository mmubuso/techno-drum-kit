/* Musiteli Mubuso
30 Vanilla JS Challenge
Day 01 Drum Kit */

//Variables



// function runDance

//EventListerners
//Listens for "ASDFGHJKL" keys. Create sound depending on what key was pressed
document.addEventListener('keydown',function(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(e.keyCode + "" === audio.dataset.key){
        audio.play()
    }
})

//Create a ball for each square block
