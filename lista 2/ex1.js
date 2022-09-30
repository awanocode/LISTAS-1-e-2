function calcular(pc1y,pc1n,pc2y,pc2n,pc3y,pc3n) {

    var pc1y = document.getElementById("pc1y").value
    var pc1n = document.getElementById("pc1n").value
    var pc2y = document.getElementById("pc2y").value
    var pc2n = document.getElementById("pc2n").value
    var pc3y = document.getElementById("pc3y").value
    var pc3n = document.getElementById("pc3n").value
    pc1y , pc1n , pc2y , pc2n , pc3y , pc3n = Number
    var pcD = pc1n - pc2n - pc3n
    var pcL = pc1y + pc2y + pc3y 
    
    resposta = pcD - pcL
    var resposta = document.getElementById("resposta")
    document.getElementById("resposta").innerHTML = `Computadores ligados: ${pcL} e desligados ${pcD}`

}