
function sorteia(n){
    return    Math.round(Math.random() * n);
}

var x = document.getElementById("ent1");
var numeroPensado;
var tentativas = 1;
var chute =document.getElementById("ent2");
function verifica(){

   
    var input = +x.value;
    console.log(input)
    if(isNaN(input)){
        alert("POR FAVOR, DIGITE APENAS NUMEROS");  
      
}
else{



    document.getElementById("section1").style.display = "block";

    document.getElementById("erro1").style.display = "none";
    document.getElementById("fim").style.display = "none";
    document.getElementById("acerto").style.display = "none";

    numeroPensado = sorteia(input);
    

}



}


function part2(){

var entChute =parseInt(chute.value);

if(entChute>x.value){
    alert("DIGITE UM NUMERO DE ZERO A " + x.value)
}else{

    if(tentativas <= 3){

    if(isNaN(entChute)){
    alert("POR FAVOR, DIGITE APENAS NUMEROS")

}
else{

if(entChute == numeroPensado){
    document.getElementById("erro1").style.display = "none";
    document.getElementById("fim").style.display = "none";
    document.getElementById("acerto").style.display = "block";

} 
else  if(tentativas < 3){

       
     document.getElementById("erro1").style.display = "block"; 

}
else{
    document.getElementById("erro1").style.display = "none";
    document.getElementById("fim").style.display = "block";

}
}
        tentativas++;
        var numTentativa = tentativas;
        document.getElementById("tentativa").textContent = numTentativa;
}}}