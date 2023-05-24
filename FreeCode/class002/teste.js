// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//  console.log(getRandomIntInclusive(1, 21))   // NUMEROS ALEATÓRIOS

// for (let i= 1; i < 11; i += 1){ // LAÇO FOR
//   console.log(i)
// }

// let message = ["olá, como você está?", // OBJETO
//     "estou bem, e voce?",
//     "tudo bem, trabalhando no meu portfólio",
//     "o mesmo aqui",
//     "bom d se ouvir",
//     "idai?"
// ]

// for(let i in message){ // LAÇO COM ARRAY
//   console.log(message[i])
// }

// let random = Math.floor(Math.random() * 11) + 1 // numeros de 1 a 6 // NÚMERO ALEATÓRIO
// console.log(random)






// let course = {  // OBJETO
//   title: "aprenda css d graça",
//   lessons: 16,
//   length: 63,
//   creator: "per harald",
//   level: 2,
//   isFree: true,
//   tags: ["html", "css"],
//   hello: function(){
//     console.log('ola')
//   }
// }

// console.log(course.level)

// course.hello()

// let person = {
//   name: "Igor",
//   age: 21,
//   country: "brazil"

// }

// function logData(){
//   console.log(person.name + " tem " + person.age + " anos e mora no " + person.country)
// }

// logData()

// let countries = ["Tuvalu", "india", "USA", "Indonesia", "Monaco"] // ARRAY FOR

// function loppCountry(){
//   for(let i in countries){
//     console.log("- " + countries[i])
//   }
// }
// countries.pop()
// countries.shift()
// countries.unshift("china")
// countries.push("Paquistão")




// loppCountry()

// PEDRA PAPEL TESOURA

// let jogadores = {
//   escolha1: "",
//   escolha2: ""
// }

// let hands = [ "pedra", "papel", "tesoura"]
// let item = hands[0] 

// function numALeatorio(){
//    let = random = Math.floor(Math.random() * 3) // 0-2.999999999999
// }

// function sorteio(){
//   numALeatorio()
//   item = hands[random]
//   return item
// }

// function jogar(){

//     jogadores.escolha1 = sorteio()
//     jogadores.escolha2 = sorteio()

//     console.log("Jogador 1 escolheu: " + jogadores.escolha1)
//     console.log("Jogador 2 escolheu: " + jogadores.escolha2)

//     if(jogadores.escolha1 === jogadores.escolha2){
//       console.log("Empate")
//     } else if (jogadores.escolha1 == "pedra" && jogadores.escolha2 == "tesoura"){
//       console.log("Jogador 1 venceu")
//     } else if (jogadores.escolha1 == "tesoura" && jogadores.escolha2 == "papel"){
//       console.log("Jogador 1 venceu!")
//     }else if (jogadores.escolha1 == "papel" && jogadores.escolha2 == "pedra"){
//       console.log("Jogador 1 venceu!")
//     } else{
//       console.log("Jogador 2 venceu")
//     }
    
// }

// jogar()

// const recipient = "James"

// const email = `Hey, 
// ${recipient}! 
// How is it going?`
// console.log(email)

// console.log(Boolean("")) // false
// console.log(Boolean("0"))// true
// console.log(Boolean(100))// true
// console.log(Boolean(null))// false
// console.log(Boolean([0]))// true
// console.log(Boolean(-0))// false

// function soma(a,b){
//     return a + b
// }
// console.log(soma(1,2))


//PLAYING

// const player = "igor"
// const opponent = "mario"
// const game = "Amazing Fighter"

// let points = 0
// let hasWon = false

// //PLAYING THE GAME
// points += 100
// hasWon = true

// if(hasWon){
//     console.log(`${player} tem ${points} e ganhou o ${game} game!`)

// }else {
//     console.log(`O vencender é ${opponent}! ${player} perdeu o jogo`)
// }

// let myCourses = ["Aprenda animações CSS", "Fundamentos de Desings UI",
//  "Intro ao Clean Code"]

//  function logArray(array){
//     for(let i in array){
//         console.log(array[i])
//     }
//  }

//  logArray(myCourses)

let countries = ["China", "India", "USA"]

function generatingSetence(desc, array){
    let baseString = `The ${array.length} ${desc} are `
    
    for(let i = 0; i < array.length; i++){
        if( i === array.length - 1){
            baseString += array[i]
        }else{
            baseString += array[i] + ", "
        }
        
        
    }
    console.log(baseString)
}

generatingSetence('largest countries', countries)
generatingSetence("best fruits", ['bananas','maças'])