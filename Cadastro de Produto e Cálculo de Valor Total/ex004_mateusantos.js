prompt = require("prompt-sync")() // NECESSÁRIO PARA RODAR NODEJS
// a partir deste exercicio, comecei a usar somente o node
let P = prompt('Digite o nome do produto comprado: ')
let U = parseFloat(prompt('Agora, o preço em que você pagou: '))
let Q = parseFloat(prompt("Por fim, a quantidade comprada do produto: "))

let J = (Q*U)*0.18 // CALCULO PRO JUROS
let T = (Q*U) + J // CALCULO PRO TOTAL


console.log("O total é " + T + "; Seus juros foi de " + J + "; E comprou " + Q + " Unidades de " + P + " no valor de " + U + " REAIS.")