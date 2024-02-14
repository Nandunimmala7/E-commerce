import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

const CartItems = () => {
  const { allProduct, CartItems, removeFromCart } = useContext(ShopContext);

  if (!allProduct) {
    // Handle case where allProduct is undefined or null
    return <div>Loading...</div>; // Or any other appropriate loading indicator
  }

  return (
    <div>
      <div className="cartitem-format">
        <p>product</p>
        <p>title</p>
        <p>price</p>
        <p>quantity</p>
        <p>total</p>
        <p>remove</p>
      </div>
      <hr />
      {allProduct.map((e) => {
        if (CartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cart-item-format">
                <img src={e.image} alt='no img' />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button>{CartItems[e.id]}</button>
                <p>{e.new_price * CartItems[e.id]}</p>
                <img src='' alt='no img' onClick={() => removeFromCart(e.id)} />
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default CartItems;
