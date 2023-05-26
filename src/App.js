import { Routes,Route} from 'react-router'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import logo from "./logo.png";
import MockAPI from './Mockman/Mockman'
import { Login } from "./Pages/Login/Login";
import { Home } from "./Pages/Home/Home"
import { Header } from "./Components/Header/Header"


function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mockman" element={<MockAPI/>} />
      </Routes>
      
    </div>
  );
}

export default App;
