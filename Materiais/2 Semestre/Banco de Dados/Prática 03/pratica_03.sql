#PRÁTICA 03
#NOME: Arthur Óliver Rossi Alves - DSM2

use catalogo;

#Exercício 1
-- Quais as gravadoras que não possuem CDs cadastrados com preço inferior a 80,00?

SELECT g.grav_codigo, g.grav_nome
FROM gravadora g
WHERE NOT EXISTS (
    SELECT 1
    FROM cd c
    WHERE c.grav_codigo = g.grav_codigo
      AND c.cd_preco_venda < 80
);


#Exercício 2
-- Quais os CDs que têm o preço igual ao maior preço de cada gravadora?

SELECT c.cd_codigo,
       c.cd_nome,
       c.cd_preco_venda,
       c.grav_codigo
FROM cd c
WHERE c.cd_preco_venda = (
    SELECT MAX(c2.cd_preco_venda)
    FROM cd c2
    WHERE c2.grav_codigo = c.grav_codigo
);


#Exercício 3
-- Quais os CDs que têm preço inferior a qualquer outro CD da gravadora com código 10?

SELECT cd_codigo,
       cd_nome,
       cd_preco_venda
FROM cd
WHERE cd_preco_venda < ANY (
    SELECT cd_preco_venda
    FROM cd
    WHERE grav_codigo = 10
);


#Exercício 4
-- Quais CDs têm o preço de venda menor que a média de preço de venda de todas as gravadoras?

SELECT cd_codigo,
       cd_nome,
       cd_preco_venda
FROM cd
WHERE cd_preco_venda < (
    SELECT AVG(cd_preco_venda)
    FROM cd
);


#Exercício 5
-- Liste os nomes dos CDs que tenham preço de venda maior que 10,00 reais ou a gravadora seja a de código 3, ordenados por ordem alfabética decrescente dos nomes dos CDs. Exibir os nomes dos CDs iniciando com a letra maiúscula.

SELECT CONCAT(
           UPPER(LEFT(cd_nome, 1)),
           LOWER(SUBSTRING(cd_nome, 2))
       ) AS cd_nome
FROM cd
WHERE cd_preco_venda > 10
   OR grav_codigo = 3
ORDER BY cd_nome DESC;


#Exercício 6
-- Exibir o nome, a data de lançamento e nome da gravadora dos CDs que possuem data de lançamento em um intervalo de datas.

SELECT c.cd_nome,
       c.cd_data_lancamento,
       g.grav_nome
FROM cd c
INNER JOIN gravadora g
        ON c.grav_codigo = g.grav_codigo
WHERE c.cd_data_lancamento BETWEEN '2026-01-01' AND '2026-12-31';


#Exercício 7
-- Exibir o nome do CD e de suas gravadoras, exiba também os CDs que não possuam gravadoras.

SELECT c.cd_nome,
       g.grav_nome
FROM cd c
LEFT JOIN gravadora g
       ON c.grav_codigo = g.grav_codigo;


#Exercício 8
-- Listar quantas músicas que há em cada CD. Exibir código do CD e a quantidade de música.

SELECT c.cd_codigo,
       COUNT(f.mus_codigo) AS quantidade_musicas
FROM cd c
LEFT JOIN faixa f
       ON c.cd_codigo = f.cd_codigo
GROUP BY c.cd_codigo;


#Exercício 9
-- Definir a qual categoria (cat_codigo) cada CD pertence.

SELECT c.cd_codigo,
       c.cd_nome,
       cat.cat_codigo
FROM cd c
JOIN cd_categoria cat
  ON c.cd_preco_venda BETWEEN cat.menor_preco
                           AND cat.maior_preco;


#Exercício 10
-- Listar o nome do CD indicado para cada CD gravado.

SELECT c.cd_nome AS cd,
       indicado.cd_nome AS cd_indicado
FROM cd c
LEFT JOIN cd indicado
       ON c.cd_indicado = indicado.cd_codigo;


#Exercício 11
-- A tabela CD_CATEGORIA possui 3 categorias cadastradas, conforme mostra a figura abaixo.
-- Realize cada um dos comandos a seguir, sem o comando Commit Automático selecionado.
-- Após realizar o comando SELECT * FROM CD_CATEGORIA qual será o resultado?
-- Explique esse resultado.

INSERT INTO CD_CATEGORIA VALUES (4,31.00,40.00);

INSERT INTO CD_CATEGORIA VALUES (5,34.00,40.00);

ROLLBACK;


INSERT INTO CD_CATEGORIA VALUES (6,45.00,50.00);

ROLLBACK;


INSERT INTO CD_CATEGORIA VALUES (7,51.00,60.00);

UPDATE CD_CATEGORIA
SET MENOR_PRECO = 32.00
WHERE CAT_CODIGO = 7;

COMMIT;


INSERT INTO CD_CATEGORIA VALUES (8,62.00,70.00);

ROLLBACK;

COMMIT;


SELECT * FROM CD_CATEGORIA;


-- Resultado esperado:
-- CAT_CODIGO | MENOR_PRECO | MAIOR_PRECO
--      1     |    10.00    |    15.00
--      2     |    16.00    |    20.00
--      3     |    21.00    |    30.00
--      7     |    32.00    |    60.00

-- Explicação:
-- Os registros 4 e 5 foram inseridos, mas foram removidos pelo ROLLBACK.
-- O registro 6 também foi inserido, mas foi removido pelo ROLLBACK.
-- O registro 7 foi inserido e seu MENOR_PRECO foi alterado de 51.00
-- para 32.00. O COMMIT salvou definitivamente essas alterações.
-- O registro 8 foi inserido, mas foi removido pelo ROLLBACK.
-- Portanto, permanecem na tabela os registros 1, 2, 3 e 7.


#Exercício 12
-- Liste o código, nome, preço de venda, o tempo de duração total, o nome da gravadora do CD de código 101.

SELECT c.cd_codigo,
       c.cd_nome,
       c.cd_preco_venda,
       COALESCE(SUM(m.mus_duracao), 0) AS duracao_total,
       g.grav_nome
FROM cd c
LEFT JOIN faixa f
       ON c.cd_codigo = f.cd_codigo
LEFT JOIN musica m
       ON f.mus_codigo = m.mus_codigo
LEFT JOIN gravadora g
       ON c.grav_codigo = g.grav_codigo
WHERE c.cd_codigo = 101
GROUP BY c.cd_codigo,
         c.cd_nome,
         c.cd_preco_venda,
         g.grav_nome;


#Exercício 13
-- Listar o nome das gravadoras que possuem mais de 2 CDs relacionados a ela.

SELECT g.grav_nome,
       COUNT(c.cd_codigo) AS quantidade_cds
FROM gravadora g
JOIN cd c
  ON g.grav_codigo = c.grav_codigo
GROUP BY g.grav_codigo,
         g.grav_nome
HAVING COUNT(c.cd_codigo) > 2;


#Exercício 14
-- Listar o nome da música de maior duração.

SELECT mus_codigo,
       mus_nome,
       mus_duracao
FROM musica
WHERE mus_duracao = (
    SELECT MAX(mus_duracao)
    FROM musica
);


#Exercício 15
-- Listar o nome das músicas, a faixa e o nome do CD em que está a música, apenas os CDs de código 102 e 103.

SELECT m.mus_nome,
       f.faixa_numero,
       c.cd_nome
FROM faixa f
JOIN musica m
  ON f.mus_codigo = m.mus_codigo
JOIN cd c
  ON f.cd_codigo = c.cd_codigo
WHERE c.cd_codigo IN (102, 103);


#Exercício 16
-- Listar (um único resultado) os autores (código autor, nome autor) com código menor que 10 e as músicas (código música, nome musica) com código menor que 15. (Utilizar UNION).

SELECT aut_codigo AS codigo,
       aut_nome AS nome
FROM autor
WHERE aut_codigo < 10

UNION

SELECT mus_codigo AS codigo,
       mus_nome AS nome
FROM musica
WHERE mus_codigo < 15;