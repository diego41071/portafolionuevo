import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import { ServicesContainer } from "./stykes";

export const Services = (props) => {
  return (
    <ServicesContainer>
      <h1 id="services">{props.lang === "es" ? "Servicios" : "Services"}</h1>
      <div className="flexservices">
        {[
          {
            icon: "globe",
            description:
              props.lang === "es"
                ? "Creación de páginas web"
                : "Web pages design",
          },
          {
            icon: "file code outline",
            description:
              props.lang === "es"
                ? "Desarrollo de software"
                : "Software development",
          },
          {
            icon: "mobile alternate",
            description:
              props.lang === "es" ? "Desarrollo móvil" : "Mobile development",
          },
          ,
          {
            icon: "bullhorn",
            description:
              props.lang === "es"
                ? "Diseños publicitarios"
                : "Advertising designs",
          },
        ].map((item) => {
          return (
            <div className="align_icons">
              <Icon size="huge" className={item.icon} />
              <br></br>
              <b>{item.description}</b>
            </div>
          );
        })}
      </div>
    </ServicesContainer>
  );
};
