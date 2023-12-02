import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import PageHome from './components/pages/Home/pageHome';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BasePage from './components/pages/BasePage';
import CadastrarVariosUsers from './components/pages/CadastrarVarios/cadastrarVarios';
import NotFoundPage from './components/NotFound/notfound';
import PaginaConversao from './components/pages/Conversao/conversao';


function App() {
  
  return (
    <Router>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/u/:id" element={<BasePage />} />
          <Route path="/u/addVarios" element={<CadastrarVariosUsers />} />
          <Route path="/conversao" element={<PaginaConversao />} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
        <ToastContainer />
    </Router>
  );
}

export default App;
