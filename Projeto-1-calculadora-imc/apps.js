function pulaLinha (){
    document.write("<br><br>");
    
}
function mostre (frase){
    document.write("<h2>" + frase +"</h2>");
    pulaLinha();
}

function calcImc (altura, peso){
    var imc = peso/(altura * altura);
    return imc
}

var infoAltura =  prompt("informe a sua altura:");
var infoPeso = prompt("informe seu peso:");
var result = calcImc(infoAltura, infoPeso);

mostre("O seu imc é: "+ result);

if(result <= 18.5 || result>24.9){
mostre("De acordo com seu imc você está fora da faixa de peso para sua altura.");
} else{
mostre("de acordo com seu imc você está dentro da faixas de peso para sua altura.");
}
