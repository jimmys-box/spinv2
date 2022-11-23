import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '../components/footer';
import Link from 'next/link';

export default ({ children, title = 'Spintop Battle' }) => {
  const router = useRouter()


  return (
  
    <div className="app-main">
      <span className='backButton' onClick={() => router.back()}><i className="icon-left"></i></span>
      <Head>
        <title>{ title }</title>
      </Head>
 
      <main>
        { children }
      </main>
    <Link href="/cart">
            <button className="btn-cart">
              <i className="icon-cart"></i>
             
              {/* {cartItems.length > 0 && 
                <span className="btn-cart__count">{cartItems.length}</span>
              } */}
              {/* {cartItems.length === 0 &&  */}
                <span className="btn-cart__count">0</span>
        
            </button>
          </Link>  
      <Footer />
    </div>
  )
}