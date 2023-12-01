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


function App() {
  
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/u/:id" element={<BasePage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
