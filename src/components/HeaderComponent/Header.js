import React, { useEffect, useLayoutEffect, useState } from "react";
import { HeaderContainer } from "./styles";

export const HeaderComponent = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  });

  return (
    <HeaderContainer>
      <header className="App-header">
        <div className={`navbar ${offset > 220 && "delay"}`}>
          <img src="https://angry-mcnulty-639e2f.netlify.app/img/da..png" />
          <nav>
            <a href="">Inicio</a>
            <a href=""> Servicios</a>
            <a href=""> Proyectos</a> <a href="#index">Quién Soy</a>
            <a href=""> Contacto</a>
          </nav>
          <div onClick={() => alert("hola")}> en</div>
          <div onClick={() => alert("hola")}>es</div>
        </div>
        <div className="title">
          <h1>Diego Ardila</h1>
          <h2 id="index">
            Diseñador gráfico, UI/UX y desarrollador de software
          </h2>
        </div>
      </header>
    </HeaderContainer>
  );
};
