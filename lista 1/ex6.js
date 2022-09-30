function calcular() {

    var celcius = document.getElementById("celcius")
    var fahrenheit = document.getElementById("fahrenheit")
    celcius = Number(celcius.value)
    fahrenheit = (celcius * 1.8 ) + 32

    resposta.textContent = `A temperatura em Fahrenheit é ${fahrenheit}`
      
    if (celcius >= 0) {
        document.getElementById("maiormenor").innerHTML = "Tá calor!"
    }
    else
        document.getElementById("maiormenor").innerHTML = "Tá frio!"

}
var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calcular)