-- EXERCÍCIOS
use clientes;

/*
1) Crie um procedimento para registrar um cliente, 
chamado InserirCliente que receba os seguintes parâmetros:
•p_nome VARCHAR(30)
•p_endereco VARCHAR(30)
•p_cidade VARCHAR(30)
•p_cep VARCHAR(10)
•p_estado VARCHAR(2)
•p_cpf VARCHAR(11)
 Depois de criado o procedimento, execute uma chamada para adicionar o seguinte 
cliente:
• Nome: Carla
• Endereço: Rua das Flores, 123
• Cidade: Campinas
• CEP: 13010100
• Estado: SP
• CPF: 99988877766

2) Crie um procedimento para regristrar um cliente, chamado InserirClienteSeguro 
que receba os seguintes parâmetros:
•p_nome VARCHAR(30)
•p_endereco VARCHAR(30)
•p_cidade VARCHAR(30)
•p_cep VARCHAR(10)
•p_estado VARCHAR(2)
•p_cpf VARCHAR(11)
O procedimento deve:
1.Verificar se já existe um cliente com o mesmo CPF na tabela cliente.
2.Se o CPF já existir, o procedimento não deve inserir o cliente e deve exibir
a mensagem: 'CPF já cadastrado.'
3.Se o CPF não existir, o procedimento deve realizar a inserção normalmente.
Depois de criado o procedimento, faça uma chamada com os dados:
•Nome: Carlos
•Endereço: Rua Central, 321
•Cidade: Fortaleza
•CEP: 60060000
•Estado: CE
•CPF: 11111111111 (esse CPF já está presente na tabela, então a mensagem de erro deve aparecer
*/

-- RESOLUÇÃO

-- EXERCÍCIO 1

DELIMITER $$
CREATE PROCEDURE InserirCliente(
    IN p_nome VARCHAR(30),
    IN p_endereco VARCHAR(30),
    IN p_cidade VARCHAR(30),
    IN p_cep VARCHAR(10),
    IN p_estado VARCHAR(2),
    IN p_cpf VARCHAR(11)
)
BEGIN
    INSERT INTO cliente (cli_nome, cli_endereco, cli_cidade, cli_cep, cli_estado, cli_cpf)
    VALUES (p_nome, p_endereco, p_cidade, p_cep, p_estado, p_cpf);
END $$
DELIMITER ;

CALL InserirCliente(
    'Carla',
    'Rua das Flores, 123',
    'Campinas',
    '13010100',
    'SP',
    '99988877766'
);
select * from cliente
where cli_nome = 'Carla';

-- EXERCÍCIO 2

-- 2) Criar procedimento seguro para registrar um cliente

DELIMITER $$
CREATE PROCEDURE InserirClienteSeguro(
    IN p_nome VARCHAR(30),
    IN p_endereco VARCHAR(30),
    IN p_cidade VARCHAR(30),
    IN p_cep VARCHAR(10),
    IN p_estado VARCHAR(2),
    IN p_cpf VARCHAR(11)
)
BEGIN
    DECLARE v_existe INT DEFAULT 0;

    SELECT COUNT(*)
    INTO v_existe
    FROM cliente
    WHERE cli_cpf = p_cpf;

    IF v_existe > 0 THEN
        SELECT 'CPF já cadastrado.' AS mensagem;
    ELSE
        INSERT INTO cliente (
            cli_nome,
            cli_endereco,
            cli_cidade,
            cli_cep,
            cli_estado,
            cli_cpf
        )
        VALUES (
            p_nome,
            p_endereco,
            p_cidade,
            p_cep,
            p_estado,
            p_cpf
        );
    END IF;
END $$

DELIMITER ;

CALL InserirClienteSeguro(
    'Carlos',
    'Rua Central, 321',
    'Fortaleza',
    '60060000',
    'CE',
    '11111111111'
);
CALL InserirClienteSeguro(
    'Carlos',
    'Rua Central, 321',
    'Fortaleza',
    '60060000',
    'CE',
    '01234567891'
);
select * from cliente
where cli_nome = 'Carlos';