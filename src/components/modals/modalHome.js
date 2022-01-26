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
    <>
      <ModalIndex id={"hidemodal"}>
        <span onClick={() => alert("hola")}>x</span>
        <h1> Proyectos</h1>
        <div>
          {[1, 2, 3, 4].map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </div>
        <Button
          onClick={() => {
            fadeOutEffect();
          }}
        >
          Cerrar
        </Button>{" "}
      </ModalIndex>
      {props.modal && (
        <div
          style={{
            background: "rgba(0, 0, 0, 0.2)",
            width: "100%",
            height: "100%",
            position: "fixed",
            display: "block",
            zIndex: 500,
            top: 0,
            left: 0,
          }}
          onClick={() => {
            fadeOutEffect();
          }}
        >
          .
        </div>
      )}
    </>
  );
};
