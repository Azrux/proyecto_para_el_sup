import { Link } from "react-router-dom";

export default function NavBar() {

  return(
    <div>
      <Link to='/'>
        <p>Home</p>
      </Link>
      <Link to='/about'>
        <p>About</p>
      </Link>
    </div>
  )
}