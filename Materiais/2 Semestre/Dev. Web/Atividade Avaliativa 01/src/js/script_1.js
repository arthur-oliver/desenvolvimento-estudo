function calcularFrete(){
    
    var codigoPedido = 0
    
    let combustivel = Number(prompt("Preço do litro de combustível:")); //pedi antes para ser o mesmo em todos os pedidos
    let pedidos = [];
    let continuar = 1;

    let totalSudeste = 0;
    let totalSul = 0;
    let totalCentroOeste = 0;

    while (continuar == 1) {

        let codigo = prompt("Código do pedido:");

        let codigoValido = false;

        while (codigoValido == false) {
            codigoValido = true;

            for (let x = 0; x < pedidos.length; x++) {
                if (pedidos[x].codigo == codigo) {
                    codigoValido = false;
                }
            }

            if (codigoValido == false) {
                codigo = prompt("Código já utilizado. Digite outro:");
            }
        }

        // Região
        let regiao = Number(prompt(
            "Região:\n1 - Sudeste\n2 - Sul\n3 - Centro-Oeste"
        ));

        let precoPeca = 0;

        while (regiao < 1 || regiao > 3) {
            regiao = Number(prompt(
                "Região inválida!\n1 - Sudeste\n2 - Sul\n3 - Centro-Oeste"
            ));
        }

        switch (regiao) {
            case 1:
                precoPeca = 1.20;
                break;
            case 2:
                precoPeca = 1.30;
                break;
            case 3:
                precoPeca = 1.50;
                break;
        }

        let distancia = Number(prompt("Distância em km:"));
        let quantidade = Number(prompt("Quantidade de peças:"));
        let rastreamento = prompt("Deseja rastreamento? (1 - Sim/ 2 - Não)");

        while (rastreamento != 1 && rastreamento != 2) {
            rastreamento = prompt("Digite apenas 1 - Sim/ 2 - Não:");
        }

        // Valor das peças
        let valorPecas;

        if (quantidade > 1000) {
            valorPecas = (1000 * precoPeca) + //R$1000,00 fixo para calcular somente o excedente
                        ((quantidade - 1000) * precoPeca * 0.88); // 100% - 12% = 88%
        } else {
            valorPecas = quantidade * precoPeca;
        }

        // Valor da distância
        let valorDistancia = distancia * combustivel;

        // Rastreamento
        let valorRastreamento = 0;

        if (rastreamento == 1) {
            valorRastreamento = 200;
        }

        // Valor total
        let valorTotal = valorPecas + valorDistancia + valorRastreamento;

        // Guarda o pedido
        pedidos.push({
            codigo: codigo,
            regiao: regiao,
            valor: valorTotal
        });

        // Acumula por região
        switch (regiao) {
            case 1:
                totalSudeste += valorTotal; //totalSudeste = totalSudeste + valorTotal (acumulador)
                break;
            case 2:
                totalSul += valorTotal;
                break;
            case 3:
                totalCentroOeste += valorTotal;
                break;
        }

        alert("Pedido cadastrado!\nValor total: R$ " + valorTotal.toFixed(2));

        continuar = Number(prompt(
            "Deseja cadastrar outro pedido?\n" +
            "1 - Sim\n" +
            "2 - Não"
        ));

        while (continuar != 1 && continuar != 2) {
            alert("Opção inválida!");

            continuar = Number(prompt(
                "Deseja cadastrar outro pedido?\n" +
                "1 - Sim\n" +
                "2 - Não"
            ));
        }
    }

    // Relatório

    let totalPedidos = pedidos.length; //length = quantidade de elementos do array (quantos cadastrei)
    let soma = 0;

    let maior = pedidos[0];
    let menor = pedidos[0];

    for (let x = 0; x < pedidos.length; x++) {

        soma += pedidos[x].valor; //verifica linha por linha dos pedidos; x é a posição do cadastro e "valor" restirge o dado daquela linha

        if (pedidos[x].valor > maior.valor) {
            maior = pedidos[x];
        }

        if (pedidos[x].valor < menor.valor) {
            menor = pedidos[x];
        }
    }

    let media = soma / totalPedidos;

    document.getElementById("relatorio").innerHTML =

    "<h2>RELATÓRIO FINAL</h2>" +

    "<hr>" +

    "<p>Total de pedidos: " + totalPedidos + "</p>" +

    "<p>Valor médio por pedido: R$ " +
        media.toFixed(2) + "</p>" +

    "<h3>VALOR POR REGIÃO</h3>" +

    "<p>Sudeste: R$ " + totalSudeste.toFixed(2) + "</p>" +

    "<p>Sul: R$ " + totalSul.toFixed(2) + "</p>" +

    "<p>Centro-Oeste: R$ " +
        totalCentroOeste.toFixed(2) + "</p>" +

    "<h3>PEDIDO MAIS CARO</h3>" +

    "<p>Código: " + maior.codigo + "</p>" +

    "<p>Valor: R$ " + maior.valor.toFixed(2) + "</p>" +

    "<h3>PEDIDO MAIS BARATO</h3>" +

    "<p>Código: " + menor.codigo + "</p>" +

    "<p>Valor: R$ " + menor.valor.toFixed(2) + "</p>";
}