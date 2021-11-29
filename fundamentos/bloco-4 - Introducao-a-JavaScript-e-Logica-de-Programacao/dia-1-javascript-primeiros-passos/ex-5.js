let ang1 = 30;
let ang2 = 90;
let ang3 = 60;
let soma = ang1 + ang2 + ang3;
let angPositivo = ang1 > 0 && ang2 > 0 && ang3 >0;

if(angPositivo){
    if(soma === 180){
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log("Erro: ângulo inválido");
}