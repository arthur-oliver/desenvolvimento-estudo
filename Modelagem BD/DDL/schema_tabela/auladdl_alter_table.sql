create database auladdl;
use auladdl;

-- -----------------------------------/ DEFININDO TABELA (BASE) /-----------------------------------

-- CRIANDO TABELA
create table pedido
(ped_id int primary key auto_increment,
ped_valor_total decimal(8,2));

 -- INSERINDO NOVOS DADOS
insert into pedido (ped_valor_total) values (100),(200),(400);

-- -----------------------------------/ ALTER TABLE /-----------------------------------

-- VERIFICANDO PROPRIEDADES DA TABELA
describe pedido;
-- desc = describe

-- VERIFICANDO DADOS DA TABELA
select * from pedido;

-- ADD COLUNA
alter table pedido
add ped_data date;

-- MODIFICANDO VALORES DA COLUNA (DE TIPO EQUIVALENTE)
alter table pedido 
modify ped_valor_total decimal (10,2);

-- ADD COLUNA
alter table pedido
add ativo int;

 -- INSERINDO NOVOS DADOS (COM MAIS CAMPOS)
insert into pedido (ped_valor_total,ped_data,ativo) 
values (100, '2025-1-2', 1),(200, '2025-10-12', 1),(400, '2025-5-5', 1);

-- MODIFICANDO TIPO DA COLUNA 
alter table pedido
modify ativo varchar (20);
/* 
	• OBS: consegue alterar, pois varchar aceita números 'int' já cadastrados
	• OBS: se houvesse valor do tipo 'varchar' cadastrado não conseguiria alterar para 'int',
	pois 'int' não aceita números 'varchar' já cadastrados
*/

 -- INSERINDO NOVOS DADOS (COM MAIS CAMPOS - ATIVO AGORA COM 'VARCHAR')
insert into pedido (ped_valor_total,ped_data,ativo) 
values (100, '2025-1-2', 'AAA'),(200, '2025-10-12', 'BBB'),(400, '2025-5-5', 'CCC');

-- MODIFICANDO NOME DA COLUNA ('ped_data' para 'ped_data_cadastro)
alter table pedido
rename column ped_data to ped_data_cadastro;

-- -----------------------------------/ REFAZENDO TABELA /-----------------------------------

-- APAGAR TABELA 'pedido'
drop table pedido;

-- CRIANDO  TABELA PEDIDO (NOVAMENTE)
create table pedido
(ped_id int,
ped_valor_total decimal(8,2),
ped_data date,
cli_cod int);

-- -----------------------------------/ ALTER TABLE (EXERCÍCIO) /-----------------------------------
  /*
  • 1) Criar tabela 'cliente';
  • 2) 'ped_id' para PK;
  • 3) 'cli_id' para FK;
  */

-- 1) CRIANDO TABELA CLIENTE
create table cliente
(cli_id int primary key auto_increment,
cli_nome varchar(30));

-- 2) MODIFICANDO TIPO DA COLUNA 
alter table pedido
modify ped_id int primary key;

-- 3) ADD COLUNA
alter table pedido
add cli_id int,
add foreign key (cli_id) references cliente(cli_id);

-- -----------------------------------/ EXTRA (EXERCÍCIO) /-----------------------------------

-- REMOVENDO PK DE 'pedido' (não funciona se ela estiver definida com auto_increment - já tem valor)
alter table pedido
 drop primary key;
 
-- ADD PK em 'pedido'
alter table pedido
modify ped_id int primary key;

-- INSERINDO DADOS EM 'cliente'
insert into cliente (cli_nome) 
values ('Arthur'), ('Gabriel'), ('João'), ('Maria'), ('Laís'), ('Ana'), ('Gustavo');
select * from cliente;