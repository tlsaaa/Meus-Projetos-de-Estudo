const array = require("./array");

function quickSort(array, compare = comparePadrao){
    return quick(array, 0, array.length - 1, compare);
};


function quick (array, esq, dir, compare){
    let index;
    if(array.length > 1){
        index = partition(array, esq,dir, compare);
        if(esq < index - 1){
            quick(array, esq, index - 1, compare);
        }
        if (index < dir){
            quick(array, index, dir, compare);
        }
    }
    return array;
}

function partition (array, esq, dir, compare){
    const pivo = array[Math.floor((esq + dir)/2)];
    let i = esq;
    let j = dir;
    
    while(i<=j){
        while(compare(array[i].saldo, pivo.saldo) === compare.LESS_THAN){
            i++;
        }
        while(compare(array[j].saldo, pivo.saldo) === compare.BIGGER_THAN){
            j--;
        }
        if(i<=j){
            swap(array, i, j);
            i++;
            j--;
        }
    }
    return i;
}


console.log(quickSort(array))