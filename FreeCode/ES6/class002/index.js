// FOR OF LOOP
let incomes = [1, 2, 3 ,4 , 5 ,6]
let newArray = []

for(const income of incomes){
    const array = new Map()
    array.set(income, income ** 2)
    newArray.push(array.get(income))
    
}
// console.log(newArray)

const arrei = incomes.map(function(item){
    return item ** 2
})
// console.log(arrei)

const names = ['igor', 'beto', 'leo', 'gui']

const uppercase = names.map(name => {
    return name[0].toUpperCase() + name.slice(1)
})
console.log(uppercase)

const names1 = ['igor', 'beto', 'leo', 'gui']

const element = names.map(names => '<p>' + names + '</p>'
)

console.log(element)

// console.log(total)

// let fullNmae = "igor souza"


// for(const char of fullNmae){
//     console.log(char)
// }
//SPREAD OPERATOR

// let example1 = {
//     name: 'igor'
// }

// let example2 = {
//     secondName:"souza",
//     ...example1
// }

// console.log(`${example2.name} ${example2.secondName}`)

// REST OPERATOR

// function add(...nums){

//     console.log(nums)
// }
// add(4, 5, 6, 2, 9)

//ARROW FUNCTIONS

// function add(...nums){
//     let total = nums.reduce((x,y) => {
//         return x + y
//     })
//     console.log(total)

//     let total1 = nums.reduce((x, y) => x + y)
//     console.log(total1)

// }
// add(4, 5, 6, 2, 9)

// DEFAULT PARAMS

// function add(numArray = [1, 2]){
//     let total = 0
//     numArray.forEach((element) => {
//         total += element
//     });
//     console.log(total)
// }

// add()

//INCLUDES()

// let numArray = [1,2,3,4,5]

// function contem(value){
//     console.log(numArray.includes(value))
// }
// contem(5)
// LET AND CONST

// if(false){
//     let example = 5 // let escopo de bloco 
// }

// console.log(example)

// const exemplo = {} // nao pode ter seu tipo de valor redefinido
// exemplo.nome = 'igor'

// console.log(exemplo)

// IMPORT AND EXPORT 

// import {data} from './example.js' // npm init -y {"type": "module"} Package.JSON

// let updateData = data
// console.log(updateData) 

// padStart() padEnd()

// let example = 'igor'

// console.log(example.padStart(5, 'a'))



