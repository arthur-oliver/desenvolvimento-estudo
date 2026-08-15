function reservaHotel(){
    var valorBase = Number(prompt("Digite o valor base da diária:"));
    var valorCafe = Number(prompt("Digite o valor do café da manhã por hóspede/dia:"));

    var reservas = [];
    var codigos = [];

    var opcao = 1;

    while (opcao == 1) {

        var codigo = Number(prompt("Digite o código da reserva:"));
        var codigoExiste = false;

        for (var i = 0; i < codigos.length; i++) {
            if (codigos[i] == codigo) {
                codigoExiste = true;
            }
        }

        while (codigoExiste == true) {
            alert("Código já cadastrado!");

            codigo = Number(prompt("Digite outro código:"));

            codigoExiste = false;

            for (var i = 0; i < codigos.length; i++) {
                if (codigos[i] == codigo) {
                    codigoExiste = true;
                }
            }
        }

        codigos.push(codigo);

        // Tipo de quarto
        var tipo = prompt(
            "Digite o tipo de quarto:\n" +
            "S - Standard\n" +
            "L - Luxo\n" +
            "P - Premium"
        ).toUpperCase();

        while (tipo != "S" && tipo != "L" && tipo != "P") {
            alert("Tipo de quarto inválido!");

            tipo = prompt(
                "Digite o tipo de quarto:\n" +
                "S - Standard\n" +
                "L - Luxo\n" +
                "P - Premium"
            ).toUpperCase();
        }

        // Temporada
        var temporada = prompt(
            "Digite a temporada:\n" +
            "B - Baixa\n" +
            "A - Alta\n" +
            "F - Feriado"
        ).toUpperCase();

        while (temporada != "B" && temporada != "A" && temporada != "F") {
            alert("Temporada inválida!");

            temporada = prompt(
                "Digite a temporada:\n" +
                "B - Baixa\n" +
                "A - Alta\n" +
                "F - Feriado"
            ).toUpperCase();
        }

        // Quantidade de diárias
        var diarias = Number(prompt("Digite a quantidade de diárias:"));

        while (diarias <= 0) {
            alert("A quantidade de diárias deve ser maior que zero.");
            diarias = Number(prompt("Digite a quantidade de diárias:"));
        }

        // Número de hóspedes
        var hospedes = Number(prompt("Digite o número de hóspedes:"));

        while (hospedes <= 0) {
            alert("O número de hóspedes deve ser maior que zero.");
            hospedes = Number(prompt("Digite o número de hóspedes:"));
        }

        // Café da manhã
        var cafe = prompt(
            "Café da manhã incluso?\n" +
            "S - Sim\n" +
            "N - Não"
        ).toUpperCase();

        while (cafe != "S" && cafe != "N") {
            alert("Digite apenas S ou N.");

            cafe = prompt(
                "Café da manhã incluso?\n" +
                "S - Sim\n" +
                "N - Não"
            ).toUpperCase();
        }

        // Valor da diária (quarto)
        var diaria = valorBase;

        switch (tipo) {
            case "S":
                diaria = valorBase;
                break;

            case "L":
                diaria = valorBase * 1.5;
                break;

            case "P":
                diaria = valorBase * 2;
                break;
        }

        // Relação quarto x temporadda
        switch (temporada) {
            case "B":
                diaria = diaria;
                break;

            case "A":
                diaria = diaria * 1.25;
                break;

            case "F":
                diaria = diaria * 1.40;
                break;
        }

        // Café
        var cafeTotal = 0;

        if (cafe == "S") {
            cafeTotal = valorCafe * hospedes * diarias;
        }

        // Valor total da reserva
        var valorTotal = (diaria * diarias) + cafeTotal;

        // Guardar dados reserva
        var reserva = [
            codigo,
            tipo,
            temporada,
            diarias,
            hospedes,
            cafe,
            valorTotal
        ];

        reservas.push(reserva);

        alert(
            "Reserva cadastrada!\n" +
            "Código: " + codigo + "\n" +
            "Valor total: R$ " + valorTotal.toFixed(2)
        );

        continuar = Number(prompt(
            "Deseja cadastrar outra reserva?\n" +
            "1 - Sim\n" +
            "2 - Não"
        ));

        while (continuar != 1 && continuar != 2) {
            alert("Opção inválida!");

            continuar = Number(prompt(
                "Deseja cadastrar outra reserva?\n" +
                "1 - Sim\n" +
                "2 - Não"
            ));
        }
    }

    // Relatorio final

    var totalReservas = reservas.length;
    var faturamentoTotal = 0;

    // Totais por tipo
    var totalStandard = 0;
    var totalLuxo = 0;
    var totalPremium = 0;

    // Totais por temporada
    var totalBaixa = 0;
    var totalAlta = 0;
    var totalFeriado = 0;

    // Café
    var reservasComCafe = 0;
    var reservasSemCafe = 0;

    // Ocupação
    var ocupacaoTotal = 0;

    // Reserva mais cara
    var maiorValor = reservas[0][6];
    var reservaMaisCara = reservas[0];

    // Reserva mais barata
    var menorValor = reservas[0][6];
    var reservaMaisBarata = reservas[0];


    // Percorrer todas as reservas
    for (var i = 0; i < reservas.length; i++) {

        var reserva = reservas[i];

        var codigo = reserva[0];
        var tipo = reserva[1];
        var temporada = reserva[2];
        var diarias = reserva[3];
        var hospedes = reserva[4];
        var cafe = reserva[5];
        var valor = reserva[6];

        // Faturamento total
        faturamentoTotal = faturamentoTotal + valor;

        // Ocupação total
        ocupacaoTotal = ocupacaoTotal + (diarias * hospedes);

        // Totais por tipo
        switch (tipo) {
            case "S":
                totalStandard = totalStandard + valor;
                break;

            case "L":
                totalLuxo = totalLuxo + valor;
                break;

            case "P":
                totalPremium = totalPremium + valor;
                break;
        }

        // Totais por temporada
        switch (temporada) {
            case "B":
                totalBaixa = totalBaixa + valor;
                break;

            case "A":
                totalAlta = totalAlta + valor;
                break;

            case "F":
                totalFeriado = totalFeriado + valor;
                break;
        }

        // Café
        if (cafe == "S") {
            reservasComCafe++;
        } else {
            reservasSemCafe++;
        }

        // Reserva mais cara
        if (valor > maiorValor) {
            maiorValor = valor;
            reservaMaisCara = reserva;
        }

        // Reserva mais barata
        if (valor < menorValor) {
            menorValor = valor;
            reservaMaisBarata = reserva;
        }
    }


    // Valor médio por reserva
    var mediaReserva = faturamentoTotal / totalReservas;

    // Valor médio por hóspede
    var mediaHospede = faturamentoTotal / ocupacaoTotal;


    document.getElementById("relatorio").innerHTML =

    "<h2>RELATÓRIO FINAL</h2>" +

    "<hr>" +

    "<p>Total de reservas: " + totalReservas + "</p>" +

    "<p>Valor médio por reserva: R$ " +
        mediaReserva.toFixed(2) + "</p>" +

    "<h3>VALOR POR TIPO</h3>" +

    "<p>Standard: R$ " +
        totalStandard.toFixed(2) + "</p>" +

    "<p>Luxo: R$ " +
        totalLuxo.toFixed(2) + "</p>"+

    "<p>Premium: R$ " +
        totalPremium.toFixed(2) + "</p>" +

    "<h3>VALOR POR TEMPORADA</h3>" +

    "<p>Baixa: R$ " +
        totalBaixa.toFixed(2) + "</p>" +

    "<p>Alta: R$ " +
        totalAlta.toFixed(2) + "</p>" +

    "<p>Feriado: R$ " +
        totalFeriado.toFixed(2) + "</p>" +

    "<h3>RESERVA MAIS CARA</h3>" +

    "<p>Código: " + reservaMaisCara[0] + "</p>" +
    "<p>Tipo: " + reservaMaisCara[1] + "</p>" +
    "<p>Temporada: " + reservaMaisCara[2] + "</p>" +
    "<p>Hóspedes: " + reservaMaisCara[4] + "</p>" +

    "<p>Valor: R$ " +
        reservaMaisCara[6].toFixed(2) + "</p>" +

    "<h3>RESERVA MAIS BARATA</h3>" +

    "<p>Código: " + reservaMaisBarata[0] + "</p>" +
    "<p>Tipo: " + reservaMaisBarata[1] + "</p>" +
    "<p>Temporada: " + reservaMaisBarata[2] + "</p>" +
    "<p>Hóspedes: " + reservaMaisBarata[4] + "</p>" +

    "<p>Valor: R$ " +
        reservaMaisBarata[6].toFixed(2) + "</p>" +

    "<h3>CAFÉ DA MANHÃ</h3>" +

    "<p>Com café: " + reservasComCafe + "</p>" +
    "<p>Sem café: " + reservasSemCafe + "</p>" +

    "<h3>OCUPAÇÃO</h3>" +

    "<p>Ocupação total: " +
        ocupacaoTotal + " hóspede(s)/diária(s)</p>" +

    "<p>Valor médio por hóspede: R$ " +
        mediaHospede.toFixed(2) + "</p>";
}