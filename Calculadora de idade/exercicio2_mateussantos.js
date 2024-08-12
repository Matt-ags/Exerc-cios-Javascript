
var nascimento = parseInt(prompt('qual seu ano de nascimento?'))

let anoatual = new Date().getFullYear()

/*Utilize parseInt() para converter a entrada do usuário em um número inteiro. Para obter o ano atual, use new Date().getFullYear(). O new Date() cria um novo objeto de data e hora com a data e hora atuais, e getFullYear() extrai o ano da data atual.  */
let idade = anoatual - nascimento

document.write(idade) 