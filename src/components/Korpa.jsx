import Cart from "./Cart"
function Korpa({prop,quantity}){
  console.log(prop);
 return(
  
  <div className="k-main">
<div className="k-head"><h3 className="k-h-boja">Home </h3><h3> / Cart</h3></div>
<div className="h-shop">
 <ul>
  <li> item </li>
<li> price </li>
<li> quantity</li>
<li>Subtotal</li>
 </ul>
<Cart prop={prop} quantity={quantity}/>
</div>
<div className="k-total">
<div className="k-total-1">
 <h3>Subtotal:</h3> <h3>$257.53</h3>
 <h3>Shipping Fee:</h3> <h3 className="pomeraj">$5.28</h3>
</div>
<div className="k-total-2">
 <h2>Order Total:</h2> <h2>$263.81</h2>
</div>

</div>
  </div>
 )
}
export default Korpa  