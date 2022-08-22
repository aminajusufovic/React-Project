
// function AddCart({Cart},{Quantity}){
// const {id,image,colors,price,name}=Cart
// const {Quantity}=Quantity;
// const[cena,Setcena]=useState(price);
// return(
//  <div className="cart-kocka">
//  <ul>
//   <li><img src={image} alt="" /> {name} {colors}
//   </li>
//   <li>{price}</li>
//   <li>{Quantity}</li>
//   <li>SetCena(cena*{Quantity})</li>
//  </ul>
// </div>
// )
// }
import React from "react"
import { useState } from 'react';

function Cart({prop, quantity}){
console.log(quantity);
console.log(prop)
const {id,image,colors,price,name}=prop;
 var korpa=[]
 var postoji=0
 var storaniID=0
 if(korpa.length==0){
  korpa.push(prop)
 }
 else{
  for(var i=0;i<korpa.length;i++){
   if(korpa[i].id==prop.id){
    postoji++
    storaniID=i
   }
  }
  if(postoji==0){
korpa.push(prop)
  }
  else{
   korpa[storaniID].price+=prop.price*quantity
  }
 }
 return <div>
<ul>
 <li>{korpa[storaniID].image} {korpa[storaniID].name} Color:{korpa[storaniID].colors}</li>
 <li>{korpa[storaniID].price}</li>
 <li>{korpa[storaniID].price}/{prop.price}</li>
 <li>{korpa[storaniID].price}</li>
</ul>
 </div>
}
export default Cart