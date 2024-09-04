const fs = require('fs');

function analisarFaturamento() {
    
    const data = fs.readFileSync('dados.json');
    const faturamentoDiario = JSON.parse(data);

    if (faturamentoDiario.length === 0) {
        console.log("Não há dados de faturamento.");
        return;
    }

    let menorFaturamento = Infinity;
    let maiorFaturamento = -Infinity;
    let totalFaturamento = 0;
    let diasComFaturamento = 0;

    faturamentoDiario.forEach(dia => {
        if (dia.valor > 0) {
            if (dia.valor < menorFaturamento) menorFaturamento = dia.valor;
            if (dia.valor > maiorFaturamento) maiorFaturamento = dia.valor;
            totalFaturamento += dia.valor;
            diasComFaturamento++;
        }
    });

    const mediaFaturamento = totalFaturamento / diasComFaturamento;

    let diasAcimaDaMedia = 0;
    faturamentoDiario.forEach(dia => {
        if (dia.valor > mediaFaturamento) diasAcimaDaMedia++;
    });

    console.log(`Menor valor de faturamento: ${menorFaturamento}`);
    console.log(`Maior valor de faturamento: ${maiorFaturamento}`);
    console.log(`Número de dias com faturamento superior à média mensal: ${diasAcimaDaMedia}`);
}

analisarFaturamento();
