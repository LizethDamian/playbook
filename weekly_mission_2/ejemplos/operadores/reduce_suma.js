//Ejemplo 9: Uso del reduce

const numeros = [1, 3, 2, 8, 90];

const red = numeros.reduce((sum, element) => sum + element, 0)
console.log("Ejempo 9: Uso de reduce para calcular la suma de los elementos de una lista")
console.log("Lista original " + numeros)
console.log(red)