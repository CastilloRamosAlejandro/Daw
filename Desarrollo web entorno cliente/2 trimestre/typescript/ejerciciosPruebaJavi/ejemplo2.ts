import * as readlineSync from 'readline-sync';

let nombreUsuario: string = readlineSync.question("Por favor, introduce tu nombre:");

console.log("Hola, " + nombreUsuario + "!");