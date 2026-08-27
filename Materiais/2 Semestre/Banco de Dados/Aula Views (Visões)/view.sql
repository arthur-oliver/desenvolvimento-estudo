# --------------------------------------------------------------
# AULA - TEMA: "VIEW (Visões)"

# Tabela virtual ou lógica na qual os dados não estão fisicamente armazenados.
# Ela é apenas uma visão de um grupo de colunas de uma ou mais tabelas do banco.
# Os dados podem ser vistos ou alterados.
# --------------------------------------------------------------

#CRIANDO SCHEMA
# create database view;
# use view;

#CRIANDO TABELA
create table medico
(med_codigo int primary key auto_increment,
med_nome varchar(30),
med_salario decimal (10,2));

# --------------------------------------------------------------

#CRIANDO VIEW
create view medico_view
as select med_codigo, med_nome
from medico;

# VERIFICAR O QUE FOI GUARDADO EM VIEW
desc medico_view;

#CONSULTAR TODAS A VIEW NO DICIONÁRIO DE DADOS
select * from
information_schema.views
where table_schema = 'view' and table_name = 'medico_view';

#EXIBIR TODAS AS VIEWS EXISTENTES
show full tables in view where
table_type like 'VIEW';

#ALTERNADO A DEFINIÇÃO DA VIEW
create or replace view medico_view (Código, Medico)
as select med_codigo, med_nome
from medico;