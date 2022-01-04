import React from "react";
import { Button } from "semantic-ui-react";

export const ModalHome = (props) => {
  return (
    <div>
      modal
      <Button
        onClick={() => {
          props.setModal(false);
        }}
      >
        Cerrar
      </Button>
    </div>
  );
};
