import React, { useState } from "react";
import { Button } from "semantic-ui-react";
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
        <span className="icon-close" onClick={() => fadeOutEffect()}>
          x
        </span>
        <h1> Proyectos</h1>
        <div className="content-cards">
          {[1, 2, 3, 4].map((item, index) => {
            return (
              <div
                className="card"
                key={index}
                onClick={() => window.open("https://www.google.com", "_blank")}
              >
                Proyecto {item}
                <p>descripcion</p>
              </div>
            );
          })}
        </div>
        <Button
          onClick={() => {
            fadeOutEffect();
          }}
        >
          Cerrar
        </Button>
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