(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{553:function(e,t,a){"use strict";var n=a(33),r=a.n(n),o=a(4),c=a.n(o),l=a(5),i=a.n(l),s=a(17),u=a.n(s),d=a(16),m=a.n(d),p=a(7),f=a.n(p),g=a(0),h=a.n(g),v=a(3),b=a.n(v),E=a(6),y=a(554),k=a(18);var w=function(e){u()(a,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=f()(e);if(t){var r=f()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return m()(this,a)}}(a);function a(){return c()(this,a),t.apply(this,arguments)}return i()(a,[{key:"render",value:function(){var e=this.props,t=e.history,a=e.error,n=e.showMessage;if(e.showAlert&&a&&(429===a.status||500===a.status))return h.a.createElement(y.a,{title:"".concat(Object(k.e)("label.error"),": ").concat(Object(k.e)("error.somethingWentWrong")),closeModal:function(){return t.push("/")}},a.message);if(n&&a&&a.reason){var o=a.reason;if("string"==typeof o||o instanceof String)return h.a.createElement("div",{className:"alert alert-danger rounded-0"},o);if("object"===r()(o)||o instanceof Object){for(var c=[],l=0,i=Object.keys(o);l<i.length;l++){var s=i[l];c.push(h.a.createElement("div",{key:s},o[s]))}if(c.length>0)return h.a.createElement("div",{className:"alert alert-danger rounded-0"},c)}}return null}}]),a}(g.Component);w.defaultProps={showMessage:!0,showAlert:!0,error:{}},w.propTypes={history:b.a.object,showMessage:b.a.bool,showAlert:b.a.bool,error:b.a.object},t.a=Object(E.g)(w)},554:function(e,t,a){"use strict";var n=a(4),r=a.n(n),o=a(5),c=a.n(o),l=a(17),i=a.n(l),s=a(16),u=a.n(s),d=a(7),m=a.n(d),p=a(0),f=a.n(p),g=a(3),h=a.n(g),v=a(562),b=a.n(v),E=a(18);var y=function(e){i()(a,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=m()(e);if(t){var r=m()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return u()(this,a)}}(a);function a(){return r()(this,a),t.apply(this,arguments)}return c()(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.children,n=e.closeModal;return f.a.createElement("div",{className:"modal",tabIndex:"-1"},f.a.createElement(b.a,{contentLabel:t,className:"modal-dialog modal-dialog-centered",isOpen:!0,ariaHideApp:!1,onRequestClose:n},f.a.createElement("div",{className:"modal-content rounded-0",role:"document"},f.a.createElement("div",{className:"modal-header"},f.a.createElement("h5",{className:"modal-title"},t),f.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:n},f.a.createElement("span",{"aria-hidden":"true"},"×"))),f.a.createElement("div",{className:"modal-body"},a),f.a.createElement("div",{className:"modal-footer"},n&&f.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:n,"data-dismiss":"modal"},Object(E.e)("action.close"))))))}}]),a}(p.Component);y.propTypes={title:h.a.string,children:h.a.oneOfType([h.a.string,h.a.object]),closeModal:h.a.func},t.a=y},555:function(e,t,a){"use strict";var n=a(582),r=a.n(n),o=a(18);t.a=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.a;return n.options={fullMessages:!1},n.validators.noEmptyValue=function(e){if(""===e||"string"==typeof e&&""===e.trim()||e===[]||e==={})return Object(o.e)("validation.validators.cannotBeBlank")},n.validators.date.options={message:Object(o.e)("validation.validators.validDate")},n.validators.datetime.options={message:Object(o.e)("validation.validators.validDate")},n.validators.email.options={message:Object(o.e)("validation.validators.invalidEmail")},n.validators.equality.options={message:Object(o.e)("validation.validators.notEqual")},n.validators.exclusion.options={message:Object(o.e)("validation.validators.restricted")},n.validators.format.options={message:Object(o.e)("validation.validators.invalid")},n.validators.inclusion.options={message:Object(o.e)("validation.validators.notIncluded")},n.validators.length.options={message:Object(o.e)("validation.validators.invalid")},n.validators.numericality.options={message:Object(o.e)("validation.validators.invalid")},n.validators.presence.options={message:Object(o.e)("validation.validators.cannotBeBlank")},n.validators.url.options={message:Object(o.e)("validation.validators.invalidURL")},n(e,t,a)}},559:function(e,t,a){"use strict";var n=a(4),r=a.n(n),o=a(5),c=a.n(o),l=a(17),i=a.n(l),s=a(16),u=a.n(s),d=a(7),m=a.n(d),p=a(0),f=a.n(p),g=a(3),h=a.n(g),v=a(6),b=a(564),E=a.n(b),y=a(585),k=a.n(y);var w=function(e){i()(a,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=m()(e);if(t){var r=m()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return u()(this,a)}}(a);function a(){return r()(this,a),t.apply(this,arguments)}return c()(a,[{key:"render",value:function(){var e=this.props,t=e.history,a=e.path,n=e.message,r=E.a.parse(t.location.search);return n&&!0===k()(r,a)?f.a.createElement("div",{className:"alert alert-success rounded-0"},n):null}}]),a}(p.Component);w.propTypes={history:h.a.object,path:h.a.object,message:h.a.oneOfType([h.a.string,h.a.object])},t.a=Object(v.g)(w)},560:function(e,t,a){"use strict";var n=a(4),r=a.n(n),o=a(5),c=a.n(o),l=a(17),i=a.n(l),s=a(16),u=a.n(s),d=a(7),m=a.n(d),p=a(0),f=a.n(p),g=a(3),h=a.n(g),v=a(569);var b=function(e){i()(a,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=m()(e);if(t){var r=m()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return u()(this,a)}}(a);function a(){return r()(this,a),t.apply(this,arguments)}return c()(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.value,n=e.onChange,r=e.label,o=e.id,c=e.type,l=e.ariaLabel,i=e.smallText,s=e.placeholder,u=e.required,d=e.disabled,m=e.error,p=e.defaultValue;return f.a.createElement("div",{className:"form-group"},r&&f.a.createElement("label",{htmlFor:o},r," ",u&&"*"),f.a.createElement("div",{className:"input-group"},f.a.createElement("input",{name:t,value:a,type:c,defaultValue:p,className:"form-control rounded-0",id:o,"aria-describedby":l,onChange:n,placeholder:s,disabled:d}),m&&m[t]&&f.a.createElement("div",{className:"d-block invalid-feedback"},m[t][0]),i&&f.a.createElement("div",{className:"w-100 text-muted"},f.a.createElement("small",null,i))))}}]),a}(f.a.Component);b.propTypes={name:h.a.string,value:h.a.string,onChange:h.a.func,defaultValue:v.a.func,label:h.a.string,id:h.a.string,type:h.a.string,ariaLabel:h.a.string,placeholder:h.a.string,smallText:h.a.string,required:h.a.bool,disabled:h.a.bool,error:h.a.object},t.a=b},583:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(244);function r(e){var t=/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,4})/;if(n(e.match(t))){var a=e.match(t);if(a&&a[1])return a[1]}return""}},611:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return c})),a.d(t,"e",(function(){return l})),a.d(t,"a",(function(){return i})),a.d(t,"d",(function(){return s}));var n=a(18),r=a(2);function o(){return{workspaceURL:{presence:{allowEmpty:!1},format:{pattern:"[a-z0-9]+",flags:"i",message:Object(n.e)("validation.validators.validCharactersAZ09")},exclusion:{within:r.RESTRICTED_DOMAINS,message:Object(n.e)("validation.validators.validWorkspaceURL")},length:{maximum:255}},emailAddress:{email:!0,presence:{allowEmpty:!1},length:{maximum:255}},password:{presence:{allowEmpty:!1},length:{maximum:66}}}}function c(){return{firstName:{presence:{allowEmpty:!1},length:{maximum:255}},lastName:{presence:{allowEmpty:!1},length:{maximum:255}},emailAddress:{email:!0,presence:{allowEmpty:!1},length:{maximum:255}},password:{presence:{allowEmpty:!1},length:{minimum:6,maximum:66,message:Object(n.e)("validation.validators.invalidPasswordLength")}},workspaceURL:{presence:{allowEmpty:!1},format:{pattern:"[a-z0-9]+",flags:"i",message:Object(n.e)("validation.validators.validCharactersAZ09")},exclusion:{within:r.RESTRICTED_DOMAINS,message:Object(n.e)("validation.validators.validWorkspaceURL")},length:{minimum:4,maximum:255}},privacyConsent:{presence:{allowEmpty:!1,isBoolean:!0},exclusion:{within:[!1],message:Object(n.e)("validation.validators.missingConsent")}},language:{presence:{allowEmpty:!1},inclusion:{within:r.RESTRICTED_LANGUAGES}}}}function l(){return{workspaceURL:{presence:{allowEmpty:!1},format:{pattern:"[a-z0-9]+",flags:"i",message:Object(n.e)("validation.validators.validCharactersAZ09")},exclusion:{within:r.RESTRICTED_DOMAINS,message:Object(n.e)("validation.validators.validWorkspaceURL")},length:{minimum:4,maximum:255}}}}function i(){return{emailAddress:{email:!0,presence:{allowEmpty:!1},length:{maximum:255}}}}function s(){return{password:{presence:{allowEmpty:!1},length:{minimum:6,maximum:66,message:Object(n.e)("validation.validators.invalidPasswordLength")}},verifyPassword:{presence:{allowEmpty:!1},length:{minimum:6,maximum:66,message:Object(n.e)("validation.validators.invalidPasswordLength")},equality:{attribute:"password",comparator:function(e,t){return JSON.stringify(e)===JSON.stringify(t)}}},code:{presence:{allowEmpty:!1},length:{maximum:255}},workspaceURL:{presence:{allowEmpty:!1},format:{pattern:"[a-z0-9]+",flags:"i",message:Object(n.e)("validation.validators.validCharactersAZ09")},exclusion:{within:r.RESTRICTED_DOMAINS,message:Object(n.e)("validation.validators.validWorkspaceURL")},length:{minimum:4,maximum:255}}}}},612:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(913),r=a(2);function o(e,t){var a={button:"",links:"",background:""};return e==r.REDUX_STATE.FULFILLED&&null!=t&&t.size>0&&(a.button=Object(n.a)("&,&:hover,&:active,&:visited,&:focus{background-color:",t.get("primaryColor")," !important;border-color:",t.get("primaryColor")," !important;}&:hover:not([disabled]){opacity:0.9;}"),a.links=Object(n.a)("a,a:active,a.visited{color:",t.get("primaryColor"),";}a:hover{color:",t.get("primaryColor"),";}"),a.background=Object(n.a)(Object.assign({},null!=t.get("backgroundColor")&&{backgroundColor:"".concat(t.get("backgroundColor")," !important")},t.get("backgroundImage")&&{backgroundImage:"url('".concat(t.get("backgroundImage"),"') !important")}),"")),a}},613:function(e,t,a){"use strict";var n=a(4),r=a.n(n),o=a(5),c=a.n(o),l=a(17),i=a.n(l),s=a(16),u=a.n(s),d=a(7),m=a.n(d),p=a(0),f=a.n(p),g=a(3),h=a.n(g);var v=function(e){i()(a,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=m()(e);if(t){var r=m()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return u()(this,a)}}(a);function a(){return r()(this,a),t.apply(this,arguments)}return c()(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.value,n=e.onClick,r=e.label,o=e.id,c=e.smallText,l=e.disabled,i=e.error;return f.a.createElement("div",{className:"form-check"},f.a.createElement("input",{id:o,name:t,className:"form-check-input",type:"checkbox",value:a,onClick:n,disabled:l}),r&&f.a.createElement("label",{className:"form-check-label",htmlFor:o},c?f.a.createElement("small",null,r):r),i&&i[t]&&f.a.createElement("div",{className:"d-block invalid-feedback"},i[t][0]))}}]),a}(f.a.Component);v.propTypes={name:h.a.string,value:h.a.bool,onClick:h.a.func,label:h.a.string,id:h.a.string,smallText:h.a.bool,disabled:h.a.bool,error:h.a.object},t.a=v},626:function(e,t,a){"use strict";var n=a(4),r=a.n(n),o=a(5),c=a.n(o),l=a(27),i=a.n(l),s=a(17),u=a.n(s),d=a(16),m=a.n(d),p=a(7),f=a.n(p),g=a(0),h=a.n(g),v=a(3),b=a.n(v),E=a(18),y=a(52),k=a(6),w=a(81),R=a(65),j=a(43),O=a.n(j),L=function(e){return h.a.createElement("svg",O()({},e,{viewBox:"0 0 640 480"}),h.a.createElement("defs",null,h.a.createElement("clipPath",{id:"a"},h.a.createElement("path",{d:"M-85.3 0h682.6v512H-85.3z",fillOpacity:".7"}))),h.a.createElement("g",{transform:"translate(80) scale(.94)",clipPath:"url(#a)"},h.a.createElement("g",{strokeWidth:"1pt"},h.a.createElement("path",{d:"M-256 0H768v512H-256z",fill:"#006"}),h.a.createElement("path",{d:"M-256 0v57.2L653.5 512H768v-57.2L-141.5 0H-256zM768 0v57.2L-141.5 512H-256v-57.2L653.5 0H768z",fill:"#fff"}),h.a.createElement("path",{d:"M170.7 0v512h170.6V0H170.7zM-256 170.7v170.6H768V170.7H-256z",fill:"#fff"}),h.a.createElement("path",{d:"M-256 204.8v102.4H768V204.8H-256zM204.8 0v512h102.4V0H204.8zM-256 512L85.3 341.3h76.4L-179.7 512H-256zm0-512L85.3 170.7H9L-256 38.2V0zm606.4 170.7L691.7 0H768L426.7 170.7h-76.3zM768 512L426.7 341.3H503l265 132.5V512z",fill:"#c00"}))))},S=function(e){return h.a.createElement("svg",O()({},e,{viewBox:"0 0 640 480"}),h.a.createElement("g",{fillRule:"evenodd",strokeWidth:"1pt"},h.a.createElement("path",{d:"M0 0h640v480H0z",fill:"#fff"}),h.a.createElement("path",{d:"M0 0h213.3v480H0z",fill:"#009246"}),h.a.createElement("path",{d:"M426.7 0H640v480H426.7z",fill:"#ce2b37"})))};var U=function(e){u()(a,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=f()(e);if(t){var r=f()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return m()(this,a)}}(a);function a(){var e;return r()(this,a),(e=t.call(this)).state={menuVisible:!1},e.languageChange=e.languageChange.bind(i()(e)),e.showMenu=e.showMenu.bind(i()(e)),e.closeMenu=e.closeMenu.bind(i()(e)),e}return c()(a,[{key:"showMenu",value:function(e){var t=this;e.preventDefault(),this.setState({menuVisible:!0},(function(){document.addEventListener("click",t.closeMenu)}))}},{key:"closeMenu",value:function(){var e=this;this.setState({menuVisible:!1},(function(){document.removeEventListener("click",e.closeMenu)}))}},{key:"languageChange",value:function(e){e.preventDefault(),this.props.changeLanguage(e.target.name)}},{key:"flagIcon",value:function(e){switch(e){case"en":return h.a.createElement(L,{width:"16px",height:"16px"});case"it":return h.a.createElement(S,{width:"16px",height:"16px"});default:return null}}},{key:"render",value:function(){var e=this.state.menuVisible,t=Object(E.a)();return h.a.createElement("div",{className:"row mt-4 justify-content-center"},h.a.createElement("div",{className:"col-xs-2 col-centered"},h.a.createElement("div",{className:"dropdown"},h.a.createElement("button",{className:"btn btn-sm dropdown-toggle",type:"button","aria-haspopup":"true","aria-expanded":e?"true":"false",onClick:this.showMenu},this.flagIcon(t)," ",t.toUpperCase()),h.a.createElement("div",{className:"dropdown-menu ".concat(e?"d-block":""),"aria-labelledby":"dropdownMenuButton"},h.a.createElement("button",{name:"en",className:"dropdown-item",onClick:this.languageChange},this.flagIcon("en")," ",Object(E.e)("languages.en")),h.a.createElement("button",{name:"it",className:"dropdown-item",onClick:this.languageChange},this.flagIcon("it")," ",Object(E.e)("languages.it"))))))}}]),a}(g.Component);U.propTypes={changeLanguage:b.a.func},t.a=Object(k.g)(Object(w.b)(null,(function(e){return{changeLanguage:Object(y.b)(R.c,e)}}))(U))},689:function(e,t,a){"use strict";var n=a(4),r=a.n(n),o=a(5),c=a.n(o),l=a(17),i=a.n(l),s=a(16),u=a.n(s),d=a(7),m=a.n(d),p=a(0),f=a.n(p),g=a(69),h=a(6),v=a(3),b=a.n(v),E=a(18),y=a(553),k=a(690);var w=function(e){i()(a,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=m()(e);if(t){var r=m()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return u()(this,a)}}(a);function a(){return r()(this,a),t.apply(this,arguments)}return c()(a,[{key:"render",value:function(){var e=this.props,t=e.workspaceURL,a=e.changeField,n=e.changeSubdomain,r=e.redirectPending,o=e.validationErrors,c=e.serverError;return f.a.createElement("div",{className:"w-100 mb-3"},f.a.createElement("span",{className:"h3"},Object(E.e)("label.welcome")),f.a.createElement(y.a,{error:c,showMessage:!1}),f.a.createElement("div",{className:"mt-4 mb-4"},f.a.createElement("span",null,Object(E.e)("components.authentication.getStarted"))),f.a.createElement(k.a,{value:t,onChange:a,disabled:r,error:o}),f.a.createElement("div",null,f.a.createElement("span",null,f.a.createElement(g.b,{to:{pathname:"/signin/help"}},Object(E.e)("components.authentication.whatIsWorkspaceName")))),f.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg btn-block mt-4 p-3",onClick:n,disabled:r},Object(E.e)("action.continue")),f.a.createElement("div",{className:"mt-4"},f.a.createElement("span",null,Object(E.e)("components.authentication.noAccount"))," ",f.a.createElement(g.b,{to:{pathname:"/register"}},Object(E.e)("action.register"))))}}]),a}(p.Component);w.propTypes={workspaceURL:b.a.string,changeSubdomain:b.a.func,changeField:b.a.func,redirectPending:b.a.bool,validationErrors:b.a.object,serverError:b.a.object},t.a=Object(h.g)(w)},690:function(e,t,a){"use strict";var n=a(4),r=a.n(n),o=a(5),c=a.n(o),l=a(17),i=a.n(l),s=a(16),u=a.n(s),d=a(7),m=a.n(d),p=a(0),f=a.n(p),g=a(3),h=a.n(g),v=a(18);var b=function(e){i()(a,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=m()(e);if(t){var r=m()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return u()(this,a)}}(a);function a(){return r()(this,a),t.apply(this,arguments)}return c()(a,[{key:"render",value:function(){var e=this.props,t=e.label,a=e.value,n=e.onChange,r=e.disabled,o=e.error;return f.a.createElement("div",{className:"form-group"},t&&f.a.createElement("label",{htmlFor:"domain-input"},t),f.a.createElement("div",{className:"input-group"},f.a.createElement("input",{name:"workspaceURL",value:a,id:"domain-input",className:"form-control text-right rounded-0",type:"text",placeholder:Object(v.e)("components.authentication.workspaceName"),onChange:n,disabled:r}),f.a.createElement("div",{className:"input-group-append"},f.a.createElement("div",{className:"input-group-text line-height rounded-0 none"},".".concat("buildar.live"))),o&&o.workspaceURL&&f.a.createElement("div",{className:"d-block invalid-feedback"},o.workspaceURL[0])))}}]),a}(f.a.Component);b.propTypes={label:h.a.string,value:h.a.string,onChange:h.a.func,disabled:h.a.bool,error:h.a.object},t.a=b},700:function(e,t,a){e.exports=a.p+"/images/Logo_BuildAR.png"},701:function(e,t,a){e.exports=a.p+"/images/logo_dark.svg"},733:function(e,t,a){"use strict";var n=a(4),r=a.n(n),o=a(5),c=a.n(o),l=a(17),i=a.n(l),s=a(16),u=a.n(s),d=a(7),m=a.n(d),p=a(0),f=a.n(p),g=a(69),h=a(3),v=a.n(h),b=a(18),E=a(6),y=a(116),k=a(564),w=a.n(k),R=a(585),j=a.n(R);var O=function(e){i()(a,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=m()(e);if(t){var r=m()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return u()(this,a)}}(a);function a(){return r()(this,a),t.apply(this,arguments)}return c()(a,[{key:"render",value:function(){var e=this.props,t=e.history,a=e.path,n=e.message,r=w.a.parse(t.location.search);return n&&!0===j()(r,a)&&y.notify.show(f.a.createElement("span",null,n),"success"),null}}]),a}(p.Component);O.propTypes={history:v.a.object,path:v.a.object,message:v.a.oneOfType([v.a.string,v.a.object])};var L=Object(E.g)(O),S=a(559),U=a(553),N=a(560),C=a(613);var x=function(e){i()(a,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=m()(e);if(t){var r=m()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return u()(this,a)}}(a);function a(){return r()(this,a),t.apply(this,arguments)}return c()(a,[{key:"render",value:function(){var e=this.props,t=e.emailAddress,a=e.password,n=e.loginPending,r=e.workspaceURLPending,o=e.keepSignedIn,c=e.login,l=e.changeField,i=e.handleChecked,s=e.style,u=e.serverError,d=e.validationErrors,m=!n&&!u&&!d;return f.a.createElement("div",null,f.a.createElement("div",{className:"w-100 mb-3"},f.a.createElement("span",{className:"h3"},Object(b.e)("action.signIn"))),m&&f.a.createElement(L,{path:{reset:"success"},message:Object(b.e)("success.resetPassword")}),m&&f.a.createElement(S.a,{path:{registration:"success"},message:Object(b.e)("success.clientRegistration")}),f.a.createElement(U.a,{error:u}),f.a.createElement(N.a,{label:Object(b.e)("label.emailAddress"),name:"emailAddress",id:"email-input",value:t,type:"textField",ariaLabel:"emailAddress",onChange:l,disabled:n||r,error:d}),f.a.createElement(N.a,{label:Object(b.e)("label.password"),name:"password",id:"password-input",value:a,type:"password",ariaLabel:Object(b.e)("label.password"),onChange:l,disabled:n||r,error:d}),f.a.createElement("div",{className:"form-row pl-1 pr-1"},f.a.createElement("div",{className:"col"},f.a.createElement(C.a,{id:"signedInCheck",name:"keepSignedIn",value:o,onClick:i,disabled:n||r,label:Object(b.e)("components.authentication.keepSignedIn")})),f.a.createElement("div",{className:"col text-right"},f.a.createElement(g.b,{to:{pathname:"/forgot"}},Object(b.e)("components.authentication.forgotPassword")))),f.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg btn-block mt-4 p-3 ".concat(s.button),onClick:c,disabled:n||r},Object(b.e)("action.signIn")),f.a.createElement("div",{className:"mt-4"},f.a.createElement("span",null,Object(b.e)("components.authentication.noAccount"))," ",f.a.createElement(g.b,{to:{pathname:"/register"}},Object(b.e)("action.register"))))}}]),a}(p.Component);x.propTypes={history:v.a.object,emailAddress:v.a.string,password:v.a.string,loginPending:v.a.bool,workspaceURLPending:v.a.bool,keepSignedIn:v.a.bool,login:v.a.func,handleChecked:v.a.func,changeField:v.a.func,style:v.a.object,validationErrors:v.a.object,serverError:v.a.object},t.a=x},940:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),o=a(5),c=a.n(o),l=a(17),i=a.n(l),s=a(16),u=a.n(s),d=a(7),m=a.n(d),p=a(0),f=a.n(p),g=a(6),h=a(41),v=a(28),b=a.n(v),E=a(27),y=a.n(E),k=a(3),w=a.n(k),R=a(69),j=a(81),O=a(52),L=a(555),S=a(63),U=a(25),N=a(18),C=a(89),x=a(2),A=a(583),T=a(35),I=a(34),D=a(65),P=a(611),F=a(554),M=a(612),B=a(689),H=a(733),_=a(158),z=a(626);var W=function(e){i()(n,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=m()(e);if(t){var r=m()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return u()(this,a)}}(n);function n(e){var a;return r()(this,n),(a=t.call(this,e)).state={workspaceURL:"",emailAddress:"",password:"",keepSignedIn:!1,loginPending:!1,redirectPending:!1,validationErrors:null,serverError:null},a.login=a.login.bind(y()(a)),a.handleChecked=a.handleChecked.bind(y()(a)),a.changeField=a.changeField.bind(y()(a)),a.changeSubdomain=a.changeSubdomain.bind(y()(a)),a}return c()(n,[{key:"componentDidMount",value:function(){var e=this;if(this.props.workspaceURLStatus!==x.REDUX_STATE.FULFILLED){var t=Object(A.a)(window.location.href);this.props.validateWorkspaceURL(t).then((function(t){if(t.type!==I.i){var a=t.payload.defaultLanguage,n=Object(N.c)();!Object(T.f)(n)&&Object(T.f)(a)&&Object(N.a)()!==a&&e.props.changeLanguage(a)}else e.setState({serverError:t.payload})}))}}},{key:"changeField",value:function(e){this.setState(b()({},e.target.name,e.target.value))}},{key:"handleChecked",value:function(e){this.setState(b()({},e.target.name,!this.state.keepSignedIn))}},{key:"login",value:function(e){var t=this;e.preventDefault(),this.setState({loginPending:!0,validationErrors:null,serverError:null});var a={workspaceURL:this.state.workspaceURL,emailAddress:this.state.emailAddress,password:this.state.password,keepSignedIn:this.state.keepSignedIn},n=Object(L.a)(a,Object(P.b)());null!=n?this.setState({loginPending:!1,validationErrors:n}):this.props.loginUser(a).then((function(e){e.type===I.d?(Object(C.a)(),U.a.clearSecurityToken(),t.setState({loginPending:!1,serverError:e.payload})):t.props.loadUser().then((function(e){if(e.type!==I.c){var a=e.payload.language;Object(T.f)(a)&&Object(N.a)()!==a&&t.props.changeLanguage(a)}else t.setState({loginPending:!1,serverError:e.payload})}))}))}},{key:"changeSubdomain",value:function(e){e.preventDefault(),this.setState({redirectPending:!0,validationErrors:null,serverError:null});var t={workspaceURL:this.state.workspaceURL},a=Object(L.a)(t,Object(P.e)());if(null!=a)this.setState({redirectPending:!1,validationErrors:a});else{var n="".concat("https","://").concat(t.workspaceURL,".").concat("buildar.live","/signin");window.location.replace(n)}}},{key:"render",value:function(){var e=this.state,t=e.workspaceURL,n=e.emailAddress,r=e.password,o=e.keepSignedIn,c=e.loginPending,l=e.redirectPending,i=e.validationErrors,s=e.serverError,u=this.props,d=u.workspaceURLStatus,m=u.logInStatus,h=u.clientStyle,v=u.userToken,b=u.userKeepSignedIn,E=u.history,y=null==d||d==x.REDUX_STATE.PENDING,k=Object(M.a)(this.props.workspaceURLStatus,this.props.clientStyle);return m==x.REDUX_STATE.FULFILLED&&null!=v&&Object(C.c)(v,b),f.a.createElement(p.Fragment,null,f.a.createElement(S.Helmet,{title:Object(N.e)("headers.login.title"),meta:[{name:"description",content:Object(N.e)("headers.login.description")}]}),(y||c)&&f.a.createElement(_.a,null),f.a.createElement("div",{className:"form-container col-xs-12 col-md-6 col-lg-6 d-flex flex-column hidden-md-down ".concat(k.links)},f.a.createElement("div",{id:"login"},f.a.createElement("div",{className:"p-3 p-sm-5 alignment vertical justify-content-center"},d!==x.REDUX_STATE.PENDING&&f.a.createElement("form",{className:"w-100"},f.a.createElement("div",{className:"w-100 text-center mb-4"},f.a.createElement("span",{className:"logo"},!y&&f.a.createElement("img",{src:h&&h.get("logoImage")||a(700)}))),d==x.REDUX_STATE.REJECTED&&f.a.createElement(B.a,{workspaceURL:t,changeSubdomain:this.changeSubdomain,changeField:this.changeField,redirectPending:l,serverError:s,validationErrors:i}),d!=x.REDUX_STATE.REJECTED&&f.a.createElement(H.a,{emailAddress:n,password:r,keepSignedIn:o,loginPending:c,login:this.login,handleChecked:this.handleChecked,changeField:this.changeField,style:k,serverError:s,validationErrors:i}))))),f.a.createElement("div",{className:"background-container col-md-6 col-lg-6 ".concat(k.background)}),f.a.createElement(g.b,{path:"/signin/help",render:function(){return f.a.createElement(F.a,{title:Object(N.e)("components.authentication.workspaceModal.title"),closeModal:function(){return E.push("/signin")}},f.a.createElement(p.Fragment,null,f.a.createElement("div",null,f.a.createElement("p",null,Object(N.e)("components.authentication.workspaceModal.body",{postProcess:"markdown-jsx"})),f.a.createElement("ul",null,f.a.createElement("li",null,f.a.createElement(R.b,{to:{pathname:"/forgot"}},Object(N.e)("components.authentication.workspaceModal.forgotWorkspace"))),f.a.createElement("li",null,f.a.createElement(R.b,{to:{pathname:"/register"}},Object(N.e)("components.authentication.workspaceModal.newWorkspace")))))))}}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.workspaceURLStatus===t.workspaceURLStatus?null:e.workspaceURLStatus===x.REDUX_STATE.FULFILLED?{workspaceURL:Object(A.a)(window.location.href)}:null}}]),n}(p.Component);W.propTypes={history:w.a.object,workspaceURLStatus:w.a.string,logInStatus:w.a.string,clientStyle:w.a.object,loginUser:w.a.func,loadUser:w.a.func,validateWorkspaceURL:w.a.func,userToken:w.a.string,userKeepSignedIn:w.a.bool,changeLanguage:w.a.func};var V=Object(g.g)(Object(j.b)((function(e){return{workspaceURLStatus:e.getIn([I.a,"workspaceURL","status"]),logInStatus:e.getIn([I.a,"userLogin","status"]),clientStyle:e.getIn([I.a,"workspaceURL","payload"]),userToken:e.getIn([I.a,"userLogin","status","payload","token"]),userKeepSignedIn:e.getIn([I.a,"userLogin","status","payload","keepSignedIn"])}}),(function(e){return{loginUser:Object(O.b)(I.n,e),loadUser:Object(O.b)(I.m,e),validateWorkspaceURL:Object(O.b)(I.s,e),changeLanguage:Object(O.b)(D.c,e)}}))(W)),X=a(559),q=a(553),J=a(560);a(43);var G=function(e){i()(n,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=m()(e);if(t){var r=m()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return u()(this,a)}}(n);function n(e){var a;return r()(this,n),(a=t.call(this,e)).state={emailAddress:"",loading:!1,visible:!1,validationErrors:null,serverError:null},a.forgot=a.forgot.bind(y()(a)),a.changeField=a.changeField.bind(y()(a)),a}return c()(n,[{key:"componentDidMount",value:function(){var e=this;if(this.props.workspaceURLStatus!==x.REDUX_STATE.FULFILLED){var t=Object(A.a)(window.location.href);this.props.validateWorkspaceURL(t).then((function(t){if(t.type!==I.i){var a=t.payload.defaultLanguage,n=Object(N.c)();!Object(T.f)(n)&&Object(T.f)(a)&&Object(N.a)()!==a&&e.props.changeLanguage(a)}}))}}},{key:"changeField",value:function(e){this.setState(b()({},e.target.name,e.target.value))}},{key:"forgot",value:function(e){var t=this;e.preventDefault(),this.setState({loading:!0,validationErrors:null});var a={emailAddress:this.state.emailAddress};if(this.props.workspaceURLStatus===x.REDUX_STATE.FULFILLED){var n=Object(A.a)(window.location.href);Object.assign(a,{workspaceURL:n})}var r=Object(L.a)(a,Object(P.a)());null!=r?this.setState({loading:!1,validationErrors:r}):this.props.forgotAccount(a).then((function(e){e.type===I.b?t.setState({loading:!1,serverError:e.payload}):(t.setState({emailAddress:"",loading:!1}),t.props.history.push("/forgot?email=success"))}))}},{key:"render",value:function(){var e=this.state,t=e.emailAddress,n=e.loading,r=e.validationErrors,o=e.serverError,c=this.props,l=c.workspaceURLStatus,i=c.forgotAccountStatus,s=c.clientStyle,u=null==l||l==x.REDUX_STATE.PENDING,d=i==x.REDUX_STATE.FULFILLED&&!o&&!r,m=Object(M.a)(l,s);return f.a.createElement(p.Fragment,null,f.a.createElement(S.Helmet,{title:Object(N.e)("headers.forgot.title"),meta:[{name:"description",content:Object(N.e)("headers.forgot.description")}]}),f.a.createElement("div",{className:"form-container col-xs-12 col-md-6 col-lg-5 d-flex flex-column hidden-md-down ".concat(m.links)},f.a.createElement("div",{id:"forgot"},f.a.createElement("div",{className:"p-3 p-sm-5 alignment vertical justify-content-center"},f.a.createElement("form",{className:"w-100"},f.a.createElement("div",{className:"w-100 text-center mt-4 mb-4"},f.a.createElement(R.b,{to:{pathname:"/signin"}},f.a.createElement("span",{className:"logo"},!u&&f.a.createElement("img",{src:s&&s.get("logoImage")||a(701)})))),d&&f.a.createElement(X.a,{path:{email:"success"},message:Object(N.e)("success.forgotPasswordEmail")}),f.a.createElement(q.a,{error:o}),f.a.createElement("div",{className:"w-100 mt-3 mb-3"},f.a.createElement("span",{className:"h3"}," ",Object(N.e)("label.accountDetails")," ")),f.a.createElement("div",{className:"mt-4 mb-4"},f.a.createElement("span",null,!u&&(l===x.REDUX_STATE.FULFILLED?Object(N.e)("components.authentication.forgotAccountDetails.headerPasswordOnly"):Object(N.e)("components.authentication.forgotAccountDetails.header"))),f.a.createElement("br",null),f.a.createElement("span",null,Object(N.e)("components.authentication.forgotAccountDetails.description"))),f.a.createElement(J.a,{label:Object(N.e)("label.emailAddress"),name:"emailAddress",id:"email-input",value:t,type:"textField",ariaLabel:"emailAddress",onChange:this.changeField,disabled:n,error:r}),f.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg btn-block mt-4 p-3 ".concat(m.button),onClick:this.forgot,disabled:n},Object(N.e)("action.sendEmail")),f.a.createElement("div",{className:"mt-4"},Object(N.e)("components.authentication.existingAccount")," ",f.a.createElement(R.b,{to:{pathname:"/signin"}},Object(N.e)("action.signIn"))),f.a.createElement(z.a,null))))),f.a.createElement("div",{className:"background-container col-md-6 col-lg-7 ".concat(m.background)}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.workspaceURLStatus===t.workspaceURLStatus?null:e.workspaceURLStatus===x.REDUX_STATE.FULFILLED?{workspaceURL:Object(A.a)(window.location.href)}:null}}]),n}(p.Component);G.propTypes={history:w.a.object,forgotAccount:w.a.func,validateWorkspaceURL:w.a.func,workspaceURLStatus:w.a.string,forgotAccountStatus:w.a.string,clientStyle:w.a.object,changeLanguage:w.a.func};var Z=Object(g.g)(Object(j.b)((function(e){return{workspaceURLStatus:e.getIn([I.a,"workspaceURL","status"]),forgotAccountStatus:e.getIn([I.a,"forgotAccount","status"]),clientStyle:e.getIn([I.a,"workspaceURL","payload"])}}),(function(e){return{forgotAccount:Object(O.b)(I.l,e),validateWorkspaceURL:Object(O.b)(I.s,e),changeLanguage:Object(O.b)(D.c,e)}}))(G));var K=Object(h.a)((function(){return a.e(28).then(a.bind(null,926))})),Q=Object(h.a)((function(){return a.e(30).then(a.bind(null,927))})),Y=Object(h.a)((function(){return a.e(29).then(a.bind(null,928))})),$=Object(h.a)((function(){return a.e(27).then(a.bind(null,929))})),ee=function(e){i()(a,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=m()(e);if(t){var r=m()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return u()(this,a)}}(a);function a(){return r()(this,a),t.apply(this,arguments)}return c()(a,[{key:"render",value:function(){return f.a.createElement("div",{id:"authentication"},f.a.createElement("div",{className:"container-fluid nopadding"},f.a.createElement("div",{className:"row justify-content-center nopadding"},f.a.createElement(g.d,null,f.a.createElement(g.b,{path:"/signin",render:function(){return f.a.createElement(V,null)}}),f.a.createElement(g.b,{path:"/signin/help",render:function(){return f.a.createElement(V,null)}}),f.a.createElement(g.b,{path:"/register",render:function(){return f.a.createElement(K,null)}}),f.a.createElement(g.b,{path:"/forgot",render:function(){return f.a.createElement(Z,null)}}),f.a.createElement(g.b,{exact:!0,path:"/reset",render:function(){return f.a.createElement(Q,null)}}),f.a.createElement(g.b,{exact:!0,path:"/verify",render:function(){return f.a.createElement(Y,null)}}),f.a.createElement(g.b,{exact:!0,path:"/verify/email_change",render:function(){return f.a.createElement($,null)}})))))}}]),a}(p.Component);t.default=ee}}]);