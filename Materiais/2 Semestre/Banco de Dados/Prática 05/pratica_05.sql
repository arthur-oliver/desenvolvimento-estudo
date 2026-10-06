# NOME: ARHTUR ÓLIVER ROSSI ALVES - DSM 2

USE biblioteca;


-- 1) Criar uma procedure para cadastrar um livro
-- e seus exemplares.

DROP PROCEDURE IF EXISTS CadastrarLivroComExemplares;

DELIMITER $$

CREATE PROCEDURE CadastrarLivroComExemplares(IN p_titulo VARCHAR(20), IN p_edicao INT, IN p_ano VARCHAR(4), IN p_editora INT, IN p_qtd_exemplares INT)
BEGIN
    DECLARE v_contador INT DEFAULT 1;

    INSERT INTO Livro(liv_cod, liv_titulo, edicao, anopublicacao, edi_cod) SELECT IFNULL(MAX(liv_cod), 0) + 1, p_titulo, p_edicao, p_ano, p_editora FROM Livro;

    -- Cadastra a quantidade de exemplares informada
    exemplares_loop: LOOP
        IF v_contador > p_qtd_exemplares THEN
            LEAVE exemplares_loop;
        END IF;

        -- ex_status = 0 (novo, disponível) | liv_cod = livro recém-cadastrado
        -- (INSERT ... SELECT evita o erro 1093 do MySQL com subconsulta na mesma tabela)
        INSERT INTO Exemplar(exe_cod, exe_descricao, liv_cod, ex_status) SELECT IFNULL(MAX(exe_cod), 0) + 1, v_contador, (SELECT MAX(liv_cod) FROM Livro), 0 FROM Exemplar;

        SET v_contador = v_contador + 1;
    END LOOP exemplares_loop;
END $$

DELIMITER ;

CALL CadastrarLivroComExemplares('Algoritmos', 1, '2020', 2, 3);

SELECT l.liv_cod, l.liv_titulo, e.exe_cod, e.exe_descricao, e.ex_status FROM Livro l INNER JOIN Exemplar e ON l.liv_cod = e.liv_cod WHERE l.liv_titulo = 'Algoritmos';


-- 2) Criar uma procedure para registrar um empréstimo.

DROP PROCEDURE IF EXISTS RegistrarEmprestimo;

DELIMITER $$

CREATE PROCEDURE RegistrarEmprestimo(IN p_pes_cod INT, IN p_data_emprestimo DATE, IN p_data_prev_dev DATE)
BEGIN
    INSERT INTO Emprestimo(emp_cod, pes_cod, emp_data_emprestimo, emp_data_PrevDev) SELECT IFNULL(MAX(emp_cod), 0) + 1, p_pes_cod, p_data_emprestimo, p_data_prev_dev FROM Emprestimo;
END $$

DELIMITER ;

CALL RegistrarEmprestimo(1, '2026-09-30', '2026-10-15');

SELECT * FROM Emprestimo;


-- 3) Criar uma procedure para registrar uma devolução.

DROP PROCEDURE IF EXISTS RegistrarDevolucao;

DELIMITER $$

CREATE PROCEDURE RegistrarDevolucao(IN p_emp_cod INT, IN p_exe_cod INT)
BEGIN
    INSERT INTO Devolucao(dev_cod, data_dev, emp_cod, exe_cod) SELECT IFNULL(MAX(dev_cod), 0) + 1, CURDATE(), p_emp_cod, p_exe_cod FROM Devolucao;
END $$

DELIMITER ;

-- Empréstimo 1, exemplar 2 (ainda não devolvido)
CALL RegistrarDevolucao(1, 2);

SELECT * FROM Devolucao;


-- 4) Criar uma procedure para listar os empréstimos
-- de uma pessoa.

DROP PROCEDURE IF EXISTS HistoricoEmprestimos;

DELIMITER $$

CREATE PROCEDURE HistoricoEmprestimos(IN p_pes_cod INT)
BEGIN
    SELECT e.emp_cod, e.pes_cod, e.emp_data_emprestimo, e.emp_data_PrevDev, i.exe_cod FROM Emprestimo e LEFT JOIN ITEM_EMPRESTIMO i ON e.emp_cod = i.emp_cod WHERE e.pes_cod = p_pes_cod;
END $$

DELIMITER ;

CALL HistoricoEmprestimos(1);


-- 5) Criar uma procedure para listar os livros
-- emprestados e ainda não devolvidos.

DROP PROCEDURE IF EXISTS LivrosEmprestadosNaoDevolvidos;

DELIMITER $$

CREATE PROCEDURE LivrosEmprestadosNaoDevolvidos()
BEGIN
    SELECT l.liv_cod, l.liv_titulo, e.exe_cod, em.emp_cod FROM Livro l INNER JOIN Exemplar e ON l.liv_cod = e.liv_cod INNER JOIN ITEM_EMPRESTIMO i ON e.exe_cod = i.exe_cod INNER JOIN Emprestimo em ON i.emp_cod = em.emp_cod LEFT JOIN Devolucao d ON d.emp_cod = em.emp_cod AND d.exe_cod = e.exe_cod WHERE d.dev_cod IS NULL;
END $$

DELIMITER ;

CALL LivrosEmprestadosNaoDevolvidos();


-- 6) Criar uma procedure para atualizar o status
-- dos exemplares.

DROP PROCEDURE IF EXISTS AtualizarSatus;

DELIMITER $$

CREATE PROCEDURE AtualizarSatus()
BEGIN
    UPDATE Exemplar SET ex_status = 0;

    UPDATE Exemplar e INNER JOIN ITEM_EMPRESTIMO i ON e.exe_cod = i.exe_cod INNER JOIN Emprestimo em ON i.emp_cod = em.emp_cod LEFT JOIN Devolucao d ON d.emp_cod = em.emp_cod AND d.exe_cod = e.exe_cod SET e.ex_status = 1 WHERE d.dev_cod IS NULL;
END $$

DELIMITER ;

CALL AtualizarSatus();

SELECT * FROM Exemplar;


-- 7) Criar uma procedure para informar a quantidade
-- de exemplares disponíveis.

DROP PROCEDURE IF EXISTS DisponibilidadeLivro;

DELIMITER $$

CREATE PROCEDURE DisponibilidadeLivro(IN p_liv_cod INT, OUT p_quantidade INT)
BEGIN
    SELECT COUNT(*) INTO p_quantidade FROM Exemplar WHERE liv_cod = p_liv_cod AND ex_status = 0;
END $$

DELIMITER ;

CALL DisponibilidadeLivro(1, @quantidade);

SELECT @quantidade;


-- 8) Criar uma procedure para atualizar a titulação
-- de um professor.

DROP PROCEDURE IF EXISTS AtualizarTitulacao;

DELIMITER $$

CREATE PROCEDURE AtualizarTitulacao(IN p_pes_cod INT, IN p_nova_titulacao VARCHAR(20))
BEGIN
    UPDATE Professor SET titulacao = p_nova_titulacao WHERE pes_cod = p_pes_cod;
END $$

DELIMITER ;

CALL AtualizarTitulacao(4, 'doutorado');

SELECT * FROM Professor WHERE pes_cod = 4;


-- 9) Criar uma procedure para inserir uma pessoa
-- e seu telefone.

DROP PROCEDURE IF EXISTS InserirPessoaComTelefone;

DELIMITER $$

CREATE PROCEDURE InserirPessoaComTelefone(IN p_pes_cod INT, IN p_nome VARCHAR(40), IN p_cpf BIGINT, IN p_rg VARCHAR(20), IN p_email VARCHAR(30), IN p_tel_numero INT, IN p_tip_descricao VARCHAR(20), IN p_tel_ddd INT)
BEGIN
    INSERT INTO Pessoa(pes_cod, pes_nome, cpf, rg, email) VALUES(p_pes_cod, p_nome, p_cpf, p_rg, p_email);

    INSERT INTO Telefone(tel_cod, tel_numero, tip_descricao, tel_ddd, pes_cod) SELECT IFNULL(MAX(tel_cod), 0) + 1, p_tel_numero, p_tip_descricao, p_tel_ddd, p_pes_cod FROM Telefone;
END $$

DELIMITER ;

CALL InserirPessoaComTelefone(6, 'Carlos', 66666666666, '7894561', 'carlos@gmail.com', 99999999, 'CELULAR', 11);

SELECT * FROM Pessoa WHERE pes_cod = 6;

SELECT * FROM Telefone WHERE pes_cod = 6;


-- 10) Criar uma procedure para listar os empréstimos
-- atrasados e ainda não devolvidos.
-- (considera os itens, pois a devolução pode ser parcial)

DROP PROCEDURE IF EXISTS DevolucoesEmAtraso;

DELIMITER $$

CREATE PROCEDURE DevolucoesEmAtraso()
BEGIN
    SELECT e.emp_cod, e.pes_cod, e.emp_data_emprestimo, e.emp_data_PrevDev, i.exe_cod FROM Emprestimo e INNER JOIN ITEM_EMPRESTIMO i ON e.emp_cod = i.emp_cod LEFT JOIN Devolucao d ON d.emp_cod = i.emp_cod AND d.exe_cod = i.exe_cod WHERE e.emp_data_PrevDev < CURDATE() AND d.dev_cod IS NULL;
END $$

DELIMITER ;

CALL DevolucoesEmAtraso();


-- 11) Criar uma procedure que recebe o código de um exemplar.
-- Se estiver emprestado e não devolvido, exibe erro.
-- Caso contrário, registra o empréstimo.
-- (Cursor não é necessário: basta COUNT e IF.)

DROP PROCEDURE IF EXISTS EmprestarExemplar;

DELIMITER $$

CREATE PROCEDURE EmprestarExemplar(IN p_exe_cod INT, IN p_pes_cod INT)
BEGIN
    DECLARE v_existe INT DEFAULT 0;
    DECLARE v_emprestado INT DEFAULT 0;

    SELECT COUNT(*) INTO v_existe FROM Exemplar WHERE exe_cod = p_exe_cod;

    SELECT COUNT(*) INTO v_emprestado FROM ITEM_EMPRESTIMO i LEFT JOIN Devolucao d ON i.emp_cod = d.emp_cod AND i.exe_cod = d.exe_cod WHERE i.exe_cod = p_exe_cod AND d.dev_cod IS NULL;

    IF v_existe = 0 THEN
        SELECT 'Erro: exemplar não cadastrado.' AS mensagem;
    ELSEIF v_emprestado > 0 THEN
        SELECT 'Erro: exemplar já está emprestado e não foi devolvido.' AS mensagem;
    ELSE
        INSERT INTO Emprestimo(emp_cod, pes_cod, emp_data_emprestimo, emp_data_PrevDev) SELECT IFNULL(MAX(emp_cod), 0) + 1, p_pes_cod, CURDATE(), DATE_ADD(CURDATE(), INTERVAL 15 DAY) FROM Emprestimo;

        -- emp_cod = empréstimo recém-registrado (maior código)
        INSERT INTO ITEM_EMPRESTIMO(emp_cod, exe_cod) VALUES((SELECT MAX(emp_cod) FROM Emprestimo), p_exe_cod);

        SELECT 'Empréstimo registrado com sucesso.' AS mensagem;
    END IF;
END $$

DELIMITER ;

-- Exemplar 2 está emprestado: deve exibir erro
CALL EmprestarExemplar(2, 1);

-- Exemplar 8 está disponível: deve registrar
CALL EmprestarExemplar(8, 2);

SELECT * FROM ITEM_EMPRESTIMO WHERE exe_cod = 8;


-- 12) Criar uma procedure para excluir uma pessoa.
-- Se possuir empréstimos, não excluir.
-- (Cursor não é necessário: basta COUNT e IF.)
-- Os registros filhos (Telefone, Aluno e Professor) são
-- removidos antes por causa das chaves estrangeiras.

DROP PROCEDURE IF EXISTS ExcluirPessoa;

DELIMITER $$

CREATE PROCEDURE ExcluirPessoa(IN p_pes_cod INT)
BEGIN
    DECLARE v_existe INT DEFAULT 0;

    SELECT COUNT(*) INTO v_existe FROM Emprestimo WHERE pes_cod = p_pes_cod;

    IF v_existe > 0 THEN
        SELECT 'Pessoa possui empréstimos e não pode ser excluída.' AS mensagem;
    ELSE
        DELETE FROM Telefone WHERE pes_cod = p_pes_cod;
        DELETE FROM Aluno WHERE pes_cod = p_pes_cod;
        DELETE FROM Professor WHERE pes_cod = p_pes_cod;
        DELETE FROM Pessoa WHERE pes_cod = p_pes_cod;
    END IF;
END $$

DELIMITER ;

-- Pessoa 1 possui empréstimos: não pode excluir
CALL ExcluirPessoa(1);

SELECT * FROM Pessoa WHERE pes_cod = 1;

-- Pessoa 6 não possui empréstimos: será excluída
CALL ExcluirPessoa(6);

SELECT * FROM Pessoa WHERE pes_cod = 6;


-- 13) Criar uma procedure que percorre todos os empréstimos
-- de uma pessoa e, se ainda não devolvido, atualiza a data
-- prevista de devolução para +7 dias.
-- (Cursor necessário: o enunciado pede para percorrer
-- empréstimo por empréstimo e decidir um a um.)

DROP PROCEDURE IF EXISTS AdiarDevolucoesPessoa;

DELIMITER $$

CREATE PROCEDURE AdiarDevolucoesPessoa(IN p_pes_cod INT)
BEGIN
    DECLARE v_emp_cod INT;
    DECLARE v_pendentes INT DEFAULT 0;
    DECLARE done INT DEFAULT FALSE;

    -- Declarar o cursor: empréstimos da pessoa
    DECLARE emp_cursor CURSOR FOR SELECT emp_cod FROM Emprestimo WHERE pes_cod = p_pes_cod;

    -- Manipulador para o fim do cursor
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

    -- Abrir o cursor
    OPEN emp_cursor;

    emprestimos_loop: LOOP
        -- Buscar o próximo empréstimo
        FETCH emp_cursor INTO v_emp_cod;

        IF done THEN
            LEAVE emprestimos_loop;
        END IF;

        -- Conta os itens do empréstimo sem devolução
        SELECT COUNT(*) INTO v_pendentes FROM ITEM_EMPRESTIMO i LEFT JOIN Devolucao d ON i.emp_cod = d.emp_cod AND i.exe_cod = d.exe_cod WHERE i.emp_cod = v_emp_cod AND d.dev_cod IS NULL;

        -- Se ainda há item não devolvido, soma 7 dias
        IF v_pendentes > 0 THEN
            UPDATE Emprestimo SET emp_data_PrevDev = DATE_ADD(emp_data_PrevDev, INTERVAL 7 DAY) WHERE emp_cod = v_emp_cod;
        END IF;
    END LOOP emprestimos_loop;

    -- Fechar o cursor
    CLOSE emp_cursor;
END $$

DELIMITER ;

-- Antes
SELECT * FROM Emprestimo WHERE pes_cod = 5;

CALL AdiarDevolucoesPessoa(5);

-- Depois
SELECT * FROM Emprestimo WHERE pes_cod = 5;