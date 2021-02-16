import { StyleIndex } from "./IndexComponent/styles";
import React from "react";

const App = () => {
  return (
    <StyleIndex className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="navbar">
          <h1>DIEGO ARDILA</h1>
          <nav>
            <a href="">Inicio</a>
            <a href=""> Servicios</a>
            <a href=""> Proyectos</a> <a href="#index">Quiénes Somos</a>
            <a href=""> Contacto</a>
          </nav>
        </div>
        <h2 id="index">Diseñador gráfico, UI/UX y desarrollador de software</h2>
      </header>
      <h1> SERVICIOS</h1> Creación de páginas web, desarrollo de software de
      todo tipo, desarrollo móvil, creación de diseños publicitarios.
      <h1>PROYECTOS</h1> <h2>Water Pacific</h2>
      <p>
        Abel Ángel Quiroz ha inventado un dispositivo llamado Water Pacific, que
        recoge la humedad del aire y la transforma en agua apta para el consumo
        humano. El invento ha sido probado en el departamento colombiano de
        Antioquia, más concretamente en el Valle de Aburrá y, produce 35 litros
        de agua al día. Water Pacific Se trata de un ingenioso invento que puede
        suponer una buena solución para el desabastecimiento de agua en algunas
        zonas, ya que, la humedad relativa en el aire existe hasta en los
        lugares más áridos del planeta. Además este inventor también ha diseñado
        el Proyecto Hydroball, capacitado para producir un litro de agua
        extraída de la humedad del aire, con posibilidad de suministro de al
        menos diez plantas dentro de un cultivo. Tú también tienes una mente
        creativa. Desarrolla todo tu potencial inscribiéndote en nuestro Máster
        en Construcción y Explotación de Obras Hidráulicas.
      </p>
      <h1>QUIÉN SOY </h1>
      <p>
        Soy un desarrollador de software con enfoque en servicios y soluciones,
        con experiencia en el ámbito de las tecnologías de la información y las
        comunicaciones. Mi principal compromiso con los clientes es conseguir
        que las soluciones que ofrezco tengan un impacto positivo en su
        organización. Ofrezco servicios a la carta atendiendo a las necesidades
        de cada cliente y abarcando desde los servicios tradicionales hasta las
        soluciones más innovadoras. Como desarrollador informático, la mejor
        manera de satisfacer las necesidades del cliente es conocer sus
        peculiaridades y requisitos y así diseñar la mejor solución posible para
        cada caso en particular. Ofrecer servicios informáticos de calidad es
        nuestra meta, dispongo de los productos líderes de cada segmento, así
        como los fabricantes y proveedores de referencia. Porque nuestro éxito
        se basa en la confianza que brindan los clientes.
      </p>
      <footer>
        CONTACTO Linkedin Facebook email alexander.diego.2007@hotmail.com
        whatsappicon 304-256-7011 - 583-18-58
      </footer>
    </StyleIndex>
  );
};

export default App;
