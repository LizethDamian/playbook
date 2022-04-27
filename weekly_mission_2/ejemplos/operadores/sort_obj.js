//Ejemplo 16: Ordenando una lista de objetos 

const Asilo = [
    { name: 'Godin Araceli', age: 60 },
    { name: 'Gutierrez Gonzalo', age: 58 },
    { name: 'Alvarado Carlos', age: 32 },
]

Asilo.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
})

console.log("Ejemplo 16: Ordenando una lista de objetos por la edad")
console.log(Asilo)