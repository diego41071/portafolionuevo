import React from "react";
import styled from "styled-components";

export const ModalIndex = styled.div`
  .modal {
    position: fixed;
    top: 286px;
    background-color: white;
    margin: 0 auto;
    width: 80%;
    z-index: 502;
    text-align: center;
    animation: fadein 0.5s;
    border-radius: 15px;
  }
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

  .shadow {
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    position: fixed;
    display: block;
    z-index: 500;
    top: 0;
    left: 0;
  }
`;
