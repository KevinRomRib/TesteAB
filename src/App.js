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
import PaginaAleatoria from './components/pages/PaginaAleatoria/PaginaAleatoria';
import NavBar from './components/NavBar/NavBar'
import Admin from './components/pages/Admin/Admin';


function App() {
  
  return (
    <Router>
      <div className='App'>
        <NavBar/>
        <Routes>
          <Route path="/fashionstore" element={<PaginaAleatoria />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );


  // return (
  //   <Router>
  //     <div className='App'>
  //       <Routes>
  //         <Route path="/" element={<PageHome />} />
  //         <Route path="/u/:id" element={<BasePage />} />
  //         <Route path="*" element={<h1>Not Found</h1>} />
  //       </Routes>
  //       <ToastContainer />
  //     </div>
  //   </Router>
  // );
}

export default App;
