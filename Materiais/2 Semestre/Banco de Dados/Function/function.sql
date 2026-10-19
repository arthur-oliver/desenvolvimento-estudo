CREATE DATABASE func;
use func;

# FUNCTION

-- OBS: Diferença function para procedure é que function permite apenas uma saída
-- Criando uma function:

-- -----------------------------------------------------------------------------------------------------

# Criando tabela para incrementar dados nos exercícios

CREATE TABLE cliente (
       cli_codigo           INT auto_increment,
       cli_nome             VARCHAR(30) NOT NULL,
       cli_endereco         VARCHAR(30),
       cli_cidade           VARCHAR(30),
       cli_cep              VARCHAR(10),
       cli_estado           VARCHAR(2),
       cli_cpf              VARCHAR(11),
       PRIMARY KEY (cli_codigo)
);
insert into cliente (cli_nome,cli_endereco,cli_cidade,cli_cep,cli_estado,cli_cpf)
values('Ana','Rua 17 n.19','Niterói', '24358310','RJ','11111111111'),
('Flávio','Áv. Pres. Vargas 10','São Paulo','22763931','SP','2253412693'),
('Jorge','Rua Caiapo 13','Curitiba','30078500','PR','14512798349'),
('Lúcia','Rua Itabira 123 Loja 9','Belo Horizonte','22124391','MG','2831521393'), 
('Maurício','Av. Paulista 1236 sl/2345','São Paulo','3012683','SP','3281698574'),
('Rodolfo','Largo da Lapa 27 sobrado','Rio de Janeiro','30078900','RJ','1283512823'),
('Beth','Av.Climério n. 45','São Paulo','25679300','SP','3248512673'),
('Paulo','TV. Moraes c/3','Londrina','0','PR','3284822332'),
('Lívio','Av. Beira Mar n. 1256','Florianópolis','300077500','SC','12736571'),
('Susana','Rua Lopes Mendes 12','Niterói','30046500','RJ','2176357123'),
('Renato','Rua Meireles n.123 sl.345','São Paulo','30225900','SP','1327657112'),
('Sebastião','Rua da Igreja n.10','Uberaba','30438700','MG','3217654721'),
('José','Quadra 3 bl. 3 sl. 1003','Brasília','22841650','DF','21763576123');  

-- -----------------------------------------------------------------------------------------------------

# Exemplo 1

DELIMITER $$

CREATE FUNCTION soma (a INT, b INT)
RETURNS INT
DETERMINISTIC
BEGIN
	RETURN a + b;
END $$

DELIMITER ;

-- Como usar:
SELECT soma (5,3);

-- -----------------------------------------------------------------------------------------------------

#Exemplo 2

DELIMITER $$
CREATE FUNCTION fn_nome_cidade(p_codigo INT)
RETURNS VARCHAR(100)
NOT DETERMINISTIC
READS SQL DATA
BEGIN
	DECLARE v_resultado VARCHAR(100);
    SELECT CONCAT(cli_nome, ' - ', cli_cidade)
    INTO v_resultado
    FROM cliente
    WHERE cli_codigo = p_codigo;
    RETURN v_resultado;
END $$
DELIMITER ;

SELECT fn_nome_cidade (5);

-- -----------------------------------------------------------------------------------------------------

#Exemplo 3

DELIMITER $$
CREATE FUNCTION fn_busca_nome(p_codigo INT)
RETURNS VARCHAR(100)
NOT DETERMINISTIC
READS SQL DATA
BEGIN
	DECLARE v_nome VARCHAR(100);
	DECLARE CONTINUE HANDLER FOR NOT FOUND
	SET v_nome = 'Cliente não encontrado';
	SELECT cli_nome
	INTO v_nome
	FROM cliente
	WHERE cli_codigo = p_codigo;
	RETURN v_nome;
END $$
DELIMITER ;

SELECT fn_busca_nome (5);

-- -----------------------------------------------------------------------------------------------------
/*
#Exercício 1
1. Crie uma FUNCTION chamada fn_cliente_estado que:
•Receba 2 parâmetros: 
•p_codigo (código do cliente) 
•p_estado (sigla do estado) 
•A função deve: 
•Verificar se o cliente pertence ao estado informado 
•Retornar: 
•"Pertence ao estado"
•"Não pertence ao estado“
*/

DELIMITER $$

CREATE FUNCTION fn_cliente_estado (p_codigo INT, p_estado VARCHAR(2)) 
RETURNS VARCHAR(50)
READS SQL DATA
BEGIN
    DECLARE v_existe INT;
    DECLARE v_resultado VARCHAR(50);
    -- Verifica se existe o cliente com o código e estado informados
    SELECT COUNT(*) INTO v_existe 
    FROM cliente 
    WHERE cli_codigo = p_codigo AND cli_estado = p_estado;
    
    -- Define a mensagem de retorno com base no resultado
    IF v_existe > 0 THEN
        SET v_resultado = 'Pertence ao estado';
    ELSE
        SET v_resultado = 'Não pertence ao estado';
    END IF;
    RETURN v_resultado;
END $$

DELIMITER ;

SELECT fn_cliente_estado (1, 'RJ');
SELECT fn_cliente_estado (1, 'SP');

-- -----------------------------------------------------------------------------------------------------
/*
#Exercício 2
2. Crie uma FUNCTION chamada fn_nome_formatado que:
•Receba 2 parâmetros: 
•p_codigo (código do cliente) 
•p_formato (tipo de retorno) 
•A função deve retornar: 
•Se p_formato = 'N' → apenas o nome 
•Se p_formato = 'C' → nome + cidade 
•Caso contrário → "Formato inválido"
*/

DELIMITER $$

CREATE FUNCTION fn_nome_formatado (p_codigo INT, p_formato CHAR(1)) 
RETURNS VARCHAR(150)
READS SQL DATA
BEGIN
    DECLARE v_nome VARCHAR(100);
    DECLARE v_cidade VARCHAR(50);
    DECLARE v_resultado VARCHAR(150);
    
    -- Busca o nome e a cidade do cliente pelo código
    SELECT cli_nome, cli_cidade INTO v_nome, v_cidade
    FROM cliente 
    WHERE cli_codigo = p_codigo;
    
    -- Verifica se o cliente foi encontrado
    IF v_nome IS NULL THEN
        SET v_resultado = 'Cliente não encontrado';
    ELSE
        -- Avalia o formato solicitado
        IF p_formato = 'N' THEN
            SET v_resultado = v_nome;
        ELSEIF p_formato = 'C' THEN
            SET v_resultado = CONCAT(v_nome, ' - ', v_cidade);
        ELSE
            SET v_resultado = 'Formato inválido';
        END IF;
    END IF;
    
    RETURN v_resultado;
END $$

DELIMITER ;

SELECT fn_nome_formatado (1, 'N');
SELECT fn_nome_formatado (1, 'C');