import { Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import {cadastrarPet} from '../../api/petApi';
import { Link, useNavigate } from 'react-router-dom';
export default function Index()  {
     const [nome, SetNome] = useState('');
     const navigate = useNavigate();




   async function salvarClick(){
     try{
         const pet = await cadastrarPet(nome);
         alert('pet cadastrado')
        
     } 
     catch (err) {
        if (err.response)
            alert(err.response.data);

   }

}


return(
    <main>
        <div>
        <h1>Cadastrar pet </h1>
        </div>
        <div>
            <Link to='/consultar' >consultar</Link>
            <button onClick={salvarClick} ></button>
        </div>
        <div>
            <p> 
                <input value= {nome} onChange={e => SetNome(e.target.value) } />
            </p>
        </div>
    </main>
)
}
