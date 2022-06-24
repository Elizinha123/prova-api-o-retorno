
import './App.css';
import { Link} from 'react-router-dom';

function App() {
  return (
    <div>
    <h1>pet</h1>
    <Link to= '/cadastrarPet'>Cadastrar Pet</Link>
    <Link to= '/consultar'>Consultar</Link> 
    </div>
  );
}

export default App;
