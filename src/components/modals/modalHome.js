import React from "react";
import { Button } from "semantic-ui-react";
import { ModalIndex } from "./styles";

export const ModalHome = (props) => {
  return (
    <ModalIndex>
      modal
      <Button
        onClick={() => {
          props.setModal(false);
        }}
      >
        Cerrar
      </Button>
    </ModalIndex>
  );
};
