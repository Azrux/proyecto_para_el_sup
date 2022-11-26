import { useNavigate, useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const normId = id.toLowerCase();
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
