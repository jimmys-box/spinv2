import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header/header'
import MainProduct from '../components/product'
import Layout from '../layout'
import styles from '../styles/Home.module.css'
//import ProductsFilter from '../components/products-filter/index'
export default function Home() {
  return (
 
  
        <Layout>
     <div className="spintopPage">
      <Header />
      <section className='filterArea'>
        {/* <ProductsFilter /> */}
      </section> 

      {/* <form>
        <div className="products-filter__block">
          <div className="products-filter__block__content">
            <div className="checkbox-tags-wrapper">
              {productsTags.map(type => (
                <CheckboxTags key={type.id} valueName={type.name} name={type.name} />
              ))}
            </div>
          </div>
        </div>
      </form>  */}

    

      {/* <ProductsFeatured /> */}
<MainProduct />
     
</div> 
   

      </Layout>
  )
}
