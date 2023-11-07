import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import { HeaderContainer } from "./styles";
import logo from "../../assets/diego_ardila.png";
import flag1 from "../../assets/american-flag-1311743-180_sm.webp";
import flag2 from "../../assets/Bandera_de_España.svg.png";

export const HeaderComponent = (props) => {
  return (
    <HeaderContainer>
      <header className="App-header">
        <div className={`navbar ${props.offset > 220 && "delay"}`}>
          <div className="hamburguer">
            {props.menu ? (
              <Icon onClick={() => props.setMenu(false)} className="close" />
            ) : (
              <Icon className="bars" onClick={() => props.setMenu(true)}></Icon>
            )}
          </div>
          <img className="img-logo" src={logo} />
          <nav>
            <a href="#index">{props.lang === "es" ? "Inicio" : "Home"}</a>
            <a href="#services">
              {props.lang === "es" ? "Servicios" : "Services"}
            </a>
            <a href="#who">{props.lang === "es" ? "Quién Soy" : "About me"}</a>
            <a href="#proyects">
              {props.lang === "es" ? "Proyectos" : "Projects"}
            </a>
            <a href="#footer">{props.lang === "es" ? "Contacto" : "Contact"}</a>
          </nav>
          <div className="contentlang">
            <img
              src={flag1}
              onClick={() => props.setLang("en")}
              title="English"
            ></img>
            <img
              src={flag2}
              onClick={() => props.setLang("es")}
              title="Español"
              className="img-esp"
            ></img>
          </div>
        </div>
        {props.menu && (
          <div className="menu-mobile">
            <a onClick={() => props.setMenu(false)} href="#index">
              {props.lang === "es" ? "Inicio" : "Home"}
            </a>
            <a onClick={() => props.setMenu(false)} href="#services">
              {props.lang === "es" ? "Servicios" : "Services"}
            </a>
            <a onClick={() => props.setMenu(false)} href="#proyects">
              {props.lang === "es" ? "Proyectos" : "Projects"}{" "}
            </a>
            <a onClick={() => props.setMenu(false)} href="#whoMobile">
              {props.lang === "es" ? "Quién Soy" : "About me"}
            </a>
            <a onClick={() => props.setMenu(false)} href="#footer">
              {props.lang === "es" ? "Contacto" : "Contact"}{" "}
            </a>
          </div>
        )}
        <div className="title" id="index">
          <h1>Diego Ardila</h1>
          <h2 id="who">
            {props.lang === "es"
              ? "Diseñador gráfico, UI/UX y desarrollador de software"
              : "Graphic designer, UI/UX and software developer"}
          </h2>
        </div>
      </header>
    </HeaderContainer>
  );
};
