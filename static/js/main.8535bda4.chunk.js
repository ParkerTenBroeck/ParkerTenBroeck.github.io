(this["webpackJsonpparker-tenbroeck"]=this["webpackJsonpparker-tenbroeck"]||[]).push([[0],Array(23).concat([function(e,t,a){e.exports=a.p+"static/media/profile.712bdded.jpg"},function(e,t,a){e.exports=a.p+"static/media/skill-tile-icon-java.b244a81d.svg"},,,,function(e,t,a){e.exports=a(54)},,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/skill-tile-icon-c.5ec7c1ce.svg"},function(e,t,a){e.exports=a.p+"static/media/skill-tile-icon-cpp.576bfbba.svg"},function(e,t,a){e.exports=a.p+"static/media/skill-tile-icon-bash.affcbfa0.svg"},function(e,t,a){e.exports=a.p+"static/media/skill-tile-icon-mips.554f2b03.svg"},function(e,t,a){e.exports=a.p+"static/media/skill-tile-icon-vhdl.6e22129a.svg"},function(e,t,a){e.exports=a.p+"static/media/skill-tile-icon-javascript.538d50eb.svg"},function(e,t,a){e.exports=a.p+"static/media/skill-tile-icon-html.aad0d7ba.svg"},function(e,t,a){e.exports=a.p+"static/media/skill-tile-icon-css.146dc2b9.svg"},function(e,t,a){e.exports=a.p+"static/media/skill-tile-icon-reactjs.2677ea99.svg"},function(e,t,a){e.exports=a.p+"static/media/skill-tile-icon-php.7878af4c.svg"},function(e,t,a){e.exports=a.p+"static/media/skill-tile-icon-git.5fecff6f.svg"},function(e,t,a){e.exports=a.p+"static/media/skill-tile-icon-mysql.762ae109.svg"},function(e,t,a){e.exports=a.p+"static/media/features-split-image-01.d9cb99ce.png"},function(e,t,a){e.exports=a.p+"static/media/features-split-image-02.3c569239.png"},function(e,t,a){e.exports=a.p+"static/media/features-split-image-03.87e4d053.png"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),l=a.n(i),n=a(25),r=a.n(n),s=a(11),o=a(7),c=a(2),m=function(e){var t=e.component,a=e.layout,i=Object(c.a)(e,["component","layout"]);return a=void 0===a?function(e){return l.a.createElement(l.a.Fragment,null,e.children)}:a,l.a.createElement(s.a,Object.assign({},i,{render:function(e){return l.a.createElement(a,null,l.a.createElement(t,e))}}))},d=a(10),u=a(3),v=a.n(u),p=a(19),h=l.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),n=Object(d.a)(a,2),r=n[0],s=n[1],o=Object(i.useState)([]),c=Object(d.a)(o,2),m=c[0],u=c[1],v=function(e,t){return e.getBoundingClientRect().top<=r-t},h=function(){for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"50",l=t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t;v(l,i)?a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"):t.classList.contains("is-revealed")&&!v(l,i)&&t.classList.remove("is-revealed")},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(window.addEventListener("scroll",b),window.addEventListener("resize",f),h())}),[m]);var b=Object(p.throttle)((function(){h()}),30),f=Object(p.throttle)((function(){s(window.innerHeight)}),30);return Object(i.useEffect)((function(){h()}),[r]),l.a.createElement(l.a.Fragment,null,e.children())}));h.propTypes={children:v.a.func.isRequired};var b=h,f=a(15),g=a(1),E=a.n(g),N=a(4),w=function(e){var t=e.className,a=e.navPosition,n=e.hideNav,r=e.hideSignin,s=e.bottomOuterDivider,o=e.bottomDivider,m=Object(c.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),u=Object(i.useState)(!1),v=Object(d.a)(u,2),p=v[0],h=v[1],b=Object(i.useRef)(null),f=Object(i.useRef)(null);Object(i.useEffect)((function(){return p&&g(),document.addEventListener("keydown",x),document.addEventListener("click",O),function(){document.removeEventListener("keydown",x),document.removeEventListener("click",O),w()}}));var g=function(){document.body.classList.add("off-nav-is-active"),b.current.style.maxHeight=b.current.scrollHeight+"px",h(!0)},w=function(){document.body.classList.remove("off-nav-is-active"),b.current&&(b.current.style.maxHeight=null),h(!1)},x=function(e){p&&27===e.keyCode&&w()},O=function(e){b.current&&p&&!b.current.contains(e.target)&&e.target!==f.current&&w()},C=E()("site-header",s&&"has-bottom-divider",t);return l.a.createElement("header",Object.assign({},m,{className:C}),l.a.createElement("div",{className:"container-xl"},l.a.createElement("div",{className:E()("site-header-inner",o&&"has-bottom-divider")},l.a.createElement("div",{className:"site-header-inner"},l.a.createElement(N.a,{style:{"margin-right":"80px","white-space":"nowrap"},className:"text-xs",to:"/",onClick:w},"Parker TenBroeck")),!n&&l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{ref:f,className:"header-nav-toggle",onClick:p?w:g},l.a.createElement("span",{className:"screen-reader"},"Menu"),l.a.createElement("span",{className:"hamburger"},l.a.createElement("span",{className:"hamburger-inner"}))),l.a.createElement("nav",{ref:b,className:E()("header-nav",p&&"is-active")},l.a.createElement("div",{className:"header-nav-inner"},l.a.createElement("ul",{className:E()("list-reset text-xs",a&&"header-nav-".concat(a))},l.a.createElement("li",null,l.a.createElement(N.a,{to:"#0",onClick:w},"About")),l.a.createElement("li",null,l.a.createElement(N.a,{to:"#0",onClick:w},"Skills")),l.a.createElement("li",null,l.a.createElement(N.a,{to:"#0",onClick:w},"Projects")),l.a.createElement("li",null,l.a.createElement(N.a,{to:"#0",onClick:w},"Contact"))),!r&&l.a.createElement("ul",{className:"list-reset header-nav-right"},l.a.createElement("li",null,l.a.createElement(N.a,{to:"#0",className:"button button-primary button-wide-mobile button-sm",onClick:w},"Sign up")))))))))};w.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var x=w,O=function(e){var t=e.className,a=e.src,n=e.width,r=e.height,s=e.alt,o=Object(c.a)(e,["className","src","width","height","alt"]),m=Object(i.useState)(!1),u=Object(d.a)(m,2),v=u[0],p=u[1],h=Object(i.useRef)(null);Object(i.useEffect)((function(){b(h.current)}),[]);var b=function(e){var t,a,i=document.createElement("img");v||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return l.a.createElement("img",Object.assign({},o,{ref:h,className:t,src:a,width:n,height:r,alt:s,onLoad:function(){p(!0)}}))};O.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var C=O,y=function(e){var t=e.className,i=Object(c.a)(e,["className"]),n=E()("brand",t);return l.a.createElement("div",Object.assign({},i,{className:n}),l.a.createElement("h1",{className:"m-0"},l.a.createElement(N.a,{to:"/"},l.a.createElement(C,{src:a(23),alt:"Open",width:32,height:32}))))},k=function(e){var t=e.className,a=Object(c.a)(e,["className"]),i=E()("footer-nav",t);return l.a.createElement("nav",Object.assign({},a,{className:i}),l.a.createElement("ul",{className:"list-reset"},l.a.createElement("li",null,l.a.createElement(N.a,{to:"#0"},"Contact")),l.a.createElement("li",null,l.a.createElement(N.a,{to:"#0"},"About us")),l.a.createElement("li",null,l.a.createElement(N.a,{to:"#0"},"FAQ's")),l.a.createElement("li",null,l.a.createElement(N.a,{to:"#0"},"Support"))))},j=function(e){var t=e.className,a=e.wide,i=e.iconSize,n=Object(c.a)(e,["className","wide","iconSize"]),r=E()("footer-social",t);return l.a.createElement("div",Object.assign({},n,{className:r}),l.a.createElement("ul",{style:a?{"justify-content":"space-between"}:null,className:"list-reset"},l.a.createElement("li",null,l.a.createElement("a",{class:"link",href:"mailto:parkertenbroeck@gmail.com",target:"_blank",title:"Email",rel:"noreferrer"},l.a.createElement("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",version:"1.1",viewBox:"0 0 16 16",height:i,width:i,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM4 4h8c0.143 0 0.281 0.031 0.409 0.088l-4.409 5.143-4.409-5.143c0.127-0.058 0.266-0.088 0.409-0.088zM3 11v-6c0-0.021 0.001-0.042 0.002-0.063l2.932 3.421-2.9 2.9c-0.023-0.083-0.034-0.17-0.034-0.258zM12 12h-8c-0.088 0-0.175-0.012-0.258-0.034l2.846-2.846 1.413 1.648 1.413-1.648 2.846 2.846c-0.083 0.023-0.17 0.034-0.258 0.034zM13 11c0 0.088-0.012 0.175-0.034 0.258l-2.9-2.9 2.932-3.421c0.001 0.021 0.002 0.042 0.002 0.063v6z"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/ParkerTenBroeck"},l.a.createElement("svg",{width:i,height:i,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",null,"GitHub"),l.a.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://twitter.com/ParkerTenbroeck"},l.a.createElement("svg",{width:i,height:i,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",null,"Twitter"),l.a.createElement("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.instagram.com/parkertenbroeck/"},l.a.createElement("svg",{width:i,height:i,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",null,"Instagram"),l.a.createElement("g",null,l.a.createElement("circle",{cx:"12.145",cy:"3.892",r:"1"}),l.a.createElement("path",{d:"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"}),l.a.createElement("path",{d:"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"}))))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://linkedin.com/in/parker-tenbroeck-9a4881218"},l.a.createElement("svg",{width:i,height:i,viewBox:"0 0 65.326 65.326",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",null,"LinkedIn"),l.a.createElement("path",{d:"M958.98,112.559h-9.6V97.525c0-3.585-.064-8.2-4.993-8.2-5,0-5.765,3.906-5.765,7.939v15.294h-9.6V81.642h9.216v4.225h.129a10.1,10.1,0,0,1,9.093-4.994c9.73,0,11.524,6.4,11.524,14.726ZM918.19,77.416a5.571,5.571,0,1,1,5.57-5.572,5.571,5.571,0,0,1-5.57,5.572m4.8,35.143h-9.61V81.642h9.61Zm40.776-55.2h-55.21a4.728,4.728,0,0,0-4.781,4.67v55.439a4.731,4.731,0,0,0,4.781,4.675h55.21a4.741,4.741,0,0,0,4.8-4.675V62.025a4.738,4.738,0,0,0-4.8-4.67",transform:"translate(-903.776 -57.355)"}))))))};j.defaultProps={wide:!1,iconSize:"24px"};var D=j,L=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,n=Object(c.a)(e,["className","topOuterDivider","topDivider"]),r=E()("site-footer center-content-mobile",a&&"has-top-divider",t);return l.a.createElement("footer",Object.assign({},n,{className:r}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:E()("site-footer-inner",i&&"has-top-divider")},l.a.createElement("div",{className:"footer-top space-between text-xxs"},l.a.createElement(y,null),l.a.createElement(D,null)),l.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},l.a.createElement(k,null),l.a.createElement("div",{className:"footer-copyright"},"Made by ",l.a.createElement("a",{href:"https://cruip.com"},"Cruip"),". All right reserved")))))};L.defaultProps={topOuterDivider:!1,topDivider:!1};var S=L,H=function(e){var t=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement(x,{navPosition:"left",className:"reveal-from-bottom"}),l.a.createElement("main",{className:"site-content"},t),l.a.createElement(S,null))},M=a(14),P=a(6),B={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},z={types:Object(P.a)({},B.types),defaults:Object(P.a)({},B.defaults)},T={types:Object(P.a)({},B.types,{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(P.a)({},B.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},A={types:Object(P.a)({},B.types,{pushLeft:v.a.bool}),defaults:Object(P.a)({},B.defaults,{pushLeft:!1})},q=function(e){var t=e.className,a=e.tag,i=e.color,n=e.size,r=e.loading,s=e.wide,o=e.wideMobile,m=e.disabled,d=Object(c.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),u=E()("button",i&&"button-".concat(i),n&&"button-".concat(n),r&&"is-loading",s&&"button-block",o&&"button-wide-mobile",t),v=a;return l.a.createElement(v,Object.assign({},d,{className:u,disabled:m}))};q.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var F=q,V=function(e){var t=e.className,a=e.children,n=e.handleClose,r=e.show,s=e.closeHidden,o=e.video,m=e.videoTag,d=Object(c.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(i.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",p),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",p)}})),Object(i.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&n(e)},p=function(e){e.stopPropagation()},h=E()("modal",r&&"is-active",o&&"modal-video",t);return l.a.createElement(l.a.Fragment,null,r&&l.a.createElement("div",Object.assign({},d,{className:h,onClick:n}),l.a.createElement("div",{className:"modal-inner",onClick:p},o?l.a.createElement("div",{className:"responsive-video"},"iframe"===m?l.a.createElement("iframe",{title:"video",src:o,frameBorder:"0",allowFullScreen:!0}):l.a.createElement("video",{"v-else":!0,controls:!0,src:o})):l.a.createElement(l.a.Fragment,null,!s&&l.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:n}),l.a.createElement("div",{className:"modal-content"},a)))))};V.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var I=function(e){var t=e.className,i=e.radius,n=e.borderWidth,r=(e.borderColor,Object(c.a)(e,["className","radius","borderWidth","borderColor"])),s=E()("brand",t);return l.a.createElement("div",Object.assign({},r,{className:s}),l.a.createElement("h1",{className:"m-0"},l.a.createElement(N.a,{to:"/"},l.a.createElement(C,{src:a(23),alt:"Open",width:i,height:i,style:n?{"border-width":n}:null,class:"logo-round"}))))};I.defaultProps={radius:"128px",borderWidth:"4px",borderColor:null};var R=I,_=Object(P.a)({},z.defaults),W=function(e){var t=e.className,a=e.topOuterDivider,n=e.bottomOuterDivider,r=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,u=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),v=Object(i.useState)(!1),p=Object(d.a)(v,2),h=(p[0],p[1],E()("hero section center-content",a&&"has-top-divider",n&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t)),b=E()("hero-inner section-inner",r&&"has-top-divider",s&&"has-bottom-divider");return document.addEventListener("DOMContentLoaded",(function(e){var t=["Software Developer.","Student.","Cat Lover."];function a(e){var t,a=Object(M.a)(document.getElementsByClassName("typeWritter"));try{for(a.s();!(t=a.n()).done;){t.value.innerHTML=e}}catch(i){a.e(i)}finally{a.f()}}function i(e){if(e){var t,a=Object(M.a)(document.getElementsByClassName("blink"));try{for(a.s();!(t=a.n()).done;){t.value.classList.add("blinking-animation")}}catch(n){a.e(n)}finally{a.f()}}else{var i,l=Object(M.a)(document.getElementsByClassName("blink"));try{for(l.s();!(i=l.n()).done;){i.value.classList.remove("blinking-animation")}}catch(n){l.e(n)}finally{l.f()}}}!function e(l){t.length<=l&&(l=0),l<t[l].length&&function e(t,l,n,r){!n&&l<t.length?(a(t.substring(0,l+1)),l+1==t.length?(i(!0),setTimeout((function(){i(!1),e(t,l+1,!0,r)}),800)):setTimeout((function(){e(t,l+1,!1,r)}),100)):l>0?(a(t.substring(0,l-1)),setTimeout((function(){e(t,l-1,!0,r)}),40)):"function"==typeof r&&r()}(t[l],0,!1,(function(){e(l+1)}))}(0)})),l.a.createElement("section",Object.assign({},u,{className:h}),l.a.createElement("div",{className:"container tiles-item-inner"},l.a.createElement("div",{className:b},l.a.createElement("div",{className:"hero-content"},l.a.createElement("div",{className:"reveal-from-bottom logo-round-above-container","data-reveal-delay":"100"},l.a.createElement(R,null)),l.a.createElement("h4",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Parker TenBroeck"),l.a.createElement("div",{className:"container"},l.a.createElement("p",{class:"text-xs reveal-from-bottom","data-reveal-delay":"400",style:{"margin-bottom":"16px",display:"flex",justifyContent:"flex-start",alignItems:"center"}},l.a.createElement("svg",{style:{display:"block",marginRight:"8px",marginLeft:"0px",height:"100%"},stroke:"currentColor",fill:"none","stroke-width":"0",viewBox:"0 0 24 24",class:"text-gray-700 dark:text-gray-500 mr-4 md:mt-0.5",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M14 11H10V13H14V11Z",fill:"currentColor"}),l.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z",fill:"currentColor"})),l.a.createElement("span",{className:"typeWritter"}),l.a.createElement("span",{className:"blink"},"|")),l.a.createElement("p",{class:"text-xs reveal-from-bottom","data-reveal-delay":"400",style:{"margin-bottom":"16px",display:"flex",justifyContent:"flex-start",alignItems:"center"}},l.a.createElement("svg",{style:{display:"block",marginRight:"8px",marginLeft:"0px",height:"100%"},stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 12 16",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{"fill-rule":"evenodd",d:"M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"})),l.a.createElement("span",null,"Ontario, Canada")),l.a.createElement("p",{className:"text-xs m-0 mb-32 reveal-from-bottom",style:{"text-align":"left"},"data-reveal-delay":"600"},"My name is Parker TenBroeck. I'm an aspiring Software Developer, student, and cat lover. I thoroughly enjoy writing in Java, C and C++ with well-developed skills in JavaScript, Assembly(MIPS) and HTML. My programming experience is predominantly from personal projects, with school work making up the rest. I enjoy taking part and contributing to the open-source community, publishing my work for others to use. I am also a well-developed leader with experience as a student team-lead on a world champion FRC(First Robotics Competition) Robotics team, Simbotics 1114. I have always wanted to work with computers to learn and contribute to technology. Apart from that, when I'm not coding and the cold season's here, I love to head to the slopes and ski."),l.a.createElement("div",{className:"text-xxs reveal-from-bottom mb-16",style:{textAlign:"left"},"data-reveal-delay":"800"},l.a.createElement(F,{size:"sm",className:"text-xxs",style:{"border-radius":"20px"},tag:"a",color:"primary",href:"/resume/"},"See Resume")),l.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"1000"},l.a.createElement(D,{iconSize:"28px",wide:!0})))))))};W.defaultProps=_;var Z=W,G=function(e){var t=e.className,a=e.data,i=e.children,n=e.tag,r=Object(c.a)(e,["className","data","children","tag"]),s=E()("section-header",t),o=n;return l.a.createElement(l.a.Fragment,null,(a.title||a.paragraph)&&l.a.createElement("div",Object.assign({},r,{className:s}),l.a.createElement("div",{className:"container-xs"},i,a.title&&l.a.createElement(o,{className:E()(a.paragraph?"mb-0":"mb-16",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&l.a.createElement("p",{className:"m-0"},a.paragraph))))};G.defaultProps={children:null,tag:"h2"};var J=G,U=Object(P.a)({iconSize:"72px"},A.defaults),K=function(e){var t=e.iconSize,i=e.image,n=e.text,r=e.revealDelay;Object(c.a)(e,["iconSize","image","text","revealDelay"]);return l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":r},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image "},l.a.createElement("script",null,"console.log(image)"),l.a.createElement(C,{src:null!=i?i:a(24),alt:i,width:t,height:t}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("p",{className:"text-xs mt-0 mb-0"},n))))},Q=function(e){var t=e.className,i=(e.iconSize,e.topOuterDivider),n=e.bottomOuterDivider,r=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(c.a)(e,["className","iconSize","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=E()("features-tiles section",i&&"has-top-divider",n&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),p=E()("features-tiles-inner section-inner pt-0",r&&"has-top-divider",s&&"has-bottom-divider"),h=E()("tiles-wrap center-content",d&&"push-left");return l.a.createElement("section",Object.assign({},u,{className:v}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:p},l.a.createElement(J,{data:{title:"Skills"},className:"center-content"}),l.a.createElement("div",{className:h},l.a.createElement(K,{image:a(24),text:"Java"}),l.a.createElement(K,{image:a(38),text:"C"}),l.a.createElement(K,{image:a(39),text:"C++"}),l.a.createElement(K,{image:a(40),text:"Bash"}),l.a.createElement(K,{image:a(41),text:"MIPS"}),l.a.createElement(K,{image:a(42),text:"VHDL"}),l.a.createElement(K,{image:a(43),text:"JavaScript"}),l.a.createElement(K,{image:a(44),text:"HTML"}),l.a.createElement(K,{image:a(45),text:"CSS"}),l.a.createElement(K,{image:a(46),text:"React.js"}),l.a.createElement(K,{image:a(47),text:"PHP"}),l.a.createElement(K,{image:a(48),text:"Git"}),l.a.createElement(K,{image:a(49),text:"MySQL"})))))};Q.defaultProps=U;var Y=Q,$=Object(P.a)({},T.defaults),X=function(e){var t=e.className,i=e.topOuterDivider,n=e.bottomOuterDivider,r=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,p=e.imageFill,h=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),b=E()("features-split section",i&&"has-top-divider",n&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),f=E()("features-split-inner section-inner",r&&"has-top-divider",s&&"has-bottom-divider"),g=E()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return l.a.createElement("section",Object.assign({},h,{className:b}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:f},l.a.createElement(J,{data:{title:"Workflow that just works",paragraph:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum \u2014 semper quis lectus nulla at volutpat diam ut venenatis."},className:"center-content"}),l.a.createElement("div",{className:g},l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"brhuqweqweqweqewewe"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),l.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),l.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(C,{src:a(50),alt:"Features split 01",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast workflow"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),l.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),l.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(C,{src:a(51),alt:"Features split 02",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast workflow"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),l.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),l.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(C,{src:a(52),alt:"Features split 03",width:528,height:396})))))))};X.defaultProps=$;var ee=X,te=Object(P.a)({},A.defaults),ae=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,r=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=E()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),v=E()("testimonial-inner section-inner",n&&"has-top-divider",r&&"has-bottom-divider"),p=E()("tiles-wrap",m&&"push-left");return l.a.createElement("section",Object.assign({},d,{className:u}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:v},l.a.createElement(J,{data:{title:"Customer testimonials",paragraph:"Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus\u2014in ornare."},className:"center-content"}),l.a.createElement("div",{className:p},l.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"testimonial-item-content"},l.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),l.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},l.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Roman Level"),l.a.createElement("span",{className:"text-color-low"}," / "),l.a.createElement("span",{className:"testimonial-item-link"},l.a.createElement("a",{href:"#0"},"AppName"))))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"testimonial-item-content"},l.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),l.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},l.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Diana Rynzhuk"),l.a.createElement("span",{className:"text-color-low"}," / "),l.a.createElement("span",{className:"testimonial-item-link"},l.a.createElement("a",{href:"#0"},"AppName"))))),l.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"testimonial-item-content"},l.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),l.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},l.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Ben Stafford"),l.a.createElement("span",{className:"text-color-low"}," / "),l.a.createElement("span",{className:"testimonial-item-link"},l.a.createElement("a",{href:"#0"},"AppName")))))))))};ae.defaultProps=te;var ie=ae,le=function(e){var t=e.className,a=e.children,i=e.labelHidden,n=e.id,r=Object(c.a)(e,["className","children","labelHidden","id"]),s=E()("form-label",i&&"screen-reader",t);return l.a.createElement("label",Object.assign({},r,{className:s,htmlFor:n}),a)};le.defaultProps={children:null,labelHidden:!1,id:null};var ne=le,re=function(e){var t=e.children,a=e.className,i=e.status,n=Object(c.a)(e,["children","className","status"]),r=E()("form-hint",i&&"text-color-".concat(i),a);return l.a.createElement("div",Object.assign({},n,{className:r}),t)};re.defaultProps={children:null,status:!1};var se=re,oe=function(e){var t=e.className,a=e.children,i=e.label,n=e.labelHidden,r=e.type,s=e.name,o=e.status,m=e.disabled,d=e.value,u=e.formGroup,v=e.hasIcon,p=e.size,h=e.placeholder,b=e.rows,f=e.hint,g=Object(c.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),N=E()(u&&""!==u&&("desktop"===u?"form-group-desktop":"form-group"),v&&""!==v&&"has-icon-"+v),w=E()("form-input",p&&"form-input-".concat(p),o&&"form-".concat(o),t),x="textarea"===r?"textarea":"input";return l.a.createElement(l.a.Fragment,null,i&&l.a.createElement(ne,{labelHidden:n,id:g.id},i),l.a.createElement("div",{className:N},l.a.createElement(x,Object.assign({},g,{type:"textarea"!==r?r:null,className:w,name:s,disabled:m,value:d,placeholder:h,rows:"textarea"===r?b:null})),a),f&&l.a.createElement(se,{status:o},f))};oe.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var ce=oe,me=Object(P.a)({},z.defaults,{split:!1}),de=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,r=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=e.split,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),u=E()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),v=E()("cta-inner section-inner",n&&"has-top-divider",r&&"has-bottom-divider",m&&"cta-split");return l.a.createElement("section",Object.assign({},d,{className:u}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:v},l.a.createElement("div",{className:"cta-slogan"},l.a.createElement("h3",{className:"m-0"},"For previewing layouts and visual?")),l.a.createElement("div",{className:"cta-action"},l.a.createElement(ce,{id:"newsletter",type:"email",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"Your best email"},l.a.createElement("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})))))))};de.defaultProps=me;var ue=de,ve=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(Z,{className:"illustration-section-01"}),l.a.createElement(Y,null),l.a.createElement(ee,{invertMobile:!0,imageFill:!0,className:"illustration-section-02"}),l.a.createElement(ie,{topDivider:!0}),l.a.createElement(ue,{split:!0}))};f.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"https://parkertenbroeck.com/Actions-Test",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var pe=function(){var e=Object(i.useRef)(),t=Object(s.f)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){f.a.set({page:e}),f.a.pageview(e)}(a)}),[t]),l.a.createElement(b,{ref:e,children:function(){return l.a.createElement(s.c,null,l.a.createElement(m,{exact:!0,path:"/Actions-Test",component:ve,layout:H}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(53);var he=Object(o.a)();r.a.render(l.a.createElement(s.b,{history:he},l.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}]),[[28,1,2]]]);
//# sourceMappingURL=main.8535bda4.chunk.js.map