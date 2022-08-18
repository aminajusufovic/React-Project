import React, { useEffect, useState } from 'react'
import App from '../../App'
import ProductCard from './ProductCard';
import AsideProduct from "./AsideProduct"
// <<<<<<< HEAD



//vahid poceo
//nesto
// >>>>>>> 3fe28932acf93ee7fa21f73a7a2dbad4eef0b123
function Products({productsData}) {
  return (
    <div>
    <div className='home-products'>
        <h1>Home / Products</h1>
        </div> 
        <div className='product-donji-div' >   
        <aside className='product-aside'>
            <AsideProduct/>
        </aside>
        <div className='product-content'>
         {
          productsData.map((product) => {
         return <ProductCard key={product.id} {...product}/>
         })
          }
        </div>
        </div>
        
    </div>
  )
}

export default Products