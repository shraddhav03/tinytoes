import { Routes,Route} from 'react-router'
import MockAPI from './Mockman/Mockman'

import "./App.css";
import logo from "./logo.png";


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/mockman" element={<MockAPI/>} />
      </Routes>
      
    </div>
  );
}

export default App;
