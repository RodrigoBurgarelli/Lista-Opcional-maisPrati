const prompt = require('prompt-sync')();

let fumaAnos = parseInt(prompt('Você fuma a quantos anos? '));
let cigarrosDia = parseInt(prompt('Você fuma quantos cigarros por dia?'));

let totalCigarros = cigarrosDia*30*12*fumaAnos;

let dias = totalCigarros/144;

dias = dias.toFixed(0);

console.log(`Você perdeu ${dias} dias de vida por fumar cigarros.`);

