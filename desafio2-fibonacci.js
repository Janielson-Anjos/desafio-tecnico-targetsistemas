const readline = require('readline-sync');

let numero = parseInt(readline.question("Informe o número: "));

function fibonacci(n) {
    let a = 0;
    let b = 1;
    let fibSequencia = [a, b];

    while (b < n) {
        let proximo = a + b;
        a = b;
        b = proximo;
        fibSequencia.push(b);
    }

    return fibSequencia;
}

function pertenceFibo(num) {
    const sequence = fibonacci(num);
    return sequence.includes(num);
}

if (pertenceFibo(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}