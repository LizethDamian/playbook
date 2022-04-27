//Ejemplo 11: Uso de find para encontrar el primer elemento de una lista que cumpla con lo que indiques

const edades = ["19", "22", "25", "35", "45"]
const edad = edades.find((edad) => edad < 30)
console.log("Ejemplo 11: Primera edad menos a 30 es: " + edad)