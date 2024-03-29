import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import './css/Shop-Category.css'
import Item from '../Components/item/Item'


const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner'  src='' alt='add some pngs' />
      <div className="shopcategory-indexsort">
        <p>
          <span>
            showing 1-12
          </span> out of 36 products
        </p>
        <div className="shop-category-sort">
          sort by <img src='' alt='weejdjecdjcbd' />
        </div>
      </div>
      <div className="subcategory-products">
        {all_product.map((item,i) =>{
              if(props.category===item.category){
                    return <Item  key={i} id={item.id} 
                    name={item.name} image={item.image}
                     new_price={item.new_price}
                     old_price={item.old_price} />
              }
              else{
                return null;
              }
        })}
      </div>

      <div className="shopcategory-loadmore">
        Explore more
      </div>
    </div>
  )
}

export default ShopCategory
