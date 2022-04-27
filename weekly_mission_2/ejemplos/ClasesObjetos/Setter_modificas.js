// Ejemplo 7: Setters para modificar los atributos del objeto
class Dogs {
    constructor(name, color) {
        this.name = name
        this.age = 5
        this.color = color
        this.size = "Medium"

    }
    get getsize() {
        return this.size
    }

    get getage() {
        return this.age
    }

    set setsize(size) {
        this.size = size
    }

    set setage(age) {
        this.age = age
    }
}

console.log("Ejemplo 7: Setters para modificar los atributos del objeto")
const Asha = new Dogs(5, "White")

console.log(Dogs.getage)
console.log(Dogs.getsize)


Dogs.setage = 2
Dogs.setsize = "Large"

console.log(Dogs.setage)
console.log(Dogs.setsize)