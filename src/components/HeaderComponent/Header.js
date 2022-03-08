import React, { useEffect, useLayoutEffect, useState } from "react";
import { HeaderContainer } from "./styles";

export const HeaderComponent = () => {
  const [offset, setOffset] = useState(0);
  const [lang, setLang] = useState("es");

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
          <div className="contentlang">
            <img
              src="https://s1.significados.com/foto/american-flag-1311743-180_sm.png"
              onClick={() => setLang("en")}
              title="English"
            ></img>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png"
              onClick={() => setLang("es")}
              title="Español"
            ></img>
          </div>
        </div>
        <div className="title">
          <h1>Diego Ardila</h1>
          <h2 id="index">
            {lang === "es" ? "Diseñador" : "Designer"} gráfico, UI/UX y
            desarrollador de software
          </h2>
        </div>
      </header>
    </HeaderContainer>
  );
};
