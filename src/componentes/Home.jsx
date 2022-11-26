import Contador from "./Contador";
import Cronometro from "./Cronometro";

export default function Home() {
  return (
    <div>
      <div>
        <Cronometro />
      </div>
      <Contador />
    </div>
  );
}
