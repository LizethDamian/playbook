/*
 Contexto Global: variables disponibles en el script.
 Importante:
 - Declarar una función.
 - Ver cómo modificar variables globales (contexto global y local)
*/
let a = 'JavaScript'
let b = 10

// Esto es una función
function my_function_to_show_scopes() {
    console.log('Definido dentro de la funcion pero fuera del ciclo: ' + a, b) // a = "Javascript", b = 10
    if (true) {
        // Estás variables estarán disponibles en este bloque
        let a = 'Elixir' //Estas variables solo existen en el contexto de la funcion 
        let b = 999
        console.log('Definido en la funcion: ' + a, b) // Elixir, 999
    }
    console.log('Definido fuera del bloque de if: ' + a, b) //'JavaScript 10'
}

// Así ejecuto mi función
my_function_to_show_scopes() //Ejecutamos e imprimimos todo lo que esta en la funcion 

console.log('Definido fuera de la funcion: ' + a, b) //'JavaScript 10'


/*
Output:
JavaScript 10
Elixir 9999
JavaScript 10
JavaScript 10
*/