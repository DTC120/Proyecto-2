import { NavLink } from "react-router-dom";
import imgProducto from "../img/img-producto.jpg";

export function MoldeProducto() {
  return (
    <div className="boton-producto">
      <NavLink className="navlink">
        <img className="imgProducto" src={imgProducto} alt="Producto" />
        <div className="producto">
          <h4 className="titulo-producto">"Nombre del producto"</h4>
          <p className="descripcion-producto">
            "Descripcion del producto" Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <p className="precio-producto">$3,000.00</p>
        </div>
      </NavLink>
    </div>
  );
}
