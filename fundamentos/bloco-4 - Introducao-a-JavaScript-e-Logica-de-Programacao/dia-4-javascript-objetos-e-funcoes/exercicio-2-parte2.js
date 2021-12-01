function verificaMaiorValor(numeros){
    let maiorIndice = 0;
    for (let indice in numeros){
        if (numeros[maiorIndice] < numeros[indice]){
            maiorIndice = indice;
        }
    }
    return maiorIndice;
}
console.log(verificaMaiorValor([2, 3, 6, 7, 10, 1])); 


