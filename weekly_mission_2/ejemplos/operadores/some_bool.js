//Ejemplo 14: Uso de some, este método validara todos los elementos de la lista, y si alguno 
//cumple con la validacion indicada, regresara un true, de lo contrario un false

const bools = [true, true, false, true]

const algunosfalse = bools.some((F) => F === false)
console.log("Ejemplo 14: Alguno de los elementos en el array es false: " + algunosfalse)