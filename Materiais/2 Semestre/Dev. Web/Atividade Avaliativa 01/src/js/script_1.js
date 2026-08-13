function calcularFrete(){
    
    var codigoPedido = 0
    
    let combustivel = Number(prompt("Preço do litro de combustível:")); //pedi antes para ser o mesmo em todos os pedidos
    let pedidos = [];
    let opcao = 1;

    let totalSudeste = 0;
    let totalSul = 0;
    let totalCentroOeste = 0;

    while (opcao == 1) {

        let codigo = prompt("Código do pedido:");

        // Verifica se o código já existe
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
        let rastreamento = prompt("Deseja rastreamento? (S/N)");

        while (rastreamento != "S" && rastreamento != "N") {
            rastreamento = prompt("Digite apenas S ou N:");
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

        if (rastreamento == "S") {
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

        opcao = Number(prompt(
            "1 - Cadastrar outro pedido\n2 - Finalizar"
        ));
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

    alert(
        "RELATÓRIO FINAL\n\n" +
        "Total de pedidos: " + totalPedidos + "\n" +
        "Valor médio por pedido: R$ " + media.toFixed(2) + "\n\n" +

        "Sudeste: R$ " + totalSudeste.toFixed(2) + "\n" +
        "Sul: R$ " + totalSul.toFixed(2) + "\n" +
        "Centro-Oeste: R$ " + totalCentroOeste.toFixed(2) + "\n\n" +

        "Pedido mais caro:\n" +
        "Código: " + maior.codigo +
        "\nValor: R$ " + maior.valor.toFixed(2) + "\n\n" +

        "Pedido mais barato:\n" +
        "Código: " + menor.codigo +
        "\nValor: R$ " + menor.valor.toFixed(2)
    );
}