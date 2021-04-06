(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{590:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return E})),n.d(t,"a",(function(){return p})),n.d(t,"h",(function(){return h})),n.d(t,"e",(function(){return _})),n.d(t,"b",(function(){return g})),n.d(t,"j",(function(){return O})),n.d(t,"m",(function(){return N})),n.d(t,"o",(function(){return R})),n.d(t,"i",(function(){return P})),n.d(t,"q",(function(){return S})),n.d(t,"l",(function(){return A})),n.d(t,"p",(function(){return w})),n.d(t,"n",(function(){return C})),n.d(t,"k",(function(){return F}));var a=n(31),r=n(2),o=n(27);var i="profile",c=i+"/LOAD_PROFILE_PENDING",s=i+"/LOAD_PROFILE_FULFILLED",l=i+"/LOAD_PROFILE_REJECTED",u=i+"/UPDATE_PROFILE_PENDING",d=i+"/UPDATE_PROFILE_FULFILLED",E=i+"/UPDATE_PROFILE_REJECTED",m=i+"/CHANGE_PASSWORD_PENDING",f=i+"/CHANGE_PASSWORD_FULFILLED",p=i+"/CHANGE_PASSWORD_REJECTED",y=i+"/VERIFY_EMAIL_CHANGE_PENDING",v=i+"/VERIFY_EMAIL_CHANGE_FULFILLED",h=i+"/VERIFY_EMAIL_CHANGE_REJECTED",b=i+"/SAVE_PROFILE_PHOTO_PENDING",D=i+"/SAVE_PROFILE_PHOTO_FULFILLED",_=i+"/SAVE_PROFILE_PHOTO_REJECTED",T=i+"/DELETE_PROFILE_PHOTO_PENDING",L=i+"/DELETE_PROFILE_PHOTO_FULFILLED",g=i+"/DELETE_PROFILE_PHOTO_REJECTED",I=Object(a.fromJS)({});function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return e.setIn(["loadProfile","status"],r.REDUX_STATE.PENDING);case s:return e.set("loadProfile",Object(a.fromJS)({status:r.REDUX_STATE.FULFILLED,payload:t.payload}));case l:return e.set("loadProfile",Object(a.fromJS)({status:r.REDUX_STATE.REJECTED,payload:{},error:t.payload}));case u:return e.setIn(["updateProfile","status"],r.REDUX_STATE.PENDING);case d:return e.set("updateProfile",Object(a.fromJS)({status:r.REDUX_STATE.FULFILLED,payload:t.payload}));case E:return e.set("updateProfile",Object(a.fromJS)({status:r.REDUX_STATE.REJECTED,payload:{},error:t.payload}));case m:return e.setIn(["changePassword","status"],r.REDUX_STATE.PENDING);case f:return e.set("changePassword",Object(a.fromJS)({status:r.REDUX_STATE.FULFILLED,payload:t.payload}));case p:return e.set("changePassword",Object(a.fromJS)({status:r.REDUX_STATE.REJECTED,payload:{},error:t.payload}));case b:return e.setIn(["saveProfilePhoto","status"],r.REDUX_STATE.PENDING);case D:return e.set("saveProfilePhoto",Object(a.fromJS)({status:r.REDUX_STATE.FULFILLED,payload:t.payload}));case _:return e.set("saveProfilePhoto",Object(a.fromJS)({status:r.REDUX_STATE.REJECTED,payload:{},error:t.payload}));case T:return e.setIn(["deleteProfilePhoto","status"],r.REDUX_STATE.PENDING);case L:return e.set("deleteProfilePhoto",Object(a.fromJS)({status:r.REDUX_STATE.FULFILLED,payload:t.payload}));case g:return e.set("deleteProfilePhoto",Object(a.fromJS)({status:r.REDUX_STATE.REJECTED,payload:{},error:t.payload}));case y:return e.setIn(["verifyEmailChange","status"],r.REDUX_STATE.PENDING);case v:return e.setIn(["verifyEmailChange","status"],r.REDUX_STATE.FULFILLED);case h:return e.setIn(["verifyEmailChange","status"],r.REDUX_STATE.REJECTED);default:return e}}function N(){return function(e){return e({type:c}),o.a.perform("/api/v1.0/profile",{method:"GET"}).then((function(t){return e({type:s,payload:t})}),(function(t){return e({type:l,payload:t})}))}}function R(e){return function(t){return t({type:u}),function(e){return o.a.perform("/api/v1.0/profile",{method:"PATCH",body:JSON.stringify(e)})}(e).then((function(e){return t({type:d,payload:e})}),(function(e){return t({type:E,payload:e})}))}}function P(e){return function(t){return t({type:m}),function(e){return o.a.perform("/api/v1.0/profile/change-password",{method:"POST",body:JSON.stringify({currentPassword:e.currentPassword,newPassword:e.newPassword,confirmPassword:e.confirmPassword})})}(e).then((function(e){return t({type:f,payload:e})}),(function(e){return t({type:p,payload:e})}))}}function S(e){return function(t){return t({type:y}),(n=e,o.a.perform("/api/v1.0/profile/verify-email-change",{method:"POST",body:JSON.stringify({code:n.code,userId:n.userId,workspaceURL:n.workspaceURL})})).then((function(e){return t({type:v,payload:e})}),(function(e){return t({type:h,payload:e})}));var n}}function A(e){return function(t){return t({type:b}),function(e){return o.a.perform("/api/v1.0/profile/generate-signed-profile-photo-url",{method:"GET",headers:{contentType:e.contentType}})}(e).then((function(e){return e}),(function(e){return t({type:_,payload:e})}))}}function w(e){return function(t){return t({type:b}),function(e){return o.a.simple(e.signedURL,{method:"PUT",headers:{"Content-Type":e.contentType},body:e.data})}(e).then((function(e){return e}),(function(e){return t({type:_,payload:e})}))}}function C(e){return function(t){return t({type:b}),function(e){return o.a.perform("/api/v1.0/profile/save-profile-photo",{method:"POST",body:JSON.stringify({key:e.key})})}(e).then((function(e){return t({type:D,payload:e})}),(function(e){return t({type:_,payload:e})}))}}function F(){return function(e){return e({type:T}),o.a.perform("/api/v1.0/profile/delete-profile-photo",{method:"PATCH"}).then((function(t){return e({type:L,payload:t})}),(function(t){return e({type:g,payload:t})}))}}},599:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(6),i=n.n(o),c=n(20),s=n.n(c),l=n(9),u=n.n(l),d=n(8),E=n.n(d),m=n(4),f=n.n(m),p=n(32),y=n.n(p),v=n(614),h=n(615),b=n(616),D=n(0),_=n.n(D);function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=f()(e);if(t){var r=f()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return E()(this,n)}}var L=function(e){u()(n,e);var t=T(n);function n(e){var a;return r()(this,n),a=t.call(this,e),y()(s()(a),"invite_open",(function(){document.getElementById("center_container").style.display="block"})),y()(s()(a),"invite_close",(function(){document.getElementById("center_container").style.display="none"})),y()(s()(a),"w3_close",(function(){document.getElementById("main").style.marginLeft="0%",document.getElementById("mySidebar").style.display="none",document.getElementById("openNav").style.display="inline-block",document.getElementById("openNav").style.visibility="visible"})),a.state={},a.w3_close=a.w3_close.bind(s()(a)),a}return i()(n,[{key:"render",value:function(){return _.a.createElement("div",null,_.a.createElement("div",{className:"w3-sidebar w3-bar-block w3-card w3-animate-left",style:{display:"none"},id:"mySidebar"},_.a.createElement("button",{className:"w3-bar-item w3-button w3-large",onClick:this.w3_close},_.a.createElement(v.a,null)),_.a.createElement("div",{className:"navigation_logoSection"},_.a.createElement("div",{className:"navigation_symbol"},_.a.createElement("span",{id:"small_symbol"}))),_.a.createElement("a",{href:"#",className:"w3-bar-item w3-button"},_.a.createElement("span",{id:"text"},_.a.createElement("strong",null,"Videos"))),_.a.createElement("a",{href:"/createvideo",className:"w3-bar-item w3-button"},_.a.createElement("span",{id:"icon"},_.a.createElement(v.d,null)),_.a.createElement("span",{id:"text"},"Create Video")),_.a.createElement("a",{href:"/myvideos",className:"w3-bar-item w3-button"},_.a.createElement("span",{id:"icon"},_.a.createElement(v.c,null)),_.a.createElement("span",{id:"text"},"My Videos")),_.a.createElement("div",{className:"bottom_menu"},_.a.createElement("a",{href:"#",className:"w3-bar-item w3-button"},_.a.createElement("span",{id:"text"},_.a.createElement("strong",null,"Settings"))),_.a.createElement("a",{href:"/profile",className:"w3-bar-item w3-button"},_.a.createElement("span",{id:"icon"},_.a.createElement(h.a,null)),_.a.createElement("span",{id:"text"},"Profile")),_.a.createElement("a",{href:"/billing",className:"w3-bar-item w3-button"},_.a.createElement("span",{id:"icon"},_.a.createElement(b.a,null)),_.a.createElement("span",{id:"text"},"Billing")))))}}]),n}(D.Component);t.a=L},620:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return b}));var a=n(31),r=n(2);n(27);n(590);var o="video",i=o+"/LOAD_VIDEO_PENDING",c=o+"/LOAD_VIDEO_FULFILLED",s=o+"/LOAD_VIDEO_REJECTED",l=o+"/CREATE_VIDEO_PENDING",u=o+"/CREATE_VIDEO_FULFILLED",d=o+"/CREATE_VIDEO_REJECTED",E=o+"/DELETE_VIDEO_PENDING",m=o+"/DELETE_VIDEO_FULFILLED",f=o+"/DELETE_VIDEO_REJECTED",p=o+"/LOAD_ACTOR_PENDING",y=o+"/LOAD_ACTOR_FULFILLED",v=o+"/LOAD_ACTOR_REJECTED",h=Object(a.fromJS)({});function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return e.setIn(["loadVideo","status"],r.REDUX_STATE.PENDING);case c:return e.set("loadVideo",Object(a.fromJS)({status:r.REDUX_STATE.FULFILLED,payload:t.payload}));case s:return e.set("loadVideo",Object(a.fromJS)({status:r.REDUX_STATE.REJECTED,payload:{},error:t.payload}));case l:return e.setIn(["createVideo","status"],r.REDUX_STATE.PENDING);case u:return e.set("createVideo",Object(a.fromJS)({status:r.REDUX_STATE.FULFILLED,payload:t.payload}));case d:return e.set("createVideo",Object(a.fromJS)({status:d,payload:{},error:t.payload}));case E:return e.setIn(["deleteVideo","status"],r.REDUX_STATE.PENDING);case m:return e.set("deleteVideo",Object(a.fromJS)({status:r.REDUX_STATE.FULFILLED,payload:t.payload}));case f:return e.set("deleteVideo",Object(a.fromJS)({status:r.REDUX_STATE.REJECTED,payload:{},error:t.payload}));case p:return e.setIn(["loadActor","status"],r.REDUX_STATE.PENDING);case y:return e.set("loadActor",Object(a.fromJS)({status:r.REDUX_STATE.FULFILLED,payload:t.payload}));case v:return e("loadActor",Object(a.fromJS)({status:r.REDUX_STATE.REJECTED,payload:{},error:t.payload}));default:return e}}},650:function(e,t,n){"use strict";var a=n(18),r=n(39),o=n(580),i=n.n(o),c=n(0),s=n.n(c),l=n(581),u=n(629),d=function(e){return s.a.forwardRef((function(t,n){return s.a.createElement("div",Object(a.a)({},t,{ref:n,className:i()(t.className,e)}))}))},E=n(632),m=s.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,c=e.variant,u=e.as,d=void 0===u?"img":u,E=Object(r.a)(e,["bsPrefix","className","variant","as"]),m=Object(l.a)(n,"card-img");return s.a.createElement(d,Object(a.a)({ref:t,className:i()(c?m+"-"+c:m,o)},E))}));m.displayName="CardImg",m.defaultProps={variant:null};var f=m,p=d("h5"),y=d("h6"),v=Object(u.a)("card-body"),h=Object(u.a)("card-title",{Component:p}),b=Object(u.a)("card-subtitle",{Component:y}),D=Object(u.a)("card-link",{Component:"a"}),_=Object(u.a)("card-text",{Component:"p"}),T=Object(u.a)("card-header"),L=Object(u.a)("card-footer"),g=Object(u.a)("card-img-overlay"),I=s.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,u=e.bg,d=e.text,m=e.border,f=e.body,p=e.children,y=e.as,h=void 0===y?"div":y,b=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),D=Object(l.a)(n,"card"),_=Object(c.useMemo)((function(){return{cardHeaderBsPrefix:D+"-header"}}),[D]);return s.a.createElement(E.a.Provider,{value:_},s.a.createElement(h,Object(a.a)({ref:t},b,{className:i()(o,D,u&&"bg-"+u,d&&"text-"+d,m&&"border-"+m)}),f?s.a.createElement(v,null,p):p))}));I.displayName="Card",I.defaultProps={body:!1},I.Img=f,I.Title=h,I.Subtitle=b,I.Body=v,I.Link=D,I.Text=_,I.Header=T,I.Footer=L,I.ImgOverlay=g;t.a=I},963:function(e,t,n){"use strict";n.r(t);var a=n(170),r=n.n(a),o=n(5),i=n.n(o),c=n(6),s=n.n(c),l=n(20),u=n.n(l),d=n(9),E=n.n(d),m=n(8),f=n.n(m),p=n(4),y=n.n(p),v=n(32),h=n.n(v),b=n(256),D=n.n(b),_=n(0),T=n.n(_),L=n(599),g=n(754),I=n(614),O=n(24);function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=y()(e);if(t){var r=y()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return f()(this,n)}}var R=function(e){E()(n,e);var t=N(n);function n(e){var a;return i()(this,n),(a=t.call(this,e)).state={id:a.props.id,title:a.props.title,description:a.props.description,url:a.props.url,timeCreated:a.props.timeCreated,isLinkCopied:!1,thumbnail:a.props.thumbnail},a.resetMessage=a.resetMessage.bind(u()(a)),a.humanized_time_span=a.humanized_time_span.bind(u()(a)),a}return s()(n,[{key:"humanized_time_span",value:function(e,t,n,a){n=n||{past:[{ceiling:60,text:"$seconds seconds ago"},{ceiling:3600,text:"$minutes minutes ago"},{ceiling:86400,text:"$hours hours ago"},{ceiling:2629744,text:"$days days ago"},{ceiling:31556926,text:"$months months ago"},{ceiling:null,text:"$years years ago"}],future:[{ceiling:60,text:"in $seconds seconds"},{ceiling:3600,text:"in $minutes minutes"},{ceiling:86400,text:"in $hours hours"},{ceiling:2629744,text:"in $days days"},{ceiling:31556926,text:"in $months months"},{ceiling:null,text:"in $years years"}]},a=a||[[31556926,"years"],[2629744,"months"],[86400,"days"],[3600,"hours"],[60,"minutes"],[1,"seconds"]],e=new Date(e);var r,o,i=((t=t?new Date(t):new Date)-e)/1e3,c="past";return i<0&&(c="future",i=0-i),r=function(){for(var e=0;e<n[c].length;e++)if(null==n[c][e].ceiling||i<=n[c][e].ceiling)return n[c][e];return null}(),o=function(){for(var e=i,t={},n=0;n<a.length;n++){var r=Math.floor(e/a[n][0]);e-=a[n][0]*r,t[a[n][1]]=r}return t}(),function(e,t){for(var n in t)if(1==t[n]){var a=new RegExp("\\b"+n+"\\b");e=e.replace(a,(function(){return arguments[0].replace(/s\b/g,"")}))}return e}(r.text.replace(/\$(\w+)/g,(function(){return o[arguments[1]]})),o)}},{key:"copyLink",value:function(e){navigator.clipboard.writeText(e),this.setState({isLinkCopied:!0})}},{key:"resetMessage",value:function(){this.setState({isLinkCopied:!1})}},{key:"render",value:function(){var e=this,t=this.props,n=(t.id,t.index),a=t.title,r=(t.description,t.url);t.timeCreated,t.thumbnail;String.prototype.replaceAll=function(e,t){return this.replace(new RegExp(e,"g"),t)};var o=this.state.timeCreated.replaceAll("-","/");console.log(o),o=(o=o.replace("T"," ")).replace("Z",""),o=this.humanized_time_span(o),console.log(o);var i={pathname:"/video",param1:this.props.id},c=this.state.isLinkCopied;return T.a.createElement("div",{className:"myvideo-card-item"},T.a.createElement("div",{className:"myvideo-card"},T.a.createElement("div",{className:"myvideo-card-menu"},T.a.createElement(g.a,{id:"myvideo-card-menu-dropdown"},T.a.createElement(g.a.Toggle,{variant:"secondary",id:"dropdown-basic",size:"sm"},T.a.createElement("i",{className:"fa fa-bars"})),T.a.createElement(g.a.Menu,null,T.a.createElement(g.a.Item,null,T.a.createElement(O.b,{to:i},"Edit")),T.a.createElement(g.a.Item,{href:"",onClick:function(){return e.props.deleteHandler(n)}},"Delete"),T.a.createElement(g.a.Item,{href:"",onClick:function(){return e.props.duplicateHandler(n)}},"Duplicate")))),T.a.createElement(O.b,{to:i},T.a.createElement("img",{className:"myvideo-thumbnail",src:this.state.thumbnail})),T.a.createElement("p",{className:"myvideo-title"}," ",a)),T.a.createElement("div",{onMouseOut:this.resetMessage,className:"myvideo-time"},T.a.createElement("p",null,o||"NA",T.a.createElement("div",{id:"myvideo-footer-icons"},T.a.createElement("label",{className:"btn btn-sm",onClick:function(){return e.copyLink(r)}},T.a.createElement(I.b,{size:20})),T.a.createElement("span",{className:"tooltiptext"},c?"Link Copied":"Copy Link")))))}}]),n}(_.Component),P=n(650),S=n(1),A=n.n(S),w=(n(102),n(10)),C=n(168),F=n(620),U=n(25);function J(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=y()(e);if(t){var r=y()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return f()(this,n)}}var j=function(e){E()(n,e);var t=J(n);function n(e){var a;return i()(this,n),a=t.call(this,e),h()(u()(a),"w3_open",(function(){document.getElementById("main").style.marginLeft="20%",document.getElementById("mySidebar").style.width="15%",document.getElementById("mySidebar").style.display="block",document.getElementById("openNav").style.visibility="hidden"})),a.state={videoList:[],loading:!0},a.w3_open=a.w3_open.bind(u()(a)),a.deleteVideo=a.deleteVideo.bind(u()(a)),a.duplicateVideo=a.duplicateVideo.bind(u()(a)),a}return s()(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.user,a=(t.history,{params:{ID:n.get("userId")}});D.a.get("api/v1.0/videos",a).then((function(t){var n=t.data;e.setState({videoList:n,loading:!1})}))}},{key:"deleteVideo",value:function(e,t){var n=this;confirm("Are you sure you want to permanently delete this video?")&&(console.log("deleted this video"),D.a.patch("/api/v1.0/video",{videoId:t}).then((function(t){t.data;if(dapropsta){var a=n.state.videoList;a.splice(e,1),n.setState({videoList:a})}})))}},{key:"duplicateVideo",value:function(e,t,n,a,o,i,c){var s=this;D.a.post("/api/v1.0/video",{title:n,description:a,thumbnail:c,userId_FK:1}).then((function(t){if(t.data){var n=s.state.videoList[e];s.setState((function(e){return{videoList:[].concat(r()(e.videoList),[n])}}))}}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.user;t.history;if(this.state.loading)return T.a.createElement("div",null,T.a.createElement("h1",null,"Loading..."));console.log("This is auth token",n.get("authToken"));var a=this.state.videoList,r=!1;return 0!==a.length&&(r=!0),T.a.createElement("div",null,T.a.createElement(L.a,null),T.a.createElement("div",{id:"main"},T.a.createElement("button",{id:"openNav",className:"w3-button w3-xlarge",onClick:this.w3_open},"☰"),T.a.createElement("div",{className:"myvideo"},T.a.createElement("div",{className:"container myvideo-container"},T.a.createElement("div",{className:"myvideo-buttons"},T.a.createElement("h1",{className:"myvideo-header"},"Personal Videos"),T.a.createElement("a",{href:"/createvideo",type:"button",className:"btn "},"Create New Video")),r?T.a.createElement("div",{className:"row"},a.map((function(t,n){return T.a.createElement("div",{key:n,className:"col-md-4 col-lg-3 col-sm-12 myvideo-card"},T.a.createElement(R,{key:n,index:n,id:t.id,title:t.title,description:t.description,url:t.videoURL,thumbnail:t.thumbnail,timeCreated:t.createdAt,deleteHandler:function(){e.deleteVideo(n,t.id)},duplicateHandler:function(){e.duplicateVideo(n,t.id,t.title,t.description,t.url,t.timeCreated,t.thumbnail)}}))}))):T.a.createElement("div",{className:"no-videos"},T.a.createElement(P.a,{className:"text-center"},T.a.createElement(P.a.Body,null,T.a.createElement(P.a.Title,null,"Create A Video"),T.a.createElement(P.a.Text,null,"Every time you create a new video, you’ll find it here. Only you can manage videos in this library."),T.a.createElement("div",{className:"novideo-button"},T.a.createElement("a",{href:"/createvideo",type:"button",className:"btn "},"Create New Video")))))))))}}]),n}(_.Component);Object(C.b)(C.a,F.a,F.b),j.propTypes={history:A.a.object,user:A.a.object};t.default=Object(w.g)(Object(U.a)(j))}}]);