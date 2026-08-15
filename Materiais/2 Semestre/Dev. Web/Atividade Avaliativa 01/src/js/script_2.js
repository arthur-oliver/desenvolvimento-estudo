function folhaPagamento() {

    // salario minimo
    let salarioMinimo = Number(prompt("Digite o valor atual do salário mínimo:"));

    // variaveis do relatorio
    let quantidadeFuncionarios = 0;
    let somaSalarios = 0;

    // funcionarios
    let quantidadeF = 0;
    let somaSalariosF = 0;

    // gerentes
    let quantidadeG = 0;
    let somaSalariosG = 0;

    // bonus
    let bonus10 = 0;
    let bonus5 = 0;
    let bonus2 = 0;
    let bonusNenhum = 0;

    // maior salario
    let maiorSalario = 0;
    let codigoMaior = "";
    let categoriaMaior = "";
    let turnoMaior = "";

    // menor salario
    let menorSalario = 0;
    let codigoMenor = "";
    let categoriaMenor = "";
    let turnoMenor = "";

    // controle dos codigos
    let codigos = "";
    let continuar = 1;


    // cadastro de funcionarios
    while (continuar == 1) {

        // codigo
        let codigo = prompt("Digite o código do funcionário:");

        while (codigos.includes("," + codigo + ",")) {

            alert("Esse código já foi cadastrado!");

            codigo = prompt("Digite outro código:");
        }

        codigos = codigos + "," + codigo + ",";


        // horas trabalhadas
        let horas = Number(
            prompt("Digite a quantidade de horas trabalhadas no mês:")
        );

        while (horas < 0) {

            alert("A quantidade de horas não pode ser negativa.");

            horas = Number(
                prompt("Digite a quantidade de horas trabalhadas no mês:")
            );
        }


        // categoria
        let categoria = prompt(
            "Digite a categoria:\n" +
            "F - Funcionário operacional\n" +
            "G - Gerente"
        ).toUpperCase();

        while (categoria != "F" && categoria != "G") {

            alert("Categoria inválida!");

            categoria = prompt(
                "Digite F para Funcionário ou G para Gerente:"
            ).toUpperCase();
        }


        // turno
        let turno = prompt(
            "Digite o turno:\n" +
            "M - Matutino\n" +
            "V - Vespertino\n" +
            "N - Noturno"
        ).toUpperCase();

        while (turno != "M" && turno != "V" && turno != "N") {

            alert("Turno inválido!");

            turno = prompt(
                "Digite M, V ou N:"
            ).toUpperCase();
        }


        // avaliacao
        let nota = Number(
            prompt("Digite a avaliação de desempenho (0 a 10):")
        );

        while (nota < 0 || nota > 10) {

            alert("A nota deve estar entre 0 e 10.");

            nota = Number(
                prompt("Digite a avaliação de desempenho (0 a 10):")
            );
        }


        // valor da hora
        let percentualHora = 0;

        if (categoria == "F") {

            if (turno == "M") {

                percentualHora = 0.10;

            } else if (turno == "V") {

                percentualHora = 0.15;

            } else {

                percentualHora = 0.20;
            }

        } else {

            if (turno == "M") {

                percentualHora = 0.30;

            } else if (turno == "V") {

                percentualHora = 0.35;

            } else {

                percentualHora = 0.40;
            }
        }


        // salario inicial
        let valorHora = salarioMinimo * percentualHora;

        let salarioInicial = horas * valorHora;


        // auxilio alimentacao
        let percentualAlimentacao = 0;

        if (salarioInicial <= 800) {

            percentualAlimentacao = 0.25;

        } else if (salarioInicial <= 1200) {

            percentualAlimentacao = 0.20;

        } else {

            percentualAlimentacao = 0.15;
        }

        let auxilio = salarioInicial * percentualAlimentacao;


        // bonus de desempenho
        let percentualBonus = 0;

        if (nota >= 9) {

            percentualBonus = 0.10;
            bonus10++;

        } else if (nota >= 7) {

            percentualBonus = 0.05;
            bonus5++;

        } else if (nota >= 5) {

            percentualBonus = 0.02;
            bonus2++;

        } else {

            percentualBonus = 0;
            bonusNenhum++;
        }

        let valorBonus = salarioInicial * percentualBonus;


        // salario final
        let salarioFinal = salarioInicial + auxilio + valorBonus;


        // atualizacao dos dados
        quantidadeFuncionarios++;

        somaSalarios = somaSalarios + salarioFinal;


        // separacao por categoria
        if (categoria == "F") {

            quantidadeF++;

            somaSalariosF = somaSalariosF + salarioFinal;

        } else {

            quantidadeG++;

            somaSalariosG = somaSalariosG + salarioFinal;
        }


        // maior salario
        if (quantidadeFuncionarios == 1 || salarioFinal > maiorSalario) {

            maiorSalario = salarioFinal;

            codigoMaior = codigo;

            categoriaMaior = categoria;

            turnoMaior = turno;
        }


        // menor salario
        if (quantidadeFuncionarios == 1 || salarioFinal < menorSalario) {

            menorSalario = salarioFinal;

            codigoMenor = codigo;

            categoriaMenor = categoria;

            turnoMenor = turno;
        }


        // exibicao do funcionario
        alert(
            "FUNCIONÁRIO CADASTRADO\n\n" +

            "Código: " + codigo + "\n" +
            "Categoria: " + categoria + "\n" +
            "Turno: " + turno + "\n" +
            "Horas trabalhadas: " + horas + "\n" +
            "Nota: " + nota + "\n\n" +

            "Salário inicial: R$ " +
            salarioInicial.toFixed(2) + "\n" +

            "Auxílio-alimentação: R$ " +
            auxilio.toFixed(2) + "\n" +

            "Bônus: R$ " +
            valorBonus.toFixed(2) + "\n" +

            "Salário final: R$ " +
            salarioFinal.toFixed(2)
        );


        continuar = Number(prompt(
            "Deseja cadastrar outro funcionário?\n" +
            "1 - Sim\n" +
            "2 - Não"
        ));

        while (continuar != 1 && continuar != 2) {
            alert("Opção inválida!");

            continuar = Number(prompt(
                "Deseja cadastrar outro funcionário?\n" +
                "1 - Sim\n" +
                "2 - Não"
            ));
        }
    }


    // calculo das medias
    let mediaGeral = somaSalarios / quantidadeFuncionarios;

    let mediaF = 0;
    let mediaG = 0;

    if (quantidadeF > 0) {

        mediaF = somaSalariosF / quantidadeF;
    }

    if (quantidadeG > 0) {

        mediaG = somaSalariosG / quantidadeG;
    }


    // relatorio final
    document.getElementById("relatorio").innerHTML =

        "<h2>RELATÓRIO MENSAL</h2>" +

        "<hr>" +

        "<h3>Quantidade de funcionários</h3>" +

        "<p>" +
        "Total de funcionários: " +
        quantidadeFuncionarios +
        "</p>" +

        "<h3>Média salarial</h3>" +

        "<p>" +
        "Média salarial geral: R$ " +
        mediaGeral.toFixed(2) +
        "</p>" +

        "<h3>Média por categoria</h3>" +

        "<p>" +
        "Funcionários operacionais: R$ " +
        mediaF.toFixed(2) +
        "</p>" +

        "<p>" +
        "Gerentes: R$ " +
        mediaG.toFixed(2) +
        "</p>" +

        "<h3>Maior salário</h3>" +

        "<p>" +
        "Código: " +
        codigoMaior +
        "<br>" +

        "Categoria: " +
        categoriaMaior +
        "<br>" +

        "Turno: " +
        turnoMaior +
        "<br>" +

        "Valor recebido: R$ " +
        maiorSalario.toFixed(2) +
        "</p>" +

        "<h3>Menor salário</h3>" +

        "<p>" +
        "Código: " +
        codigoMenor +
        "<br>" +

        "Categoria: " +
        categoriaMenor +
        "<br>" +

        "Turno: " +
        turnoMenor +
        "<br>" +

        "Valor recebido: R$ " +
        menorSalario.toFixed(2) +
        "</p>" +

        "<h3>Quantidade por faixa de bônus</h3>" +

        "<p>" +
        "Bônus de 10%: " +
        bonus10 +
        "<br>" +

        "Bônus de 5%: " +
        bonus5 +
        "<br>" +

        "Bônus de 2%: " +
        bonus2 +
        "<br>" +

        "Sem bônus: " +
        bonusNenhum +
        "</p>" +

        "<hr>";
}