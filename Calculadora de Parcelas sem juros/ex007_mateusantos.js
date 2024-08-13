let valort = parseFloat(prompt("Qual foi o valor total de sua compra?"))
let parcelas = parseInt(prompt("E em quantas parcelas você parcelou sua compra de " + valort + " reais?"))
let valorp = parseInt(valort/parcelas)

document.write("O valor total foi de: " + valort + " reais<br>")

document.write("Você parcelou em " + parcelas + " parcelas<br>")

document.write("E você pagou em cada parcela " + valorp + " reais")