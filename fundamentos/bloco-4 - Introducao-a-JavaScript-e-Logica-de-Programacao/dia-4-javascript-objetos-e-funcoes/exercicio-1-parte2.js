function verificaPalindromo(word){
    for (let index in word){
        if (word[index] != word[(word.length - 1) - index]){
            return false;
        }else{
            return true;
        }
    }
}
console.log(verificaPalindromo('arara'));
console.log(verificaPalindromo('desenvolvimento'));