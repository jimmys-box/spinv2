import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import Gallery from '../../components/product-single/gallery';
import Header from '../../components/header/header';
import Content from '../../components/product-single/content';
import React, { useState } from 'react';
import Description from '../../components/product-single/description';
import Footer from '../../components/footer';
import Layout from '../../layout';


export const getServerSideProps = async ({ query }) => {
  const pid = query.pid;
  const res = await fetch(`https://jimmyslab.club:7295/produits/rechercheproduit?id=${pid}`);
  const product = await res.json();

  return {
    props: {
      product,
     
    },
  }
}

function Produit({ product }) {
  const [showBlock, setShowBlock] = useState('description');

  return (
    <Layout>
    <div className='spintopPage productPage'>
      <Header />



      <section className="product-single">
        <div className="">

          <div className="product-single__content">
          <Gallery images={product.images}/>
          <Content product={product} />
        </div>
        
        <div className="product-single__info">
            <div className="product-single__info-btns">
              <button type="button" onClick={() => setShowBlock('description')} className={`btn btn--rounded ${showBlock === 'description' ? 'btn--active' : ''}`}>Description</button>
              <button type="button" onClick={() => setShowBlock('reviews')} className={`btn btn--rounded ${showBlock === 'reviews' ? 'btn--active' : ''}`}>Reviews (2)</button>
            </div>

            <Description show={showBlock === 'description'} description={product.description} short_description={product.short_description}/>
            {/* <Reviews product={product} show={showBlock === 'reviews'} /> */}
          </div>
        </div>
      </section>

    </div>
    </Layout>
  )
}

export default Produit