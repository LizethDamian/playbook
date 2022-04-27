// Ejemplo 6: Getters para acceder a los atributos del objeto

class Registro_Flora {
    constructor(name, localizacion) {
        this.name = name
        this.localizacion = localizacion
        this.cod = 52130
        this.date = new Date()
    }


    get getcod() {
        return this.cod
    }
}

console.log("Ejemplo 6: Getters para acceder a los atributos del objeto")
const codigo_arbol = new Registro_Flora("Limon", "Mexico and Arabia")
console.log(codigo_arbol.cod)