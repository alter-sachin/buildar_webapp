(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{561:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var s=r.apply(null,n);s&&e.push(s)}else if("object"===o)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},562:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a(18);var n=a(0),r=a.n(n).a.createContext({});function o(e,t){var a=Object(n.useContext)(r);return e||a[t]||t}r.Consumer,r.Provider},563:function(e,t,a){"use strict";var n=a(40),r=a.n(n),o=a(5),s=a.n(o),l=a(6),i=a.n(l),c=a(9),u=a.n(c),d=a(8),p=a.n(d),f=a(4),m=a.n(f),v=a(0),b=a.n(v),g=a(1),h=a.n(g),y=a(10),E=a(564),O=a(7);var j=function(e){u()(a,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=m()(e);if(t){var r=m()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return p()(this,a)}}(a);function a(){return s()(this,a),t.apply(this,arguments)}return i()(a,[{key:"render",value:function(){var e=this.props,t=e.history,a=e.error,n=e.showMessage;if(e.showAlert&&a&&(429===a.status||500===a.status))return b.a.createElement(E.a,{title:"".concat(Object(O.f)("label.error"),": ").concat(Object(O.f)("error.somethingWentWrong")),closeModal:function(){return t.push("/")}},a.message);if(n&&a&&a.reason){var o=a.reason;if("string"==typeof o||o instanceof String)return b.a.createElement("div",{className:"alert alert-danger rounded-0"},o);if("object"===r()(o)||o instanceof Object){for(var s=[],l=0,i=Object.keys(o);l<i.length;l++){var c=i[l];s.push(b.a.createElement("div",{key:c},o[c]))}if(s.length>0)return b.a.createElement("div",{className:"alert alert-danger rounded-0"},s)}}return null}}]),a}(v.Component);j.defaultProps={showMessage:!0,showAlert:!0,error:{}},j.propTypes={history:h.a.object,showMessage:h.a.bool,showAlert:h.a.bool,error:h.a.object},t.a=Object(y.g)(j)},564:function(e,t,a){"use strict";var n=a(5),r=a.n(n),o=a(6),s=a.n(o),l=a(9),i=a.n(l),c=a(8),u=a.n(c),d=a(4),p=a.n(d),f=a(0),m=a.n(f),v=a(1),b=a.n(v),g=a(572),h=a.n(g),y=a(7);var E=function(e){i()(a,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=p()(e);if(t){var r=p()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return u()(this,a)}}(a);function a(){return r()(this,a),t.apply(this,arguments)}return s()(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.children,n=e.closeModal;return m.a.createElement("div",{className:"modal",tabIndex:"-1"},m.a.createElement(h.a,{contentLabel:t,className:"modal-dialog modal-dialog-centered",isOpen:!0,ariaHideApp:!1,onRequestClose:n},m.a.createElement("div",{className:"modal-content rounded-0",role:"document"},m.a.createElement("div",{className:"modal-header"},m.a.createElement("h5",{className:"modal-title"},t),m.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:n},m.a.createElement("span",{"aria-hidden":"true"},"×"))),m.a.createElement("div",{className:"modal-body"},a),m.a.createElement("div",{className:"modal-footer"},n&&m.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:n,"data-dismiss":"modal"},Object(y.f)("action.close"))))))}}]),a}(f.Component);E.propTypes={title:b.a.string,children:b.a.oneOfType([b.a.string,b.a.object]),closeModal:b.a.func},t.a=E},565:function(e,t,a){"use strict";var n=a(592),r=a.n(n),o=a(7);t.a=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.a;return n.options={fullMessages:!1},n.validators.noEmptyValue=function(e){if(""===e||"string"==typeof e&&""===e.trim()||e===[]||e==={})return Object(o.f)("validation.validators.cannotBeBlank")},n.validators.date.options={message:Object(o.f)("validation.validators.validDate")},n.validators.datetime.options={message:Object(o.f)("validation.validators.validDate")},n.validators.email.options={message:Object(o.f)("validation.validators.invalidEmail")},n.validators.equality.options={message:Object(o.f)("validation.validators.notEqual")},n.validators.exclusion.options={message:Object(o.f)("validation.validators.restricted")},n.validators.format.options={message:Object(o.f)("validation.validators.invalid")},n.validators.inclusion.options={message:Object(o.f)("validation.validators.notIncluded")},n.validators.length.options={message:Object(o.f)("validation.validators.invalid")},n.validators.numericality.options={message:Object(o.f)("validation.validators.invalid")},n.validators.presence.options={message:Object(o.f)("validation.validators.cannotBeBlank")},n.validators.url.options={message:Object(o.f)("validation.validators.invalidURL")},n(e,t,a)}},568:function(e,t,a){"use strict";var n=a(5),r=a.n(n),o=a(6),s=a.n(o),l=a(9),i=a.n(l),c=a(8),u=a.n(c),d=a(4),p=a.n(d),f=a(0),m=a.n(f),v=a(1),b=a.n(v),g=a(10),h=a(574),y=a.n(h),E=a(594),O=a.n(E);var j=function(e){i()(a,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=p()(e);if(t){var r=p()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return u()(this,a)}}(a);function a(){return r()(this,a),t.apply(this,arguments)}return s()(a,[{key:"render",value:function(){var e=this.props,t=e.history,a=e.path,n=e.message,r=y.a.parse(t.location.search);return n&&!0===O()(r,a)?m.a.createElement("div",{className:"alert alert-success rounded-0"},n):null}}]),a}(f.Component);j.propTypes={history:b.a.object,path:b.a.object,message:b.a.oneOfType([b.a.string,b.a.object])},t.a=Object(g.g)(j)},569:function(e,t,a){"use strict";var n=a(5),r=a.n(n),o=a(6),s=a.n(o),l=a(9),i=a.n(l),c=a(8),u=a.n(c),d=a(4),p=a.n(d),f=a(0),m=a.n(f),v=a(1),b=a.n(v),g=a(579);var h=function(e){i()(a,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=p()(e);if(t){var r=p()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return u()(this,a)}}(a);function a(){return r()(this,a),t.apply(this,arguments)}return s()(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.value,n=e.onChange,r=e.label,o=e.id,s=e.type,l=e.ariaLabel,i=e.smallText,c=e.placeholder,u=e.required,d=e.disabled,p=e.error,f=e.defaultValue;return m.a.createElement("div",{className:"form-group"},r&&m.a.createElement("label",{htmlFor:o},r," ",u&&"*"),m.a.createElement("div",{className:"input-group"},m.a.createElement("input",{name:t,value:a,type:s,defaultValue:f,className:"form-control rounded-0",id:o,"aria-describedby":l,onChange:n,placeholder:c,disabled:d}),p&&p[t]&&m.a.createElement("div",{className:"d-block invalid-feedback"},p[t][0]),i&&m.a.createElement("div",{className:"w-100 text-muted"},m.a.createElement("small",null,i))))}}]),a}(m.a.Component);h.propTypes={name:b.a.string,value:b.a.string,onChange:b.a.func,defaultValue:g.a.func,label:b.a.string,id:b.a.string,type:b.a.string,ariaLabel:b.a.string,placeholder:b.a.string,smallText:b.a.string,required:b.a.bool,disabled:b.a.bool,error:b.a.object},t.a=h},579:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(18),r=a(37),o=a(561),s=a.n(o),l=a(0),i=a.n(l),c=a(1),u=a.n(c),d=a(562),p={bsPrefix:u.a.string,fluid:u.a.bool,rounded:u.a.bool,roundedCircle:u.a.bool,thumbnail:u.a.bool},f=i.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,l=e.fluid,c=e.rounded,u=e.roundedCircle,p=e.thumbnail,f=Object(r.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);a=Object(d.a)(a,"img");var m=s()(l&&a+"-fluid",c&&"rounded",u&&"rounded-circle",p&&a+"-thumbnail");return i.a.createElement("img",Object(n.a)({ref:t},f,{className:s()(o,m)}))}));f.displayName="Image",f.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1}},586:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"d",(function(){return s})),a.d(t,"c",(function(){return l})),a.d(t,"a",(function(){return i}));var n=a(7),r=a(2);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"post",t="patch"!=e;return{name:{presence:t,noEmptyValue:!0,length:{maximum:255}},description:{presence:t,noEmptyValue:!1,length:{maximum:255}}}}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"post",t="patch"!=e;return{defaultLanguage:{presence:t,noEmptyValue:!0,inclusion:{within:r.RESTRICTED_LANGUAGES}}}}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"post",t="patch"!=e;return{logoImage:{presence:t,format:{pattern:"^$|[0-9]*_[0-9]*_[0-9]*.[a-z]+$",flags:"i",message:Object(n.f)("validation.validators.validKey")}},backgroundImage:{presence:t,format:{pattern:"^$|[0-9]*_[0-9]*_[0-9]*.[a-z]+$",flags:"i",message:Object(n.f)("validation.validators.validKey")}},backgroundColor:{presence:t,noEmptyValue:!0,format:{pattern:"^#[0-9A-F]{6}$",flags:"i",message:Object(n.f)("validation.validators.validHex")}},primaryColor:{presence:t,noEmptyValue:!0,format:{pattern:"^#[0-9A-F]{6}$",flags:"i",message:Object(n.f)("validation.validators.validHex")}},secondaryColor:{presence:t,noEmptyValue:!0,format:{pattern:"^#[0-9A-F]{6}$",flags:"i",message:Object(n.f)("validation.validators.validHex")}}}}function i(){return{workspaceURL:{presence:{allowEmpty:!1},format:{pattern:"[a-z0-9]+",flags:"i",message:Object(n.f)("validation.validators.validCharactersAZ09")},exclusion:{within:r.RESTRICTED_DOMAINS,message:Object(n.f)("validation.validators.validWorkspaceURL")},length:{maximum:255}},accountPassword:{presence:{allowEmpty:!1},length:{minimum:6,maximum:66,message:Object(n.f)("validation.validators.invalidPasswordLength")}}}}},656:function(e,t,a){"use strict";var n=a(5),r=a.n(n),o=a(6),s=a.n(o),l=a(9),i=a.n(l),c=a(8),u=a.n(c),d=a(4),p=a.n(d),f=a(0),m=a.n(f),v=a(1),b=a.n(v);var g=function(e){i()(a,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=p()(e);if(t){var r=p()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return u()(this,a)}}(a);function a(){return r()(this,a),t.apply(this,arguments)}return s()(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.value,n=e.onChange,r=e.label,o=e.rows,s=e.id,l=e.ariaLabel,i=e.smallText,c=e.resize,u=e.placeholder,d=e.required,p=e.disabled,f=e.error;return m.a.createElement("div",{className:"form-group"},r&&m.a.createElement("label",{htmlFor:s},r," ",d&&"*"),m.a.createElement("div",{className:"input-group"},m.a.createElement("textarea",{name:t,value:a,style:{resize:c?"vertical":"none"},rows:o,className:"form-control rounded-0",id:s,"aria-describedby":l,onChange:n,placeholder:u,disabled:p}),f&&f[t]&&m.a.createElement("div",{className:"d-block invalid-feedback"},f[t][0]),i&&m.a.createElement("div",{className:"w-100 text-muted"},m.a.createElement("small",null,i))))}}]),a}(m.a.Component);g.propTypes={name:b.a.string,value:b.a.string,onChange:b.a.func,label:b.a.string,id:b.a.string,ariaLabel:b.a.string,rows:b.a.number,resize:b.a.bool,placeholder:b.a.string,smallText:b.a.string,required:b.a.bool,disabled:b.a.bool,error:b.a.object},t.a=g},930:function(e,t,a){"use strict";a.r(t);var n=a(32),r=a.n(n),o=a(5),s=a.n(o),l=a(6),i=a.n(l),c=a(20),u=a.n(c),d=a(9),p=a.n(d),f=a(8),m=a.n(f),v=a(4),b=a.n(v),g=a(0),h=a.n(g),y=a(1),E=a.n(y),O=a(39),j=a(54),C=a(24),R=a(10),N=a(35),k=a.n(N),x=a(2),w=a(565),T=a(586),S=a(7),L=a(11),A=a(601),F=a(23),_=a(25),P=a(61),D=a(569),M=a(656),U=a(568),I=a(563);var B=function(e){p()(a,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=b()(e);if(t){var r=b()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return m()(this,a)}}(a);function a(e){var n;return s()(this,a),(n=t.call(this,e)).state={name:"",description:"",loading:!0,validationErrors:null,serverError:null},n.setEditableFields=n.setEditableFields.bind(u()(n)),n.changeField=n.changeField.bind(u()(n)),n.updateAccessConfiguration=n.updateAccessConfiguration.bind(u()(n)),n}return i()(a,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,this._isMounted&&this.setState({loading:!0,validationErrors:null,serverError:null}),this.props.loadClient().then((function(t){t.type!==A.b?e._isMounted&&e.setEditableFields(t.payload.client):e._isMounted&&e.setState({serverError:t.payload})}))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"setEditableFields",value:function(e){this.setState({name:e.name||"",description:e.description||"",loading:!1})}},{key:"changeField",value:function(e){this.setState(r()({},e.target.name,e.target.value))}},{key:"updateAccessConfiguration",value:function(e){var t=this;e.preventDefault(),this._isMounted&&this.setState({loading:!0,validationErrors:null,serverError:null});var a={name:this.state.name,description:this.state.description},n=Object(w.a)(a,Object(T.b)());if(null==n){var r=Object(L.e)(a,this.props.client);null!=Object(w.a)(r,Object(T.b)("patch"))?this._isMounted&&this.setState({loading:!1,validationErrors:n}):this.props.updateClient(r).then((function(e){e.type===A.g?t._isMounted&&t.setState({loading:!1,serverError:e.payload}):t.props.loadClient().then((function(e){e.type!==A.b?t._isMounted&&t.props.loadUser().then((function(e){if(e.type===F.c)return t.setState({loading:!1}),void window.location.reload;t.setState({loading:!1}),t.props.history.push("/settings/general?updateaccessconfiguration=success")})):t._isMounted&&t.setState({serverError:e.payload})}))}))}else this._isMounted&&this.setState({loading:!1,validationErrors:n})}},{key:"render",value:function(){var e=this,t=this.props,a=t.client,n=t.user,r=t.loadClientStatus,o=t.updateClientStatus,s=this.state,l=s.name,i=s.description,c=s.loading,u=s.validationErrors,d=s.serverError,p=c||r==x.REDUX_STATE.PENDING||o==x.REDUX_STATE.PENDING,f=o===x.REDUX_STATE.FULFILLED&&!d&&!u;return h.a.createElement("div",null,h.a.createElement("h1",null,Object(S.f)("components.settings.general.generalSettings")),h.a.createElement("div",{className:"mt-3 mb-5"},h.a.createElement("h5",null,Object(S.f)("components.settings.general.accountSummary")),h.a.createElement("div",{className:"card rounded-0 my-3 text-left"},h.a.createElement("div",{className:"card-body"},h.a.createElement("div",null,h.a.createElement(P.a,{user:n,disabled:!1,hasAnyRole:[x.ROLE_TYPE.OWNER,x.ROLE_TYPE.FINANCE]},h.a.createElement(g.Fragment,null,h.a.createElement("b",null,Object(S.f)("components.settings.general.subscriptionType"))," ",h.a.createElement("span",{className:"text-uppercase text-muted"},a&&Object(S.f)("components.billing.subscriptionType.".concat(a.get("subscriptionType"))))," ",a&&a.get("subscriptionType")==x.SUBSCRIPTION_TYPE.TRIAL&&h.a.createElement(C.b,{to:{pathname:"/billing"}},"(",Object(S.f)("components.settings.general.upgradePaidPlan"),")")))),h.a.createElement("div",null,h.a.createElement("b",null,Object(S.f)("components.settings.general.workspaceCreationDate"))," ",h.a.createElement("span",{className:"text-muted"},a&&k()(a.get("createdDate")).format("MMMM Do YYYY, h:mm A"))),h.a.createElement("div",null,h.a.createElement("b",null,Object(S.f)("components.settings.general.activeUsers"))," ",h.a.createElement("span",{className:"text-muted"},a&&a.get("activeUsers")))))),h.a.createElement("div",{className:"mt-3 mb-5"},h.a.createElement("h5",null,Object(S.f)("components.settings.general.accessConfiguration")),h.a.createElement("div",{className:"card rounded-0 my-3 text-left"},h.a.createElement("div",{className:"card-body"},f&&h.a.createElement(U.a,{path:{updateaccessconfiguration:"success"},message:Object(S.f)("success.updateAccessConfiguration")}),h.a.createElement(I.a,{error:d}),h.a.createElement(D.a,{label:Object(S.f)("components.settings.general.workspaceTitle"),name:"name",id:"name-input",value:l,type:"textField",ariaLabel:Object(S.f)("components.settings.general.workspaceTitle"),onChange:this.changeField,required:!0,disabled:p,error:u}),h.a.createElement(D.a,{label:Object(S.f)("components.settings.general.workspaceURL"),name:"workspaceurl",id:"workspaceurl-input",value:a?"".concat("http","://").concat(a.get("workspaceURL"),".").concat("localhost:3001","/").toLowerCase():"",type:"textField",ariaLabel:Object(S.f)("components.settings.general.workspaceURL"),smallText:Object(S.f)("components.settings.general.workspaceURLUniqueAddress"),disabled:!0}),h.a.createElement(M.a,{label:Object(S.f)("components.settings.general.workspaceDescription"),name:"description",id:"description-input",value:i,type:"textArea",ariaLabel:Object(S.f)("components.settings.general.workspaceDescription"),rows:2,onChange:this.changeField,smallText:Object(S.f)("components.settings.general.workspaceDescriptionSubText"),disabled:p,error:u}),h.a.createElement("button",{type:"submit",className:"btn btn-primary btn-sm btn-block mt-4 p-3",onClick:this.updateAccessConfiguration,disabled:p},Object(S.f)("action.update"))))),h.a.createElement(P.a,{user:n,hasAllRoles:[x.ROLE_TYPE.OWNER]},h.a.createElement("div",{className:"mt-3 mb-5"},h.a.createElement("h5",null,Object(S.f)("components.settings.general.dangerZone")),h.a.createElement("div",{className:"card rounded-0 my-3 text-left"},h.a.createElement("div",{className:"card-body"},h.a.createElement(g.Fragment,null,h.a.createElement("label",{className:"text-danger"},h.a.createElement("b",null,Object(S.f)("components.settings.general.deleteWorkspace"))),h.a.createElement("div",{className:"text-danger"},Object(S.f)("components.settings.general.deleteWorkspaceWarning")),h.a.createElement("button",{type:"submit",className:"btn btn-danger btn-sm mt-3 p-2",onClick:function(){return e.props.history.push("/settings/general/delete-workspace")},disabled:p},Object(S.f)("components.settings.general.deleteWorkspace"))))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.loadClientStatus===t.loadClientStatus?null:e.loadClientStatus===x.REDUX_STATE.FULFILLED?{loadClientStatus:x.REDUX_STATE.FULFILLED}:null}}]),a}(g.Component);B.propTypes={history:E.a.object,client:E.a.object,user:E.a.object,loadUser:E.a.func,loadClient:E.a.func,loadClientStatus:E.a.string,updateClient:E.a.func,updateClientStatus:E.a.string},t.default=Object(_.a)(Object(R.g)(Object(j.b)((function(e){return{loadClientStatus:e.getIn([A.f,"loadClient","status"]),updateClientStatus:e.getIn([A.f,"updateClient","status"]),client:e.getIn([A.f,"loadClient","payload","client"])}}),(function(e){return{loadUser:Object(O.b)(F.m,e),loadClient:Object(O.b)(A.m,e),updateClient:Object(O.b)(A.q,e)}}))(B)))}}]);