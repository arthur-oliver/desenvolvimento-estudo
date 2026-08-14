function reservaHotel(){
    var valorBase = Number(prompt("Digite o valor base da diária:"));
    var valorCafe = Number(prompt("Digite o valor do café da manhã por hóspede/dia:"));

    var reservas = [];
    var codigos = [];

    var opcao = "S";

    while (opcao != "N") {

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

        opcao = prompt("Deseja cadastrar outra reserva? S - Sim / N - Não").toUpperCase();

        while (opcao != "S" && opcao != "N") {
            alert("Digite apenas S ou N.");
            opcao = prompt("Deseja cadastrar outra reserva? S - Sim / N - Não").toUpperCase();
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


    var relatorio = "";

    relatorio = relatorio +
        "RELATÓRIO FINAL\n\n";

    relatorio = relatorio +
        "Total de reservas: " + totalReservas + "\n";

    relatorio = relatorio +
        "Valor médio por reserva: R$ " +
        mediaReserva.toFixed(2) + "\n\n";

    relatorio = relatorio +
        "VALOR POR TIPO\n";

    relatorio = relatorio +
        "Standard: R$ " +
        totalStandard.toFixed(2) + "\n";

    relatorio = relatorio +
        "Luxo: R$ " +
        totalLuxo.toFixed(2) + "\n";

    relatorio = relatorio +
        "Premium: R$ " +
        totalPremium.toFixed(2) + "\n\n";

    relatorio = relatorio +
        "VALOR POR TEMPORADA\n";

    relatorio = relatorio +
        "Baixa: R$ " +
        totalBaixa.toFixed(2) + "\n";

    relatorio = relatorio +
        "Alta: R$ " +
        totalAlta.toFixed(2) + "\n";

    relatorio = relatorio +
        "Feriado: R$ " +
        totalFeriado.toFixed(2) + "\n\n";

    relatorio = relatorio +
        "RESERVA MAIS CARA\n";

    relatorio = relatorio +
        "Código: " + reservaMaisCara[0] + "\n";

    relatorio = relatorio +
        "Tipo: " + reservaMaisCara[1] + "\n";

    relatorio = relatorio +
        "Temporada: " + reservaMaisCara[2] + "\n";

    relatorio = relatorio +
        "Hóspedes: " + reservaMaisCara[4] + "\n";

    relatorio = relatorio +
        "Valor: R$ " + reservaMaisCara[6].toFixed(2) + "\n\n";


    relatorio = relatorio +
        "RESERVA MAIS BARATA\n";

    relatorio = relatorio +
        "Código: " + reservaMaisBarata[0] + "\n";

    relatorio = relatorio +
        "Tipo: " + reservaMaisBarata[1] + "\n";

    relatorio = relatorio +
        "Temporada: " + reservaMaisBarata[2] + "\n";

    relatorio = relatorio +
        "Hóspedes: " + reservaMaisBarata[4] + "\n";

    relatorio = relatorio +
        "Valor: R$ " + reservaMaisBarata[6].toFixed(2) + "\n\n";


    relatorio = relatorio +
        "CAFÉ DA MANHÃ\n";

    relatorio = relatorio +
        "Com café: " + reservasComCafe + "\n";

    relatorio = relatorio +
        "Sem café: " + reservasSemCafe + "\n\n";


    relatorio = relatorio +
        "OCUPAÇÃO\n";

    relatorio = relatorio +
        "Ocupação total: " + ocupacaoTotal + " hóspede(s)/diária(s)\n";

    relatorio = relatorio +
        "Valor médio por hóspede: R$ " +
        mediaHospede.toFixed(2);


    document.getElementById("relatorio").innerText = relatorio;
}