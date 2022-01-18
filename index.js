var randomNumber1 = Math.floor(Math.random() * (6 - 1 + 1) + 1)
var randomNumber2 = Math.floor(Math.random() * (6 - 1 + 1) + 1)

//Random images of the dice
document.getElementById("img1").src = `images/dice${randomNumber1}.png`;
document.getElementById("img2").src = `images/dice${randomNumber2}.png`;

//Change the names 

if (randomNumber1 < randomNumber2) { 
    document.getElementById("h1").innerHTML = "Dicee 2 Wins!";
} else if (randomNumber1 === randomNumber2) { 
    document.getElementById("h1").innerHTML = "Draw!";
} else if (randomNumber2 < randomNumber1) { 
    document.getElementById("h1").innerHTML = "Dicee 1 Wins!";
}