
create database politica;
use politica;

create table partido
(idPartido int  primary key auto_increment,
 siglaPartido char(4),
 descricaoPartido varchar(30));


insert into partido (siglaPartido,descricaoPartido)
values ('AA', 'AAAAA'),
       ('BB', 'BBBB'),
       ('CC', 'CCCC');


create table Sessao
(idSessao int primary key auto_increment,
 dataSessao date);
    
              
  insert into Sessao (dataSessao) values (str_to_date('07-10-2000','%d-%m-%Y'));
  insert into Sessao (dataSessao) values (str_to_date('07-4-2025','%d-%m-%Y'));
  insert into Sessao (dataSessao) values (str_to_date('07-5-2025','%d-%m-%Y'));
   insert into Sessao (dataSessao) values (str_to_date('12-6-2025','%d-%m-%Y'));
     


create table deputado
(idDeputado int primary key auto_increment,
 idPartido int,
 nomeDeputado varchar(30),
 foreign key(idPartido) references Partido(idPartido));

insert into deputado (idPartido,nomeDeputado)
values (1,'Paulo'),
       (2,'Mario'),
       (3,'Laura'),
       (3,'Joana'),
       (3,'Carla');
       
    
create table participacao
(idSessao int,
idDeputado int,
primary key(idSessao,idDeputado),
foreign key (idSessao) references Sessao(idSessao),
foreign key (idDeputado) references Deputado (idDeputado));

insert into participacao
values (1,1),
       (1,2),
       (1,3),
       (2,1),
       (2,3);
       
-- ---------------------------------- / EXERCÍCIOS / ----------------------------------

select d.nomeDeputado , p.siglaPartido
from deputado d inner join partido p
where d.idPartido = p.idPartido;

select p.siglaPartido, count(*) as quantDeputado
from partido p inner join  deputado d
on p.idPartido = d.idPartido
group by siglaPartido;

select p.idSessao,
count(p.idDeputado) as quant_deputado
from participacao p
group by p.idSessao
order by quant_deputado desc
limit 3;