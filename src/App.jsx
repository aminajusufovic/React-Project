import "./App.css";
import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/ProductPage/Products";
import Korpa from "./components/Korpa"
import Cart from "./components/Cart"
import Loading from "./components/Loading";
import SingleProduct from "./components/ProductPage/SingleProduct";
const url = "https://course-api.com/react-store-products"
//https://github.com/john-smilga/react-course-comfy-sloth-store
function App(props) {

  const [productsData, setProductData] = useState();
  const [loading, setLoading] = useState(true);
  const [cartData, setCartData] = useState();
  const [quantity, setQuantity] = useState();


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


const addToCart = (data) => {
  setCartData(data)
}


const quantityData = (data) => {
setQuantity(data)
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
      <Route path={"/products"} element={<Products productsData= {productsData} />} />
      {/* <Route path={"/Korpa"} element={<Korpa/>}/> */}

      {productsData.map((singleProduct) => {
        return <Route path={`/products/${singleProduct.id}`} 
        element={<SingleProduct singleProductId={singleProduct.id} addToCart={addToCart} quantity={quantityData} />} />
      })}
      {<Route path={"/Korpa"} element={<Korpa prop={cartData} quantity={quantity}/>}/> }
    </Routes>
  </div>;
}

export default App;
