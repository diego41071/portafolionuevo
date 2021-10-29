import styled from "styled-components";

export const HeaderContainer = styled.div`
  .App-header {
    background-color: #000000;
    min-height: 34vh;
    flex-direction: column;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 0px 16%;
    & h1 {
      text-align: left;
    }
    & .title {
      margin-top: 57px;
    }
    & .navbar {
      display: flex;
      justify-content: space-between;
      padding: 36px 16%;
      position: fixed;
      background-color: #000000;
      width: 100%;
      top: 0;
      right: 0;
      & img {
        width: 76px;
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
`;
