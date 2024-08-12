/*Exercício 6: Calculadora de Desconto
Solicite ao usuário o nome do produto, o preço original e a porcentagem de desconto. Calcule o valor do desconto e o preço final após o desconto. Use parseFloat() para converter o preço e a porcentagem em números decimais. Exiba o nome do produto, o preço original, o valor do desconto e o preço final.*/

prompt = require("prompt-sync")()

let N = prompt('Digite o nome do produto')
let V = parseFloat(prompt('Agora, digite o preço ORIGINAL de ' + N))
let P = parseFloat(prompt('Agora, digite a porcentagem, na forma decimal, da porcentagem do desconto'))

let D = V*P
let T = V-D

console.log(T)
