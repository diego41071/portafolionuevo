import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import { ModalIndex } from "./styles";
import waterPacigicLogo from "../../assets/logotipo_water_pacific_1.png";
import imepesajeLogo from "../../assets/logo.png";
import loyaltyLogo from "../../assets/LOYALTY SLIDER 3.png";
import MbfLogo from "../../assets/logo-circulo-600x600.png"
import MedibasculasLogo from "../../assets/Logo-Meibasculas-en-fondo-trasnparente-en-png-967x1024.png"

export const ModalHome = (props) => {
  const [visit, setVisit] = useState(3);

  function fadeOutEffect() {
    var fadeTarget = document.getElementById("hidemodal");
    var fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
        fadeTarget.style.opacity = 1;
      }
      if (fadeTarget.style.opacity > 0) {
        fadeTarget.style.opacity -= 0.1;
        setTimeout(() => {
          props.modal && props.setModal(false);
        }, 300);
      } else {
        clearInterval(fadeEffect);
      }
    }, 15);
  }

  return (
    <ModalIndex id={"hidemodal"}>
      <div className="modal">
        <Icon className="close icon-close" onClick={() => fadeOutEffect()} />

        <h1> {props.lang === "es" ? "Proyectos" : "Projects"} </h1>
        <div className="content-cards">
          {[
            {
              title: "Water pacific",
              url: "https://diegoardilasoluciones.netlify.app/waterpacificwebsite/",
              image: waterPacigicLogo,
            },
            {
              title: "Imepesaje",
              url: "https://imepesaje.netlify.app/",
              image: imepesajeLogo,
            },
            {
              title: "Loyalty Advisors",
              url: "https://elated-kare-3e7ef7.netlify.app",
              image: loyaltyLogo,
            },
            {
              title: "MBF",
              url: "https://www.mbf.com.co/",
              image: MbfLogo,
            },
            {
              title: "Medibásculas",
              url: "https://medibasculas.com/",
              image: MedibasculasLogo,
            },
          ].map((item, index) => {
            return (
              <div
                className="card"
                key={index}
                onClick={() => window.open(item.url, "_blank")}
                onMouseEnter={() => setVisit(index)}
                onMouseLeave={() => setVisit(5)}
              >
                <img src={item.image} />
                <p>{item.title}</p>
                {visit === index && (
                  <div
                    className={`visitItem_1 ${visit === 1 ? "left_visit2" : visit === 2 ? "left_visit3" : visit === 3 ? "left_visit4" : visit === 4 && "left_visit5"
                      }`}
                    data-aos={"zoom-in"}
                    onMouseEnter={() => setVisit(visit)}
                    onMouseLeave={() => setVisit(5)}
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
              </div>
            );
          })}
        </div>
      </div>
      {props.modal && (
        <div
          className="shadow"
          onClick={() => {
            fadeOutEffect();
          }}
        >
          .
        </div>
      )}
    </ModalIndex>
  );
};
