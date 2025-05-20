const prompt = require('prompt-sync')();

let velocidade = parseInt(prompt('Qual a velocidade do carro? '));

if (velocidade >80){
    let multa = (velocidade-80) * 5;
    console.log(`O veículo está acima da velocidade permitida e será multado em R$${multa},00 `)
}else {
    console.log('O veículo está dentro da velocidade permitida e não receberá multa.')
};

