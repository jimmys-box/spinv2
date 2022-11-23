



import Link from 'next/link';
import Layout from '../layout';

const UserPage = () => {




  return (
    <Layout>
      <section className="form-page loginPage userPage">






        {/* {UserType.map(type => ( */}

          <div>
            <div className='dFlex justifyBetween'>
              <div className='avatarContainer'><img width="100%" src="https://cdn-icons-png.flaticon.com/512/147/147142.png" /></div>
              <div className='infoUserContainer'>
                <h2>Darky</h2>
                <div className='infoUserDetails'>
                  <span className="infoUser">age : 18 ans</span>
                  <span className="infoUser">joue depuis 3 ans</span>
                  <span className="infoUser">Nancy</span>
                </div>
                <div className='userDescription'>
                  <p>Salut tout le monde, mes parents m’ont offert une première toupie l’année dernière.</p>
                </div>
              </div>
            </div>

            <div className='dFlex justifyCenter'>
              <Link href="#">               
                <p className="btnMenuUser">
                  <img src="/images/icons/message.svg"/>
                  <p>message</p>
                  </p>
              </Link>
              <Link href="#">               
                <p className="btnMenuUser">
                  <img src="/images/icons/message.svg"/>
                  <p>mes<br />commandes</p>
                  </p>
              </Link>
            </div>
            <div className='btnBottomMenuUserContainer'>
              <Link href="#">               
                <p className="btnBottomMenuUser">
                  <p>contact</p>
                  </p>
              </Link>
              <Link href="#">               
                <p className="btnBottomMenuUser">
                  <p>deconnexion</p>
                  </p>
              </Link>
              <Link href="#">               
                <p className="btnBottomMenuUser">
                  <p>à propos</p>
                  </p>
              </Link>
            </div>

          </div>

        {/* ))} */}




      </section>
    </Layout>
  )
}

export default UserPage
