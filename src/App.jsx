import "./App.css";
import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/ProductPage/Products";
import Loading from "./components/Loading";
const url = "https://course-api.com/react-store-products"
//https://github.com/john-smilga/react-course-comfy-sloth-store
function App() {

  const [productsData, setProductData] = useState()
  const [loading, setLoading] = useState(true);



const fetchProductsData = async () => {
  setLoading(true);
        try {
            const response = await fetch(url);
            const productsData = await response.json();
            setLoading(false);
            setProductData(productsData);
            console.log(productsData)
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
}


useEffect(() => {
fetchProductsData();
},[])

if (loading) {
  return (
      <main>
          <Loading/>
      </main>
  )
}

  return <div>
    <Nav/>

    <Routes>
      <Route path={"/"} element={<Home/>} />
      <Route path={"/about"} element={<About/>} />
      <Route path={"/products"} element={<Products productsData= {productsData}/>} />
    </Routes>
  </div>;
}

export default App;
