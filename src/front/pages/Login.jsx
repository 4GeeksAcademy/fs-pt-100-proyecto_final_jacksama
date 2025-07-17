import React from "react";
import '../CSS/Login.css';

export const Login = () => {
    return (
        <div className="container-login">
            <h1 className="text-center">Inicio de sesión</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">USUARIO</label>
                    <input type="username" className="form-control" id="username" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">PASSWORD</label>
                    <input type="password" className="form-control" id="password"/>
                </div>
                <div className="mb-3 form-check d-flex justify-content-between">
                    <div>
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">Recordarme</label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg pe-5 ps-5">Acceder</button>
                </div>
                <div className="mt-4 d-flex justify-content-between">
                    <p className="text-center">¿No tienes cuenta? <a href="/register">Regístrate</a></p>
                    <p className="text-center">¿Has olvidado tu contraseña? <a href="/reset-password">Recuperar contraseña</a></p>
                </div>
            </form>
        </div>
    ); 
}  
  
export default Login;