const array = require("./array");


function InsertionSort(array){
    let numdexdoWhile = 0;
    for(atual = 1; atual < array.length; atual++){
        let dadoAtual = array[atual];
        let dadoAnalisado = atual - 1;
        while(dadoAnalisado >= 0 && array[dadoAnalisado].saldo > dadoAtual.saldo ){
            array[dadoAnalisado + 1] = array[dadoAnalisado];
            dadoAnalisado--;
            numdexdoWhile++;
            //esse console.log mostra quantas vezes o while está sendo executado no pior dos casos
            //a complexidade de tempo do insertionSort no seu pior caso é O(n^2).
            console.log (numdexdoWhile++)
        }
        
        array[dadoAnalisado + 1] = dadoAtual;
    }

    
    return array
}


console.log(InsertionSort(array));