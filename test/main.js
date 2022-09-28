var quotes=[
    "People tell you the world looks a certain way",
    "Parents tell you how to think. Schools tell you how",
    "to think. TV. Religion. And then at a certain point",
    "if you’re lucky, you realize you can make up your own mind.",
    "Nobody sets the rules but you. You can design",
    "your own life — Carrie Ann Moss"
]

function newQuote(){
var randomNumber = Math.floor(Math.random()*(quotes.length))
console.log(randomNumber)
document.getElementById("quoteDisplay").innerHTML=quotes[randomNumber]
console.log(quotes.length)
}