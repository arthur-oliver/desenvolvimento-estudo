#ARTHUR ÓLIVER - DSM 2
#PRÁTICA 02

CREATE DATABASE RH;
USE RH;

# EXERCÍCIO 1
# Criacao das tabelas e insercao de pelo menos 5 registros

CREATE TABLE Estado (
    est_cod INT PRIMARY KEY,
    est_nome VARCHAR(50) NOT NULL
);
# Posteriormente pede para criar "est_estado" na VIEW (mesma função do est_nome, porém não existe na table)
ALTER TABLE Estado
RENAME COLUMN est_nome TO est_estado;

CREATE TABLE Cidade (
    cid_cod INT PRIMARY KEY,
    cid_nome VARCHAR(100) NOT NULL,
    est_cod INT,
    FOREIGN KEY (est_cod) REFERENCES Estado(est_cod)
);

CREATE TABLE Cargo (
    carg_cod INT PRIMARY KEY,
    carg_descricao VARCHAR(100) NOT NULL
);

CREATE TABLE Departamento (
    dep_cod INT PRIMARY KEY,
    dep_descricao VARCHAR(100) NOT NULL
);

CREATE TABLE Funcionario (
    fun_cod INT PRIMARY KEY,
    fun_nome VARCHAR(100) NOT NULL,
    fun_logradouro VARCHAR(150),
    cid_cod INT,
    carg_cod INT,
    dep_cod INT,
    fun_salario DECIMAL(10,2),
    FOREIGN KEY (cid_cod) REFERENCES Cidade(cid_cod),
    FOREIGN KEY (carg_cod) REFERENCES Cargo(carg_cod),
    FOREIGN KEY (dep_cod) REFERENCES Departamento(dep_cod)
);


# Insercao dos estados

INSERT INTO Estado VALUES
(1, 'Sao Paulo'),
(2, 'Rio de Janeiro'),
(3, 'Minas Gerais'),
(4, 'Parana'),
(5, 'Bahia');


# Insercao das cidades

INSERT INTO Cidade VALUES
(1, 'Sao Paulo', 1),
(2, 'Campinas', 1),
(3, 'Rio de Janeiro', 2),
(4, 'Belo Horizonte', 3),
(5, 'Curitiba', 4);


# Insercao dos cargos

INSERT INTO Cargo VALUES
(1, 'Analista'),
(2, 'Desenvolvedor'),
(3, 'Gerente'),
(4, 'Assistente'),
(5, 'Tecnico');


# Insercao dos departamentos

INSERT INTO Departamento VALUES
(1, 'Recursos Humanos'),
(2, 'Tecnologia'),
(3, 'Financeiro'),
(4, 'Administrativo'),
(5, 'Comercial');


# Insercao dos funcionarios

INSERT INTO Funcionario
(fun_cod, fun_nome, fun_logradouro, cid_cod, carg_cod, dep_cod, fun_salario)
VALUES
(1, 'Arthur Rossi', 'Rua A, 100', 1, 2, 2, 4500.00),
(2, 'Joao Silva', 'Rua B, 200', 2, 1, 1, 3800.00),
(3, 'Maria Souza', 'Rua C, 300', 3, 3, 3, 6500.00),
(4, 'Pedro Santos', 'Rua D, 400', 4, 4, 4, 2800.00),
(5, 'Ana Oliveira', 'Rua E, 500', 5, 5, 5, 3200.00);


# EXERCÍCIO 2
# Criacao da View Funcionario_View
# A View mostra somente os dados cadastrais
# O salario nao sera disponibilizado pela View

CREATE VIEW Funcionario_View AS
SELECT
    f.fun_cod,
    f.fun_nome,
    f.fun_logradouro,
    c.cid_nome,
    e.est_estado,
    ca.carg_descricao,
    d.dep_descricao
FROM Funcionario f
INNER JOIN Cidade c
    ON f.cid_cod = c.cid_cod
INNER JOIN Estado e
    ON c.est_cod = e.est_cod
INNER JOIN Cargo ca
    ON f.carg_cod = ca.carg_cod
INNER JOIN Departamento d
    ON f.dep_cod = d.dep_cod;


# EXERCÍCIO 3
# Consulta dos dados cadastrais pela View

SELECT * FROM Funcionario_View;


# EXERCÍCIO 4
# Consulta dos dados diretamente pela tabela Funcionario
# Nesta consulta o salario tambem sera exibido

SELECT * FROM Funcionario;


# EXERCÍCIO 5
# Insercao de um novo funcionario na tabela Funcionario
# Depois o funcionario sera consultado pela View

INSERT INTO Funcionario
(fun_cod, fun_nome, fun_logradouro, cid_cod, carg_cod, dep_cod, fun_salario)
VALUES
(6, 'Carlos Mendes', 'Rua F, 600', 1, 1, 2, 4100.00);

# Consulta pela View para verificar o novo funcionario

SELECT * FROM Funcionario_View;


# EXERCÍCIO 6
# Adicao do campo fun_obs na tabela Funcionario
# O campo precisa existir primeiro na tabela de origem

ALTER TABLE Funcionario
ADD COLUMN fun_obs VARCHAR(255);


# Insercao de uma observacao

UPDATE Funcionario
SET fun_obs = 'Funcionario ativo'
WHERE fun_cod = 1;


# Remocao da View antiga para criar novamente com o novo campo

DROP VIEW Funcionario_View;


# Criacao da View novamente incluindo fun_obs

CREATE VIEW Funcionario_View AS
SELECT
    f.fun_cod,
    f.fun_nome,
    f.fun_logradouro,
    c.cid_nome,
    e.est_estado,
    ca.carg_descricao,
    d.dep_descricao,
    f.fun_obs
FROM Funcionario f
INNER JOIN Cidade c
    ON f.cid_cod = c.cid_cod
INNER JOIN Estado e
    ON c.est_cod = e.est_cod
INNER JOIN Cargo ca
    ON f.carg_cod = ca.carg_cod
INNER JOIN Departamento d
    ON f.dep_cod = d.dep_cod;


# Consulta da View com o novo campo

SELECT * FROM Funcionario_View;


# EXERCÍCIO 7
# Consulta da definicao da View no dicionario de dados

select *from 
information_schema.views
Where table_schema= 'RH' and table_name = 'Funcionario_View';

show full tables in RH where 
table_type like 'VIEW';


# EXERCÍCIO 8
# Alternativas corretas sobre View no MySQL
#
# A - Correta
# B - Incorreta
# C - Correta
# D - Incorreta
#
# Os dados NÃO estão fisicamente armazenados
# Para remover uma View utilizamos DROP VIEW.

# Resposta:
# X - A
# X - C


# EXERCÍCIO 9
# Criacao de um usuario com permissao somente de SELECT
# O usuario nao podera inserir, alterar ou excluir dados pela View

SELECT USER();
CREATE USER 'analista'@'localhost'
IDENTIFIED BY '123456';
# DROP USER 'analista'@'localhost';

# Permissao somente para consultar a View

GRANT SELECT ON RH.Funcionario_View
TO 'analista'@'localhost';


# Consulta das permissoes do usuario

SHOW GRANTS FOR 'analista'@'localhost';


# TESTE DE SELECT (FAZER NA CONEXÃO DO USUÁRIO CRIADO)
# Este comando deve funcionar

SELECT * FROM RH.Funcionario_View;


# TESTE DE INSERT
# Este comando deve ser bloqueado por falta de permissao

INSERT INTO RH.Funcionario_View
(fun_cod, fun_nome)
VALUES
(7, 'Teste');


# TESTE DE UPDATE
# Este comando deve ser bloqueado por falta de permissao

UPDATE RH.Funcionario_View
SET fun_nome = 'Teste'
WHERE fun_cod = 1;


# TESTE DE DELETE
# Este comando deve ser bloqueado por falta de permissao

DELETE FROM RH.Funcionario_View
WHERE fun_cod = 1;