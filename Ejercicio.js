// Escribe un programa que pida al usuario dos numeros y una operacion (suma, resta, multiplicacion o division). 
// Luego, realiza la operacion indicada y muestra el resultado en la consola // 
const prompt = require("prompt-sync")({ sigint: true })

let numero1 = parseFloat(prompt("Ingresa el primer numero: "));

let numero2 = parseFloat(prompt("Ingrese el segundo numero: "));

let operacion = prompt("Elija tipo de operacion: "); 

let resultado 

if (operacion == "suma") {
    resultado = numero1 + numero2 
}
else if (operacion == "resta") {
    resultado = numero1 - numero2
}
else if (operacion == "multiplicacion") {
    resultado = numero1 * numero2 
}
else if (operacion == "division") {
    resultado = numero1 / numero2
}

console.log(`El resultado es ${resultado}`); 
   