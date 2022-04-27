// Ejemplo 5: Atributos con valores por default
class Registro_Flora {
    constructor(name, localizacion) {
        this.name = name
        this.localizacion = localizacion
        this.cod = 52130
        this.date = new Date()
    }
    getInfo() {
        return `This tree name: ${this.name}, it is in ${this.localizacion} has the code: ${this.cod}, and we submit to the system in ${this.date}`
    }
}

console.log("Ejemplo 5: Atributos con valores por default")
const limon = new Registro_Flora("Limon", "Mexico and Arabia")
console.log(limon.getInfo())