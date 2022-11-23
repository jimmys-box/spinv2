import React, { useEffect, useState } from "react";
import ProduitItem from "../produit-item";

function MainProduct() {

    const [data, setData] = useState([]);
    const [prod, setProd] = useState([]);
    const [query, setQuery] = useState("");


    const fetchData = () => {
        fetch("https://jimmyslab.club:7295/produits/produits-woocommerce")
          .then((res) => res.json())
          .then((result) => {
            setData(result);
            setProd(structurationProds(result));
            // console.log(result);
          });
      };
    
      useEffect(() => {
        fetchData();
      }, []);

      const structurationProds = (produits) => {
            
        let listeProd = [];

        for (let produit of produits) {
        
            let source;

            if (produit.images[0]) {
                let img = produit.images[0];
                source = img.src;
            } else {
                source = "https://spintop-battle.com/wp-content/uploads/2022/11/Toupie-Beyblade-Burst-Takara-Tomy-Superking-B-178-random-Booster-vol24-boite-devant-vue-face-officielle.jpg";
            }
            // console.log(source); 

            listeProd.push(
                {
                    id: produit.id,
                    slug: produit.slug,
                    key: produit.id,
                    name: produit.name,
                    price: produit.price,
                    currentPrice: produit.currentPrice,
                    color: produit.colors,
                    images: source 
                }
            )
        }

        return listeProd;
      }

    return (

        <section className="HomePageProducts">
            <div className="HomePageProductsContainer">
                <header className="HomePageProductsIntro">
                    <h2>Tous nos produits</h2>

                </header>


                <div className="products-list">


                {/* <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} /> */}


                     {prod.map((prod) => {



                        return (
                        
                        <ProduitItem
                        id={prod.id}
                        slug={prod.slug}
                        key={prod.id}
                        name={prod.name}
                        price={prod.price}
                        currentPrice={prod.currentPrice}
                        color={prod.color}
                        images={prod.images} 
                        />
                     )}
                     )} 
                </div>
            </div>
        </section>

    )
}
export default MainProduct;
