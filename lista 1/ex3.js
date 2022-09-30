function calcular() {
    //entradas
    var inRaio = document.getElementById("inRaio")
    var resposta = document.getElementById("resposta")

    //calculo
    inRaio = Number(inRaio.value)
    pi = 3.14
    perimetro = (inRaio * pi) * 2
    outArea = inRaio * 2


    resposta.textContent = "A área deste círculo é de " + outArea + "cm² e seu perimetro é " + perimetro.toFixed(2)
    if (outArea > 2){
        document.getElementById("maior").innerHTML = "Área maior que 2!"
        }
        else
        {
        document.getElementById("maior").innerHTML = "Área menor que 2!"}
}
var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calcular)