import {NavLink} from 'react-router-dom';
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg line">
      <div className="container-fluid">
        <NavLink to="/">
          <img src="./imgs/logo.png" alt="logo" width='120px' />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="navbar-item ">
              <NavLink to="/" className="nav-link">
                Inicio
              </NavLink>
            </li>
            <li className="navbar-item ">
              <NavLink to="/catalogo" className="nav-link">
                Catalogo
              </NavLink>
            </li>
            <li className="navbar-item ">
              <NavLink to="/historia" className="nav-link">
                Historia
              </NavLink>
            </li>
            <li className="navbar-item active">
              <NavLink to="/login" className="nav-link">
                Iniciar Sesion
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
