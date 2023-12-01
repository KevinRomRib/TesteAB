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


function App() {
  
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/u/:id" element={<BasePage />} />
          <Route path="/u/addVarios" element={<CadastrarVariosUsers />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
