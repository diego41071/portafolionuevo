import { StyleIndex } from "./styles";
import React, { useState, useEffect } from "react";
import { FooterComponent } from "../../components/FooterComponent/Footer";
import { HeaderComponent } from "../../components/HeaderComponent/Header";
import { Button, Icon, Item } from "semantic-ui-react";
import { ModalHome } from "../../components/modals/modalHome";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "react-elastic-carousel";

const App = () => {
  const [modal, setModal] = useState(false);
  const [lang, setLang] = useState("en");
  const [offset, setOffset] = useState(0);
  const [slide, setSlide] = useState(1);

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
      />
      <div className="flexcolumns">
        <div className="column1">
          <img
            src={
              "https://disenowebakus.net/imagenes/servicios-web/diseno-de-paginas-web/diseno-web-para-empresas-mexico.jpg"
            }
          ></img>
          <h1> {lang === "es" ? "Proyectos" : "Proyects"}</h1>
          <div className="flexproyects">
            {slide === 1 ? (
              <div data-aos={"fade-left"}>
                <h3>Water Pacific</h3>
                <p>
                  {lang === "es"
                    ? "Abel Ángel Quiroz ha inventado un dispositivo llamado Water Pacific, que recoge la humedad del aire y la transforma en agua apta para el consumo humano. El invento ha sido probado en el departamento colombiano de Antioquia, más concretamente en el Valle de Aburrá y, produce 35 litros de agua al día. Water Pacific Se trata de un ingenioso invento que puede suponer una buena solución para el desabastecimiento de agua en algunas zonas, ya que, la humedad relativa en el aire existe hasta en los lugares más áridos del planeta. Además este inventor también ha diseñado el Proyecto Hydroball, capacitado para producir un litro de agua extraída de la humedad del aire, con posibilidad de suministro de al menos diez plantas dentro de un cultivo. Tú también tienes una mente creativa. Desarrolla todo tu potencial inscribiéndote en nuestro Máster en Construcción y Explotación de Obras Hidráulicas."
                    : "Abel Ángel Quiroz has invented a device called Water Pacific, which collects humidity from the air and transforms it into water suitable for human consumption. The invention has been tested in the Colombian department of Antioquia, more specifically in the Aburrá Valley, and produces 35 liters of water per day. Water Pacific This is an ingenious invention that can be a good solution for the shortage of water in some areas, since the relative humidity in the air exists even in the most arid places on the planet. In addition, this inventor has also designed the Hydroball Project, capable of producing a liter of water extracted from the humidity of the air, with the possibility of supplying at least ten plants within a crop. You also have a creative mind. Develop your full potential by enrolling in our Master's Degree in Construction and Exploitation of Hydraulic Works."}
                </p>
              </div>
            ) : (
              <div data-aos={"fade-left"}>
                <h3>Imepesaje</h3>
                <p>
                  {lang === "es"
                    ? "Abel Ángel Quiroz ha inventado un dispositivo llamado Water Pacific, que recoge la humedad del aire y la transforma en agua apta para el consumo humano. El invento ha sido probado en el departamento colombiano de Antioquia, más concretamente en el Valle de Aburrá y, produce 35 litros de agua al día. Water Pacific Se trata de un ingenioso invento que puede suponer una buena solución para el desabastecimiento de agua en algunas zonas, ya que, la humedad relativa en el aire existe hasta en los lugares más áridos del planeta. Además este inventor también ha diseñado el Proyecto Hydroball, capacitado para producir un litro de agua extraída de la humedad del aire, con posibilidad de suministro de al menos diez plantas dentro de un cultivo. Tú también tienes una mente creativa. Desarrolla todo tu potencial inscribiéndote en nuestro Máster en Construcción y Explotación de Obras Hidráulicas."
                    : "Abel Ángel Quiroz has invented a device called Water Pacific, which collects humidity from the air and transforms it into water suitable for human consumption. The invention has been tested in the Colombian department of Antioquia, more specifically in the Aburrá Valley, and produces 35 liters of water per day. Water Pacific This is an ingenious invention that can be a good solution for the shortage of water in some areas, since the relative humidity in the air exists even in the most arid places on the planet. In addition, this inventor has also designed the Hydroball Project, capable of producing a liter of water extracted from the humidity of the air, with the possibility of supplying at least ten plants within a crop. You also have a creative mind. Develop your full potential by enrolling in our Master's Degree in Construction and Exploitation of Hydraulic Works."}
                </p>
              </div>
            )}
          </div>
          <Carousel itemsToShow={1}>
            <Item>1</Item>
            <Item>2</Item>
            <Item>3</Item>
            <Item>4</Item>
            <Item>5</Item>
            <Item>6</Item>
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
            />
          )}
        </div>
        <div className="column2">
          <h1> {lang === "es" ? "Quién soy" : "Who I am"} </h1>
          <p>
            {lang === "es"
              ? "Soy un desarrollador de software con enfoque en servicios y soluciones, con experiencia en el ámbito de las tecnologías de la información y las comunicaciones. Mi principal compromiso con los clientes es conseguir que las soluciones que ofrezco tengan un impacto positivo en su organización. Ofrezco servicios a la carta atendiendo a las necesidades de cada cliente y abarcando desde los servicios tradicionales hasta las soluciones más innovadoras. Como desarrollador informático, la mejor manera de satisfacer las necesidades del cliente es conocer sus peculiaridades y requisitos y así diseñar la mejor solución posible para cada caso en particular. Ofrecer servicios informáticos de calidad es nuestra meta, dispongo de los productos líderes de cada segmento, así como los fabricantes y proveedores de referencia. Porque nuestro éxito se basa en la confianza que brindan los clientes."
              : "I am a software developer with a focus on services and solutions, with experience in the field of information and communication technologies. My main commitment to clients is to ensure that the solutions I offer have a positive impact on their organization. I offer à la carte services meeting the needs of each client and ranging from traditional services to the most innovative solutions. As a computer developer, the best way to satisfy the client's needs is to know their peculiarities and requirements and thus design the best possible solution for each particular case. Offering quality computer services is our goal, I have the leading products in each segment, as well as the reference manufacturers and suppliers. Because our success is based on the trust that our customers provide."}
          </p>
          <h1>{lang === "es" ? "Servicios" : "Services"}</h1>
          <p>
            {lang === "es"
              ? "Creación de páginas web, desarrollo de software de todo tipo, desarrollo móvil, creación de diseños publicitarios."
              : "Creation of web pages, software development of all kinds, mobile development, creation of advertising designs."}
          </p>
        </div>
      </div>
      <div className="socialchat">
        {offset > 220 && (
          <Icon
            className="arrow alternate circle up"
            onClick={(e) => window.scrollTo(0, 0)}
            data-aos="zoom-in"
          />
        )}
        <Icon
          className="facebook messenger"
          onClick={() => window.open(" http://m.me/diegoardilasoluciones")}
        />
        <Icon
          className="whatsapp"
          onClick={() => window.open("https://wa.me/573044312140")}
        />
      </div>
      <FooterComponent></FooterComponent>
    </StyleIndex>
  );
};

export default App;
