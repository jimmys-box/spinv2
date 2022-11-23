
const ShoppingCart = ({ image, name, id, color, count, price , quantityAvailable}) => {



  return (

    <div className="cart-product">
      <div className='cartLeft'>
      <div className="cart-product__img">
        <img src={image} alt="" />
      </div>

      <div className="cart-product__content">
        <h3>{name}</h3>
        <p>{price}€</p>
        <div className="quantity-button">
          <button type="button"  className="quantity-button__btn">
            -
          </button>
          <span>1</span>
          <button type="button"  className="quantity-button__btn">
            +
          </button>
        </div>
      </div>
      </div>
      <button className="cart-item-cancel" onClick={() => removeFromCart()}>Enlever</button>
    </div>



  )
};


export default ShoppingCart