// Importation des bibliothèques
import { useState, useRef } from 'react';
import ReactStars from 'react-stars';
// import AjoutPanier from '../../ajouts-kevin/helpers/api/AjoutPanier';
import ajoutPanier from '../../ajouts-kevin/helpers/api/ajoutPanier';


// Déclaration du composant principal - Début du module//
const Content = ({ product }) => {


  // Déclaration des variables d'état
  const [count, setCount] = useState(1);
  const [addCart, setAddCart] = useState(false);

const Ajouter = () => {

}

  // Fonction de rendu
  return (
    <section className="product-content container">

      <div className="product-content__intro">

        {/* <span className="product-on-sale">Sale</span> */}
        <div className='dFlex productHeader'>
          <h2 className="product__name">{product.name}</h2>

          {/* // Si rupture de stock, le mentionner */}
          {product.stock_quantity === 0 &&
            <p style={{ color: 'red', textAlign: 'center', alignSelf: 'flex-start' }}>Rupture de stock</p>
          }

          {/* // Affichage du bouton d'ajout au panier si le stock n'est pas en rupture */}
          {product.stock_quantity > 0 &&
            <button type="button"
              onClick={() => setAddCart(!addCart)}
              className={`products-addCart__menu-btn ${addCart ? 'products-addCart__menu-btn--active' : ''}`}>
              <div className='productFilterSearch'>
                <img src="/images/icons/add-cart.svg" />
              </div>
            </button>
          }
        </div>

        
        {/* // Affichage des prix */}
        <div className="product__prices">
          <h4>{product.price}€</h4>
          {product.discount &&
            <span>{product.price}€</span>
          }
        </div>

        {/* // Notes du produit par les utilisateurs */}
        <div>
        <ReactStars
        count={5}
        size={24}
        color2={'#ffd700'}
        value={product.average_rating}
        edit={false}
        />
        </div>
      </div>

<div>

             <div className="products-filter__block">
          <div className="checkbox-tags-wrapper" style={{justifyContent:'flex-start'}}>
     
            <div className="checkbox-tags">       
              {/* <div className='checkbox__check' style={{margin:0, marginRight:5}}>                 
                <p style={{fontSize: 10, color: 'black'}}>#{product.categories.name}</p>
            </div>
            <div className='checkbox__check' style={{margin:0, marginLeft:5}}>                 
                <p style={{fontSize: 10, color: 'black'}}>#{product.tags.name}</p>
            </div> */}
         
            </div>
          </div>
        </div>
</div>


{/* 
      <div className="product-content__filters">
        <div className="product-filter-item">
          <h5>Couleurs:</h5>
          <div className="checkbox-color-wrapper">
          
             {Colors.map(type => (
              <CheckboxColor
                key={type}
                type={'radio'}
                name="product-color"
                color={type}
                valueName={type}
                onChange={onColorSet}
              />
            ))} 
          
          </div>
        </div>
      </div> */}
      
      <div className={`products-addCart__wrapper ${addCart ? 'products-addCart__wrapper--open' : ''}`}>
        <div>


          {/* // Gestion de la quantité lors de l'ajout au cart */}
          <div className="productQuantity">
            <h5>Quantité:</h5>
            <div className="">
              <div className="quantity-button">
                <button type="button" onClick={() => setCount(count - 1)} className="quantity-button__btn">
                  -
                </button>
                <span>{count}</span>
                <button type="button" onClick={() => setCount(count + 1)} className="quantity-button__btn">
                  +
                </button>
              </div>

              {/* // Appel de la fonction d'ajout au panier */}
              {/* <button type="submit" onClick={() => addToCart()} className="btn">Ajouter</button> */}
              
              {/* // AJOUT KEVIN */}
              <button type="submit" onClick={() => ajoutPanier(product.id, count)} className="btn">Ajouter</button>

            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Content;
