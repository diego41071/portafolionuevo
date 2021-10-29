import React from "react";
import { HeaderContainer } from "./styles";

export const HeaderComponent = () => {
  return (
    <HeaderContainer>
      <header className="App-header">
        <div className="navbar">
          <img src="https://angry-mcnulty-639e2f.netlify.app/img/da..png" />
          <nav>
            <a href="">Inicio</a>
            <a href=""> Servicios</a>
            <a href=""> Proyectos</a> <a href="#index">Quiénes Somos</a>
            <a href=""> Contacto</a>
          </nav>
        </div>
        <div className="title">
          <h1>DIEGO ARDILA</h1>
          <h2 id="index">
            Diseñador gráfico, UI/UX y desarrollador de software
          </h2>
        </div>
      </header>
    </HeaderContainer>
  );
};
