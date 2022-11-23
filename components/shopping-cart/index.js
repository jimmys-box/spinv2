
import CheckoutStatus from '../../components/checkout-status';
import Item from './item';
import voirPanier from '../ajouts-kevin/helpers/api/voirPanier';
// import Panier from '../ajouts-kevin/panier/Panier';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const ShoppingCart = () => {

  // Déclaration des variables d'état pour le panier
  const [panier, setPanier] = useState([]);

  // Fonction de remplissage du panier
  const synchronisationPanier = () => {
    voirPanier()
      .then((contenuPanierFormate) => {
        setPanier(contenuPanierFormate);
      })
  };

  // Appel de la fonction de remplissage du panier au chargement de la page
  useEffect(() => {
    synchronisationPanier();
  }, []);  

  return (
    <section className="cart">
      <div>
        <div className="cart__intro">
          <h3 className="cart__title">Panier</h3>
          <CheckoutStatus step="cart" />
        </div>
        <div className="cart-actions">
          <input type="text" placeholder="Code Promo" className="cart__promo-code" />

          <div className="cart-actions__items-wrapper">
            <p className="cart-actions__total">Total<strong></strong></p>
            <Link href="/cart/checkout" className="btn btn--rounded">Checkout</Link>
          </div>
        </div>
        <div className="cart-list">
       
            <div>
              
             {panier.map(produit => (
                  <Item
                    key={produit.id}
                    id={produit.id}
                    image={produit.image}
                    name={produit.name}
                    price={produit.price}  
                  />
                ))}
                
            </div>
     

     
        </div>


      </div>
    </section>
  )
};


export default ShoppingCart