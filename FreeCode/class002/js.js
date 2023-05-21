

// console.log(4 === 3)
// console.log(5 > 2)
// console.log(12 > 12)
// console.log(3 > 0)
// console.log(11 <= 11)
// console.log(3 <= 2)
let player = {
    name : "Per",
    chips : 145

}

let btnStart = document.querySelector(".startGame")
let cards = []
let sum = 0
let message = ""
let hasBlackJack = false
let isAlive = false
let res = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cartasEscolhidas = document.querySelector("#cartas")
let newCard = document.querySelector("#novaCarta")





let playerEL = document.querySelector("#playerName")
playerEL.textContent = player.name + ": $" + player.chips

function getRandomInt(){
    let cardNumber = Math.floor(Math.random() * 13) + 1 // 1-13
    if(cardNumber > 10){
        cardNumber = 10
    }else if(cardNumber === 1){
        cardNumber = 11
    }

    return cardNumber
}


function startGame(){
    isAlive = true
    
    let firstCard = getRandomInt()
    let secondCard = getRandomInt()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    
    renderGame()
}


function renderGame(){
   
    cartasEscolhidas.innerHTML = "Cartas: " 
    for(let i in cards){
        cartasEscolhidas.innerHTML += cards[i] + " "
    }
    sumEl.innerHTML = "Soma: " + sum
    
    if(sum <= 20){
        message = 'Quer comprar uma nova carta?'
    } else if (sum === 21){
        message = 'BlackJack!'
        hasBlackJack = true
    } else{
        message = 'Você perdeu'
        isAlive = false
    }
    res.innerHTML = message

    
}

function comprarCarta(){
    if(isAlive === true && hasBlackJack === false){
    let novaCarta = getRandomInt()
    cards.push(novaCarta)
    sum = sum + novaCarta
    renderGame()
    }
    
}










