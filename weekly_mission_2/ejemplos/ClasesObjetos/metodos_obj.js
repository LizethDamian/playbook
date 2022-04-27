//Ejemplo 4: Metodos en los objetos 

class Dogs {
    constructor(name, age, color, size) {
        this.name = name
        this.age = age
        this.color = color
        this.size = size

    }
    getInfo() {
        return `The dog ${this.name} has ${this.age} years old, it's color: ${this.color} and its size: ${this.size}`

    }
}

console.log("Ejemplo 4: Métodos en los objetos")
const Asha = new Dogs("Asha", 5, "White", "Medium")
console.log(Asha.getInfo())

const Peque = new Dogs("Peque", 3, "Gray", "Medium")
console.log(Peque.getInfo())