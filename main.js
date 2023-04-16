let devu = document.getElementById("devu")
let love = document.getElementById("loveYou")
let quo = [
    "I'm falling into you deeper and deeper every day!",
    "You are the best thing in my life!",
    "Take my hand, make me yours!",
    "You showed me what love is.",
    "Without You, there is no Me!",
    "You will always be mine.",
    "Thank god, You are mine.",
    "I'll never let you go.",
]

function quote(){
    var randomNumber=Math.floor(Math.random();
    var numberPosition = randomNumber**(quo.length));
    devu.innerText=quo[numberPosition];
    console.log(randomNumber);
    console.log(numberPosition);
}

