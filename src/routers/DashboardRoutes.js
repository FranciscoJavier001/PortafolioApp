//**_______________________________________________________________________________________________________________________________________________*/
//** FC con Switch */
import React from "react";

import { Navbar } from "../components/ui/Navbar";
import { Redirect, Route, Switch } from "react-router-dom";
import { ProyectosPantalla } from "../components/proyectos/ProyectosPantalla";

export const DashboardRoutes = () => {
  //* Estas solo son las rutas */
  return (
    <>
    <Navbar />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/proyectos" Component={ ProyectosPantalla} />

          <Redirect to="/proyectos" />
        </Switch>
      </div>
    </>
  );
};
