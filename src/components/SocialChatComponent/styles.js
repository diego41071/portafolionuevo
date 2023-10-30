import styled from "styled-components";
export const StyleSocialChat = styled.div`
  .socialchat {
    position: fixed;
    bottom: 26px;
    right: 22px;
    cursor: pointer;
    display: grid;
    & .icon {
      font-size: 38px;
      margin-top: 5px;
    }
    & .margin_arrow {
      margin-bottom: 4px;
    }
  }

  @media screen and (max-width: 720px) {
    .socialchat {
      right: 0px;
      bottom: 13px;
      & .icon {
        font-size: 35px;
        margin-bottom: 5px;
      }
    }
  }
`;
