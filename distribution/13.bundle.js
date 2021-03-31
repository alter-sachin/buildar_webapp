(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{580:function(e,t,a){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===o)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},581:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));a(18);var n=a(0),r=a.n(n),o=r.a.createContext({});o.Consumer,o.Provider;function l(e,t){var a=Object(n.useContext)(o);return e||a[t]||t}},582:function(e,t,a){"use strict";var n=a(41),r=a.n(n),o=a(5),l=a.n(o),i=a(6),s=a.n(i),c=a(9),u=a.n(c),d=a(8),f=a.n(d),p=a(4),m=a.n(p),v=a(0),b=a.n(v),g=a(1),h=a.n(g),y=a(10),E=a(583),k=a(7);function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=m()(e);if(t){var r=m()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return f()(this,a)}}var j=function(e){u()(a,e);var t=O(a);function a(){return l()(this,a),t.apply(this,arguments)}return s()(a,[{key:"render",value:function(){var e=this.props,t=e.history,a=e.error,n=e.showMessage;if(e.showAlert&&a&&(429===a.status||500===a.status))return b.a.createElement(E.a,{title:"".concat(Object(k.f)("label.error"),": ").concat(Object(k.f)("error.somethingWentWrong")),closeModal:function(){return t.push("/")}},a.message);if(n&&a&&a.reason){var o=a.reason;if("string"==typeof o||o instanceof String)return b.a.createElement("div",{className:"alert alert-danger rounded-0"},o);if("object"===r()(o)||o instanceof Object){for(var l=[],i=0,s=Object.keys(o);i<s.length;i++){var c=s[i];l.push(b.a.createElement("div",{key:c},o[c]))}if(l.length>0)return b.a.createElement("div",{className:"alert alert-danger rounded-0"},l)}}return null}}]),a}(v.Component);j.defaultProps={showMessage:!0,showAlert:!0,error:{}},j.propTypes={history:h.a.object,showMessage:h.a.bool,showAlert:h.a.bool,error:h.a.object},t.a=Object(y.g)(j)},583:function(e,t,a){"use strict";var n=a(5),r=a.n(n),o=a(6),l=a.n(o),i=a(9),s=a.n(i),c=a(8),u=a.n(c),d=a(4),f=a.n(d),p=a(0),m=a.n(p),v=a(1),b=a.n(v),g=a(591),h=a.n(g),y=a(7);function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=f()(e);if(t){var r=f()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return u()(this,a)}}var k=function(e){s()(a,e);var t=E(a);function a(){return r()(this,a),t.apply(this,arguments)}return l()(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.children,n=e.closeModal;return m.a.createElement("div",{className:"modal",tabIndex:"-1"},m.a.createElement(h.a,{contentLabel:t,className:"modal-dialog modal-dialog-centered",isOpen:!0,ariaHideApp:!1,onRequestClose:n},m.a.createElement("div",{className:"modal-content rounded-0",role:"document"},m.a.createElement("div",{className:"modal-header"},m.a.createElement("h5",{className:"modal-title"},t),m.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:n},m.a.createElement("span",{"aria-hidden":"true"},"×"))),m.a.createElement("div",{className:"modal-body"},a),m.a.createElement("div",{className:"modal-footer"},n&&m.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:n,"data-dismiss":"modal"},Object(y.f)("action.close"))))))}}]),a}(p.Component);k.propTypes={title:b.a.string,children:b.a.oneOfType([b.a.string,b.a.object]),closeModal:b.a.func},t.a=k},584:function(e,t,a){"use strict";var n=a(611),r=a.n(n),o=a(7);t.a=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.a;return n.options={fullMessages:!1},n.validators.noEmptyValue=function(e){if(""===e||"string"==typeof e&&""===e.trim()||e===[]||e==={})return Object(o.f)("validation.validators.cannotBeBlank")},n.validators.date.options={message:Object(o.f)("validation.validators.validDate")},n.validators.datetime.options={message:Object(o.f)("validation.validators.validDate")},n.validators.email.options={message:Object(o.f)("validation.validators.invalidEmail")},n.validators.equality.options={message:Object(o.f)("validation.validators.notEqual")},n.validators.exclusion.options={message:Object(o.f)("validation.validators.restricted")},n.validators.format.options={message:Object(o.f)("validation.validators.invalid")},n.validators.inclusion.options={message:Object(o.f)("validation.validators.notIncluded")},n.validators.length.options={message:Object(o.f)("validation.validators.invalid")},n.validators.numericality.options={message:Object(o.f)("validation.validators.invalid")},n.validators.presence.options={message:Object(o.f)("validation.validators.cannotBeBlank")},n.validators.url.options={message:Object(o.f)("validation.validators.invalidURL")},n(e,t,a)}},588:function(e,t,a){"use strict";var n=a(5),r=a.n(n),o=a(6),l=a.n(o),i=a(9),s=a.n(i),c=a(8),u=a.n(c),d=a(4),f=a.n(d),p=a(0),m=a.n(p),v=a(1),b=a.n(v),g=a(598);function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=f()(e);if(t){var r=f()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return u()(this,a)}}var y=function(e){s()(a,e);var t=h(a);function a(){return r()(this,a),t.apply(this,arguments)}return l()(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.value,n=e.onChange,r=e.label,o=e.id,l=e.type,i=e.ariaLabel,s=e.smallText,c=e.placeholder,u=e.required,d=e.disabled,f=e.error,p=e.defaultValue;return m.a.createElement("div",{className:"form-group"},r&&m.a.createElement("label",{htmlFor:o},r," ",u&&"*"),m.a.createElement("div",{className:"input-group"},m.a.createElement("input",{name:t,value:a,type:l,defaultValue:p,className:"form-control rounded-0",id:o,"aria-describedby":i,onChange:n,placeholder:c,disabled:d}),f&&f[t]&&m.a.createElement("div",{className:"d-block invalid-feedback"},f[t][0]),s&&m.a.createElement("div",{className:"w-100 text-muted"},m.a.createElement("small",null,s))))}}]),a}(m.a.Component);y.propTypes={name:b.a.string,value:b.a.string,onChange:b.a.func,defaultValue:g.a.func,label:b.a.string,id:b.a.string,type:b.a.string,ariaLabel:b.a.string,placeholder:b.a.string,smallText:b.a.string,required:b.a.bool,disabled:b.a.bool,error:b.a.object},t.a=y},598:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(18),r=a(39),o=a(580),l=a.n(o),i=a(0),s=a.n(i),c=a(1),u=a.n(c),d=a(581),f={bsPrefix:u.a.string,fluid:u.a.bool,rounded:u.a.bool,roundedCircle:u.a.bool,thumbnail:u.a.bool},p=s.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,i=e.fluid,c=e.rounded,u=e.roundedCircle,f=e.thumbnail,p=Object(r.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);a=Object(d.a)(a,"img");var m=l()(i&&a+"-fluid",c&&"rounded",u&&"rounded-circle",f&&a+"-thumbnail");return s.a.createElement("img",Object(n.a)({ref:t},p,{className:l()(o,m)}))}));p.displayName="Image",p.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1}},603:function(e,t,a){"use strict";var n=a(5),r=a.n(n),o=a(6),l=a.n(o),i=a(9),s=a.n(i),c=a(8),u=a.n(c),d=a(4),f=a.n(d),p=a(0),m=a.n(p),v=a(1),b=a.n(v),g=a(591),h=a.n(g),y=a(7);function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=f()(e);if(t){var r=f()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return u()(this,a)}}var k=function(e){s()(a,e);var t=E(a);function a(){return r()(this,a),t.apply(this,arguments)}return l()(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.children,n=e.actionButtonLabel,r=e.actionButtonFunc,o=e.actionDangerous,l=e.actionDisabled,i=e.actionLinkLabel,s=e.actionLinkFunc,c=e.actionLinkHidden,u=e.actionLinkDisabled,d=e.closeModal,f=e.closeModalDisabled;return m.a.createElement("div",{className:"modal",tabIndex:"-1"},m.a.createElement(h.a,{contentLabel:t,className:"modal-dialog modal-dialog-centered",isOpen:!0,ariaHideApp:!1,onRequestClose:d},m.a.createElement("div",{className:"modal-content rounded-0",role:"document"},m.a.createElement("div",{className:"modal-header"},m.a.createElement("h5",{className:"modal-title"},t),m.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:d},m.a.createElement("span",{"aria-hidden":"true"},"×"))),m.a.createElement("div",{className:"modal-body"},a),m.a.createElement("div",{className:"modal-footer"},i&&!c&&m.a.createElement("button",{type:"button",className:"btn btn-link btn-sm mr-auto",onClick:s,disabled:u},i),n&&m.a.createElement("button",{type:"button",className:"btn ".concat(1==o?"btn-danger":"btn-primary"," btn-sm"),onClick:r,disabled:l},n),d&&m.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:d,"data-dismiss":"modal",disabled:f},Object(y.f)("action.close"))))))}}]),a}(p.Component);k.propTypes={title:b.a.string,children:b.a.oneOfType([b.a.string,b.a.object]),actionButtonLabel:b.a.string,actionButtonFunc:b.a.func,actionDangerous:b.a.bool,actionDisabled:b.a.bool,actionLinkLabel:b.a.string,actionLinkFunc:b.a.func,actionLinkHidden:b.a.bool,actionLinkDisabled:b.a.bool,closeModal:b.a.func,closeModalDisabled:b.a.bool},t.a=k},605:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"d",(function(){return l})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return s}));var n=a(7),r=a(2);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"post",t="patch"!=e;return{name:{presence:t,noEmptyValue:!0,length:{maximum:255}},description:{presence:t,noEmptyValue:!1,length:{maximum:255}}}}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"post",t="patch"!=e;return{defaultLanguage:{presence:t,noEmptyValue:!0,inclusion:{within:r.RESTRICTED_LANGUAGES}}}}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"post",t="patch"!=e;return{logoImage:{presence:t,format:{pattern:"^$|[0-9]*_[0-9]*_[0-9]*.[a-z]+$",flags:"i",message:Object(n.f)("validation.validators.validKey")}},backgroundImage:{presence:t,format:{pattern:"^$|[0-9]*_[0-9]*_[0-9]*.[a-z]+$",flags:"i",message:Object(n.f)("validation.validators.validKey")}},backgroundColor:{presence:t,noEmptyValue:!0,format:{pattern:"^#[0-9A-F]{6}$",flags:"i",message:Object(n.f)("validation.validators.validHex")}},primaryColor:{presence:t,noEmptyValue:!0,format:{pattern:"^#[0-9A-F]{6}$",flags:"i",message:Object(n.f)("validation.validators.validHex")}},secondaryColor:{presence:t,noEmptyValue:!0,format:{pattern:"^#[0-9A-F]{6}$",flags:"i",message:Object(n.f)("validation.validators.validHex")}}}}function s(){return{workspaceURL:{presence:{allowEmpty:!1},format:{pattern:"[a-z0-9]+",flags:"i",message:Object(n.f)("validation.validators.validCharactersAZ09")},exclusion:{within:r.RESTRICTED_DOMAINS,message:Object(n.f)("validation.validators.validWorkspaceURL")},length:{maximum:255}},accountPassword:{presence:{allowEmpty:!1},length:{minimum:6,maximum:66,message:Object(n.f)("validation.validators.invalidPasswordLength")}}}}},952:function(e,t,a){"use strict";a.r(t);var n=a(32),r=a.n(n),o=a(5),l=a.n(o),i=a(6),s=a.n(i),c=a(20),u=a.n(c),d=a(9),f=a.n(d),p=a(8),m=a.n(p),v=a(4),b=a.n(v),g=a(0),h=a.n(g),y=a(10),E=a(1),k=a.n(E),O=a(40),j=a(54),w=a(7),R=a(27),N=a(584),C=a(72),L=a(605),x=a(23),B=a(620),M=a(603),P=a(588),D=a(582);function F(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=b()(e);if(t){var r=b()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return m()(this,a)}}var A=function(e){f()(a,e);var t=F(a);function a(e){var n;return l()(this,a),(n=t.call(this,e)).state={workspaceURL:"",accountPassword:"",loading:!1,validationErrors:null,serverError:null},n.closeModal=n.closeModal.bind(u()(n)),n.changeField=n.changeField.bind(u()(n)),n.deleteWorkspace=n.deleteWorkspace.bind(u()(n)),n.logout=n.logout.bind(u()(n)),n}return s()(a,[{key:"changeField",value:function(e){this.setState(r()({},e.target.name,e.target.value))}},{key:"deleteWorkspace",value:function(e){var t=this;e.preventDefault(),this.setState({loading:!0,validationErrors:null,serverError:null});var a={workspaceURL:this.state.workspaceURL,accountPassword:this.state.accountPassword},n=Object(N.a)(a,Object(L.a)());null==n?this.props.deleteWorkspace(a).then((function(e){e.type===B.a?t.setState({loading:!1,serverError:e.payload}):(t.setState({loading:!1}),t.logout())})):this.setState({loading:!1,validationErrors:n})}},{key:"logout",value:function(){this.props.logoutUser().then((function(e){if(e.type===x.e)window.location.reload;else{Object(C.a)(),R.a.clearSecurityToken();var t="".concat("http","://").concat("52.66.156.96:3000","/signin");window.location.replace(t)}}))}},{key:"closeModal",value:function(){this.state.loading||this.props.history.push("/settings/general")}},{key:"render",value:function(){var e=this.state,t=e.workspaceURL,a=e.accountPassword,n=e.loading,r=e.validationErrors,o=e.serverError;return h.a.createElement(M.a,{title:Object(w.f)("components.settings.general.deleteWorkspace"),actionButtonLabel:Object(w.f)("components.settings.general.deleteWorkspace"),actionButtonFunc:this.deleteWorkspace,actionDangerous:!0,actionDisabled:n,closeModal:this.closeModal,closeModalDisabled:n},h.a.createElement(g.Fragment,null,h.a.createElement(D.a,{error:o}),h.a.createElement("div",{className:"mb-2"},Object(w.f)("components.settings.general.deleteWorkspaceModal.warning")),h.a.createElement("div",null,Object(w.f)("components.settings.general.deleteWorkspaceModal.procedure")),h.a.createElement("div",{className:"mt-4"},h.a.createElement(P.a,{label:Object(w.f)("label.workspaceName"),name:"workspaceURL",id:"workspaceURL",value:t,type:"textField",ariaLabel:Object(w.f)("label.workspaceName"),onChange:this.changeField,disabled:n,error:r}),h.a.createElement(P.a,{label:Object(w.f)("label.password"),name:"accountPassword",id:"accountPassword",value:a,type:"password",ariaLabel:Object(w.f)("label.password"),onChange:this.changeField,disabled:n,error:r}))))}}]),a}(g.Component);A.propTypes={history:k.a.object,deleteWorkspace:k.a.func,logoutUser:k.a.func},t.default=Object(y.g)(Object(j.b)(null,(function(e){return{deleteWorkspace:Object(O.b)(B.k,e),logoutUser:Object(O.b)(x.o,e)}}))(A))}}]);