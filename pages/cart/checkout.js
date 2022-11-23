import CheckoutStatus from '../../components/checkout-status';
import CheckoutItems from '../../components/checkout/items';
import Layout from '../../layout';




const CheckoutPage = () => {



  return (
    <Layout>
      
      <section className="cart">

        <iframe traget="order_review" src="https://spintop-battle.com/commande/payer/13255/?pay_for_order=true&key=wc_order_Be76rz184uJOw#order_review" style={{width:'100%',height:'100vh'}}/>
        {/* <div className="container">
          <div className="cart__intro" style={{flexDirection:'column',textAlign:'center'}}>
            <h3 className="cart__title">Paiement et envoi</h3>
            <CheckoutStatus step="checkout" />
          </div>

          <div className="checkout-content">
            <div className="checkout__col-6">
              <div className="checkout__btns">
                <button className="btn btn--rounded"><a href="/login">Log in</a></button>
                <button className="btn btn--rounded"><a href="/register">Sign up</a></button>
              </div>

              <div className="block">
                
                <form className="form">
                <h3 className="block__title">Informations personnelle</h3>
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="Email" />
                    </div>

                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="Address" />
                    </div>
                  </div>
                  
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="First name" />
                    </div>

                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="City" />
                    </div>
                  </div>
                  
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="Last name" />
                    </div>

                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="Postal code / ZIP" />
                    </div>
                  </div>

                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="Phone number" />
                    </div>

                    <div className="form__col">
                      <div className="select-wrapper select-form">
                        <select>
                          <option>Country</option>
                          <option value="Argentina">Argentina</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="checkout__col-4">
              <div className="block">
                <h3 className="block__title">Méthode de paiement</h3>
                <ul className="round-options round-options--three">
                  <li className="round-item">
                    <img src="/images/logos/visa.png" alt="Paypal" />
                  </li>
                  <li className="round-item">
                    <img src="/images/logos/mastercard.png" alt="Paypal" />
                  </li>
                  <li className="round-item">
                    <img src="/images/logos/maestro.png" alt="Paypal" />
                  </li>

                </ul>
              </div>
              
              <div className="block">
                <h3 className="block__title">Livraison</h3>
                <ul className="round-options round-options--two">
                  <li className="round-item round-item--bg">
                    <img src="/images/logos/inpost.svg" alt="Paypal" />
                    <p>$20.00</p>
                  </li>
                  <li className="round-item round-item--bg">
                    <img src="/images/logos/dpd.svg" alt="Paypal" />
                    <p>$12.00</p>
                  </li>
                  <li className="round-item round-item--bg">
                    <img src="/images/logos/dhl.svg" alt="Paypal" />
                    <p>$15.00</p>
                  </li>
                  <li className="round-item round-item--bg">
                    <img src="/images/logos/maestro.png" alt="Paypal" />
                    <p>$10.00</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="checkout__col-2">
              <div className="block">
                <h3 className="block__title">Votre panier</h3>
                <CheckoutItems />
                
                <div className="checkout-total">
                  <p>Cout Total</p>
                  <h3>€</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="cart-actions cart-actions--checkout" style={{boxShadow:'none'}}>
   
            <div className="cart-actions__items-wrapper">
              <button type="button" className="btn btn--rounded"><a href="/">Continuer le shopping</a></button>
              <button type="button" className="btn btn--rounded">Procéder au paiement</button>
            </div>
          </div>
        </div> */}
      </section>

    </Layout>
  )
};

  
export default CheckoutPage