import { Link } from "react-router-dom";
import s from "../styles/NavBar.module.css";

export default function NavBar() {
  return (
    <div className={s.NavBar}>
      {/* <p>(IMG)</p>
      <p>Empresa</p> */}
      <Link to="/" className={s.link}>
        <p>Home</p>
      </Link>
      <Link to="/about" className={s.link}>
        <p>About</p>
      </Link>
      <Link to="/countries" className={s.link}>
        <p>Países</p>
      </Link>
    </div>
  );
}
