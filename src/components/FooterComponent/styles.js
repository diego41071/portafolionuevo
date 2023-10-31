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
    }

    & i {
      font-size: 20px;
      margin-right: 13px;
      margin-left: 19px;
    }
    & .facebook,
    .linkedin,
    .instagram {
      cursor: pointer;
    }
    & .icon-social {
      margin-right: 0;
    }

    & .flex_footer {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media screen and (max-width: 720px) {
    & footer {
      padding: 24px !important;
      & .flexicons {
        display: block !important;
        line-height: 29px;
        margin-top: 2px;
        & .envelope {
          margin-right: 6px !important;
          margin-left: 0;
        }
      }
    }
    & i {
      margin-left: 4px;
      margin-bottom: 9px;
      margin-right: 4px !important;
    }
  }
`;
