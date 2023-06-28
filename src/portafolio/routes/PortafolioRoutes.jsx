import React from "react";
import { Navbar } from "../../ui";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  SobreMiPagina,
  ProyectosPagina,
  BuscarPagina,
  ProyectoPagina,
} from "../pages";

export const PortafolioRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="sobre" element={<SobreMiPagina />} />
          <Route path="proyectos" element={<ProyectosPagina />} />

          <Route path="buscar" element={<BuscarPagina />} />
          <Route path="proyecto/:id" element={<ProyectoPagina />} />

          <Route path="/" element={<Navigate to="/sobre" />} />
        </Routes>
      </div>
    </>
  );
};
