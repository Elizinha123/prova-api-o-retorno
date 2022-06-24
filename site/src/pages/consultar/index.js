import { Link, useNavigate } from 'react-router-dom';
import { consultar } from '../../api/petApi'
import {useState, useEffect} from 'react';

export default function Index() {
    const [pet, SetPet] = useState([]);
    const navigate = useNavigate();
    async function consultar(){
        const r = await pet();
        SetPet(r);
    }

    useEffect(() =>  {
        consultar()
    }, [])


return (
    <main> 
         <div>
    <h1> consultar pet</h1>
        </div>
    <table>
        <thead> 
            <tr>
         <th> id</th>
         <th>nome</th>
         </tr>
        </thead>
        <tbody>
            {pet.map(item =>
            <tr>
                <td>{Item.id}</td>
                <td>{item.nome}</td>
            </tr> )}
        </tbody>
    </table>
   </main>
    
)
  }
