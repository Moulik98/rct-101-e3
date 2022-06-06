
import { Routes,Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="products/*" element={<Products/>}></Route>
          
        </Routes>
      
    </div>
  );
}

export default App;
