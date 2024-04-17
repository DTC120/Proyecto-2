import { IoIosArrowForward } from "react-icons/io";
import "animate.css";
import { MoldeProducto } from "../componentes/MoldeProducto";
import { Desplazamiento } from "../componentes/Desplazamiento";

export function Productos() {
  return (
    <div>
      <main className="grid-Productos">
        <aside className="barra-filtros">
          <h2>Filtros</h2>
          <Desplazamiento
            title="Categorías"
            options={[
              "Camisetas",
              "Pantalones",
              "Chaquetas",
              "Zapatos",
              "Joyería",
            ]}
          />
          <Desplazamiento
            title="Tallas"
            options={["XS", "S", "M", "L", "XL"]}
          />
          <Desplazamiento
            title="Precios"
            options={[
              "$500 - $1,000",
              "$1,000 - $1,500",
              "$1,500 - $2,000",
              "$2,000 - $2,500",
              "$2,500 - $3,000",
            ]}
          />
          <Desplazamiento
            title="Descuentos"
            options={[
              "10% o más",
              "20% o más",
              "30% o más",
              "40% o más",
              "50% o más",
            ]}
          />
          <Desplazamiento
            title="Marcas"
            options={["Marca 1", "Marca 2", "Marca 3", "Marca 4", "Marca 5"]}
          />
        </aside>

        {Array(16)
          .fill()
          .map((_, index) => (
            <MoldeProducto key={index} />
          ))}
      </main>

      <div className="nav-productos">
        <button className="nav-siguiente nav-siguiente_activo">1</button>
        <button className="nav-siguiente">2</button>
        <button className="nav-siguiente">3</button>
        <button className="nav-siguiente">4</button>
        <button className="nav-siguiente">5</button>
        <button className="nav-siguiente">
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}
