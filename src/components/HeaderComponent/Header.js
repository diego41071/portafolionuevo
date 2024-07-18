import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import { HeaderContainer } from "./styles";
import logo from "../../assets/diego_ardila_fondo_transparente.webp";
import flag1 from "../../assets/american-flag-1311743-180_sm.webp";
import flag2 from "../../assets/Bandera_de_España.svg.webp";

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
          <img className="img-logo" src={logo} alt="logo" />
          <nav>
            {[{ href: "#index", text: props.lang === "es" ? "Inicio" : "Home" },
            { href: "#proyects", text: props.lang === "es" ? "Proyectos" : "Projects" },
            { href: "#who", text: props.lang === "es" ? "Quién Soy" : "About me" },
            { href: "#services", text: props.lang === "es" ? "Servicios" : "Services" },
            { href: "#technologies", text: props.lang === "es" ? "Tecnologías" : "Technologies" },
            { href: "#footer", text: props.lang === "es" ? "Contacto" : "Contact" }].map(item => { return <a href={item.href}>{item.text}</a> })}
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
            {[{ text: props.lang === "es" ? "Inicio" : "Home", href: "#index" },
            { text: props.lang === "es" ? "Proyectos" : "Projects", href: "#proyectsMobile" },
            { text: props.lang === "es" ? "Quién Soy" : "About me", href: "#whoMobile" },
            { text: props.lang === "es" ? "Servicios" : "Services", href: "#services" },
            { text: props.lang === "es" ? "Tecnologías" : "Technologies", href: "#technologies" },
            { text: props.lang === "es" ? "Contacto" : "Contact", href: "footer" }].map(item => {
              return <a href={item.href}
                onClick={() => props.setMenu(false)}>{item.text}</a>
            })}
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
