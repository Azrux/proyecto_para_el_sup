import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./componentes/Home";
import About from "./componentes/About";
import NavBar from "./componentes/NavBar";
import Detail from "./componentes/Detail";
import Copas from "./componentes/Copas";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/copas" element={<Copas />} />
        <Route exact path="/about/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
