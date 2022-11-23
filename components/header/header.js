import { useRef } from 'react';

import Logo from './LogoSpintop';
import Link from 'next/link';
import { useRouter } from "next/router";


const Header = () => {
  const router = useRouter();
  // { cartItems } = useSelector((state: RootState)  => state.cart);
  // const arrayPaths = ['/'];  

  //const [onTop, setOnTop] = useState(( !arrayPaths.includes(router.pathname) || isErrorPage ) ? false : true);
  //const [menuOpen, setMenuOpen] = useState(false);
  // const [searchOpen, setSearchOpen] = useState(false);

  const searchRef = useRef(null);







  return (
    <header className='site-header site-header--fixed'>
      <div className="container">
        <Link href="/">
          <div className='headerLogo'><Logo /></div>
        </Link>
        {router.pathname == "/" &&
          <div className="headerSearchContainer">
            <button ref={searchRef} className='headerSearchInnerContainer'>
              <form className="search-form">

              <input type="text" name="search" placeholder="Recherche" />
               <button type="submit"><i className="icon-search"></i></button>
            </form>

            </button>



          

          </div>
        }

      </div>
    </header>
  )
};


export default Header;
