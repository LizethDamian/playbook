//Ejemplo 8: Filtrar una lista por condicional 

const puntaje = [
    { name: 'Damian', score: 95 },
    { name: 'Lopez', score: 99 },
    { name: 'Alvarado', score: 78 },
    { name: 'Adair', score: 88 },
    { name: 'Jocelyn', score: 100 },
]

const Score_Mochenta = puntaje.filter((score) => score.score > 80)
console.log("Ejemplo 8: Filtrando elementos por score")
console.log(Score_Mochenta)