//Ejemplo 12: Uso de find en una lista de objetos

const puntaje = [
    { name: 'Damian', score: 95 },
    { name: 'Lopez', score: 99 },
    { name: 'Alvarado', score: 78 },
    { name: 'Adair', score: 88 },
    { name: 'Jocelyn', score: 100 },
]
const menor_80 = puntaje.find((user) => user.score < 80)
console.log("Ejemplo 12: nombre del puntaje encontrado: " + menor_80.name)