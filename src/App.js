import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import PageHome from './components/pages/Home/pageHome';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<PageHome />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
