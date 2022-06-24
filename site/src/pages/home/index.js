import { Link} from 'react-router-dom';

export default function Index() {
  return (
    <div>
    <h1>pet</h1>
    <Link to= '/cadastrarPet'>Cadastrar Pet</Link>
    <Link to= '/consultar'>Consultar</Link> 
    </div>
  )
}
