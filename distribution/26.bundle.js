(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{600:function(e,t,a){"use strict";var n=a(4),r=a.n(n),l=a(5),c=a.n(l),s=a(17),o=a.n(s),i=a(16),m=a.n(i),u=a(7),d=a.n(u),p=a(0),v=a.n(p),f=a(3),h=a.n(f),E=a(35);var b=function(e){o()(a,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=d()(e);if(t){var r=d()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return m()(this,a)}}(a);function a(){return r()(this,a),t.apply(this,arguments)}return c()(a,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.children,n=e.hasAnyRole,r=e.hasAllRoles,l=e.hasAnyFeature,c=e.hasAllFeatures,s=e.hasAnySubscription,o=e.hasVerifiedEmail;if(e.disabled)return null;var i=Object(E.f)(t)&&null!==t.get("userId");return n&&(i&&!t.get("userRoles")||!Object(E.b)(n,i&&t.get("userRoles").toJS()||[]))||r&&(i&&!t.get("userRoles")||!Object(E.b)(r,i&&t.get("userRoles").toJS()||[]))||l&&(i&&!t.get("clientFeatures")||!Object(E.b)(l,i&&t.get("clientFeatures").toJS()||[]))||c&&(i&&!t.get("clientFeatures")||!Object(E.a)(c,i&&t.get("clientFeatures").toJS()||[]))||s&&(i&&!t.get("subscriptionId")||!Object(E.b)(s,i&&t.get("subscriptionId")||[]))||o&&(i&&!t.get("emailVerified")||!0!==(i&&t.get("emailVerified")))?null:v.a.createElement(p.Fragment,null,a)}}]),a}(p.Component);b.propTypes={disabled:h.a.bool,user:h.a.object,hasAnyRole:h.a.oneOfType([h.a.array,h.a.number]),hasAllRoles:h.a.oneOfType([h.a.array,h.a.number]),hasAnyFeature:h.a.oneOfType([h.a.array,h.a.number]),hasAllFeatures:h.a.oneOfType([h.a.array,h.a.number]),hasAnySubscription:h.a.oneOfType([h.a.array,h.a.number]),hasVerifiedEmail:h.a.bool,children:h.a.oneOfType([h.a.string,h.a.object])},t.a=b},939:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),l=a(5),c=a.n(l),s=a(17),o=a.n(s),i=a(16),m=a.n(i),u=a(7),d=a.n(u),p=a(0),v=a.n(p),f=a(3),h=a.n(f),E=a(69),b=a(63),y=a(2),w=a(18),O=a(600),g=a(43),j=a.n(g),N=function(e){return v.a.createElement("svg",j()({},e,{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}),v.a.createElement("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),v.a.createElement("circle",{cx:"12",cy:"7",r:"4"}))},R=function(e){return v.a.createElement("svg",j()({},e,{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}),v.a.createElement("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),v.a.createElement("line",{x1:"1",x2:"23",y1:"10",y2:"10"}))},x=function(e){return v.a.createElement("svg",j()({},e,{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}),v.a.createElement("circle",{cx:"12",cy:"12",r:"3"}),v.a.createElement("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}))},T=a(97);var A=function(e){o()(a,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=d()(e);if(t){var r=d()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return m()(this,a)}}(a);function a(){return r()(this,a),t.apply(this,arguments)}return c()(a,[{key:"render",value:function(){var e=this.props.user&&null!==this.props.user.get("subscriptionEndDate");return v.a.createElement(p.Fragment,null,v.a.createElement(b.Helmet,{title:Object(w.e)("headers.overview.title"),meta:[{name:"description",content:Object(w.e)("headers.overview.description")}]}),v.a.createElement("div",{className:"container p-3"},v.a.createElement("div",{className:"p-3 pt-md-5 pb-md-4"},v.a.createElement("div",{className:"text-center"},v.a.createElement("h1",null,Object(w.e)("components.overview.title")),v.a.createElement("p",{className:"lead mb-4"},Object(w.e)("components.overview.leadDescription")),v.a.createElement("div",{className:"row py-3"},v.a.createElement("div",{className:"col-md-4"},v.a.createElement("div",{className:"card rounded-0 mb-3 text-left"},v.a.createElement("div",{className:"card-body"},v.a.createElement(E.b,{to:{pathname:"/profile"}},v.a.createElement("h5",{className:"card-title"},v.a.createElement("span",{className:"mr-2"},v.a.createElement(N,{width:"1em",height:"1em"})),Object(w.e)("components.overview.cards.profile.title"))),v.a.createElement("div",{className:"card-text"},v.a.createElement("ul",null,v.a.createElement("li",null,Object(w.e)("components.overview.cards.profile.listOne")),v.a.createElement("li",null,Object(w.e)("components.overview.cards.profile.listTwo")),v.a.createElement("li",null,Object(w.e)("components.overview.cards.profile.listThree"))))))),v.a.createElement(O.a,{user:this.props.user,disabled:!e,hasAnyRole:[y.ROLE_TYPE.OWNER,y.ROLE_TYPE.FINANCE]},v.a.createElement("div",{className:"col-md-4"},v.a.createElement("div",{className:"card rounded-0 mb-3 text-left"},v.a.createElement("div",{className:"card-body"},v.a.createElement(E.b,{to:{pathname:"/billing"}},v.a.createElement("h5",{className:"card-title"},v.a.createElement("span",{className:"mr-2"},v.a.createElement(R,{width:"1em",height:"1em"})),Object(w.e)("components.overview.cards.billing.title"))),v.a.createElement("div",{className:"card-text"},v.a.createElement("ul",null,v.a.createElement("li",null,Object(w.e)("components.overview.cards.billing.listOne")),v.a.createElement("li",null,Object(w.e)("components.overview.cards.billing.listTwo")),v.a.createElement("li",null,Object(w.e)("components.overview.cards.billing.listThree")))))))),v.a.createElement(O.a,{user:this.props.user,hasAnyRole:[y.ROLE_TYPE.OWNER,y.ROLE_TYPE.ADMINISTRATOR]},v.a.createElement("div",{className:"col-md-4"},v.a.createElement("div",{className:"card rounded-0 text-left"},v.a.createElement("div",{className:"card-body"},v.a.createElement(E.b,{to:{pathname:"/settings"}},v.a.createElement("h5",{className:"card-title"},v.a.createElement("span",{className:"mr-2"},v.a.createElement(x,{width:"1em",height:"1em"})),Object(w.e)("components.overview.cards.settings.title"))),v.a.createElement("div",{className:"card-text"},v.a.createElement("ul",null,v.a.createElement("li",null,Object(w.e)("components.overview.cards.settings.listOne")),v.a.createElement("li",null,Object(w.e)("components.overview.cards.settings.listTwo")))))))))))))}}]),a}(p.Component);A.propTypes={user:h.a.object},t.default=Object(T.a)(A)}}]);