import React from "react";
import styled from "styled-components";

export const ModalIndex = styled.div`
  position: fixed;
  top: 286px;
  background-color: white;
  margin: 0 auto;
  width: 80%;
  z-index: 502;
  text-align: center;
  animation: fadein 0.5s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .hidemodal {
    animation: fadeout 0.5s;
  }
`;
