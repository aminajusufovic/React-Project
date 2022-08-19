import React from 'react'
import { Link } from 'react-router-dom';

function SingleProduct(props) {
    const { id, category, company, description, image, name, price, shipping, colors } = props.singleProduct;
    return (
        <main className="single-product-container">
            <div className="single-products-nav">
                <Link className="single-products-link" to="/"><h3 id="link-color">Home</h3></Link>
                <Link className="single-products-link" to="/products"><h3 id="link-color">/  Products</h3></Link>
                <h3>/ {name}</h3>
            </div>

            <div className="single-product-back">
                <Link to="/products"><button>BACK TO PRODUCTS</button></Link>
            </div>

            <div className="single-product-card">
                <div className="single-product-image">
                    <img src={image} alt={name} />
                </div>

                <div className="single-product-text">
                    <h1>{name.toUpperCase()}</h1>
                    <div className="single-product-reviews">******</div>
                    <h4 id="single-price">${price / 100}</h4>
                    <br />
                    <p id="single-description">{description}</p>
                    <div className="single-left">
                        <div className="single-text-left">
                            <h4>Available:</h4>
                        </div>
                        <p>In Stock</p>
                    </div>

                    <div className="single-left">
                        <div className="single-text-left">
                            <h4>SKU:</h4> 
                        </div>
                        <p>{id}</p>
                    </div>

                    <div className="single-left">
                        <div className="single-text-left">
                            <h4>Brand:</h4>
                        </div>
                        <p>{company}</p>
                    </div>
                    <div className="single-border"></div>
                </div>
            </div>
        </main>
    )
}

export default SingleProduct