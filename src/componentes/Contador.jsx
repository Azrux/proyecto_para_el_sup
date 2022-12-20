import { useState } from "react";
import s from '../styles/Contador.module.css'

export default function Contador() {
  
  const [contador, setContador] = useState(0);

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
    <div className={s.container}>
      <h1 className={s.title}>Cuántas copas tenés?</h1>
      {/* <img
        src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/VNUOB5TCLFGDFHMV42IEJSJZS4.jpg"
        alt="imagenDeCopas"
        className={s.img}
      /> */}
      <div>
        <button onClick={handleDown} className={s.button} >-</button>
        <label name="name">Tenés {contador} copas</label>
        <button onClick={handleUp} className={s.button} >+</button>
      </div>
    </div>
  );
}
