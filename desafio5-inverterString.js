const readline = require('readline-sync');

const entrada = readline.question('Digite a string que deseja inverter: ');

function inverterString(str) {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

const resultado = inverterString(entrada);

console.log('String invertida:', resultado);
