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
import waterPacigicLogo from "../../assets/logotipo_water_pacific_1.png";
import imepesajeLogo from "../../assets/logo.png";
import loyaltyLogo from "../../assets/LOYALTY SLIDER 3.png";
import ServiceWeb from "../../assets/diseno-web-para-empresas-mexico.jpg";

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
            <img src={ServiceWeb} />
            <h1 id="proyects"> {lang === "es" ? "Proyectos" : "Projects"}</h1>
            <Carousel itemsToShow={1}>
              {[
                {
                  title: "Water Pacific",
                  text:
                    lang === "es"
                      ? " El invento ha sido probado en el departamento colombiano de Antioquia, más concretamente en el Valle de Aburrá y, produce 35 litros de agua al día. Water Pacific Se trata de un ingenioso invento que puede suponer una buena solución para el desabastecimiento de agua en algunas zonas, ya que, la humedad relativa en el aire existe hasta en los lugares más áridos del planeta"
                      : "The invention has been tested in the Colombian department of Antioquia, more specifically in the Aburrá Valley, and produces 35 liters of water per day. Water Pacific This is an ingenious invention that can be a good solution for the shortage of water in some areas, since the relative humidity in the air exists even in the most arid places on the planet",
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
                      ? "Loyalty Property Advisors tiene la misión de transformar el mercado inmobiliario colombiano al brindarle a cualquier persona acceso a oportunidades únicas de inversión inmobiliaria a través del compromiso directo y la transparencia total. Como profesionales del derecho, nos enfrentamos constantemente a la falta de apoyo a los compradores en los procesos de adquisición de inmuebles en Colombia. Con la economía en crecimiento del país, queremos asegurarnos de que los nuevos inversores accedan a un entorno de inversión seguro y acogedor acompañándolos en cada paso del viaje."
                      : "Loyalty Property Advisors is on a mission to transform the Colombian real estate market by bringing anyone access to unique property investment opportunities through direct engagement and full transparency. As legal professionals, we were constantly confronted with the lack of support for buyers in the real estate acquisition processes in Colombia. With the country’s growing economy, we want to ensure that new investors come into a welcoming and secure investment environment by accompanying them at every step of the journey.",
                  image: loyaltyLogo,
                  url: "https://elated-kare-3e7ef7.netlify.app",
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
                    />
                  </div>
                );
              })}
            </Carousel>
            <Button
              onClick={() => {
                setModal(true);
              }}
              secondary
            >
              {lang === "es" ? "Ver todos los proyectos" : "See all projects"}
            </Button>
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
            <h1 id="who"> {lang === "es" ? "Quién soy" : "Who I am"} </h1>
            <p>
              {lang === "es"
                ? "Soy un desarrollador de software con enfoque en servicios y soluciones, con experiencia en el ámbito de las tecnologías de la información y las comunicaciones. Mi principal compromiso con los clientes es conseguir que las soluciones que ofrezco tengan un impacto positivo en su organización. Ofrezco servicios a la carta atendiendo a las necesidades de cada cliente y abarcando desde los servicios tradicionales hasta las soluciones más innovadoras. Como desarrollador informático, la mejor manera de satisfacer las necesidades del cliente es conocer sus peculiaridades y requisitos y así diseñar la mejor solución posible para cada caso en particular. Ofrecer servicios informáticos de calidad es nuestra meta, dispongo de los productos líderes de cada segmento, así como los fabricantes y proveedores de referencia. Porque nuestro éxito se basa en la confianza que brindan los clientes."
                : "I am a software developer with a focus on services and solutions, with experience in the field of information and communication technologies. My main commitment to clients is to ensure that the solutions I offer have a positive impact on their organization. I offer à la carte services meeting the needs of each client and ranging from traditional services to the most innovative solutions. As a computer developer, the best way to satisfy the client's needs is to know their peculiarities and requirements and thus design the best possible solution for each particular case. Offering quality computer services is our goal, I have the leading products in each segment, as well as the reference manufacturers and suppliers. Because our success is based on the trust that our customers provide."}
            </p>
            <h1 id="services">{lang === "es" ? "Servicios" : "Services"}</h1>
            <p>
              {lang === "es"
                ? "Creación de páginas web, desarrollo de software de todo tipo, desarrollo móvil, creación de diseños publicitarios."
                : "Creation of web pages, software development of all kinds, mobile development, creation of advertising designs."}
            </p>
          </div>
        </div>
        <SocialChatComponent offset={offset} />
      </div>
      <FooterComponent onClick={() => setMenu(false)}></FooterComponent>
    </StyleIndex>
  );
};

export default App;
