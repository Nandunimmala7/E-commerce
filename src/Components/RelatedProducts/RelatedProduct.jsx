import React from 'react'
import data_product from '../Assets/Data'
import Item from '../item/Item'
const RelatedProduct = () => {
  return (
    <div>
      {data_product.map((item,i) =>{
        return <Item key={i} id={item.id} 
        name={item.name} image={item.image}
         new_price={item.new_price}
         old_price={item.old_price}/>
      })}
    </div>
  )
}

export default RelatedProduct
