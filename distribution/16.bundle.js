(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{580:function(e,t,n){var a;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===l)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},581:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(18);var a=n(0),r=n.n(a),l=r.a.createContext({});l.Consumer,l.Provider;function i(e,t){var n=Object(a.useContext)(l);return e||n[t]||t}},599:function(e,t,n){"use strict";var a=n(5),r=n.n(a),l=n(6),i=n.n(l),c=n(20),o=n.n(c),s=n(9),u=n.n(s),m=n(8),d=n.n(m),f=n(4),p=n.n(f),b=n(32),y=n.n(b),v=n(614),h=n(615),g=n(616),E=n(0),w=n.n(E);function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=p()(e);if(t){var r=p()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return d()(this,n)}}var B=function(e){u()(n,e);var t=N(n);function n(e){var a;return r()(this,n),a=t.call(this,e),y()(o()(a),"invite_open",(function(){document.getElementById("center_container").style.display="block"})),y()(o()(a),"invite_close",(function(){document.getElementById("center_container").style.display="none"})),y()(o()(a),"w3_close",(function(){document.getElementById("main").style.marginLeft="0%",document.getElementById("mySidebar").style.display="none",document.getElementById("openNav").style.display="inline-block",document.getElementById("openNav").style.visibility="visible"})),a.state={},a.w3_close=a.w3_close.bind(o()(a)),a}return i()(n,[{key:"render",value:function(){return w.a.createElement("div",null,w.a.createElement("div",{className:"w3-sidebar w3-bar-block w3-card w3-animate-left",style:{display:"none"},id:"mySidebar"},w.a.createElement("button",{className:"w3-bar-item w3-button w3-large",onClick:this.w3_close},w.a.createElement(v.a,null)),w.a.createElement("div",{className:"navigation_logoSection"},w.a.createElement("div",{className:"navigation_symbol"},w.a.createElement("span",{id:"small_symbol"}))),w.a.createElement("a",{href:"#",className:"w3-bar-item w3-button"},w.a.createElement("span",{id:"text"},w.a.createElement("strong",null,"Videos"))),w.a.createElement("a",{href:"/createvideo",className:"w3-bar-item w3-button"},w.a.createElement("span",{id:"icon"},w.a.createElement(v.d,null)),w.a.createElement("span",{id:"text"},"Create Video")),w.a.createElement("a",{href:"/myvideos",className:"w3-bar-item w3-button"},w.a.createElement("span",{id:"icon"},w.a.createElement(v.c,null)),w.a.createElement("span",{id:"text"},"My Videos")),w.a.createElement("div",{className:"bottom_menu"},w.a.createElement("a",{href:"#",className:"w3-bar-item w3-button"},w.a.createElement("span",{id:"text"},w.a.createElement("strong",null,"Settings"))),w.a.createElement("a",{href:"/profile",className:"w3-bar-item w3-button"},w.a.createElement("span",{id:"icon"},w.a.createElement(h.a,null)),w.a.createElement("span",{id:"text"},"Profile")),w.a.createElement("a",{href:"/billing",className:"w3-bar-item w3-button"},w.a.createElement("span",{id:"icon"},w.a.createElement(g.a,null)),w.a.createElement("span",{id:"text"},"Billing")))))}}]),n}(E.Component);t.a=B},629:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(18),r=n(39),l=n(580),i=n.n(l),c=/-(.)/g;var o=n(0),s=n.n(o),u=n(581),m=function(e){return e[0].toUpperCase()+(t=e,t.replace(c,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function d(e,t){var n=void 0===t?{}:t,l=n.displayName,c=void 0===l?m(e):l,o=n.Component,d=n.defaultProps,f=s.a.forwardRef((function(t,n){var l=t.className,c=t.bsPrefix,m=t.as,d=void 0===m?o||"div":m,f=Object(r.a)(t,["className","bsPrefix","as"]),p=Object(u.a)(c,e);return s.a.createElement(d,Object(a.a)({ref:n,className:i()(l,p)},f))}));return f.defaultProps=d,f.displayName=c,f}},632:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(null);r.displayName="CardContext",t.a=r},650:function(e,t,n){"use strict";var a=n(18),r=n(39),l=n(580),i=n.n(l),c=n(0),o=n.n(c),s=n(581),u=n(629),m=function(e){return o.a.forwardRef((function(t,n){return o.a.createElement("div",Object(a.a)({},t,{ref:n,className:i()(t.className,e)}))}))},d=n(632),f=o.a.forwardRef((function(e,t){var n=e.bsPrefix,l=e.className,c=e.variant,u=e.as,m=void 0===u?"img":u,d=Object(r.a)(e,["bsPrefix","className","variant","as"]),f=Object(s.a)(n,"card-img");return o.a.createElement(m,Object(a.a)({ref:t,className:i()(c?f+"-"+c:f,l)},d))}));f.displayName="CardImg",f.defaultProps={variant:null};var p=f,b=m("h5"),y=m("h6"),v=Object(u.a)("card-body"),h=Object(u.a)("card-title",{Component:b}),g=Object(u.a)("card-subtitle",{Component:y}),E=Object(u.a)("card-link",{Component:"a"}),w=Object(u.a)("card-text",{Component:"p"}),N=Object(u.a)("card-header"),B=Object(u.a)("card-footer"),x=Object(u.a)("card-img-overlay"),O=o.a.forwardRef((function(e,t){var n=e.bsPrefix,l=e.className,u=e.bg,m=e.text,f=e.border,p=e.body,b=e.children,y=e.as,h=void 0===y?"div":y,g=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),E=Object(s.a)(n,"card"),w=Object(c.useMemo)((function(){return{cardHeaderBsPrefix:E+"-header"}}),[E]);return o.a.createElement(d.a.Provider,{value:w},o.a.createElement(h,Object(a.a)({ref:t},g,{className:i()(l,E,u&&"bg-"+u,m&&"text-"+m,f&&"border-"+f)}),p?o.a.createElement(v,null,b):b))}));O.displayName="Card",O.defaultProps={body:!1},O.Img=p,O.Title=h,O.Subtitle=g,O.Body=v,O.Link=E,O.Text=w,O.Header=N,O.Footer=B,O.ImgOverlay=x;t.a=O},964:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n.n(a),l=n(6),i=n.n(l),c=n(20),o=n.n(c),s=n(9),u=n.n(s),m=n(8),d=n.n(m),f=n(4),p=n.n(f),b=n(32),y=n.n(b),v=n(0),h=n.n(v),g=n(599),E=n(650);function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=p()(e);if(t){var r=p()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return d()(this,n)}}var N=function(e){u()(n,e);var t=w(n);function n(){return r()(this,n),t.apply(this,arguments)}return i()(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.thumbnail,a=e.description,r=e.author;return h.a.createElement("div",{className:"blog-card"},h.a.createElement("a",{href:"#blog"},h.a.createElement(E.a,null,h.a.createElement(E.a.Title,null,t),h.a.createElement(E.a.Img,{variant:"top",src:n}),h.a.createElement(E.a.Body,null,h.a.createElement(E.a.Text,null,a)),h.a.createElement(E.a.Footer,null,h.a.createElement("small",{className:"text-muted"},"By ",r)))))}}]),n}(v.Component);function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=p()(e);if(t){var r=p()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return d()(this,n)}}var x=function(e){u()(n,e);var t=B(n);function n(e){var a;return r()(this,n),a=t.call(this,e),y()(o()(a),"w3_open",(function(){document.getElementById("main").style.marginLeft="20%",document.getElementById("mySidebar").style.width="15%",document.getElementById("mySidebar").style.display="block",document.getElementById("openNav").style.visibility="hidden"})),y()(o()(a),"w3_close",(function(){document.getElementById("main").style.marginLeft="10%",document.getElementById("mySidebar").style.display="none",document.getElementById("openNav").style.display="inline-block",document.getElementById("openNav").style.visibility="visible"})),a.state={blogs:[{title:"Title",thumbnail:"/images/Logo_BuildAR.png",description:"Description",author:"Author"},{title:"Title",thumbnail:"images/Logo_BuildAR.png",description:"Description",author:"Author"},{title:"Title",thumbnail:"images/Logo_BuildAR.png",description:"Description",author:"Author"},{title:"Title",thumbnail:"images/Logo_BuildAR.png",description:"Description",author:"Author"},{title:"Title",thumbnail:"images/Logo_BuildAR.png",description:"Description",author:"Author"},{title:"Title",thumbnail:"images/Logo_BuildAR.png",description:"Description",author:"Author"}]},a.w3_open=a.w3_open.bind(o()(a)),a.w3_close=a.w3_close.bind(o()(a)),a}return i()(n,[{key:"render",value:function(){var e=this.state.blogs;return h.a.createElement(v.Fragment,null,h.a.createElement(g.a,null),h.a.createElement("button",{id:"openNav",className:"w3-button w3-xlarge",onClick:this.w3_open},"☰"),h.a.createElement("div",{id:"main",className:"blog"},h.a.createElement("div",{className:"container"},h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-lg-12 blog-header"},h.a.createElement("h1",null,"Blogs")),e.map((function(e,t){return h.a.createElement("div",{key:t,className:"col-lg-4 col-md-6 col-sm-12"},h.a.createElement(N,{key:t,title:e.title,thumbnail:e.thumbnail,description:e.description,author:e.author}))}))))))}}]),n}(v.Component);t.default=x}}]);