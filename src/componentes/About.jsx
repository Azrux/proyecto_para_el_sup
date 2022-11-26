import { Link, useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <>
      <p>
        <Link to="/about/will">Will</Link>
      </p>
      <p>
        <Link to="/about/lau">Lau</Link>
      </p>
      <button onClick={handleClick}>Home</button>
    </>
  );
}
