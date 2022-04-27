// Ejemplo 3: forEach para imprimir los países en letras mayusculas

const paises = ["Islandia", "Mexico", "Canada", "Brasil", "India"];
console.log("Ejemplo 3: uso de forEach para imprimir en mayusculas: ")
paises.forEach(pais => console.log(pais.toUpperCase()))
console.log("Tambien se puede imprimir solo en minusculas: ")
paises.forEach(pais => console.log(pais.toLowerCase()))