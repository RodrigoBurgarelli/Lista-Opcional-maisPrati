const prompt = require('prompt-sync')();

let distancia = parseInt(prompt('Qual distância você deseja percorrer? '));
let valor = 0

if (distancia>200){
    valor = distancia*0.45;
} else{
    valor = distancia*0.5;
}
console.log(`A passagem custará R$ ${valor}.`)