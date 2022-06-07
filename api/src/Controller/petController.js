import { Router} from "express"
const server = Router();
import { inserirpet, consultarpet} from "./Repository/petRepository.js"


server.get('/inserirpet' , (req, resp) => {
    try{
       const passarinho = req.body;

       if(!passarinho.nome)
          throw new Error ('Nome do pet é obrigatorio');

        const petinserido = await inserirpet(passarinho);
        resp.send(petinserido)

    }catch(err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.post('/')

export default server;