const park = Number(prompt(`Digite o andar em que o elevador está parado: -1 Subsolo, 0 Terreo, 1 Primeio andar`))//Parado
const subS = Number(prompt(`Digite "1" para chamada do elevador no SS ou 0 para continuar`))
const tUp = Number(prompt(`Digite "1" para chamada do elevador no T para subir ou 0 para continuar`))
const tDw = Number(prompt(`Digite "1" para chamada do elevador no T para descer ou 0 para continuar`))
const lv1 = Number(prompt(`Digite "1" para chamada do elevador no 1º andar ou 0 para continuar`))

const andarT = tDw + tUp //define o valor do terreo

//verificação 

if (park > 1 || park < -1) {
    console.log(`Andar inexistente`)
}
else {
    if (park != -1 && subS == 1) {
        console.log(`Descendo para SS: true`)
    }
    if (park != 0 && tDw == 1 && park == 1) {
        console.log(`Descendo para terreo: true`)
    }
    if (park != 0 && tUp == 1 && park == -1) {
        console.log(`Subindo para o terreo: true`)
    }
    if (park != 1 && lv1 == 1) {
        console.log(`Subindo para o 1°: true`)
    }
}
