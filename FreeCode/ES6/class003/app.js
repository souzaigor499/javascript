//CLASSES
import { Animal, Cat } from "./index.js"

let cat = new Cat('Cat', 4)
let dog = new Animal('dog', 4)
console.log(dog.metaData)

// cat.legs = 3

// console.log(cat)
// console.log(cat.type)
// console.log(cat.legs)
// cat.makeNoise('meow')
// console.log(Animal.return10())
console.log(cat.metaData)

cat.makeNoise()