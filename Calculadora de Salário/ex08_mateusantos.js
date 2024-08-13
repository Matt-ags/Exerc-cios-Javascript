let horas = parsefloat(prompt("Qual o número de horas trabalhadas por semana?"))
let valor = parseFloat(prompt("Qual o valor de hora trabalhada?"))

let semanal = horas*valor

let mensal = semanal*4

document.write("Seu salário semanal é de " + semanal + " reais<br>")
document.write("O seu salário mensal, 4 semanas, é " + mensal + " reais")