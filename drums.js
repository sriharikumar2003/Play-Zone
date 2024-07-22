var time = document.getElementsByClassName("drum").length;
while(time > 0){
    time--;
    document.getElementsByClassName("drum")[time].addEventListener("click",alerto);
}
function alerto(){
    var noise = this.innerHTML;
    key(noise);
    animate(noise);
    

}
document.addEventListener("keydown",function(event){
    key(event.key);
    animate(event.key);
})


function key(key){
switch(key){
    case "w":
    var sound = new Audio('crash.mp3');
    sound.play();
    break;
    case "a":
    var sound = new Audio('kick-bass.mp3');
    sound.play();
    break;
    case "s":
    var sound = new Audio('snare.mp3');
    sound.play();
    break;
    case "d":
    var sound = new Audio('tom-1.mp3');
    sound.play();
    break;
    case "j":
    var sound = new Audio('tom-2.mp3');
    sound.play();
    break;
    case "k":
    var sound = new Audio('tom-3.mp3');
    sound.play();
    break;
    case "l":
    var sound = new Audio('tom-4.mp3');
    sound.play();
    break;
    default:
        console.log("HI");
    }
}
function animate(curkey){
    var s = document.querySelector("."+curkey);
    s.classList.add("pressed");

    setTimeout(function (){
        s.classList.remove("pressed");
    },100);
}