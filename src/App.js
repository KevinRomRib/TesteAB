import NavBar from "./components/NavBar/NavBar";

import PageA from "./components/pages/PageA/PageA";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PageB from "./components/pages/PageB/PageB";
import { useState } from "react";

function App() {

  const [tipo, setTipo] = useState('mulher')

  return (
    <div className="App">
      <NavBar tipo={tipo} />
      {tipo === 'homem' ? <PageA /> : tipo === 'mulher' ? <PageB /> : null }
      <ToastContainer/>
    </div>
  );
}

export default App;
