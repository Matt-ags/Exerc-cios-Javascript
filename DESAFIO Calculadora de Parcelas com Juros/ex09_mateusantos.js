
let total = parseFloat(prompt("Digite o valor total da compra:"));
let parcelas = parseInt(prompt("Digite o número de parcelas:"));
let juros = parseFloat(prompt("Digite a taxa de juros mensal (%):")) / 100;

let parcela = (total * Math.pow(1 + juros, parcelas)) / parcelas;

let totaljuros = parcela*parcelas

//O "Math.pow()" é calcula a potência de um número. Antes da virgula é a base, depois é o expoente
//Parseint pega só o valor inteiro, o float pega até o depois da vírgula

document.write("Valor Total: " + total.toFixed(2) + " reais<br>");
document.write("Número de Parcelas: " + parcelas + "<br>");
document.write("Taxa de Juros: " + (juros * 100).toFixed(2) + "%<br>");
document.write("Valor de Cada Parcela: " + parcela.toFixed(2) + " reais<br>");
document.write("Valor Total com Juros: " + totaljuros.toFixed(2) + " reais");

//esse ".tofixed(2)" é daora, o numero nele, fala quantas quasas decimais devem aparecer no numero antes dele, tipo, se eu colocar 5,123.tofixed(2), vai mostrar 5,12

