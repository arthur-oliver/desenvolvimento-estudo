create database venda;
use venda;

-- --------------------------------------- / USO DO 'SELECT' / --------------------------------------- 

-- Verificar todos os clientes e produtos (separadamente)
select * from cliente;
select * from produto;

-- Verificar quantidade os clientes
select count(*) Nome_Coluna_Opcional from cliente;

-- Verificar produto com acrescimo de 10%  no valor unitário
select 
prod_descricao,
pro_valor_unidade,
pro_valor_unidade * 1.10 Valor

from produto;
-- Verificar os pedidos registrados em uma data em específico
select * from pedido where ped_data = '2000-10-07';
select * from pedido where ped_prazo_entrega > 20 and ped_data > '2020-01-01';

-- --------------------------------------- / PRODUTO CARTESIANO - USO DO 'JOIN' / --------------------------------------- 

-- Junção de dados de 2 tabelas
-- (combina nomes e datas - usado somente para testes!)
select
cli_nome,
ped_data
from pedido, cliente; /* pode substituir a ',' por 'cross join' - só muda a sintaxe para indicar que é um produto cartesiano*/
-- from client cross join pedido;

-- --------------------------------------- / JUNÇÃO (DIVERSOS TIPOS) - USO DO 'JOIN' / --------------------------------------- 

-- Junção de dados de 2 tabelas
-- 'CORRETO' (usa apelidos - 'c' e 'p' - nesse caso, para indicar as tabelas e relacionar com integridade cada pedido registrado)
select
c.cli_nome,
p.ped_data
from 
cliente c,   /* pode substituir a ',' por 'inner join' - só muda a sintaxe para indicar que é uma junção*/
pedido p
/*
from client c inner join pedido p
*/
where c.cli_codigo = p.cli_codigo;

-- Utilização de 'on'  (somente quando usa 'inner join' - para ',' usa where)
select 
c.cli_nome,
p.ped_data
from pedido p inner join cliente c
on c.cli_codigo = p.cli_codigo /* 'on' somente para comparar chaves (nesse caso a mesma em tabelas diferentes - um na tabela 'p' e outro na tabela 'c' */
where p.ped_data='2013-07-01'; /* 'where' para fazer filtros */
-- OBS: pode usar where em funções 'inner join', mas não on em funções com ','

-- Lisar número do pedido, nome do cliente e do vendedor
select 
v.ven_nome,
c.cli_nome,
p.ped_numero
from pedido p inner join cliente c inner join vendedor v
on c.cli_codigo = p.cli_codigo and v.ven_codigo = p.ven_codigo;

-- --------------------------------------- / EXERCÍCIO / --------------------------------------- 

-- Listar os produtos vendidos por Josias
select pr.prod_descricao
from pedido pd inner join produto pr inner join vendedor v inner join item_pedido i
on pd.ven_codigo = v.ven_codigo and
   pd.ped_numero = i.ped_numero and
   i.pro_codigo = pr.pro_codigo and
   v.ven_nome = 'Josias';
   -- Outra forma:
   select pr.prod_descricao
from pedido pd, produto pr, vendedor v, item_pedido i
where pd.ven_codigo = v.ven_codigo and
      pd.ped_numero = i.ped_numero and
      i.pro_codigo = pr.pro_codigo and
	  v.ven_nome = 'Josias';
      
-- Listar os nomes e telefones dos clientes
select c.cli_codigo, c.cli_nome, t.tel_numero
from cliente c left outer join telefone t  /* left/right outer pega todos os dados, incluindo inexistentes*/ 
on c.cli_codigo = t.cli_codigo;

-- Listar os nomes, telefones e departamentos dos funcionários
select f.fun_cod, f.fun_nome, d.dep_descricao, t.tel_codigo
from Departamento D right outer join Funcionario F
On F.dep_id = D.dep_id
left outer join telefone2 t
on t.func_cod = f.fun_cod
order by f.fun_cod;

-- --------------------------------------- / INSERINDO NOVA TABELA / --------------------------------------- 

create table faixa_salarial (fa_cod varchar(1) primary key,
fa_menor decimal(6,2),
fa_maior decimal (6,2));

insert into faixa_salarial values ('A',1000.00,2999.00);
insert into faixa_salarial values ('B',3000.00,5999.00);
insert into faixa_salarial values ('C',6000.00,9999.00);

-- --------------------------------------- / ALTERANDO TABELA / --------------------------------------- 

ALTER TABLE FUNCIONARIO ADD GERENTE_COD int;
 
ALTER TABLE FUNCIONARIO ADD constraint foreign key
(gerente_cod)REFERENCES FUNCIONARIO (FUN_COD);
 
update funcionario set gerente_cod=5
where fun_cod in (1,2,3,4);

-- Exibindo funcionário e gerente relacionado
select f.fun_nome Funcionario,
	   g.fun_nome Gerente
from funcionario f, funcionario g
where f.gerente_cod = g.fun_cod;

-- --------------------------------------- / FUNÇÕS PRONTAS - USO DO 'AVG'/'SUM'/'COUNT'... / --------------------------------------- 

-- Exibindo média dos salários do funcionários do departamento 1
select avg(fun_sal)
from funcionario
where dep_id = 1;

-- Exibindo soma dos salários do funcionários do departamento 2
select sum(fun_sal)
from funcionario
where dep_id = 2;

-- Exibindo média e soma dos salários de todos os funcionários
select avg(fun_sal), sum(fun_sal)
from funcionario;

-- Exibindo maior e menor salários entre todos os funcionários
select min(fun_sal), max(fun_sal)
from funcionario;

-- Exibindo quantidade de departamentos no dep 2
select count(*)
from funcionario
where dep_id = 2;

-- Exibindo quantidade de departamentos existentes
select count(dep_id) -- tem que ter valor para contar
from funcionario;

-- Exibindo quantidade de departamentos com valores distintos existentes
select count(distinct dep_id)
from funcionario;

-- Exibindo maior salário entre todos os funcionários e nome
select fun_sal, fun_nome from funcionario
where fun_sal = (select max(fun_sal) from funcionario);