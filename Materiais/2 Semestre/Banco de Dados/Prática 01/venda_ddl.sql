CREATE DATABASE VENDA2;
USE VENDA2;
-- =========================================
-- TABELA CLIENTE
-- =========================================
CREATE TABLE cliente (
    cli_codigo        int PRIMARY KEY,
    cli_nome          VARCHAR(100) NOT NULL,
    cli_cpf           VARCHAR(11) NOT NULL UNIQUE,
    cli_lograudouro   VARCHAR(30) NOT NULL,
    cli_cidade        VARCHAR(30) NOT NULL,
    cli_cep           VARCHAR(10) NOT NULL,
    cli_estado        VARCHAR(2) NOT NULL,
    cli_bairro        VARCHAR (20) NOT NULL
);



-- =========================================
-- TABELA VENDEDOR
-- =========================================
CREATE TABLE vendedor (
    ven_codigo        INT PRIMARY KEY,
    ven_nome          VARCHAR(100) NOT NULL,
    ven_salario_fixo  DECIMAL(10,2) NOT NULL
);

-- =========================================
-- TABELA PRODUTO
-- =========================================
CREATE TABLE produto (
    pro_codigo            INT PRIMARY KEY,
    pro_descricao         VARCHAR(100) NOT NULL,
    pro_valor_unidade     DECIMAL(10,2) NOT NULL,
    CONSTRAINT chk_pro_valor CHECK (pro_valor_unidade > 0),
    pro_quantidade        INT
);

-- =========================================
-- TABELA PEDIDO
-- =========================================
CREATE TABLE pedido (
    ped_numero        INT PRIMARY KEY,
    ped_data          DATE NOT NULL,
    cli_codigo        INT NOT NULL,
    ven_codigo        INT NOT NULL,
    ped_valor_total   DECIMAL(10,2),
    ped_prazo_entrega INT,
    CONSTRAINT fk_pedido_cliente FOREIGN KEY (cli_codigo)
        REFERENCES cliente(cli_codigo),
        
    CONSTRAINT fk_pedido_vendedor FOREIGN KEY (ven_codigo)
        REFERENCES vendedor(ven_codigo)
);

-- =========================================
-- TABELA ITEM DO PEDIDO
-- =========================================
CREATE TABLE item_pedido (
    ped_numero        INT,
    pro_codigo        INT,
    item_quantidade   INT NOT NULL,
    item_valor        DECIMAL(10,2),
    PRIMARY KEY (ped_numero, pro_codigo),
    
    CONSTRAINT fk_item_pedido FOREIGN KEY (ped_numero)
        REFERENCES pedido(ped_numero),
        
    CONSTRAINT fk_item_produto FOREIGN KEY (pro_codigo)
        REFERENCES produto(pro_codigo),
        
    CONSTRAINT chk_item_quantidade CHECK (item_quantidade > 0)
);

-- =========================================
-- TABELA PAGAMENTO 
-- =========================================
CREATE TABLE pagamento (
    pag_codigo        INT,
    ped_numero        INT NOT NULL,
    pag_tipo          VARCHAR(30) NOT NULL,
    pag_valor         DECIMAL(10,2) NOT NULL,
        CONSTRAINT fk_pagamento_pedido FOREIGN KEY (ped_numero)
        REFERENCES pedido(ped_numero),
        
    CONSTRAINT chk_pag_valor CHECK (pag_valor > 0),
    PRIMARY KEY(pag_codigo, ped_numero)
);

CREATE TABLE telefone (
    tel_codigo      INT,
    cli_codigo      INT NOT NULL,
    tel_numero      VARCHAR(15) NOT NULL,
    tel_tipo        VARCHAR(20),
    
    CONSTRAINT fk_telefone_cliente FOREIGN KEY (cli_codigo)
        REFERENCES cliente(cli_codigo),
        
    CONSTRAINT pk_telefone primary key (cli_codigo, tel_codigo),
    
    CONSTRAINT chk_tel_tipo CHECK (tel_tipo IN ('Residencial', 'Celular', 'Comercial'))
);