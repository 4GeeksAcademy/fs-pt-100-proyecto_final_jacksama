import { Link } from "react-router-dom";
import '../CSS/Navbar.css';

export const Navbar = () => {
	const isLoggedIn = !!localStorage.getItem("token");

	return (
		<nav className="navbar navbar-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">LOGO</span>
				</Link>
				<div className="ml-auto">
					<Link to="/" className="btn me-1">Inicio</Link>
					<Link to="/frases" className="btn me-1">Frases</Link>
					<Link to="/categorias" className="btn me-1">Categorías</Link>
					<Link to="/autores" className="btn me-1">Autores</Link>

					{isLoggedIn ? (
						<Link to="/cuenta" className="btn b1 me-1">Cuenta</Link>
					) : (
						<>
							<Link to="/login" className="btn b1 me-1">Iniciar sesión</Link>
							<Link to="/register" className="btn b2 m1">Registrarse</Link>
						</>
					)}
				</div>
			</div>
		</nav>
	);
};
