function calcular() {
    //entradas
    var inBase = document.getElementById("inBase")
    var inAltura = document.getElementById("inAltura")
    var outArea = document.getElementById("outArea")
    //calculo
    inBase = Number(inBase.value)
    inAltura = Number(inAltura.value)
    inArea = (inBase * inAltura) / 2
    
    hipotenusa = Math.sqrt(Math.pow(inBase, 2) + Math.pow(inAltura, 2))

    outArea.textContent = "A área deste objeto é de "+ inArea + "cm² e sua hipotenusa é " + hipotenusa.toFixed(2) + " ou " + hipotenusa
}

var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calcular)