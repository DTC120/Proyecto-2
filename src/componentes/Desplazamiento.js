import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export function Desplazamiento({ title, options }) {
  const [mostrarOpciones, setMostrarOpciones] = useState(false);

  const desplazamiento = () => {
    setMostrarOpciones(!mostrarOpciones);
  };

  return (
    <div className="grupo-filtro">
      <div className="titulo-filtro" onClick={desplazamiento}>{title} <IoIosArrowDown /></div>
      {mostrarOpciones && (
        <div className="opciones-filtro">
          {options.map((option, index) => (
            <label key={index} className="filtro-label">
              <input className="filtro-input" type="checkbox" name={title} value={option} />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
