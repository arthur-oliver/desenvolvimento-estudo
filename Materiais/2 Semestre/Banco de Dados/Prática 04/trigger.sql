#Exemplo 1 – Trigger histórico_salarial
use rh;

DELIMITER $$
CREATE TRIGGER historico_salario 
AFTER UPDATE ON funcionario
FOR EACH ROW 
BEGIN
	IF NEW.fun_sal > 4000 THEN
		INSERT INTO func_log (fun_id, fun_data, novo_sal, msg) 
		VALUES (NEW.fun_cod, NOW(), NEW.fun_sal, 'Novo salário Superavaliado');
	END IF;
END$$
DELIMITER ;

 -- -------------------------------------------------------------------------------
#Ativando o Trigger histórico_salarial

UPDATE funcionario
set fun_sal = fun_sal*1.1 where fun_cod in (1,2,3,4,5);

-- -------------------------------------------------------------------------------
#Vizualizando funcionamento

select * from func_log;

-- -------------------------------------------------------------------------------
#Vizualizando Trigger criado
show triggers;

-- -------------------------------------------------------------------------------
#Exemplo 2 – Trigger Imp_altera_Salarial
DELIMITER $$
CREATE TRIGGER Imp_altera_Salarial
BEFORE UPDATE ON funcionario
FOR EACH ROW
BEGIN
DECLARE sal_diff DECIMAL(10,2);
IF NEW.fun_cod > 0 THEN
SET sal_diff = NEW.fun_sal - OLD.fun_sal;
INSERT INTO func_log (fun_id, fun_data, novo_sal, msg)
VALUES ( NEW.fun_cod, NOW(), NEW.fun_sal,CONCAT('Salário antigo: ', 
OLD.fun_sal,  ' | Novo salário: ', NEW.fun_sal, ' | Diferença: ', sal_diff)
);
END IF;
END$$
DELIMITER ;

 -- -------------------------------------------------------------------------------
#Ativando o Trigger Imp_altera_Salarial

UPDATE funcionario
set fun_sal = fun_sal*1.1 where fun_cod in (1,2,3,4,5);

-- -------------------------------------------------------------------------------
#Vizualizando funcionamento

select * from func_log;

-- -------------------------------------------------------------------------------
#Vizualizando Trigger criado
show triggers;