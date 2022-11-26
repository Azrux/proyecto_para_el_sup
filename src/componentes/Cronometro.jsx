import { useEffect, useState } from "react";

export default function Cronometro() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    if (segundos === 5) {
      return;
    }
    setTimeout(() => {
      setSegundos(segundos + 1);
    }, 1000);
  });

  return (
    <>
      <p>
        Llevas {segundos === 1 ? `${segundos} seg.` : `${segundos} segs.`} en
        este componente
      </p>
    </>
  );
}
