import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import petController  from './Controller/petController.js'


const server = express();
server.use(cors());
server.use(express.json);
server.use(petController);





server.listen(process.env.PORT, () => console.log ( ` API CONECTADA NA PORTA  ${process.env.PORT} `));
