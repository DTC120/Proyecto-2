import { NavLink } from "react-router-dom";

export function Navegacion() {
  return (
    <div className="navegacion-principal">
      <nav className="navegacion">
        <NavLink className={({isActive}) => (isActive ? "enlace activo" : "enlace")} to="/">
          Inicio
        </NavLink>

        <NavLink className={({isActive}) => (isActive ? "enlace activo" : "enlace")} to="/productos">
          Productos
        </NavLink>

        <NavLink className={({isActive}) => (isActive ? "enlace activo" : "enlace")} to="/sobre-nosotros">
          Sobre Nosotros
        </NavLink>
      </nav>
    </div>
  );
}
