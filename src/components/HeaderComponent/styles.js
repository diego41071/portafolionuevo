import styled from "styled-components";

export const HeaderContainer = styled.div`
  .App-header {
    background-color: #000000;
    min-height: 28vh;
    flex-direction: column;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 0px 16%;
    & h1 {
      text-align: left;
      padding-top: 80px;
    }
    & .title {
      margin-top: 57px;
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

    & .navbar {
      display: flex;
      justify-content: space-between;
      padding: 20px 16%;
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
      font-weight: lighter;
      color: lightgrey;
    }
  }
`;
