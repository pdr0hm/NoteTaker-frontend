import React from "react";

import "./Header.css";
import logo from "../assets/notetaker.png";

const Header = () => {
  return (
    <div className="container-header">
      <img src={logo} className="logo-note" alt="Logo Note Taker" />
      <div className="container-content">
        <h3 className="header-title">
          Olá, seja bem vindo ao seu anotador de tarefas
        </h3>
      </div>
    </div>
  );
};

export default Header;
