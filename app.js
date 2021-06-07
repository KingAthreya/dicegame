
let userNum= prompt("Type a number between 1 to 6 to play.");

let randomNum1= Math.floor(Math.random()*6) + 1;

let imgsrc1 = "images/dice" + randomNum1 + ".png";

let imgsrc2 = "images/dice" + userNum + ".png";

let img1= document.querySelector(".img1");
img1.setAttribute("src", imgsrc1);

let img2 = document.querySelector(".img2");
img2.setAttribute("src", imgsrc2);


if (userNum > randomNum1){
     document.querySelector("h1").innerHTML= "Wohooo You Won"

}

else if (randomNum1 > userNum) {

    document.querySelector("h1").innerHTML= "You Loser"
}

else {
    document.querySelector("h1").innerHTML= "Draw"
}
