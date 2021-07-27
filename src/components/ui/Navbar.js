import React from 'react';

export const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <span className="navbar-brand">
          Carlos
        </span>
        <button className="btn btn-outline-danger">
          <i className="fa fa-sign-out"></i>
          &nbsp;
          <span>
            Salir
          </span>
        </button>
      </div>
    </div>
  )
}
