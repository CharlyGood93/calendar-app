import React from 'react';
import './LoginScreen.scss';

export const LoginScreen = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h3>Ingreso</h3>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Email" />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contrase&ntilde;a" />
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="btn btn-outline-primary"
                value="Login"
              />
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <h3>Registro</h3>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Contrase&ntilde;a" />
          </div>
        </div>
      </div>
    </div>

  )
}
