import React from "react"; //* Importacion Necesaria */
import { Link, NavLink } from "react-router-dom"; //* Importacion de RRD Necesarias */

export const Navbar = () => {
  //* FC a Exportar */
  return (
    //* Mostramos */
    //** navbar=Para que todo este junto y no haya espacios */
    //** navbar-expand-sm=para poner el navbar en fila y separados */
    //** navbar-dark=letras en color gris */
    //** bg-dark=fondo en negro */
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        {/* Esquina Superior, donde va la marca y regresa al sitio inicial */}
        PortafolioApp
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeclassname="active"
            className="nav-item nav-link"
            exact="true"
            to="/proyectos">
            Web
          </NavLink>

          <NavLink
            activeclassname="active"
            className="nav-item nav-link"
            exact="true"
            to="/informacion">
            Sobre Mi
          </NavLink>

          <NavLink
            activeclassname="active"
            className="nav-item nav-link"
            exact="true"
            to="/contacto">
            Contactame
          </NavLink>

          <NavLink //** Ruta que me lleva al Search en el NavBar */
            activeClassName="active" //** Para que se quede blanco cuando este ahi */
            className="nav-item nav-link"
            exact
            to="/busqueda">
            Busqueda
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
