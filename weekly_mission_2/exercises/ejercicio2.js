const explorers = [{
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "js",
            "c#"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },



];

console.log("Nombres de los explorers con ForEach: ")
explorers.forEach(name => console.log(name.name))

console.log("Stack de cada explorer")
explorers.forEach(stackE => console.log(stackE.stack))

console.log("Crea una nueva lista con las listas de stacks de cada explorer, usando MAP")
const stack_lista = explorers.map(function(stack) { return stack.stack })
console.log(stack_lista)

console.log("Obtén la lista de explorers que tengan en su stack 'js', usa FILTER (para validar un elemento en un lista se usa el método includes)")
const stackjs = explorers.filter((stack) => stack.stack == "js")
console.log(stackjs)

console.log("Busca el primer explorer que sea de la CDMX, usa FIND")
const cdmx = explorers.find((city) => city.city == "CDMX")
console.log(cdmx)

console.log("Obtén la suma de todos los exercises_completed, usa REDUCE")
const todos_exercises = explorers.reduce(function(exercises_completed, sum) { return exercises_completed + sum })
console.log(todos_exercises)

console.log("Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME")
const true_finish = explorers.some((T) => T.exercisesFinished === true)
console.log(true_finish)

console.log("Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.")
const validar = explorers.every((isFinished) => isFinished === "isFinished")
console.log(validar)