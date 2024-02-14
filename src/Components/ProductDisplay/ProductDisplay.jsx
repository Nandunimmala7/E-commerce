import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext';
const ProductDisplay = (props) => {
    const{product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
   
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="product-display-img-list">
                <img src={product.image} alt='bxhsxb ' />
                <img src={product.image} alt='bxhsxb ' />
                <img src={product.image} alt='bxhsxb ' />
                <img src={product.image} alt='bxhsxb ' />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="product-display-img-list">
                <img src={product.image} alt='bxhsxb ' />
                <img src={product.image} alt='bxhsxb ' />
                <img src={product.image} alt='bxhsxb ' />
                <img src={product.image} alt='bxhsxb ' />
                <p>(122)</p>
            </div>
        </div>
        <div className='productdisplay-right-prices'>
            A Lightweight,usually knitted,pullover
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div>S</div>
            <div>S</div>
            <div>S</div>
            <div>S</div>
            <div>S</div>
        </div>
      <button onClick={()=>{addToCart(product.id)}}>Add to cart</button>
      <p className='pr'><span>category</span>:<span>women</span></p>
    </div>
  )
}

export default ProductDisplay
