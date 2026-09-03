use catalogo;
select * from cd;

#Qual o maior preço dos Cds?
select max(cd_preco_venda)
from cd;

#Liste o nome do CD de maior preço.
select cd_nome
from cd
where cd_preco_venda =
(select max(cd_preco_venda)
from cd);

#Liste o nome do CD de maior preço. (Limita a uma exibição)
select * from cd
order by cd_preco_venda desc
limit 1;

insert into cd values (4, 'CD4',20.00, now(),1,null);

#Criar uma tabela na qual constem os cds cujo o preço seja menor que a media.
create table cd_menor as
select cd_nome, cd_preco_venda
from cd where cd_preco_venda <
(select avg(cd_preco_venda) from cd);

# Selecionar as gravadoras que tem cd (sem repetir - distinct)
select distinct g.grav_nome
from gravadora g inner join cd c
on g.grav_codigo = c.grav_codigo;

#Quais os CDs que têm o preço igual ao menor preço de cada gravadora?
Select cd_codigo, cd_nome, cd_preco_venda
from CD
where cd_preco_venda in
(select min(cd_preco_venda)
from CD
group by grav_codigo);

#Quais os CDs que têm preço inferior a qualquer um dos cds da gravadora com código 1?
Select cd_codigo, cd_nome, cd_preco_venda
From CD
Where cd_preco_venda < any (
Select cd_preco_venda
From CD
Where grav_codigo=1);

#Quais os CDs que têm preço superior a qualquer um dos cds da gravadora com código 1?
Select cd_codigo, cd_nome, cd_preco_venda
From CD
Where cd_preco_venda > any (
Select cd_preco_venda
From CD
Where grav_codigo=1);

#Quais CDs têm o preço de venda menor que todas as médias de preços de vendas por gravadoras?
Select cd_codigo, cd_nome, cd_preco_venda
from CD
where cd_preco_venda < ALL (
select AVG(cd_preco_venda)
from CD
group by grav_codigo);


'''
#Expressão CASE

SINTAXE:

SELECT colunas,
CASE
WHEN condição THEN ação
...
[ELSE condição padrão]
END
FROM tabela
'''
#Calcular desconto sobre o preço de venda dos CDs em função do preço. - CASE SELECT
SELECT cd_nome, cd_preco_venda,
CASE
WHEN cd_preco_venda < 10 then cd_preco_venda * 0.10
WHEN cd_preco_venda >=10 and cd_preco_venda < 13 then cd_preco_venda * 0.20
ELSE cd_preco_venda * 0.30
END VENDA
FROM CD;

# CASE - UPDATE
#para funcionar entrar 'Edit' - 'Preferences' -'SQL Editor' - Deselecionar 'Safe Updates' (final da página)
UPDATE CD SET cd_preco_venda =
CASE
WHEN cd_preco_venda < 10 then cd_preco_venda * 1.10
WHEN cd_preco_venda >=10 and cd_preco_venda < 13 then cd_preco_venda * 1.20
ELSE cd_preco_venda * 1.30
END;
Commit;