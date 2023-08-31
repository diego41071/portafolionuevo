import styled from "styled-components";

export const HeaderContainer = styled.div`
  .App-header {
    background-color: #000000;
    min-height: 28vh;
    flex-direction: column;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 0px 16% 45px;
    & h1 {
      text-align: left;
      padding-top: 65px;
    }
    & .title {
      margin-top: 57px;
    }

    & .delay {
      transition: all 0.7s ease;
      animation: imganim 0.7s alternate-reverse;
    }

    & .hamburguer {
      display: none;
    }

    @keyframes imganim {
      from {
      }
      to {
        background-color: #999191;
      }
    }

    & .navbar {
      display: flex;
      justify-content: space-between;
      padding: 20px 16%;
      position: fixed;
      background-color: #000000;
      width: 100%;
      top: 0;
      right: 0;
      z-index: 1;
      & img {
        width: 76px;
      }
      & nav {
        width: 50%;
        text-align: right;
        display: flex;
        justify-content: space-around;
        font-size: 17px;
        align-items: center;
      }
      & h1 {
        margin: 0;
      }
      & .contentlang {
        & img {
          margin-right: 20px;
          cursor: pointer;
        }
      }
      & .img-logo {
        /* position: relative;
        top: 9px; */
      }
    }
    & h2 {
      text-align: left;
      font-size: 22px;
      margin-top: 52px;
      font-weight: bolder;
      color: lightgrey;
    }
  }

  @media screen and (max-width: 720px) {
    & .App-header {
      padding: 0px 16% 44px;
      & .menu-mobile {
        position: fixed;
        background-color: #000000;
        width: 100%;
        left: 0;
        text-align: left;
        padding-left: 22px;
        padding-bottom: 28px;
        padding-top: 21px;
        z-index: 1;
       }
      & .navbar {
        align-items: center;
        padding: 20px 5% !important;
        & img {
          width: 35px !important;
        }
        & nav {
          display: none !important;
        }
        & .img-logo {
          /* width: 47px !important;
          height: 25px; */
          margin-left: 25px;
        }
      }
      & .contentlang {
        display: flex;
        & .img-esp {
          margin-right: auto !important;
        }
      }
      & .hamburguer {
        display: block !important;
        font-size: 27px;
      }
      & .title {
        & h2 {
          font-size: 17px;
          margin-top: auto;
        }
        & h1 {
          padding-top: 46px;
        }
      }
    }
  }
`;
