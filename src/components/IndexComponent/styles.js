import styled from "styled-components";

export const StyleIndex = styled.div`
  text-align: center;
  a {
    text-decoration: none;
    color: #fff;
  }
  .App-header {
    background-color: #000000;
    min-height: 34vh;
    flex-direction: column;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 0px 16%;
    & .navbar {
      display: flex;
      justify-content: space-between;
      padding-top: 36px;
      & img {
        width: 166px;
      }
      & nav {
        width: 50%;
        text-align: right;
        display: flex;
        justify-content: space-around;
        font-size: 17px;
      }
      & h1 {
        margin: 0;
      }
    }
    h2 {
      text-align: left;
      font-size: 22px;
      margin-top: 52px;
    }
  }
  .flexcolumns {
    display: flex;
    width: 90%;
    margin: 0 auto;
    text-align: left;
    margin-top: 55px;
    & .column1 {
      width: 70%;
      & img {
        width: 100%;
      }
    }
    & .column2 {
      width: 30%;
      margin-left: 60px;
    }
  }
`;
