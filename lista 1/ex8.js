function calcular() {

    var nota1 = document.getElementById("nota1")
    var nota2 = document.getElementById("nota2")
    var nota3 = document.getElementById("nota3")
    var media = document.getElementById("celcius")
    nota1 = Number(nota1.value)
    nota2 = Number(nota2.value)
    nota3 = Number(nota3.value)
    media = (nota1 + nota2 + nota3) / 2

    resposta.textContent = `Sua nota final é de: ${media.toFixed(2)}`
      
    if (media >= 7) {
        document.getElementById("maiormenor").innerHTML = "CONGRATULATIONS!!"
    }
    else
        document.getElementById("maiormenor").innerHTML = "YOU LOSE!"

}
var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calcular)