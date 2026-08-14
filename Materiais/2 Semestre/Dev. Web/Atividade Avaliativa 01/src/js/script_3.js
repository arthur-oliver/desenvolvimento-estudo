function controleProducao(){
    var ordens = [];
    var codigosOrdens = [];
    var continuar = 1;

    var totalEstoquePadrao = 0;
    var totalEstoquePremium = 0;
    var totalEstoqueEncomenda = 0;

    var quantidadeAlto = 0;
    var quantidadeCritico = 0;

    var totalCusto = 0;

    var maiorCusto = 0;
    var codigoMaior = "";

    var menorCusto = 0;
    var codigoMenor = "";

    while (continuar == 1) {

        // Código da ordem
        var codigoOrdem = Number(prompt("Digite o código da ordem:"));

        var codigoRepetido = false;

        for (var i = 0; i < codigosOrdens.length; i++) {
            if (codigoOrdem == codigosOrdens[i]) {
                codigoRepetido = true;
            }
        }

        while (codigoRepetido == true || isNaN(codigoOrdem) || codigoOrdem <= 0) {

            if (codigoRepetido == true) {
                alert("Código já cadastrado!");
            } else {
                alert("Digite um código válido!");
            }

            codigoOrdem = Number(prompt("Digite o código da ordem:"));

            codigoRepetido = false;

            for (var i = 0; i < codigosOrdens.length; i++) {
                if (codigoOrdem == codigosOrdens[i]) {
                    codigoRepetido = true;
                }
            }
        }

        codigosOrdens.push(codigoOrdem);

        // Código do produto
        var codigoProduto = Number(prompt("Digite o código do produto:"));

        while (isNaN(codigoProduto) || codigoProduto <= 0) {
            alert("Código do produto inválido!");
            codigoProduto = Number(prompt("Digite o código do produto:"));
        }

        // Tipo do produto
        var tipo = Number(prompt(
            "Digite o tipo do produto:\n" +
            "1 - Padrão\n" +
            "2 - Premium\n" +
            "3 - Sob encomenda"
        ));

        while (tipo < 1 || tipo > 3 || isNaN(tipo)) {

            alert("Tipo inválido!");

            tipo = Number(prompt(
                "Digite o tipo do produto:\n" +
                "1 - Padrão\n" +
                "2 - Premium\n" +
                "3 - Sob encomenda"
            ));
        }

        // Quantidade produzida
        var quantidade = Number(prompt("Digite a quantidade produzida:"));

        while (isNaN(quantidade) || quantidade <= 0) {
            alert("Quantidade inválida!");
            quantidade = Number(prompt("Digite a quantidade produzida:"));
        }

        // Custo unitário
        var custoBase = Number(prompt("Digite o custo unitário de produção:"));

        while (isNaN(custoBase) || custoBase <= 0) {
            alert("Custo inválido!");
            custoBase = Number(prompt("Digite o custo unitário de produção:"));
        }

        // Estoque inicial
        var estoqueInicial = Number(prompt("Digite o estoque inicial do produto:"));

        while (isNaN(estoqueInicial) || estoqueInicial < 0) {
            alert("Estoque inválido!");
            estoqueInicial = Number(prompt("Digite o estoque inicial do produto:"));
        }

        // Ajuste do custo
        var custoAjustado = custoBase;

        switch (tipo) {
            case 1:
                custoAjustado = custoBase;
                break;

            case 2:
                custoAjustado = custoBase * 1.10;
                break;

            case 3:
                custoAjustado = custoBase * 1.20;
                break;
        }

        // Estoque final
        var estoqueFinal = estoqueInicial + quantidade;

        // Custo total
        var custoTotal = quantidade * custoAjustado;

        // Alertas
        var alerta = "";

        if (estoqueFinal > 5000) {
            alerta = "Estoque alto";
            quantidadeAlto++;
        }

        if (estoqueFinal < 500) {
            alerta = "Estoque crítico";
            quantidadeCritico++;
        }

        if (estoqueFinal >= 500 && estoqueFinal <= 5000) {
            alerta = "Estoque normal";
        }

        // Guardar os dados da ordem
        var ordem = [
            codigoOrdem,
            codigoProduto,
            tipo,
            quantidade,
            custoAjustado,
            estoqueFinal,
            custoTotal,
            alerta
        ];

        ordens.push(ordem);

        // Somar estoque por tipo
        if (tipo == 1) {
            totalEstoquePadrao = totalEstoquePadrao + estoqueFinal;
        }

        if (tipo == 2) {
            totalEstoquePremium = totalEstoquePremium + estoqueFinal;
        }

        if (tipo == 3) {
            totalEstoqueEncomenda = totalEstoqueEncomenda + estoqueFinal;
        }

        // Somar custos
        totalCusto = totalCusto + custoTotal;

        // Maior custo
        if (ordens.length == 1 || custoTotal > maiorCusto) {
            maiorCusto = custoTotal;
            codigoMaior = codigoOrdem;
        }

        // Menor custo
        if (ordens.length == 1 || custoTotal < menorCusto) {
            menorCusto = custoTotal;
            codigoMenor = codigoOrdem;
        }

        alert(
            "Ordem cadastrada!\n\n" +
            "Código da ordem: " + codigoOrdem +
            "\nCódigo do produto: " + codigoProduto +
            "\nEstoque final: " + estoqueFinal +
            "\nCusto ajustado: R$ " + custoAjustado.toFixed(2) +
            "\nCusto total: R$ " + custoTotal.toFixed(2) +
            "\nAlerta: " + alerta
        );

        continuar = Number(prompt(
            "Deseja cadastrar outra ordem?\n" +
            "1 - Sim\n" +
            "2 - Não"
        ));

        while (continuar != 1 && continuar != 2) {
            alert("Opção inválida!");

            continuar = Number(prompt(
                "Deseja cadastrar outra ordem?\n" +
                "1 - Sim\n" +
                "2 - Não"
            ));
        }
    }

    // relatorio final

    var quantidadeOrdens = ordens.length;

    var mediaCusto = totalCusto / quantidadeOrdens;

    alert(
        "RELATÓRIO FINAL n\n" +

        "Total de ordens: " + quantidadeOrdens +

        "\n\nESTOQUE FINAL POR TIPO:" +
        "\nPadrão: " + totalEstoquePadrao +
        "\nPremium: " + totalEstoquePremium +
        "\nSob encomenda: " + totalEstoqueEncomenda +

        "\n\nMédia de custo por ordem: R$ " +
        mediaCusto.toFixed(2) +

        "\n\nMAIOR CUSTO:" +
        "\nOrdem: " + codigoMaior +
        "\nValor: R$ " + maiorCusto.toFixed(2) +

        "\n\nMENOR CUSTO:" +
        "\nOrdem: " + codigoMenor +
        "\nValor: R$ " + menorCusto.toFixed(2) +

        "\n\nALERTAS:" +
        "\nEstoque alto: " + quantidadeAlto +
        "\nEstoque crítico: " + quantidadeCritico
    );

    // relatorio por produto

    alert("RELATÓRIO POR PRODUTO");

    var produtos = [];
    var estoquesProdutos = [];
    var investimentosProdutos = [];

    for (var i = 0; i < ordens.length; i++) {

        var codigo = ordens[i][1];
        var estoque = ordens[i][5];
        var custo = ordens[i][6];

        var encontrado = false;

        for (var j = 0; j < produtos.length; j++) {

            if (produtos[j] == codigo) {

                estoquesProdutos[j] =
                    estoquesProdutos[j] + estoque;

                investimentosProdutos[j] =
                    investimentosProdutos[j] + custo;

                encontrado = true;
            }
        }

        if (encontrado == false) {

            produtos.push(codigo);
            estoquesProdutos.push(estoque);
            investimentosProdutos.push(custo);
        }
    }


    // Mostrar relatório de cada produto
    for (var i = 0; i < produtos.length; i++) {

        alert(
            "Produto: " + produtos[i] +
            "\nEstoque final consolidado: " + estoquesProdutos[i] +
            "\nValor total investido: R$ " +
            investimentosProdutos[i].toFixed(2)
        );
    }
}