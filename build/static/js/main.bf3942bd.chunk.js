(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{100:function(n,e,t){},113:function(n,e,t){"use strict";t.r(e);var i,a,o,s,c=t(0),r=t.n(c),l=t(30),d=t.n(l),p=(t(100),t(20)),u=t(23),m=t(13),h=m.a.div(i||(i=Object(u.a)(["\n  text-align: center;\n  a {\n    text-decoration: none;\n    color: #fff;\n  }\n\n  button.rec-dot {\n    background-color: white;\n  }\n  button.rec-dot:hover,\n  button.rec-dot_active,\n  button.rec-dot:focus {\n    box-shadow: 0 0 1px 3px black;\n    background-color: black;\n  }\n  .rec.rec-arrow-left:hover:enabled,\n  .rec.rec-arrow-right:hover:enabled {\n    background-color: black;\n    box-shadow: 0 0 1px 3px black;\n  }\n  .rec.rec-arrow {\n    background-color: white;\n  }\n  .rec.rec-arrow:disabled {\n    visibility: hidden;\n  }\n\n  .flexcolumns {\n    display: flex;\n    width: 70%;\n    margin: 0 auto;\n    text-align: left;\n    margin-top: 73px;\n    margin-bottom: 98px;\n    & .column1 {\n      width: 70%;\n      & img {\n        width: 100%;\n      }\n      & .img-proyects {\n        width: 323px;\n        display: block;\n        margin: 0 auto;\n      }\n      h3 {\n        margin-top: 0;\n        font-weight: 500;\n      }\n      .button {\n        margin-top: 8px;\n      }\n      & .flexproyects {\n        display: flex;\n        align-items: center;\n        & span {\n          cursor: pointer;\n        }\n      }\n      & .visitItem {\n        background-color: #0808089e;\n        color: white;\n        position: absolute;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        left: 176px;\n        height: 206px;\n        width: 57%;\n        cursor: pointer;\n        & div {\n          text-align: center;\n          & i {\n            font-size: 45px;\n          }\n\n          & p {\n            font-size: 44px;\n            font-weight: bold;\n          }\n        }\n      }\n    }\n    & .column2 {\n      width: 30%;\n      margin-left: 60px;\n    }\n  }\n\n  & .delay {\n    transition: all 0.7s ease;\n    animation: imganim 0.7s alternate-reverse;\n  }\n\n  @keyframes imganim {\n    from {\n    }\n    to {\n      background-color: #999191;\n    }\n  }\n\n  .socialchat {\n    position: fixed;\n    bottom: 2px;\n    width: 105px;\n    right: 0;\n    cursor: pointer;\n    & .icon {\n      font-size: 55px;\n    }\n  }\n  @media screen and (max-width: 720px) {\n    & .flexcolumns {\n      display: block;\n    }\n    & .column1,\n    .column2 {\n      & .button {\n        margin-bottom: 20px;\n      }\n      width: 100% !important;\n      margin-left: auto !important;\n    }\n  }\n"]))),g=t(45),f=m.a.div(a||(a=Object(u.a)(["\n  footer {\n    background: #f7f7f7;\n    padding: 92px;\n    & .flexicons {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-top: 40px;\n    }\n  }\n  i {\n    font-size: 20px;\n    margin-right: 13px;\n    margin-left: 19px;\n  }\n  .facebook,\n  .linkedin {\n    cursor: pointer;\n  }\n  .icon-social {\n    margin-right: 0;\n  }\n\n  @media screen and (max-width: 720px) {\n    & footer {\n      padding: 24px !important;\n      & .flexicons {\n        display: block !important;\n        line-height: 29px;\n        margin-top: 2px;\n        & .envelope {\n          margin-left: auto;\n        }\n      }\n    }\n  }\n"]))),x=t(2),b=function(){return Object(x.jsx)(f,{children:Object(x.jsxs)("footer",{id:"footer",children:[Object(x.jsxs)("div",{className:"flexicons",children:[Object(x.jsx)(g.a,{onClick:function(){return window.open("https://www.linkedin.com/in/diego-alexander-ardila-rozo-491960229","_blank")},className:"linkedin icon-social"}),Object(x.jsx)(g.a,{onClick:function(){return window.open("https://www.facebook.com/diegoardilasoluciones","_blank")},className:"facebook f icon-social"})]}),Object(x.jsxs)("div",{className:"flexicons",children:[Object(x.jsx)(g.a,{className:"envelope outline"}),Object(x.jsx)("span",{children:" alexander.diego.2007@hotmail.com"}),Object(x.jsx)(g.a,{className:"whatsapp"}),Object(x.jsx)("span",{children:"304-431-2140"})]})]})})},j=m.a.div(o||(o=Object(u.a)(["\n  .App-header {\n    background-color: #000000;\n    min-height: 28vh;\n    flex-direction: column;\n    font-size: calc(10px + 2vmin);\n    color: white;\n    padding: 0px 16%;\n    & h1 {\n      text-align: left;\n      padding-top: 80px;\n    }\n    & .title {\n      margin-top: 57px;\n    }\n\n    & .delay {\n      transition: all 0.7s ease;\n      animation: imganim 0.7s alternate-reverse;\n    }\n\n    & .hamburguer {\n      display: none;\n    }\n\n    @keyframes imganim {\n      from {\n      }\n      to {\n        background-color: #999191;\n      }\n    }\n\n    & .navbar {\n      display: flex;\n      justify-content: space-between;\n      padding: 20px 16%;\n      position: fixed;\n      background-color: #000000;\n      width: 100%;\n      top: 0;\n      right: 0;\n      & img {\n        width: 76px;\n      }\n      & nav {\n        width: 50%;\n        text-align: right;\n        display: flex;\n        justify-content: space-around;\n        font-size: 17px;\n        align-items: center;\n      }\n      & h1 {\n        margin: 0;\n      }\n      & .contentlang {\n        & img {\n          margin-right: 20px;\n          cursor: pointer;\n        }\n      }\n      & .img-logo {\n        width: 76px;\n        height: 42px;\n      }\n    }\n    & h2 {\n      text-align: left;\n      font-size: 22px;\n      margin-top: 52px;\n      font-weight: bolder;\n      color: lightgrey;\n    }\n  }\n\n  @media screen and (max-width: 720px) {\n    & .App-header {\n      padding: 0px 16% 44px;\n      & .menu-mobile {\n        position: fixed;\n        background-color: #000000;\n        width: 100%;\n        left: 0;\n        text-align: left;\n        padding-left: 22px;\n        padding-bottom: 28px;\n        padding-top: 21px;\n      }\n      & .navbar {\n        align-items: center;\n        padding: 20px 5% !important;\n        & img {\n          width: 35px !important;\n        }\n        & nav {\n          display: none !important;\n        }\n        & .img-logo {\n          width: 47px !important;\n          height: 25px;\n          margin-left: 25px;\n        }\n      }\n      & .contentlang {\n        display: flex;\n        & .img-esp {\n          margin-right: auto !important;\n        }\n      }\n      & .hamburguer {\n        display: block !important;\n        font-size: 27px;\n      }\n      & .title {\n        & h2 {\n          font-size: 17px;\n          margin-top: auto;\n        }\n        & h1 {\n          padding-top: 46px;\n        }\n      }\n    }\n  }\n"]))),w=function(n){var e=Object(c.useState)(!1),t=Object(p.a)(e,2),i=t[0],a=t[1];return Object(x.jsx)(j,{children:Object(x.jsxs)("header",{className:"App-header",children:[Object(x.jsxs)("div",{className:"navbar ".concat(n.offset>220&&"delay"),children:[Object(x.jsx)("div",{className:"hamburguer",children:i?Object(x.jsx)(g.a,{onClick:function(){return a(!1)},className:"close"}):Object(x.jsx)(g.a,{className:"bars",onClick:function(){return a(!0)}})}),Object(x.jsx)("img",{className:"img-logo",src:"https://diegoardilasoluciones.netlify.app/img/da..png"}),Object(x.jsxs)("nav",{children:[Object(x.jsx)("a",{href:"",children:"es"===n.lang?"Inicio":"Start"}),Object(x.jsx)("a",{href:"",children:"es"===n.lang?"Servicios":"Services"}),Object(x.jsxs)("a",{href:"",children:["es"===n.lang?"Proyectos":"Projects"," "]}),Object(x.jsx)("a",{href:"#index",children:"es"===n.lang?"Qui\xe9n Soy":"Who I am"}),Object(x.jsxs)("a",{href:"#footer",children:["es"===n.lang?"Contacto":"Contact"," "]})]}),Object(x.jsxs)("div",{className:"contentlang",children:[Object(x.jsx)("img",{src:"https://s1.significados.com/foto/american-flag-1311743-180_sm.png",onClick:function(){return n.setLang("en")},title:"English"}),Object(x.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png",onClick:function(){return n.setLang("es")},title:"Espa\xf1ol",className:"img-esp"})]})]}),i&&Object(x.jsxs)("div",{className:"menu-mobile",children:[Object(x.jsx)("a",{href:"",children:"es"===n.lang?"Inicio":"Start"}),Object(x.jsx)("a",{href:"",children:"es"===n.lang?"Servicios":"Services"}),Object(x.jsxs)("a",{href:"",children:["es"===n.lang?"Proyectos":"Projects"," "]}),Object(x.jsx)("a",{href:"#index",children:"es"===n.lang?"Qui\xe9n Soy":"Who I am"}),Object(x.jsxs)("a",{href:"",children:["es"===n.lang?"Contacto":"Contact"," "]})]}),Object(x.jsxs)("div",{className:"title",children:[Object(x.jsx)("h1",{children:"Diego Ardila"}),Object(x.jsx)("h2",{id:"index",children:"es"===n.lang?"Dise\xf1ador gr\xe1fico, UI/UX y desarrollador de software":"Graphic designer, UI/UX and software developer"})]})]})})},v=t(125),O=m.a.div(s||(s=Object(u.a)(["\n  .modal {\n    position: fixed;\n    top: 286px;\n    background-color: white;\n    margin: 0 auto;\n    width: 80%;\n    padding: 44px 26px 90px 67px;\n    z-index: 502;\n    text-align: center;\n    -webkit-animation: fadein 0.5s;\n    animation: fadein 0.5s;\n    border-radius: 15px;\n    & h1 {\n      margin-bottom: 37px;\n    }\n    & .icon-close {\n      cursor: pointer;\n      float: right;\n      font-weight: bold;\n      font-size: 31px;\n    }\n    & .content-cards {\n      display: flex;\n      justify-content: center;\n      & .card {\n        border: 1px solid;\n        margin-right: 40px;\n        cursor: pointer;\n        border-radius: 5px;\n        padding: 30px;\n        width: 25%;\n      }\n    }\n    & .visitItem_1 {\n      background-color: #0808089e;\n      color: white;\n      position: absolute;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      left: 386px;\n      height: 282px;\n      width: 355px;\n      cursor: pointer;\n      top: 142px;\n      cursor: pointer;\n      & div {\n        text-align: center;\n        & i {\n          font-size: 45px;\n        }\n\n        & p {\n          font-size: 44px;\n          font-weight: bold;\n        }\n      }\n    }\n    & .button {\n      margin-top: 41px !important;\n    }\n  }\n  @keyframes fadein {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n\n  .hidemodal {\n    animation: fadeout 0.5s;\n  }\n\n  .shadow {\n    background: rgba(0, 0, 0, 0.2);\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    display: block;\n    z-index: 500;\n    top: 0;\n    left: 0;\n  }\n\n  @media screen and (max-width: 720px) {\n    .modal {\n      top: 90px;\n      height: 364px;\n      overflow-y: auto;\n      & h1 {\n        text-align: right;\n      }\n      & .content-cards {\n        display: block !important;\n        & .card {\n          margin-right: auto;\n        }\n      }\n    }\n  }\n"]))),y=function(n){var e=Object(c.useState)(3),t=Object(p.a)(e,2),i=t[0],a=t[1];function o(){var e=document.getElementById("hidemodal"),t=setInterval((function(){e.style.opacity||(e.style.opacity=1),e.style.opacity>0?(e.style.opacity-=.1,setTimeout((function(){n.modal&&n.setModal(!1)}),300)):clearInterval(t)}),15)}return Object(x.jsxs)(O,{id:"hidemodal",children:[Object(x.jsxs)("div",{className:"modal",children:[Object(x.jsx)(g.a,{className:"close icon-close",onClick:function(){return o()}}),Object(x.jsxs)("h1",{children:[" ","es"===n.lang?"Proyectos":"Proyects"," "]}),Object(x.jsxs)("div",{className:"content-cards",children:[[{title:"Water pacific",url:"https://diegoardilasoluciones.netlify.app/waterpacificwebsite/",image:"https://diegoardilasoluciones.netlify.app/waterpacificwebsite/img/pics/logotipo_water_pacific_1.png"},{title:"Imepesaje",url:"https://imepesaje.netlify.app/",image:"https://imepesaje.netlify.app/images/logo.png"}].map((function(n,e){return Object(x.jsxs)("div",{className:"card",onClick:function(){return window.open(n.url,"_blank")},onMouseEnter:function(){return a(e)},onMouseLeave:function(){return a(3)},children:[Object(x.jsx)("img",{src:n.image}),n.title]},e)})),0===i&&Object(x.jsx)("div",{className:"visitItem_1","data-aos":"zoom-in",onMouseEnter:function(){return a(0)},onMouseLeave:function(){return a(3)},onClick:function(){return window.open(0===i&&"https://diegoardilasoluciones.netlify.app/waterpacificwebsite/")},children:Object(x.jsxs)("div",{children:[Object(x.jsx)(g.a,{className:"world"}),Object(x.jsx)("p",{children:"es"===n.lang?"Visitar el sitio":"Visit the site"})]})}),1===i&&Object(x.jsx)("div",{className:"visitItem_1","data-aos":"zoom-in",onMouseEnter:function(){return a(1)},onMouseLeave:function(){return a(3)},onClick:function(){return window.open(1===i&&"https://diegoardilasoluciones.netlify.app/waterpacificwebsite/")},style:{left:"782px"},children:Object(x.jsxs)("div",{children:[Object(x.jsx)(g.a,{className:"world"}),Object(x.jsx)("p",{children:"es"===n.lang?"Visitar el sitio":"Visit the site"})]})})]})]}),n.modal&&Object(x.jsx)("div",{className:"shadow",onClick:function(){o()},children:"."})]})},k=t(82),N=t.n(k),C=(t(108),t(86)),z=function(){var n=Object(c.useState)(!1),e=Object(p.a)(n,2),t=e[0],i=e[1],a=Object(c.useState)("en"),o=Object(p.a)(a,2),s=o[0],r=o[1],l=Object(c.useState)(0),d=Object(p.a)(l,2),u=d[0],m=d[1],f=Object(c.useState)(!1),j=Object(p.a)(f,2),O=j[0],k=j[1];return Object(c.useEffect)((function(){N.a.init({duration:1e3})}),[]),Object(c.useEffect)((function(){window.onscroll=function(){m(window.pageYOffset)}})),Object(x.jsxs)(h,{className:"App",children:[Object(x.jsx)(w,{lang:s,setLang:r,offset:u,setOffset:m}),Object(x.jsxs)("div",{className:"flexcolumns",children:[Object(x.jsxs)("div",{className:"column1",children:[Object(x.jsx)("img",{src:"https://disenowebakus.net/imagenes/servicios-web/diseno-de-paginas-web/diseno-web-para-empresas-mexico.jpg"}),Object(x.jsxs)("h1",{children:[" ","es"===s?"Proyectos":"Proyects"]}),Object(x.jsx)(C.a,{itemsToShow:1,children:[{title:"Water Pacific",text:"es"===s?" El invento ha sido probado en el departamento colombiano de Antioquia, m\xe1s concretamente en el Valle de Aburr\xe1 y, produce 35 litros de agua al d\xeda. Water Pacific Se trata de un ingenioso invento que puede suponer una buena soluci\xf3n para el desabastecimiento de agua en algunas zonas, ya que, la humedad relativa en el aire existe hasta en los lugares m\xe1s \xe1ridos del planeta":"The invention has been tested in the Colombian department of Antioquia, more specifically in the Aburr\xe1 Valley, and produces 35 liters of water per day. Water Pacific This is an ingenious invention that can be a good solution for the shortage of water in some areas, since the relative humidity in the air exists even in the most arid places on the planet",image:"https://diegoardilasoluciones.netlify.app/waterpacificwebsite/img/pics/logotipo_water_pacific_1.png",url:"https://diegoardilasoluciones.netlify.app/waterpacificwebsite"},{title:"Imepesaje",text:"es"===s?"Esta p\xe1gina trata de un tipo de inventario y colecci\xf3n de insumos para la alta cocina e insumos industriales llamada Imepesaje y por medio de este se da a conocer todos sus productos":"This page deals with a type of inventory and collection of supplies for haute cuisine and industrial supplies called Imepesaje and through this all its products are disclosed",image:"https://imepesaje.netlify.app/images/logo.png",url:"https://imepesaje.netlify.app"}].map((function(n,e){return Object(x.jsxs)("div",{"data-aos":"fade-left",children:[Object(x.jsx)("h3",{children:n.title}),Object(x.jsx)("p",{children:n.text}),O&&Object(x.jsx)("div",{className:"visitItem","data-aos":"zoom-in",onMouseEnter:function(){return k(!0)},onMouseLeave:function(){return k(!1)},onClick:function(){return window.open(n.url)},children:Object(x.jsxs)("div",{children:[Object(x.jsx)(g.a,{className:"world"}),Object(x.jsx)("p",{children:"es"===s?"Visitar el sitio":"Visit the site"})]})}),Object(x.jsx)("img",{alt:"",className:"img-proyects",src:n.image,onMouseEnter:function(){return k(!0)},onMouseLeave:function(){return k(!1)}})]},e)}))}),Object(x.jsx)(v.a,{onClick:function(){i(!0)},secondary:!0,children:"es"===s?"Ver todos los proyectos":"See all projects"}),t&&Object(x.jsx)(y,{setModal:i,modal:t,lang:s,setLang:r,setVisit:k})]}),Object(x.jsxs)("div",{className:"column2",children:[Object(x.jsxs)("h1",{children:[" ","es"===s?"Qui\xe9n soy":"Who I am"," "]}),Object(x.jsx)("p",{children:"es"===s?"Soy un desarrollador de software con enfoque en servicios y soluciones, con experiencia en el \xe1mbito de las tecnolog\xedas de la informaci\xf3n y las comunicaciones. Mi principal compromiso con los clientes es conseguir que las soluciones que ofrezco tengan un impacto positivo en su organizaci\xf3n. Ofrezco servicios a la carta atendiendo a las necesidades de cada cliente y abarcando desde los servicios tradicionales hasta las soluciones m\xe1s innovadoras. Como desarrollador inform\xe1tico, la mejor manera de satisfacer las necesidades del cliente es conocer sus peculiaridades y requisitos y as\xed dise\xf1ar la mejor soluci\xf3n posible para cada caso en particular. Ofrecer servicios inform\xe1ticos de calidad es nuestra meta, dispongo de los productos l\xedderes de cada segmento, as\xed como los fabricantes y proveedores de referencia. Porque nuestro \xe9xito se basa en la confianza que brindan los clientes.":"I am a software developer with a focus on services and solutions, with experience in the field of information and communication technologies. My main commitment to clients is to ensure that the solutions I offer have a positive impact on their organization. I offer \xe0 la carte services meeting the needs of each client and ranging from traditional services to the most innovative solutions. As a computer developer, the best way to satisfy the client's needs is to know their peculiarities and requirements and thus design the best possible solution for each particular case. Offering quality computer services is our goal, I have the leading products in each segment, as well as the reference manufacturers and suppliers. Because our success is based on the trust that our customers provide."}),Object(x.jsx)("h1",{children:"es"===s?"Servicios":"Services"}),Object(x.jsx)("p",{children:"es"===s?"Creaci\xf3n de p\xe1ginas web, desarrollo de software de todo tipo, desarrollo m\xf3vil, creaci\xf3n de dise\xf1os publicitarios.":"Creation of web pages, software development of all kinds, mobile development, creation of advertising designs."})]})]}),Object(x.jsxs)("div",{className:"socialchat",children:[u>220&&Object(x.jsx)(g.a,{className:"arrow alternate circle up",onClick:function(n){return window.scrollTo(0,0)},"data-aos":"zoom-in"}),Object(x.jsx)(g.a,{className:"facebook messenger",onClick:function(){return window.open(" http://m.me/diegoardilasoluciones")}}),Object(x.jsx)(g.a,{className:"whatsapp",onClick:function(){return window.open("https://wa.me/573044312140")}})]}),Object(x.jsx)(b,{})]})},I=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,126)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,o=e.getLCP,s=e.getTTFB;t(n),i(n),a(n),o(n),s(n)}))};t(112);d.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(z,{})}),document.getElementById("root")),I()}},[[113,1,2]]]);
//# sourceMappingURL=main.bf3942bd.chunk.js.map