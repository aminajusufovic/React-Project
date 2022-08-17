import React from 'react'
import { Link } from 'react-router-dom';

function SingleProduct(singleProduct) {
    const { id, category, company, description, image, name, price, shipping, colors } = singleProduct.singleProduct;
    console.log(singleProduct.singleProduct);
    //     category: "office"
    // colors: (3) ['#ff0000', '#00ff00', '#0000ff']
    // company: "marcos"
    // description: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge"
    // id: "recZkNf2kwmdBcqd0"
    // image: "https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160?ts=1660684024&userId=usrQMwWEPx18KgLcP&cs=72c50e36cc2728bc"
    // name: "accent chair"
    // price: 25999
    // shipping: true
    return (
        <main className="single-product-container">
            <div className="single-product-back">
                <Link to="/products"><button>BACK TO PRODUCTS</button></Link>
            </div>

            <div className="single-product-card">
                <div className="single-product-image">
                    <img src={image} alt={name} />
                </div>

                <div className="single-product-text">
                    <h1>{name}</h1>
                    <div className="single-product-reviews">******</div>
                    <h4>{price}</h4>
                    <br />
                    <p>{description}</p>
                    <div className="single-product-available">
                        Available :  nestoo
                    </div>
                    <div className="single-product-id">
                        SKU:     {id}
                    </div>
                    <div className="single-product-brand">
                        Brand: {company}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SingleProduct