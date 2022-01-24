// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sum = (...numbers) => numbers.reduce(((par1, par2) => par1 + par2), 0);

console.log(sum(1, 2, 3, 4));