import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Encabezado } from "./componentes/Encabezado";
import { Navegacion } from "./componentes/Navegacion";
import { PiedePagina } from "./componentes/Pie-de-pagina";
import { Inicio } from "./paginas/Inicio";
import { Productos } from "./paginas/Productos";
import { Nosotros } from "./paginas/Nosotros";
import "animate.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Encabezado />
        <Navegacion />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/sobre-nosotros" element={<Nosotros />} />
        </Routes>
      </BrowserRouter>

      <PiedePagina />
    </div>
  );
}

export default App;
