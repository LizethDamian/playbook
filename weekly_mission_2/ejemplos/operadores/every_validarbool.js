//Ejemplo 10: Uso de every nos ayuda a validar todos los elementos de una lista, si todos lo cumplen con la validacion 
//que indiques te regresa true, de lo contrario false

const nombres = ["Explorer 558", "Explorer 6485", "Explorer 485"]
const condicion = nombres.every((name) => typeof name === 'string')
console.log("Ejemplo 10: Son todos los nombres 'String': " + condicion)