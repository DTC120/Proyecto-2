import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";

export function PiedePagina() {
  return (
    <div className="pieDepagina">
      <h3>"Aqui va el nombre de la empresa o logo"</h3>
      <br />
      <p>
        Para cualquier duda, sugerencia o problema relacionada con la pagina web
        o la compra de productos, contactenos por cualquiera de los siguentes
        medios: <br />
        <div className="telefono">
          <FaWhatsapp className="iconos-pieDepagina" />
          <address>33 4696 3672</address> <br />
        </div>
        <div className="correo">
          <MdOutlineEmail className="iconos-pieDepagina" />
          <address>tiendaweb@gmail.com</address>
        </div>
      </p>
      <div className="pieDepagina-centrado">
        <h2>Nuestras Redes Sociales</h2>
        <div className="iconos-redes">
          <FaInstagram className="icono-red" />
          <AiFillFacebook className="icono-red" />
          <BiLogoTiktok className="icono-red" />
          <AiFillYoutube className="icono-red" />
        </div>

        <h3>"Aquí va el eslogan de la empresa".</h3>
        <h4>Tienda Web, siempre a tus servicios!</h4>
      </div>

      <div className="tyc">
        <a className="enlace-tyc" href="#">
          Privacidad
        </a>
        <a className="enlace-tyc" href="#">
          Accesibilidad
        </a>
        <a className="enlace-tyc" href="#">
          Términos
        </a>
      </div>

      <hr />
      <p className="copyright">
        &copy; 2024 Tienda Web, Todos los Derechos Reservados | Esta pagina web
        fue creada por Diego Hernandez y Diego Trejo.
      </p>
    </div>
  );
}
