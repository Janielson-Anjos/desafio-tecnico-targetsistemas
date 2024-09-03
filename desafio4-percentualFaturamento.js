const fs = require('fs');


function calcularPercentuais() {
    const data = fs.readFileSync('faturamentoPorEstado.json');
    const faturamentoPorEstado = JSON.parse(data);

    const faturamentoEstado = faturamentoPorEstado.faturamento_estado;

    let totalFaturamento = 0;
    faturamentoEstado.forEach(estado => {
        totalFaturamento += estado.faturamento;
    });

    faturamentoEstado.forEach(estado => {
        const percentual = (estado.faturamento / totalFaturamento) * 100;
        console.log(`Percentual de representação de ${estado.estado}: ${percentual.toFixed(2)}%`);
    });
}

calcularPercentuais();
