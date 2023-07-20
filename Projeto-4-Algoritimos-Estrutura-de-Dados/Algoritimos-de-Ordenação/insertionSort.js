const array = require("./array");


function InsertionSort(array){
    for(atual = 1; atual < array.length; atual++){
        let dadoAtual = array[atual];
        let dadoAnalisado = atual - 1;
        while(dadoAnalisado >= 0 && array[dadoAnalisado].saldo > dadoAtual.saldo ){
            array[dadoAnalisado + 1] = array[dadoAnalisado];
            dadoAnalisado--;
        }
        
        array[dadoAnalisado + 1] = dadoAtual;
    }

    
    return array
}


console.log(InsertionSort(array));