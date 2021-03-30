import React from "react";
import { Icon } from "semantic-ui-react";
import { FooterContainer } from "./styles";

export const FooterComponent = () => {
  return (
    <FooterContainer>
      <footer>
        <div>
          <Icon className="linkedin"></Icon>
          <Icon className="facebook f"></Icon>
        </div>
        <Icon className="envelope outline"></Icon>
        alexander.diego.2007@hotmail.com <Icon className="whatsapp"></Icon>
        304-256-7011 - 583-18-58
      </footer>
    </FooterContainer>
  );
};
