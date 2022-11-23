import Link from 'next/link';
import { useRouter } from "next/router"; 


function Footer() {
  const router = useRouter();
  return (
    <footer className={router.pathname == ("/enregistrement" || "/mon-arene" || "/login") ? "site-footer darkFooter" : "site-footer" }>
      <nav className="site-footer__bottom">
        <ul className="container">
          <li style={{width:'100%'}} className={router.pathname == "/" ? "active" : ""}>
            <Link href="/">
              <p className="nav1">Boutique</p>
            </Link>
          </li>
          <li style={{width:'100%'}} className={router.pathname == "/play" ? "active" : ""}>
            <Link href="/play">
              <p className="nav2">Jouer</p>
            </Link>
          </li>
          <li style={{width:'100%'}} className={router.pathname == "/communaute" ? "active" : ""}>
            <Link href="/communaute">
              <p className="nav3">Communauté</p>
            </Link>
          </li>
          <li style={{width:'100%'}} className={router.pathname == "/mon-arene" ? "active" : ""}>
            <Link href="/mon-arene">
              <p className="nav4">Mon espace</p>
            </Link>
          </li>
        </ul>

      </nav>
    </footer>
  )
};


export default Footer