import { useEffect, useState } from "react";
import s from '../styles/Cronometro.module.css'

export default function Cronometro() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    if (segundos === 15) {
      return;
    }
    setTimeout(() => {
      setSegundos(segundos + 1);
    }, 1000); //milisegundos
  }); 

  return (
    <>
      <p className={s.p}>
        Llevas {segundos === 1 ? `${segundos} seg.` : `${segundos} segs.`} en
        este componente
      </p>
    </>
  );
}
