import styled from "styled-components";

export const ServicesContainer = styled.div`
  .align_icons {
    text-align: center;
    margin-right: 40px;
    i {
      margin-bottom: 17px;
    }
  }

  .flexservices {
    display: flex;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    .flexservices {
      display: grid;
      gap: 1px;
      grid-template-columns: repeat(3, 1fr);
    }
  }
  .align_icons {
    text-align: center;
    margin-top: 34px;
    margin-right: 45px;
  }
`;
