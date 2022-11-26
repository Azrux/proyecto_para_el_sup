import { useEffect, useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log(contador);
  }, [contador]);

  function handleDown() {
    if (contador > 0) {
      setContador(contador - 1);
    } else {
      setContador(0);
    }
  }

  function handleUp() {
    setContador(contador + 1);
  }

  return (
    <div>
      <h1>Cuántas copas tenés?</h1>
      <img
        src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/VNUOB5TCLFGDFHMV42IEJSJZS4.jpg"
        alt="imagenDeCopas"
      />
      <div>
        <button onClick={handleDown}>-</button>
        <label name="name">Tenés {contador} copas</label>
        <button onClick={handleUp}>+</button>
      </div>
    </div>
  );
}
