//true = 1
//false = 0
var com1 = Number(prompt(`Este computador 1 da sala A está ligado? (LIGADO/TRUE = 1 ou DESLIGADO/FALSE = 0)`))
var com2 = Number(prompt(`Este computador 2 da sala A está ligado? (LIGADO/TRUE = 1 ou DESLIGADO/FALSE = 0)`))
var com3 = Number(prompt(`Este computador da sala B está ligado? (LIGADO/TRUE = 1 ou DESLIGADO/FALSE = 0)`))
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

//teste para valor incorreto
if (com1 > 1 || com2 > 1 || com3 > 1) {
  console.log(`Digite um número válido ( 1 ou 0 )`)
}

//saida
if (com1 == 1 || com2 == 1) {
  console.log(`Sala A tem algum computador ligado`)
}

if (com3 == 1) {
  console.log(`Sala A tem algum computador ligado`)
}
