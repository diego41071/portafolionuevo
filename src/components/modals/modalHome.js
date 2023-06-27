import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import { ModalIndex } from "./styles";
import waterPacigicLogo from "../../assets/logotipo_water_pacific_1.png";
import imepesajeLogo from "../../assets/logo.png";
import loyaltyLogo from "../../assets/LOYALTY SLIDER 3.png";

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
          ].map((item, index) => {
            return (
              <div
                className="card"
                key={index}
                onClick={() => window.open(item.url, "_blank")}
                onMouseEnter={() => setVisit(index)}
                onMouseLeave={() => setVisit(3)}
              >
                <img src={item.image} />
                {item.title}
                {visit === index && (
                  <div
                    className={`visitItem_1 ${
                      visit === 1 ? "left_visit2" : visit === 2 && "left_visit3"
                    }`}
                    data-aos={"zoom-in"}
                    onMouseEnter={() => setVisit(visit)}
                    onMouseLeave={() => setVisit(3)}
                    onClick={() =>
                      window.open(
                        visit === 1
                          ? "https://diegoardilasoluciones.netlify.app/waterpacificwebsite/"
                          : "https://imepesaje.netlify.app/"
                      )
                    }
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
