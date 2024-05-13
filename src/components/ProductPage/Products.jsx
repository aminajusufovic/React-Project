import React, { useEffect, useState } from 'react'
import App from '../../App'
import ProductCard from './ProductCard';
import AsideProduct from "./AsideProduct"
// <<<<<<< HEAD
import productsData from "../../App"
import SortProduct from './SortProduct';



function Products({productsData}) {
  
  return (
    <div>
    <div className='home-products'>
        <h1>Home / Products</h1>
        </div> 
        <div className='product-donji-div' >   
        <aside className='product-aside'>
            <AsideProduct productsData= {productsData} />
        </aside>
        <div>
        <section className='product-sort-section'>
          <SortProduct/>
        </section>
        <div className='product-content'>
         {
          productsData.map((product) => {
         return <ProductCard key={product.id} {...product}/>
         })
          }
        </div>
        </div>
        </div>
        
    </div>
  )
}

export default Products