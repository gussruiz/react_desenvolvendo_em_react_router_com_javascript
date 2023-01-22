import Footer from "components/Footer";
import PaginaPadrao from "components/PaginaPadrão";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Inicio from "./pages/Inicio";
import SobreMim from "./pages/SobreMim";

function AppRoutes() {
  return (
    <BrowserRouter>

		<Menu/>

		<Routes>
        <Route path="/" element={<PaginaPadrao />}>
			<Route index element={<Inicio />} />
			<Route path="sobremim" element={<SobreMim />} />
        </Route>

			<Route path="*" element={<div><h1>Página não encontrada</h1></div>}/>
		</Routes>

		<Footer/>
    </BrowserRouter>
  );
}

export default AppRoutes;
