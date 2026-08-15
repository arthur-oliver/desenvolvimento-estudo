function treinoEsportivo() {

    // Cadastrar treinos
    function cadastrarTreinos() {

        // Carga maxima
        var cargaMaxima = Number(prompt("Digite a carga máxima semanal recomendada:"));

        // Lista de treinos
        var treinos = [];

        var continuar = 1;

        // Cadastrar
        while (continuar == 1) {

            // Codigo do treino
            var codigo = prompt("Digite o código do treino:");

            // Verifica codigo
            var codigoExiste = false;

            for (var i = 0; i < treinos.length; i++) {

                if (treinos[i].codigo == codigo) {
                    codigoExiste = true;
                }
            }

            while (codigoExiste == true) {

                alert("Esse código já foi cadastrado!");

                codigo = prompt("Digite outro código:");

                codigoExiste = false;

                for (var i = 0; i < treinos.length; i++) {

                    if (treinos[i].codigo == codigo) {
                        codigoExiste = true;
                    }
                }
            }

            // Nome jogador
            var jogador = prompt("Digite o nome do jogador:");

            // Posicao
            var posicao = prompt(
                "Digite a posição:\n" +
                "G - Goleiro\n" +
                "Z - Zagueiro\n" +
                "M - Meio-campo\n" +
                "A - Atacante"
            ).toUpperCase();

            // Valida posicao
            while (
                posicao != "G" &&
                posicao != "Z" &&
                posicao != "M" &&
                posicao != "A"
            ) {

                alert("Posição inválida!");

                posicao = prompt(
                    "Digite a posição:\n" +
                    "G - Goleiro\n" +
                    "Z - Zagueiro\n" +
                    "M - Meio-campo\n" +
                    "A - Atacante"
                ).toUpperCase();
            }

            // Tipo treino
            var tipo = prompt(
                "Digite o tipo de treino:\n" +
                "F - Físico\n" +
                "T - Técnico\n" +
                "E - Estratégico"
            ).toUpperCase();

            // Valida tipo
            while (
                tipo != "F" &&
                tipo != "T" &&
                tipo != "E"
            ) {

                alert("Tipo de treino inválido!");

                tipo = prompt(
                    "Digite o tipo de treino:\n" +
                    "F - Físico\n" +
                    "T - Técnico\n" +
                    "E - Estratégico"
                ).toUpperCase();
            }

            // Duracao
            var duracao = Number(
                prompt("Digite a duração do treino em minutos:")
            );

            // Intensidade
            var intensidade = Number(
                prompt("Digite a intensidade de 1 a 10:")
            );

            // Valida intensidade
            while (intensidade < 1 || intensidade > 10) {

                alert("A intensidade deve estar entre 1 e 10!");

                intensidade = Number(
                    prompt("Digite a intensidade de 1 a 10:")
                );
            }

            // Multiplicador
            var multiplicador;

            if (tipo == "F") {

                multiplicador = 1.5;

            } else if (tipo == "T") {

                multiplicador = 1.2;

            } else {

                multiplicador = 1.0;
            }

            // Calcula carga
            var carga = (duracao / 10) * intensidade * multiplicador;

            // Guarda treino
            treinos.push({
                codigo: codigo,
                jogador: jogador,
                posicao: posicao,
                tipo: tipo,
                duracao: duracao,
                intensidade: intensidade,
                carga: carga
            });

            alert("Treino cadastrado com sucesso!");

            continuar = Number(prompt(
                "Deseja cadastrar outro treino?\n" +
                "1 - Sim\n" +
                "2 - Não"
            ));

            while (continuar != 1 && continuar != 2) {
                alert("Opção inválida!");

                continuar = Number(prompt(
                    "Deseja cadastrar outro treino?\n" +
                    "1 - Sim\n" +
                    "2 - Não"
                ));
            }
        }

        // Gera relatorio
        gerarRelatorio(treinos, cargaMaxima);
    }


    // Gera relatorio
    function gerarRelatorio(treinos, cargaMaxima) {

        // Lista jogadores
        var jogadores = [];

        var totalTreinos = treinos.length;

        // Carga por tipo
        var totalF = 0;
        var cargaF = 0;

        var totalT = 0;
        var cargaT = 0;

        var totalE = 0;
        var cargaE = 0;

        // Carga por posicao
        var totalG = 0;
        var cargaG = 0;

        var totalZ = 0;
        var cargaZ = 0;

        var totalM = 0;
        var cargaM = 0;

        var totalA = 0;
        var cargaA = 0;

        // Percorre treinos
        for (var i = 0; i < treinos.length; i++) {

            var treino = treinos[i];

            // Verifica jogador
            var jogadorEncontrado = false;

            for (var j = 0; j < jogadores.length; j++) {

                if (jogadores[j].nome == treino.jogador) {

                    jogadores[j].carga =
                        jogadores[j].carga + treino.carga;

                    jogadores[j].quantidade =
                        jogadores[j].quantidade + 1;

                    jogadorEncontrado = true;
                }
            }

            // Cadastra jogador
            if (jogadorEncontrado == false) {

                jogadores.push({
                    nome: treino.jogador,
                    posicao: treino.posicao,
                    carga: treino.carga,
                    quantidade: 1
                });
            }

            // Carga por tipo
            if (treino.tipo == "F") {

                totalF = totalF + 1;
                cargaF = cargaF + treino.carga;

            } else if (treino.tipo == "T") {

                totalT = totalT + 1;
                cargaT = cargaT + treino.carga;

            } else {

                totalE = totalE + 1;
                cargaE = cargaE + treino.carga;
            }

            // Carga por posicao
            if (treino.posicao == "G") {

                totalG = totalG + 1;
                cargaG = cargaG + treino.carga;

            } else if (treino.posicao == "Z") {

                totalZ = totalZ + 1;
                cargaZ = cargaZ + treino.carga;

            } else if (treino.posicao == "M") {

                totalM = totalM + 1;
                cargaM = cargaM + treino.carga;

            } else {

                totalA = totalA + 1;
                cargaA = cargaA + treino.carga;
            }
        }

        // Maior e menor carga
        var maiorJogador = jogadores[0];
        var menorJogador = jogadores[0];

        for (var i = 1; i < jogadores.length; i++) {

            if (jogadores[i].carga > maiorJogador.carga) {
                maiorJogador = jogadores[i];
            }

            if (jogadores[i].carga < menorJogador.carga) {
                menorJogador = jogadores[i];
            }
        }

        // Jogadores em risco
        var jogadoresRisco = 0;

        for (var i = 0; i < jogadores.length; i++) {

            if (jogadores[i].carga > cargaMaxima) {
                jogadoresRisco = jogadoresRisco + 1;
            }
        }

        // Media por tipo
        var mediaF = 0;
        var mediaT = 0;
        var mediaE = 0;

        if (totalF > 0) {
            mediaF = cargaF / totalF;
        }

        if (totalT > 0) {
            mediaT = cargaT / totalT;
        }

        if (totalE > 0) {
            mediaE = cargaE / totalE;
        }

        // Media por posicao
        var mediaG = 0;
        var mediaZ = 0;
        var mediaM = 0;
        var mediaA = 0;

        if (totalG > 0) {
            mediaG = cargaG / totalG;
        }

        if (totalZ > 0) {
            mediaZ = cargaZ / totalZ;
        }

        if (totalM > 0) {
            mediaM = cargaM / totalM;
        }

        if (totalA > 0) {
            mediaA = cargaA / totalA;
        }

        // Converte posicao
        function nomePosicao(posicao) {

            if (posicao == "G") {

                return "Goleiro";

            } else if (posicao == "Z") {

                return "Zagueiro";

            } else if (posicao == "M") {

                return "Meio-campo";

            } else {

                return "Atacante";
            }
        }

        // Lista jogadores
        var listaJogadores = "";

        for (var i = 0; i < jogadores.length; i++) {

            var risco = "";

            if (jogadores[i].carga > cargaMaxima) {
                risco = " - RISCO DE LESÃO";
            }

            listaJogadores = listaJogadores +

                "<p><strong>" +
                jogadores[i].nome +
                "</strong> - " +

                "Posição: " +
                nomePosicao(jogadores[i].posicao) +

                " - Carga: " +
                jogadores[i].carga.toFixed(2) +

                " - Treinos: " +
                jogadores[i].quantidade +

                risco +

                "</p>";
        }

        // Exibe relatorio
        document.getElementById("relatorio").innerHTML =

            "<h2>RELATÓRIO FINAL</h2>" +

            "<hr>" +

            "<p>Total de treinos cadastrados: " +
            totalTreinos +
            "</p>" +

            "<p>Carga máxima semanal recomendada: " +
            cargaMaxima.toFixed(2) +
            "</p>" +

            "<h3>JOGADORES</h3>" +

            listaJogadores +

            "<h3>MAIOR CARGA SEMANAL</h3>" +

            "<p>Nome: " +
            maiorJogador.nome +
            "</p>" +

            "<p>Posição: " +
            nomePosicao(maiorJogador.posicao) +
            "</p>" +

            "<p>Nº de treinos: " +
            maiorJogador.quantidade +
            "</p>" +

            "<p>Carga: " +
            maiorJogador.carga.toFixed(2) +
            "</p>" +

            "<h3>MENOR CARGA SEMANAL</h3>" +

            "<p>Nome: " +
            menorJogador.nome +
            "</p>" +

            "<p>Posição: " +
            nomePosicao(menorJogador.posicao) +
            "</p>" +

            "<p>Nº de treinos: " +
            menorJogador.quantidade +
            "</p>" +

            "<p>Carga: " +
            menorJogador.carga.toFixed(2) +
            "</p>" +

            "<h3>RISCO DE LESÃO</h3>" +

            "<p>Quantidade de jogadores com risco: " +
            jogadoresRisco +
            "</p>" +

            "<h3>CARGA MÉDIA POR TIPO DE TREINO</h3>" +

            "<p>Físico (F): " +
            mediaF.toFixed(2) +
            "</p>" +

            "<p>Técnico (T): " +
            mediaT.toFixed(2) +
            "</p>" +

            "<p>Estratégico (E): " +
            mediaE.toFixed(2) +
            "</p>" +

            "<h3>CARGA POR POSIÇÃO</h3>" +

            "<p>Goleiro: " +
            totalG +
            " treinos - Carga média: " +
            mediaG.toFixed(2) +
            "</p>" +

            "<p>Zagueiro: " +
            totalZ +
            " treinos - Carga média: " +
            mediaZ.toFixed(2) +
            "</p>" +

            "<p>Meio-campo: " +
            totalM +
            " treinos - Carga média: " +
            mediaM.toFixed(2) +
            "</p>" +

            "<p>Atacante: " +
            totalA +
            " treinos - Carga média: " +
            mediaA.toFixed(2) +
            "</p>";
    }

    cadastrarTreinos();
}