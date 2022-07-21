import React from "react";
import styled from "styled-components";

export const ModalIndex = styled.div`
  .modal {
    position: fixed;
    top: 286px;
    background-color: white;
    margin: 0 auto;
    width: 80%;
    padding: 44px 26px 90px 67px;
    z-index: 502;
    text-align: center;
    -webkit-animation: fadein 0.5s;
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
        width: 25%;
      }
    }
    & .visitItem_1 {
      background-color: #0808089e;
      color: white;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      left: 386px;
      height: 206px;
      width: 24%;
      cursor: pointer;
      top: 142px;
      cursor: pointer;
      & div {
        text-align: center;
        & i {
          font-size: 45px;
        }

        & p {
          font-size: 44px;
          font-weight: bold;
        }
      }
    }
    & .button {
      margin-top: 41px !important;
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
      height: 364px;
      overflow-y: auto;
      & h1 {
        text-align: right;
      }
      & .content-cards {
        display: block !important;
        & .card {
          margin-right: auto;
        }
      }
    }
  }
`;
