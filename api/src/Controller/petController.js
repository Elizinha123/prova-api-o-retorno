import { inserirpet, listarPet} from './Repository/petRepository.js';

import { Router } from "express";
const server = Router();

server.post('/pet' , async (req, resp) => {
    try{
       const passarinho = req.body;

       if(!passarinho.nome)
          throw new Error ('Nome do pet é obrigatorio');

        const petinserido = await inserirpet(passarinho);
        resp.send(petinserido)

    }catch(err) {
        resp.status(400).send({
            Erro: err.message
        });
    }
})

server.get('/pet') , async (req, resp) => {
    try{
        const petlindinho = await listarPet();
        resp.send(petlindinho);
 
    } catch(err) {
        resp.status(404).send({
            Erro: err.message
        });
    }
}

export default server;