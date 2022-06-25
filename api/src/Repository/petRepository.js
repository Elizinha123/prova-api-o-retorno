import { con } from './Connection.js';

export async function inserirpet(pet) {
    const comando =
     ` INSERT INTO TB_PET (nm_pet)
            VALUES (?) `
    
    const [resposta] = await con.query(comando, [pet.nome]);
    return resposta;
}

export async function listarPet() {
    const comando = 
    `SELECT id_pet   id,
             nm_pet        nome
         FROM tb_pet`
    
    const [listinha] = await con.query(comando);
    return listinha;
}