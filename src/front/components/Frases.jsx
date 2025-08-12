import { Link } from "react-router-dom";
import '../CSS/Frases.css';

export const Frases = () => {

    const fraseSemana = {
        texto: "Un amigo es uno que lo sabe todo de ti y a pesar de ello te quiere.",
        autor: "Elbert Hubbard",
        etiqueta: "Amistad"
    };

    return (

        <div className="bg-white px-6 py-8 text-center border-b border-gray-100">
            <h2 className="frases-title mt-5">Frases de la semana</h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {fraseSemana.texto}
            </p>
            <p className="text-sm font-medium text-gray-800">{fraseSemana.autor}</p>
            <span className="inline-block mt-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-full">
                {fraseSemana.etiqueta}
            </span>
        </div>
    );
};

