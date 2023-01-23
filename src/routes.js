import Footer from "components/Footer";
import PaginaPadrao from "components/PaginaPadrão";
import NaoEcontrada from "pages/NaoEncontrada";
import Post from "pages/Post";
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

			<Route path="posts/:id" element={<Post />} />
			<Route path="*" element={<NaoEcontrada/>}/>
		</Routes>

		<Footer/>
    </BrowserRouter>
  );
}

export default AppRoutes;
