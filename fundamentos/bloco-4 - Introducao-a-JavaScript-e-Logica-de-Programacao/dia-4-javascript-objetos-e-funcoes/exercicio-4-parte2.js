function verificaQuantCaracteres(caracteres){
    let maiorQuantidade = [0];
    for (let indice in caracteres){
        if (maiorQuantidade.length < caracteres[indice].length){
            maiorQuantidade = caracteres[indice];
        }
    }
    return maiorQuantidade;
}
console.log(verificaQuantCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); 