import React, { useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import { ModalIndex } from "./styles";

export const ModalHome = (props) => {
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

        <h1> {props.lang === "es" ? "Proyectos" : "Proyects"} </h1>
        <div className="content-cards">
          {[
            {
              title: "Water pacific",
              description: "descripcion",
              url: "https://angry-mcnulty-639e2f.netlify.app/waterpacificwebsite/",
              image:
                "https://angry-mcnulty-639e2f.netlify.app/waterpacificwebsite/img/pics/logotipo_water_pacific_1.png",
            },
            {
              title: "Imepesaje",
              description: "descripcion",
            },
            {
              title: "",
              description: "descripcion",
            },
            {
              title: "",
              description: "descripcion",
            },
          ].map((item, index) => {
            return (
              <div
                className="card"
                key={index}
                onClick={() => window.open(item.url, "_blank")}
              >
                <img src={item.image} />
                {item.title}
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
        {/* <Button
          onClick={() => {
            fadeOutEffect();
          }}
        >
          {props.lang === "es" ? "Cerrar" : "Close"}
        </Button> */}
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
