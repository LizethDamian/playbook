//Ejemplo 4: Uso de map para recorrer los elementos de una lista
//y crear una nueva lista 

const numbers = [1, 3, 9, 8, 10, 12];

const num_cuadrado = numbers.map(function(num) { return num * num })
console.log("Ejemplo 4: imprimiendo la lista de elementos al cuadrado")
console.log(num_cuadrado)