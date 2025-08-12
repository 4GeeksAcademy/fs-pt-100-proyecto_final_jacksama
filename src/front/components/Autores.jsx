import { Link } from "react-router-dom";
import '../CSS/Autores.css';

export const Autores = () => {

    const autores = [
  { nombre: "Aristóteles", color: "#059669" },
  { nombre: "Albert Einstein", color: "#7C3AED" },
  { nombre: "Isabel Allende", color: "#B45309" },
  { nombre: "Abraham Lincoln", color: "#DC2626" },
  { nombre: "Abraham", color: "#000000ff" }
];

    return (
        <div className="autores-container">
          <h3 className="autores-title ">Autores</h3>
          <div className="autores-buttons">
            {autores.map((autor) => (
              <button
                key={autor.nombre}
                onClick={() => setAutorSeleccionado(autor.nombre)}
                className="px-4 py-2 text-white text-sm font-medium rounded-lg m-4"
                style={{ backgroundColor: autor.color }}
              >
                {autor.nombre}
              </button>
            ))}
          </div>
        </div>
    );
}; 
