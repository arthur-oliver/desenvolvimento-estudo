# PRÁTICA 1
# ARTHUR ÓLIVER ROSSI ALVES
# CID DANIEL NEVES DOLIVEIRA

USE VENDA2;

#EXERCÍCIO 1
-- Inserir pelo menos mais dez linhas em cada tabela. 

-- CLIENTES

INSERT INTO cliente VALUES
(41,'Lucas Souza','12345678941','Rua das Palmeiras','São Paulo','01000-001','SP','Centro');

INSERT INTO cliente VALUES
(42,'Mariana Oliveira','12345678942','Rua das Acácias','São Paulo','01000-002','SP','Moema');

INSERT INTO cliente VALUES
(43,'Pedro Santos','12345678943','Rua das Rosas','São Paulo','01000-003','SP','Lapa');

INSERT INTO cliente VALUES
(44,'Camila Souza','12345678944','Rua das Orquídeas','São Paulo','01000-004','SP','Centro');

INSERT INTO cliente VALUES
(45,'Rafael Costa','12345678945','Rua das Flores','Rio de Janeiro','20000-001','RJ','Copacabana');

INSERT INTO cliente VALUES
(46,'Beatriz Lima','12345678946','Rua do Sol','Rio de Janeiro','20000-002','RJ','Ipanema');

INSERT INTO cliente VALUES
(47,'Gabriel Mendes','12345678947','Rua do Mar','Rio de Janeiro','20000-003','RJ','Botafogo');

INSERT INTO cliente VALUES
(48,'Larissa Souza','12345678948','Rua Central','São Paulo','01000-005','SP','Centro');

INSERT INTO cliente VALUES
(49,'Mateus Ferreira','12345678949','Rua Brasil','São Paulo','01000-006','SP','Santana');

INSERT INTO cliente VALUES
(50,'Isabela Rocha','12345678950','Rua da Paz','Rio de Janeiro','20000-004','RJ','Tijuca');


-- PRODUTOS

INSERT INTO produto VALUES
(16,'Biscoito Cream Cracker',6.50,100);

INSERT INTO produto VALUES
(17,'Achocolatado 400g',9.90,80);

INSERT INTO produto VALUES
(18,'Farinha de Trigo 1kg',5.90,90);

INSERT INTO produto VALUES
(19,'Molho de Tomate 340g',3.50,120);

INSERT INTO produto VALUES
(20,'Aveia em Flocos 500g',8.90,70);

INSERT INTO produto VALUES
(21,'Maionese 500g',12.50,60);

INSERT INTO produto VALUES
(22,'Ketchup 400g',7.90,60);

INSERT INTO produto VALUES
(23,'Mostarda 200g',5.50,50);

INSERT INTO produto VALUES
(24,'Granola 500g',15.90,40);

INSERT INTO produto VALUES
(25,'Cereal 300g',13.90,45);


-- VENDEDORES

INSERT INTO vendedor VALUES
(6,'Marcos Vendas',2300);

INSERT INTO vendedor VALUES
(7,'Amanda Vendas',2400);

INSERT INTO vendedor VALUES
(8,'Felipe Vendas',1900);

INSERT INTO vendedor VALUES
(9,'Beatriz Vendas',2600);

INSERT INTO vendedor VALUES
(10,'Lucas Vendas',2200);

INSERT INTO vendedor VALUES
(11,'Gabriela Vendas',2500);

INSERT INTO vendedor VALUES
(12,'Daniel Vendas',2100);

INSERT INTO vendedor VALUES
(13,'Renata Vendas',2300);

INSERT INTO vendedor VALUES
(14,'Thiago Vendas',2000);

INSERT INTO vendedor VALUES
(15,'Larissa Vendas',2700);


-- PEDIDOS

INSERT INTO pedido VALUES
(26,'2026-05-31',41,6,NULL,4);

INSERT INTO pedido VALUES
(27,'2026-05-31',42,7,NULL,10);

INSERT INTO pedido VALUES
(28,'2026-05-31',43,8,NULL,20);

INSERT INTO pedido VALUES
(29,'2026-05-31',44,9,NULL,18);

INSERT INTO pedido VALUES
(30,'2026-06-01',45,10,NULL,20);

INSERT INTO pedido VALUES
(31,'2026-06-02',46,11,NULL,25);

INSERT INTO pedido VALUES
(32,'2026-06-03',47,12,NULL,16);

INSERT INTO pedido VALUES
(33,'2026-06-04',48,13,NULL,5);

INSERT INTO pedido VALUES
(34,'2026-06-05',49,14,NULL,8);

INSERT INTO pedido VALUES
(35,'2026-06-06',50,15,NULL,30);


-- ITEM_PEDIDO

INSERT INTO item_pedido VALUES
(26,16,2,13.00);

INSERT INTO item_pedido VALUES
(27,17,3,29.70);

INSERT INTO item_pedido VALUES
(28,18,2,11.80);

INSERT INTO item_pedido VALUES
(29,19,4,14.00);

INSERT INTO item_pedido VALUES
(30,20,2,17.80);

INSERT INTO item_pedido VALUES
(31,16,5,32.50);

INSERT INTO item_pedido VALUES
(32,17,6,59.40);

INSERT INTO item_pedido VALUES
(33,18,3,17.70);

INSERT INTO item_pedido VALUES
(34,19,8,28.00);

INSERT INTO item_pedido VALUES
(35,20,7,62.30);


-- PAGAMENTOS

INSERT INTO pagamento VALUES
(36,26,'Pix',13.00);

INSERT INTO pagamento VALUES
(37,27,'Cartao',29.70);

INSERT INTO pagamento VALUES
(38,28,'Pix',11.80);

INSERT INTO pagamento VALUES
(39,29,'Cartao',14.00);

INSERT INTO pagamento VALUES
(40,30,'Pix',17.80);

INSERT INTO pagamento VALUES
(41,31,'Cartao',32.50);

INSERT INTO pagamento VALUES
(42,32,'Pix',59.40);

INSERT INTO pagamento VALUES
(43,33,'Cartao',17.70);

INSERT INTO pagamento VALUES
(44,34,'Pix',28.00);

INSERT INTO pagamento VALUES
(45,35,'Cartao',62.30);


-- TELEFONES

INSERT INTO telefone VALUES
(1,41,'(11)99999-0041','Celular');

INSERT INTO telefone VALUES
(1,42,'(11)99999-0042','Celular');

INSERT INTO telefone VALUES
(1,43,'(11)99999-0043','Celular');

INSERT INTO telefone VALUES
(1,44,'(11)99999-0044','Celular');

INSERT INTO telefone VALUES
(1,45,'(21)99999-0045','Celular');

INSERT INTO telefone VALUES
(1,46,'(21)99999-0046','Celular');

INSERT INTO telefone VALUES
(1,47,'(21)99999-0047','Celular');

INSERT INTO telefone VALUES
(1,48,'(11)99999-0048','Celular');

INSERT INTO telefone VALUES
(1,49,'(11)99999-0049','Celular');

INSERT INTO telefone VALUES
(1,50,'(21)99999-0050','Celular');


#EXERCÍCIO 2
-- Listar todos os clientes, ordenados por nome do cliente. 

SELECT *
FROM cliente
ORDER BY cli_nome;


#EXERCÍCIO 3
--  Listar os clientes que os sobrenomes possuem ‘Souza’ e são do estado de São Paulo 
-- (SP). Dica: Usar o comando like. 

SELECT *
FROM cliente
WHERE cli_nome LIKE '%Souza%'
AND cli_estado = 'SP';


#EXERCÍCIO 4
-- Listar o nome do cliente do pedido de número 1.

SELECT c.cli_nome
FROM cliente c
INNER JOIN pedido p
ON c.cli_codigo = p.cli_codigo
WHERE p.ped_numero = 1;


#EXERCÍCIO 5
-- Listar o nome do cliente, o nome do vendedor do pedido de código 2.

SELECT c.cli_nome, v.ven_nome
FROM pedido p
INNER JOIN cliente c
ON p.cli_codigo = c.cli_codigo
INNER JOIN vendedor v
ON p.ven_codigo = v.ven_codigo
WHERE p.ped_numero = 2;


#EXERCÍCIO 6
-- Listar a quantidade de pedido.

SELECT COUNT(*) AS quantidade_pedidos
FROM pedido;


#EXERCÍCIO 7
--  Listar a quantidade de pedido que cada vendedor realizou (Dica: Utilizar group by).

SELECT v.ven_nome, COUNT(p.ped_numero) AS quantidade_pedidos
FROM vendedor v
INNER JOIN pedido p
ON v.ven_codigo = p.ven_codigo
GROUP BY v.ven_codigo, v.ven_nome;


#EXERCÍCIO 8
-- Listar todos os itens do pedido de código 1. 

SELECT *
FROM item_pedido
WHERE ped_numero = 1;


#EXERCÍCIO 9
-- Listar a soma total do pedido de código 1.

SELECT SUM(item_valor) AS total_pedido
FROM item_pedido
WHERE ped_numero = 1;


#EXERCÍCIO 10
--  Listar os clientes e os seus telefones (Listar apenas os clientes que possuam telefone). 
-- Dica: Junção: Inner join /where.

SELECT c.cli_nome, t.tel_numero
FROM cliente c
INNER JOIN telefone t
ON c.cli_codigo = t.cli_codigo;


#EXERCÍCIO 11
-- Listar os clientes e os seus telefones (Listar também os clientes que não tenham 
-- telefone).

SELECT c.cli_nome, t.tel_numero
FROM cliente c
LEFT JOIN telefone t
ON c.cli_codigo = t.cli_codigo;


#EXERCÍCIO 12
--  Listar todos os pedidos realizados na data 31/05/2026.

SELECT *
FROM pedido
WHERE ped_data = '2026-05-31';


#EXERCÍCIO 13
--  Listar todos os pedidos realizados na data 31/05/2026 e que possuem prazo de entrega 
-- maior que 3.

SELECT *
FROM pedido
WHERE ped_data = '2026-05-31'
AND ped_prazo_entrega > 3;


#EXERCÍCIO 14
--  Listar todas as vendas(pedidos) do produto Leite Integral 1L.

SELECT DISTINCT p.ped_numero
FROM pedido p
INNER JOIN item_pedido i
ON p.ped_numero = i.ped_numero
INNER JOIN produto pr
ON i.pro_codigo = pr.pro_codigo
WHERE pr.pro_descricao = 'Leite Integral 1L';


#EXERCÍCIO 15
--  Listar todos os pedidos que o cliente de código 1 realizou (Listar o número do pedido, 
-- data do pedido e o nome do cliente).

SELECT p.ped_numero, p.ped_data, c.cli_nome
FROM pedido p
INNER JOIN cliente c
ON p.cli_codigo = c.cli_codigo
WHERE c.cli_codigo = 1;


#EXERCÍCIO 16
--  Listar a quantidade de pedido que o cliente do código 2 realizou.

SELECT COUNT(*) AS quantidade_pedidos
FROM pedido
WHERE cli_codigo = 2;


#EXERCÍCIO 17
-- Listar o nome do produto de maior valor.

SELECT pro_descricao, pro_valor_unidade
FROM produto
WHERE pro_valor_unidade = (
    SELECT MAX(pro_valor_unidade)
    FROM produto
);


#EXERCÍCIO 18
-- Quais os pedidos que têm quantidade de itens maior que 5?

SELECT ped_numero
FROM item_pedido
GROUP BY ped_numero
HAVING COUNT(*) > 5;


#EXERCÍCIO 19
-- Quais clientes têm pedidos com prazo de entrega maior que 15 dias e que são do estado de 
-- São Paulo ou Rio de Janeiro?

SELECT DISTINCT c.cli_nome, c.cli_estado, p.ped_numero, p.ped_prazo_entrega
FROM cliente c
INNER JOIN pedido p
ON c.cli_codigo = p.cli_codigo
WHERE p.ped_prazo_entrega > 15
AND c.cli_estado IN ('SP', 'RJ');


#EXERCÍCIO 20
--  Liste o número do pedido, a data do pedido e o nome do cliente.  

SELECT p.ped_numero, p.ped_data, c.cli_nome
FROM pedido p
INNER JOIN cliente c
ON p.cli_codigo = c.cli_codigo;


#EXERCÍCIO 21
--  Liste o número do pedido, o nome do vendedor e a data do pedido. 

SELECT p.ped_numero, v.ven_nome, p.ped_data
FROM pedido p
INNER JOIN vendedor v
ON p.ven_codigo = v.ven_codigo;


#EXERCÍCIO 22
-- Liste o nome do cliente e seu telefone.  

SELECT c.cli_nome, t.tel_numero
FROM cliente c
INNER JOIN telefone t
ON c.cli_codigo = t.cli_codigo;


#EXERCÍCIO 23
-- Liste os produtos vendidos em cada pedido.

SELECT p.ped_numero, pr.pro_descricao
FROM pedido p
INNER JOIN item_pedido i
ON p.ped_numero = i.ped_numero
INNER JOIN produto pr
ON i.pro_codigo = pr.pro_codigo
ORDER BY p.ped_numero;


#EXERCÍCIO 24
-- Mostre o número do pedido, o cliente e os produtos comprados.  

SELECT p.ped_numero, c.cli_nome, pr.pro_descricao
FROM pedido p
INNER JOIN cliente c
ON p.cli_codigo = c.cli_codigo
INNER JOIN item_pedido i
ON p.ped_numero = i.ped_numero
INNER JOIN produto pr
ON i.pro_codigo = pr.pro_codigo
ORDER BY p.ped_numero;


#EXERCÍCIO 25
-- Liste todos os clientes, mesmo aqueles que nunca fizeram pedidos.  

SELECT c.cli_codigo, c.cli_nome, p.ped_numero
FROM cliente c
LEFT JOIN pedido p
ON c.cli_codigo = p.cli_codigo
ORDER BY c.cli_nome;


#EXERCÍCIO 26
-- Liste todos os produtos (descrição do produto) , mesmo aqueles que nunca foram vendidos. 

SELECT pro_codigo, pro_descricao
FROM produto;

#EXERCÍCIO 27
-- Liste todos os vendedores e seus respectivos pedidos,
-- incluindo vendedores sem vendas.

SELECT v.ven_nome, p.ped_numero
FROM vendedor v
LEFT JOIN pedido p
ON v.ven_codigo = p.ven_codigo;


#EXERCÍCIO 28
-- Liste todos os clientes e seus telefones,
-- incluindo clientes sem telefone cadastrado.

SELECT c.cli_nome, t.tel_numero
FROM cliente c
LEFT JOIN telefone t
ON c.cli_codigo = t.cli_codigo;


#EXERCÍCIO 29
-- Liste todos os pedidos e seus clientes,
-- incluindo pedidos sem cliente associado (caso existam).

SELECT p.ped_numero, c.cli_nome
FROM pedido p
LEFT JOIN cliente c
ON p.cli_codigo = c.cli_codigo;


#EXERCÍCIO 30
-- Liste todos os itens de pedido e seus produtos,
-- incluindo produtos sem vendas.

SELECT i.ped_numero, p.pro_descricao, i.item_quantidade
FROM item_pedido i
RIGHT JOIN produto p
ON i.pro_codigo = p.pro_codigo;


#EXERCÍCIO 31
-- Liste todos os clientes, todos os pedidos
-- e os pagamentos realizados desses pedidos.

SELECT c.cli_nome, p.ped_numero, pg.pag_codigo, pg.pag_valor
FROM cliente c
LEFT JOIN pedido p
ON c.cli_codigo = p.cli_codigo
LEFT JOIN pagamento pg
ON p.ped_numero = pg.ped_numero;


#EXERCÍCIO 32
-- Liste todos os vendedores e todos os pedidos
-- utilizando UNION para representar FULL OUTER JOIN.

SELECT v.ven_nome, p.ped_numero
FROM vendedor v
LEFT JOIN pedido p
ON v.ven_codigo = p.ven_codigo

UNION

SELECT v.ven_nome, p.ped_numero
FROM vendedor v
RIGHT JOIN pedido p
ON v.ven_codigo = p.ven_codigo;


#EXERCÍCIO 33
-- Liste todos os produtos e todos os itens de pedido,
-- incluindo registros sem correspondência.

SELECT p.pro_descricao, i.ped_numero, i.item_quantidade
FROM produto p
LEFT JOIN item_pedido i
ON p.pro_codigo = i.pro_codigo

UNION

SELECT p.pro_descricao, i.ped_numero, i.item_quantidade
FROM produto p
RIGHT JOIN item_pedido i
ON p.pro_codigo = i.pro_codigo;


#EXERCÍCIO 34
-- Liste os clientes que nunca realizaram pedidos.

SELECT c.cli_nome
FROM cliente c
LEFT JOIN pedido p
ON c.cli_codigo = p.cli_codigo
WHERE p.ped_numero IS NULL;


#EXERCÍCIO 35
-- Mostre o produto mais caro.

SELECT pro_descricao, pro_valor_unidade
FROM produto
WHERE pro_valor_unidade =
(
    SELECT MAX(pro_valor_unidade)
    FROM produto
);


#EXERCÍCIO 36
-- Mostre o produto mais barato.

SELECT pro_descricao, pro_valor_unidade
FROM produto
WHERE pro_valor_unidade =
(
    SELECT MIN(pro_valor_unidade)
    FROM produto
);


#EXERCÍCIO 37
-- Liste os produtos com preço acima da média.

SELECT pro_descricao, pro_valor_unidade
FROM produto
WHERE pro_valor_unidade >
(
    SELECT AVG(pro_valor_unidade)
    FROM produto
);

 
#EXERCÍCIO 38
-- Liste os vendedores com salário acima da média.

SELECT ven_nome, ven_salario_fixo
FROM vendedor
WHERE ven_salario_fixo >
(
    SELECT AVG(ven_salario_fixo)
    FROM vendedor
);


#EXERCÍCIO 39
-- Mostre o cliente que realizou o maior número de pedidos.

SELECT c.cli_nome, COUNT(p.ped_numero) AS quantidade_pedidos
FROM cliente c
INNER JOIN pedido p
ON c.cli_codigo = p.cli_codigo
GROUP BY c.cli_codigo, c.cli_nome
ORDER BY quantidade_pedidos DESC
LIMIT 1;


#EXERCÍCIO 40
-- Liste os vendedores que venderam mais pedidos
-- que os demais vendedores.

SELECT v.ven_nome, COUNT(p.ped_numero) AS quantidade_pedidos
FROM vendedor v
INNER JOIN pedido p
ON v.ven_codigo = p.ven_codigo
GROUP BY v.ven_codigo, v.ven_nome
ORDER BY quantidade_pedidos DESC;


#EXERCÍCIO 41
-- Quantos pedidos cada cliente realizou?

SELECT c.cli_nome, COUNT(p.ped_numero) AS quantidade_pedidos
FROM cliente c
LEFT JOIN pedido p
ON c.cli_codigo = p.cli_codigo
GROUP BY c.cli_codigo, c.cli_nome;


#EXERCÍCIO 42
-- Quantos pedidos cada vendedor realizou?

SELECT v.ven_nome, COUNT(p.ped_numero) AS quantidade_pedidos
FROM vendedor v
LEFT JOIN pedido p
ON v.ven_codigo = p.ven_codigo
GROUP BY v.ven_codigo, v.ven_nome;


#EXERCÍCIO 43
-- Quantos produtos diferentes existem em cada pedido?

SELECT ped_numero, COUNT(pro_codigo) AS quantidade_produtos
FROM item_pedido
GROUP BY ped_numero;


#EXERCÍCIO 44
-- Calcule o valor médio dos produtos.

SELECT AVG(pro_valor_unidade) AS valor_medio
FROM produto;


#EXERCÍCIO 45
-- Mostre os clientes que realizaram mais de 2 pedidos.

SELECT c.cli_nome, COUNT(p.ped_numero) AS quantidade_pedidos
FROM cliente c
INNER JOIN pedido p
ON c.cli_codigo = p.cli_codigo
GROUP BY c.cli_codigo, c.cli_nome
HAVING COUNT(p.ped_numero) > 2;


#EXERCÍCIO 46
-- Mostre os vendedores que realizaram mais de 5 vendas.

SELECT v.ven_nome, COUNT(p.ped_numero) AS quantidade_vendas
FROM vendedor v
INNER JOIN pedido p
ON v.ven_codigo = p.ven_codigo
GROUP BY v.ven_codigo, v.ven_nome
HAVING COUNT(p.ped_numero) > 5;


#EXERCÍCIO 47
-- Calcule o total vendido por produto.

SELECT p.pro_descricao,
       SUM(i.item_quantidade * i.item_valor) AS total_vendido
FROM produto p
INNER JOIN item_pedido i
ON p.pro_codigo = i.pro_codigo
GROUP BY p.pro_codigo, p.pro_descricao;


#EXERCÍCIO 48
-- Calcule o total vendido por cliente.

SELECT c.cli_nome,
       SUM(i.item_quantidade * i.item_valor) AS total_vendido
FROM cliente c
INNER JOIN pedido p
ON c.cli_codigo = p.cli_codigo
INNER JOIN item_pedido i
ON p.ped_numero = i.ped_numero
GROUP BY c.cli_codigo, c.cli_nome;


#EXERCÍCIO 49
-- Calcule a quantidade vendida por produto.

SELECT p.pro_descricao,
       SUM(i.item_quantidade) AS quantidade_vendida
FROM produto p
INNER JOIN item_pedido i
ON p.pro_codigo = i.pro_codigo
GROUP BY p.pro_codigo, p.pro_descricao;


#EXERCÍCIO 50
-- Calcule o total vendido por vendedor.

SELECT v.ven_nome,
       SUM(i.item_quantidade * i.item_valor) AS total_vendido
FROM vendedor v
INNER JOIN pedido p
ON v.ven_codigo = p.ven_codigo
INNER JOIN item_pedido i
ON p.ped_numero = i.ped_numero
GROUP BY v.ven_codigo, v.ven_nome;


#EXERCÍCIO 51
-- Liste todos os nomes de clientes e vendedores sem repetição.

SELECT cli_nome AS nome
FROM cliente

UNION

SELECT ven_nome AS nome
FROM vendedor;


#EXERCÍCIO 52
-- Liste cidades dos clientes e estados sem repetição.

SELECT cli_cidade, cli_estado
FROM cliente
GROUP BY cli_cidade, cli_estado;


#EXERCÍCIO 53
-- Liste todos os nomes de clientes e vendedores
-- mantendo repetições.

SELECT cli_nome AS nome
FROM cliente

UNION ALL

SELECT ven_nome AS nome
FROM vendedor;


#EXERCÍCIO 54
-- Liste nomes que existam tanto em CLIENTE quanto em VENDEDOR.

SELECT cli_nome AS nome
FROM cliente
INNER JOIN vendedor
ON cliente.cli_nome = vendedor.ven_nome;


#EXERCÍCIO 55
-- Liste vendedores que nunca participaram de vendas.

SELECT v.ven_nome
FROM vendedor v
LEFT JOIN pedido p
ON v.ven_codigo = p.ven_codigo
WHERE p.ped_numero IS NULL;