// Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

let indice = 13;
let soma = 0;
let K = 0;

while (K < indice) {
    K = K + 1;
    soma = soma + K;
    console.log(soma);
    
}

// resposta é 91