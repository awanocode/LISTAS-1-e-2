function calcular() {
//entradas
    var inBase = document.getElementById("inBase")
    var inAltura = document.getElementById("inAltura")
    var outArea = document.getElementById("outArea")
//calculo
    inBase = Number(inBase.value)
    inAltura = Number(inAltura.value)
    
    inArea = (inBase * inAltura)
    outArea.textContent = `A área deste objeto é de ${inArea}cm²`
    
    if (inBase == inAltura){
        document.getElementById("forma").innerHTML = "É um Quadrado!"
        }
        else
        {
        document.getElementById("forma").innerHTML = "É um Retângulo!"}
}

var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calcular)