//Ejemplo 13: Uso de findIndex, este método regresa la posicion del primer elemento que cumpla con la validacion que indiques
const nombre = ["Liz", "Nena", "Xochitl"]
const resultado = nombre.findIndex((name) => name.length > 6)
console.log("Ejemplo 13: Primero elemento cuya palabra sea mayor a 6 esta en la posicion: " + resultado)