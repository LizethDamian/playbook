//Ejemplo 7: Uso de filter para filtrar una lista de elementos 

const alumnos = ["Amanda Rosalia", "Daniela Mendez", "Lizeth Damian", "Alonso Erik", "Josue Ortega"];
const filtro = alumnos.filter((alumnos) => alumnos.includes('Mendez'))

console.log("Ejemplo 7: Uso de filter para filtrar elementos de una lista")
console.log(filtro)
const termina_ia = alumnos.filter((almn) => almn.endsWith('ia'))
console.log(termina_ia)
const empieza_A = alumnos.filter((alum) => alum.startsWith('A'))
console.log(empieza_A)