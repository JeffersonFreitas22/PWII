//Puxar dados da tabela
let linhas = document.querySelectorAll("tbody tr");

linhas.forEach(linha => {

    let altura = parseFloat(linha.children[2].textContent);
    let peso = parseFloat(linha.children[3].textContent);

    let imc = calcularIMC(peso, altura);
    let classificacao = classificarIMC(imc);

    linha.children[4].textContent = imc;
    linha.children[5].textContent = classificacao;

});

//calcular o IMC e descrever
function calcularIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

function classificarIMC(imc) {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Peso normal";
    if (imc < 30) return "Sobrepeso";
    if (imc < 35) return "Obesidade grau 1";
    if (imc < 40) return "Obesidade grau 2";
    return "Obesidade grau 3";
}