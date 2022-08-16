import React from 'react'

function ProductCard({name, id, price, image}) {
  return (
   <div className="product-card">
    <img src={image} alt={name} />
    <div className="product-card-text">
        <div className="product-card-name">
            <p>{name}</p>
        </div>
        <div className="product-card-price">
            <p id="price">${price/100}</p>
        </div>
    </div>
   </div>
  )
}

export default ProductCard