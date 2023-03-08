import React from "react";
import { Icon } from "semantic-ui-react";
import { StyleSocialChat } from "./styles";

export const SocialChatComponent = (props) => {
  return (
    <StyleSocialChat>
      <div className="socialchat">
        {props.offset > 220 && (
          <Icon
            className="arrow alternate circle up margin_arrow"
            onClick={(e) => window.scrollTo(0, 0)}
            data-aos="zoom-in"
          />
        )}
        <Icon
          className="facebook messenger"
          onClick={() => window.open(" http://m.me/diegoardilasoluciones")}
        />
        <Icon
          className="whatsapp"
          onClick={() => window.open("https://wa.me/573245765262")}
        />
      </div>
    </StyleSocialChat>
  );
};
