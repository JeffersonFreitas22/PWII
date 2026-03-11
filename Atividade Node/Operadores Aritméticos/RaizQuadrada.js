//procura a raiz de um numero fazendo varios testes

let numero = 9;
let raiz = 0;

for (let i = 1; i <= numero; i++) {
    if (i * i === numero) {
        raiz = i;
    }
}

console.log("Raiz quadrada:", raiz);