function funcao(){
    function cres (pr1, pr2){
        return pr1 - pr2;
    } 
    var vetor = Array(
        (document.getElementById("num1").value),
        (document.getElementById("num2").value),
        (document.getElementById("num3").value));

    var vetCres = vetor;
    document.getElementById("resposta").innerHTML = "Ordem Crescente: " + vetCres.sort(cres)
}