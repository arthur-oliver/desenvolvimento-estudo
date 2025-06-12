use venda;

-- EXERCÍCIO 1
select distinct cli_nome from cliente
order by cli_nome;

-- EXERCÍCIO 2
select distinct cli_nome from cliente
where cli_estado = 'SP' and (cli_nome like 'F%' or cli_nome like 'B%')
order by cli_nome;

-- EXERCÍCIO 3
select c.cli_nome Cliente
from cliente c inner join pedido p
on c.cli_codigo = p.cli_codigo
where ped_numero = 1;

-- EXERCÍCIO 4
select c.cli_nome Cliente, v.ven_nome Vendedor
from cliente c inner join vendedor v inner join pedido p
on c.cli_codigo = p.cli_codigo and v.ven_codigo = p.ven_codigo
where ped_numero = 2;

-- EXERCÍCIO 5
select count(ped_numero) from pedido;

-- EXERCÍCIO 6
select count(p.ped_numero) Nº_Pedidos, v.ven_nome Vendedor
from vendedor v inner join pedido p
on v.ven_codigo = p.ven_codigo
group by ven_nome;

-- EXERCÍCIO 7
select p.prod_descricao Itens
from item_pedido i inner join produto p
on p.pro_codigo = i.pro_codigo
where ped_numero = 1;

-- EXERCÍCIO 8
select sum(item_quantidade*pro_valor_unidade) Itens
from item_pedido i inner join produto p
on p.pro_codigo = i.pro_codigo
where ped_numero = 1;

-- EXERCÍCIO 9
select c.cli_codigo, c.cli_nome, t.tel_numero
from cliente c inner join telefone t
on c.cli_codigo = t.cli_codigo;

-- EXERCÍCIO 10
select c.cli_codigo, c.cli_nome, t.tel_numero
from cliente c left outer join telefone t
on c.cli_codigo = t.cli_codigo;

-- EXERCÍCIO 11
-- Impossível (sem tabela de categoria)

-- EXERCÍCIO 12
select ped_numero from pedido where ped_data = '2010-10-01';

-- EXERCÍCIO 13
select ped_numero from pedido where ped_data = '2010-10-01' and ped_prazo_entrega > 3;

-- EXERCÍCIO 14
select ped_numero from item_pedido where pro_codigo = 1 or pro_codigo = 4;

-- EXERCÍCIO 15
select p.ped_numero, p.ped_data, c.cli_nome
from pedido p inner join cliente c
on p.cli_codigo = c.cli_codigo
where p.cli_codigo = 1;

-- EXERCÍCIO 16
select count(p.cli_codigo) Quant_Pedidos
from pedido p inner join cliente c
on p.cli_codigo = c.cli_codigo
where c.cli_codigo = 2;

-- EXERCÍCIO 17
select distinct prod_descricao from produto 
where pro_valor_unidade = (select max(pro_valor_unidade) from produto);

-- EXERCÍCIO 18
select ped_numero Quant_Pedidos
from item_pedido where item_quantidade > 5;

-- EXERCÍCIO 19
select c.cli_nome
from cliente c inner join pedido p
on c.cli_codigo = p.cli_codigo
where ped_prazo_entrega > 15 and (cli_estado = 'SP' or cli_estado = 'RJ');