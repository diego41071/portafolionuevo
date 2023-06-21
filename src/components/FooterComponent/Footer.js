import React from "react";
import { Icon } from "semantic-ui-react";
import { FooterContainer } from "./styles";

export const FooterComponent = () => {
  return (
    <FooterContainer>
      <footer id="footer">
        <div className="flexicons">
          {[
            {
              onclick:
                "https://www.linkedin.com/in/diego-alexander-ardila-rozo-491960229",
              class: "linkedin",
            },
            {
              onclick: "https://www.facebook.com/diegoardilasoluciones",
              class: "facebook f",
            },
            {
              onclick: "https://www.instagram.com/alex.gram7",
              class: "instagram",
            },
          ].map((item) => {
            return (
              <Icon
                onClick={() => window.open(`${item.onclick}`, "_blank")}
                className={`${item.class} icon-social`}
              ></Icon>
            );
          })}
        </div>
        <div className="flexicons">
          <div className="flex_footer">
            <Icon className="envelope outline"></Icon>
            <span> alexander.diego.2007@hotmail.com</span>
          </div>
          <div className="flex_footer">
            <Icon className="whatsapp"></Icon>
            <span>324 5765262</span>
          </div>
        </div>
      </footer>
    </FooterContainer>
  );
};
