(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{108:function(n,e,i){"use strict";i.r(e);var a,t,o,s,c=i(0),r=i.n(c),l=i(29),d=i.n(l),p=(i(95),i(43)),m=i(21),u=i(22),h=u.a.div(a||(a=Object(m.a)(["\n  text-align: center;\n  a {\n    text-decoration: none;\n    color: #fff;\n  }\n  .flexcolumns {\n    display: flex;\n    width: 70%;\n    margin: 0 auto;\n    text-align: left;\n    margin-top: 73px;\n    margin-bottom: 98px;\n    & .column1 {\n      width: 70%;\n      & img {\n        width: 100%;\n      }\n      h3 {\n        margin-top: 0;\n        font-weight: 500;\n      }\n      .button {\n        margin-top: 8px;\n      }\n    }\n    & .column2 {\n      width: 30%;\n      margin-left: 60px;\n    }\n  }\n  @media screen and (max-width: 400px) {\n    & .flexcolumns {\n      display: block;\n    }\n    & .column1,\n    .column2 {\n      & .button {\n        margin-bottom: 20px;\n      }\n      width: 100% !important;\n      margin-left: auto !important;\n    }\n  }\n"]))),g=i(45),f=u.a.div(t||(t=Object(m.a)(["\n  footer {\n    background: #f7f7f7;\n    padding: 92px;\n    & .flexicons {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-top: 40px;\n    }\n  }\n  i {\n    font-size: 20px;\n    margin-right: 13px;\n    margin-left: 19px;\n  }\n  .facebook,\n  .linkedin {\n    cursor: pointer;\n  }\n  .icon-social {\n    margin-right: 0;\n  }\n\n  @media screen and (max-width: 400px) {\n    & footer {\n      padding: 24px !important;\n      & .flexicons {\n        display: block !important;\n        line-height: 29px;\n        margin-top: 2px;\n        & .envelope {\n          margin-left: auto;\n        }\n      }\n    }\n  }\n"]))),b=i(1),x=function(){return Object(b.jsx)(f,{children:Object(b.jsxs)("footer",{children:[Object(b.jsxs)("div",{className:"flexicons",children:[Object(b.jsx)(g.a,{onClick:function(){return window.open("https://www.linkedin.com/in/diego-alexander-ardila-rozo-491960229","_blank")},className:"linkedin icon-social"}),Object(b.jsx)(g.a,{onClick:function(){return window.open("https://www.facebook.com/diegoardilasoluciones","_blank")},className:"facebook f icon-social"})]}),Object(b.jsxs)("div",{className:"flexicons",children:[Object(b.jsx)(g.a,{className:"envelope outline"}),Object(b.jsx)("span",{children:" alexander.diego.2007@hotmail.com"}),Object(b.jsx)(g.a,{className:"whatsapp"}),Object(b.jsx)("span",{children:" 304-431-2140 - 583-18-58"})]})]})})},j=u.a.div(o||(o=Object(m.a)(["\n  .App-header {\n    background-color: #000000;\n    min-height: 28vh;\n    flex-direction: column;\n    font-size: calc(10px + 2vmin);\n    color: white;\n    padding: 0px 16%;\n    & h1 {\n      text-align: left;\n      padding-top: 80px;\n    }\n    & .title {\n      margin-top: 57px;\n    }\n\n    & .delay {\n      transition: all 0.7s ease;\n      animation: imganim 0.7s alternate-reverse;\n    }\n\n    & .hamburguer {\n      display: none;\n    }\n\n    @keyframes imganim {\n      from {\n      }\n      to {\n        background-color: #999191;\n      }\n    }\n\n    & .navbar {\n      display: flex;\n      justify-content: space-between;\n      padding: 20px 16%;\n      position: fixed;\n      background-color: #000000;\n      width: 100%;\n      top: 0;\n      right: 0;\n      & img {\n        width: 76px;\n      }\n      & nav {\n        width: 50%;\n        text-align: right;\n        display: flex;\n        justify-content: space-around;\n        font-size: 17px;\n        align-items: center;\n      }\n      & h1 {\n        margin: 0;\n      }\n      & .contentlang {\n        & img {\n          margin-right: 20px;\n          cursor: pointer;\n        }\n      }\n    }\n    & h2 {\n      text-align: left;\n      font-size: 22px;\n      margin-top: 52px;\n      font-weight: bolder;\n      color: lightgrey;\n    }\n  }\n\n  @media screen and (max-width: 400px) {\n    & .App-header {\n      padding: 0px 16% 44px;\n      & .menu-mobile {\n        position: fixed;\n        background-color: #000000;\n        width: 100%;\n        left: 0;\n        text-align: left;\n        padding-left: 22px;\n        padding-bottom: 28px;\n        padding-top: 21px;\n      }\n      & .navbar {\n        align-items: center;\n        padding: 20px 5% !important;\n        & img {\n          width: 35px !important;\n        }\n        & nav {\n          display: none !important;\n        }\n        & .img-logo {\n          width: 47px !important;\n          height: 25px;\n          margin-left: 25px;\n        }\n      }\n      & .contentlang {\n        display: flex;\n        & .img-esp {\n          margin-right: auto !important;\n        }\n      }\n      & .hamburguer {\n        display: block !important;\n        font-size: 27px;\n      }\n      & .title {\n        & h2 {\n          font-size: 17px;\n          margin-top: auto;\n        }\n        & h1 {\n          padding-top: 46px;\n        }\n      }\n    }\n  }\n"]))),v=function(n){var e=Object(c.useState)(0),i=Object(p.a)(e,2),a=i[0],t=i[1],o=Object(c.useState)(!1),s=Object(p.a)(o,2),r=s[0],l=s[1];return Object(c.useEffect)((function(){window.onscroll=function(){t(window.pageYOffset)}})),Object(b.jsx)(j,{children:Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsxs)("div",{className:"navbar ".concat(a>220&&"delay"),children:[Object(b.jsx)("div",{className:"hamburguer",children:r?Object(b.jsx)(g.a,{onClick:function(){return l(!1)},className:"close"}):Object(b.jsx)(g.a,{className:"bars",onClick:function(){return l(!0)}})}),Object(b.jsx)("img",{className:"img-logo",src:"https://angry-mcnulty-639e2f.netlify.app/img/da..png"}),Object(b.jsxs)("nav",{children:[Object(b.jsx)("a",{href:"",children:"es"===n.lang?"Inicio":"Start"}),Object(b.jsx)("a",{href:"",children:"es"===n.lang?"Servicios":"Services"}),Object(b.jsxs)("a",{href:"",children:["es"===n.lang?"Proyectos":"Projects"," "]}),Object(b.jsx)("a",{href:"#index",children:"es"===n.lang?"Qui\xe9n Soy":"Who I am"}),Object(b.jsxs)("a",{href:"",children:["es"===n.lang?"Contacto":"Contact"," "]})]}),Object(b.jsxs)("div",{className:"contentlang",children:[Object(b.jsx)("img",{src:"https://s1.significados.com/foto/american-flag-1311743-180_sm.png",onClick:function(){return n.setLang("en")},title:"English"}),Object(b.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png",onClick:function(){return n.setLang("es")},title:"Espa\xf1ol",className:"img-esp"})]})]}),r&&Object(b.jsxs)("div",{className:"menu-mobile",children:[Object(b.jsx)("a",{href:"",children:"es"===n.lang?"Inicio":"Start"}),Object(b.jsx)("a",{href:"",children:"es"===n.lang?"Servicios":"Services"}),Object(b.jsxs)("a",{href:"",children:["es"===n.lang?"Proyectos":"Projects"," "]}),Object(b.jsx)("a",{href:"#index",children:"es"===n.lang?"Qui\xe9n Soy":"Who I am"}),Object(b.jsxs)("a",{href:"",children:["es"===n.lang?"Contacto":"Contact"," "]})]}),Object(b.jsxs)("div",{className:"title",children:[Object(b.jsx)("h1",{children:"Diego Ardila"}),Object(b.jsx)("h2",{id:"index",children:"es"===n.lang?"Dise\xf1ador gr\xe1fico, UI/UX y desarrollador de software":"Graphic designer, UI/UX and software developer"})]})]})})},O=i(120),y=u.a.div(s||(s=Object(m.a)(["\n  .modal {\n    position: fixed;\n    top: 286px;\n    background-color: white;\n    margin: 0 auto;\n    width: 80%;\n    padding: 44px;\n    z-index: 502;\n    text-align: center;\n    animation: fadein 0.5s;\n    border-radius: 15px;\n    & h1 {\n      margin-bottom: 37px;\n    }\n    & .icon-close {\n      cursor: pointer;\n      float: right;\n      font-weight: bold;\n      font-size: 31px;\n    }\n    & .content-cards {\n      display: flex;\n      justify-content: center;\n      & .card {\n        border: 1px solid;\n        margin-right: 40px;\n        cursor: pointer;\n        border-radius: 5px;\n        padding: 30px;\n      }\n    }\n    & .button {\n      margin-top: 41px;\n    }\n  }\n  @keyframes fadein {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n\n  .hidemodal {\n    animation: fadeout 0.5s;\n  }\n\n  .shadow {\n    background: rgba(0, 0, 0, 0.2);\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    display: block;\n    z-index: 500;\n    top: 0;\n    left: 0;\n  }\n"]))),w=function(n){function e(){var e=document.getElementById("hidemodal"),i=setInterval((function(){e.style.opacity||(e.style.opacity=1),e.style.opacity>0?(e.style.opacity-=.1,setTimeout((function(){n.modal&&n.setModal(!1)}),300)):clearInterval(i)}),15)}return Object(b.jsxs)(y,{id:"hidemodal",children:[Object(b.jsxs)("div",{className:"modal",children:[Object(b.jsx)("span",{className:"icon-close",onClick:function(){return e()},children:"x"}),Object(b.jsx)("h1",{children:" Proyectos"}),Object(b.jsx)("div",{className:"content-cards",children:[1,2,3,4].map((function(n,e){return Object(b.jsxs)("div",{className:"card",onClick:function(){return window.open("https://www.google.com","_blank")},children:["Proyecto ",n,Object(b.jsx)("p",{children:"descripcion"})]},e)}))}),Object(b.jsx)(O.a,{onClick:function(){e()},children:"Cerrar"})]}),n.modal&&Object(b.jsx)("div",{className:"shadow",onClick:function(){e()},children:"."})]})},k=function(){var n=Object(c.useState)(!1),e=Object(p.a)(n,2),i=e[0],a=e[1],t=Object(c.useState)("en"),o=Object(p.a)(t,2),s=o[0],r=o[1];return Object(b.jsxs)(h,{className:"App",children:[Object(b.jsx)(v,{lang:s,setLang:r}),Object(b.jsxs)("div",{className:"flexcolumns",children:[Object(b.jsxs)("div",{className:"column1",children:[Object(b.jsx)("img",{src:"https://disenowebakus.net/imagenes/servicios-web/diseno-de-paginas-web/diseno-web-para-empresas-mexico.jpg"}),Object(b.jsxs)("h1",{children:[" ","es"===s?"Proyectos":"Proyects"]}),Object(b.jsx)("h3",{children:"Water Pacific"}),Object(b.jsx)("p",{children:"es"===s?"Abel \xc1ngel Quiroz ha inventado un dispositivo llamado Water Pacific, que recoge la humedad del aire y la transforma en agua apta para el consumo humano. El invento ha sido probado en el departamento colombiano de Antioquia, m\xe1s concretamente en el Valle de Aburr\xe1 y, produce 35 litros de agua al d\xeda. Water Pacific Se trata de un ingenioso invento que puede suponer una buena soluci\xf3n para el desabastecimiento de agua en algunas zonas, ya que, la humedad relativa en el aire existe hasta en los lugares m\xe1s \xe1ridos del planeta. Adem\xe1s este inventor tambi\xe9n ha dise\xf1ado el Proyecto Hydroball, capacitado para producir un litro de agua extra\xedda de la humedad del aire, con posibilidad de suministro de al menos diez plantas dentro de un cultivo. T\xfa tambi\xe9n tienes una mente creativa. Desarrolla todo tu potencial inscribi\xe9ndote en nuestro M\xe1ster en Construcci\xf3n y Explotaci\xf3n de Obras Hidr\xe1ulicas.":"Abel \xc1ngel Quiroz has invented a device called Water Pacific, which collects humidity from the air and transforms it into water suitable for human consumption. The invention has been tested in the Colombian department of Antioquia, more specifically in the Aburr\xe1 Valley, and produces 35 liters of water per day. Water Pacific This is an ingenious invention that can be a good solution for the shortage of water in some areas, since the relative humidity in the air exists even in the most arid places on the planet. In addition, this inventor has also designed the Hydroball Project, capable of producing a liter of water extracted from the humidity of the air, with the possibility of supplying at least ten plants within a crop. You also have a creative mind. Develop your full potential by enrolling in our Master's Degree in Construction and Exploitation of Hydraulic Works."}),Object(b.jsx)(O.a,{onClick:function(){a(!0)},secondary:!0,children:"es"===s?"Ver todos los proyectos":"See all projects"}),i&&Object(b.jsx)(w,{setModal:a,modal:i})]}),Object(b.jsxs)("div",{className:"column2",children:[Object(b.jsxs)("h1",{children:[" ","es"===s?"Qui\xe9n soy":"Who I am"," "]}),Object(b.jsx)("p",{children:"es"===s?"Soy un desarrollador de software con enfoque en servicios y soluciones, con experiencia en el \xe1mbito de las tecnolog\xedas de la informaci\xf3n y las comunicaciones. Mi principal compromiso con los clientes es conseguir que las soluciones que ofrezco tengan un impacto positivo en su organizaci\xf3n. Ofrezco servicios a la carta atendiendo a las necesidades de cada cliente y abarcando desde los servicios tradicionales hasta las soluciones m\xe1s innovadoras. Como desarrollador inform\xe1tico, la mejor manera de satisfacer las necesidades del cliente es conocer sus peculiaridades y requisitos y as\xed dise\xf1ar la mejor soluci\xf3n posible para cada caso en particular. Ofrecer servicios inform\xe1ticos de calidad es nuestra meta, dispongo de los productos l\xedderes de cada segmento, as\xed como los fabricantes y proveedores de referencia. Porque nuestro \xe9xito se basa en la confianza que brindan los clientes.":"I am a software developer with a focus on services and solutions, with experience in the field of information and communication technologies. My main commitment to clients is to ensure that the solutions I offer have a positive impact on their organization. I offer \xe0 la carte services meeting the needs of each client and ranging from traditional services to the most innovative solutions. As a computer developer, the best way to satisfy the client's needs is to know their peculiarities and requirements and thus design the best possible solution for each particular case. Offering quality computer services is our goal, I have the leading products in each segment, as well as the reference manufacturers and suppliers. Because our success is based on the trust that our customers provide."}),Object(b.jsx)("h1",{children:"es"===s?"Servicios":"Services"}),Object(b.jsx)("p",{children:"es"===s?"Creaci\xf3n de p\xe1ginas web, desarrollo de software de todo tipo, desarrollo m\xf3vil, creaci\xf3n de dise\xf1os publicitarios.":"Creation of web pages, software development of all kinds, mobile development, creation of advertising designs."})]})]}),Object(b.jsx)(x,{})]})},C=function(n){n&&n instanceof Function&&i.e(3).then(i.bind(null,121)).then((function(e){var i=e.getCLS,a=e.getFID,t=e.getFCP,o=e.getLCP,s=e.getTTFB;i(n),a(n),t(n),o(n),s(n)}))};i(107);d.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),C()},95:function(n,e,i){}},[[108,1,2]]]);
//# sourceMappingURL=main.11e2f103.chunk.js.map