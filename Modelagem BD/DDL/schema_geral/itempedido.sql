create database venda;
use venda;

CREATE TABLE cliente
(cli_id int primary key auto_increment,
cli_nome varchar(30),
cli_cpf varchar(11) unique,
cli_datanasc date,
cli_ativo int default 1);

insert into cliente(cli_nome,cli_cpf,cli_datanasc) 
values ('João','111','2003-10-4'), 
	   ('Maria','112','2001-10-10'),
       ('Ana','123','1979-5-5');
select * from cliente;       

CREATE TABLE pedido
(ped_id int primary key,
ped_valor decimal(8,2),
ped_data date,
cli_id int,
foreign key(cli_id) references cliente(cli_id));

INSERT INTO pedido(ped_id,ped_valor,ped_data,cli_id)
VALUES (1,5.98,'2024-08-10',1),
	   (2,4.49,'2024-09-19',2),
	   (3,4.00,'2024-09-19',3),
       (4,0.00,'2024-09-19',1);
select * from pedido;     


CREATE TABLE produto
(pro_id int primary key,
pro_nome varchar(30),
pro_valor decimal(8,2),
pro_quant int);

INSERT INTO produto(pro_id,pro_nome,pro_valor,pro_quant)
VALUES (1,'Caneta','2.99','201'),
	   (2,'Lápis','1.50','305'),
       (3,'Borracha','2.00','120');
 select * from produto;      

CREATE TABLE itempedido
(pro_id int,
ped_id int,
item_quant int,
item_valor decimal(8,2),
foreign key(ped_id) references pedido(ped_id),
foreign key(pro_id) references produto(pro_id),
primary key(ped_id,pro_id));

INSERT INTO itempedido(item_quant,item_valor,ped_id,pro_id)
VALUES (2,2.99,1,1),
	   (1,2.99,2,1),
       (1,1.50,2,2),
       (2,2.00,3,3);
select * from itempedido;     



