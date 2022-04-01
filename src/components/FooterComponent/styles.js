import styled from "styled-components";

export const FooterContainer = styled.div`
  footer {
    background: #f7f7f7;
    padding: 92px;
    & .flexicons {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 40px;
      & span {
        margin-bottom: 10px;
      }
    }
  }
  i {
    font-size: 20px;
    margin-right: 13px;
    margin-left: 19px;
  }
  .facebook,
  .linkedin {
    cursor: pointer;
  }
  .icon-social {
    margin-right: 0;
  }

  @media screen and (max-width: 400px) {
    & footer {
      padding: 24px !important;
      & .flexicons {
        display: block !important;
        line-height: 29px;
        margin-top: 2px;
        & .envelope {
          margin-left: auto;
        }
      }
    }
  }
`;
