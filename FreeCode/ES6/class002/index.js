//FOR OF LOOP
// let incomes = [5000, 6000, 7000]
// let total = 0

// for(const income of incomes){
//     console.log(income)
//     total += income
// }

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

function add(...nums){
    let total = nums.reduce((x,y) => {
        return x + y
    })
    console.log(total)

    let total1 = nums.reduce((x, y) => x + y)
    console.log(total1)

}
add(4, 5, 6, 2, 9)

