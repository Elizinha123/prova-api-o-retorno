import { con } from "./Connection.js"

export async function inserirpet(pet) {
    const comando =
     ` INSERT INTO tb_usuario (nm_pet)
            VALUES (?) `
    
    const [resposta] = await con.query(comando, [pet.nome])
}