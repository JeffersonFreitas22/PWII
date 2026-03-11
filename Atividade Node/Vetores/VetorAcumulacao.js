//Soma todos os números do vetor.

let lista = [10, 20, 30, 40];

let soma = lista.reduce((total, numero) => total + numero, 0);

console.log("Soma total:", soma);