// TEMPLATE STRINGS
// let word1 = 'igor'
// let word2 = 'souza'
// let num1 = 1
// let num2 = 3 

// const fullName = `${num1 + num2} 
// ${word2}`

// let example = `${word1}
// ${word2}
// `
// document.getElementById('example').innerText = example
// console.log(fullName)


// DESTRUCTURING OBJECTS

// const personalInformation = {
//     firstName: 'igor',
//     lastName: 'souza',
//     city: 'maua',
//     state: 'sp',
//     zipCode: '09321'
// }

// const {firstName: fn , lastName: ln} = personalInformation

// console.log(`${fn} ${ln}`)

// DESTRUCTURING ARRAYS

// let [firstName, lastName, middleName] = ['igor', 'souza', 'soares']
// lastName = 'santos'
// console.log(lastName)

//OBJECT LITERAL

// function adressMaker(city, state){
//     const newAdress = {newCity: city, newState: state}

//     console.log(newAdress)
// }

// function adressMaker1(city, state){
//     const newAdress = {city, state}

//     console.log(newAdress)
// }

// adressMaker('maua', 'sao paulo')
// adressMaker1('maua', 'sao paulo')

// OBJECT LITERAL (CHALLENGE)

function newAdressMaker(address){
    const {city, state} = address
    const newAdress = {
        city,
        state,
        country: 'Brazil'
    }

    console.log(`${newAdress.city}, ${newAdress.state}, ${newAdress.country}`)
}

newAdressMaker({city: 'Maua', state: 'Sao Paulo'})

function newAdressMaker1(address){
    
    const newAdress = {
        city: address.city,
        state: address.state,
        country: 'Brazil'
    }

    const {city, state, country} = newAdress

    console.log(`${city}, ${state}, ${country}`)
}

newAdressMaker1({city: 'Maua', state: 'Sao Paulo'})