import { escreverHelloWorld } from './Concatenação String/ConcatenacaoString1.js'
import { juntarNome } from './Concatenação String/ConcatenacaoString2.js'

import { declararLet } from './Declaração de Variaveis/DeclaracaoVariaveisLet.js'
import { declararVar } from './Declaração de Variaveis/DeclaracaoVariaveisVar.js'
import { declararConst } from './Declaração de Variaveis/DeclaraçaoVariaveisConst.js'

import { verificarNumero } from './Estrutura Condicional/IfComposto.js'
import { verificarAprovacao } from './Estrutura Condicional/IfSimples.js'
import { verificarParOuImpar } from './Estrutura Condicional/IfTradicional.js'
import { verificarDiaSemana } from './Estrutura Condicional/SwitchCase.js'
import { verificarResultado } from './Estrutura Condicional/Ternario.js'

import { mostrarPares } from './Laço de Repetição/DoWhile.js'
import { mostrarNumeros } from './Laço de Repetição/DoWhile2.js'
import { mostrarTabuada } from './Laço de Repetição/For.js'
import { mostrarNumerosVetor } from './Laço de Repetição/ForEach.js'
import { mostrarDobro } from './Laço de Repetição/Map.js'
import { mostrarHelloWorld } from './Laço de Repetição/While.js'
import { mostrarTabuada1 } from './Laço de Repetição/While2.js'

import { somar, subtrair, multiplicar, dividir, potencia, raizQuadrada, restoDivisao } from './Operadores Aritméticos/operadoresAritmeticos.js'

import { verificarE } from './Operadores Lógicos/OpLogicoE.js'
import { verificarNao } from './Operadores Lógicos/OpLogicoNot.js'
import { verificarOu } from './Operadores Lógicos/OpLogicoOu.js'

import { diferente } from './OperadoresRelacionais/OpRelacionaisDiferente.js'
import { igual } from './OperadoresRelacionais/OpRelacionaisIgual.js'
import { maior } from './OperadoresRelacionais/OpRelacionaisMaior.js'
import { maiorOuIgual } from './OperadoresRelacionais/OpRelacionaisMaiorIgual.js'
import { menor } from './OperadoresRelacionais/OpRelacionaisMenor.js'
import { menorOuIgual } from './OperadoresRelacionais/OpRelacionaisMenorIgual.js'

import { acumulacao } from './Vetores/VetorAcumulacao.js'
import { adicionarElemento } from './Vetores/VetorAdicao.js'
import { buscarElemento } from './Vetores/VetorBusca.js'
import { removerElemento } from './Vetores/VetorRemocao.js'

console.log('----------------')
console.log('Concatenacao de string')
console.log('----------------')
console.log(escreverHelloWorld())
console.log(juntarNome())

console.log('----------------')
console.log('Declaracao de variaveis')
console.log('----------------')
console.log(declararLet())
console.log(declararVar())
console.log(declararConst())

console.log('----------------')
console.log('Estrutura Condicional')
console.log('----------------')
console.log(verificarNumero(10))
console.log(verificarAprovacao(2))
console.log(verificarParOuImpar(5))
console.log(verificarDiaSemana(1))
console.log(verificarResultado(1))

console.log('----------------')
console.log('Laço de Repetição')
console.log('----------------')
console.log(mostrarPares())
console.log(mostrarNumeros())
console.log(mostrarTabuada(10))
console.log(mostrarTabuada(10))
console.log(mostrarNumerosVetor())
console.log(mostrarDobro())
console.log(mostrarHelloWorld())
console.log(mostrarTabuada1())

console.log('----------------')
console.log('Operadores Aritméticos')
console.log('----------------')
console.log(somar(5, 3))
console.log(subtrair(10, 4))
console.log(multiplicar(2, 6))
console.log(dividir(12, 3))
console.log(potencia(2, 3))
console.log(raizQuadrada(16))
console.log(restoDivisao(10, 3))

console.log('----------------')
console.log('Operadores Logicos')
console.log('----------------')
console.log(verificarE(true, false))
console.log(verificarOu(true, false))
console.log(verificarNao(true))

console.log('----------------')
console.log('Operadores Relacionais')
console.log('----------------')
console.log(diferente(5,3))
console.log(igual(4,4))
console.log(maior(10,5))
console.log(maiorOuIgual(5,5))
console.log(menorOuIgual(3,8))
console.log(menor(2,9))


console.log('----------------')
console.log('Vetores')
console.log('----------------')
console.log(acumulacao())
console.log(adicionarElemento())
console.log(buscarElemento())
console.log(removerElemento())


