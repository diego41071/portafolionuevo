import React from "react";
import { Icon } from "semantic-ui-react";

export const Technologies = (props) => {
    return <>
        <h1 id="technologies">{props.lang === "es" ? "Tecnologías" : "Technologies"}</h1>
        <div className="flextechnologies">
            {[{ icon: "node", name: "Node js" },
            { icon: "react", name: "React js" },
            { icon: "angular", name: "Angular" },
            { icon: "wordpress", name: "Wordpress" },
            { icon: "php", name: "PHP" },
            { icon: "vuejs", name: "Vue Js" }].map(item => {
                return <div className="alignicons"> <Icon className={item.icon}></Icon><p>{item.name}</p> </div>
            })}</div>
    </>
}