import styled from "styled-components";
export const StyleSocialChat = styled.div`
  .socialchat {
    position: fixed;
    bottom: 2px;
    width: 105px;
    right: 0;
    cursor: pointer;
    & .icon {
      font-size: 42px;
    }
    & .margin_arrow {
      margin-bottom: 4px;
    }
  }

  @media screen and (max-width: 720px) {
    .socialchat {
      & .icon {
        font-size: 42px;
        margin-bottom: 5px;
      }
    }
  }
`;
