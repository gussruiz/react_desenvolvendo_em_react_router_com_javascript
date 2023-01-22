import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import SobreMim from "./pages/SobreMim";

function App() {
  return (
    <BrowserRouter>
		<Routes>
			<Route path="/" element={<Inicio/>}/>
			<Route path="/sobremim" element={<SobreMim/>}/>
			<Route path="*" element={<div><h1>Página não encontrada</h1></div>}/>
		</Routes>
    </BrowserRouter>
  );
}

export default App;
