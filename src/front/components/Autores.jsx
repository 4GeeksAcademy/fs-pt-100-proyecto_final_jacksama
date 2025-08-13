import { Link } from "react-router-dom";
import '../CSS/Autores.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Autores ({ autores, setAutorSeleccionado }) {

  return (
    <div className="autores-container">
      <h3 className="autores-title">Autores</h3>

      <div className="autores-buttons">
        {autores.map((autor) => (
          <button
            key={autor.nombre}
            onClick={() => setAutorSeleccionado(autor.nombre)}
            className="px-4 py-3 text-white text-sm font-medium rounded-lg m-4"
          >
            {autor.nombre}
          </button>
        ))}
      </div>

      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="https://via.placeholder.com/800x400?text=Imagen+1"
              className="d-block w-100"
              alt="Imagen 1"
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://via.placeholder.com/800x400?text=Imagen+2"
              className="d-block w-100"
              alt="Imagen 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://via.placeholder.com/800x400?text=Imagen+3"
              className="d-block w-100"
              alt="Imagen 3"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
}
