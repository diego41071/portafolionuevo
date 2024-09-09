import { StyleIndex } from "./styles";
import React, { useState, useEffect } from "react";
import { FooterComponent } from "../../components/FooterComponent/Footer";
import { HeaderComponent } from "../../components/HeaderComponent/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { SocialChatComponent } from "../../components/SocialChatComponent/SocialChat";
import { Projects } from "../../components/ProjectsComponent/Projects";
import { AboutMe } from "../../components/AboutMeComponent/AboutMe";
import { Services } from "../../components/ServicesComponent/Services";
import { Technologies } from "../../components/TechnologiesComponent/Technologies";
import ServiceWeb from "../../assets/diseno-web-para-empresas-mexico.webp";
import ServiceWebMobile from "../../assets/img-mobile/diseno-web-para-empresas-mexico.webp";

const App = () => {
  const [lang, setLang] = useState("en");
  const [offset, setOffset] = useState(0);
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
          <div>
            <img src={ServiceWeb} id="proyects" alt="proyectos" />
            <img src={ServiceWebMobile} id="proyectsMobile" className="proyectsMobile" alt="proyectos"></img>
            <Services lang={lang} setLang={setLang} />
            <Projects lang={lang} setLang={setLang} /></div>
          <div className="column2">
            <AboutMe lang={lang} setLang={setLang} />
            <Technologies lang={lang} />
          </div>
        </div>
        <SocialChatComponent offset={offset} />
      </div>
      <FooterComponent onClick={() => setMenu(false)}></FooterComponent>
    </StyleIndex>
  );
};

export default App;
