(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{108:function(n,e,i){"use strict";i.r(e);var a,o,t,s,c=i(0),r=i.n(c),l=i(29),d=i.n(l),p=(i(95),i(48)),u=i(21),m=i(22),j=m.a.div(a||(a=Object(u.a)(["\n  text-align: center;\n  a {\n    text-decoration: none;\n    color: #fff;\n  }\n  .flexcolumns {\n    display: flex;\n    width: 70%;\n    margin: 0 auto;\n    text-align: left;\n    margin-top: 73px;\n    margin-bottom: 98px;\n    & .column1 {\n      width: 70%;\n      & img {\n        width: 100%;\n      }\n      h3 {\n        margin-top: 0;\n        font-weight: 500;\n      }\n      .button {\n        margin-top: 8px;\n      }\n    }\n    & .column2 {\n      width: 30%;\n      margin-left: 60px;\n    }\n  }\n"]))),b=i(44),h=m.a.div(o||(o=Object(u.a)(["\n  footer {\n    background: #f7f7f7;\n    padding: 92px;\n    & .flexicons {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-top: 40px;\n    }\n  }\n  i {\n    font-size: 20px;\n    margin-right: 13px;\n    margin-left: 19px;\n  }\n  .facebook,\n  .linkedin {\n    cursor: pointer;\n  }\n  .icon-social {\n    margin-right: 0;\n  }\n"]))),x=i(1),f=function(){return Object(x.jsx)(h,{children:Object(x.jsxs)("footer",{children:[Object(x.jsxs)("div",{className:"flexicons",children:[Object(x.jsx)(b.a,{onClick:function(){return window.open("https://www.linkedin.com/in/diego-alexander-ardila-rozo-491960229","_blank")},className:"linkedin icon-social"}),Object(x.jsx)(b.a,{onClick:function(){return window.open("https://www.facebook.com/diegoardilasoluciones","_blank")},className:"facebook f icon-social"})]}),Object(x.jsxs)("div",{className:"flexicons",children:[Object(x.jsx)(b.a,{className:"envelope outline"}),"alexander.diego.2007@hotmail.com ",Object(x.jsx)(b.a,{className:"whatsapp"}),"304-256-7011 - 583-18-58"]})]})})},g=m.a.div(t||(t=Object(u.a)(["\n  .App-header {\n    background-color: #000000;\n    min-height: 28vh;\n    flex-direction: column;\n    font-size: calc(10px + 2vmin);\n    color: white;\n    padding: 0px 16%;\n    & h1 {\n      text-align: left;\n      padding-top: 80px;\n    }\n    & .title {\n      margin-top: 57px;\n    }\n\n    & .delay {\n      transition: all 0.7s ease;\n      animation: imganim 0.7s alternate-reverse;\n    }\n\n    @keyframes imganim {\n      from {\n      }\n      to {\n        background-color: #999191;\n      }\n    }\n\n    & .navbar {\n      display: flex;\n      justify-content: space-between;\n      padding: 20px 16%;\n      position: fixed;\n      background-color: #000000;\n      width: 100%;\n      top: 0;\n      right: 0;\n      & img {\n        width: 76px;\n      }\n      & nav {\n        width: 50%;\n        text-align: right;\n        display: flex;\n        justify-content: space-around;\n        font-size: 17px;\n        align-items: center;\n      }\n      & h1 {\n        margin: 0;\n      }\n      & .contentlang {\n        & img {\n          margin-right: 20px;\n          cursor: pointer;\n        }\n      }\n    }\n    h2 {\n      text-align: left;\n      font-size: 22px;\n      margin-top: 52px;\n      font-weight: bolder;\n      color: lightgrey;\n    }\n  }\n"]))),O=function(){var n=Object(c.useState)(0),e=Object(p.a)(n,2),i=e[0],a=e[1],o=Object(c.useState)("es"),t=Object(p.a)(o,2),s=t[0],r=t[1];return Object(c.useEffect)((function(){window.onscroll=function(){a(window.pageYOffset)}})),Object(x.jsx)(g,{children:Object(x.jsxs)("header",{className:"App-header",children:[Object(x.jsxs)("div",{className:"navbar ".concat(i>220&&"delay"),children:[Object(x.jsx)("img",{src:"https://angry-mcnulty-639e2f.netlify.app/img/da..png"}),Object(x.jsxs)("nav",{children:[Object(x.jsx)("a",{href:"",children:"Inicio"}),Object(x.jsx)("a",{href:"",children:" Servicios"}),Object(x.jsx)("a",{href:"",children:" Proyectos"})," ",Object(x.jsx)("a",{href:"#index",children:"Qui\xe9n Soy"}),Object(x.jsx)("a",{href:"",children:" Contacto"})]}),Object(x.jsxs)("div",{className:"contentlang",children:[Object(x.jsx)("img",{src:"https://s1.significados.com/foto/american-flag-1311743-180_sm.png",onClick:function(){return r("en")},title:"English"}),Object(x.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png",onClick:function(){return r("es")},title:"Espa\xf1ol"})]})]}),Object(x.jsxs)("div",{className:"title",children:[Object(x.jsx)("h1",{children:"Diego Ardila"}),Object(x.jsxs)("h2",{id:"index",children:["es"===s?"Dise\xf1ador":"Designer"," gr\xe1fico, UI/UX y desarrollador de software"]})]})]})})},v=i(120),y=m.a.div(s||(s=Object(u.a)(["\n  .modal {\n    position: fixed;\n    top: 286px;\n    background-color: white;\n    margin: 0 auto;\n    width: 80%;\n    padding: 44px;\n    z-index: 502;\n    text-align: center;\n    animation: fadein 0.5s;\n    border-radius: 15px;\n    & h1 {\n      margin-bottom: 37px;\n    }\n    & .icon-close {\n      cursor: pointer;\n      float: right;\n      font-weight: bold;\n      font-size: 31px;\n    }\n    & .content-cards {\n      display: flex;\n      justify-content: center;\n      & .card {\n        border: 1px solid;\n        margin-right: 40px;\n        cursor: pointer;\n        border-radius: 5px;\n        padding: 30px;\n      }\n    }\n    & .button {\n      margin-top: 41px;\n    }\n  }\n  @keyframes fadein {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n\n  .hidemodal {\n    animation: fadeout 0.5s;\n  }\n\n  .shadow {\n    background: rgba(0, 0, 0, 0.2);\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    display: block;\n    z-index: 500;\n    top: 0;\n    left: 0;\n  }\n"]))),w=function(n){function e(){var e=document.getElementById("hidemodal"),i=setInterval((function(){e.style.opacity||(e.style.opacity=1),e.style.opacity>0?(e.style.opacity-=.1,setTimeout((function(){n.modal&&n.setModal(!1)}),300)):clearInterval(i)}),15)}return Object(x.jsxs)(y,{id:"hidemodal",children:[Object(x.jsxs)("div",{className:"modal",children:[Object(x.jsx)("span",{className:"icon-close",onClick:function(){return e()},children:"x"}),Object(x.jsx)("h1",{children:" Proyectos"}),Object(x.jsx)("div",{className:"content-cards",children:[1,2,3,4].map((function(n,e){return Object(x.jsxs)("div",{className:"card",onClick:function(){return window.open("https://www.google.com","_blank")},children:["Proyecto ",n,Object(x.jsx)("p",{children:"descripcion"})]},e)}))}),Object(x.jsx)(v.a,{onClick:function(){e()},children:"Cerrar"})]}),n.modal&&Object(x.jsx)("div",{className:"shadow",onClick:function(){e()},children:"."})]})},k=function(){var n=Object(c.useState)(!1),e=Object(p.a)(n,2),i=e[0],a=e[1];return Object(x.jsxs)(j,{className:"App",children:[Object(x.jsx)(O,{}),Object(x.jsxs)("div",{className:"flexcolumns",children:[Object(x.jsxs)("div",{className:"column1",children:[Object(x.jsx)("img",{src:"https://disenowebakus.net/imagenes/servicios-web/diseno-de-paginas-web/diseno-web-para-empresas-mexico.jpg"}),Object(x.jsx)("h1",{children:"Proyectos"})," ",Object(x.jsx)("h3",{children:"Water Pacific"}),Object(x.jsx)("p",{children:"Abel \xc1ngel Quiroz ha inventado un dispositivo llamado Water Pacific, que recoge la humedad del aire y la transforma en agua apta para el consumo humano. El invento ha sido probado en el departamento colombiano de Antioquia, m\xe1s concretamente en el Valle de Aburr\xe1 y, produce 35 litros de agua al d\xeda. Water Pacific Se trata de un ingenioso invento que puede suponer una buena soluci\xf3n para el desabastecimiento de agua en algunas zonas, ya que, la humedad relativa en el aire existe hasta en los lugares m\xe1s \xe1ridos del planeta. Adem\xe1s este inventor tambi\xe9n ha dise\xf1ado el Proyecto Hydroball, capacitado para producir un litro de agua extra\xedda de la humedad del aire, con posibilidad de suministro de al menos diez plantas dentro de un cultivo. T\xfa tambi\xe9n tienes una mente creativa. Desarrolla todo tu potencial inscribi\xe9ndote en nuestro M\xe1ster en Construcci\xf3n y Explotaci\xf3n de Obras Hidr\xe1ulicas."}),Object(x.jsx)(v.a,{onClick:function(){a(!0)},secondary:!0,children:"Ver todos los proyectos"}),i&&Object(x.jsx)(w,{setModal:a,modal:i})]}),Object(x.jsxs)("div",{className:"column2",children:[Object(x.jsx)("h1",{children:"Qui\xe9n soy "}),Object(x.jsx)("p",{children:"Soy un desarrollador de software con enfoque en servicios y soluciones, con experiencia en el \xe1mbito de las tecnolog\xedas de la informaci\xf3n y las comunicaciones. Mi principal compromiso con los clientes es conseguir que las soluciones que ofrezco tengan un impacto positivo en su organizaci\xf3n. Ofrezco servicios a la carta atendiendo a las necesidades de cada cliente y abarcando desde los servicios tradicionales hasta las soluciones m\xe1s innovadoras. Como desarrollador inform\xe1tico, la mejor manera de satisfacer las necesidades del cliente es conocer sus peculiaridades y requisitos y as\xed dise\xf1ar la mejor soluci\xf3n posible para cada caso en particular. Ofrecer servicios inform\xe1ticos de calidad es nuestra meta, dispongo de los productos l\xedderes de cada segmento, as\xed como los fabricantes y proveedores de referencia. Porque nuestro \xe9xito se basa en la confianza que brindan los clientes."}),Object(x.jsx)("h1",{children:"Servicios"}),Object(x.jsx)("p",{children:"Creaci\xf3n de p\xe1ginas web, desarrollo de software de todo tipo, desarrollo m\xf3vil, creaci\xf3n de dise\xf1os publicitarios."})]})]}),Object(x.jsx)(f,{})]})},C=function(n){n&&n instanceof Function&&i.e(3).then(i.bind(null,121)).then((function(e){var i=e.getCLS,a=e.getFID,o=e.getFCP,t=e.getLCP,s=e.getTTFB;i(n),a(n),o(n),t(n),s(n)}))};i(107);d.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(k,{})}),document.getElementById("root")),C()},95:function(n,e,i){}},[[108,1,2]]]);
//# sourceMappingURL=main.b4086e5f.chunk.js.map