import React from 'react'
import App from '../../App'

function nesto() {
  return (
    <div>
      <input type="text" placeholder='S e a r c h' className='input-aside' />
      <p className='p-product'>Category</p>
      <ul className="product-aside-list1">
        <li><a href=''>All</a> </li>
        <li><a href="">Office</a></li>
        <li><a href="">Living Room</a></li>
        <li><a href="">Kitchen</a></li>
        <li><a href="">Bedroom</a></li>
        <li><a href="">Dining</a></li>
        <li><a href="">Kids</a></li>
        
      </ul>
      <div className='product-aside-company'>
        <p>Company</p>
        <select name="company" id="">
         <option value="all">all</option>
         <option value="macros">macros</option>
         <option value="liddy">liddy</option>
         <option value="ikea">ikea</option>
         <option value="carresa">carresa</option>

        </select>
      </div>

      <div className='product-aside-color'>
        <p>Color</p>
        <div className='aside-colors'>
<a href="">All</a>
<button className='product-aside-color-btn'>a</button>
<button className='product-aside-color-btn'>b</button>
<button className='product-aside-color-btn'>c</button>
<button className='product-aside-color-btn'>d</button>
<button className='product-aside-color-btn'>e</button>
</div>


      </div>
<div>
<p>Price</p>
<input type="text" />  
</div>

    </div>
  )
}

export default nesto