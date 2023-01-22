import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Inicio from "./pages/Inicio";
import SobreMim from "./pages/SobreMim";

function AppRoutes() {
  return (
    <BrowserRouter>

		<Menu/>

		<Routes>
			<Route path="/" element={<Inicio/>}/>
			<Route path="/sobremim" element={<SobreMim/>}/>
			<Route path="*" element={<div><h1>Página não encontrada</h1></div>}/>
		</Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
