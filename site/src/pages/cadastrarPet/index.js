import { Link} from 'react-router-dom'
import { useState } from 'react'
import {cadastrarPet} from '../../api/petApi';

export default function Index()  {
     const [nome, SetNome] = useState('');
     

   async function salvarClick(){
     try{
         const pet = await cadastrarPet(nome);
         alert('pet cadastrado');
        
     } 
     catch (err) {
       alert.error(err.message)

   }

}


return(
    <main>
        <div>
        <h1> Cadastrar pet </h1>

        <button onClick={salvarClick} ></button>
        <input value= {nome} onChange={e => SetNome(e.target.value) } />
        <Link to='/home'>voltar</Link>
        </div>
    </main>
)
}
