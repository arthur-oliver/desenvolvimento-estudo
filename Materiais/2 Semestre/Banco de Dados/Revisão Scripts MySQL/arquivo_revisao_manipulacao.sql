# REVISÃO

use venda;
select * from produto;

select * from produto
where prod_descricao='caneta';

select prod_descricao,
pro_valor_unidade,  
pro_valor_unidade*1.10 as Valor # acrescenta 10% e nomeia a coluna como "Valor"
from produto;

select * from pedido;

select * from pedido
where ped_data = '2000-10-07';

select cli_nome, ped_data
from pedido, cliente; # produto cartesiano (resultado = combinação)

select cli_nome, ped_data
from pedido p, cliente c # coloca apelido para fazer a junção
where p.cli_codigo = c.cli_codigo; # junta registros de mesmo nome em tabelas diferentes
# OUTRA OPÇÃO
select cli_nome, ped_data
from pedido p inner join cliente c # usa inner join
where p.cli_codigo = c.cli_codigo; # junta registros de mesmo nome em tabelas diferentes

#LISTAR O NOME DO CLIENTE E VENDEDOR DE TODOS OS PEDIDOS
select cli_nome, ven_nome
from pedido p inner join cliente c inner join vendedor v
where p.cli_codigo = c.cli_codigo and p.ven_codigo = v.ven_codigo;

#listar tel
select tel_codigo, cli_codigo, tel_numero
from telefone;
# adicionar nomes em vez de códigos
select tel_codigo, cli_nome, tel_numero
from cliente c,
	telefone t
where c.cli_codigo = t.cli_codigo;

#FUNÇÃO OUTER JOIN
select c.cli_codigo, c.cli_nome, t.tel_numero
from cliente c left outer join telefone t
on c.cli_codigo = t.cli_codigo;