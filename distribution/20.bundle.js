(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{570:function(t,e,a){"use strict";var n=a(33),o=a.n(n),i=a(4),r=a.n(i),l=a(5),s=a.n(l),c=a(15),u=a.n(c),d=a(13),p=a.n(d),f=a(6),v=a.n(f),m=a(0),g=a.n(m),h=a(3),b=a.n(h),y=a(7),E=a(571),L=a(18);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=v()(t);if(e){var o=v()(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return p()(this,a)}}var j=function(t){u()(a,t);var e=O(a);function a(){return r()(this,a),e.apply(this,arguments)}return s()(a,[{key:"render",value:function(){var t=this.props,e=t.history,a=t.error,n=t.showMessage;if(t.showAlert&&a&&(429===a.status||500===a.status))return g.a.createElement(E.a,{title:"".concat(Object(L.e)("label.error"),": ").concat(Object(L.e)("error.somethingWentWrong")),closeModal:function(){return e.push("/")}},a.message);if(n&&a&&a.reason){var i=a.reason;if("string"==typeof i||i instanceof String)return g.a.createElement("div",{className:"alert alert-danger rounded-0"},i);if("object"===o()(i)||i instanceof Object){for(var r=[],l=0,s=Object.keys(i);l<s.length;l++){var c=s[l];r.push(g.a.createElement("div",{key:c},i[c]))}if(r.length>0)return g.a.createElement("div",{className:"alert alert-danger rounded-0"},r)}}return null}}]),a}(m.Component);j.defaultProps={showMessage:!0,showAlert:!0,error:{}},j.propTypes={history:b.a.object,showMessage:b.a.bool,showAlert:b.a.bool,error:b.a.object},e.a=Object(y.g)(j)},571:function(t,e,a){"use strict";var n=a(4),o=a.n(n),i=a(5),r=a.n(i),l=a(15),s=a.n(l),c=a(13),u=a.n(c),d=a(6),p=a.n(d),f=a(0),v=a.n(f),m=a(3),g=a.n(m),h=a(579),b=a.n(h),y=a(18);function E(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=p()(t);if(e){var o=p()(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return u()(this,a)}}var L=function(t){s()(a,t);var e=E(a);function a(){return o()(this,a),e.apply(this,arguments)}return r()(a,[{key:"render",value:function(){var t=this.props,e=t.title,a=t.children,n=t.closeModal;return v.a.createElement("div",{className:"modal",tabIndex:"-1"},v.a.createElement(b.a,{contentLabel:e,className:"modal-dialog modal-dialog-centered",isOpen:!0,ariaHideApp:!1,onRequestClose:n},v.a.createElement("div",{className:"modal-content rounded-0",role:"document"},v.a.createElement("div",{className:"modal-header"},v.a.createElement("h5",{className:"modal-title"},e),v.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:n},v.a.createElement("span",{"aria-hidden":"true"},"×"))),v.a.createElement("div",{className:"modal-body"},a),v.a.createElement("div",{className:"modal-footer"},n&&v.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:n,"data-dismiss":"modal"},Object(y.e)("action.close"))))))}}]),a}(f.Component);L.propTypes={title:g.a.string,children:g.a.oneOfType([g.a.string,g.a.object]),closeModal:g.a.func},e.a=L},572:function(t,e,a){"use strict";var n=a(599),o=a.n(n),i=a(18);e.a=function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=o.a;return n.options={fullMessages:!1},n.validators.noEmptyValue=function(t){if(""===t||"string"==typeof t&&""===t.trim()||t===[]||t==={})return Object(i.e)("validation.validators.cannotBeBlank")},n.validators.date.options={message:Object(i.e)("validation.validators.validDate")},n.validators.datetime.options={message:Object(i.e)("validation.validators.validDate")},n.validators.email.options={message:Object(i.e)("validation.validators.invalidEmail")},n.validators.equality.options={message:Object(i.e)("validation.validators.notEqual")},n.validators.exclusion.options={message:Object(i.e)("validation.validators.restricted")},n.validators.format.options={message:Object(i.e)("validation.validators.invalid")},n.validators.inclusion.options={message:Object(i.e)("validation.validators.notIncluded")},n.validators.length.options={message:Object(i.e)("validation.validators.invalid")},n.validators.numericality.options={message:Object(i.e)("validation.validators.invalid")},n.validators.presence.options={message:Object(i.e)("validation.validators.cannotBeBlank")},n.validators.url.options={message:Object(i.e)("validation.validators.invalidURL")},n(t,e,a)}},576:function(t,e,a){"use strict";var n=a(4),o=a.n(n),i=a(5),r=a.n(i),l=a(15),s=a.n(l),c=a(13),u=a.n(c),d=a(6),p=a.n(d),f=a(0),v=a.n(f),m=a(3),g=a.n(m),h=a(7),b=a(581),y=a.n(b),E=a(602),L=a.n(E);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=p()(t);if(e){var o=p()(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return u()(this,a)}}var j=function(t){s()(a,t);var e=O(a);function a(){return o()(this,a),e.apply(this,arguments)}return r()(a,[{key:"render",value:function(){var t=this.props,e=t.history,a=t.path,n=t.message,o=y.a.parse(e.location.search);return n&&!0===L()(o,a)?v.a.createElement("div",{className:"alert alert-success rounded-0"},n):null}}]),a}(f.Component);j.propTypes={history:g.a.object,path:g.a.object,message:g.a.oneOfType([g.a.string,g.a.object])},e.a=Object(h.g)(j)},593:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"d",(function(){return r})),a.d(e,"c",(function(){return l})),a.d(e,"a",(function(){return s}));var n=a(18),o=a(2);function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"post",e="patch"!=t;return{name:{presence:e,noEmptyValue:!0,length:{maximum:255}},description:{presence:e,noEmptyValue:!1,length:{maximum:255}}}}function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"post",e="patch"!=t;return{defaultLanguage:{presence:e,noEmptyValue:!0,inclusion:{within:o.RESTRICTED_LANGUAGES}}}}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"post",e="patch"!=t;return{logoImage:{presence:e,format:{pattern:"^$|[0-9]*_[0-9]*_[0-9]*.[a-z]+$",flags:"i",message:Object(n.e)("validation.validators.validKey")}},backgroundImage:{presence:e,format:{pattern:"^$|[0-9]*_[0-9]*_[0-9]*.[a-z]+$",flags:"i",message:Object(n.e)("validation.validators.validKey")}},backgroundColor:{presence:e,noEmptyValue:!0,format:{pattern:"^#[0-9A-F]{6}$",flags:"i",message:Object(n.e)("validation.validators.validHex")}},primaryColor:{presence:e,noEmptyValue:!0,format:{pattern:"^#[0-9A-F]{6}$",flags:"i",message:Object(n.e)("validation.validators.validHex")}},secondaryColor:{presence:e,noEmptyValue:!0,format:{pattern:"^#[0-9A-F]{6}$",flags:"i",message:Object(n.e)("validation.validators.validHex")}}}}function s(){return{workspaceURL:{presence:{allowEmpty:!1},format:{pattern:"[a-z0-9]+",flags:"i",message:Object(n.e)("validation.validators.validCharactersAZ09")},exclusion:{within:o.RESTRICTED_DOMAINS,message:Object(n.e)("validation.validators.validWorkspaceURL")},length:{maximum:255}},accountPassword:{presence:{allowEmpty:!1},length:{minimum:6,maximum:66,message:Object(n.e)("validation.validators.invalidPasswordLength")}}}}},949:function(t,e,a){"use strict";a.r(e);var n=a(28),o=a.n(n),i=a(4),r=a.n(i),l=a(5),s=a.n(l),c=a(27),u=a.n(c),d=a(15),p=a.n(d),f=a(13),v=a.n(f),m=a(6),g=a.n(m),h=a(0),b=a.n(h),y=a(3),E=a.n(y),L=a(51),O=a(79),j=a(7),z=a(2),S=a(572),R=a(593),N=a(18),_=a(35),k=a(609),C=a(576),A=a(570);function D(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=g()(t);if(e){var o=g()(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return v()(this,a)}}var T=function(t){p()(a,t);var e=D(a);function a(t){var n;return r()(this,a),(n=e.call(this,t)).state={defaultLanguage:"",loading:!1,validationErrors:null,serverError:null},n.setEditableFields=n.setEditableFields.bind(u()(n)),n.saveLocalization=n.saveLocalization.bind(u()(n)),n.selectItem=n.selectItem.bind(u()(n)),n}return s()(a,[{key:"componentDidMount",value:function(){var t=this;this._isMounted=!0,this._isMounted&&this.setState({loading:!0,validationErrors:null,serverError:null}),this.props.loadLocalization().then((function(e){e.type!==k.d?t._isMounted&&t.setEditableFields(e.payload.localization):t._isMounted&&t.setState({serverError:e.payload})}))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"setEditableFields",value:function(t){this.setState({defaultLanguage:z.LANGUAGE_CODES[t.defaultLanguage]||"",loading:!1})}},{key:"selectItem",value:function(t){this.setState(o()({},t.target.name,t.target.value))}},{key:"saveLocalization",value:function(t){var e=this;t.preventDefault(),this._isMounted&&this.setState({loading:!0,validationErrors:null,serverError:null});var a={defaultLanguage:this.state.defaultLanguage},n=Object(S.a)(a,Object(R.d)());if(null==n){var o=Object(_.e)(a,this.props.localization);null!=Object(S.a)(o,Object(R.d)("patch"))?this._isMounted&&this.setState({loading:!1,validationErrors:n}):this.props.updateLocalization(o).then((function(t){t.type===k.i?e._isMounted&&e.setState({loading:!1,serverError:t.payload}):e._isMounted&&e.props.loadLocalization().then((function(t){t.type!==k.d?(e.setState({loading:!1}),e.props.history.push("/settings/localization?updatelocalization=success")):e._isMounted&&e.setState({serverError:t.payload})}))}))}else this._isMounted&&this.setState({loading:!1,validationErrors:n})}},{key:"render",value:function(){var t=this.props,e=t.loadLocalizationStatus,a=t.updateLocalizationStatus,n=this.state,o=n.defaultLanguage,i=n.loading,r=n.validationErrors,l=n.serverError,s=i||e==z.REDUX_STATE.PENDING||a==z.REDUX_STATE.PENDING,c=a===z.REDUX_STATE.FULFILLED&&!l&&!r;return b.a.createElement("div",null,b.a.createElement("h1",null,Object(N.e)("components.settings.localization.languageAndLocalization")),b.a.createElement("div",{className:"mt-3 mb-5"},b.a.createElement("div",{className:"card rounded-0 my-3 text-left"},b.a.createElement("div",{className:"card-body"},c&&b.a.createElement(C.a,{path:{updatelocalization:"success"},message:Object(N.e)("success.updateLocalization")}),b.a.createElement(A.a,{error:l}),b.a.createElement("div",{className:"form-group"},b.a.createElement("label",{htmlFor:"changeLanguageControl"},Object(N.e)("components.settings.localization.defaultLanguage")),b.a.createElement("select",{id:"changeLanguageControl",className:"form-control",style:{border:"0px",outline:"1px solid #CCC",outlineOffset:"-1px"},name:"defaultLanguage",value:o,onChange:this.selectItem,disabled:s},b.a.createElement("option",{value:z.LANGUAGE_CODES[1]},Object(N.e)("languages.en")),b.a.createElement("option",{value:z.LANGUAGE_CODES[2]},Object(N.e)("languages.it"))),b.a.createElement("div",{className:"text-muted"},b.a.createElement("small",null,Object(N.e)("components.settings.localization.defaultLanguageSubText")))),b.a.createElement("button",{type:"submit",className:"btn btn-primary btn-sm btn-block mt-4 p-3",onClick:this.saveLocalization,disabled:s},Object(N.e)("action.update"))))))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.loadLocalizationStatus===e.loadLocalizationStatus?null:t.loadLocalizationStatus===z.REDUX_STATE.FULFILLED?{loadLocalizationStatus:z.REDUX_STATE.FULFILLED}:null}}]),a}(h.Component);T.propTypes={history:E.a.object,localization:E.a.object,loadLocalization:E.a.func,loadLocalizationStatus:E.a.string,updateLocalization:E.a.func,updateLocalizationStatus:E.a.string},e.default=Object(j.g)(Object(O.b)((function(t){return{loadLocalizationStatus:t.getIn([k.f,"loadLocalization","status"]),updateLocalizationStatus:t.getIn([k.f,"updateLocalization","status"]),localization:t.getIn([k.f,"loadLocalization","payload","localization"])}}),(function(t){return{loadLocalization:Object(L.b)(k.o,t),updateLocalization:Object(L.b)(k.s,t)}}))(T))}}]);