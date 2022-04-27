// Ejemplo 8: Métodos static nos ayudan a escribir métodos en una clase que podemos usar sin necesidad de instanciar algún objeto
class Animals {
    static getBestAnimal() {
        return ["Dogs", "Owls", "Fox", "Bat"]
    }
}

console.log("Ejemplo 8: Métodos static")
    // Puedo llamar el método static directamente con el nombre de la clase
console.log(Animals.getBestAnimal())