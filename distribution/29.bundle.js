(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{928:function(e,r,t){"use strict";t.r(r);var o=t(4),n=t.n(o),c=t(5),s=t.n(c),i=t(17),a=t.n(i),u=t(16),p=t.n(u),f=t(7),l=t.n(f),y=t(0),h=t(3),d=t.n(h),v=t(564),b=t.n(v),w=t(81),j=t(52),m=t(6),O=t(116),U=t(18),k=t(583),R=t(97),E=t(34);var g=function(e){a()(t,e);var r=function(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,o=l()(e);if(r){var n=l()(this).constructor;t=Reflect.construct(o,arguments,n)}else t=o.apply(this,arguments);return p()(this,t)}}(t);function t(){return n()(this,t),r.apply(this,arguments)}return s()(t,[{key:"componentDidMount",value:function(){this.verifyEmail()}},{key:"verifyEmail",value:function(){var e=this,r=Object(k.a)(window.location.href);this.props.validateWorkspaceURL(r).then((function(t){if(t.type!==E.i){var o={code:b.a.parse(e.props.history.location.hash).code,workspaceURL:r};e.props.user&&e.props.user.get("userId")&&(o.userId=e.props.user.get("userId")),e.props.verifyUserEmail(o).then((function(r){if(O.notify.hide(),r.type===E.j)return O.notify.show("".concat(Object(U.e)("error.verifyEmail")," (").concat(r.payload.message,")"),"error"),void e.props.history.replace("/");null!==o.userId&&e.props.loadUser().then((function(r){r.type!==E.c?(O.notify.show(Object(U.e)("success.verifyEmail"),"success"),e.props.history.replace("/")):window.location.reload})),O.notify.show(Object(U.e)("success.verifyEmail"),"success"),e.props.history.replace("/")}))}else e.props.history.replace("/")}))}},{key:"render",value:function(){return null}}]),t}(y.Component);g.propTypes={history:d.a.object,user:d.a.object,loadUser:d.a.func,validateWorkspaceURL:d.a.func,verifyUserEmail:d.a.func},r.default=Object(m.g)(Object(R.a)(Object(w.b)(null,(function(e){return{loadUser:Object(j.b)(E.m,e),verifyUserEmail:Object(j.b)(E.t,e),validateWorkspaceURL:Object(j.b)(E.s,e)}}))(g)))}}]);