create database bdpratica05;
use bdpratica05;

CREATE TABLE funcionario
(func_id int primary key auto_increment,
func_nome varchar(50) not null,
func_cpf varchar(11) unique,
func_salario decimal (4,2)  check (func_salario > 1000),
func_end varchar(252),
func_sexo char(1) check (func_sexo in('F','M')),
super_id int,
depart_id int,
foreign key(super_id) references funcionario(func_id),
foreign key(depart_id) references departamento(depart_id));

CREATE TABLE departamento
(depart_id int primary key auto_increment,
depart_nome varchar(50) not null,
depart_data_inicial date);

CREATE TABLE dependente
(dep_nome varchar(100) not null,
dep_parentesco varchar(30) not null check (dep_parentesco in('PAI', 'MÃE', 'IRMAOS', 'FILHO')),
dep_data_nasc date,
func_id int,
dep_seq  int,
foreign key(func_id) references funcionario (func_id),
primary key(func_id,dep_seq));

CREATE TABLE participa
(part_horas varchar(50),
func_id int,
pro_id int,
primary key(func_id,pro_id));

CREATE TABLE projeto
(pro_id int primary key auto_increment,
pro_titulo varchar(50) not null,
pro_descricao varchar(252),
pro_data_cad date default(current_date()),
depart_id int,
foreign key(depart_id) references departamento(depart_id));

CREATE TABLE localizacao
(local_id int primary key  auto_increment,
depart_id int,
foreign key(depart_id) references departamento(depart_id));




