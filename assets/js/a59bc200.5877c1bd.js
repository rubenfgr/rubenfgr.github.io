"use strict";(self.webpackChunkruben_rosales_web=self.webpackChunkruben_rosales_web||[]).push([[8675],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>b});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(t),u=o,b=c["".concat(i,".").concat(u)]||c[u]||d[u]||l;return t?a.createElement(b,r(r({ref:n},m),{},{components:t})):a.createElement(b,r({ref:n},m))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<l;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6447:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const l={title:"Introducci\xf3n",sidebar_position:2},r=void 0,s={unversionedId:"web_components/intro",id:"web_components/intro",title:"Introducci\xf3n",description:"Los componentes web son bloques de c\xf3digo que encapsulan la estructura interna de elementos HTML, incluyendo CSS y JavaScript, permitiendo as\xed que el c\xf3digo se pueda volver a usar como se quiera en otras webs y aplicaciones",source:"@site/docs/web_components/intro.mdx",sourceDirName:"web_components",slug:"/web_components/intro",permalink:"/docs/web_components/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web_components/intro.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Introducci\xf3n",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Referencia",permalink:"/docs/web_components/referencia"},next:{title:"Ejemplo StencilJS + Angular",permalink:"/docs/web_components/example_stencil_angular"}},i={},p=[{value:"Elementos personalizados",id:"elementos-personalizados",level:3},{value:"DOM de sombra",id:"dom-de-sombra",level:2},{value:"Plantillas HTML",id:"plantillas-html",level:2},{value:"Ejemplo completo",id:"ejemplo-completo",level:2}],m={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Los componentes web son bloques de c\xf3digo que encapsulan la estructura interna de elementos HTML, incluyendo CSS y JavaScript, permitiendo as\xed que el c\xf3digo se pueda volver a usar como se quiera en otras webs y aplicaciones"),(0,o.kt)("admonition",{title:"\xa1A TENER EN CUENTA!",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"La principal caracter\xedstica de los ",(0,o.kt)("strong",{parentName:"p"},"Componentes Web")," es la ",(0,o.kt)("strong",{parentName:"p"},"REUTILIZACI\xd3N"),".")),(0,o.kt)("p",null,"Est\xe1n formados por diferentes tecnolog\xedas:"),(0,o.kt)("h3",{id:"elementos-personalizados"},"Elementos personalizados"),(0,o.kt)("p",null,"Permiten definir elementos personalizados y su comportamiento. Se componen de un ",(0,o.kt)("strong",{parentName:"p"},"nombre"),", una ",(0,o.kt)("strong",{parentName:"p"},"clase")," y un ",(0,o.kt)("strong",{parentName:"p"},"objecto opcional")," con la propiedad extends (solo cuando vamos a extender un elemento integrado)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2 tipos:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Aut\xf3nomos"),". Son independientes y no heredan de elementos HTML est\xe1ndar"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Definici\xf3n: customElements.define("my-element", MyElementClass);'),(0,o.kt)("li",{parentName:"ul"},'Uso JS: document.createElement("my-element");'),(0,o.kt)("li",{parentName:"ul"},"Uso HTML: ",(0,o.kt)("inlineCode",{parentName:"li"},"<my-element>...</my-element>")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Integrados personalizados"),". Heredan de elementos HTML b\xe1sicos."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Definici\xf3n: customElements.define("my-element", MyElementClass, { extends: "p" });'),(0,o.kt)("li",{parentName:"ul"},'Uso JS: document.createElement("p", { is: "my-element" });'),(0,o.kt)("li",{parentName:"ul"},"Uso HTML: ",(0,o.kt)("inlineCode",{parentName:"li"},'<p is="my-element">...</p>'))))),(0,o.kt)("h2",{id:"dom-de-sombra"},"DOM de sombra"),(0,o.kt)("p",null,"El Shadow DOM crea un sub-\xe1rbol dentro del DOM principal. El Shadow DOM contiene nodos HTML, CSS y JS independientes, es decir, ",(0,o.kt)("strong",{parentName:"p"},"permite la encapsulaci\xf3n de peque\xf1as partes del documento"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3 conceptos principales:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Shadow host"),": nodo del DOM principal donde se ancla el Shadow DOM"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Shadow root"),": nodo ra\xedz del Shadow Tree"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Shadow boundary"),": l\xedmites entre el DOM Tree y DOM principal"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Shadow tree"),": \xe1rbol DOM dentro del Shadow DOM")),(0,o.kt)("h2",{id:"plantillas-html"},"Plantillas HTML"),(0,o.kt)("p",null,"Elementos ",(0,o.kt)("strong",{parentName:"p"},"<template",">")," y ",(0,o.kt)("strong",{parentName:"p"},"<slot",">")," que permite escribir plantillas que no se muestran en la p\xe1gina y que se pueden reutilizar tantas veces como se necesiten."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Caracter\xedsticas interesantes")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Si se agrega un estilo dentro del template tendr\xe1 el alcance \xfanicamente para el fragmento de c\xf3digo que se crea al utilizarlo."),(0,o.kt)("li",{parentName:"ul"},"Si se utiliza un slot este se sobreescribe con la nueva definici\xf3n, si no se utiliza, se usar\xe1 el c\xf3digo del template por defecto.")),(0,o.kt)("h2",{id:"ejemplo-completo"},"Ejemplo completo"),(0,o.kt)("admonition",{title:"Referencia",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots"},"https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Creando una plantilla")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<template id="element-details-template">\n  <style>\n    details {\n      font-family: "Open Sans Light", Helvetica, Arial;\n    }\n    .name {\n      font-weight: bold;\n      color: #217ac0;\n      font-size: 120%;\n    }\n    h4 {\n      margin: 10px 0 -8px 0;\n    }\n    h4 span {\n      background: #217ac0;\n      padding: 2px 6px 2px 6px;\n    }\n    h4 span {\n      border: 1px solid #cee9f9;\n      border-radius: 4px;\n    }\n    h4 span {\n      color: white;\n    }\n    .attributes {\n      margin-left: 22px;\n      font-size: 90%;\n    }\n    .attributes p {\n      margin-left: 16px;\n      font-style: italic;\n    }\n  </style>\n  <details>\n    <summary>\n      <span>\n        <code class="name"\n          >&lt;<slot name="element-name">NEED NAME</slot>&gt;</code\n        >\n        <span class="desc"\n          ><slot name="description">NEED DESCRIPTION</slot></span\n        >\n      </span>\n    </summary>\n    <div class="attributes">\n      <h4><span>Attributes</span></h4>\n      <slot name="attributes"><p>None</p></slot>\n    </div>\n  </details>\n  <hr />\n</template>\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Creando el componente web")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'customElements.define(\n  "element-details",\n  class extends HTMLElement {\n    constructor() {\n      super();\n      const template = document.getElementById(\n        "element-details-template"\n      ).content;\n      const shadowRoot = this.attachShadow({ mode: "open" });\n      shadowRoot.appendChild(template.cloneNode(true));\n    }\n  }\n);\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Utilizando el componente web")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<element-details>\n  <span slot="element-name">slot</span>\n  <span slot="description"\n    >A placeholder inside a web componente that users can fill with their own\n    markup, with the effect of composing different DOM trees together.</span\n  >\n  <dl slot="attributes">\n    <dt>name</dt>\n    <dd>The name of the slot.</dd>\n  </dl>\n</element-details>\n\n<element-details>\n  <span slot="element-name">template</span>\n  <span slot="description"\n    >A mechanism for holding client- side content that is not to be rendered\n    when a page is loaded but may subsequently be instantiated during runtime\n    using JavaScript.</span\n  >\n</element-details>\n')))}d.isMDXComponent=!0}}]);