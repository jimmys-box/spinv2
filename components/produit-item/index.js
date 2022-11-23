import Link from 'next/link';



function ProduitItem({ discount, images, name, price, id })  {


  return (
    <div className="product-item">
      <div className="product__image">
       
        <Link href={`/produits/${id}`}>
          <p>
            <img src={images} alt="product" />
            {discount && 
              <span className="product__discount">{discount}%</span>
            }
          </p>
        </Link>
      </div>
      
      <div className="product__description">
        <h3>{name}</h3>
        <div className={"product__price " + (discount ? 'product__price--discount' : '')} >
          <h4>{ price }€</h4>

          {discount &&  
            <span>{ price }€</span>
          }
        </div>
      </div>
    </div>
  )
};


export default ProduitItem