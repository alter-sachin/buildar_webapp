(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{561:function(e,t,a){"use strict";a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return c})),a.d(t,"f",(function(){return u})),a.d(t,"g",(function(){return E})),a.d(t,"a",(function(){return m})),a.d(t,"h",(function(){return h})),a.d(t,"e",(function(){return D})),a.d(t,"b",(function(){return _})),a.d(t,"j",(function(){return S})),a.d(t,"m",(function(){return g})),a.d(t,"o",(function(){return A})),a.d(t,"i",(function(){return L})),a.d(t,"q",(function(){return O})),a.d(t,"l",(function(){return P})),a.d(t,"p",(function(){return C})),a.d(t,"n",(function(){return w})),a.d(t,"k",(function(){return U}));var n=a(26),r=a(2),o=a(25),i="profile",l=i+"/LOAD_PROFILE_PENDING",s=i+"/LOAD_PROFILE_FULFILLED",c=i+"/LOAD_PROFILE_REJECTED",u=i+"/UPDATE_PROFILE_PENDING",d=i+"/UPDATE_PROFILE_FULFILLED",E=i+"/UPDATE_PROFILE_REJECTED",f=i+"/CHANGE_PASSWORD_PENDING",p=i+"/CHANGE_PASSWORD_FULFILLED",m=i+"/CHANGE_PASSWORD_REJECTED",y=i+"/VERIFY_EMAIL_CHANGE_PENDING",v=i+"/VERIFY_EMAIL_CHANGE_FULFILLED",h=i+"/VERIFY_EMAIL_CHANGE_REJECTED",T=i+"/SAVE_PROFILE_PHOTO_PENDING",N=i+"/SAVE_PROFILE_PHOTO_FULFILLED",D=i+"/SAVE_PROFILE_PHOTO_REJECTED",R=i+"/DELETE_PROFILE_PHOTO_PENDING",I=i+"/DELETE_PROFILE_PHOTO_FULFILLED",_=i+"/DELETE_PROFILE_PHOTO_REJECTED",b=Object(n.fromJS)({});function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return e.setIn(["loadProfile","status"],r.REDUX_STATE.PENDING);case s:return e.set("loadProfile",Object(n.fromJS)({status:r.REDUX_STATE.FULFILLED,payload:t.payload}));case c:return e.set("loadProfile",Object(n.fromJS)({status:r.REDUX_STATE.REJECTED,payload:{},error:t.payload}));case u:return e.setIn(["updateProfile","status"],r.REDUX_STATE.PENDING);case d:return e.set("updateProfile",Object(n.fromJS)({status:r.REDUX_STATE.FULFILLED,payload:t.payload}));case E:return e.set("updateProfile",Object(n.fromJS)({status:r.REDUX_STATE.REJECTED,payload:{},error:t.payload}));case f:return e.setIn(["changePassword","status"],r.REDUX_STATE.PENDING);case p:return e.set("changePassword",Object(n.fromJS)({status:r.REDUX_STATE.FULFILLED,payload:t.payload}));case m:return e.set("changePassword",Object(n.fromJS)({status:r.REDUX_STATE.REJECTED,payload:{},error:t.payload}));case T:return e.setIn(["saveProfilePhoto","status"],r.REDUX_STATE.PENDING);case N:return e.set("saveProfilePhoto",Object(n.fromJS)({status:r.REDUX_STATE.FULFILLED,payload:t.payload}));case D:return e.set("saveProfilePhoto",Object(n.fromJS)({status:r.REDUX_STATE.REJECTED,payload:{},error:t.payload}));case R:return e.setIn(["deleteProfilePhoto","status"],r.REDUX_STATE.PENDING);case I:return e.set("deleteProfilePhoto",Object(n.fromJS)({status:r.REDUX_STATE.FULFILLED,payload:t.payload}));case _:return e.set("deleteProfilePhoto",Object(n.fromJS)({status:r.REDUX_STATE.REJECTED,payload:{},error:t.payload}));case y:return e.setIn(["verifyEmailChange","status"],r.REDUX_STATE.PENDING);case v:return e.setIn(["verifyEmailChange","status"],r.REDUX_STATE.FULFILLED);case h:return e.setIn(["verifyEmailChange","status"],r.REDUX_STATE.REJECTED);default:return e}}function g(){return function(e){return e({type:l}),o.a.perform("/api/v1.0/profile",{method:"GET"}).then((function(t){return e({type:s,payload:t})}),(function(t){return e({type:c,payload:t})}))}}function A(e){return function(t){return t({type:u}),function(e){return o.a.perform("/api/v1.0/profile",{method:"PATCH",body:JSON.stringify(e)})}(e).then((function(e){return t({type:d,payload:e})}),(function(e){return t({type:E,payload:e})}))}}function L(e){return function(t){return t({type:f}),function(e){return o.a.perform("/api/v1.0/profile/change-password",{method:"POST",body:JSON.stringify({currentPassword:e.currentPassword,newPassword:e.newPassword,confirmPassword:e.confirmPassword})})}(e).then((function(e){return t({type:p,payload:e})}),(function(e){return t({type:m,payload:e})}))}}function O(e){return function(t){return t({type:y}),(a=e,o.a.perform("/api/v1.0/profile/verify-email-change",{method:"POST",body:JSON.stringify({code:a.code,userId:a.userId,workspaceURL:a.workspaceURL})})).then((function(e){return t({type:v,payload:e})}),(function(e){return t({type:h,payload:e})}));var a}}function P(e){return function(t){return t({type:T}),function(e){return o.a.perform("/api/v1.0/profile/generate-signed-profile-photo-url",{method:"GET",headers:{contentType:e.contentType}})}(e).then((function(e){return e}),(function(e){return t({type:D,payload:e})}))}}function C(e){return function(t){return t({type:T}),function(e){return o.a.simple(e.signedURL,{method:"PUT",headers:{"Content-Type":e.contentType},body:e.data})}(e).then((function(e){return e}),(function(e){return t({type:D,payload:e})}))}}function w(e){return function(t){return t({type:T}),function(e){return o.a.perform("/api/v1.0/profile/save-profile-photo",{method:"POST",body:JSON.stringify({key:e.key})})}(e).then((function(e){return t({type:N,payload:e})}),(function(e){return t({type:D,payload:e})}))}}function U(){return function(e){return e({type:R}),o.a.perform("/api/v1.0/profile/delete-profile-photo",{method:"PATCH"}).then((function(t){return e({type:I,payload:t})}),(function(t){return e({type:_,payload:t})}))}}},570:function(e,t,a){"use strict";var n=a(4),r=a.n(n),o=a(5),i=a.n(o),l=a(27),s=a.n(l),c=a(17),u=a.n(c),d=a(16),E=a.n(d),f=a(7),p=a.n(f),m=a(28),y=a.n(m),v=a(586),h=a(587),T=a(588),N=a(0),D=a.n(N);var R=function(e){u()(a,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=p()(e);if(t){var r=p()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return E()(this,a)}}(a);function a(e){var n;return r()(this,a),n=t.call(this,e),y()(s()(n),"invite_open",(function(){document.getElementById("center_container").style.display="block"})),y()(s()(n),"invite_close",(function(){document.getElementById("center_container").style.display="none"})),y()(s()(n),"w3_close",(function(){document.getElementById("main").style.marginLeft="0%",document.getElementById("mySidebar").style.display="none",document.getElementById("openNav").style.display="inline-block",document.getElementById("openNav").style.visibility="visible"})),n.state={},n.w3_close=n.w3_close.bind(s()(n)),n}return i()(a,[{key:"render",value:function(){return D.a.createElement("div",null,D.a.createElement("div",{className:"w3-sidebar w3-bar-block w3-card w3-animate-left",style:{display:"none"},id:"mySidebar"},D.a.createElement("button",{className:"w3-bar-item w3-button w3-large",onClick:this.w3_close},D.a.createElement(v.a,null)),D.a.createElement("div",{className:"navigation_logoSection"},D.a.createElement("div",{className:"navigation_symbol"},D.a.createElement("span",{id:"small_symbol"}))),D.a.createElement("a",{href:"#",className:"w3-bar-item w3-button"},D.a.createElement("span",{id:"text"},D.a.createElement("strong",null,"Videos"))),D.a.createElement("a",{href:"/createvideo",className:"w3-bar-item w3-button"},D.a.createElement("span",{id:"icon"},D.a.createElement(v.d,null)),D.a.createElement("span",{id:"text"},"Create Video")),D.a.createElement("a",{href:"/myvideos",className:"w3-bar-item w3-button"},D.a.createElement("span",{id:"icon"},D.a.createElement(v.c,null)),D.a.createElement("span",{id:"text"},"My Videos")),D.a.createElement("div",{className:"bottom_menu"},D.a.createElement("a",{href:"#",className:"w3-bar-item w3-button"},D.a.createElement("span",{id:"text"},D.a.createElement("strong",null,"Settings"))),D.a.createElement("a",{href:"/profile",className:"w3-bar-item w3-button"},D.a.createElement("span",{id:"icon"},D.a.createElement(h.a,null)),D.a.createElement("span",{id:"text"},"Profile")),D.a.createElement("a",{href:"/billing",className:"w3-bar-item w3-button"},D.a.createElement("span",{id:"icon"},D.a.createElement(T.a,null)),D.a.createElement("span",{id:"text"},"Billing")))))}}]),a}(N.Component);t.a=R},592:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return T}));var n=a(26),r=a(2);a(25),a(561);var o="video",i=o+"/LOAD_VIDEO_PENDING",l=o+"/LOAD_VIDEO_FULFILLED",s=o+"/LOAD_VIDEO_REJECTED",c=o+"/CREATE_VIDEO_PENDING",u=o+"/CREATE_VIDEO_FULFILLED",d=o+"/CREATE_VIDEO_REJECTED",E=o+"/DELETE_VIDEO_PENDING",f=o+"/DELETE_VIDEO_FULFILLED",p=o+"/DELETE_VIDEO_REJECTED",m=o+"/LOAD_ACTOR_PENDING",y=o+"/LOAD_ACTOR_FULFILLED",v=o+"/LOAD_ACTOR_REJECTED",h=Object(n.fromJS)({});function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return e.setIn(["loadVideo","status"],r.REDUX_STATE.PENDING);case l:return e.set("loadVideo",Object(n.fromJS)({status:r.REDUX_STATE.FULFILLED,payload:t.payload}));case s:return e.set("loadVideo",Object(n.fromJS)({status:r.REDUX_STATE.REJECTED,payload:{},error:t.payload}));case c:return e.setIn(["createVideo","status"],r.REDUX_STATE.PENDING);case u:return e.set("createVideo",Object(n.fromJS)({status:r.REDUX_STATE.FULFILLED,payload:t.payload}));case d:return e.set("createVideo",Object(n.fromJS)({status:d,payload:{},error:t.payload}));case E:return e.setIn(["deleteVideo","status"],r.REDUX_STATE.PENDING);case f:return e.set("deleteVideo",Object(n.fromJS)({status:r.REDUX_STATE.FULFILLED,payload:t.payload}));case p:return e.set("deleteVideo",Object(n.fromJS)({status:r.REDUX_STATE.REJECTED,payload:{},error:t.payload}));case m:return e.setIn(["loadActor","status"],r.REDUX_STATE.PENDING);case y:return e.set("loadActor",Object(n.fromJS)({status:r.REDUX_STATE.FULFILLED,payload:t.payload}));case v:return e("loadActor",Object(n.fromJS)({status:r.REDUX_STATE.REJECTED,payload:{},error:t.payload}));default:return e}}},787:function(e,t){e.exports=function(e,t){var a=e.define("user",{id:{type:t.INTEGER(11).UNSIGNED,allowNull:!1,primaryKey:!0,autoIncrement:!0,field:"id"},authToken:{type:t.STRING(255),defaultValue:"",field:"authToken"},firstName:{type:t.STRING(255),allowNull:!1,defaultValue:"",field:"firstName"},lastName:{type:t.STRING(255),allowNull:!1,defaultValue:"",field:"lastName"},profilePhoto:{type:t.STRING(255),allowNull:!0,field:"profilePhoto"},clientId:{type:t.INTEGER(11).UNSIGNED,allowNull:!1,field:"clientId"},emailAddress:{type:t.STRING(255),allowNull:!1,defaultValue:"",field:"emailAddress"},emailVerified:{type:t.INTEGER(1),allowNull:!1,defaultValue:"0",field:"emailVerified"},password:{type:t.STRING(255),allowNull:!1,defaultValue:"",field:"password"},lastLoginDate:{type:t.DATE,allowNull:!0,field:"lastLoginDate"},language:{type:t.INTEGER(11).UNSIGNED,allowNull:!1,defaultValue:"1",field:"language"},bio:{type:t.STRING(255),allowNull:!0,field:"bio"},location:{type:t.STRING(255),allowNull:!0,field:"location"},website:{type:t.STRING(255),allowNull:!0,field:"website"},active:{type:t.INTEGER(1),allowNull:!1,defaultValue:"1",field:"active"},createdAt:{type:t.DATE,allowNull:!0,field:"createdAt"},updatedAt:{type:t.DATE,allowNull:!0,field:"updatedAt"}},{tableName:"user"});return a.associate=function(e){a.hasMany(e.video,{foreignKey:"id"})},a.associate=function(e){a.hasMany(e.subscriptions,{foreignKey:"id"})},a.associate=function(e){a.hasMany(e.form,{foreignKey:"id"})},a}},938:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),o=a(5),i=a.n(o),l=a(17),s=a.n(l),c=a(16),u=a.n(c),d=a(7),E=a.n(d),f=a(0),p=a.n(f),m=a(27),y=a.n(m),v=a(28),h=a.n(v),T=a(240),N=a.n(T),D=a(783),R=a(784),I=a.n(R);var _=function(e){s()(a,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=E()(e);if(t){var r=E()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return u()(this,a)}}(a);function a(){return r()(this,a),t.apply(this,arguments)}return i()(a,[{key:"render",value:function(){var e=this.props.audioUrl;return p.a.createElement("div",null,p.a.createElement(I.a,{src:e,controls:!0,controlsList:"nodownload"}))}}]),a}(f.Component),b=a(636),S=a.n(b);var g=function(e){s()(a,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=E()(e);if(t){var r=E()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return u()(this,a)}}(a);function a(){return r()(this,a),t.apply(this,arguments)}return i()(a,[{key:"render",value:function(){var e=this.props.videoUrl;return p.a.createElement("div",null,p.a.createElement(S.a,{url:e,height:"",width:"",controls:!0}))}}]),a}(f.Component),A=a(912),L=a(3),O=a.n(L),P=a(6),C=a(156),w=a(592),U=a(97);a(914);var V=function(e){s()(a,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=E()(e);if(t){var r=E()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return u()(this,a)}}(a);function a(e){var n;return r()(this,a),n=t.call(this,e),h()(y()(n),"state",{actors:n.props.data.actors,actorId:"",gender:"",voices:n.props.data.voices,voiceArray:[],selectedElement:"",active:0,textVal:"",audioUrl:"",videoUrl:"",audioReceived:!1,videoReceived:!1,isAudioClicked:!1,isVideoClicked:!1,audioKey:0,videoKey:0,videoTitle:"",voiceSpeed:1}),h()(y()(n),"w3_open",(function(){document.getElementById("main").style.marginLeft="15%",document.getElementById("mySidebar").style.width="15%",document.getElementById("mySidebar").style.display="block",document.getElementById("openNav").style.visibility="hidden"})),h()(y()(n),"renderVideoTime",(function(e){var t=e.remainingTime;return""!==n.state.videoUrl&&0==n.state.isVideoClicked?p.a.createElement("div",{className:"timer"},"Done"):(""!==n.state.videoUrl&&1==n.state.isVideoClicked&&(n.state.key=n.state.key+1),p.a.createElement("div",{className:"timer"},p.a.createElement("div",{className:"value"},t)))})),h()(y()(n),"renderAudioTime",(function(e){var t=e.remainingTime;return""!==n.state.audioUrl&&0==n.state.isAudioClicked?p.a.createElement("div",{className:"timer"},"Done"):(""!==n.state.audioUrl&&1==n.state.isAudioClicked&&(n.state.key=n.state.key+1),p.a.createElement("div",{className:"timer"},p.a.createElement("div",{className:"value"},t)))})),n.handleChange=n.handleChange.bind(y()(n)),n.handleVoiceSpeedChange=n.handleVoiceSpeedChange.bind(y()(n)),n.handleCheck=n.handleCheck.bind(y()(n)),n.audioRequest=n.audioRequest.bind(y()(n)),n.videoRequest=n.videoRequest.bind(y()(n)),n.startAudioTimer=n.startAudioTimer.bind(y()(n)),n.startVideoTimer=n.startVideoTimer.bind(y()(n)),n.handleSave=n.handleSave.bind(y()(n)),n.selectActor=n.selectActor.bind(y()(n)),n.saveVideo=n.saveVideo.bind(y()(n)),n.w3_open=n.w3_open.bind(y()(n)),n}return i()(a,[{key:"handleChange",value:function(){this.setState({textVal:event.target.value})}},{key:"handleVoiceSpeedChange",value:function(){this.setState({voiceSpeed:event.target.value})}},{key:"handleCheck",value:function(e){this.setState({selectedElement:e})}},{key:"selectActor",value:function(e,t){this.setState({actorId:e,gender:t});var a=[];"male"===t?(this.state.voices.map((function(e){"Male"===e.Gender&&a.push({label:e.Voice,value:e.Voice})})),this.setState({voiceArray:a})):(this.state.voices.map((function(e){"Female"===e.Gender&&a.push({label:e.Voice,value:e.Voice})})),this.setState({voiceArray:a}))}},{key:"startVideoTimer",value:function(){this.setState({isVideoClicked:!0})}},{key:"startAudioTimer",value:function(){this.setState({isAudioClicked:!0})}},{key:"audioRequest",value:function(){var e=this;console.log("before config");var t={headers:{Authorization:this.props.user.get("authToken")}};""!==this.state.textVal&&(document.getElementById("audio-timer-wrapper").style.display="block",this.startAudioTimer());var a={speakerId:this.state.selectedElement.value,textScript:this.state.textVal,speed:this.state.voiceSpeed};N.a.post("https://api.buildar.live:8008/audio",a,t).then((function(t){var a=t.data;e.setState({audioUrl:a.audioUrl,isAudioClicked:!1,audioReceived:!0}),e.setState({audioKey:e.state.audioKey+1},(function(){console.log(e.state.audioKey)}))}))}},{key:"handleSave",value:function(){var e=document.querySelector(".video-title-edit").textContent;this.setState({videoTitle:e})}},{key:"videoRequest",value:function(){var e=this,t=this.props.user;console.log("before config actor js",t.get("authToken"));var a={headers:{Authorization:t.get("authToken")}};this.state.audioReceived&&(document.getElementById("video-timer-wrapper").style.display="block",this.startVideoTimer());var n={actorId:this.state.actorId,audioUrl:this.state.audioUrl};N.a.post("https://api.buildar.live:8008/video",n,a).then((function(t){var a=t.data;e.setState({videoUrl:a.videoUrl,isVideoClicked:!1,videoReceived:!0}),e.setState({videoKey:e.state.videoKey+1},(function(){console.log(e.state.videoKey)}))})),this.state.videoReceived&&(document.getElementById("save_video").disabled=!1)}},{key:"saveVideo",value:function(){var e=this.state.actorId,t=this.state.actors[e].thumbnail;console.log("property",e);var a={title:this.state.videoTitle,description:"Script Used "+this.state.textVal,thumbnail:t,textScript:this.state.textVal,videoUrl:this.state.videoUrl,userId_FK:this.props.user.get("userId")};N.a.post("/api/v1.0/video",a).then((function(e){e.data,console.log("done")}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.user,n=(t.history,this.state),r=n.actors;return n.voices,console.log(a.get("authToken")),p.a.createElement("div",null,p.a.createElement("button",{id:"openNav",className:"w3-button w3-xlarge",onClick:this.w3_open},"☰"),p.a.createElement("div",{className:"col-md-12 col-lg-12 left_right"},p.a.createElement("div",{className:"container"},p.a.createElement("div",{className:"row"},p.a.createElement("div",{className:"col-md-12 col-sm-12 col-lg-12 topnav"},p.a.createElement("span",{id:"editable"},p.a.createElement("h1",{className:"video-title-edit",contentEditable:"true",onMouseOut:this.handleSave,placeholder:"Enter Title"},"Video Title")),p.a.createElement("div",{className:"d-flex topnav-right"},p.a.createElement("div",{id:"video-timer-wrapper"},p.a.createElement(D.CountdownCircleTimer,{key:this.state.videoKey,isPlaying:this.state.isVideoClicked,duration:20,colors:[["#004777",.33],["#F7B801",.33],["#A30000"]],onComplete:function(){return[!0,0]},strokeWidth:5,size:50},this.renderVideoTime)),p.a.createElement("button",{onClick:this.videoRequest,id:"create_video"},"Create Video"),p.a.createElement("button",{className:"btn btn-success",onClick:this.saveVideo,id:"save_video"},"Save Video"))),p.a.createElement("div",{className:"col-md-6 col-lg-6 left_side"},p.a.createElement("h4",null,"Select Actor"),p.a.createElement("div",{className:"actor-list"},r.map((function(t,a){return p.a.createElement("p",{className:"actor",id:"actor-select",key:t.name,onClick:function(){return e.selectActor(t.actorId,t.gender)}},p.a.createElement("input",{type:"radio",id:a,name:"radio"}),p.a.createElement("label",{for:a},p.a.createElement("img",{id:"actor-image",src:t.thumbnail,style:{height:"100px"}})),t.name)}))),p.a.createElement("div",{className:"actor-select",style:{display:"flex",flexDirection:"column"}},p.a.createElement("h4",{id:"voice_list"},"Select Voice"),p.a.createElement(A.a,{defaultValue:this.state.voiceArray[0],label:"Single select",options:this.state.voiceArray,value:this.state.selectedElement,onChange:this.handleCheck}),p.a.createElement("h4",{id:"voice_speed"},"Speed"),p.a.createElement("input",{type:"number",step:"0.05",min:"0.5",max:"1.5",className:"form-control",value:this.state.voiceSpeed,onChange:this.handleVoiceSpeedChange})),p.a.createElement("div",{className:"script-input"},p.a.createElement("h4",null,"Script"),p.a.createElement("textarea",{className:"text-area",placeholder:"Insert script here",rows:"3",cols:"50",value:this.state.textVal,onChange:this.handleChange})),p.a.createElement("div",{className:"audio-listen"},p.a.createElement("button",{type:"button",className:"btn btn-secondary listen-button",onClick:this.audioRequest},"Listen"),p.a.createElement(_,{className:"audio-player",audioUrl:this.state.audioUrl}),p.a.createElement("div",{id:"audio-timer-wrapper"},p.a.createElement(D.CountdownCircleTimer,{key:this.state.audioKey,isPlaying:this.state.isAudioClicked,duration:10,colors:[["#004777",.33],["#F7B801",.33],["#A30000"]],onComplete:function(){return[!0,0]},strokeWidth:6,size:55},this.renderAudioTime)))),p.a.createElement("div",{className:"col-md-6 col-lg-6 right_side"},p.a.createElement(g,{videoUrl:this.state.videoUrl}))))))}}]),a}(f.Component);Object(C.b)(C.a,w.a,w.b),V.propTypes={history:O.a.object,user:O.a.object};var k=Object(P.g)(Object(U.a)(V)),F=a(570);a(787);var G=function(e){s()(a,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=E()(e);if(t){var r=E()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return u()(this,a)}}(a);function a(e){var n;return r()(this,a),(n=t.call(this,e)).state={loading:!0,actors:[],voices:[],user:n.props.user},n}return i()(a,[{key:"componentDidMount",value:function(){var e=this,t={headers:{Authorization:this.props.user.get("authToken")}};N.a.get("/api/v1.0/actor").then((function(t){var a=t.data;a&&e.setState({actors:a})})),N.a.get("https://api.buildar.live:8008/audio",t).then((function(t){var a=t.data;a&&e.setState({loading:!1,voices:a})}))}},{key:"render",value:function(){if(this.state.loading)return p.a.createElement("div",null,"Loading..");var e=this.state,t=e.actors,a=e.voices;return p.a.createElement("div",null,p.a.createElement(F.a,null),p.a.createElement("div",{id:"main"},p.a.createElement(k,{data:{actors:t,voices:a}})))}}]),a}(f.Component);Object(C.b)(C.a,w.a,w.b),G.propTypes={history:O.a.object,user:O.a.object},t.default=Object(P.g)(Object(U.a)(G))}}]);