import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./componentes/Home";
import About from "./componentes/About";
import NavBar from "./componentes/NavBar";
import Detail from "./componentes/Detail";
import CountryContainer from "./componentes/CountryContainer";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/about/:data" element={<Detail />} />
				<Route exact path="/countries" element={<CountryContainer />} />
			</Routes>
		</div>
	);
}

//(),,()
//(';')
//(U-U)o

export default App;
