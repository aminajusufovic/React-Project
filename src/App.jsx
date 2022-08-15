import "./App.css";
import { Routes, Route, Link } from 'react-router-dom';
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
//vahid je nesto uradio
function App() {
  return <div>
    <Nav/>

    <Routes>
      <Route path={"/"} element={<Home/>} />
      <Route path={"/about"} element={<About/>} />
      <Route path={"/products"} element={<div>Products</div>} />
    </Routes>
  </div>;
}

export default App;
