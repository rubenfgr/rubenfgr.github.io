"use strict";(self.webpackChunkruben_rosales_web=self.webpackChunkruben_rosales_web||[]).push([[7945],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9192:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const o={title:"Introducci\xf3n",sidebar_position:2},i=void 0,s={unversionedId:"firebase/cloud_messaging/intro",id:"firebase/cloud_messaging/intro",title:"Introducci\xf3n",description:"Firebase Cloud Messaging (FCM)",source:"@site/docs/firebase/cloud_messaging/intro.mdx",sourceDirName:"firebase/cloud_messaging",slug:"/firebase/cloud_messaging/intro",permalink:"/docs/firebase/cloud_messaging/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/firebase/cloud_messaging/intro.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Introducci\xf3n",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Referencia",permalink:"/docs/firebase/cloud_messaging/reference"},next:{title:"Ejemplo Node + Angular",permalink:"/docs/firebase/cloud_messaging/example_node_angular"}},l={},c=[{value:"Firebase Cloud Messaging (FCM)",id:"firebase-cloud-messaging-fcm",level:2},{value:"Caracter\xedsticas",id:"caracter\xedsticas",level:2},{value:"\xbfC\xf3mo funciona?",id:"c\xf3mo-funciona",level:2}],u={toc:c},p="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"firebase-cloud-messaging-fcm"},"Firebase Cloud Messaging (FCM)"),(0,a.kt)("p",null,"Soluci\xf3n de mensajer\xeda multiplataforma que te ptermite enviar mensajes de forma segura y sin costo."),(0,a.kt)("h2",{id:"caracter\xedsticas"},"Caracter\xedsticas"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Env\xeda mensajes de notificaci\xf3n o mensajes de datos"),(0,a.kt)("li",{parentName:"ul"},"Segmentaci\xf3n de mensajes",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A dispositivos individuales"),(0,a.kt)("li",{parentName:"ul"},"A grupos de dispositivos"),(0,a.kt)("li",{parentName:"ul"},"A dispositivos subscritos a temas"))),(0,a.kt)("li",{parentName:"ul"},"Env\xedo de mensajes desde apps cliente")),(0,a.kt)("h2",{id:"c\xf3mo-funciona"},"\xbfC\xf3mo funciona?"),(0,a.kt)("p",null,"Incluye dos componentes principales:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Entorno de confianza como Cloud Functions para Firebase o un servidor de apps para generar, segmentar y enviar mensajes."),(0,a.kt)("li",{parentName:"ul"},"App cliente de Apple, Android o Web")),(0,a.kt)("p",null,"Se pueden enviar mensajes desde:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SDK de Firebase Admin o protocolos de servidor de FCM, (por ejemplo, en un backend con NodeJS)"),(0,a.kt)("li",{parentName:"ul"},"Compositor de Notificaciones en la consola de Firebase. Permite crear campa\xf1as.")))}d.isMDXComponent=!0}}]);