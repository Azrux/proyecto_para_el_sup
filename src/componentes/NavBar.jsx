import { Link } from "react-router-dom";
import s from '../styles/NavBar.module.css'

export default function NavBar() {

  return(
    <div className={s.NavBar}>
      <p>(IMG)</p>
      <p>Empresa</p>
      <Link to='/'>
        <p>Home</p>
      </Link>
      <Link to='/about'>
        <p>About</p>
      </Link>
      <Link to='/countries'>
        <p>Países</p>
      </Link>
    </div>
  )
}