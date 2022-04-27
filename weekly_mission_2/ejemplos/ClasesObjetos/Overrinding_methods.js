// Ejemplo 10: Overrinding methods

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

class Family extends Dogs {
    constructor(name, age, color, size, vaccines) {
        super(name, age, color, size) // SUPER nos ayudará a llamar el constructor padre
        this.vaccines = vaccines
    }

    getGeneralInfo() {
        let nameandage = this.getInfo() // llamamos el método de la clase padre
            // nameAndUsername  es una variable de esta función, no necesitas usar this para referenciarla.
        return `${nameandage}, vacuna ${this.vaccines}`
    }
}

const Pet1 = new Family("Asha", 5, "White", "Medium", "Rabia")
console.log("Ejemplo 10: Overrinding methods")
console.log(Pet1)
console.log(Pet1.getInfo()) // Método de la clase padre
console.log(Pet1.getGeneralInfo()) // Método de la clase hija