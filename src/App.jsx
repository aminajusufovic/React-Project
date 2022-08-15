import "./App.css";
import { Routes, Route, Link } from 'react-router-dom';
import Nav from "./components/Nav";

function App() {
  return <div>
    <Nav/>

    <Routes>
      <Route path={"/"} element={<div>Home</div>} />
      <Route path={"/about"} element={<div>About</div>} />
      <Route path={"/products"} element={<div>Products</div>} />
    </Routes>
  </div>;
}

export default App;
