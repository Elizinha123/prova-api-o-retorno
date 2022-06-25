USE petDB;

INSERT INTO tb_pet(ID_PET, NM_PET)
VALUES(1, "chicotinha");

SELECT ID_PET    id,
             nm_pet        nome
         FROM tb_pet;
