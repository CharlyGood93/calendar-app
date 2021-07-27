import React from 'react';
import './LoginScreen.scss';

export const LoginScreen = () => {
  return (
    <div className="container login-register-container">
      <div className="row">
        <div className="col-md-6 login-form">
          <h3>Iniciar sesi&oacute;n</h3>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contrase&ntilde;a"
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="btn-submit"
                value="Iniciar sesi&oacute;n"
              />
            </div>
          </form>
        </div>
        <div className="col-md-6 register-form">
          <h3>Registrate</h3>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contrase&ntilde;a"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Confirmar contrase&ntilde;a"
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="btn-submit"
                value="Crear cuenta"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
