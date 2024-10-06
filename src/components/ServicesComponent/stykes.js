import styled from "styled-components";

export const ServicesContainer = styled.div`
  .align_icons {
    text-align: center;
    margin-top: 34px;
    margin-right: 20px;
    margin-left: 20px;
    i {
      margin-bottom: 17px;
    }
    b {
      font-weight: 600;
    }
  }

  .flexservices {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 300px) and (max-width: 700px) {
    .flexservices {
      display: grid;
      gap: 1px;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .align_icons {
    text-align: center;
    margin-top: 34px;
    margin-right: 40px;
  }
`;
