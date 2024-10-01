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
  .rec.rec-arrow-right:hover:enabled,
  .rec.rec-arrow-left:focus:enabled,
  .rec.rec-arrow-right:focus:enabled {
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
    width: 84%;
    margin: 0 auto 0;
    text-align: left;
    padding-top: 37px;
    padding-bottom: 37px;
    .proyectsMobile {
      display: none;
    }

    #proyects {
      margin-top: 52px;
    }

    & #services {
      margin-bottom: -4px;
    }
    & .column1 {
      margin-top: 28px;
      & .all_projects {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 31px;
      }
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
        font-size: 22px;
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
        left: 15%;
        height: 206px;
        width: 72%;
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
      width: 60%;
      margin-left: 60px;
      & i {
        font-size: 43px;
      }
      & .flextechnologies {
        justify-content: space-between;
        margin-top: 35px;
        display: grid;
        grid-template-rows: 123px 123px 123px;
        grid-template-columns: 123px 123px 123px;
        & .alignicons {
          text-align: center;
        }
      }
      & .flexservices {
        margin-bottom: 20px;
        font-size: 17px;
        display: flex;
        justify-content: space-around;
        & i {
          font-size: 43px;
          margin-right: 20px;
        }
      }
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

  @media screen and (max-width: 720px) {
    #services {
      margin-bottom: 13px;
      margin-top: 24px;
    }
    .proyectsMobile {
      display: block !important;
    }
    & .rec-carousel {
      width: 107%;
    }

    & .visitItem {
      display: none !important;
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
      #proyects {
        display: none;
      }
      & .column1,
      .column2 {
        .flextechnologies {
          grid-template-rows: 150px 150px;
          grid-template-columns: 150px 150px;
        }
        & .button {
          margin-top: 20px !important;
          display: block;
          margin: 21px auto;
        }
        width: 100% !important;
        margin-left: auto !important;
      }
    }
    & .img-proyects {
      width: 217px !important;
    }

    h1 {
      text-align: center;
    }
  }
`;
