import styled from "styled-components";

export const StyleIndex = styled.div`
  text-align: center;
  a {
    text-decoration: none;
    color: #fff;
  }

  button.rec-dot {
    background-color: white;
  }
  button.rec-dot:hover,
  button.rec-dot_active,
  button.rec-dot:focus {
    box-shadow: 0 0 1px 3px black;
    background-color: black;
  }
  .rec.rec-arrow-left:hover:enabled,
  .rec.rec-arrow-right:hover:enabled {
    background-color: black;
    box-shadow: 0 0 1px 3px black;
  }
  .rec.rec-arrow {
    background-color: white;
  }
  .rec.rec-arrow:disabled {
    visibility: hidden;
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
        text-align: center;
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
        left: 12%;
        height: 206px;
        width: 28vw;
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
    & .rec-carousel {
      width: 144%;
    }

    & .visitItem {
      display: none;
    }

    & .rec.rec-arrow {
      width: 44px;
      height: 35px;
      min-width: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .width_visit_item {
      width: 238px;
    }
    & .flexcolumns {
      display: block;
    }
    & .img-proyects {
      width: 217px !important;
    }
    & .column1,
    .column2 {
      & .button {
        margin-top: 20px !important;
        display: block;
        margin: 21px auto;
      }
      width: 100% !important;
      margin-left: auto !important;
    }
    .socialchat {
      & .icon {
        font-size: 42px;
        margin-bottom: 5px;
      }
    }
  }
`;
