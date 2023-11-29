import NavBar from "./components/NavBar/NavBar";

import PageA from "./components/pages/PageA/PageA";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <PageA />
      <ToastContainer/>
    </div>
  );
}

export default App;
