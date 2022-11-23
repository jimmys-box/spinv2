

import { products } from "../../shopping-cart/product-cart";
const CheckoutItems = () => {


  return (
    <ul className="checkout-items">
      {products.map(item => (
        <li className="checkout-item" key={item.id}>
          <div className="checkout-item__content">
            <div className="checkout-item__img">
              <img src={item.image} />
            </div>

            <div className="checkout-item__data">
              <h3>{item.name}</h3>
      
            </div>
          </div>
          <h3>${item.price}</h3>
        </li>
      ))}
    </ul>
  )
};

  
export default CheckoutItems