import Contador from "./Contador";
import Cronometro from "./Cronometro";
import s from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
    <div className={s.background}></div>
      <div className={s.cronometro}>
        <Cronometro />
      </div>
      <Contador />
    </div>
  );
}
