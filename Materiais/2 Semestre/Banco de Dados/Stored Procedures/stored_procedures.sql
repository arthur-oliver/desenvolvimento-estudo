use clientes;

-- Sintaxe para criação de stored procedures no MySQL

DELIMITER $$
CREATE PROCEDURE Selecionar_Clientes (IN quantidade INT)
BEGIN
SELECT * FROM CLIENTE
LIMIT quantidade;
END $$
DELIMITER ;

CALL Selecionar_Clientes (2);

-- Parâmetros de saída (OUT) - Exemplo

DELIMITER $$
CREATE PROCEDURE Consultar_Quant_Cliente(OUT quantidade INT)
BEGIN
SELECT COUNT(*) into quantidade FROM CLIENTE;
END $$
DELIMITER ;

CALL Consultar_Quant_Cliente(@total);
select @total;

-- Parâmetros de saída (IN/OUT) - Exemplo 

DELIMITER $$
CREATE PROCEDURE Consultar_Quadrado(INOUT numero INT)
BEGIN
SET numero = numero * numero;
END $$
DELIMITER ;

SET @valor = 5;
CALL Consultar_Quadrado(@valor);
SELECT @valor;

-- IF...ELSE no MySQL
/*
Sintaxe:
IF condição THEN
-- código se a condição for verdadeira
ELSE
-- código se a condição for falsa
END IF;
*/

-- Exemplo - Verificar se um número é maior que 10:

DELIMITER $$
CREATE PROCEDURE TesteIf ()
BEGIN
DECLARE num INT DEFAULT 15;
IF num > 10 THEN
SELECT 'Maior que 10' AS resultado;
ELSE
SELECT 'Menor ou igual a 10' AS resultado;
END IF;
END $$
DELIMITER ;
-- Chamada do procedimento
CALL TesteIf();