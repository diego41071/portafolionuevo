import styled from "styled-components";

export const StyleIndex = styled.div`
  text-align: center;
  a {
    text-decoration: none;
    color: #fff;
  }
  .jCPmTH {
    background-color: black;
    box-shadow: 0 0 1px 3px black;
  }

  button.rec-dot:hover,
  button.rec-dot:active,
  button.rec-dot:focus {
    box-shadow: 0 0 1px 3px black;
    background-color: black;
  }
  .rec.rec-arrow-left:hover:enabled,
  .rec.rec-arrow-right:hover:enabled {
    background-color: black;
    box-shadow: 0 0 1px 3px black;
  }
  .rec.rec-arrow:disabled {
    visibility: hidden;
  }
  .biosvY {
    width: 111%;
    margin-right: 20px;
  }

  .cmVXWu {
    background-color: white;
    color: black;
    box-shadow: 0 0 2px 0px #333;
  }
  .cIQSxc {
    background-color: white;
    color: black;
    box-shadow: 0 0 2px 0px #333;
  }
  .flexcolumns {
    display: flex;
    width: 70%;
    margin: 0 auto;
    text-align: left;
    margin-top: 73px;
    margin-bottom: 98px;
    & .column1 {
      width: 70%;
      & img {
        width: 100%;
      }
      & .img-proyects {
        width: 323px;
        display: block;
        margin: 0 auto;
      }
      h3 {
        margin-top: 0;
        font-weight: 500;
      }
      .button {
        margin-top: 8px;
      }
      & .flexproyects {
        display: flex;
        align-items: center;
        & span {
          cursor: pointer;
        }
      }
      & .visitItem {
        background-color: #0808089e;
        color: white;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        left: 176px;
        height: 206px;
        width: 57%;
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
    }
    & .column2 {
      width: 30%;
      margin-left: 60px;
    }
  }

  & .delay {
    transition: all 0.7s ease;
    animation: imganim 0.7s alternate-reverse;
  }

  @keyframes imganim {
    from {
    }
    to {
      background-color: #999191;
    }
  }

  .socialchat {
    position: fixed;
    bottom: 2px;
    width: 105px;
    right: 0;
    cursor: pointer;
    & .icon {
      font-size: 55px;
    }
  }
  @media screen and (max-width: 720px) {
    & .flexcolumns {
      display: block;
    }
    & .column1,
    .column2 {
      & .button {
        margin-bottom: 20px;
      }
      width: 100% !important;
      margin-left: auto !important;
    }
  }
`;
