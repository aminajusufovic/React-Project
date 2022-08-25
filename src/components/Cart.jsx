
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
import { useMemo } from "react";
import { useState } from 'react';

function Cart({prop, quantity}){
console.log(quantity);
console.log(prop)
const {id,image,colors,price,name}=prop;
var korpa=[]
var postoji=0
var storaniID=0
var pomocna=prop.price*quantity
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
   korpa[storaniID].price+=pomocna
  }
  
 }
//  var br=korpa[storaniID].price/prop.price
 const [num,setNum]=useState(quantity)
 return <div className="cart-main">
<ul>
 <li className="prvi-cart">
  <div className="c-image-div" ><img id="slika-cart" src={korpa[storaniID].images[0].url} alt="" /></div> 
  <div className="p1">
  <div className="p1-1">{korpa[storaniID].name.toUpperCase()} </div> 
  <div className="p1-2">Color:<div className="color-div" style={{backgroundColor:korpa[storaniID].colors[0]}}></div></div></div>
  </li>
 <li>{prop.price/100}</li>
 <li className="single-quantity">
                            <button onClick={() => {
                                if (num < 2) {
                                    num = 1;
                                }
                                setNum(num - 1)
                            }}><h1>-</h1></button>

                            <h1>{num}</h1>

                            <button onClick={() => {
                                
                                setNum(num + 1)
                            }}><h1>+</h1></button>                      
  </li>
 <li>{num*prop.price/100}</li>
</ul>
 </div>
}
export default Cart