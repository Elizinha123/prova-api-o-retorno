import { Link} from 'react-router-dom'
import { useState } from 'react'
import {cadastrarPet} from '../../api/petApi';

export default function Index()  {
     const [nome, SetNome] = useState('');
     

   async function salvarClick(){
     
         const pet = await cadastrarPet(nome);
         alert('pet cadastrado');
        
    
}


return(
    <main>
        <div>
        <h1> Cadastrar pet </h1>

       
        <input type='text' onChange={e => SetNome(e.target.value) } />
        <button onClick={salvarClick}> CADASTRAR  </button> <br/>
         < Link to='/'>VOLTAR</Link>
        
        </div>
    </main>
)
}
