const prompt = require('prompt-sync')();

let pessoa1 = parseInt(prompt('O primeiro participante deve escolher entre: 0 - pedra, 1 - papel e 2 - tesoura: '));
let pessoa2 = parseInt(prompt('O segundo participante deve escolher entre: 0 - pedra, 1 - papel e 2 - tesoura: '));

if (
    (pessoa1 == 0 && pessoa2 == 2) ||
    (pessoa1 == 1 && pessoa2 == 0) ||
    (pessoa1 == 2 && pessoa2 == 1)
) {
    console.log('O primeiro jogador venceu.')
} else if (
    (pessoa1 == 2 && pessoa2 == 0) ||
    (pessoa1 == 0 && pessoa2 == 1) ||
    (pessoa1 == 1 && pessoa2 == 2)
) {
    console.log('O segundo jogador venceu.')
} else {
    console.log('Empate!!!')
};