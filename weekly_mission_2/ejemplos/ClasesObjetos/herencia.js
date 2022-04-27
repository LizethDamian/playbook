// Ejemplo  9: Herencia entre dos clases
class Pets {
    constructor(age, color) {
        this.name = "Asha"
        this.age = age
        this.color = color
    }

    get getName() {
        return this.name
    }
}

console.log("Ejemplo  9: Herencia entre dos clases")
const Asha = new Pets(5, "White")
console.log(Asha)

// Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
// Podemos definir una clase vacía y rehusar todos los componentes de la clase padre
class Pets_family extends Pets {}

const AshaFamily = new Pets_family(2, "Gray")
console.log(AshaFamily)
console.log(AshaFamily.getName) // getter de la clase padre rehusada en la clase hija