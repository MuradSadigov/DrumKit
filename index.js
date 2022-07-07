let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(let i = 0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        makeSound(this.innerHTML);
    });   
}

document.addEventListener("keypress", function (event){
    makeSound(event.key);
})

function makeSound(key){
    switch(key){
        case "w":
            let audio = new Audio("sounds/crash.mp3");
            audio.play();
        case "a":
            let audio1 = new Audio("sounds/kick-bass.mp3");
            audio1.play();
        case "s":
            let audio2 = new Audio("sounds/snare.mp3");
            audio2.play();
        case "d":
            let audio3 = new Audio("sounds/tom-1.mp3");
            audio3.play();
        case "j":
            let audio4 = new Audio("sounds/tom-2.mp3");
            audio4.play();
        case "k":
            let audio5 = new Audio("sounds/tom-3.mp3");
            audio5.play();
        case "l":
            let audio6 = new Audio("sounds/tom-4.mp3");
            audio6.play();
    }
}