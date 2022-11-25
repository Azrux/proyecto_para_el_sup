import { Link, useNavigate } from "react-router-dom"

export default function About() {

  const navigate = useNavigate()

  function handleClick() {
    navigate('/')
  }

    return(
        <>
        <Link to='/about/will' >Will</Link>
        <Link to='/about/lau' >Lau</Link>
        <button onClick={handleClick}>Home</button>
        </>
    )
}