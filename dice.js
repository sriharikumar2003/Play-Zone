var random = Math.random();
var random2 = Math.random();
random = random*6 + 1;
random2 = random2*6 + 1;
var random1 = Math.floor(random);
var random3 = Math.floor(random2);
var imsrc1 = "dice" + random1 + ".png";
var imsrc2 = "dice" + random3 + ".png";
document.getElementsByClassName("img1")[0].setAttribute("src",imsrc1);
document.getElementsByClassName("img2")[0].setAttribute("src",imsrc2);
if(random1 > random3){
    document.getElementsByTagName("h1")[0].textContent = "Player1 Wins the Game";
}
else if(random1 < random3){
    document.getElementsByTagName("h1")[0].textContent = "Player2 Wins the Game";
}
else{
    document.getElementsByTagName("h1")[0].textContent = "Equal for now";
}