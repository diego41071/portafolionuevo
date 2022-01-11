import React from "react";
import { Button } from "semantic-ui-react";
import { ModalIndex } from "./styles";

export const ModalHome = (props) => {
  return (
    <>
      <ModalIndex>
        <p> modal</p>
        <Button
          onClick={() => {
            props.setModal(false);
          }}
        >
          Cerrar
        </Button>{" "}
      </ModalIndex>
      {props.modal && (
        <div
          style={{
            background: " rgba(0, 0, 0, 0.2)",
            width: "100%",
            height: " 100%",
            position: "fixed",
            display: "block",
            zIndex: 500,
            top: 0,
            left: 0,
          }}
          onClick={() => {
            props.modal && props.setModal(false);
          }}
        >
          .
        </div>
      )}
    </>
  );
};
