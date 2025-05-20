const prompt = require('prompt-sync')();

let reta1 = parseInt(prompt('Qual a medida da primeira reta?'));
let reta2 = parseInt(prompt('Qual a medida da segunda reta?'));
let reta3 = parseInt(prompt('Qual a medida da terceira reta?'));

if (reta1<reta2+reta3 && reta2<reta1+reta3 && reta3<reta1+reta2){
    console.log('É possível formar um triângulo.');
} else{
    console.log('Não é possível formar um triângulo.');
};