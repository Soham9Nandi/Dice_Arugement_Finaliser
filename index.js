//Creating Random Numbers
let randomNumber1 = Math.ceil(Math.random()*6);
let diceImage1 = './images/dice' +randomNumber1+'.png';

document.querySelector(".img1").setAttribute("src",diceImage1);
//Selecting left image to change
// if (randomNumber1 == 1){
//     document.querySelector(".img1").setAttribute("src","./images/dice1.png");
// }
// else if (randomNumber1 == 2){
//     document.querySelector(".img1").setAttribute("src","./images/dice2.png");
// }
// else if (randomNumber1 == 3){
//     document.querySelector(".img1").setAttribute("src","./images/dice3.png");
// }
// else if (randomNumber1 == 4){
//     document.querySelector(".img1").setAttribute("src","./images/dice4.png");
// }
// else if (randomNumber1 ==5){
//     document.querySelector(".img1").setAttribute("src","./images/dice5.png");
// }
// else{
//     document.querySelector(".img1").setAttribute("src","./images/dice6.png");
// }

//Changing image two
let randomNumber2 = Math.ceil(Math.random()*6);
let diceImage2 = './images/dice'+randomNumber2+'.png';

document.querySelector(".img2").setAttribute("src",diceImage2);
// if (randomNumber2 == 1){
//     document.querySelector(".img2").setAttribute("src","./images/dice1.png");
// }
// else if (randomNumber2 == 2){
//     document.querySelector(".img2").setAttribute("src","./images/dice2.png");
// }
// else if (randomNumber2 == 3){
//     document.querySelector(".img2").setAttribute("src","./images/dice3.png");
// }
// else if (randomNumber2 == 4){
//     document.querySelector(".img2").setAttribute("src","./images/dice4.png");
// }
// else if (randomNumber2 ==5){
//     document.querySelector(".img2").setAttribute("src","./images/dice5.png");
// }
// else{
//     document.querySelector(".img2").setAttribute("src","./images/dice6.png");
// }

// Deciding the winner and changing title accordingly
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩Player 1 Won";
}
else if (randomNumber2>randomNumber1){
    document.querySelector("h1").textContent = "Player 2 Won🚩";
}
else{
    document.querySelector("h1").textContent = "DRAW!!!";
}