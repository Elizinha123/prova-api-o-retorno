import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CadastrarPet from './pages/cadastrarPet';
import Consultar from './pages/consultar';
import Home from './pages/home'
import { BrowserRouter, Routes, Route} from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
     <Route path= '/home' element= {<Home/>} ></Route>
     <Route path= '/cadastrarPet' element= {<CadastrarPet/>} ></Route>
     <Route path= '/consultar' element= {<Consultar/>} ></Route> 
    </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);

