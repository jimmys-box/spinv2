

import Link from "next/link";
import LogoSpintop from "../components/header/LogoSpintop";
import Layout from "../layout";




const LoginPage = () => {


  return (
    <Layout>
      <section className="form-page loginPage">
        <LogoSpintop />
        <div className="container">
 

          <div className="form-block">
            <h2 className="form-block__title">Log in</h2>
            <form className="form" >
              <div className="">
                <input 
                  placeholder="email" 
                  type="text" 
                  name="email"
                 
                />

            
              </div>
              
              <div className="form__input-row">
                <input 
                  type="password" 
                  placeholder="Password" 
                  name="password"
  
                />
           
              </div>

              <button type="submit" className="btn btn--rounded btn-submit">Se connecter</button>

              <div className="form__info">
                <Link href="/forgot-password" className="form__info__forgot-password">Mot de passe oublié ?</Link>
              </div>

           
              

              <p className="form__signup-link">Pas de compte ? <Link href="/enregistrement">S&apos;enregistrer</Link></p>
            </form>
          </div>

        </div>
      </section>
    </Layout>
  )
}
  
export default LoginPage
  