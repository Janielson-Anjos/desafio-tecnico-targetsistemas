const fs = require('fs');

function analisarFaturamento() {
    
    const data = fs.readFileSync('faturamento.json');
    const faturamento = JSON.parse(data);

    const faturamentoDiario = faturamento.faturamento_diario;

    if (faturamentoDiario.length === 0) {
        console.log("Não há dados de faturamento.");
        return;
    }

    let menorFaturamento = Infinity;
    let maiorFaturamento = -Infinity;
    let totalFaturamento = 0;
    let diasComFaturamento = 0;

    faturamentoDiario.forEach(dia => {
        if (dia.faturamento > 0) {
            if (dia.faturamento < menorFaturamento) menorFaturamento = dia.faturamento;
            if (dia.faturamento > maiorFaturamento) maiorFaturamento = dia.faturamento;
            totalFaturamento += dia.faturamento;
            diasComFaturamento++;
        }
    });

    const mediaFaturamento = totalFaturamento / diasComFaturamento;

    let diasAcimaDaMedia = 0;
    faturamentoDiario.forEach(dia => {
        if (dia.faturamento > mediaFaturamento) diasAcimaDaMedia++;
    });

    console.log(`Menor valor de faturamento: ${menorFaturamento}`);
    console.log(`Maior valor de faturamento: ${maiorFaturamento}`);
    console.log(`Número de dias com faturamento superior à média mensal: ${diasAcimaDaMedia}`);
}

analisarFaturamento();
