import React, { useState } from "react";

export const AboutMe = (props) => {
    return <>
        <h1> {props.lang === "es" ? "Quién soy" : "About me"} </h1>
        <p>
            {props.lang === "es"
                ? "Soy un desarrollador de software con enfoque en servicios y soluciones, con experiencia en el ámbito de las tecnologías de la información y las comunicaciones. Mi principal compromiso con los clientes es conseguir que las soluciones que ofrezco tengan un impacto positivo en su organización."
                : "I am a software developer with a focus on services and solutions, with experience in the field of information and communications technologies. My main commitment to clients is to ensure that the solutions I offer have a positive impact on their organization."}
        </p>
    </>
}