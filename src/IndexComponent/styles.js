import styled from "styled-components";

export const StyleIndex = styled.div`
  text-align: center;
  a {
    text-decoration: none;
    color: #fff;
  }
  .App-header {
    background-color: #000000;
    min-height: 45vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 0 44px;
    & .navbar {
      display: flex;
      justify-content: space-between;
      & nav {
        width: 50%;
        text-align: right;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      & h1 {
        margin: 0;
      }
    }
    h2 {
      text-align: left;
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
  footer {
    background: #f7f7f7;
  }
`;
