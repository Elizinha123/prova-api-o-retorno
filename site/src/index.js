import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CadastrarPet from './pages/cadastrarPet/index.js';
import Consultar from './pages/consultar/index.js';
import Home from './pages/home';
import { BrowserRouter, Routes, Route} from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
     <Route path= '/' element= {<Home/>} ></Route>
     <Route path= '/cadastrarPet' element= {<CadastrarPet/>} />
     <Route path= '/consultar' element= {<Consultar/>} />
   </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);

