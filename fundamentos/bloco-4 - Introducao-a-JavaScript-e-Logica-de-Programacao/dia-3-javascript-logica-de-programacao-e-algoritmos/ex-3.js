let n = 5;
let simbolo = '*';
let linha = '';
let coluna = n;

for (let linhaIndex = 0; linhaIndex < n; linhaIndex += 1){
    for (let colunaIndex = 0; colunaIndex <= n; colunaIndex += 1){
        if (colunaIndex < coluna){
            linha = linha + ' ';
        }else{
            linha = linha + simbolo;
        }
    }
    console.log(linha);
    linha = '';
    coluna -= 1;
}