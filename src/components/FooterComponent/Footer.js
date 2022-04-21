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
          <span> alexander.diego.2007@hotmail.com</span>
          <Icon className="whatsapp"></Icon>
          <span>304-431-2140</span>
        </div>
      </footer>
    </FooterContainer>
  );
};
