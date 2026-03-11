//Apresenta a potencia de 2^5
let base = 2;
let expoente = 5;

let resultado = 1;
let i = 1;

while (i <= expoente) {
    resultado = resultado * base;
    i++;
}

console.log("Resultado: " + resultado);