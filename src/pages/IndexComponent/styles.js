import styled from "styled-components";

export const StyleIndex = styled.div`
  text-align: center;
  a {
    text-decoration: none;
    color: #fff;
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
