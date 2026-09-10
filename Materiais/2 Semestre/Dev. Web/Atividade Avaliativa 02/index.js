const express = require('express');

const app = express();

app.set('json spaces', 2);

app.use(express.json());

let ordens = [];

// Rota inicial
app.get('/', (req, res) => {
    res.json({
        mensagem: "API de Controle de Produção funcionando!"
    });
});

// Valida o tipo do produto
function validarTipoProduto(tipoProduto) {
    let tiposValidos = [1, 2, 3];

    for (let i = 0; i < tiposValidos.length; i++) {
        if (tipoProduto === tiposValidos[i]) {
            return true;
        }
    }

    return false;
}

// Calcula o custo unitário ajustado
function calcularCustoAjustado(tipoProduto, custoUnitarioBase) {
    switch (tipoProduto) {
        case 1:
            return custoUnitarioBase;

        case 2:
            return custoUnitarioBase * 1.10;

        case 3:
            return custoUnitarioBase * 1.20;
    }
}

// Calcula o alerta de estoque
function calcularAlerta(estoqueFinal) {
    if (estoqueFinal > 5000) {
        return "ALTO";
    } else if (estoqueFinal < 500) {
        return "CRITICO";
    } else {
        return "NORMAL";
    }
}

// POST /ordens
app.post('/ordens', (req, res) => {
    let {
        codigoOrdem,
        codigoProduto,
        tipoProduto,
        quantidadeProduzida,
        custoUnitarioBase,
        estoqueInicial
    } = req.body;

    let ordemExiste = ordens.some(
        ordem => ordem.codigoOrdem === codigoOrdem
    );

    if (ordemExiste) {
        return res.status(400).json({
            mensagem: "codigoOrdem já existe."
        });
    }

    if (!validarTipoProduto(tipoProduto)) {
        return res.status(400).json({
            mensagem: "tipoProduto deve ser 1, 2 ou 3."
        });
    }

    let estoqueFinal = estoqueInicial + quantidadeProduzida;

    let custoUnitarioAjustado =
        calcularCustoAjustado(tipoProduto, custoUnitarioBase);

    let custoTotal =
        quantidadeProduzida * custoUnitarioAjustado;

    let alertaEstoque =
        calcularAlerta(estoqueFinal);

    let ordem = {
        codigoOrdem,
        codigoProduto,
        tipoProduto,
        quantidadeProduzida,
        custoUnitarioBase,
        estoqueInicial,
        custoUnitarioAjustado,
        estoqueFinal,
        custoTotal,
        alertaEstoque
    };

    ordens.push(ordem);

    res.status(201).json(ordem);
});

// GET /ordens
app.get('/ordens', (req, res) => {
    let resultado = ordens;

    if (req.query.tipo) {
        resultado = resultado.filter(
            ordem => ordem.tipoProduto == req.query.tipo
        );
    }

    if (req.query.alerta) {
        resultado = resultado.filter(
            ordem => ordem.alertaEstoque === req.query.alerta
        );
    }

    res.json(resultado);
});

// GET /ordens/:codigoOrdem
app.get('/ordens/:codigoOrdem', (req, res) => {
    let ordem = ordens.find(
        ordem => ordem.codigoOrdem === req.params.codigoOrdem
    );

    if (!ordem) {
        return res.status(404).json({
            mensagem: "Ordem não encontrada."
        });
    }

    res.json(ordem);
});

// PUT /ordens/:codigoOrdem
app.put('/ordens/:codigoOrdem', (req, res) => {
    let ordem = ordens.find(
        ordem => ordem.codigoOrdem === req.params.codigoOrdem
    );

    if (!ordem) {
        return res.status(404).json({
            mensagem: "Ordem não encontrada."
        });
    }

    let {
        codigoProduto,
        tipoProduto,
        quantidadeProduzida,
        custoUnitarioBase,
        estoqueInicial
    } = req.body;

    if (tipoProduto !== undefined && !validarTipoProduto(tipoProduto)) {
        return res.status(400).json({
            mensagem: "tipoProduto deve ser 1, 2 ou 3."
        });
    }

    if (codigoProduto !== undefined) {
        ordem.codigoProduto = codigoProduto;
    }

    if (tipoProduto !== undefined) {
        ordem.tipoProduto = tipoProduto;
    }

    if (quantidadeProduzida !== undefined) {
        ordem.quantidadeProduzida = quantidadeProduzida;
    }

    if (custoUnitarioBase !== undefined) {
        ordem.custoUnitarioBase = custoUnitarioBase;
    }

    if (estoqueInicial !== undefined) {
        ordem.estoqueInicial = estoqueInicial;
    }

    ordem.estoqueFinal =
        ordem.estoqueInicial + ordem.quantidadeProduzida;

    ordem.custoUnitarioAjustado =
        calcularCustoAjustado(
            ordem.tipoProduto,
            ordem.custoUnitarioBase
        );

    ordem.custoTotal =
        ordem.quantidadeProduzida *
        ordem.custoUnitarioAjustado;

    ordem.alertaEstoque =
        calcularAlerta(ordem.estoqueFinal);

    res.json(ordem);
});

// DELETE /ordens/:codigoOrdem
app.delete('/ordens/:codigoOrdem', (req, res) => {
    let indice = ordens.findIndex(
        ordem => ordem.codigoOrdem === req.params.codigoOrdem
    );

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Ordem não encontrada."
        });
    }

    ordens.splice(indice, 1);

    res.json({
        mensagem: "Ordem removida com sucesso."
    });
});

// GET /relatorios/ordens
app.get('/relatorios/ordens', (req, res) => {
    let estoquePorTipo = {
        padrao: 0,
        premium: 0,
        sobEncomenda: 0
    };

    let quantidadeAlertas = {
        alto: 0,
        critico: 0,
        normal: 0
    };

    let porProduto = {};

    let custoTotalGeral = 0;

    let ordemMaisCara = null;
    let ordemMaisBarata = null;

    ordens.forEach(ordem => {

        if (ordem.tipoProduto === 1) {
            estoquePorTipo.padrao += ordem.estoqueFinal;
        } else if (ordem.tipoProduto === 2) {
            estoquePorTipo.premium += ordem.estoqueFinal;
        } else if (ordem.tipoProduto === 3) {
            estoquePorTipo.sobEncomenda += ordem.estoqueFinal;
        }

        if (ordem.alertaEstoque === "ALTO") {
            quantidadeAlertas.alto++;
        } else if (ordem.alertaEstoque === "CRITICO") {
            quantidadeAlertas.critico++;
        } else {
            quantidadeAlertas.normal++;
        }

        custoTotalGeral += ordem.custoTotal;

        if (
            ordemMaisCara === null ||
            ordem.custoTotal > ordemMaisCara.custoTotal
        ) {
            ordemMaisCara = {
                codigoOrdem: ordem.codigoOrdem,
                custoTotal: ordem.custoTotal
            };
        }

        if (
            ordemMaisBarata === null ||
            ordem.custoTotal < ordemMaisBarata.custoTotal
        ) {
            ordemMaisBarata = {
                codigoOrdem: ordem.codigoOrdem,
                custoTotal: ordem.custoTotal
            };
        }

        if (!porProduto[ordem.codigoProduto]) {
            porProduto[ordem.codigoProduto] = {
                estoqueFinalConsolidado: 0,
                valorTotalInvestido: 0
            };
        }

        porProduto[ordem.codigoProduto].estoqueFinalConsolidado +=
            ordem.estoqueFinal;

        porProduto[ordem.codigoProduto].valorTotalInvestido +=
            ordem.custoTotal;
    });

    let mediaCustoTotalPorOrdem = ordens.length > 0
        ? custoTotalGeral / ordens.length
        : 0;

    res.json({
        totalOrdens: ordens.length,
        estoquePorTipo,
        mediaCustoTotalPorOrdem,
        ordemMaisCara,
        ordemMaisBarata,
        quantidadeAlertas,
        porProduto
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});