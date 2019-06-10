/* Musiteli Mubuso
30 Vanilla JS Challenge
Day 01 Drum Kit */

//Variables


//EventListerners
//Listens for click 
document.addEventListener('keydown',function(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(e.keyCode === audio.keyCode){
        console.log()
    }
    console.log(e.keyCode)
})