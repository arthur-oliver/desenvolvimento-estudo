function sistemaVendas() {

    // Configuracao
    var meta = Number(
        prompt("Digite a meta mensal por vendedor:")
    );

    var percentualBase = Number(
        prompt("Digite o percentual base de comissao:")
    );

    percentualBase = percentualBase / 100;

    // Lista vendas
    var vendas = [];

    var continuar = "S";

    // Cadastro
    while (continuar == "S") {

        // Codigo venda
        var codigo = prompt("Digite o codigo da venda:");

        // Verifica codigo
        var codigoExiste = false;

        for (var i = 0; i < vendas.length; i++) {

            if (vendas[i].codigo == codigo) {
                codigoExiste = true;
            }
        }

        while (codigoExiste == true) {

            alert("Esse codigo ja foi cadastrado!");

            codigo = prompt("Digite outro codigo:");

            codigoExiste = false;

            for (var i = 0; i < vendas.length; i++) {

                if (vendas[i].codigo == codigo) {
                    codigoExiste = true;
                }
            }
        }

        // Codigo vendedor
        var vendedor = prompt(
            "Digite o codigo do vendedor:"
        );

        // Regiao
        var regiao = Number(
            prompt(
                "Digite a regiao:\n" +
                "1 - Norte\n" +
                "2 - Nordeste\n" +
                "3 - Sudeste\n" +
                "4 - Sul"
            )
        );

        // Valida regiao
        while (
            regiao != 1 &&
            regiao != 2 &&
            regiao != 3 &&
            regiao != 4
        ) {

            alert("Regiao invalida!");

            regiao = Number(
                prompt(
                    "Digite a regiao:\n" +
                    "1 - Norte\n" +
                    "2 - Nordeste\n" +
                    "3 - Sudeste\n" +
                    "4 - Sul"
                )
            );
        }

        // Valor venda
        var valorVenda = Number(
            prompt("Digite o valor da venda:")
        );

        // Tipo cliente
        var tipoCliente = prompt(
            "Digite o tipo de cliente:\n" +
            "PF - Pessoa Fisica\n" +
            "PJ - Pessoa Juridica"
        ).toUpperCase();

        // Valida cliente
        while (
            tipoCliente != "PF" &&
            tipoCliente != "PJ"
        ) {

            alert("Tipo de cliente invalido!");

            tipoCliente = prompt(
                "Digite o tipo de cliente:\n" +
                "PF - Pessoa Fisica\n" +
                "PJ - Pessoa Juridica"
            ).toUpperCase();
        }

        // Comissao base
        var comissaoBase =
            valorVenda * percentualBase;

        // Bonus cliente
        var bonusCliente = 0;

        if (tipoCliente == "PF") {

            bonusCliente = valorVenda * 0.02;

        } else {

            bonusCliente = valorVenda * 0.03;
        }

        // Bonus regiao
        var bonusRegiao = 0;

        if (regiao == 1 || regiao == 2) {

            bonusRegiao = valorVenda * 0.01;

        } else if (regiao == 3) {

            bonusRegiao = 0;

        } else {

            bonusRegiao = valorVenda * 0.005;
        }

        // Comissao total
        var comissaoTotal =
            comissaoBase +
            bonusCliente +
            bonusRegiao;

        // Guarda venda
        vendas.push({
            codigo: codigo,
            vendedor: vendedor,
            regiao: regiao,
            valor: valorVenda,
            tipoCliente: tipoCliente,
            comissao: comissaoTotal
        });

        alert("Venda cadastrada com sucesso!");

        // Pergunta continuar
        continuar = prompt(
            "Deseja cadastrar outra venda? (S/N)"
        ).toUpperCase();
    }


    // Lista vendedores
    var vendedores = [];

    var totalVendas = vendas.length;

    // Valor por regiao
    var valorNorte = 0;
    var valorNordeste = 0;
    var valorSudeste = 0;
    var valorSul = 0;

    // Valor por cliente
    var valorPF = 0;
    var valorPJ = 0;

    // Comissao geral
    var comissaoGeral = 0;


    // Percorre vendas
    for (var i = 0; i < vendas.length; i++) {

        var venda = vendas[i];

        // Verifica vendedor
        var vendedorEncontrado = false;

        for (var j = 0; j < vendedores.length; j++) {

            if (vendedores[j].codigo == venda.vendedor) {

                vendedores[j].valor =
                    vendedores[j].valor + venda.valor;

                vendedores[j].comissao =
                    vendedores[j].comissao + venda.comissao;

                vendedores[j].quantidade =
                    vendedores[j].quantidade + 1;

                vendedorEncontrado = true;
            }
        }

        // Cadastra vendedor
        if (vendedorEncontrado == false) {

            vendedores.push({
                codigo: venda.vendedor,
                valor: venda.valor,
                comissao: venda.comissao,
                quantidade: 1
            });
        }


        // Valor por regiao
        if (venda.regiao == 1) {

            valorNorte =
                valorNorte + venda.valor;

        } else if (venda.regiao == 2) {

            valorNordeste =
                valorNordeste + venda.valor;

        } else if (venda.regiao == 3) {

            valorSudeste =
                valorSudeste + venda.valor;

        } else {

            valorSul =
                valorSul + venda.valor;
        }


        // Valor por cliente
        if (venda.tipoCliente == "PF") {

            valorPF =
                valorPF + venda.valor;

        } else {

            valorPJ =
                valorPJ + venda.valor;
        }


        // Comissao geral
        comissaoGeral =
            comissaoGeral + venda.comissao;
    }


    // Maior venda
    var maiorVenda = vendedores[0];

    // Maior comissao
    var maiorComissao = vendedores[0];

    for (var i = 1; i < vendedores.length; i++) {

        if (vendedores[i].valor > maiorVenda.valor) {

            maiorVenda = vendedores[i];
        }

        if (vendedores[i].comissao > maiorComissao.comissao) {

            maiorComissao = vendedores[i];
        }
    }


    // Vendedores meta
    var vendedoresMeta = 0;

    for (var i = 0; i < vendedores.length; i++) {

        if (vendedores[i].valor >= meta) {

            vendedoresMeta =
                vendedoresMeta + 1;
        }
    }


    // Media comissao
    var mediaComissao = 0;

    if (totalVendas > 0) {

        mediaComissao =
            comissaoGeral / totalVendas;
    }


    // Comissao por regiao
    var comissaoNorte = 0;
    var comissaoNordeste = 0;
    var comissaoSudeste = 0;
    var comissaoSul = 0;

    var totalNorte = 0;
    var totalNordeste = 0;
    var totalSudeste = 0;
    var totalSul = 0;


    // Calcula comissao regiao
    for (var i = 0; i < vendas.length; i++) {

        if (vendas[i].regiao == 1) {

            comissaoNorte =
                comissaoNorte + vendas[i].comissao;

            totalNorte =
                totalNorte + 1;

        } else if (vendas[i].regiao == 2) {

            comissaoNordeste =
                comissaoNordeste + vendas[i].comissao;

            totalNordeste =
                totalNordeste + 1;

        } else if (vendas[i].regiao == 3) {

            comissaoSudeste =
                comissaoSudeste + vendas[i].comissao;

            totalSudeste =
                totalSudeste + 1;

        } else {

            comissaoSul =
                comissaoSul + vendas[i].comissao;

            totalSul =
                totalSul + 1;
        }
    }


    // Media por regiao
    var mediaNorte = 0;
    var mediaNordeste = 0;
    var mediaSudeste = 0;
    var mediaSul = 0;

    if (totalNorte > 0) {

        mediaNorte =
            comissaoNorte / totalNorte;
    }

    if (totalNordeste > 0) {

        mediaNordeste =
            comissaoNordeste / totalNordeste;
    }

    if (totalSudeste > 0) {

        mediaSudeste =
            comissaoSudeste / totalSudeste;
    }

    if (totalSul > 0) {

        mediaSul =
            comissaoSul / totalSul;
    }


    // Exibe relatorio
    document.getElementById("relatorio").innerHTML =

        "<h2>RELATORIO FINAL</h2>" +

        "<p>Total de vendas registradas: " +
        totalVendas +
        "</p>" +

        "<p>Meta por vendedor: R$ " +
        meta.toFixed(2) +
        "</p>" +

        "<h3>VALOR TOTAL POR REGIAO</h3>" +

        "<p>Norte: R$ " +
        valorNorte.toFixed(2) +
        "</p>" +

        "<p>Nordeste: R$ " +
        valorNordeste.toFixed(2) +
        "</p>" +

        "<p>Sudeste: R$ " +
        valorSudeste.toFixed(2) +
        "</p>" +

        "<p>Sul: R$ " +
        valorSul.toFixed(2) +
        "</p>" +

        "<h3>VALOR POR TIPO DE CLIENTE</h3>" +

        "<p>PF: R$ " +
        valorPF.toFixed(2) +
        "</p>" +

        "<p>PJ: R$ " +
        valorPJ.toFixed(2) +
        "</p>" +

        "<h3>VENDEDOR COM MAIOR VALOR</h3>" +

        "<p>Codigo: " +
        maiorVenda.codigo +
        "</p>" +

        "<p>Valor total: R$ " +
        maiorVenda.valor.toFixed(2) +
        "</p>" +

        "<h3>VENDEDOR COM MAIOR COMISSAO</h3>" +

        "<p>Codigo: " +
        maiorComissao.codigo +
        "</p>" +

        "<p>Comissao total: R$ " +
        maiorComissao.comissao.toFixed(2) +
        "</p>" +

        "<h3>METAS</h3>" +

        "<p>Vendedores que bateram a meta: " +
        vendedoresMeta +
        "</p>" +

        "<h3>COMISSAO MEDIA GERAL</h3>" +

        "<p>Comissao media: R$ " +
        mediaComissao.toFixed(2) +
        "</p>" +

        "<h3>COMISSAO MEDIA POR REGIAO</h3>" +

        "<p>Norte: R$ " +
        mediaNorte.toFixed(2) +
        "</p>" +

        "<p>Nordeste: R$ " +
        mediaNordeste.toFixed(2) +
        "</p>" +

        "<p>Sudeste: R$ " +
        mediaSudeste.toFixed(2) +
        "</p>" +

        "<p>Sul: R$ " +
        mediaSul.toFixed(2) +
        "</p>";
}