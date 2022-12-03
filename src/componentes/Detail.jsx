import { useNavigate, useParams } from "react-router-dom";

export default function Detail() {
  const { data } = useParams();
  const normId = data.toLowerCase();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div>
      {normId === "will" || normId === "lau" ? (
        <>Hola, soy {normId.charAt(0).toUpperCase() + normId.slice(1)}!</>
      ) : (
        <>
          <p>Detalle no disponible</p>
        </>
      )}
      <p>
        <button onClick={handleClick}>Home</button>
      </p>
    </div>
  );
}
