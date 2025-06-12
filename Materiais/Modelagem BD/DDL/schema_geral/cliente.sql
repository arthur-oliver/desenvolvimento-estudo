-- CRIANDO TABELA
Create table Cliente 
(cli_cod int primary key auto_increment,
cli_nome varchar(30),
cli_ativo int DEFAULT 1,
cli_data_nasc date);

use venda; -- usando tabela venda
select * from cliente; -- vendo todos os dados da tabela cliente

-- INSERINDO:
/*adicionar somente parte dos valores ou quando há alto-incremento
deve especificar antes quais dados vai add*/
insert into cliente(cli_nome,cli_data_nasc) 
values ('Pedro','2001-12-19'),('Ana','2003-3-4'),('Maria','2004-5-6'),('Paulo','2005-6-7');

-- DESCRIÇÕES METADADOS:
/*desccrevendo schema venda*/
-- select * from information_schema.table_constraints
-- where table_schema = 'venda'; 
/*descrevendo tabela cliente*/
-- describe cliente;

