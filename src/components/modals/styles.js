import React from "react";
import styled from "styled-components";

export const ModalIndex = styled.div`
  .modal {
    position: fixed;
    top: 286px;
    background-color: white;
    margin: 0 auto;
    width: 80%;
    padding: 44px;
    z-index: 502;
    text-align: center;
    animation: fadein 0.5s;
    border-radius: 15px;
    & h1 {
      margin-bottom: 37px;
    }
    & .icon-close {
      cursor: pointer;
      float: right;
      font-weight: bold;
      font-size: 31px;
    }
    & .content-cards {
      display: flex;
      justify-content: center;
      & .card {
        border: 1px solid;
        margin-right: 40px;
        cursor: pointer;
        border-radius: 5px;
        padding: 30px;
      }
    }
    & .button {
      margin-top: 41px;
    }
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

  @media screen and (max-width: 720px) {
    .modal {
      top: 90px;
      height: 475px;
      overflow-y: auto;

      & .content-cards {
        display: block !important;
      }
    }
  }
`;
