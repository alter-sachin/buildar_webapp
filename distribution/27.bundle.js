(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{946:function(e,t,a){"use strict";a.r(t);var s=a(32),r=a.n(s),n=a(5),o=a.n(n),c=a(6),l=a.n(c),i=a(20),d=a.n(i),u=a(9),p=a.n(u),b=a(8),f=a.n(b),m=a(4),w=a.n(m),v=a(0),h=a.n(v),g=a(1),E=a.n(g),y=a(54),L=a(40),R=a(24),j=a(10),k=a(102),O=a(584),P=a(593),U=a.n(P),S=a(7),F=a(2),D=a(612),N=a(636),C=a(11),I=a(651),T=a(649),x=a(23),A=a(68),X=a(587),_=a(582),W=a(588);function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,s=w()(e);if(t){var r=w()(this).constructor;a=Reflect.construct(s,arguments,r)}else a=s.apply(this,arguments);return f()(this,a)}}var J=function(e){p()(s,e);var t=B(s);function s(e){var a;return o()(this,s),(a=t.call(this,e)).state={password:"",verifyPassword:"",code:"",workspaceURL:"",loading:!1,disabled:!1,visible:!1,validationErrors:null,serverError:null},a.changeField=a.changeField.bind(d()(a)),a.reset=a.reset.bind(d()(a)),a}return l()(s,[{key:"componentDidMount",value:function(){var e=this,t=Object(D.a)(window.location.href);this.props.workspaceURLStatus!==F.REDUX_STATE.FULFILLED&&this.props.validateWorkspaceURL(t).then((function(t){if(t.type!==x.i){var a=t.payload.defaultLanguage,s=Object(S.c)();!Object(C.f)(s)&&Object(C.f)(a)&&Object(S.a)()!==a&&e.props.changeLanguage(a)}else{var r="".concat("https","://").concat("buildar.in","/");window.location.replace(r)}}));var a=U.a.parse(this.props.history.location.hash);null!==a.code&&this.props.validateResetPasswordCode({code:a.code,workspaceURL:t}).then((function(t){t.type===x.h&&e.setState({serverError:t.payload,disabled:!0})}))}},{key:"changeField",value:function(e){this.setState(r()({},e.target.name,e.target.value))}},{key:"reset",value:function(e){var t=this;e.preventDefault(),this.setState({loading:!0,validationErrors:null,serverError:null});var a={password:this.state.password,verifyPassword:this.state.verifyPassword,code:this.state.code,workspaceURL:this.state.workspaceURL},s=Object(O.a)(a,Object(N.d)());null!=s?this.setState({loading:!1,validationErrors:s}):this.props.resetUserPassword(a).then((function(e){e.type===x.g?t.setState({loading:!1,serverError:e.payload}):t.props.history.replace("/signin?reset=success")}))}},{key:"render",value:function(){var e=this.state,t=e.password,s=e.verifyPassword,r=e.loading,n=e.disabled,o=e.validationErrors,c=e.serverError,l=this.props,i=l.workspaceURLStatus,d=l.resetPasswordStatus,u=l.clientStyle,p=null==i||i==F.REDUX_STATE.PENDING,b=d==F.REDUX_STATE.FULFILLED&&!c&&!o,f=Object(T.a)(i,u);return h.a.createElement(v.Fragment,null,h.a.createElement(k.Helmet,{title:Object(S.f)("headers.reset.title"),meta:[{name:"description",content:Object(S.f)("headers.reset.description")}]}),h.a.createElement("div",{className:"form-container col-xs-12 col-md-6 col-lg-5 d-flex flex-column hidden-md-down ".concat(f.links)},h.a.createElement("div",{id:"reset"},h.a.createElement("div",{className:"p-3 p-sm-5 alignment vertical justify-content-center"},h.a.createElement("form",{className:"w-100"},h.a.createElement("div",{className:"w-100 text-center mt-4 mb-4"},h.a.createElement("span",{className:"logo"},!p&&h.a.createElement("img",{src:u&&u.get("logoImage")||a(720)}))),b&&h.a.createElement(X.a,{path:{reset:"success"},message:Object(S.f)("success.resetPassword")}),h.a.createElement(_.a,{error:c}),h.a.createElement("div",{className:"w-100 mt-3 mb-3"},h.a.createElement("span",{className:"h3"}," ",Object(S.f)("label.resetPassword")," ")),h.a.createElement("div",{className:"mt-4 mb-4"},h.a.createElement("span",null,Object(S.f)("components.authentication.resetPassword.description"))),h.a.createElement(W.a,{label:Object(S.f)("label.password"),name:"password",id:"password-input",value:t,type:Object(S.f)("label.password"),ariaLabel:Object(S.f)("label.password"),onChange:this.changeField,disabled:r||n,error:o}),h.a.createElement(W.a,{label:Object(S.f)("label.verifyPassword"),name:"verifyPassword",id:"verify-password-input",value:s,type:"password",ariaLabel:Object(S.f)("label.verifyPassword"),onChange:this.changeField,disabled:r||n,error:o}),h.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg btn-block mt-4 p-3 ".concat(f.button),onClick:this.reset,disabled:r||n},Object(S.f)("label.resetPassword")),h.a.createElement("div",{className:"mt-4"},Object(S.f)("components.authentication.noReset")," ",h.a.createElement(R.b,{to:{pathname:"/signin"}},Object(S.f)("action.signIn"))),h.a.createElement(I.a,null))))),h.a.createElement("div",{className:"background-container col-md-6 col-lg-7 ".concat(f.background)}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.workspaceURLStatus===t.workspaceURLStatus&&e.validateResetPasswordCodeStatus===t.validateResetPasswordCodeStatus)return null;var a={};if(e.workspaceURLStatus===F.REDUX_STATE.FULFILLED){var s=Object(D.a)(window.location.href);a.workspaceURL=s}if(e.validateResetPasswordCodeStatus===F.REDUX_STATE.FULFILLED){var r=U.a.parse(e.history.location.hash);a.code=r.code}return a}}]),s}(v.Component);J.propTypes={history:E.a.object,validateWorkspaceURL:E.a.func,validateResetPasswordCode:E.a.func,resetUserPassword:E.a.func,workspaceURLStatus:E.a.string,resetPasswordStatus:E.a.string,clientStyle:E.a.object,changeLanguage:E.a.func},t.default=Object(j.g)(Object(y.b)((function(e){return{workspaceURLStatus:e.getIn([x.a,"workspaceURL","status"]),validateResetPasswordCodeStatus:e.getIn([x.a,"resetPasswordCode","status"]),resetPasswordStatus:e.getIn([x.a,"resetPassword","status"]),clientStyle:e.getIn([x.a,"workspaceURL","payload"])}}),(function(e){return{validateWorkspaceURL:Object(L.b)(x.t,e),validateResetPasswordCode:Object(L.b)(x.s,e),resetUserPassword:Object(L.b)(x.r,e),changeLanguage:Object(L.b)(A.c,e)}}))(J))}}]);