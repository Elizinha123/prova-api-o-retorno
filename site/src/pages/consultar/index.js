import { Link } from 'react-router-dom';
import { consultar } from '../../api/petApi'
import {useState, useEffect} from 'react';

export default function Index() {
    const [pet, SetPet] = useState([]);

   
    async function consultar(){
        const r = await consultar();
        SetPet(r);
    }

    useEffect(() =>  {
        consultar();
    }, [])


return (
    <main> 
         <div>
    <h1> consultar pet</h1>
      
    <table>
        <thead> 
           <tr>
         <th>ID</th>
         <th>NOME</th>
           </tr>
        </thead>
        <tbody>
            {pet.map(item =>
            <tr>
                <td>{item.id}</td>
                <td>{item.nome}</td>
            </tr> )}
        </tbody>
    </table>
    </div>
   </main>
    
)
  }
