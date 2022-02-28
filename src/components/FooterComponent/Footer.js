import React from "react";
import { Icon } from "semantic-ui-react";
import { FooterContainer } from "./styles";

export const FooterComponent = () => {
  return (
    <FooterContainer>
      <footer>
        <div className="flexicons">
          <Icon
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/diego-alexander-ardila-rozo-491960229",
                "_blank"
              )
            }
            className="linkedin icon-social"
          ></Icon>
          <Icon
            onClick={() =>
              window.open(
                "https://www.facebook.com/diegoardilasoluciones",
                "_blank"
              )
            }
            className="facebook f icon-social"
          ></Icon>
        </div>
        <div className="flexicons">
          <Icon className="envelope outline"></Icon>
          alexander.diego.2007@hotmail.com <Icon className="whatsapp"></Icon>
          304-256-7011 - 583-18-58
        </div>
      </footer>
    </FooterContainer>
  );
};
