(self.webpackChunkgames_ui=self.webpackChunkgames_ui||[]).push([[57],{9057:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>S});var n=o(7294),r=o(8587),a=o(5671),c=o(3144),s=o(7326),l=o(136),i=o(6215),u=o(1120),d=o(4942),m=o(3727),f=o(7814),p=o(8077),g=o(4858),h=o(6640),b=(o(5240),o(6486));var y=function(e){(0,l.Z)(m,e);var t,o,r=(t=m,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.Z)(t);if(o){var r=(0,u.Z)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,i.Z)(this,e)});function m(e){var t;return(0,a.Z)(this,m),t=r.call(this),(0,d.Z)((0,s.Z)(t),"setSelectedTabIndex",(function(e){t.setState({selectedTabIndex:e})})),t.state={selectedTabIndex:e.defaultTabIndex},t}return(0,c.Z)(m,[{key:"getHeader",value:function(){var e=this;return n.createElement("div",{className:"tab-modal-header"},this.props.tabNames.map((function(t,o){return n.createElement("button",{key:o,disabled:e.state.selectedTabIndex==o,onClick:function(){return e.setSelectedTabIndex(o)}},t)})))}},{key:"getBody",value:function(){var e=this.props.tabs[this.state.selectedTabIndex];return b.isFunction(e)?e():e}},{key:"render",value:function(){return n.createElement(h.Z,{show:this.props.show,onClose:this.props.onClose,header:this.getHeader(),body:this.getBody()})}}]),m}(n.PureComponent),x=o(9755),v=o(6486);const k=function(e){(0,l.Z)(m,e);var t,o,r=(t=m,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.Z)(t);if(o){var r=(0,u.Z)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,i.Z)(this,e)});function m(){var e;return(0,a.Z)(this,m),e=r.call(this),(0,d.Z)((0,s.Z)(e),"createRoom",(function(t){t.preventDefault();var o=e.props.selectedGame.gameName;g.Z.createRoom(x("#roomName").val(),o).then((function(t){e.props.goTo("/game/".concat(o,"/").concat(t._id))})).catch((function(e){return p.Am.error(e.message,{toastId:"CANT_CREATE_ROOM"})}))})),(0,d.Z)((0,s.Z)(e),"renderCreateRoom",(function(){return n.createElement("form",{onSubmit:e.createRoom,autoComplete:"off",className:"sg-form"},n.createElement("label",{htmlFor:"roomName"},"Room Name"),n.createElement("input",{type:"text",id:"roomName",required:!0,placeholder:"Eg : Gaming Guys"}),n.createElement("button",{type:"submit"},"Create"))})),(0,d.Z)((0,s.Z)(e),"joinRoom",(function(t){t.preventDefault();var o=x("#roomID").val(),n=e.props.selectedGame.gameName;g.Z.joinRoom(n,o).then((function(t){e.props.goTo("/game/".concat(n,"/").concat(o))})).catch((function(e){return p.Am.error(e.message,{toastId:"CANT_JOIN_ROOM"})}))})),(0,d.Z)((0,s.Z)(e),"renderJoinRoom",(function(){return n.createElement("form",{onSubmit:e.joinRoom,autoComplete:"off",className:"sg-form"},n.createElement("label",{htmlFor:"roomID"},"Room ID"),n.createElement("input",{type:"text",id:"roomID",required:!0,placeholder:"Eg : 123412341234"}),n.createElement("button",{type:"submit"},"Join"))})),e.tabNames=["Create","Join"],e}return(0,c.Z)(m,[{key:"render",value:function(){return n.createElement(y,{show:!v.isEmpty(this.props.selectedGame),onClose:this.props.onClose,tabNames:this.tabNames,defaultTabIndex:0,tabs:[this.renderCreateRoom,this.renderJoinRoom]})}}]),m}(n.PureComponent);o(6301);var w="/games/assets/images/",Z=[{name:"Uno",backgroundImage:w+"uno.png",gameName:"uno",style:{height:"150px",width:"200px"}},{name:"Donkey / Ass",backgroundImage:w+"ass.png",gameName:"ass",style:{height:"150px",width:"200px"}},{name:"Least Count / Show",backgroundImage:w+"ass.png",gameName:"leastcount",style:{height:"150px",width:"200px"}},{name:"Othello",backgroundImage:w+"othello.png",gameName:"othello",style:{height:"200px",width:"200px"}}];const E=function(e){(0,l.Z)(p,e);var t,o,r=(t=p,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.Z)(t);if(o){var r=(0,u.Z)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,i.Z)(this,e)});function p(){var e;(0,a.Z)(this,p);for(var t=arguments.length,o=new Array(t),c=0;c<t;c++)o[c]=arguments[c];return e=r.call.apply(r,[this].concat(o)),(0,d.Z)((0,s.Z)(e),"state",{selectedGame:null}),(0,d.Z)((0,s.Z)(e),"goTo",(function(t){e.props.history.push(t)})),(0,d.Z)((0,s.Z)(e),"setSelectedGame",(function(t){e.setState({selectedGame:t})})),(0,d.Z)((0,s.Z)(e),"getGameCard",(function(t,o){return n.createElement("button",{key:o,className:"sg-game-card",onClick:function(){return e.setSelectedGame(t)}},n.createElement("img",{src:t.backgroundImage,className:"game-img",style:t.style}),n.createElement("p",{className:"sg-game-card-footer"},n.createElement("b",null,t.name)))})),e}return(0,c.Z)(p,[{key:"getGames",value:function(){return n.createElement("div",{className:"games-body"},Z.map(this.getGameCard))}},{key:"getHeader",value:function(){return n.createElement("div",null,n.createElement(m.rU,{to:"/profile"},n.createElement("button",{className:"profile-btn"},n.createElement(f.G,{style:{fontSize:"20px"},icon:"user"}))))}},{key:"getRoomModal",value:function(){var e=this;return n.createElement(k,{selectedGame:this.state.selectedGame,goTo:this.goTo,onClose:function(){return e.setSelectedGame(null)}})}},{key:"render",value:function(){return n.createElement("div",{className:"home-view"},this.getHeader(),this.getGames(),this.getRoomModal())}}]),p}(n.PureComponent);var N=o(8216),R=o(3758),C=(o(2119),o(7970));var T=function(e){(0,l.Z)(m,e);var t,o,r=(t=m,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.Z)(t);if(o){var r=(0,u.Z)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,i.Z)(this,e)});function m(){var e;(0,a.Z)(this,m);for(var t=arguments.length,o=new Array(t),c=0;c<t;c++)o[c]=arguments[c];return e=r.call.apply(r,[this].concat(o)),(0,d.Z)((0,s.Z)(e),"state",{showTokenFlag:!1}),(0,d.Z)((0,s.Z)(e),"gotoHome",(function(){e.props.history.replace("/")})),(0,d.Z)((0,s.Z)(e),"toggleShowTokenFLag",(function(){e.setState({showTokenFlag:!e.state.showTokenFlag})})),(0,d.Z)((0,s.Z)(e),"copyToken",(function(){navigator.clipboard.writeText(C.getEncodedPlayerToken()),p.Am.info("Token copied successfully")})),(0,d.Z)((0,s.Z)(e),"getTokenView",(function(){return e.state.showTokenFlag&&n.createElement("div",{className:"player-token-card flex-column"},n.createElement("div",{className:"player-token-label"},"You can copy the below token and use it to token login from other devices."),n.createElement("div",{className:"player-token"},C.getEncodedPlayerToken()),n.createElement("button",{className:"copy-token-btn",onClick:e.copyToken},"Copy"))})),(0,d.Z)((0,s.Z)(e),"getShowTokenBtn",(function(){return n.createElement("button",{className:"show-token-btn","data-show":e.state.showTokenFlag,onClick:e.toggleShowTokenFLag},e.state.showTokenFlag?"Hide":"Show"," token")})),(0,d.Z)((0,s.Z)(e),"signout",(function(){(0,R.i)(null)})),e}return(0,c.Z)(m,[{key:"render",value:function(){var e=this.props.player;return n.createElement("div",{className:"profile-view"},n.createElement("div",{className:"profile-card"},n.createElement(f.G,{icon:"user",style:{fontSize:"50px"}}),n.createElement("h5",{className:"card-title text-center text-truncate"},e.name)),n.createElement("div",{className:"flex-column"},n.createElement("button",{className:"home-btn",onClick:this.gotoHome},"Home"),this.getTokenView(),this.getShowTokenBtn(),n.createElement("button",{className:"signout-btn",onClick:this.signout},"Sign-out")))}}]),m}(n.PureComponent),I=[{path:"/profile",component:(0,N.$j)((function(e){return e}))(T)},{path:"/",component:E}];function S(){return n.createElement(r.rs,null,I.map((function(e,t){return n.createElement(r.AW,{path:e.path,key:t,component:e.component})})),n.createElement(r.l_,{to:"/"}))}},4858:(e,t,o)=>{"use strict";o.d(t,{Z:()=>c});var n=o(5671),r=o(3144),a=o(6431),c=function(){function e(){(0,n.Z)(this,e)}return(0,r.Z)(e,null,[{key:"createRoom",value:function(e,t){return new Promise((function(o,n){a.Z.post("game/create",{gameName:t,roomName:e}).then((function(e){return o(e)})).catch((function(e){return n(e)}))}))}},{key:"joinRoom",value:function(e,t){return new Promise((function(o,n){a.Z.post("game/".concat(t,"/join"),{gameName:e}).then((function(e){return o(e)})).catch((function(e){return n(e)}))}))}}]),e}()},6640:(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});var n=o(5671),r=o(3144),a=o(136),c=o(6215),s=o(1120),l=o(7294);o(4349);var i=function(e){(0,a.Z)(u,e);var t,o,i=(t=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,s.Z)(t);if(o){var r=(0,s.Z)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function u(){return(0,n.Z)(this,u),i.apply(this,arguments)}return(0,r.Z)(u,[{key:"getCloseButton",value:function(e){return l.createElement("button",{className:"sg-modal-close-btn opacity-".concat(e?1:0),onClick:this.props.onClose},"×")}},{key:"render",value:function(){var e=this.props,t=e.header,o=e.body,n=e.show,r=e.hideClose;return l.createElement("div",{className:"sg-modal","data-show":n},l.createElement("div",{className:"sg-modal-content-outer"},l.createElement("div",{className:"sg-modal-content"},l.createElement("div",{className:"sg-modal-header"},this.getCloseButton(!1),t,this.getCloseButton(!r)),l.createElement("div",{className:"sg-modal-body"},o))))}}]),u}(l.PureComponent)},4880:(e,t,o)=>{(t=o(3645)(!1)).push([e.id,".home-view{padding:20px}.profile-btn{border-radius:100%;height:35px;width:35px;background:#3a0455;box-shadow:0 0 5px #fff;color:#fff}.games-body{display:flex;flex-wrap:wrap;margin:10px 0}.games-body .sg-game-card{margin:10px;padding:5px;border-radius:10px;background:#3a0455;box-shadow:0 0 5px #fff;color:#fff}.games-body .sg-game-card .sg-game-card-footer{margin:5px 0}",""]),e.exports=t},5220:(e,t,o)=>{(t=o(3645)(!1)).push([e.id,".sg-modal{position:fixed;z-index:-1;opacity:0;transition:z-index .5s,opacity .6s;top:0;left:0;height:100%;width:100%;background-color:rgba(0,0,0,.5)}.sg-modal .sg-modal-content-outer{height:100%;width:100%;overflow:auto;display:flex;padding:5px}.sg-modal .sg-modal-content{margin:auto;background:#3a0455;border-radius:10px;box-shadow:0 0 5px #fff}.sg-modal .sg-modal-content .sg-modal-header{position:relative;padding:5px;border-bottom:1px solid #fff;color:#fff;text-align:center;display:flex}.sg-modal .sg-modal-content .sg-modal-header .sg-modal-close-btn{padding:0;height:20px;width:20px;background:#da5454;font-size:12px;border-radius:100%;color:#fff;text-align:center;margin:auto}.sg-modal .sg-modal-content .sg-modal-body{padding:10px}.sg-modal[data-show=true]{z-index:100;opacity:1}",""]),e.exports=t},9266:(e,t,o)=>{(t=o(3645)(!1)).push([e.id,".tab-modal-header{flex-shrink:0;display:flex;width:200px;margin:0 30px}.tab-modal-header button{width:50%;color:#fff;background:transparent;box-shadow:0 0 3px #fff}.tab-modal-header button:disabled{opacity:.5}.tab-modal-header button:first-child{border-top-left-radius:5px;border-bottom-left-radius:5px}.tab-modal-header button:last-child{border-top-right-radius:5px;border-bottom-right-radius:5px}",""]),e.exports=t},1013:(e,t,o)=>{(t=o(3645)(!1)).push([e.id,".profile-view{display:flex;flex-direction:column;padding:20px}.profile-view .profile-card{margin:10px auto;box-shadow:0 0 5px #fff;color:#fff;text-align:center;padding:5px 20px;border-radius:5px}.profile-view .profile-card>*{margin:5px 0}.profile-view .player-token-card{background:gray;border-radius:10px;padding:5px 5px 0px;max-width:300px;margin:5px auto}.profile-view .player-token-label{padding:5px;text-align:center;color:#f3c704;font-size:small}.profile-view .player-token{overflow-wrap:anywhere;background:#1d1e22;color:#687c97;padding:9px;border-radius:10px;font-size:small}.profile-view .home-btn,.profile-view .show-token-btn,.profile-view .copy-token-btn,.profile-view .signout-btn{border-radius:5px;padding:5px 10px;margin:10px auto;color:#fff}.profile-view .home-btn,.profile-view .show-token-btn{background:#1976d2}.profile-view .copy-token-btn{background:#f3c704}.profile-view .signout-btn{background:#da5454}",""]),e.exports=t},6301:(e,t,o)=>{var n=o(3379),r=o(4880);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.id,r,""]]);n(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}},4349:(e,t,o)=>{var n=o(3379),r=o(5220);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.id,r,""]]);n(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}},5240:(e,t,o)=>{var n=o(3379),r=o(9266);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.id,r,""]]);n(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}},2119:(e,t,o)=>{var n=o(3379),r=o(1013);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.id,r,""]]);n(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}}}]);