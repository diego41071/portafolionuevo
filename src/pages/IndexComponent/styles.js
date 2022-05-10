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

  .biosvY {
    width: 111%;
    margin-left: -49px;
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
    }
    & .column2 {
      width: 30%;
      margin-left: 60px;
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
