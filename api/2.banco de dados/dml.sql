USE petDB;


INSERT INTO tb_usuario (nm_pet)
     VALUES ('chicotinha');
     
SELECT *
   FROM tb_usuario
   WHERE nm_pet = 'chicotinha';


SELECT id_usuario    id,
       nm_pet        nome
 FROM tb_usuario;