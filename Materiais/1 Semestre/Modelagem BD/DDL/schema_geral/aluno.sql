create table  aluno
(cod_aluno int primary key,
matricula int not null,
nome varchar(40),
CPF varchar(11),
unique(CPF));

select * from information_schema.table_constraints
where table_schema = 'venda';

describe aluno;
select * from aluno;

insert into aluno values (1,1,'José','111'),(2,1,'Ana','112');

