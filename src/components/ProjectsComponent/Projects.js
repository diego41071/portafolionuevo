import React, { useState } from "react";

import Carousel from "react-elastic-carousel";
import waterPacigicLogo from "../../assets/logotipo_water_pacific_1.webp";
import imepesajeLogo from "../../assets/logo.webp";
import loyaltyLogo from "../../assets/LOYALTY SLIDER 3.webp";
import MbfLogo from "../../assets/logo-circulo-600x600.webp";
import MedibasculasLogo from "../../assets/Logo-Meibasculas-en-fondo-trasnparente-en-png-967x1024.webp";
import { Button, Icon } from "semantic-ui-react";
import { ModalHome } from "../modals/modalHome";

export const Projects = (props) => {
  const [modal, setModal] = useState(false);
  const [visit, setVisit] = useState(false);
  return (
    <div className="column1">
      <h1> {props.lang === "es" ? "Proyectos" : "Projects"}</h1>
      <Carousel itemsToShow={1}>
        {[
          {
            title: "Water Pacific",
            text:
              props.lang === "es"
                ? "Water Pacific se trata de un ingenioso invento que puede suponer una buena solución para el desabastecimiento de agua en algunas zonas, ya que, la humedad relativa en el aire existe hasta en los lugares más áridos del planeta."
                : "Water Pacific this is an ingenious invention that can be a good solution for water shortages in some areas, since the relative humidity in the air exists even in the most arid places on the planet.",
            image: waterPacigicLogo,
            url: "https://diegoardilasoluciones.netlify.app/waterpacificwebsite",
          },
          {
            title: "Imepesaje",
            text:
              props.lang === "es"
                ? "Esta página trata de un tipo de inventario y colección de insumos para la alta cocina e insumos industriales llamada Imepesaje y por medio de este se da a conocer todos sus productos"
                : "This page deals with a type of inventory and collection of supplies for haute cuisine and industrial supplies called Imepesaje and through this all its products are disclosed",
            image: imepesajeLogo,
            url: "https://imepesaje.netlify.app",
          },
          {
            title: "Loyalty Advisors",
            text:
              props.lang === "es"
                ? "Loyalty Property Advisors tiene la misión de transformar el mercado inmobiliario colombiano al brindarle a cualquier persona acceso a oportunidades únicas de inversión inmobiliaria a través del compromiso directo y la transparencia total."
                : "Loyalty Property Advisors is on a mission to transform the Colombian real estate market by providing anyone with access to unique real estate investment opportunities through direct engagement and full transparency.",
            image: loyaltyLogo,
            url: "https://elated-kare-3e7ef7.netlify.app",
          },
          {
            title: "MBF",
            text:
              props.lang === "es"
                ? "Es una empresa colombiana familiar, actualmente somos proveedores de soluciones industriales, a micro y grandes empresas del sector alimenticio de Colombia."
                : "It is a Colombian family company, we are currently providers of industrial solutions to micro and large companies in the Colombian food sector.",
            image: MbfLogo,
            url: "https://www.mbf.com.co/",
          },
          {
            title: "Medibásculas",
            text:
              props.lang === "es"
                ? "Soluciones de pesaje y maquinaria para procesar alimentos. Servicio técnico experto garantizado."
                : "Weighing solutions and food processing machinery. Guaranteed expert technical service.",
            image: MedibasculasLogo,
            url: "https://medibasculas.com/",
          },
        ].map((item, index) => {
          return (
            <div
              data-aos={"fade-left"}
              key={index}
              className="width_visit_item"
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              {visit && (
                <div
                  className="visitItem"
                  data-aos={"zoom-in"}
                  onMouseEnter={() => setVisit(true)}
                  onMouseLeave={() => setVisit(false)}
                  onClick={() => window.open(item.url)}
                >
                  <div>
                    <Icon className="world" />
                    <p>
                      {props.lang === "es"
                        ? "Visitar el sitio"
                        : "Visit the site"}
                    </p>
                  </div>
                </div>
              )}
              <img
                alt=""
                className="img-proyects"
                src={item.image}
                onMouseEnter={() => setVisit(true)}
                onMouseLeave={() => setVisit(false)}
                onClick={() => window.open(item.url, "_blank")}
                id="whoMobile"
                style={{ width: (index === 3 || index === 4) && "195px" }}
              />
            </div>
          );
        })}
      </Carousel>
      <div className="all_projects">
        {" "}
        <Button
          onClick={() => {
            setModal(true);
          }}
          secondary
        >
          {props.lang === "es" ? "Ver todos los proyectos" : "See all projects"}
        </Button>
      </div>
      {modal && (
        <ModalHome
          setModal={setModal}
          modal={modal}
          lang={props.lang}
          setLang={props.setLang}
          setVisit={setVisit}
        />
      )}
    </div>
  );
};
