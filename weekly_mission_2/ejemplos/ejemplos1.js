// Ejemplo 1: crear un objeto vacio 

const ObjetoVa = {} // esto es un objeto vacio 
console.log("Ejemplo 1: creacion de objetos vacios: ")
console.log(ObjetoVa)

//Ejemplo 2: crear un objeto con propiedades

const casa = {
    ventanas: 3,
    color: "Azul",
    habitaciones: 2,
    baños: 2
}
console.log("Ejemplo 2: crear un objeto con propiedades: ")
console.log(casa)

//Ejemplo 3 crear un objeto con propiedades diferentes: 

const liz = {
    Name: "Lizeth Damian",
    Age: 19,
    Genero: "F",
    apodo: [
        "Liz",
        "Damian",
        "Abi"
    ],
    direccion: {
        calle: "Mimiahuapan",
        colonia: "Impulsora",
        numero: 93,
        estado: "Estado de Mexico",
        Municipio: "Nezahuacoyotl"
    }
}
console.log("Ejemplo 3: crear un objeto con diferentes propiedades: ")
console.log(liz)
console.log(liz.apodo)
console.log(liz["direccion"])

// Ejemplo 4: crear un objeto con métodos: 

const Explorer = {
    name: "Liz",
    age: 19,

    sayHello: function() {
        console.log("Hola explorers mi nombre es " + this.name)
    },
    sayage: function() {
        console.log("Y tengo " + this.age + " años")
    }
}
console.log("Ejemplo 4: Objetos con metodos (funciones): ")
Explorer.sayHello()
Explorer.sayage()

//Ejemplo 5: Objeto con metodo que recibe parametros

const LaunchX = {
    name: "Explorer 5521",
    Saludo: function(explorer) {
        console.log(this.name + " saluda a " + this.explorer)
    }
}
console.log("Ejemplo 5: objeto con método que recibe parámetros: ")
LaunchX.Saludo("Liz")