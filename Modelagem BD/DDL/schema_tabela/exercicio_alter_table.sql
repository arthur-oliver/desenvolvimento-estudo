create database exercicio_alter_table;
use exercicio_alter_table;

-- CRIANDO TABELA
create table departamento
(cod_departamento int primary key,
dep_descricao varchar(30));

 -- INSERINDO NOVOS DADOS
insert into departamento values (1,'RH'), (2,'Vendas');

-- CRIANDO TABELA
create table funcionario
(fun_cod int primary key,
fun_nome varchar(30),
cod_departamento int);

 -- INSERINDO NOVOS DADOS
insert into funcionario values (101, 'Maria', 1),(102, 'João', 1),(103, 'Pedro', 1);

alter table funcionario
add constraint fk_cod_departamento
foreign key (cod_departamento)
references departamento(cod_departamento)
on delete cascade; 	-- → Exclui  automaticamente os dados dependenter da FK 'departamento'
					-- (caso for solicitado posteriormente)

delete from departamento
where cod_departamento  = 1; 	-- solicitação para apagar departamento de RH
								-- todos os funcionários do RH (cód. 1) apagarão
                                -- por conta do 'on delete cascade'

-- VISUALIZAR DADOS DAS TABELAS
select * from departamento;
select * from funcionario;