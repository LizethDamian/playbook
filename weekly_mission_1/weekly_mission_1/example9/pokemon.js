//Primero creamos la clase Pokemon 
class Pokemon {
    //Dentro de ella colocamos el constructor name que va a instanciar al atributo del nombre
    //mencionado en main
    constructor(name) {
            this.name = name
        }
        //Despues se crea la funcion o el método say hello y say message 
        //Imprimimos lo que queremos refiriendonos a cada uno de los pokemones
        //mencionados en main 
    sayHello() {
        console.log(`Hola, mi pokemon ${this.name} te saluda!!!`)
    }
    sayMessage(message) {
        console.log(`Mi pokemon ${this.name} te dice: ${message}`)
    }
}
//Por ultimo exportamos en ese modulo 
module.exports = Pokemon