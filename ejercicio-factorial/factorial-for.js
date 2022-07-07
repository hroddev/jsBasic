/* Crea los siguientes archivos JS:

- factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for */

let factorial = 10;
let total = 1;

for (i = 1; i <= factorial; i++) {
    total *= i;
}
 
console.log(total);