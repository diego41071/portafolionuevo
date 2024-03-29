import styled from "styled-components";

export const ModalIndex = styled.div`
  .modal {
    position: fixed;
    top: 15%;
    left: 9%;
    background-color: white;
    margin: 0 auto;
    width: 80%;
    padding: 44px 26px 90px 67px;
    z-index: 502;
    text-align: center;
    -webkit-animation: fadein 0.5s;
    animation: fadein 0.5s;
    border-radius: 15px;
    height: 75vh;
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
        margin-right: 40px;
        cursor: pointer;
        border-radius: 5px;
        padding: 30px;
        width: 25%;
        height: 34vh;
        & img{
          width: 94px;
        }
      }
    }

    & .left_visit2 {
      left: 21% !important;
    }

    & .left_visit3 {
      left: 40% !important;
    } 
    & .left_visit4 {
      left: 59% !important;
    }    
    & .left_visit5 {
      left: 79% !important;
    }

    & .visitItem_1 {
      background-color: #0808089e;
      color: white;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      left: 2%;
      height: 34vh;
      width: 14vw;
      top: 142px;
      cursor: pointer;
      border-radius: 10px;
      & div {
        text-align: center;

        & i {
          font-size: 45px;
        }

        & p {
          font-size: 25px;
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
      top: 169px;
      height: 364px;
      overflow-y: auto;
      padding: 46px 46px 63px;
      left: 45px;
      & h1 {
        margin-bottom: 0px;
        margin-top: 0px;
        text-align: center;
        margin-left: 40px;
      }
      & .content-cards {
        display: block !important;

        & .card {
          margin-right: auto;
          width: 100%;
          margin-bottom: 0;
          height: 21vh;
        }

        & img{
          width: 123px;
        }
      }

      i {
        left: 42px;
        bottom: 20px;
        position: relative;
      }

      .visitItem_1 {
        display: none;
      }
    }
  }
`;
