import React from "react"; //* Importo React */
import { BrowserRouter, Routes, Route } from "react-router-dom"; //* Los Necesito de RRD */

import { DashboardRoutes } from "./DashboardRoutes"; //* Lo necesito para poderlo llamar L12 */

export const AppRouter = () => {
  //* Exporto este FC para que se pueda utilizar */
  return (
    //* Lo que esto retorna es */
    <BrowserRouter>
      {/* Impportancion */}
      <div>
        <Routes>
          {/* Importacion */}
          <Route exact path="/" component={DashboardRoutes} />{" "}
          {/* Ruta con un FC donde tengo todo bien definido */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
