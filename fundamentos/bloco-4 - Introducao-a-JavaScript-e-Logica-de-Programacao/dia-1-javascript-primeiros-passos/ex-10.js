const custo = 1.59;
const valorDeVenda = 4;
const imposto = 20/100;
const custoTotal = (custo * imposto) + custo;
const lucro = valorDeVenda - custoTotal;
if (custo >= 0 && valorDeVenda >= 0) {
    console.log(lucro);
  } else {
    console.log("Error, os valores não podem ser negativos");
  };