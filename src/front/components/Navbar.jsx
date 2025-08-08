import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">LOGO</span>
				</Link>
				<div className="ml-auto">
					<Link to="/" className="btn">Inicio</Link>
					<Link to="/frases" className="btn">Frases</Link>
					<Link to="/categorias" className="btn">Categorías</Link>
					<Link to="/autores" className="btn">Autores</Link>
					<Link to="/login" className="btn">Iniciar sesión</Link>
					<Link to="/register" className="btn">Registrarse</Link>
				</div>
			</div>
		</nav>
	);
};