function calcular() {

    var idade = document.getElementById("idade")
    var resposta = document.getElementById("resposta")
    idade = Number(idade.value)
    meses = idade / 12
    dias = meses * 30 

    resposta.textContent = `idade em anos ${idade} anos 
    meses ${meses}
    dias ${dias}`
      
    if (idade >= 18) {
        document.getElementById("maiormenor").innerHTML = "Maior de idade!"
    }
    else
        document.getElementById("maiormenor").innerHTML = "Menor de idade!"

}
var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calcular)