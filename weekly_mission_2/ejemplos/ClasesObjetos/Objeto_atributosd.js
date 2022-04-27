//Ejemplo 3: instanciar un objeto con atributos 

class Registro_Flora {
    constructor(codigo, nombre, localizacion) {
        this.codigo = codigo
        this.nombre = nombre
        this.localizacion = localizacion
    }
}

const limon = new Registro_Flora(2513, "LIME", "ARABIA")
const Naranjo = new Registro_Flora(2560, "NARANJO", "MEXICO")
const Roble = new Registro_Flora(25460, "Quercus robur", "EUROPA Y ASIA")
console.log("Ejemplo 3: Instanciar un objeto con atributos")
console.log(limon)
console.log(Naranjo)
console.log(Roble)