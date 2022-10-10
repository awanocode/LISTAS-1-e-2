//true = 1
//false = 0
var com1 = Number(prompt(`Este computador 1 está ligado? (LIGADO/TRUE = 1 ou DESLIGADO/FALSE = 0)`))
var com2 = Number(prompt(`Este computador 2 está ligado? (LIGADO/TRUE = 1 ou DESLIGADO/FALSE = 0)`))
var com3 = Number(prompt(`Este computador 3 está ligado? (LIGADO/TRUE = 1 ou DESLIGADO/FALSE = 0)`))
var cont = 0

if (com1 == 1) {
    cont++
}
if (com2 == 1) {
    cont++
}
if (com3 == 1) {
    cont++
}

//realiza uma verificação sobre o valor, analisando a validade dele
if (com1 > 1 || com2 > 1 || com3 > 1) {
    console.log(`Digite um número válido ( 1 ou 0 )`)
}
else {
    console.log(`Computadores ligados: ${cont}`)
    console.log(`Computadores desligados: ${3 - cont}`)
}