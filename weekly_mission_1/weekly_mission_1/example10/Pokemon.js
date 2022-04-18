export default class MyPokemon {
    constructor(name) {
        this.name = name
    }
    sayHello(message) {
        console.log(`My pokemon ${this.name} says ${message}`)
    }
}