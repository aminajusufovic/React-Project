import React from 'react'

function SortProduct(productsData) {
  
 
    return (
    <div className='sort-products'>
    <div className='sort-btns'>
    <button>4</button>
    <button>1</button>
</div>
<div>
    <p>xx Products Found</p>
</div>
<hr />
<div className='sortby'>
    <p>Sort by</p>
    <select name="sort" id="">
<option value="Name (A-Z)" >Name (a-z)</option>
<option value="Name (Z-A)">Name (Z-A)</option>


    </select>
</div>
    </div>
  )
}

export default SortProduct