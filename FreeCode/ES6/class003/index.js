// CLASSES
export class Animal{
    constructor(type, legs){
        this.type = type
        this.legs = legs
    }

    makeNoise(sound = 'Loud Noise'){
        console.log(sound)
    }

    get metaData(){
        return `Type: ${this.type}, Legs: ${this.legs}`
    }

    static return10(){
        return 10
    }

}

export class Cat extends Animal{
    // constructor(type, legs, tails){
    //     super(type, legs),
    //     tails = tails
    // }

    makeNoise(sound = "meow"){
        console.log(sound)
    }
}