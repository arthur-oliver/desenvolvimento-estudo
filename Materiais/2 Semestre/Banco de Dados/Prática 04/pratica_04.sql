#PRÁTICA 04 (TRIGGERS)
#NOME: ARTHUR ÓLIVER ROSSI ALVES - DSM 2

use rh;

-- Exercício 1
-- Descrição: Inicializar o atributo derivado dep_total_sal na tabela departamento.

UPDATE departamento d
SET dep_total_sal = (
SELECT COALESCE(SUM(f.fun_sal), 0)
FROM funcionario f
WHERE f.dep_id = d.dep_id
);

-- Exercício 2
-- Descrição: Criar um trigger para atualizar o total de salários do departamento quando ocorrer a inserção de um novo funcionário.

DELIMITER $$

CREATE TRIGGER inserir_funcionario
AFTER INSERT ON funcionario
FOR EACH ROW
BEGIN
UPDATE departamento
SET dep_total_sal = dep_total_sal + NEW.fun_sal
WHERE dep_id = NEW.dep_id;
END$$

DELIMITER ;

-- Teste do trigger

INSERT INTO funcionario
VALUES (7,'Carlos',2000.00,1);

SELECT * FROM departamento;

-- Exercício 3
-- Descrição: Criar um trigger para atualizar o total de salários quando ocorrer uma alteração salarial de um funcionário.

DELIMITER $$

CREATE TRIGGER alterar_salario
AFTER UPDATE ON funcionario
FOR EACH ROW
BEGIN
IF NEW.dep_id = OLD.dep_id AND NEW.fun_sal <> OLD.fun_sal THEN
UPDATE departamento
SET dep_total_sal = dep_total_sal + (NEW.fun_sal - OLD.fun_sal)
WHERE dep_id = NEW.dep_id;
END IF;
END$$

DELIMITER ;

-- Teste do trigger

UPDATE funcionario
SET fun_sal = 2500.00
WHERE fun_cod = 7;

SELECT * FROM departamento;

-- Exercício 4
-- Descrição: Criar um trigger para atualizar o total de salários quando ocorrer uma mudança de departamento de um funcionário.

DELIMITER $$

CREATE TRIGGER mudar_departamento
AFTER UPDATE ON funcionario
FOR EACH ROW
BEGIN
IF NEW.dep_id <> OLD.dep_id THEN
UPDATE departamento
SET dep_total_sal = dep_total_sal - OLD.fun_sal
WHERE dep_id = OLD.dep_id;

	UPDATE departamento
	SET dep_total_sal = dep_total_sal + NEW.fun_sal
	WHERE dep_id = NEW.dep_id;
END IF;

END$$

DELIMITER ;

-- Teste do trigger

UPDATE funcionario
SET dep_id = 2
WHERE fun_cod = 7;

SELECT * FROM departamento;

-- Exercício 5
-- Descrição: Criar um trigger para atualizar o total de salários quando ocorrer a remoção de um funcionário.

DELIMITER $$

CREATE TRIGGER remover_funcionario
AFTER DELETE ON funcionario
FOR EACH ROW
BEGIN
UPDATE departamento
SET dep_total_sal = dep_total_sal - OLD.fun_sal
WHERE dep_id = OLD.dep_id;
END$$

DELIMITER ;

-- Teste do trigger

DELETE FROM funcionario
WHERE fun_cod = 7;

SELECT * FROM departamento;

-- Exercício 6
-- Descrição: Visualizar os triggers criados.

SHOW TRIGGERS;

-- Visualizar os departamentos e seus totais de salários.

SELECT * FROM departamento;