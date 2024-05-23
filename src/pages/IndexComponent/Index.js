import { StyleIndex } from "./styles";
import React, { useState, useEffect } from "react";
import { FooterComponent } from "../../components/FooterComponent/Footer";
import { HeaderComponent } from "../../components/HeaderComponent/Header";
import { Button, Icon } from "semantic-ui-react";
import { ModalHome } from "../../components/modals/modalHome";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "react-elastic-carousel";
import { SocialChatComponent } from "../../components/SocialChatComponent/SocialChat";
import waterPacigicLogo from "../../assets/logotipo_water_pacific_1.webp";
import imepesajeLogo from "../../assets/logo.webp";
import loyaltyLogo from "../../assets/LOYALTY SLIDER 3.webp";
import ServiceWeb from "../../assets/diseno-web-para-empresas-mexico.webp";
import ServiceWebMobile from "../../assets/img-mobile/diseno-web-para-empresas-mexico.webp";
import MbfLogo from "../../assets/logo-circulo-600x600.webp"
import MedibasculasLogo from "../../assets/Logo-Meibasculas-en-fondo-trasnparente-en-png-967x1024.webp"

const App = () => {
  const [modal, setModal] = useState(false);
  const [lang, setLang] = useState("en");
  const [offset, setOffset] = useState(0);
  const [visit, setVisit] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  });

  return (
    <StyleIndex className="App">
      <HeaderComponent
        lang={lang}
        setLang={setLang}
        offset={offset}
        setOffset={setOffset}
        menu={menu}
        setMenu={setMenu}
      />
      <div onClick={() => setMenu(false)}>
        <div className="flexcolumns">
          <div className="column1">
            <img src={ServiceWeb} id="proyects" alt="proyectos" />
            <img src={ServiceWebMobile} id="proyectsMobile" className="proyectsMobile" alt="proyectos"></img>
            <h1> {lang === "es" ? "Proyectos" : "Projects"}</h1>
            <Carousel itemsToShow={1}>
              {[
                {
                  title: "Water Pacific",
                  text:
                    lang === "es"
                      ? "Water Pacific se trata de un ingenioso invento que puede suponer una buena solución para el desabastecimiento de agua en algunas zonas, ya que, la humedad relativa en el aire existe hasta en los lugares más áridos del planeta."
                      : "Water Pacific this is an ingenious invention that can be a good solution for water shortages in some areas, since the relative humidity in the air exists even in the most arid places on the planet.",
                  image: waterPacigicLogo,
                  url: "https://diegoardilasoluciones.netlify.app/waterpacificwebsite",
                },
                {
                  title: "Imepesaje",
                  text:
                    lang === "es"
                      ? "Esta página trata de un tipo de inventario y colección de insumos para la alta cocina e insumos industriales llamada Imepesaje y por medio de este se da a conocer todos sus productos"
                      : "This page deals with a type of inventory and collection of supplies for haute cuisine and industrial supplies called Imepesaje and through this all its products are disclosed",
                  image: imepesajeLogo,
                  url: "https://imepesaje.netlify.app",
                },
                {
                  title: "Loyalty Advisors",
                  text:
                    lang === "es"
                      ? "Loyalty Property Advisors tiene la misión de transformar el mercado inmobiliario colombiano al brindarle a cualquier persona acceso a oportunidades únicas de inversión inmobiliaria a través del compromiso directo y la transparencia total."
                      : "Loyalty Property Advisors is on a mission to transform the Colombian real estate market by providing anyone with access to unique real estate investment opportunities through direct engagement and full transparency.",
                  image: loyaltyLogo,
                  url: "https://elated-kare-3e7ef7.netlify.app",
                }, {
                  title: "MBF",
                  text:
                    lang === "es"
                      ? "Es una empresa colombiana familiar, actualmente somos proveedores de soluciones industriales, a micro y grandes empresas del sector alimenticio de Colombia."
                      : "It is a Colombian family company, we are currently providers of industrial solutions to micro and large companies in the Colombian food sector.",
                  image: MbfLogo,
                  url: "https://www.mbf.com.co/",
                }, {
                  title: "Medibásculas",
                  text:
                    lang === "es"
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
                            {lang === "es"
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
                {lang === "es" ? "Ver todos los proyectos" : "See all projects"}
              </Button>
            </div>
            {modal && (
              <ModalHome
                setModal={setModal}
                modal={modal}
                lang={lang}
                setLang={setLang}
                setVisit={setVisit}
              />
            )}
          </div>
          <div className="column2">
            <h1> {lang === "es" ? "Quién soy" : "About me"} </h1>
            <p>
              {lang === "es"
                ? "Soy un desarrollador de software con enfoque en servicios y soluciones, con experiencia en el ámbito de las tecnologías de la información y las comunicaciones. Mi principal compromiso con los clientes es conseguir que las soluciones que ofrezco tengan un impacto positivo en su organización."
                : "I am a software developer with a focus on services and solutions, with experience in the field of information and communications technologies. My main commitment to clients is to ensure that the solutions I offer have a positive impact on their organization."}
            </p>
            <h1 id="services">{lang === "es" ? "Servicios" : "Services"}</h1>
            {[
              {
                icon: "globe",
                description:
                  lang === "es"
                    ? "Creación de páginas web"
                    : "Web pages design",
              },
              {
                icon: "file code outline",
                description:
                  lang === "es"
                    ? "Desarrollo de software"
                    : "Software development",
              },
              {
                icon: "mobile alternate",
                description:
                  lang === "es" ? "Desarrollo móvil" : "Mobile development",
              },
              ,
              {
                icon: "bullhorn",
                description:
                  lang === "es"
                    ? "Diseños publicitarios"
                    : "Advertising designs",
              },
            ].map((item) => {
              return (
                <div className="flexservices">
                  <Icon size="huge" className={item.icon} />
                  <b>{item.description}</b>
                </div>
              );
            })}
            <h1 id="technologies">{lang === "es" ? "Tecnologías" : "Technologies"}</h1>
            <div className="flextechnologies"> {[{ icon: "node", name: "Node js" }, { icon: "react", name: "React js" }, { icon: "angular", name: "Angular" }, { icon: "wordpress", name: "Wordpress" }, { icon: "php", name: "PHP" }, { icon: "vuejs", name: "Vue Js" }].map(item => {
              return <div className="alignicons"> <Icon className={item.icon}></Icon><p>{item.name}</p> </div>
            })}</div>
          </div>
        </div>
        <SocialChatComponent offset={offset} />
      </div>
      <FooterComponent onClick={() => setMenu(false)}></FooterComponent>
    </StyleIndex>
  );
};

export default App;
