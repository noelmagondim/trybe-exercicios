//  Exercício 1: Escreva uma função que dado um valor numérico retorne se o valor é par.
/*
const isEven = (number) => number % 2 === 0;
console.log(isEven(2));
*/
//  A função acima diz apenas se é true ou false, vamos elaborar mais abaixo
/*
const isEven = (number) => number % 2 === 0 ? `O número ${number} é par` : `O número ${number} é ímpar`;
console.log(isEven(3));
*/

//  Exercício 2: Escreva uma função que recebe por parâmetro um array de números e retorna a soma dos números pares. Se nenhum número for par, ou o array for vazio a soma deve ser zero.
/*
const evenSum = (array) => {
  let sum = 0;
  for (let values of array) {
      if (isEven(values)) {
        sum += values;
      }
  }
  return sum;
}
console.log(evenSum([1,3]));
*/

//  Exercício 3: Escreva uma função que dado um parâmetro retorna se o tipo de dado é Number.

const isNumber = (parameter) => typeof parameter === 'number';
console.log(isNumber(123456));


//  Exercício 4: Escreva uma função que receba um nome de usuário e retorne a seguinte mensagem: "Boas vindas, USERNAME". Valide que o tipo de dado seja string e o texto tenha pelo menos 1 caracter.

const greetingMessage = (username) => {
  if (typeof username !== 'string') {
    return 'O nome de usuário deve ser uma string.'; 
    } else if (username.length < 1) {
      return 'O nome de usuário deve conter pelo menos 1 caractere';
    } else {
        return `Boas vindas, ${username}`;
    }
    
}
console.log(greetingMessage(''));


//  Exercício 5: Escreva uma função que calcule a velocidade final de um objeto em queda livre dado o tempo que levou para atingir o solo. A fórmula para o cálculo é velocidade = tempo * gravidade. Considere a gravidade constante de 9.8.

const gravity = 9.8;
const finalSpeed = (time) => `Velocidade final = ${time * gravity} m/s`;
console.log(finalSpeed(10));


//  Exercício 6: Utilizando operadores ternários e arrow functions reescreva a seguinte função:
/*
function isZero (number) {
    if (number === 0) {
        return "Zero";
    }
    return "Not zero";
 }
*/
const isZero = (number) => number === 0 ? 'Zero' : 'Not zero';
console.log(isZero(0));

/*
Exercício 7: Escreva uma função que, dado um array, verifique se todos os valores são iguais. Valide que o tipo de entrada seja array e que o tamanho seja maior que 1.
*/