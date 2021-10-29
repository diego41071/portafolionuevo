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
