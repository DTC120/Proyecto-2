import { BsFillPersonFill } from "react-icons/bs";
import { Carrito } from "./Carrito";

export function Encabezado() {
  return (
    <header className="encabezado">
      <div className="login-signup">
        <BsFillPersonFill />
        <a className="cuenta" href="#">
          Iniciar sesión/Crear cuenta
        </a>
      </div>

      <h1 className="titulo_principal">Tienda Web</h1>

      <Carrito />

      <p className="descripcion">
        Aquí va una descripción general sobre la tienda.
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        <br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor
        <br />
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident,
        <br />
        sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </header>
  );
}
