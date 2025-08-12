import React from "react";
import '../CSS/Register.css';

export const Register = () => {
    return (
        <div className="container-register">
            <h1 className="text-center">Registro</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">USUARIO</label>
                    <input type="username" className="form-control" id="username" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">PASSWORD</label>
                    <input type="password" className="form-control" id="password"/>
                </div>
                <div className="mb-3 form-check d-flex justify-content-center"> 
                    <button type="submit" className="btn btn-primary btn-lg pe-5 ps-5">Acceder</button>
                </div>
                <div className="mt-4 d-flex justify-content-between">
                    <p className="text-center">¿Ya tienes cuenta? <a href="/login">Inicia sesión</a></p>
                </div>
            </form>
        </div>
    ); 
}  
  
export default Register;