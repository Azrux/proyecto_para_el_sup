import { Link } from "react-router-dom";
import s from '../styles/NavBar.module.css'

export default function NavBar() {
<<<<<<< HEAD
	return (
		<div>
			<Link to="/">
				<p>Home</p>
			</Link>
			<Link to="/about">
				<p>About</p>
			</Link>
			<Link to="/copas">
				<p>Copas</p>
			</Link>
		</div>
	);
}
=======

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
>>>>>>> 7ac1c74be7b8620c1225ef28adc1604d12a51401
