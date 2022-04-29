import React, { useEffect, useLayoutEffect, useState } from "react";
import { Icon } from "semantic-ui-react";
import { HeaderContainer } from "./styles";

export const HeaderComponent = (props) => {
  const [menu, setMenu] = useState(false);

  return (
    <HeaderContainer>
      <header className="App-header">
        <div className={`navbar ${props.offset > 220 && "delay"}`}>
          <div className="hamburguer">
            {menu ? (
              <Icon onClick={() => setMenu(false)} className="close" />
            ) : (
              <Icon className="bars" onClick={() => setMenu(true)}></Icon>
            )}
          </div>
          <img
            className="img-logo"
            src="https://diegoardilasoluciones.netlify.app/img/da..png"
          />
          <nav>
            <a href="">{props.lang === "es" ? "Inicio" : "Start"}</a>
            <a href="">{props.lang === "es" ? "Servicios" : "Services"}</a>
            <a href="">{props.lang === "es" ? "Proyectos" : "Projects"} </a>
            <a href="#index">
              {props.lang === "es" ? "Quién Soy" : "Who I am"}
            </a>
            <a href="#footer">
              {props.lang === "es" ? "Contacto" : "Contact"}{" "}
            </a>
          </nav>
          <div className="contentlang">
            <img
              src="https://s1.significados.com/foto/american-flag-1311743-180_sm.png"
              onClick={() => props.setLang("en")}
              title="English"
            ></img>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png"
              onClick={() => props.setLang("es")}
              title="Español"
              className="img-esp"
            ></img>
          </div>
        </div>
        {menu && (
          <div className="menu-mobile">
            <a href="">{props.lang === "es" ? "Inicio" : "Start"}</a>
            <a href="">{props.lang === "es" ? "Servicios" : "Services"}</a>
            <a href="">{props.lang === "es" ? "Proyectos" : "Projects"} </a>
            <a href="#index">
              {props.lang === "es" ? "Quién Soy" : "Who I am"}
            </a>
            <a href="">{props.lang === "es" ? "Contacto" : "Contact"} </a>
          </div>
        )}
        <div className="title">
          <h1>Diego Ardila</h1>
          <h2 id="index">
            {props.lang === "es"
              ? "Diseñador gráfico, UI/UX y desarrollador de software"
              : "Graphic designer, UI/UX and software developer"}
          </h2>
        </div>
      </header>
    </HeaderContainer>
  );
};
